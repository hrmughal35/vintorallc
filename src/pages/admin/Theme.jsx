import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'
import { Palette } from 'lucide-react'

const AdminTheme = () => {
  const { theme, setTheme, themes } = useTheme()

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Site theme</h1>
          <p className="text-gray-600">Change the look of the entire website. Applies to both the public site and admin.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100">
            <label htmlFor="theme-select" className="block text-sm font-semibold text-gray-700 mb-3">
              Select theme
            </label>
            <select
              id="theme-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none bg-white text-gray-900"
            >
              {themes.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
          <div className="p-6 pt-0">
            <p className="text-sm text-gray-500 mb-4">
              {themes.find((t) => t.id === theme)?.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {themes.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTheme(t.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                    theme === t.id
                      ? 'border-primary-600 bg-primary-50 text-primary-800'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                >
                  <Palette size={18} />
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-sm text-gray-500"
        >
          Your choice is saved in this browser. Open the public site in the same browser to see the theme.
        </motion.p>
      </div>
    </div>
  )
}

export default AdminTheme
