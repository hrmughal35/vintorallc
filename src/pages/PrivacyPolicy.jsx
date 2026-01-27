import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { getPrivacyPolicy } from '../data/legalPages'

const PrivacyPolicy = () => {
  const content = getPrivacyPolicy()

  const formatContent = (text) => {
    return text
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8">{line.replace('## ', '')}</h2>
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 mb-2 text-gray-700">{line.replace('- ', '')}</li>
        }
        if (line.trim() === '') {
          return <br key={index} />
        }
        return <p key={index} className="text-gray-700 leading-relaxed mb-4">{line}</p>
      })
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-4 rounded-xl">
              <Shield className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {formatContent(content)}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
