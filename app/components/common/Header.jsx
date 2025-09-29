'use client'

import React, { useState, useEffect } from 'react'
import Container from './Container'
import Logo from './Logo'
import Navigation from './Navigation'
import HeaderActions from './HeaderActions'
import MobileMenu from './MobileMenu'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-gray-900 text-white px-4 py-2 z-50 focus:outline-none focus:ring-2 focus:ring-white rounded"
      >
        Skip to main content
      </a>
      
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Left Section - Mobile Menu Button (visible on small screens only) */}
    

            {/* Logo */}
            <div className="flex-shrink-0 pr-3 lg:pr-6">
              <Logo />
            </div>

            {/* Desktop Navigation - centered */}
            <div className="hidden lg:flex flex-1 justify-center">
              <Navigation />
            </div>

            {/* Header Actions */}
            <div className="flex items-center pl-3 lg:pl-6">
              <HeaderActions onMobileMenuToggle={handleMobileMenuToggle} />
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />

      {/* Header Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20"></div>
    </>
  )
}

export default Header