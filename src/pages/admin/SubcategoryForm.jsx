import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import { Save, X } from 'lucide-react'
import { productHierarchy, getMainCategories, getSubcategories } from '../../data/products'

const SubcategoryForm = () => {
  const navigate = useNavigate()
  const { categoryId, subcategoryId } = useParams()
  const isEditMode = !!subcategoryId

  const [formData, setFormData] = useState({
    name: '',
    icon: '📦',
    description: '',
    categoryId: categoryId || '',
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (isEditMode && categoryId && subcategoryId) {
      const subcategory = productHierarchy[categoryId]?.subcategories[subcategoryId]
      if (subcategory) {
        setFormData({
          name: subcategory.name || '',
          icon: subcategory.icon || '📦',
          description: subcategory.description || '',
          categoryId: categoryId,
        })
      }
    } else if (categoryId) {
      setFormData(prev => ({
        ...prev,
        categoryId: categoryId
      }))
    }
  }, [isEditMode, categoryId, subcategoryId])

  const mainCategories = getMainCategories()
  const selectedCategory = formData.categoryId ? productHierarchy[formData.categoryId] : null
  const existingSubcategories = formData.categoryId ? getSubcategories(formData.categoryId) : []

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.categoryId) {
      newErrors.categoryId = 'Please select a category'
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Subcategory name is required'
    }

    if (!formData.icon.trim()) {
      newErrors.icon = 'Icon is required'
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }

    // Check for duplicate subcategory name within the same category
    if (formData.categoryId && formData.name.trim()) {
      const duplicateSubcategory = existingSubcategories.find(
        subcat => subcat.name.toLowerCase() === formData.name.toLowerCase().trim() &&
        (!isEditMode || subcat.id !== subcategoryId)
      )
      if (duplicateSubcategory) {
        newErrors.name = 'A subcategory with this name already exists in this category'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // TODO: Implement save functionality with backend API
    console.log('Saving subcategory:', {
      id: subcategoryId,
      categoryId: formData.categoryId,
      ...formData
    })
    
    alert(isEditMode ? 'Subcategory updated successfully!' : 'Subcategory created successfully!')
    navigate('/admin/categories')
  }

  const popularIcons = ['📦', '☕', '🍽️', '🥤', '🍴', '📄', '🔲', '🏷️', '🧾', '🧤', '🍱', '🍣']

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {isEditMode ? 'Edit Subcategory' : 'Add New Subcategory'}
              </h1>
              <p className="text-gray-600">
                {isEditMode 
                  ? 'Update subcategory information' 
                  : selectedCategory 
                    ? `Create a new subcategory under "${selectedCategory.name}"`
                    : 'Create a new product subcategory'}
              </p>
            </div>
            <button
              onClick={() => navigate('/admin/categories')}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} />
              Cancel
            </button>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 space-y-6"
        >
          {/* Category Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Parent Category <span className="text-red-500">*</span>
            </label>
            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleInputChange}
              required
              disabled={isEditMode || !!categoryId}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none disabled:bg-gray-100 ${
                errors.categoryId ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select Category</option>
              {mainCategories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name}
                </option>
              ))}
            </select>
            {errors.categoryId && (
              <p className="mt-1 text-sm text-red-600">{errors.categoryId}</p>
            )}
            {selectedCategory && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: <span className="font-semibold">{selectedCategory.icon} {selectedCategory.name}</span>
              </p>
            )}
          </div>

          {/* Subcategory Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Subcategory Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="e.g., Single Wall Cups, Paper Bowls, Clear Containers"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Icon */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Icon <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              <input
                type="text"
                name="icon"
                value={formData.icon}
                onChange={handleInputChange}
                required
                placeholder="Enter emoji or icon"
                maxLength={2}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-2xl text-center ${
                  errors.icon ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.icon && (
                <p className="mt-1 text-sm text-red-600">{errors.icon}</p>
              )}
              <div>
                <p className="text-xs text-gray-600 mb-2">Popular Icons:</p>
                <div className="flex flex-wrap gap-2">
                  {popularIcons.map((icon) => (
                    <button
                      key={icon}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, icon }))
                        if (errors.icon) {
                          setErrors(prev => ({ ...prev, icon: '' }))
                        }
                      }}
                      className={`p-3 text-2xl border-2 rounded-lg hover:border-primary-500 transition-colors ${
                        formData.icon === icon ? 'border-primary-500 bg-primary-50' : 'border-gray-200'
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              placeholder="Describe what products belong to this subcategory..."
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-none ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          {/* Info Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> After creating this subcategory, you'll be able to add products to it.
            </p>
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate('/admin/categories')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-medium shadow-lg"
            >
              <Save size={20} />
              {isEditMode ? 'Update Subcategory' : 'Create Subcategory'}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  )
}

export default SubcategoryForm
