import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const BackgroundMotion = ({ variant = 'default' }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Floating shapes with different speeds and sizes
  const shapes = [
    { size: 60, duration: 20, delay: 0, x: '10%', y: '20%', id: 'shape-1' },
    { size: 80, duration: 25, delay: 2, x: '80%', y: '10%', id: 'shape-2' },
    { size: 100, duration: 30, delay: 4, x: '50%', y: '60%', id: 'shape-3' },
    { size: 70, duration: 22, delay: 1, x: '20%', y: '80%', id: 'shape-4' },
    { size: 90, duration: 28, delay: 3, x: '90%', y: '70%', id: 'shape-5' },
    { size: 50, duration: 18, delay: 0.5, x: '70%', y: '40%', id: 'shape-6' },
  ]

  // Floating circles
  const circles = [
    { size: 120, duration: 15, delay: 0, x: '5%', y: '15%', id: 'circle-1' },
    { size: 150, duration: 20, delay: 3, x: '85%', y: '25%', id: 'circle-2' },
    { size: 100, duration: 18, delay: 1.5, x: '60%', y: '75%', id: 'circle-3' },
  ]

  // Gradient orbs
  const orbs = [
    { size: 200, duration: 25, delay: 0, x: '15%', y: '30%', color: 'primary', id: 'orb-1' },
    { size: 180, duration: 30, delay: 5, x: '75%', y: '50%', color: 'primary', id: 'orb-2' },
    { size: 160, duration: 22, delay: 2, x: '40%', y: '80%', color: 'accent', id: 'orb-3' },
  ]

  if (variant === 'minimal') {
    return (
      <AnimatePresence>
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
          >
            {circles.slice(0, 2).map((circle, index) => (
              <motion.div
                key={circle.id}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{
                  opacity: [0.03, 0.05, 0.03],
                  scale: [1, 1.1, 1],
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                }}
                transition={{
                  opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: circle.duration, repeat: Infinity, ease: 'easeInOut', delay: circle.delay },
                  y: { duration: circle.duration, repeat: Infinity, ease: 'easeInOut', delay: circle.delay },
                  x: { duration: circle.duration, repeat: Infinity, ease: 'easeInOut', delay: circle.delay },
                }}
                className="absolute rounded-full"
                style={{
                  width: circle.size,
                  height: circle.size,
                  left: circle.x,
                  top: circle.y,
                  background: 'radial-gradient(circle, #334e68 0%, transparent 70%)',
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  if (variant === 'particles') {
    return (
      <AnimatePresence>
        {mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
          >
            {Array.from({ length: 15 }).map((_, index) => {
              const randomX = Math.random() * 100
              const randomY = Math.random() * 100
              const randomSize = Math.random() * 4 + 2
              const randomDuration = Math.random() * 10 + 10
              const randomDelay = Math.random() * 5

              return (
                <motion.div
                  key={`particle-${index}`}
                  initial={{ opacity: 0, y: randomY + 100, x: randomX }}
                  animate={{
                    opacity: [0, 0.2, 0],
                    y: [randomY + 100, randomY - 100, randomY - 200],
                    x: [randomX, randomX + (Math.random() * 50 - 25), randomX + (Math.random() * 50 - 25)],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: randomDuration,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: randomDelay,
                  }}
                  className="absolute rounded-full bg-primary-400"
                  style={{
                    width: randomSize,
                    height: randomSize,
                    left: `${randomX}%`,
                    top: `${randomY}%`,
                  }}
                />
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  // Product icons/emojis representing what Vintora sells - Crockery & Disposable Products
  const floatingProducts = [
    { icon: '☕', name: 'Paper Cups', size: 50, duration: 18, delay: 0, x: '5%', y: '10%' },
    { icon: '🥣', name: 'Paper Bowls', size: 55, duration: 20, delay: 1.2, x: '15%', y: '50%' },
    { icon: '🍽️', name: 'Paper Plates', size: 60, duration: 22, delay: 2.5, x: '25%', y: '20%' },
    { icon: '📦', name: 'Containers', size: 52, duration: 19, delay: 0.8, x: '35%', y: '60%' },
    { icon: '🥤', name: 'PET Cups', size: 48, duration: 17, delay: 1.8, x: '45%', y: '8%' },
    { icon: '🍴', name: 'Cutlery', size: 45, duration: 21, delay: 3, x: '55%', y: '40%' },
    { icon: '🍱', name: 'Food Containers', size: 58, duration: 23, delay: 3.5, x: '65%', y: '15%' },
    { icon: '🍣', name: 'Sushi Trays', size: 54, duration: 20, delay: 1.5, x: '75%', y: '55%' },
    { icon: '🏷️', name: 'Thermal Labels', size: 47, duration: 18, delay: 1, x: '10%', y: '70%' },
    { icon: '🧾', name: 'Thermal Rolls', size: 51, duration: 21, delay: 2.2, x: '85%', y: '30%' },
    { icon: '🧤', name: 'Gloves', size: 49, duration: 19, delay: 2.8, x: '3%', y: '35%' },
    { icon: '📄', name: 'NCR Paper', size: 46, duration: 22, delay: 4, x: '90%', y: '75%' },
  ]

  // Default variant - balanced motion with AnimatePresence
  return (
    <>
      {/* Other background elements - rendered first so icons appear on top */}
      {mounted && (
        <motion.div
          key="background-motion"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 pointer-events-none overflow-hidden"
          style={{ 
            zIndex: 0,
          }}
        >
          {/* Large gradient orbs with entrance animations */}
          <AnimatePresence>
            {orbs.map((orb, index) => (
              <motion.div
                key={orb.id}
                initial={{ opacity: 0, scale: 0.3, x: orb.x, y: orb.y }}
                animate={{
                  opacity: [0.1, 0.15, 0.1],
                  scale: [1, 1.2, 1],
                  y: [0, -40, 0],
                  x: [0, 30, 0],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: orb.duration, repeat: Infinity, ease: 'easeInOut', delay: orb.delay },
                  y: { duration: orb.duration, repeat: Infinity, ease: 'easeInOut', delay: orb.delay },
                  x: { duration: orb.duration, repeat: Infinity, ease: 'easeInOut', delay: orb.delay },
                  initial: { duration: 1, delay: index * 0.3 },
                }}
                className="absolute rounded-full blur-3xl"
                style={{
                  width: orb.size,
                  height: orb.size,
                  left: orb.x,
                  top: orb.y,
                  background:
                    orb.color === 'primary'
                      ? 'radial-gradient(circle, rgba(51, 78, 104, 0.15) 0%, transparent 70%)'
                      : 'radial-gradient(circle, rgba(106, 125, 152, 0.12) 0%, transparent 70%)',
                }}
              />
            ))}
          </AnimatePresence>

          {/* Floating geometric shapes with staggered entrance */}
          <AnimatePresence>
            {shapes.map((shape, index) => (
              <motion.div
                key={shape.id}
                initial={{ opacity: 0, scale: 0, rotate: 0, x: shape.x, y: shape.y }}
                animate={{
                  opacity: [0.02, 0.06, 0.02],
                  scale: [1, 1.1, 1],
                  y: [0, -50, 0],
                  x: [0, 30, 0],
                  rotate: [45, 60, 45],
                }}
                exit={{ opacity: 0, scale: 0, rotate: 0 }}
                transition={{
                  opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: shape.duration, repeat: Infinity, ease: 'easeInOut', delay: shape.delay },
                  y: { duration: shape.duration, repeat: Infinity, ease: 'easeInOut', delay: shape.delay },
                  x: { duration: shape.duration, repeat: Infinity, ease: 'easeInOut', delay: shape.delay },
                  rotate: { duration: shape.duration, repeat: Infinity, ease: 'easeInOut', delay: shape.delay },
                  initial: { duration: 0.8, delay: index * 0.15, ease: 'easeOut' },
                }}
                className="absolute rounded-lg"
                style={{
                  width: shape.size,
                  height: shape.size,
                  left: shape.x,
                  top: shape.y,
                  background: 'linear-gradient(135deg, #334e68 0%, #486581 100%)',
                }}
              />
            ))}
          </AnimatePresence>

          {/* Subtle floating circles with entrance animations */}
          <AnimatePresence>
            {circles.map((circle, index) => (
              <motion.div
                key={circle.id}
                initial={{ opacity: 0, scale: 0.5, x: circle.x, y: circle.y + 50 }}
                animate={{
                  opacity: [0.01, 0.03, 0.01],
                  scale: [1, 1.15, 1],
                  y: [0, -35, 0],
                  x: [0, 25, 0],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: circle.duration, repeat: Infinity, ease: 'easeInOut', delay: circle.delay },
                  y: { duration: circle.duration, repeat: Infinity, ease: 'easeInOut', delay: circle.delay },
                  x: { duration: circle.duration, repeat: Infinity, ease: 'easeInOut', delay: circle.delay },
                  initial: { duration: 1, delay: index * 0.4, ease: 'easeOut' },
                }}
                className="absolute rounded-full"
                style={{
                  width: circle.size,
                  height: circle.size,
                  left: circle.x,
                  top: circle.y,
                  background: 'radial-gradient(circle, #334e68 0%, transparent 70%)',
                }}
              />
            ))}
          </AnimatePresence>

          {/* Additional floating elements with wave motion */}
          <AnimatePresence>
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={`wave-${index}`}
                initial={{ opacity: 0, scale: 0, y: '100%' }}
                animate={{
                  opacity: [0.02, 0.04, 0.02],
                  scale: [1, 1.2, 1],
                  y: ['100%', '-20%', '100%'],
                  x: [0, Math.sin(index) * 30, 0],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 20 + index * 5, repeat: Infinity, ease: 'easeInOut' },
                  y: { duration: 15 + index * 3, repeat: Infinity, ease: 'easeInOut', delay: index * 2 },
                  x: { duration: 12 + index * 2, repeat: Infinity, ease: 'easeInOut', delay: index * 1.5 },
                  initial: { duration: 1.2, delay: index * 0.3 },
                }}
                className="absolute rounded-full blur-2xl"
                style={{
                  width: 80 + index * 20,
                  height: 80 + index * 20,
                  left: `${20 + index * 20}%`,
                  background: 'radial-gradient(circle, rgba(51, 78, 104, 0.08) 0%, transparent 70%)',
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
      
      {/* Floating Product Icons - Rendered last so they appear above other background elements */}
      {mounted && floatingProducts.map((product, index) => (
        <motion.div
          key={`product-${product.name}-${index}`}
          initial={{ opacity: 0.3, y: 0, scale: 1 }}
          animate={{
            opacity: [0.25, 0.4, 0.25],
            y: [0, -60, 0],
            x: [0, Math.sin(index) * 30, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: product.delay },
            y: { duration: product.duration, repeat: Infinity, ease: 'easeInOut', delay: product.delay },
            x: { duration: product.duration + 3, repeat: Infinity, ease: 'easeInOut', delay: product.delay },
            scale: { duration: product.duration, repeat: Infinity, ease: 'easeInOut', delay: product.delay },
            rotate: { duration: product.duration * 1.8, repeat: Infinity, ease: 'easeInOut', delay: product.delay },
          }}
          className="fixed select-none"
          style={{
            fontSize: `${product.size + 15}px`, // Moderate size (65-75px)
            left: product.x,
            top: product.y,
            color: 'rgba(51, 78, 104, 0.4)', // More subtle, semi-transparent
            filter: 'drop-shadow(0 4px 12px rgba(51, 78, 104, 0.3))',
            textShadow: '0 0 20px rgba(51, 78, 104, 0.2)',
            zIndex: 25, // Above main (z-20) and sections (z-10) but below header (z-50), with pointer-events: none
            willChange: 'transform, opacity',
            pointerEvents: 'none',
            userSelect: 'none',
            mixBlendMode: 'normal',
          }}
          title={product.name}
        >
          {product.icon}
        </motion.div>
      ))}
    </>
  )
}

export default BackgroundMotion
