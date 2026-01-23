import { motion } from 'framer-motion'
import { Package, FileText, Users, TrendingUp, ArrowRight, FolderTree, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { productHierarchy } from '../../data/products'
import { blogPosts } from '../../data/blog'
import { getTotalCount, getUnreadCount } from '../../data/contacts'

const Dashboard = () => {
  // Calculate stats
  const totalProducts = Object.values(productHierarchy).reduce((acc, category) => {
    return acc + Object.values(category.subcategories || {}).reduce((subAcc, subcat) => {
      return subAcc + (subcat.products?.length || 0)
    }, 0)
  }, 0)

  const totalCategories = Object.keys(productHierarchy).length
  const totalBlogPosts = blogPosts.length
  const featuredPosts = blogPosts.filter(post => post.featured).length
  const totalContacts = getTotalCount()
  const unreadContacts = getUnreadCount()

  const stats = [
    {
      label: 'Total Products',
      value: totalProducts,
      icon: Package,
      color: 'from-blue-500 to-blue-600',
      link: '/admin/products',
    },
    {
      label: 'Product Categories',
      value: totalCategories,
      icon: Package,
      color: 'from-green-500 to-green-600',
      link: '/admin/products',
    },
    {
      label: 'Blog Posts',
      value: totalBlogPosts,
      icon: FileText,
      color: 'from-purple-500 to-purple-600',
      link: '/admin/blog',
    },
    {
      label: 'Contact Submissions',
      value: totalContacts,
      icon: Mail,
      color: 'from-red-500 to-red-600',
      link: '/admin/contacts',
      badge: unreadContacts > 0 ? unreadContacts : null,
    },
  ]

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome to the admin panel. Manage your products and content.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <Link to={stat.link} className="block">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 relative`}>
                    <stat.icon size={24} className={`text-gradient-to-br ${stat.color} bg-clip-text text-transparent`} style={{ color: stat.color.includes('blue') ? '#3b82f6' : stat.color.includes('green') ? '#10b981' : stat.color.includes('purple') ? '#8b5cf6' : stat.color.includes('red') ? '#ef4444' : '#f97316' }} />
                    {stat.badge && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {stat.badge}
                      </span>
                    )}
                  </div>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/admin/categories/new"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              <FolderTree size={24} className="text-gray-400 group-hover:text-primary-600 transition-colors" />
              <span className="font-semibold text-gray-700 group-hover:text-primary-700">Add Category</span>
            </Link>
            <Link
              to="/admin/products/new"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              <Package size={24} className="text-gray-400 group-hover:text-primary-600 transition-colors" />
              <span className="font-semibold text-gray-700 group-hover:text-primary-700">Add New Product</span>
            </Link>
            <Link
              to="/admin/blog/new"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 flex items-center justify-center gap-3 group"
            >
              <FileText size={24} className="text-gray-400 group-hover:text-primary-600 transition-colors" />
              <span className="font-semibold text-gray-700 group-hover:text-primary-700">Create Blog Post</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
