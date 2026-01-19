import { motion } from 'framer-motion'

const FooterBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/90"></div>
      
      {/* Animated geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={`footer-pattern-${index}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 20 + index * 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 },
              rotate: { duration: 30 + index * 5, repeat: Infinity, ease: 'linear', delay: index * 2 },
              initial: { duration: 1, delay: index * 0.2 },
            }}
            className="absolute rounded-lg border-2 border-primary-500/20"
            style={{
              width: 100 + index * 30,
              height: 100 + index * 30,
              left: `${15 + index * 15}%`,
              top: `${20 + index * 12}%`,
              transform: 'rotate(45deg)',
            }}
          />
        ))}
      </div>

      {/* Floating light particles */}
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={`footer-light-${index}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: [0, -100, 0],
            x: [0, Math.sin(index) * 50, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: 10 + Math.random() * 8, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 3 },
            x: { duration: 8 + Math.random() * 6, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 },
            scale: { duration: 6 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 },
            initial: { duration: 0.6, delay: index * 0.1 },
          }}
          className="absolute rounded-full bg-primary-400/20 blur-sm"
          style={{
            width: 15 + Math.random() * 10,
            height: 15 + Math.random() * 10,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Wave pattern at top of footer */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="rgba(51, 78, 104, 0.1)"
          />
        </motion.svg>
      </div>
    </div>
  )
}

export default FooterBackground
