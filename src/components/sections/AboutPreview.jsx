import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

const AboutPreview = () => {
  const { theme } = useTheme()
  if (theme === 'warm') return <AboutPreviewWarm />
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl opacity-50"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 relative z-10">
              About <span className="text-primary-700">Us</span>
            </h2>
            <div className="space-y-6 relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Welcome to Vintora</h3>
                <p className="leading-relaxed text-lg relative z-10">
                  We are dedicated to professionally supplying high-quality products. 
                  Our extensive product line includes paper cups, plastic cups, ice cream cups, 
                  paper plates, knives, disposable forks, spoons, thermal paper, aluminum plastic, 
                  and more.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative z-10">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                  We envision a future built on <span className="font-bold text-primary-700">collaboration</span>, <span className="font-bold text-primary-700">trust</span>, and <span className="font-bold text-primary-700">global connection</span>. 
                  By forming enduring partnerships, we are committed to driving sustainable growth 
                  and shaping a thriving future together.
                </p>
              </motion.div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 text-primary-700 font-bold hover:text-primary-800 transition-colors text-lg relative z-10 group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={22} />
            </Link>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-12 md:p-16 h-full flex items-center justify-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400 rounded-full blur-3xl"></div>
              </div>
              <div className="text-center text-white relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="text-7xl md:text-8xl font-bold mb-6"
                >
                  30+
                </motion.div>
                <div className="text-2xl md:text-3xl font-bold mb-3">Countries & Regions</div>
                <div className="text-lg md:text-xl opacity-90">Global Reach</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AboutPreviewWarm() {
  return (
    <section className="py-24 bg-[#fef7ed] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 text-center">
          About <span className="text-amber-700">Us</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-stone-600 mb-14 max-w-2xl mx-auto">
          Dedicated to quality and global partnership
        </motion.p>
        {/* Warm: visual first (left), then text - and cards as horizontal strips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1 rounded-[2rem] bg-gradient-to-br from-amber-600 to-amber-700 p-12 flex flex-col items-center justify-center min-h-[280px] shadow-2xl">
            <span className="text-6xl md:text-7xl font-bold text-white">30+</span>
            <span className="text-xl font-semibold text-amber-100 mt-2">Countries & Regions</span>
          </motion.div>
          <div className="order-1 lg:order-2 space-y-6">
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-5 p-6 rounded-2xl bg-white border-2 border-amber-200/60 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0 text-2xl">🏢</div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Welcome to Vintora</h3>
                <p className="text-stone-600 text-sm leading-relaxed">We supply paper cups, plastic cups, paper plates, cutlery, thermal paper, and more—globally.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex gap-5 p-6 rounded-2xl bg-white border-2 border-amber-200/60 shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0 text-2xl">🌐</div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Our Vision</h3>
                <p className="text-stone-600 text-sm leading-relaxed">Built on collaboration, trust, and global connection. We drive sustainable growth together.</p>
              </div>
            </motion.div>
            <Link to="/about" className="inline-flex items-center mt-4 text-amber-700 font-bold hover:text-amber-800 text-lg group">
              Learn More <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
