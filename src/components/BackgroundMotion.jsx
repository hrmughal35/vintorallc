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

  // Elegant geometric patterns for mature, professional look
  const geometricPatterns = [
    { size: 200, duration: 30, delay: 0, x: '10%', y: '15%', rotation: 0, id: 'pattern-1' },
    { size: 250, duration: 35, delay: 5, x: '85%', y: '20%', rotation: 45, id: 'pattern-2' },
    { size: 180, duration: 28, delay: 10, x: '50%', y: '70%', rotation: 90, id: 'pattern-3' },
    { size: 220, duration: 32, delay: 15, x: '20%', y: '80%', rotation: 135, id: 'pattern-4' },
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

          {/* Elegant geometric mesh patterns */}
          <AnimatePresence>
            {geometricPatterns.map((pattern, index) => (
              <motion.div
                key={pattern.id}
                initial={{ opacity: 0, scale: 0.8, rotate: pattern.rotation }}
                animate={{
                  opacity: [0.03, 0.06, 0.03],
                  scale: [1, 1.05, 1],
                  rotate: [pattern.rotation, pattern.rotation + 5, pattern.rotation],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  opacity: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: pattern.delay },
                  scale: { duration: pattern.duration, repeat: Infinity, ease: 'easeInOut', delay: pattern.delay },
                  rotate: { duration: pattern.duration * 2, repeat: Infinity, ease: 'easeInOut', delay: pattern.delay },
                  initial: { duration: 1.5, delay: index * 0.4 },
                }}
                className="absolute"
                style={{
                  width: pattern.size,
                  height: pattern.size,
                  left: pattern.x,
                  top: pattern.y,
                  background: `
                    radial-gradient(circle at 30% 30%, rgba(51, 78, 104, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 70% 70%, rgba(106, 125, 152, 0.06) 0%, transparent 50%),
                    linear-gradient(135deg, rgba(51, 78, 104, 0.04) 0%, transparent 100%)
                  `,
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                }}
              />
            ))}
          </AnimatePresence>

          {/* Subtle grid pattern overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.02 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(51, 78, 104, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(51, 78, 104, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
            }}
          />

          {/* Elegant flowing lines */}
          <AnimatePresence>
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.svg
                key={`line-${index}`}
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: [0.02, 0.04, 0.02],
                  pathLength: [0, 1, 0],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: index * 2 },
                  pathLength: { duration: 20 + index * 5, repeat: Infinity, ease: 'easeInOut', delay: index * 3 },
                }}
                className="absolute"
                style={{
                  left: `${20 + index * 30}%`,
                  top: `${30 + index * 20}%`,
                  width: '40%',
                  height: '40%',
                  zIndex: 1,
                }}
                viewBox="0 0 400 400"
                fill="none"
              >
                <motion.path
                  d={`M ${50 + index * 20} ${100 + index * 30} Q ${150 + index * 30} ${50 + index * 20}, ${250 + index * 20} ${150 + index * 40} T ${350 + index * 10} ${250 + index * 30}`}
                  stroke="rgba(51, 78, 104, 0.15)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </motion.svg>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  )
}

export default BackgroundMotion
