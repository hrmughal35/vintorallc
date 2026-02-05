import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

const defaultTransition = { duration: 0.8 }
const warmTransition = { duration: 1.2, ease: [0.4, 0, 0.2, 1] }

const Hero = () => {
  const { theme } = useTheme()
  const isWarm = theme === 'warm'
  const isSimple = theme === 'simple'

  if (isSimple) return <HeroSimple />
  if (isWarm) return <HeroWarm />
  return <HeroDefault />
}

function HeroDefault() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden"
        >
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
            className="absolute rounded-full blur-3xl theme-hero-orb"
            style={{ width: 400, height: 400, left: '10%', top: '20%' }}
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
            className="absolute rounded-full blur-3xl theme-hero-orb-2"
            style={{ width: 350, height: 350, right: '10%', bottom: '20%' }}
          />
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={`hero-shape-${i}`}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{
                opacity: [0.02, 0.05, 0.02],
                scale: [1, 1.15, 1],
                y: [0, -60, 0],
                x: [0, 40, 0],
                rotate: [45, 60, 45],
              }}
              transition={{
                opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 15 + i * 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 },
                y: { duration: 15 + i * 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 },
                x: { duration: 15 + i * 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 },
                rotate: { duration: 15 + i * 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 },
                initial: { duration: 0.8, delay: i * 0.2, ease: 'easeOut' },
              }}
              className="absolute rounded-lg theme-hero-shape"
              style={{
                width: 60 + i * 20,
                height: 60 + i * 20,
                left: `${15 + i * 20}%`,
                top: `${30 + i * 15}%`,
              }}
            />
          ))}
          {[1, 2].map((i) => (
            <motion.div
              key={`hero-wave-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.03, 0.06, 0.03],
                scale: [1, 1.3, 1],
                y: ['100%', '-30%', '100%'],
                x: [0, Math.sin(i) * 50, 0],
              }}
              transition={{
                opacity: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 18 + i * 4, repeat: Infinity, ease: 'easeInOut' },
                y: { duration: 12 + i * 3, repeat: Infinity, ease: 'easeInOut', delay: i * 3 },
                x: { duration: 10 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 2 },
                initial: { duration: 1.2, delay: i * 0.4 },
              }}
              className="absolute rounded-full blur-2xl theme-hero-orb"
              style={{
                width: 120 + i * 40,
                height: 120 + i * 40,
                left: `${25 + i * 30}%`,
              }}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-32 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill="currentColor" className="text-gray-200" />
        </svg>
        <svg className="w-full h-24 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z" fill="currentColor" className="text-gray-300" />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={defaultTransition} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, type: 'spring' }} className="flex-shrink-0">
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-100 shadow-xl">
                <span className="text-5xl sm:text-6xl" aria-hidden="true">🏢</span>
              </div>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">
              <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">VINTORA</span>
              <span className="text-primary-500 text-4xl sm:text-5xl md:text-7xl ml-2 sm:ml-3">LLC</span>
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...defaultTransition, delay: 0.2 }} className="text-2xl md:text-3xl text-gray-800 mb-6 leading-relaxed font-semibold">
            Professional Supplier of High-Quality Disposable Products
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...defaultTransition, delay: 0.4 }} className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Serving <span className="font-bold text-primary-700">30+ countries</span> with excellence, reliability, and commitment to quality.
            Your trusted partner for paper cups, containers, cutlery, and more.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...defaultTransition, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-bold rounded-xl hover:from-primary-800 hover:to-primary-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-lg">
              Explore Products
              <ArrowRight className="ml-2" size={22} />
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary-700 font-bold rounded-xl border-2 border-primary-700 hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HeroWarm() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden bg-gradient-to-br from-amber-50 via-[#fef7ed] to-orange-50">
      {/* Left: content - left-aligned on desktop */}
      <div className="flex-1 w-full container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 md:pl-8 lg:pl-16 relative z-20">
        <div className="max-w-xl md:max-w-none md:pr-8 text-center md:text-left">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...warmTransition, delay: 0.05 }} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 bg-clip-text text-transparent block">VINTORA</span>
            <span className="text-amber-600 text-4xl md:text-6xl lg:text-7xl">LLC</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...warmTransition, delay: 0.2 }} className="text-xl md:text-2xl text-stone-800 mb-4 leading-relaxed font-semibold">
            Professional Supplier of High-Quality Disposable Products
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...warmTransition, delay: 0.3 }} className="text-base md:text-lg text-stone-600 mb-10 leading-relaxed">
            Serving <span className="font-bold text-amber-700">30+ countries</span>. Your trusted partner for paper cups, containers, cutlery, and more.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...warmTransition, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/products" className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold rounded-2xl hover:from-amber-700 hover:to-amber-600 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-lg">
              Explore Products <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center px-10 py-4 bg-white text-amber-800 font-bold rounded-2xl border-2 border-amber-400 hover:bg-amber-50 transition-all duration-500 text-lg">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Right: building graphic in rounded block - only on desktop */}
      <div className="hidden md:flex flex-1 relative items-center justify-center min-h-[60vh] pr-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-[3rem] bg-gradient-to-br from-amber-200/50 via-amber-100/40 to-orange-200/40 border-2 border-amber-200/60 shadow-2xl flex items-center justify-center p-8"
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-lg"
            aria-hidden="true"
          >
            <title>Office building</title>
            <defs>
              <linearGradient id="warm-building-roof" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <linearGradient id="warm-building-facade" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor="#fde68a" />
              </linearGradient>
            </defs>
            {/* Simple front view: one building, one roof, clear windows, one door */}
            <rect x="50" y="170" width="100" height="16" rx="4" fill="#b45309" />
            <rect x="60" y="70" width="80" height="102" rx="4" fill="url(#warm-building-facade)" stroke="#b45309" strokeWidth="2" />
            <rect x="55" y="58" width="90" height="14" rx="4" fill="url(#warm-building-roof)" stroke="#92400e" strokeWidth="1.5" />
            {[82, 102, 122].flatMap((y, row) =>
              [72, 92, 112].map((x, col) => (
                <rect key={`w-${row}-${col}`} x={x} y={y} width="16" height="14" rx="2" fill="#fef9e7" stroke="#d97706" strokeWidth="1.2" />
              ))
            )}
            <rect x="82" y="142" width="36" height="30" rx="3" fill="#92400e" stroke="#78350f" strokeWidth="1.5" />
            <rect x="86" y="146" width="28" height="22" rx="2" fill="#fde68a" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0.08, 0.14, 0.08], scale: [1, 1.1, 1] }}
          transition={{ opacity: { duration: 8, repeat: Infinity, ease: 'easeInOut' }, scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' }, initial: { duration: 1 } }}
          className="absolute rounded-full theme-hero-orb"
          style={{ width: 280, height: 280 }}
        />
      </div>
      {/* Warm: soft curved bottom - full width */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg className="w-full h-32 md:h-40 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,80 Q200,20 400,60 T800,50 T1200,70 L1200,120 L0,120 Z" fill="currentColor" className="text-amber-100" />
        </svg>
      </div>
    </section>
  )
}

function HeroSimple() {
  return (
    <section className="pt-14 pb-16 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            VINTORA <span className="text-primary-600">LLC</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Professional Supplier of High-Quality Disposable Products
          </p>
          <p className="text-gray-600 mb-8">
            Serving 30+ countries with excellence, reliability, and commitment to quality. Your trusted partner for paper cups, containers, cutlery, and more.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/products" className="inline-flex items-center px-6 py-3 bg-primary-700 text-white text-sm font-medium">
              Explore Products <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/about" className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 text-sm font-medium">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
