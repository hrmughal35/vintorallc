import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, Download, Printer } from 'lucide-react'

const Catalogues = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="relative py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Catalogues</h1>
            <p className="text-lg text-primary-100">
              Browse or download our product catalogues for a complete overview of our disposable products range.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-6">
                  <FileText size={28} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Full Product Catalogue</h2>
                <p className="text-gray-600 mb-6">
                  View our complete product range online. You can print it or save as PDF for offline use.
                </p>
                <Link
                  to="/catalogues/view"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  <Printer size={18} />
                  View &amp; Print Catalogue
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-6">
                  <Download size={28} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">PDF Catalogue</h2>
                <p className="text-gray-600 mb-6">
                  Download a PDF version of our catalogue when available. Contact us for a custom catalogue.
                </p>
                <a
                  href="/catalogues/view"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open('/catalogues/view', '_blank', 'noopener')
                    setTimeout(() => window.print(), 500)
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
                >
                  <Download size={18} />
                  Save as PDF
                </a>
                <p className="text-sm text-gray-500 mt-3">
                  Opens catalogue in a new tab — use your browser’s &quot;Print&quot; → &quot;Save as PDF&quot;.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Catalogues
