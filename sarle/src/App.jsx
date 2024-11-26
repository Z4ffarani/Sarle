import React from 'react'
import Header from './components/Header.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  )
}