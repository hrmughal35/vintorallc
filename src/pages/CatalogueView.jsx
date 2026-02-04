import { useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Printer } from 'lucide-react'
import { getMainCategories, getSubcategories, getProducts } from '../data/products'

// Format product spec for display (varies by product type)
const getProductSpecs = (product) => {
  const parts = []
  if (product.size) parts.push(product.size)
  if (product.volume) parts.push(product.volume)
  if (product.top) parts.push(`Top: ${product.top}`)
  if (product.bottom) parts.push(`Bottom: ${product.bottom}`)
  if (product.height) parts.push(`H: ${product.height}`)
  if (product.diameter) parts.push(`Ø ${product.diameter}`)
  if (product.dimensions) parts.push(product.dimensions)
  if (product.material) parts.push(product.material)
  if (product.qtyPerSleeve) parts.push(product.qtyPerSleeve)
  if (product.sleevePerCarton) parts.push(`${product.sleevePerCarton} sleeves/carton`)
  if (product.qtyPerPack) parts.push(product.qtyPerPack)
  if (product.packPerCarton) parts.push(`${product.packPerCarton} packs/carton`)
  if (product.caseQty) parts.push(product.caseQty)
  if (product.fits) parts.push(`Fits: ${product.fits}`)
  if (product.type) parts.push(product.type)
  if (product.rollsPerCarton) parts.push(`${product.rollsPerCarton} rolls/carton`)
  if (product.length) parts.push(product.length)
  return parts.filter(Boolean).join(' · ')
}

const CatalogueView = () => {
  const printRef = useRef(null)
  const [searchParams] = useSearchParams()
  const categoryId = searchParams.get('category') || null

  const allCategories = getMainCategories()
  const mainCategories = categoryId
    ? allCategories.filter((c) => c.id === categoryId)
    : allCategories
  const singleCategory = mainCategories.length === 1 ? mainCategories[0] : null

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Screen-only: back + print bar - no-print ensures it hides when printing */}
      <div className="no-print print:hidden sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <Link to="/catalogues" className="text-primary-600 hover:text-primary-700 font-medium">
          ← Back to Catalogues
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 hidden sm:inline">Use the button or Ctrl+P (Cmd+P on Mac)</span>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700"
          >
            <Printer size={18} />
            Print / Save as PDF
          </button>
        </div>
      </div>

      <div ref={printRef} className="max-w-4xl mx-auto px-4 sm:px-6 py-8 print:py-4">
        {/* Cover */}
        <div className="text-center mb-12 print:mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Vintora LLC</h1>
          <p className="text-xl text-gray-600 mt-1">
            {singleCategory ? `${singleCategory.name} Catalogue` : 'Product Catalogue'}
          </p>
          <p className="text-sm text-gray-500 mt-2">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>

        {mainCategories.map((category) => {
          const subcategories = getSubcategories(category.id)
          return (
            <div key={category.id} className="mb-10">
              <h2 className="text-xl font-bold text-primary-800 border-b-2 border-primary-200 pb-2 mb-4">
                {category.icon} {category.name}
              </h2>
              {category.description && (
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              )}

              {subcategories.map((sub) => {
                const products = getProducts(category.id, sub.id)
                return (
                  <div key={sub.id} className="mb-6 print:break-inside-avoid">
                    <h3 className="text-base font-semibold text-gray-800 mb-2">
                      {sub.icon} {sub.name}
                    </h3>
                    {sub.description && (
                      <p className="text-gray-600 text-sm mb-2">{sub.description}</p>
                    )}
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="text-left py-2 px-3 border-b border-gray-200 font-semibold">Product</th>
                            <th className="text-left py-2 px-3 border-b border-gray-200 font-semibold">Specifications</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product) => (
                            <tr key={product.id} className="border-b border-gray-100 last:border-0">
                              <td className="py-2 px-3 font-medium text-gray-900">{product.name}</td>
                              <td className="py-2 px-3 text-gray-600">{getProductSpecs(product)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}

        <div className="text-center text-sm text-gray-500 mt-12 print:mt-8 pt-6 border-t border-gray-200">
          <p>Vintora LLC — Professional supplier of disposable products</p>
          <p>For inquiries: contact via website</p>
        </div>
      </div>
    </div>
  )
}

export default CatalogueView
