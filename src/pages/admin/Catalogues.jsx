import { motion } from 'framer-motion'
import { FileText, ExternalLink, Printer, Package, Info } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getMainCategories, getSubcategories, getProducts } from '../../data/products'

const AdminCatalogues = () => {
  const mainCategories = getMainCategories()
  const totalProducts = mainCategories.reduce((acc, cat) => {
    return acc + getSubcategories(cat.id).reduce((subAcc, sub) => {
      return subAcc + getProducts(cat.id, sub.id).length
    }, 0)
  }, 0)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Catalogues</h1>
          <p className="text-gray-600">Manage how your product catalogue appears to visitors.</p>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-primary-50 border border-primary-200 rounded-xl p-6 mb-8"
        >
          <div className="flex items-start gap-3">
            <Info size={24} className="text-primary-700 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-primary-900 mb-2">How the catalogue works</h2>
              <p className="text-primary-800 text-sm leading-relaxed">
                The public catalogue is <strong>automatically generated</strong> from the same product data you manage under <strong>Products</strong>. 
                When you add, edit, or remove products in the admin, the catalogue page and the printable/PDF view update to match. 
                There is no separate catalogue content to maintain — just manage your products and the catalogue stays in sync.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary-100">
              <Package size={24} className="text-primary-700" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{totalProducts}</p>
              <p className="text-sm text-gray-600">Products currently in the catalogue</p>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-lg font-semibold text-gray-900">Quick actions</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="/catalogues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <div className="p-3 rounded-lg bg-primary-100">
                <FileText size={24} className="text-primary-700" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">View public catalogue page</h3>
                <p className="text-sm text-gray-600">Open the page visitors see at /catalogues</p>
              </div>
              <ExternalLink size={20} className="text-gray-400" />
            </a>

            <a
              href="/catalogues/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <div className="p-3 rounded-lg bg-gray-100">
                <Printer size={24} className="text-gray-700" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Preview / Print catalogue</h3>
                <p className="text-sm text-gray-600">Full product list — use Print → Save as PDF</p>
              </div>
              <ExternalLink size={20} className="text-gray-400" />
            </a>
          </div>

          <Link
            to="/admin/products"
            className="inline-flex items-center gap-2 mt-4 text-primary-600 hover:text-primary-700 font-medium"
          >
            <Package size={18} />
            Edit products (updates catalogue automatically)
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminCatalogues
