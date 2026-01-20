import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import { Save, X, Plus, Trash2 } from 'lucide-react'
import { productHierarchy, getMainCategories, getSubcategories, getProducts } from '../../data/products'

const ProductForm = () => {
  const navigate = useNavigate()
  const { categoryId, subcategoryId, productId } = useParams()
  const isEditMode = !!productId

  const [formData, setFormData] = useState({
    name: '',
    size: '',
    volume: '',
    top: '',
    bottom: '',
    height: '',
    qtyPerSleeve: '',
    sleevePerCarton: '',
    // Additional fields for different product types
    diameter: '',
    length: '',
    width: '',
    capacity: '',
    material: '',
    thickness: '',
  })

  const [selectedCategory, setSelectedCategory] = useState(categoryId || '')
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategoryId || '')
  const mainCategories = getMainCategories()

  useEffect(() => {
    if (isEditMode && categoryId && subcategoryId && productId) {
      const product = getProducts(categoryId, subcategoryId).find(p => p.id === productId)
      if (product) {
        setFormData(product)
        setSelectedCategory(categoryId)
        setSelectedSubcategory(subcategoryId)
      }
    }
  }, [isEditMode, categoryId, subcategoryId, productId])

  const subcategories = selectedCategory ? getSubcategories(selectedCategory) : []
  const currentSubcategory = selectedCategory && selectedSubcategory 
    ? productHierarchy[selectedCategory]?.subcategories[selectedSubcategory]
    : null

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement save functionality with backend API
    console.log('Saving product:', { categoryId: selectedCategory, subcategoryId: selectedSubcategory, ...formData })
    alert(isEditMode ? 'Product updated successfully!' : 'Product created successfully!')
    navigate('/admin/products')
  }

  const getRequiredFields = () => {
    if (!currentSubcategory) return []
    
    // Check first product in subcategory to determine required fields
    const sampleProduct = currentSubcategory.products?.[0]
    if (!sampleProduct) return ['name', 'size']

    const fields = Object.keys(sampleProduct).filter(key => 
      key !== 'id' && 
      sampleProduct[key] !== undefined && 
      sampleProduct[key] !== null &&
      sampleProduct[key] !== ''
    )
    return fields
  }

  const requiredFields = getRequiredFields()

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
                {isEditMode ? 'Edit Product' : 'Add New Product'}
              </h1>
              <p className="text-gray-600">
                {isEditMode ? 'Update product information' : 'Create a new product in your catalog'}
              </p>
            </div>
            <button
              onClick={() => navigate('/admin/products')}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value)
                  setSelectedSubcategory('')
                }}
                required
                disabled={isEditMode}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none disabled:bg-gray-100"
              >
                <option value="">Select Category</option>
                {mainCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subcategory <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                required
                disabled={isEditMode || !selectedCategory}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none disabled:bg-gray-100"
              >
                <option value="">Select Subcategory</option>
                {subcategories.map(subcat => (
                  <option key={subcat.id} value={subcat.id}>{subcat.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="e.g., Compact (2.5oz)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Dynamic Fields Based on Product Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requiredFields.includes('size') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Size <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  required={requiredFields.includes('size')}
                  placeholder="e.g., 2.5oz"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {requiredFields.includes('volume') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Volume <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="volume"
                  value={formData.volume}
                  onChange={handleInputChange}
                  required={requiredFields.includes('volume')}
                  placeholder="e.g., 75ml"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {requiredFields.includes('top') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Top Diameter <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="top"
                  value={formData.top}
                  onChange={handleInputChange}
                  required={requiredFields.includes('top')}
                  placeholder="e.g., 50mm"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {requiredFields.includes('bottom') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Bottom Diameter <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="bottom"
                  value={formData.bottom}
                  onChange={handleInputChange}
                  required={requiredFields.includes('bottom')}
                  placeholder="e.g., 35mm"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {requiredFields.includes('height') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Height <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  required={requiredFields.includes('height')}
                  placeholder="e.g., 50mm"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {requiredFields.includes('diameter') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Diameter <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="diameter"
                  value={formData.diameter}
                  onChange={handleInputChange}
                  required={requiredFields.includes('diameter')}
                  placeholder="e.g., 120mm"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {requiredFields.includes('length') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Length <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="length"
                  value={formData.length}
                  onChange={handleInputChange}
                  required={requiredFields.includes('length')}
                  placeholder="e.g., 150mm"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {requiredFields.includes('width') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Width <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="width"
                  value={formData.width}
                  onChange={handleInputChange}
                  required={requiredFields.includes('width')}
                  placeholder="e.g., 100mm"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {requiredFields.includes('capacity') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Capacity <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  required={requiredFields.includes('capacity')}
                  placeholder="e.g., 500ml"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {requiredFields.includes('qtyPerSleeve') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Qty Per Sleeve <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="qtyPerSleeve"
                  value={formData.qtyPerSleeve}
                  onChange={handleInputChange}
                  required={requiredFields.includes('qtyPerSleeve')}
                  placeholder="e.g., 50pcs"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {requiredFields.includes('sleevePerCarton') && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sleeves Per Carton <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="sleevePerCarton"
                  value={formData.sleevePerCarton}
                  onChange={handleInputChange}
                  required={requiredFields.includes('sleevePerCarton')}
                  placeholder="e.g., 20"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate('/admin/products')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors font-medium shadow-lg"
            >
              <Save size={20} />
              {isEditMode ? 'Update Product' : 'Create Product'}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  )
}

export default ProductForm
