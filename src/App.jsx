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
    // Check if there's a stored redirect path from 404.html
    try {
      const redirectPath = sessionStorage.getItem('redirectPath')
      if (redirectPath) {
        // Clean up the stored path
        sessionStorage.removeItem('redirectPath')
        
        // Only redirect if we're on the root path
        const currentPath = location.pathname.replace(/\/$/, '') || '/'
        const basePath = '/vintorallc'
        
        if (currentPath === basePath || currentPath === basePath + '/') {
          // Navigate to the stored path
          navigate(redirectPath, { replace: true })
        }
      }
    } catch (e) {
      console.error('Error handling redirect:', e)
    }
  }, []) // Empty dependency array - only run once on mount

  return null
}

function App() {
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
}

export default App
