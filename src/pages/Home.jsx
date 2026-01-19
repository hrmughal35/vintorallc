import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Users, Clock } from 'lucide-react'
import Hero from '../components/sections/Hero'
import AboutPreview from '../components/sections/AboutPreview'
import ProductsPreview from '../components/sections/ProductsPreview'
import Stats from '../components/sections/Stats'
import CustomerConcerns from '../components/sections/CustomerConcerns'

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <CustomerConcerns />
      <AboutPreview />
      <Stats />
      <ProductsPreview />
    </div>
  )
}

export default Home
