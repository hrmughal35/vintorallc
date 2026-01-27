import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Save, FileText, Shield, AlertCircle } from 'lucide-react'
import { getPrivacyPolicy, savePrivacyPolicy, getTermsOfService, saveTermsOfService } from '../../data/legalPages'

const LegalPages = () => {
  const [activeTab, setActiveTab] = useState('privacy') // 'privacy' or 'terms'
  const [privacyContent, setPrivacyContent] = useState('')
  const [termsContent, setTermsContent] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState(null) // 'success' or 'error'

  useEffect(() => {
    // Load content on mount
    setPrivacyContent(getPrivacyPolicy())
    setTermsContent(getTermsOfService())
  }, [])

  const handleSave = () => {
    setIsSaving(true)
    setSaveStatus(null)

    try {
      let success = false
      if (activeTab === 'privacy') {
        success = savePrivacyPolicy(privacyContent)
      } else {
        success = saveTermsOfService(termsContent)
      }

      if (success) {
        setSaveStatus('success')
        setTimeout(() => setSaveStatus(null), 3000)
      } else {
        setSaveStatus('error')
      }
    } catch (error) {
      console.error('Error saving:', error)
      setSaveStatus('error')
    } finally {
      setIsSaving(false)
    }
  }

  const formatContent = (content) => {
    // Simple markdown-like formatting
    return content
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8">{line.replace('## ', '')}</h2>
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 mb-2">{line.replace('- ', '')}</li>
        }
        if (line.trim() === '') {
          return <br key={index} />
        }
        return <p key={index} className="text-gray-700 leading-relaxed mb-4">{line}</p>
      })
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Legal Pages</h1>
          <p className="text-gray-600">Manage Privacy Policy and Terms of Service content</p>
        </motion.div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`flex-1 px-6 py-4 text-center font-semibold transition-colors ${
                  activeTab === 'privacy'
                    ? 'text-primary-700 border-b-2 border-primary-700 bg-primary-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Shield size={20} />
                  Privacy Policy
                </div>
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`flex-1 px-6 py-4 text-center font-semibold transition-colors ${
                  activeTab === 'terms'
                    ? 'text-primary-700 border-b-2 border-primary-700 bg-primary-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <FileText size={20} />
                  Terms of Service
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Save Status */}
        {saveStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-4 p-4 rounded-lg flex items-center gap-3 ${
              saveStatus === 'success'
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            {saveStatus === 'success' ? (
              <>
                <AlertCircle size={20} />
                <span>Content saved successfully!</span>
              </>
            ) : (
              <>
                <AlertCircle size={20} />
                <span>Error saving content. Please try again.</span>
              </>
            )}
          </motion.div>
        )}

        {/* Content Editor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {activeTab === 'privacy' ? 'Privacy Policy Content' : 'Terms of Service Content'}
            </label>
            <p className="text-xs text-gray-500 mb-4">
              Edit the content below. Use simple formatting: ## for headings, - for bullet points.
            </p>
            <textarea
              value={activeTab === 'privacy' ? privacyContent : termsContent}
              onChange={(e) => {
                if (activeTab === 'privacy') {
                  setPrivacyContent(e.target.value)
                } else {
                  setTermsContent(e.target.value)
                }
              }}
              className="w-full h-96 px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-700 focus:border-primary-700 transition-all bg-white text-gray-900 font-mono text-sm"
              placeholder="Enter content here..."
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save size={20} />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </motion.div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mt-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preview</h2>
          <div className="prose prose-lg max-w-none">
            {activeTab === 'privacy' ? (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-4 rounded-xl">
                    <Shield className="text-white" size={32} />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
                    <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <div>{formatContent(privacyContent)}</div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-4 rounded-xl">
                    <FileText className="text-white" size={32} />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
                    <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
                  </div>
                </div>
                <div>{formatContent(termsContent)}</div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LegalPages
