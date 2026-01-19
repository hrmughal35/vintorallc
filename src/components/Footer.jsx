import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import Logo from './Logo'
import FooterBackground from './FooterBackground'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { path: '/', label: 'Home' },
      { path: '/about', label: 'About Us' },
      { path: '/products', label: 'Products' },
      { path: '/contact', label: 'Contact' },
    ],
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 text-gray-300 overflow-hidden">
      {/* Creative Animated Background */}
      <FooterBackground />
      
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full opacity-50"></div>
            <div className="mb-6">
              <Logo size="default" animated={false} textColor="white" />
            </div>
            <p className="text-sm leading-relaxed text-gray-300 mb-6">
              Professional supplier of high-quality disposable products. 
              Serving 30+ countries with excellence and reliability.
            </p>
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary-600/20 to-primary-700/20 backdrop-blur-sm px-5 py-3 rounded-xl border border-primary-500/30 shadow-lg"
              >
                <div className="text-2xl font-bold text-white mb-1">30+</div>
                <div className="text-xs text-primary-300 font-semibold">Countries</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary-600/20 to-primary-700/20 backdrop-blur-sm px-5 py-3 rounded-xl border border-primary-500/30 shadow-lg"
              >
                <div className="text-2xl font-bold text-white mb-1">20+</div>
                <div className="text-xs text-primary-300 font-semibold">Years</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full opacity-50"></div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <motion.span
                animate={{ width: ['4px', '20px', '4px'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="h-6 bg-gradient-to-b from-primary-400 to-primary-600 mr-3 rounded-full"
              ></motion.span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary-400 transition-colors flex items-center group relative"
                  >
                    <motion.span
                      className="w-2 h-2 bg-primary-500 rounded-full mr-3"
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.3,
                      }}
                    ></motion.span>
                    <span className="relative z-10">{link.label}</span>
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-0 bg-primary-500/10 rounded-l-lg"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full opacity-50"></div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <motion.span
                animate={{ width: ['4px', '20px', '4px'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="h-6 bg-gradient-to-b from-primary-400 to-primary-600 mr-3 rounded-full"
              ></motion.span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="flex items-center space-x-4 group relative"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-primary-500/30 to-primary-600/20 p-3 rounded-xl group-hover:from-primary-500/40 group-hover:to-primary-600/30 transition-all shadow-lg border border-primary-500/20"
                >
                  <Mail size={22} className="text-primary-400" />
                </motion.div>
                <a
                  href="mailto:info@vintora.com"
                  className="text-sm hover:text-primary-400 transition-colors font-semibold flex-1"
                >
                  gmail
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="flex items-center space-x-4 group relative"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-green-500/30 to-green-600/20 p-3 rounded-xl group-hover:from-green-500/40 group-hover:to-green-600/30 transition-all shadow-lg border border-green-500/20"
                >
                  <MessageCircle size={22} className="text-green-400" />
                </motion.div>
                <a
                  href="https://wa.me/86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-400 transition-colors font-semibold flex-1"
                >
                  +86 (WhatsApp/WeChat)
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="flex items-center space-x-4 group relative"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-primary-500/30 to-primary-600/20 p-3 rounded-xl group-hover:from-primary-500/40 group-hover:to-primary-600/30 transition-all shadow-lg border border-primary-500/20"
                >
                  <Globe size={22} className="text-primary-400" />
                </motion.div>
                <span className="text-sm font-semibold flex-1">www.vintora.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800/50 mt-16 pt-10 relative"
        >
          {/* Decorative gradient line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full"
          ></motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-gray-400 font-medium"
            >
              © {currentYear} <span className="text-primary-400 font-bold">Vintora LLC</span>. All rights reserved.
            </motion.p>
            <div className="flex items-center space-x-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#829ab1' }}
                className="text-gray-400 hover:text-primary-400 transition-colors font-medium relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <span className="text-gray-600">•</span>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#829ab1' }}
                className="text-gray-400 hover:text-primary-400 transition-colors font-medium relative group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
