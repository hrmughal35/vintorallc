import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BackgroundMotion from './components/BackgroundMotion'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router basename="/vintorallc">
      <div className="min-h-screen flex flex-col relative bg-white">
        <BackgroundMotion variant="default" />
        <Header />
        <main className="flex-grow relative z-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
