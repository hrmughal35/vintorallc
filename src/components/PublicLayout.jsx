import Header from './Header'
import Footer from './Footer'
import BackgroundMotion from './BackgroundMotion'
import { Outlet } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const PublicLayout = () => {
  const { theme } = useTheme()
  const isSimple = theme === 'simple'

  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      {!isSimple && <BackgroundMotion variant="default" />}
      <Header />
      <main className="flex-grow relative z-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout
