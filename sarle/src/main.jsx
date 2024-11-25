import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Biography from './pages/Biography.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: 'biografia', element: <Biography />},
      {path: 'portfólio',element: <Portfolio />},
      {path: 'portfólio/:categoria',element: <Portfolio />},
      {path: 'galeria', element: <Gallery />},
      {path: 'contato', element: <Contact />},
      {path: '*', element: <PageNotFound />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)