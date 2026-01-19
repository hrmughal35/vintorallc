import { motion } from 'framer-motion'
import { Globe, Users, Clock } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      number: '30+',
      label: 'Countries & Regions',
      icon: Globe,
      description: 'Our products reach customers across Europe, Asia, Africa, the Americas, and Oceania',
    },
    {
      number: '20+',
      label: 'Professional Employees',
      icon: Users,
      description: 'Dedicated team ensuring quality and excellence in every transaction',
    },
    {
      number: '24h',
      label: 'One-to-One Reception',
      icon: Clock,
      description: 'Round-the-clock support to address your needs and inquiries',
    },
  ]

  return (
    <section className="py-20 bg-primary-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Global Reach</h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Since our establishment, our unwavering commitment to quality and excellence has enabled 
            us to build a strong global presence. Today, our products reach customers in many countries 
            across Europe, Asia, Africa, the Americas, and Oceania, serving markets such as France, 
            Germany, Spain, Japan, the United Arab Emirates, Egypt, Mexico, Peru, Chile, and Australia. 
            Our global reach is a testament to our dedication to quality, reliability, and international excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                  <Icon size={40} className="text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-4">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-primary-100 text-sm">{stat.description}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
