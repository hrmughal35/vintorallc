import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Lock, User, AlertCircle, LogIn, Sparkles, Shield, Zap } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import Logo from '../../components/Logo'

const Login = () => {
  console.log('Login component rendering')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const result = await login(username, password)
      if (result.success) {
        navigate('/admin/dashboard')
      } else {
        setError(result.error || 'Invalid credentials')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // Animated floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))

  // Floating geometric shapes
  const shapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    duration: Math.random() * 15 + 15,
    delay: Math.random() * 3,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f1419] to-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary-500/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute border border-primary-500/10"
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              rotate: shape.rotation,
            }}
            animate={{
              rotate: [shape.rotation, shape.rotation + 360],
              y: [0, -50, 0],
              x: [0, 30, 0],
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: shape.delay,
            }}
          >
            {shape.id % 3 === 0 ? (
              <div className="w-full h-full border-2 border-primary-500/20 rounded-lg"></div>
            ) : shape.id % 3 === 1 ? (
              <div className="w-full h-full border-2 border-primary-500/20 rounded-full"></div>
            ) : (
              <div className="w-full h-full border-2 border-primary-500/20" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Glowing Border Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 rounded-3xl blur opacity-30 animate-pulse"></div>
        
        <div className="relative bg-gradient-to-br from-[#1a1a1a]/95 via-[#1f1f1f]/95 to-[#1a1a1a]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-primary-700/30 p-8 md:p-10">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #334e68 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }}
              animate={{
                x: [0, 40, 0],
                y: [0, 40, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Logo Section with Animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8"
            >
              <motion.div
                className="inline-block mb-4"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Logo size="default" animated={true} />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl font-bold bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent mb-2"
              >
                Login
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-400 text-sm flex items-center justify-center gap-2"
              >
                <Shield size={16} className="text-primary-400" />
                Sign in to access admin panel
              </motion.p>
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 backdrop-blur-sm"
              >
                <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-300">{error}</p>
              </motion.div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label htmlFor="username" className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <User size={16} className="text-primary-400" />
                  Username
                </label>
                <div className="relative group">
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 pl-12 bg-[#0f0f0f]/80 border-2 border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all group-hover:border-primary-600/50"
                    placeholder="Enter your username"
                  />
                  <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400/50 group-hover:text-primary-400 transition-colors" size={18} />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <Lock size={16} className="text-primary-400" />
                  Password
                </label>
                <div className="relative group">
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 pl-12 bg-[#0f0f0f]/80 border-2 border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all group-hover:border-primary-600/50"
                    placeholder="Enter your password"
                  />
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-400/50 group-hover:text-primary-400 transition-colors" size={18} />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(51, 78, 104, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    {isLoading ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Signing in...
                      </>
                    ) : (
                      <>
                        <Zap size={20} className="group-hover:rotate-12 transition-transform" />
                        Sign in
                        <LogIn size={18} />
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.div>
            </form>

            {/* Demo Credentials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 p-4 bg-gradient-to-r from-[#0f0f0f]/60 to-[#1a1a1a]/60 rounded-xl border border-primary-700/20 backdrop-blur-sm"
            >
              <p className="text-xs text-gray-400 font-medium mb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-primary-400" />
                Demo Credentials
              </p>
              <div className="space-y-1.5">
                <p className="text-xs text-gray-500">
                  Username: <span className="font-mono font-semibold text-primary-400">admin</span>
                </p>
                <p className="text-xs text-gray-500">
                  Password: <span className="font-mono font-semibold text-primary-400">admin123</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
