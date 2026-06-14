import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import PageLoader from './components/PageLoader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import AhhharProduct from './pages/AhhharProduct'

function App() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/products/ahhhar" element={<AhhharProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
