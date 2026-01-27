import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const TermsOfService = () => {
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
              <FileText className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on Vintora LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                The materials on Vintora LLC's website are provided on an 'as is' basis. Vintora LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Vintora LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vintora LLC's website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Email: info@vintorallc.com<br />
                Website: www.vintorallc.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsOfService
