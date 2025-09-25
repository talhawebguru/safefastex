'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { FiSearch, FiUser, FiShoppingCart, FiMenu } from 'react-icons/fi'

const HeaderActions = ({ onMobileMenuToggle }) => {
  // Only Get a quote and mobile menu

  return (
    <div className="flex items-center space-x-4">
      {/* Desktop: Only Get a Quote Button */}
      <div className="hidden lg:flex items-center">
        <Link
          href="/contacts"
          className="px-6 py-3 rounded-2xl bg-amber-400 text-gray-900 font-semibold shadow-sm hover:bg-amber-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
        >
          Get a quote
        </Link>
      </div>

      {/* Mobile: Only Mobile Menu Trigger */}
      <div className="flex lg:hidden items-center">
        <button
          onClick={onMobileMenuToggle}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Open Menu"
        >
          <FiMenu className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
}

export default HeaderActions