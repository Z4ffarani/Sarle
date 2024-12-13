import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import AboutProject from './pages/AboutProject.jsx'

import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: 'sobre nós', element: <AboutUs />},
      {path: 'portfólio', element: <Portfolio />},
      {path: 'portfólio/:categoria', element: <Portfolio />},
      {path: 'portfólio/:categoria/:titulo', element: <AboutProject />},
      {path: 'contato', element: <Contact />},
      {path: '*', element: <PageNotFound />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)