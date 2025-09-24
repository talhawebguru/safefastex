'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { FiSearch, FiUser, FiShoppingCart, FiMenu } from 'react-icons/fi'

const HeaderActions = ({ onMobileMenuToggle }) => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartItemCount] = useState(0) // This would come from context/state management

  return (
    <div className="flex items-center space-x-4">
      {/* Desktop Actions */}
      <div className="hidden lg:flex items-center space-x-4">
        {/* Search */}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
          aria-label="Search"
        >
          <FiSearch className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
        </button>

        {/* Login/Register */}
        <Link
          href="/my-account"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
          aria-label="Login/Register"
        >
          <FiUser className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
        </Link>

        {/* Shopping Cart */}
        <Link
          href="/cart"
          className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
          aria-label="Shopping Cart"
        >
          <FiShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </Link>

        {/* Get a Quote Button */}
        <Link
          href="/contacts"
          className="ml-6 px-6 py-3 rounded-2xl bg-amber-400 text-gray-900 font-semibold shadow-sm hover:bg-amber-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
        >
          Get a quote
        </Link>
      </div>

      {/* Mobile Actions */}
      <div className="flex lg:hidden items-center space-x-3">
        {/* Mobile Search */}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Search"
        >
          <FiSearch className="w-5 h-5 text-gray-600" />
        </button>

        {/* Mobile Cart */}
        <Link
          href="/cart"
          className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Shopping Cart"
        >
          <FiShoppingCart className="w-5 h-5 text-gray-600" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </Link>

        {/* Mobile Menu Trigger */}
        <button
          onClick={onMobileMenuToggle}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Open Menu"
        >
          <FiMenu className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4"
          >
            <h3 className="text-xl font-semibold mb-4">Search</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-2 p-2 text-gray-600 hover:text-blue-600"
              >
                <FiSearch className="w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setSearchOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default HeaderActions