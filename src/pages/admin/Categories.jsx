import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Plus, Edit, Trash2, FolderOpen, ChevronDown, ChevronRight, Search } from 'lucide-react'
import { productHierarchy, getMainCategories, getSubcategories } from '../../data/products'

const Categories = () => {
  const [expandedCategories, setExpandedCategories] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
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

  const handleDeleteCategory = (categoryId) => {
    if (window.confirm(`Are you sure you want to delete the category "${productHierarchy[categoryId]?.name}"? This will also delete all subcategories and products within it.`)) {
      // TODO: Implement delete functionality with backend API
      console.log('Delete category:', categoryId)
      alert('Category deletion will be implemented with backend integration.')
    }
  }

  const handleDeleteSubcategory = (categoryId, subcategoryId, subcategoryName) => {
    if (window.confirm(`Are you sure you want to delete the subcategory "${subcategoryName}"? This will also delete all products within it.`)) {
      // TODO: Implement delete functionality with backend API
      console.log('Delete subcategory:', { categoryId, subcategoryId })
      alert('Subcategory deletion will be implemented with backend integration.')
    }
  }

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
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Category Management</h1>
              <p className="text-gray-600">Manage your product categories and subcategories</p>
            </div>
            <Link
              to="/admin/categories/new"
              className="flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors shadow-lg"
            >
              <Plus size={20} />
              Add Category
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
        </motion.div>

        {/* Categories List */}
        <div className="space-y-4">
          {filteredCategories.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 text-center"
            >
              <FolderOpen size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No categories found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm ? 'Try a different search term.' : 'Get started by creating your first category.'}
              </p>
              {!searchTerm && (
                <Link
                  to="/admin/categories/new"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors"
                >
                  <Plus size={20} />
                  Add Your First Category
                </Link>
              )}
            </motion.div>
          ) : (
            filteredCategories.map((category, catIndex) => {
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
                  <div className="p-6 flex items-center justify-between">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="flex-1 flex items-center justify-between hover:bg-gray-50 -m-6 p-6 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{category.icon}</span>
                        <div className="text-left">
                          <h2 className="text-xl font-bold text-gray-900">{category.name}</h2>
                          <p className="text-sm text-gray-600">{category.description}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {subcategories.length} subcategor{subcategories.length !== 1 ? 'ies' : 'y'}
                          </p>
                        </div>
                      </div>
                      {isCategoryExpanded ? (
                        <ChevronDown size={24} className="text-gray-400" />
                      ) : (
                        <ChevronRight size={24} className="text-gray-400" />
                      )}
                    </button>
                    <div className="flex items-center gap-2 ml-4">
                      <Link
                        to={`/admin/categories/edit/${category.id}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit Category"
                      >
                        <Edit size={20} />
                      </Link>
                      <button
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        onClick={() => handleDeleteCategory(category.id)}
                        title="Delete Category"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Subcategories */}
                  {isCategoryExpanded && (
                    <div className="border-t border-gray-100 p-4 space-y-3">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Subcategories</h3>
                        <Link
                          to={`/admin/categories/${category.id}/subcategories/new`}
                          className="flex items-center gap-2 px-4 py-2 text-sm bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors"
                        >
                          <Plus size={16} />
                          Add Subcategory
                        </Link>
                      </div>
                      {subcategories.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          <p className="mb-4">No subcategories yet.</p>
                          <Link
                            to={`/admin/categories/${category.id}/subcategories/new`}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors"
                          >
                            <Plus size={16} />
                            Add First Subcategory
                          </Link>
                        </div>
                      ) : (
                        subcategories.map((subcategory) => (
                          <div
                            key={subcategory.id}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors"
                          >
                            <div className="flex items-center gap-3 flex-1">
                              <span className="text-xl">{subcategory.icon}</span>
                              <div>
                                <h4 className="font-semibold text-gray-900">{subcategory.name}</h4>
                                <p className="text-xs text-gray-600">{subcategory.description}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Link
                                to={`/admin/categories/${category.id}/subcategories/edit/${subcategory.id}`}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                title="Edit Subcategory"
                              >
                                <Edit size={18} />
                              </Link>
                              <button
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                onClick={() => handleDeleteSubcategory(category.id, subcategory.id, subcategory.name)}
                                title="Delete Subcategory"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </motion.div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default Categories
