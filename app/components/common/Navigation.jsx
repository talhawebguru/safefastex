'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { FiChevronDown } from 'react-icons/fi'

const navigationItems = [
  { label: 'Home', href: '/', hasDropdown: false },
  { label: 'About', href: '/about', hasDropdown: false },
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Road Freight', href: '/services/road-freight' },
      { label: 'Ship Freight', href: '/services/ship-freight' },
      { label: 'Air Freight', href: '/services/air-freight' },
    ],
  },
  { label: 'Blog', href: '/blog', hasDropdown: false },
  { label: 'Contacts', href: '/contacts', hasDropdown: false },
]

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <nav className="hidden lg:flex items-center">
      {/* Pill container */}
      <div className="relative flex items-center space-x-8 bg-gray-100 text-gray-800 rounded-3xl px-8 py-3 shadow-sm">
        {navigationItems.map((item, index) => (
        <div
          key={index}
          className="relative group"
          onMouseEnter={() => item.hasDropdown && setHoveredItem(index)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <Link
            href={item.href}
            className="flex items-center py-2 text-gray-800 hover:text-gray-900 transition-colors duration-200 font-medium"
          >
            {item.label}
            {item.hasDropdown && (
              <FiChevronDown 
                className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  hoveredItem === index ? 'rotate-180' : ''
                }`}
              />
            )}
          </Link>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {item.hasDropdown && hoveredItem === index && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 12, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="absolute left-1/2 -translate-x-1/2 p-2 bg-neutral-900 text-neutral-100 rounded-2xl shadow-2xl border border-neutral-800/60 min-w-[280px] z-50"
              >
                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                  <div key={dropdownIndex} className="relative group/sub rounded-xl">
                    <Link
                      href={dropdownItem.href}
                      className="flex items-center justify-between gap-4 px-6 py-3 text-neutral-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors duration-150"
                    >
                      <span>{dropdownItem.label}</span>
                      {dropdownItem.subItems && (
                        <FiChevronDown className="ml-1 w-3.5 h-3.5 rotate-[-90deg] opacity-70" />
                      )}
                    </Link>

                    {/* Sub-dropdown for nested items */}
                    {dropdownItem.subItems && (
                      <div className="absolute left-full top-0 ml-3 py-2 bg-neutral-900 text-neutral-100 rounded-2xl shadow-2xl border border-neutral-800/60 min-w-[220px] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-150">
                        {dropdownItem.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-5 py-2.5 text-neutral-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors duration-150"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        ))}
      </div>
    </nav>
  )
}

export default Navigation