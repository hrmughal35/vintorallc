import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const ProductModal = ({ product, onClose }) => {
  if (!product || !product.product) return null

  const { mainCategory, subcategory, product: productData } = product

  // Get all product properties for display
  const getProductDetails = () => {
    const details = []
    Object.keys(productData).forEach(key => {
      if (key !== 'id' && productData[key]) {
        details.push({ label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'), value: productData[key] })
      }
    })
    return details
  }

  const productDetails = getProductDetails()

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-primary-700 to-primary-600 text-white p-6 flex items-center justify-between z-10">
            <div>
              <div className="text-sm text-primary-200 mb-1">
                {mainCategory?.name} → {subcategory?.name}
              </div>
              <h2 className="text-2xl font-bold">
                {productData.name || `Product ${productData.id}`} - {subcategory?.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={24} className="text-white" />
            </button>
          </div>

          <div className="p-6">
            {/* Product Name and ID Badge */}
            <div className="mb-6 flex items-center gap-4">
              <span className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white text-lg font-bold px-4 py-2 rounded-lg shadow-lg">
                {productData.id}
              </span>
              {productData.name && (
                <h3 className="text-2xl font-bold text-gray-900">
                  {productData.name}
                </h3>
              )}
            </div>

            {/* Description */}
            {subcategory?.description && (
              <p className="text-gray-700 mb-6 text-lg">{subcategory.description}</p>
            )}

            {/* Base Paper Options */}
            {subcategory?.basePaperOptions && (
              <div className="mb-6 bg-primary-50 p-4 rounded-lg border border-primary-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Base Paper Options:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {subcategory.basePaperOptions.map((option, idx) => (
                    <li key={idx} className="text-base">{option}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Features */}
            {subcategory?.features && (
              <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Features:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {subcategory.features.map((feature, idx) => (
                    <li key={idx} className="text-base">{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Product Specifications Table */}
            {productDetails.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                    <thead>
                      <tr className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                        <th className="px-6 py-4 text-left font-semibold">Property</th>
                        <th className="px-6 py-4 text-left font-semibold">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productDetails.map((detail, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className={`border-b border-gray-200 ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          } hover:bg-primary-50 transition-colors`}
                        >
                          <td className="px-6 py-4 font-semibold text-gray-700">
                            {detail.label}
                          </td>
                          <td className="px-6 py-4 text-gray-900">
                            {detail.value}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Close Button */}
            <div className="flex justify-end mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-6 py-3 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Close
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default ProductModal
