import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MessageCircle, Globe } from 'lucide-react'

const Contact = () => {
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
              initial={{ opacity: 0, scale: 0.4, x: '-8%', y: '15%' }}
              animate={{
                opacity: [0.08, 0.12, 0.08],
                scale: [1, 1.22, 1],
                y: [0, -45, 0],
                x: [0, 55, 0],
              }}
              transition={{
                opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 21, repeat: Infinity, ease: 'easeInOut' },
                y: { duration: 21, repeat: Infinity, ease: 'easeInOut' },
                x: { duration: 21, repeat: Infinity, ease: 'easeInOut' },
                initial: { duration: 1.5, ease: 'easeOut' },
              }}
              className="absolute rounded-full blur-3xl"
              style={{
                width: 480,
                height: 480,
                left: '-8%',
                top: '15%',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.4, x: '92%', y: '88%' }}
              animate={{
                opacity: [0.1, 0.15, 0.1],
                scale: [1, 1.18, 1],
                y: [0, 45, 0],
                x: [0, -55, 0],
              }}
              transition={{
                opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 3.5 },
                y: { duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 3.5 },
                x: { duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 3.5 },
                initial: { duration: 1.5, delay: 0.5, ease: 'easeOut' },
              }}
              className="absolute rounded-full blur-3xl"
              style={{
                width: 420,
                height: 420,
                right: '-8%',
                bottom: '12%',
                background: 'radial-gradient(circle, rgba(106, 125, 152, 0.13) 0%, transparent 70%)',
              }}
            />
            
            {/* Gentle floating elements with entrance animations */}
            <AnimatePresence>
              {[1, 2].map((i) => (
                <motion.div
                  key={`contact-shape-${i}`}
                  initial={{ opacity: 0, scale: 0.5, x: `${30 + i * 40}%`, y: `${50 + i * 15}%` }}
                  animate={{
                    opacity: [0.04, 0.08, 0.04],
                    scale: [1, 1.1, 1],
                    y: [0, -40, 0],
                    x: [0, 30, 0],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    scale: { duration: 20 + i * 5, repeat: Infinity, ease: 'easeInOut', delay: i * 2 },
                    y: { duration: 20 + i * 5, repeat: Infinity, ease: 'easeInOut', delay: i * 2 },
                    x: { duration: 20 + i * 5, repeat: Infinity, ease: 'easeInOut', delay: i * 2 },
                    initial: { duration: 1, delay: i * 0.3, ease: 'easeOut' },
                  }}
                  className="absolute rounded-full"
                  style={{
                    width: 100 + i * 30,
                    height: 100 + i * 30,
                    left: `${30 + i * 40}%`,
                    top: `${50 + i * 15}%`,
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
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
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <span className="text-6xl">📧</span>
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed">
              Get in touch with us for inquiries, partnerships, or support
            </p>
          </motion.div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl opacity-50"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 relative z-10">
                Get in <span className="text-primary-700">Touch</span>
              </h2>
              
              <div className="space-y-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <Mail className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                      <a
                        href="mailto:info@vintora.com"
                        className="text-primary-700 hover:text-primary-800 font-semibold transition-colors text-lg"
                      >
                        gmail
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <MessageCircle className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        WhatsApp / WeChat
                      </h3>
                      <a
                        href="https://wa.me/86"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-700 hover:text-primary-800 font-semibold transition-colors text-lg"
                      >
                        +86 (WhatsApp/WeChat)
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <Globe className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Website</h3>
                      <p className="text-primary-700 font-semibold text-lg">www.vintora.com</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* QR Code Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-12 relative z-10"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Scan Code</h3>
                <div className="bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl shadow-xl border border-primary-100 inline-block">
                  <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                    <span className="text-gray-400 font-semibold">QR Code</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full blur-2xl opacity-50"></div>
              <div className="bg-gradient-to-br from-white to-primary-50 rounded-2xl shadow-2xl p-8 md:p-10 border border-primary-100 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-300 rounded-full blur-3xl opacity-10"></div>
                
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    Send us a <span className="text-primary-700">Message</span>
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-all bg-white text-gray-900"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-all bg-white text-gray-900"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-all bg-white text-gray-900"
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-all bg-white resize-none"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-bold rounded-xl hover:from-primary-800 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
