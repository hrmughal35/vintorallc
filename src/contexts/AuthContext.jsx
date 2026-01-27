import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    try {
      const authStatus = typeof window !== 'undefined' ? localStorage.getItem('admin_authenticated') : null
      if (authStatus === 'true') {
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = async (username, password) => {
    // Frontend-only authentication for now
    // In production, this will call the backend API
    if (username === 'admin@vintorallc.com' && password === 'vintora@llc2026') {
      setIsAuthenticated(true)
      try {
        if (typeof window !== 'undefined') {
          localStorage.setItem('admin_authenticated', 'true')
        }
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }
      return { success: true }
    }
    return { success: false, error: 'Invalid credentials' }
  }

  const logout = () => {
    setIsAuthenticated(false)
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('admin_authenticated')
      }
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
