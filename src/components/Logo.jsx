import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Logo = ({ className = '', animated = true, size = 'default', textColor = 'default', useImage = false, imagePath = '/logo.png' }) => {
  const sizeClasses = {
    small: 'text-xl',
    default: 'text-2xl',
    large: 'text-3xl md:text-4xl',
  }

  const iconSizes = {
    small: 20,
    default: 28,
    large: 36,
  }

  const imageSizes = {
    small: 'h-8 w-auto',
    default: 'h-10 w-auto',
    large: 'h-14 md:h-16 w-auto',
  }

  const textColorClasses = {
    default: {
      main: 'text-gray-900',
      primary: 'text-primary-700',
      secondary: 'text-primary-500',
    },
    white: {
      main: 'text-white',
      primary: 'text-white',
      secondary: 'text-primary-200',
    },
  }

  const colors = textColorClasses[textColor] || textColorClasses.default
  const iconSize = iconSizes[size] || iconSizes.default
  const imageSize = imageSizes[size] || imageSizes.default

  const LogoContent = () => {
    // If using image logo
    if (useImage) {
      return (
        <div className={`flex items-center space-x-2 ${className}`}>
          <motion.img
            src={imagePath}
            alt="Vintora LLC Logo"
            className={imageSize}
            animate={animated ? {
              scale: [1, 1.02, 1],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Optional: Keep text with image logo */}
          <div className="flex flex-col" style={{ fontFamily: "'Alegreya Sans', sans-serif" }}>
            <motion.span
              className={`font-bold ${colors.main} ${sizeClasses[size]} flex items-baseline`}
              animate={animated ? {
                opacity: [1, 0.8, 1],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className={colors.primary} style={{ fontSize: size === 'large' ? '2.5rem' : size === 'small' ? '1.25rem' : '1.75rem' }}>V</span>
              <span className={colors.primary} style={{ fontSize: size === 'large' ? '2rem' : size === 'small' ? '1rem' : '1.5rem' }}>INTORA</span>
            </motion.span>
            <motion.span
              className={`${colors.secondary} font-semibold -mt-1`}
              style={{ 
                fontSize: size === 'large' ? '1rem' : size === 'small' ? '0.625rem' : '0.875rem' 
              }}
              animate={animated ? {
                x: [0, 2, 0],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              LLC
            </motion.span>
          </div>
        </div>
      )
    }

    // Default SVG logo
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {/* Animated Icon/Logo */}
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
            width={iconSize}
            height={iconSize}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm"
          >
            {/* Background Circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="url(#gradient1)"
              initial={{ scale: 0.8 }}
              animate={animated ? {
                scale: [1, 1.05, 1],
              } : { scale: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#334e68" />
                <stop offset="100%" stopColor="#486581" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#627d98" />
                <stop offset="100%" stopColor="#829ab1" />
              </linearGradient>
            </defs>

          {/* Letter V - Stylized */}
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
            
            {/* Decorative Elements */}
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

      {/* Text - Alegreya Sans Font */}
      <div className="flex flex-col" style={{ fontFamily: "'Alegreya Sans', sans-serif" }}>
        <motion.span
          className={`font-bold ${colors.main} ${sizeClasses[size]} flex items-baseline`}
          animate={animated ? {
            opacity: [1, 0.8, 1],
          } : {}}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className={colors.primary} style={{ fontSize: size === 'large' ? '2.5rem' : size === 'small' ? '1.25rem' : '1.75rem' }}>V</span>
          <span className={colors.primary} style={{ fontSize: size === 'large' ? '2rem' : size === 'small' ? '1rem' : '1.5rem' }}>INTORA</span>
        </motion.span>
        <motion.span
          className={`${colors.secondary} font-semibold -mt-1`}
          style={{ 
            fontSize: size === 'large' ? '1rem' : size === 'small' ? '0.625rem' : '0.875rem' 
          }}
          animate={animated ? {
            x: [0, 2, 0],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          LLC
        </motion.span>
      </div>
      </div>
    )
  }

  return (
    <Link to="/" className="inline-block">
      <LogoContent />
    </Link>
  )
}

export default Logo
