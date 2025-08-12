import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import HeroSection from './components/HeroSection';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      {/* ideally there should be a page here, but for now yeh hii sahi */}
      <Route path='' element={<HeroSection />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
