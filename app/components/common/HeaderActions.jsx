"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FiSearch, FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";

const HeaderActions = ({ onMobileMenuToggle }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartItemCount] = useState(0); // This would come from context/state management

  return (
    <div className="flex items-center space-x-4">
      {/* Get a Quote Button */}
      <Link
        href="/request-quote"
        className="ml-6 px-6 py-3 rounded-2xl bg-amber-400 text-gray-900 font-semibold shadow-sm hover:bg-amber-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
      >
        Get a quote
      </Link>
    </div>
  );
};

export default HeaderActions;
