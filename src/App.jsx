import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AuthProvider } from './contexts/AuthContext'
import PublicLayout from './components/PublicLayout'
import ProtectedRoute from './components/admin/ProtectedRoute'
import AdminLayout from './components/admin/AdminLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import AdminProducts from './pages/admin/Products'
import AdminBlog from './pages/admin/Blog'
import ProductForm from './pages/admin/ProductForm'
import BlogForm from './pages/admin/BlogForm'

// Component to handle redirect from 404.html
function RedirectHandler() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    console.log('RedirectHandler: Current location:', location.pathname)
    
    // If the path is /index.html, redirect to /
    if (location.pathname === '/index.html') {
      console.log('RedirectHandler: Redirecting /index.html to /')
      navigate('/', { replace: true })
      return
    }
    
    // Check if there's a stored redirect path from 404.html
    try {
      const redirectPath = sessionStorage.getItem('redirectPath')
      console.log('RedirectHandler: Stored redirect path:', redirectPath)
      
      if (redirectPath) {
        // Clean up the stored path
        sessionStorage.removeItem('redirectPath')
        
        // Only redirect if we're on the root path
        const currentPath = location.pathname.replace(/\/$/, '') || '/'
        
        console.log('RedirectHandler: Current path:', currentPath)
        
        if (currentPath === '/') {
          console.log('RedirectHandler: Navigating to:', redirectPath)
          // Navigate to the stored path
          navigate(redirectPath, { replace: true })
        }
      }
    } catch (e) {
      console.error('Error handling redirect:', e)
    }
  }, [navigate, location]) // Include dependencies

  return null
}

function App() {
  console.log('App component rendering')
  
  try {
    return (
      <AuthProvider>
        <Router basename="/vintorallc">
          <RedirectHandler />
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/*" element={
              <ProtectedRoute>
                <AdminLayout>
                  <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="products" element={<AdminProducts />} />
                    <Route path="products/new" element={<ProductForm />} />
                    <Route path="products/edit/:categoryId/:subcategoryId/:productId" element={<ProductForm />} />
                    <Route path="blog" element={<AdminBlog />} />
                    <Route path="blog/new" element={<BlogForm />} />
                    <Route path="blog/edit/:id" element={<BlogForm />} />
                  </Routes>
                </AdminLayout>
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    )
  } catch (error) {
    console.error('Error in App component:', error)
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Error in App Component</h1>
        <pre>{error.toString()}</pre>
        <pre>{error.stack}</pre>
      </div>
    )
  }
}

export default App
