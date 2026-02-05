import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'vintora_site_theme'

export const THEMES = [
  { id: 'vintora', name: 'Vintora (Default)', description: 'Blue-slate professional look' },
  { id: 'warm', name: 'Warm', description: 'Amber and cream, soft and rounded' },
  { id: 'simple', name: 'Simple', description: 'Minimal, no animations—professional and basic' },
]

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'vintora'
    const saved = window.localStorage.getItem(STORAGE_KEY) || 'vintora'
    return saved === 'minimal' ? 'vintora' : saved
  })

  useEffect(() => {
    if (theme === 'minimal') {
      setThemeState('vintora')
      return
    }
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch (e) {
      // ignore
    }
  }, [theme])

  const setTheme = (themeId) => {
    if (THEMES.some((t) => t.id === themeId)) setThemeState(themeId)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
