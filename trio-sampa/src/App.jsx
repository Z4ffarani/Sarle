import { BooleanProvider } from './components/BooleanContext.jsx'
import Header from './components/Header.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <BooleanProvider>
        <Header />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </BooleanProvider>
    </>
  )
}