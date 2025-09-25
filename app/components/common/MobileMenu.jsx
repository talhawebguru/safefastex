'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { FiX, FiChevronDown } from 'react-icons/fi'

const mobileNavigationItems = [
  { label: 'Home', href: '/', hasSubmenu: false },
  { label: 'About', href: '/about', hasSubmenu: false },
  {
    label: 'Services',
    href: '/services',
    hasSubmenu: true,
    submenuItems: [
      { label: 'Road Freight', href: '/services/road-freight' },
      { label: 'Ship Freight', href: '/services/ship-freight' },
      { label: 'Air Freight', href: '/services/air-freight' },
    ],
  },
  { label: 'Blog', href: '/blog', hasSubmenu: false },
  { label: 'Contact', href: '/contact', hasSubmenu: false },
]

const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedItem, setExpandedItem] = useState(null)

  const toggleSubmenu = (index) => {
    setExpandedItem(expandedItem === index ? null : index)
  }

  const handleLinkClick = () => {
    onClose()
    setExpandedItem(null)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-opacity-60 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Mobile Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-80 h-full bg-white z-50 shadow-xl lg:hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <FiX className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="overflow-y-auto h-full pb-20">
              <nav className="py-6">
                {mobileNavigationItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center justify-between px-6 py-4">
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium flex-1"
                      >
                        {item.label}
                      </Link>
                      {item.hasSubmenu && (
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        >
                          <FiChevronDown
                            className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                              expandedItem === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Submenu */}
                    <AnimatePresence>
                      {item.hasSubmenu && expandedItem === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="bg-gray-50"
                        >
                          {item.submenuItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              onClick={handleLinkClick}
                              className="block px-12 py-3 text-gray-700 hover:text-blue-600 hover:bg-white transition-colors duration-200"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Mobile Menu Footer */}
              <div className="px-6 py-6 mt-6 bg-gray-50 border-t border-gray-200">
                <Link
                  href="/contacts"
                  onClick={handleLinkClick}
                  className="block w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                  Get a quote
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu