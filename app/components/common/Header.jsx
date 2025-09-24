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