import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MessageCircle, Globe, CheckCircle, XCircle, Phone } from 'lucide-react'
import { saveContactSubmission } from '../data/contacts'
import CountryCodeSelector from '../components/CountryCodeSelector'
import { useTheme } from '../contexts/ThemeContext'

const Contact = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+86', // Default to China
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      // Combine country code and phone number
      const phoneWithCode = formData.phone ? `${formData.countryCode} ${formData.phone}` : ''
      
      // Save to localStorage
      saveContactSubmission({
        ...formData,
        phone: phoneWithCode
      })
      
      // Success
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '+86',
        subject: '',
        message: ''
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (theme === 'warm') {
    return (
      <ContactWarm
        formData={formData}
        setFormData={setFormData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
      />
    )
  }

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
                        href="https://wa.me/8619012985053"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-700 hover:text-primary-800 font-semibold transition-colors text-lg"
                      >
                        +8619012985053 (WhatsApp/WeChat)
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
                      <p className="text-primary-700 font-semibold text-lg">www.vintorallc.com</p>
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3"
                      >
                        <CheckCircle className="text-green-600" size={24} />
                        <p className="text-green-800 font-semibold">
                          Thank you! Your message has been sent successfully. We'll get back to you soon.
                        </p>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-3"
                      >
                        <XCircle className="text-red-600" size={24} />
                        <p className="text-red-800 font-semibold">
                          Please fill in all fields before submitting.
                        </p>
                      </motion.div>
                    )}

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-all bg-white text-gray-900"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-all bg-white text-gray-900"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="flex gap-2">
                        <CountryCodeSelector
                          value={formData.countryCode}
                          onChange={(code) => setFormData(prev => ({ ...prev, countryCode: code }))}
                          className="w-48"
                        />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-all bg-white text-gray-900"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-all bg-white text-gray-900"
                        placeholder="Subject"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-bold text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-all bg-white resize-none"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-bold rounded-xl hover:from-primary-800 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
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

function ContactWarm({ formData, setFormData, handleInputChange, handleSubmit, isSubmitting, submitStatus }) {
  return (
    <div className="pt-20 min-h-screen bg-[var(--theme-bg)] font-sans">
      <section className="py-12 bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
            Contact Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-2 text-white/90">
            Get in touch for inquiries, partnerships, or support
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact cards - horizontal strip first */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <motion.a
              href="mailto:info@vintora.com"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-primary-200/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary-700" size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-900">Email</div>
                <div className="text-sm text-gray-600">gmail</div>
              </div>
            </motion.a>
            <motion.a
              href="https://wa.me/8619012985053"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-primary-200/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="text-green-700" size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-900">WhatsApp / WeChat</div>
                <div className="text-sm text-gray-600">+8619012985053</div>
              </div>
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-primary-200/50 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <Globe className="text-primary-700" size={24} />
              </div>
              <div>
                <div className="font-bold text-gray-900">Website</div>
                <div className="text-sm text-gray-600">www.vintorallc.com</div>
              </div>
            </motion.div>
          </div>

          {/* Form - card */}
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send a message</h2>
            <div className="bg-white rounded-2xl border border-primary-200/50 shadow-sm p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <CheckCircle className="text-green-600" size={22} />
                    <p className="text-green-800 font-medium text-sm">Thank you! Your message has been sent. We'll get back to you soon.</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                    <XCircle className="text-red-600" size={22} />
                    <p className="text-red-800 font-medium text-sm">Please fill in all required fields.</p>
                  </div>
                )}
                <div>
                  <label htmlFor="warm-name" className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
                  <input type="text" id="warm-name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="warm-email" className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                  <input type="email" id="warm-email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="warm-phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                  <div className="flex gap-2">
                    <CountryCodeSelector value={formData.countryCode} onChange={(code) => setFormData(prev => ({ ...prev, countryCode: code }))} className="w-40" />
                    <input type="tel" id="warm-phone" name="phone" value={formData.phone} onChange={handleInputChange} className="flex-1 px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 bg-white" placeholder="Phone number" />
                  </div>
                </div>
                <div>
                  <label htmlFor="warm-subject" className="block text-sm font-semibold text-gray-700 mb-1">Subject *</label>
                  <input type="text" id="warm-subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 bg-white" placeholder="Subject" />
                </div>
                <div>
                  <label htmlFor="warm-message" className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                  <textarea id="warm-message" name="message" rows="5" value={formData.message} onChange={handleInputChange} required className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-500 bg-white resize-none" placeholder="Your message..." />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-3 px-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors disabled:opacity-50">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
