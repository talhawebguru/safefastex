'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { FiChevronDown } from 'react-icons/fi'

const navigationItems = [
  {
    label: 'Home',
    href: '/',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Transportation (Rounded)', href: '/' },
      { label: 'Transportation (Angular)', href: '/transportation-angular' },
      { label: 'Logistic (Rounded)', href: '/logistic-rounded' },
      { label: 'Logistic (Angular)', href: '/logistic-angular' },
      { label: 'Ship Freight (Rounded)', href: '/ship-freight-rounded' },
      { label: 'Ship Freight (Angular)', href: '/ship-freight-angular' },
      { label: 'Air Freight (Rounded)', href: '/air-freight-rounded' },
      { label: 'Air Freight (Angular)', href: '/air-freight-angular' },
      { label: 'Railway Freight (Rounded)', href: '/railway-freight-rounded' },
      { label: 'Railway Freight (Angular)', href: '/railway-freight-angular' },
      { label: 'Truck Freight (Rounded)', href: '/truck-freight-rounded' },
      { label: 'Truck Freight (Angular)', href: '/truck-freight-angular' },
      { label: 'Intro (Rounded)', href: '/intro-rounded' },
      { label: 'Intro (Angular)', href: '/intro-angular' },
    ],
  },
  {
    label: 'Pages',
    href: '/pages',
    hasDropdown: true,
    dropdownItems: [
      { label: 'About Us', href: '/about-us' },
      { 
        label: 'Team', 
        href: '/team',
        subItems: [
          { label: 'Our Team', href: '/team' },
          { label: 'Single Team', href: '/team/member' },
        ]
      },
      { 
        label: 'Career', 
        href: '/career',
        subItems: [
          { label: 'Career', href: '/career' },
          { label: 'Single Vacancy', href: '/career/vacancy' },
        ]
      },
      { 
        label: 'Galleries', 
        href: '/gallery',
        subItems: [
          { label: 'Gallery Grid', href: '/gallery/grid' },
          { label: 'Gallery Masonry', href: '/gallery/masonry' },
          { label: 'Single Gallery', href: '/gallery/single' },
        ]
      },
      { label: 'Our Garage', href: '/garage' },
      { label: 'Request Quote', href: '/quote' },
      { label: 'Calculator', href: '/calculator' },
      { label: 'Certifications', href: '/certifications' },
      { label: 'Pricing Plans', href: '/pricing' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Typography', href: '/typography' },
      { label: 'Page 404', href: '/404' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Services', href: '/services' },
      { label: 'Single Service', href: '/services/service' },
    ],
  },
  {
    label: 'Shop',
    href: '/shop',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Shop', href: '/shop' },
      { label: 'Single Product', href: '/shop/product' },
      { label: 'Cart', href: '/cart' },
      { label: 'Checkout', href: '/checkout' },
      { label: 'My account', href: '/my-account' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Blog Classic', href: '/blog/classic' },
      { label: 'Blog Grid', href: '/blog/grid' },
      { label: 'Single Post', href: '/blog/post' },
    ],
  },
  {
    label: 'Contacts',
    href: '/contacts',
    hasDropdown: false,
  },
]

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <nav className="hidden lg:flex items-center">
      {/* Pill container */}
      <div className="relative flex items-center space-x-6 bg-gray-100 text-gray-800 rounded-3xl px-8 py-3 shadow-sm">
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
                className="absolute left-1/2 -translate-x-1/2 mt-2 p-2 bg-neutral-900 text-neutral-100 rounded-2xl shadow-2xl border border-neutral-800/60 min-w-[280px] z-50"
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