import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { productHierarchy, getMainCategories, getSubcategories, getProducts } from '../data/products'
import ProductModal from '../components/products/ProductModal'

const Products = () => {
  const [expandedCategories, setExpandedCategories] = useState({})
  const [expandedSubcategories, setExpandedSubcategories] = useState({})
  const [selectedProduct, setSelectedProduct] = useState(null)

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  const toggleSubcategory = (categoryId, subcategoryId) => {
    const key = `${categoryId}-${subcategoryId}`
    setExpandedSubcategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const mainCategories = getMainCategories()

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="relative py-16 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
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
              initial={{ opacity: 0, scale: 0.4, x: '-10%', y: '10%' }}
              animate={{
                opacity: [0.08, 0.12, 0.08],
                scale: [1, 1.2, 1],
                y: [0, -40, 0],
                x: [0, 50, 0],
              }}
              transition={{
                opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
                y: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
                x: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
                initial: { duration: 1.5, ease: 'easeOut' },
              }}
              className="absolute rounded-full blur-3xl"
              style={{
                width: 500,
                height: 500,
                left: '-10%',
                top: '10%',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.4, x: '95%', y: '90%' }}
              animate={{
                opacity: [0.12, 0.18, 0.12],
                scale: [1, 1.15, 1],
                y: [0, 40, 0],
                x: [0, -50, 0],
              }}
              transition={{
                opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                scale: { duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 },
                y: { duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 },
                x: { duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 3 },
                initial: { duration: 1.5, delay: 0.5, ease: 'easeOut' },
              }}
              className="absolute rounded-full blur-3xl"
              style={{
                width: 450,
                height: 450,
                right: '-5%',
                bottom: '10%',
                background: 'radial-gradient(circle, rgba(106, 125, 152, 0.15) 0%, transparent 70%)',
              }}
            />
            
            {/* Floating particles with entrance animations */}
            <AnimatePresence>
              {Array.from({ length: 8 }).map((_, i) => {
                const randomX = Math.random() * 100
                const randomY = Math.random() * 100
                const randomSize = 4 + Math.random() * 4
                const randomDuration = 15 + Math.random() * 10
                const randomDelay = Math.random() * 5

                return (
                  <motion.div
                    key={`particle-${i}`}
                    initial={{ opacity: 0, scale: 0, y: randomY + 50, x: randomX }}
                    animate={{
                      opacity: [0, 0.2, 0],
                      scale: [0, 1, 0],
                      y: [randomY + 50, randomY - 100, randomY - 200],
                      x: [randomX, randomX + (Math.random() * 60 - 30), randomX + (Math.random() * 60 - 30)],
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      opacity: { duration: randomDuration, repeat: Infinity, ease: 'linear', delay: randomDelay },
                      scale: { duration: randomDuration * 0.3, repeat: Infinity, ease: 'easeInOut', delay: randomDelay },
                      y: { duration: randomDuration, repeat: Infinity, ease: 'linear', delay: randomDelay },
                      x: { duration: randomDuration, repeat: Infinity, ease: 'linear', delay: randomDelay },
                    }}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: randomSize,
                      height: randomSize,
                      left: `${randomX}%`,
                      top: `${randomY}%`,
                    }}
                  />
                )
              })}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-6xl mb-4 block">📦</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of high-quality disposable products organized by category
            </p>
            
            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm"
            >
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <span className="font-bold text-lg">{mainCategories.length}+</span> Categories
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <span className="font-bold text-lg">
                  {mainCategories.reduce((sum, cat) => {
                    const subcats = getSubcategories(cat.id)
                    return sum + subcats.reduce((s, sub) => s + (getProducts(cat.id, sub.id).length || 0), 0)
                  }, 0)}+
                </span> Variants
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                <span className="font-bold text-lg">30+</span> Countries
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

          <section className="py-12 bg-gradient-to-b from-gray-50 via-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto space-y-4">
                {mainCategories.map((category, categoryIndex) => {
                  const isCategoryExpanded = expandedCategories[category.id]
                  const subcategories = getSubcategories(category.id)

                  return (
                    <motion.div
                      key={category.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                      className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                    >
                      {/* Main Category Header */}
                      <motion.button
                        onClick={() => toggleCategory(category.id)}
                        whileHover={{ backgroundColor: 'rgba(79, 70, 229, 0.05)' }}
                        className="w-full px-6 py-5 flex items-center justify-between text-left group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl">{category.icon}</div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                              {category.name}
                            </h2>
                            <p className="text-sm text-gray-700 mt-1 font-medium">{category.description}</p>
                          </div>
                        </div>
                    <motion.div
                      animate={{ rotate: isCategoryExpanded ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 group-hover:text-primary-600"
                    >
                      <ChevronRight size={24} />
                    </motion.div>
                  </motion.button>

                  {/* Subcategories */}
                  <AnimatePresence>
                    {isCategoryExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-gray-100"
                      >
                        <div className="p-4 space-y-3">
                          {subcategories.map((subcategory, subIndex) => {
                            const subKey = `${category.id}-${subcategory.id}`
                            const isSubExpanded = expandedSubcategories[subKey]
                            const products = getProducts(category.id, subcategory.id)

                            return (
                              <motion.div
                                key={subcategory.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: subIndex * 0.05 }}
                                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
                              >
                                {/* Subcategory Header */}
                                <motion.button
                                  onClick={() => toggleSubcategory(category.id, subcategory.id)}
                                  whileHover={{ backgroundColor: 'rgba(79, 70, 229, 0.05)' }}
                                  className="w-full px-5 py-4 flex items-center justify-between text-left group"
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className="text-2xl">{subcategory.icon}</div>
                                    <div>
                                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                                        {subcategory.name}
                                      </h3>
                                      <p className="text-xs text-gray-700 mt-0.5 font-medium">{subcategory.description}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-3">
                                    <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                                      {products.length} variants
                                    </span>
                                    <motion.div
                                      animate={{ rotate: isSubExpanded ? 90 : 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="text-gray-400"
                                    >
                                      <ChevronRight size={20} />
                                    </motion.div>
                                  </div>
                                </motion.button>

                                {/* Products List */}
                                <AnimatePresence>
                                  {isSubExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden border-t border-gray-200"
                                    >
                                      <div className="p-4 bg-white">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                          {products.map((product, productIndex) => (
                                            <motion.button
                                              key={product.id}
                                              initial={{ opacity: 0, scale: 0.9 }}
                                              animate={{ opacity: 1, scale: 1 }}
                                              transition={{ duration: 0.2, delay: productIndex * 0.03 }}
                                              whileHover={{ scale: 1.02, y: -2 }}
                                              whileTap={{ scale: 0.98 }}
                                              onClick={() => setSelectedProduct({
                                                mainCategory: category,
                                                subcategory: subcategory,
                                                product: product,
                                              })}
                                              className="bg-gradient-to-br from-primary-50 to-white border border-primary-200 rounded-lg p-4 text-left hover:border-primary-400 hover:shadow-md transition-all group"
                                            >
                                              <div className="flex items-center justify-between mb-2">
                                                <div>
                                                  <span className="text-xs font-bold text-primary-600 bg-primary-100 px-2 py-0.5 rounded mr-2">
                                                    {product.id}
                                                  </span>
                                                  <span className="text-base font-bold text-primary-700">
                                                    {product.name || product.id}
                                                  </span>
                                                </div>
                                                <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded">
                                                  View
                                                </span>
                                              </div>
                                              <div className="space-y-1 text-sm text-gray-700">
                                                {product.size && (
                                                  <div><span className="font-medium">Size:</span> {product.size}</div>
                                                )}
                                                {product.volume && (
                                                  <div><span className="font-medium">Volume:</span> {product.volume}</div>
                                                )}
                                                {product.type && (
                                                  <div><span className="font-medium">Type:</span> {product.type}</div>
                                                )}
                                              </div>
                                            </motion.button>
                                          ))}
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}

export default Products
