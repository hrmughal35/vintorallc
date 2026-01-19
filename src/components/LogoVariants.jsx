import { motion } from 'framer-motion'

// Alternative logo designs for different use cases

// Full Logo with Tagline
export const LogoWithTagline = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center space-y-3 ${className}`}>
      <Logo size="large" animated={true} />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-sm text-gray-600 font-medium"
      >
        Professional Disposable Products Supplier
      </motion.p>
    </div>
  )
}

// Icon Only Logo
export const LogoIcon = ({ size = 60, animated = true }) => {
  return (
    <motion.div
      className="relative"
      animate={animated ? {
        rotate: [0, 5, -5, 0],
      } : {}}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <defs>
          <linearGradient id="iconGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334e68" />
            <stop offset="100%" stopColor="#486581" />
          </linearGradient>
          <linearGradient id="iconGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#627d98" />
            <stop offset="100%" stopColor="#829ab1" />
          </linearGradient>
        </defs>

        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#iconGradient1)"
          animate={animated ? {
            scale: [1, 1.05, 1],
          } : { scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.path
          d="M30 30 L50 70 L70 30"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={animated ? {
            pathLength: [0, 1, 1],
          } : { pathLength: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        />

        <motion.circle
          cx="30"
          cy="25"
          r="3"
          fill="white"
          animate={animated ? {
            opacity: [0.5, 1, 0.5],
          } : { opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.circle
          cx="70"
          cy="25"
          r="3"
          fill="white"
          animate={animated ? {
            opacity: [0.5, 1, 0.5],
          } : { opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
            ease: "easeInOut"
          }}
        />
      </svg>
    </motion.div>
  )
}

// Minimal Text Logo
export const LogoText = ({ className = '', size = 'default' }) => {
  const sizeClasses = {
    small: 'text-lg',
    default: 'text-2xl',
    large: 'text-4xl md:text-5xl',
  }

  return (
    <motion.div
      className={`flex items-center space-x-2 ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <span className={`font-bold ${sizeClasses[size]}`}>
        <span className="text-primary-700">VINTORA</span>
        <span className="text-primary-500 text-sm ml-1">LLC</span>
      </span>
    </motion.div>
  )
}

// Import Logo component
import Logo from './Logo'
