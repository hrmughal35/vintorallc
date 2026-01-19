import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated Background Elements */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden"
        >
          {/* Large floating orbs with entrance animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: '10%', y: '20%' }}
            animate={{
              opacity: [0.08, 0.12, 0.08],
              scale: [1, 1.2, 1],
              y: [0, -50, 0],
              x: [0, 40, 0],
            }}
            transition={{
              opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
              y: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
              x: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
              initial: { duration: 1.5, ease: 'easeOut' },
            }}
            className="absolute rounded-full blur-3xl"
            style={{
              width: 400,
              height: 400,
              left: '10%',
              top: '20%',
              background: 'radial-gradient(circle, rgba(51, 78, 104, 0.1) 0%, transparent 70%)',
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: '90%', y: '80%' }}
            animate={{
              opacity: [0.06, 0.1, 0.06],
              scale: [1, 1.15, 1],
              y: [0, 50, 0],
              x: [0, -40, 0],
            }}
            transition={{
              opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 },
              y: { duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 },
              x: { duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 },
              initial: { duration: 1.5, delay: 0.5, ease: 'easeOut' },
            }}
            className="absolute rounded-full blur-3xl"
            style={{
              width: 350,
              height: 350,
              right: '10%',
              bottom: '20%',
              background: 'radial-gradient(circle, rgba(72, 101, 129, 0.08) 0%, transparent 70%)',
            }}
          />
          
          {/* Floating geometric shapes with staggered entrance */}
          <AnimatePresence>
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={`hero-shape-${i}`}
                initial={{ opacity: 0, scale: 0, rotate: 0, x: `${15 + i * 20}%`, y: `${30 + i * 15}%` }}
                animate={{
                  opacity: [0.02, 0.05, 0.02],
                  scale: [1, 1.15, 1],
                  y: [0, -60, 0],
                  x: [0, 40, 0],
                  rotate: [45, 60, 45],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 15 + i * 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 },
                  y: { duration: 15 + i * 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 },
                  x: { duration: 15 + i * 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 },
                  rotate: { duration: 15 + i * 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 },
                  initial: { duration: 0.8, delay: i * 0.2, ease: 'easeOut' },
                }}
                className="absolute rounded-lg"
                style={{
                  width: 60 + i * 20,
                  height: 60 + i * 20,
                  left: `${15 + i * 20}%`,
                  top: `${30 + i * 15}%`,
                  background: 'linear-gradient(135deg, #334e68 0%, #486581 100%)',
                }}
              />
            ))}
          </AnimatePresence>

          {/* Additional wave-like motion elements */}
          <AnimatePresence>
            {[1, 2].map((i) => (
              <motion.div
                key={`hero-wave-${i}`}
                initial={{ opacity: 0, scale: 0, y: '100%' }}
                animate={{
                  opacity: [0.03, 0.06, 0.03],
                  scale: [1, 1.3, 1],
                  y: ['100%', '-30%', '100%'],
                  x: [0, Math.sin(i) * 50, 0],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  opacity: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                  scale: { duration: 18 + i * 4, repeat: Infinity, ease: 'easeInOut' },
                  y: { duration: 12 + i * 3, repeat: Infinity, ease: 'easeInOut', delay: i * 3 },
                  x: { duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 2 },
                  initial: { duration: 1.2, delay: i * 0.4 },
                }}
                className="absolute rounded-full blur-2xl"
                style={{
                  width: 120 + i * 40,
                  height: 120 + i * 40,
                  left: `${25 + i * 30}%`,
                  background: 'radial-gradient(circle, rgba(51, 78, 104, 0.1) 0%, transparent 70%)',
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
      
      {/* Wave Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-32 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-gray-200"
          />
        </svg>
        <svg
          className="w-full h-24 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-gray-300"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="inline-block bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-primary-100 shadow-xl mb-6">
              <span className="text-7xl">🏢</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                VINTORA
              </span>
              <span className="text-primary-500 text-5xl md:text-7xl ml-3">LLC</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-800 mb-6 leading-relaxed font-semibold"
          >
            Professional Supplier of High-Quality Disposable Products
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Serving <span className="font-bold text-primary-700">30+ countries</span> with excellence, reliability, and commitment to quality.
            Your trusted partner for paper cups, containers, cutlery, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-bold rounded-xl hover:from-primary-800 hover:to-primary-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-lg"
            >
              Explore Products
              <ArrowRight className="ml-2" size={22} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary-700 font-bold rounded-xl border-2 border-primary-700 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
