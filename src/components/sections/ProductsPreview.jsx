import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getMainCategories } from '../../data/products'

const ProductsPreview = () => {
  const featuredCategories = getMainCategories().slice(0, 6)
  const navigate = useNavigate()

  const handleCardClick = (categoryId) => {
    navigate(`/products#${categoryId}`)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-700">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of high-quality disposable products for your business needs
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleCardClick(category.id)}
              className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group cursor-pointer"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-primary-600 to-primary-700 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <span className="text-3xl filter drop-shadow-sm">
                      {category.icon || category.name.charAt(0)}
                    </span>
                  </motion.div>
                  {category.subcategories && (
                    <span className="text-xs font-bold text-white bg-gradient-to-r from-primary-600 to-primary-700 px-3 py-1.5 rounded-full shadow-md">
                      {Object.keys(category.subcategories).length} types
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {category.description || `Explore our ${category.name.toLowerCase()} collection`}
                </p>
                <div className="text-sm text-primary-700 font-semibold">
                  View Details →
                </div>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-bold rounded-xl hover:from-primary-800 hover:to-primary-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 text-lg"
          >
            View All Products
            <ArrowRight className="ml-2" size={22} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsPreview
