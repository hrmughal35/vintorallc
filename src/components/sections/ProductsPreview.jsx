import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getMainCategories } from '../../data/products'
import { useTheme } from '../../contexts/ThemeContext'

const ProductsPreview = () => {
  const { theme } = useTheme()
  const featuredCategories = getMainCategories().slice(0, 6)
  const navigate = useNavigate()

  const handleCardClick = (categoryId) => {
    navigate(`/products#${categoryId}`)
  }

  if (theme === 'simple') return <ProductsPreviewSimple categories={featuredCategories} onCardClick={handleCardClick} />
  if (theme === 'warm') return <ProductsPreviewWarm categories={featuredCategories} onCardClick={handleCardClick} />

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

function ProductsPreviewSimple({ categories, onCardClick }) {
  return (
    <section className="py-12 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Products</h2>
        <p className="text-gray-600 mb-6 text-sm">High-quality disposable products by category.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => onCardClick(category.id)}
              className="p-4 border border-gray-200 text-left"
            >
              <span className="text-xl block mb-2">{category.icon || '📦'}</span>
              <span className="text-sm font-medium text-gray-900">{category.name}</span>
            </button>
          ))}
        </div>
        <Link to="/products" className="inline-block mt-6 text-sm font-medium text-gray-900 underline">View all products</Link>
      </div>
    </section>
  )
}

function ProductsPreviewWarm({ categories, onCardClick }) {
  return (
    <section className="py-20 bg-[#fef7ed] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Our <span className="text-amber-700">Products</span></h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">High-quality disposable products for your business</p>
        </motion.div>
        {/* Warm: horizontal scroll row of pills/cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide justify-center flex-wrap">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => onCardClick(category.id)}
              className="flex items-center gap-4 shrink-0 px-6 py-4 rounded-2xl bg-white border-2 border-amber-200/80 hover:border-amber-400 hover:shadow-xl transition-all text-left min-w-[280px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl">{category.icon || '📦'}</div>
              <div>
                <h3 className="font-bold text-stone-900">{category.name}</h3>
                <p className="text-sm text-stone-600 line-clamp-1">{category.description || 'Explore'}</p>
              </div>
            </motion.button>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-bold rounded-2xl hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl">
            View All Products <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsPreview
