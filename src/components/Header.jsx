import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { useTheme } from '../contexts/ThemeContext'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/products', label: 'Products' },
  { path: '/catalogues', label: 'Catalogues' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact Us' },
]

const Header = () => {
  const { theme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isWarm = theme === 'warm'
  const isSimple = theme === 'simple'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isSimple) {
    return (
      <SimpleHeader
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        location={location}
      />
    )
  }

  if (isWarm) {
    return (
      <WarmHeader
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        location={location}
      />
    )
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md border-b border-gray-200"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/" className="flex items-center">
              <Logo size="default" animated={true} textColor="default" />
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path
              return (
                <motion.div key={link.path} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="relative">
                  <Link to={link.path} className="relative group">
                    <div className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 relative ${isActive ? 'text-gray-800 bg-gray-100' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'}`}>
                      {isActive && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-700" layoutId="activeIndicator" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                      {link.label}
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
          <motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="md:hidden p-2 rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-100" aria-label="Toggle menu">
            <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</motion.div>
          </motion.button>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="md:hidden overflow-hidden bg-white border-t border-gray-200 shadow-lg relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div key={link.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                    <Link to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive ? 'bg-gray-100 text-gray-800' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}`}>{link.label}</Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function WarmHeader({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen, location }) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-amber-50/95 backdrop-blur-md border-b border-amber-200/60"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center shrink-0">
            <Logo size="default" animated={true} textColor="default" />
          </Link>
          {/* Warm: nav in a centered pill bar */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-1 p-1.5 rounded-full bg-amber-100/80 border border-amber-200/80 shadow-sm">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isActive ? 'bg-amber-600 text-white shadow-md' : 'text-amber-900/80 hover:bg-amber-200/60 hover:text-amber-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="w-24 md:w-32 flex justify-end">
            <motion.button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="md:hidden p-2.5 rounded-full bg-amber-100 text-amber-900 hover:bg-amber-200/80 transition-colors" aria-label="Toggle menu">
              <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>{isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}</motion.div>
            </motion.button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="md:hidden overflow-hidden bg-amber-50 border-t border-amber-200/60">
            <div className="container mx-auto px-4 py-5 space-y-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path
                return (
                  <motion.div key={link.path} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }}>
                    <Link to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all ${isActive ? 'bg-amber-600 text-white' : 'text-amber-900/90 hover:bg-amber-100'}`}>{link.label}</Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function SimpleHeader({ isMobileMenuOpen, setIsMobileMenuOpen, location }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center">
            <Logo size="default" animated={false} textColor="default" />
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium ${isActive ? 'text-gray-900 bg-gray-100' : 'text-gray-600'}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 text-sm font-medium ${isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600'}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
