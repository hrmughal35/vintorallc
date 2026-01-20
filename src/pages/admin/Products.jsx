import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Plus, Edit, Trash2, Package, Search, ChevronDown, ChevronRight } from 'lucide-react'
import { productHierarchy, getMainCategories, getSubcategories, getProducts } from '../../data/products'

const Products = () => {
  const [expandedCategories, setExpandedCategories] = useState({})
  const [expandedSubcategories, setExpandedSubcategories] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

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

  const filteredCategories = mainCategories.filter(category => {
    if (!searchTerm) return true
    const searchLower = searchTerm.toLowerCase()
    return (
      category.name.toLowerCase().includes(searchLower) ||
      category.description?.toLowerCase().includes(searchLower)
    )
  })

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Product Management</h1>
              <p className="text-gray-600">Manage your product catalog</p>
            </div>
            <Link
              to="/admin/products/new"
              className="flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors shadow-lg"
            >
              <Plus size={20} />
              Add Product
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
        </motion.div>

        {/* Products List */}
        <div className="space-y-4">
          {filteredCategories.map((category, catIndex) => {
            const subcategories = getSubcategories(category.id)
            const isCategoryExpanded = expandedCategories[category.id]

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{category.icon}</span>
                    <div className="text-left">
                      <h2 className="text-xl font-bold text-gray-900">{category.name}</h2>
                      <p className="text-sm text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  {isCategoryExpanded ? (
                    <ChevronDown size={24} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={24} className="text-gray-400" />
                  )}
                </button>

                {/* Subcategories */}
                {isCategoryExpanded && (
                  <div className="border-t border-gray-100 p-4 space-y-3">
                    {subcategories.map((subcategory) => {
                      const products = getProducts(category.id, subcategory.id)
                      const subKey = `${category.id}-${subcategory.id}`
                      const isSubExpanded = expandedSubcategories[subKey]

                      return (
                        <div key={subcategory.id} className="bg-gray-50 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleSubcategory(category.id, subcategory.id)}
                            className="w-full p-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{subcategory.icon}</span>
                              <div className="text-left">
                                <h3 className="font-semibold text-gray-900">{subcategory.name}</h3>
                                <p className="text-xs text-gray-600">{products.length} products</p>
                              </div>
                            </div>
                            {isSubExpanded ? (
                              <ChevronDown size={20} className="text-gray-400" />
                            ) : (
                              <ChevronRight size={20} className="text-gray-400" />
                            )}
                          </button>

                          {/* Products List */}
                          {isSubExpanded && (
                            <div className="p-4 space-y-2">
                              {products.map((product) => (
                                <div
                                  key={product.id}
                                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors"
                                >
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900">{product.name}</h4>
                                    <p className="text-sm text-gray-600">
                                      {product.size} • {product.volume}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Link
                                      to={`/admin/products/edit/${category.id}/${subcategory.id}/${product.id}`}
                                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                    >
                                      <Edit size={18} />
                                    </Link>
                                    <button
                                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                      onClick={() => {
                                        if (window.confirm(`Delete ${product.name}?`)) {
                                          // TODO: Implement delete functionality
                                          console.log('Delete product:', product.id)
                                        }
                                      }}
                                    >
                                      <Trash2 size={18} />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Products
