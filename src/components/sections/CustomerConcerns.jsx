import { motion } from 'framer-motion'
import { DollarSign, Award, Clock, Headphones } from 'lucide-react'

const CustomerConcerns = () => {
  const concerns = [
    {
      concern: 'Price',
      icon: DollarSign,
      solution: 'Competitive Supply Chain',
      description: 'Ensures cost-effective solutions for our clients.',
    },
    {
      concern: 'Quality',
      icon: Award,
      solution: 'Strict QC & Traceable Code System',
      description: 'Guarantees high-quality products with comprehensive traceability.',
    },
    {
      concern: 'Lead Time',
      icon: Clock,
      solution: 'Effective Production Management',
      description: 'Shortens lead time and enhances production efficiency.',
    },
    {
      concern: 'After-Sales',
      icon: Headphones,
      solution: 'Post Purchase Services',
      description: 'Provides reliable after-sales support to ensure customer satisfaction.',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Customer Concerns & <span className="text-primary-700">Our Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We understand your priorities and deliver solutions that matter
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {concerns.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.concern}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-primary-600 to-primary-700 p-4 rounded-xl shadow-lg"
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    <div className="text-right">
                      <h3 className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">
                        Concern
                      </h3>
                      <p className="text-xl font-bold text-gray-900">{item.concern}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-300 to-primary-300"></div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary-300 to-primary-300"></div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-primary-700 mb-3 group-hover:text-primary-800 transition-colors">
                      {item.solution}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CustomerConcerns
