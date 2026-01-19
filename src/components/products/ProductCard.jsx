import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ProductCard = ({ category, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-100"
    >
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
      
      <div className="relative z-10">
        {/* Header with Icon and Badge */}
        <div className="flex items-start justify-between mb-5">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.1 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-3xl filter drop-shadow-sm">{category.icon || '📦'}</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-400 rounded-full border-2 border-white"></div>
          </motion.div>
          {category.productCount && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.05 + 0.2 }}
              className="text-xs font-bold text-white bg-gradient-to-r from-primary-600 to-primary-700 px-3 py-1.5 rounded-full shadow-md"
            >
              {category.productCount} variants
            </motion.span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
          {category.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
          {category.description || `Explore our ${category.name.toLowerCase()} collection`}
        </p>

        {/* Base Paper Options */}
        {category.basePaperOptions && (
          <div className="mb-5">
            <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
              Base Paper Options:
            </p>
            <div className="flex flex-wrap gap-2">
              {category.basePaperOptions.slice(0, 2).map((option, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200 group-hover:border-primary-200 transition-colors"
                >
                  {option.split('(')[0].trim()}
                </span>
              ))}
              {category.basePaperOptions.length > 2 && (
                <span className="text-xs font-medium text-primary-600 px-3 py-1.5">
                  +{category.basePaperOptions.length - 2} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-primary-200 transition-colors">
          <span className="text-sm font-semibold text-primary-700 group-hover:text-primary-800 transition-colors">
            View Details
          </span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary-700"
          >
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  )
}

export default ProductCard
