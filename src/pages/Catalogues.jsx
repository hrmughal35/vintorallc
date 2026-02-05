import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, Download, Printer } from 'lucide-react'
import { getMainCategories } from '../data/products'
import { useTheme } from '../contexts/ThemeContext'

const Catalogues = () => {
  const { theme } = useTheme()
  const categories = getMainCategories()

  if (theme === 'simple') return <CataloguesSimple categories={categories} />
  if (theme === 'warm') return <CataloguesWarm categories={categories} />

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
                  View our complete product range online. Open the page then use &quot;Print / Save as PDF&quot; or Ctrl+P.
                </p>
                <Link
                  to="/catalogues/view"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  <Printer size={18} />
                  View &amp; Print Full Catalogue
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
                <h2 className="text-xl font-bold text-gray-900 mb-2">Save as PDF</h2>
                <p className="text-gray-600 mb-6">
                  Open the full catalogue, then use your browser: <strong>Print</strong> → choose <strong>Save as PDF</strong> (or Microsoft Print to PDF).
                </p>
                <Link
                  to="/catalogues/view"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
                >
                  <Download size={18} />
                  Open Catalogue to Print / PDF
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Print by category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Print by category</h2>
            <p className="text-gray-600 mb-6">
              View and print only the products in a specific category.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat, index) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    to={`/catalogues/view?category=${encodeURIComponent(cat.id)}`}
                    className="block p-5 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all text-left"
                  >
                    <span className="text-2xl mb-2 block">{cat.icon}</span>
                    <h3 className="font-semibold text-gray-900">{cat.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">View &amp; print this category only</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function CataloguesSimple({ categories }) {
  return (
    <div className="pt-14 min-h-screen bg-white">
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Product Catalogues</h1>
          <p className="mt-1 text-gray-600 text-sm">Browse or download our product catalogues.</p>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 max-w-2xl mb-8">
            <div className="p-4 border border-gray-200">
              <h2 className="font-bold text-gray-900 mb-2">Full Product Catalogue</h2>
              <p className="text-sm text-gray-600 mb-3">View online, then use Print / Save as PDF (Ctrl+P).</p>
              <Link to="/catalogues/view" className="text-sm font-medium text-gray-900 underline">
                View &amp; Print full catalogue
              </Link>
            </div>
            <div className="p-4 border border-gray-200">
              <h2 className="font-bold text-gray-900 mb-2">Save as PDF</h2>
              <p className="text-sm text-gray-600 mb-3">Open the catalogue page, then Print → Save as PDF.</p>
              <Link to="/catalogues/view" className="text-sm font-medium text-gray-900 underline">
                Open to Print / PDF
              </Link>
            </div>
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Print by category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/catalogues/view?category=${encodeURIComponent(cat.id)}`}
                className="px-4 py-2 border border-gray-200 text-sm text-gray-900"
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function CataloguesWarm({ categories }) {
  return (
    <div className="pt-20 min-h-screen bg-[var(--theme-bg)] font-sans">
      <section className="py-12 bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">Product Catalogues</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-2 text-white/90">
            Browse or download our product catalogues for a complete overview.
          </motion.p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mb-12">
            <div className="p-6 rounded-2xl bg-white border border-primary-200/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                <FileText className="text-primary-700" size={24} />
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Full Product Catalogue</h2>
              <p className="text-sm text-gray-600 mb-4">View online, then use Print / Save as PDF (Ctrl+P).</p>
              <Link to="/catalogues/view" className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors text-sm">
                <Printer size={16} /> View &amp; Print
              </Link>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-primary-200/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                <Download className="text-primary-700" size={24} />
              </div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Save as PDF</h2>
              <p className="text-sm text-gray-600 mb-4">Open catalogue → Print → Save as PDF.</p>
              <Link to="/catalogues/view" className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors text-sm">
                <Download size={16} /> Open to Print / PDF
              </Link>
            </div>
          </div>

          <h2 className="text-lg font-bold text-gray-900 mb-4">Print by category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/catalogues/view?category=${encodeURIComponent(cat.id)}`}
                className="px-5 py-3 rounded-2xl bg-white border border-primary-200/50 shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <span className="text-xl block mb-1">{cat.icon}</span>
                <span className="font-semibold text-gray-900">{cat.name}</span>
                <span className="block text-xs text-gray-500 mt-0.5">View &amp; print this category</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Catalogues
