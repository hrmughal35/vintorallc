import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Users, Clock, Award, Target, UsersRound } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Strict QC & traceable code system ensuring high-quality products',
    },
    {
      icon: UsersRound,
      title: 'Partnership',
      description: 'Building enduring partnerships based on trust and collaboration',
    },
    {
      icon: Target,
      title: 'Sustainability',
      description: 'Committed to driving sustainable growth and environmental responsibility',
    },
  ]

  const stats = [
    { number: '30+', label: 'Countries & Regions', icon: Globe },
    { number: '20+', label: 'Professional Employees', icon: Users },
    { number: '24h', label: 'One-to-One Reception', icon: Clock },
  ]

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.4, x: '-10%', y: '10%' }}
              animate={{
                opacity: [0.08, 0.12, 0.08],
                scale: [1, 1.25, 1],
                y: [0, -50, 0],
                x: [0, 60, 0],
              }}
              transition={{
                opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
                y: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
                x: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
                initial: { duration: 1.5, ease: 'easeOut' },
              }}
              className="absolute rounded-full blur-3xl"
              style={{
                width: 500,
                height: 500,
                left: '-10%',
                top: '10%',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.4, x: '95%', y: '85%' }}
              animate={{
                opacity: [0.1, 0.15, 0.1],
                scale: [1, 1.2, 1],
                y: [0, 50, 0],
                x: [0, -60, 0],
              }}
              transition={{
                opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 },
                y: { duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 },
                x: { duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 },
                initial: { duration: 1.5, delay: 0.5, ease: 'easeOut' },
              }}
              className="absolute rounded-full blur-3xl"
              style={{
                width: 450,
                height: 450,
                right: '-5%',
                bottom: '15%',
                background: 'radial-gradient(circle, rgba(106, 125, 152, 0.12) 0%, transparent 70%)',
              }}
            />
            
            {/* Subtle floating shapes with staggered entrance */}
            <AnimatePresence>
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={`about-shape-${i}`}
                  initial={{ opacity: 0, scale: 0, rotate: 0, x: `${20 + i * 25}%`, y: `${40 + i * 20}%` }}
                  animate={{
                    opacity: [0.03, 0.07, 0.03],
                    scale: [1, 1.12, 1],
                    y: [0, -50, 0],
                    x: [0, 35, 0],
                    rotate: [45, 55, 45],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                    scale: { duration: 18 + i * 4, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 },
                    y: { duration: 18 + i * 4, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 },
                    x: { duration: 18 + i * 4, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 },
                    rotate: { duration: 18 + i * 4, repeat: Infinity, ease: 'easeInOut', delay: i * 1.2 },
                    initial: { duration: 0.9, delay: i * 0.25, ease: 'easeOut' },
                  }}
                  className="absolute rounded-lg"
                  style={{
                    width: 80 + i * 20,
                    height: 80 + i * 20,
                    left: `${20 + i * 25}%`,
                    top: `${40 + i * 20}%`,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)',
                  }}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 inline-block">
                <span className="text-6xl">🏢</span>
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed mb-8">
              Welcome to Vintora - Your trusted partner in high-quality disposable products
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <span className="font-bold text-2xl">30+</span>
                <p className="text-sm text-primary-200">Countries</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <span className="font-bold text-2xl">20+</span>
                <p className="text-sm text-primary-200">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <span className="font-bold text-2xl">1000+</span>
                <p className="text-sm text-primary-200">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl opacity-50"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
                Welcome to <span className="text-primary-700">Vintora</span>
              </h2>
              <div className="relative bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 md:p-10 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <p className="leading-relaxed text-lg md:text-xl relative z-10">
                  We are dedicated to professionally supplying high-quality products. Our extensive 
                  product line includes paper cups, plastic cups, ice cream cups, paper plates, knives, 
                  disposable forks, spoons, thermal paper, aluminum plastic, and more.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-50 via-white to-primary-50 rounded-2xl p-8 md:p-12 shadow-xl border border-primary-100">
                <div className="grid grid-cols-1 gap-8">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="bg-gradient-to-br from-primary-600 to-primary-700 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
                            <Icon className="text-white" size={28} />
                          </div>
                          <div>
                            <div className="text-4xl font-bold text-gray-900 mb-1">
                              {stat.number}
                            </div>
                            <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-block mb-4">
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center">
                  <Target className="text-primary-700" size={40} />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Our Vision
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-8"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-white to-primary-50 p-10 md:p-16 rounded-3xl shadow-2xl border border-primary-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-300 rounded-full blur-3xl opacity-20"></div>
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-center relative z-10 font-medium">
                We envision a future built on <span className="text-primary-700 font-bold">collaboration</span>, <span className="text-primary-700 font-bold">trust</span>, and <span className="text-primary-700 font-bold">global connection</span>. By forming 
                enduring partnerships, we are committed to driving sustainable growth and shaping a 
                thriving future together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl mb-6 shadow-xl"
                    >
                      <Icon className="text-white" size={48} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
                <Globe className="text-white" size={48} />
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
              Global Reach
            </h2>
            
            <div className="w-32 h-1 bg-white/30 mx-auto mb-12"></div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 leading-relaxed mb-8"
            >
              Since our establishment, our unwavering commitment to quality and excellence has enabled 
              us to build a strong global presence. Today, our products reach customers in many countries 
              across <span className="font-bold text-white">Europe</span>, <span className="font-bold text-white">Asia</span>, <span className="font-bold text-white">Africa</span>, <span className="font-bold text-white">the Americas</span>, and <span className="font-bold text-white">Oceania</span>.
            </motion.p>
            
            {/* Countries Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12"
            >
              {['France', 'Germany', 'Spain', 'Japan', 'UAE', 'Egypt', 'Mexico', 'Peru', 'Chile', 'Australia'].map((country, idx) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  <span className="font-semibold">{country}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-primary-100 mt-12 font-medium"
            >
              Our global reach is a testament to our dedication to <span className="text-white font-bold">quality</span>, <span className="text-white font-bold">reliability</span>, and 
              <span className="text-white font-bold"> international excellence</span>.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
      </section>
    </div>
  )
}

export default About
