"use client";
import { motion } from "motion/react";
import { useState } from "react";
import Container from "../common/Container";
import Image from "next/image";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Blog1 from "@/public/images/blog-1.jpg";
import Blog2 from "@/public/images/blog-2.jpg";
import Blog3 from "@/public/images/blog-3.jpg";
import Link from "next/link";

const BlogGrid = ({
  showHeader = false,
  showSeeAllButton = false,
  maxPosts = null,
  gridCols = "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  spacing = "gap-6 md:gap-8 xl:gap-0",
  showPagination = false,
  postsPerPage = 9,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = [
    {
      id: 1,
      date: "Jul. 05/2024",
      title: "Digital communications in people's daily lives",
      description:
        "Link salmon cherry salmon combtail gourami frigate mackerel snake mackerel....",
      image: Blog1,
      category: "Logistic",
  categoryColor: "bg-[#39C0C8]",
    },
    {
      id: 2,
      date: "Jul. 05/2024",
      title: "Creating new working conditions in the logistic",
      description:
        "Frigate mackerel snake mackerel upside-down catfish finback cat shark. Halo...",
      image: Blog2,
      category: "Transport",
  categoryColor: "bg-[#39C0C8]",
    },
    {
      id: 3,
      date: "Jul. 05/2024",
      title: "Transportation services in Los Angeles region",
      description:
        "Reedfish bonefish trahira bristlenose catfish, longnose. Frigate mackerel s...",
      image: Blog3,
      category: "Shipping",
  categoryColor: "bg-[#39C0C8]",
    },
    {
      id: 4,
      date: "Jul. 10/2024",
      title: "Innovation in supply chain management",
      description:
        "Explore the latest trends and technologies transforming modern logistics...",
      image: Blog1,
      category: "Innovation",
      categoryColor: "bg-emerald-400",
    },
    {
      id: 5,
      date: "Jul. 15/2024",
      title: "Sustainable transportation solutions",
      description:
        "Discover eco-friendly approaches to modern transportation systems...",
      image: Blog2,
      category: "Sustainability",
      categoryColor: "bg-blue-400",
    },
    {
      id: 6,
      date: "Jul. 20/2024",
      title: "Future of autonomous delivery systems",
      description:
        "Understanding how AI and automation are reshaping delivery services...",
      image: Blog3,
      category: "Technology",
      categoryColor: "bg-purple-400",
    },
  ];

  // Calculate pagination
  const totalPosts = blogPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Filter posts based on maxPosts or pagination
  let displayedPosts;
  if (maxPosts && !showPagination) {
    displayedPosts = blogPosts.slice(0, maxPosts);
  } else if (showPagination) {
    displayedPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  } else {
    displayedPosts = blogPosts;
  }

  const containerVariants = {
    hidden: { opacity: 0.5 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0.5, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0.2, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0.3, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to top of blog grid
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`${showHeader ? "py-8 sm:py-12 lg:py-16 xl:py-20 overflow-x-hidden" : ""}`}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header Section - Only show if showHeader is true */}
          {showHeader && (
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">
              {/* Left Side - Label and Title */}
              <div className="space-y-6 lg:space-y-8">
                {/* Blog Label */}
                <motion.div
                  variants={itemVariants}
                  className="text-neutral-900 text-sm font-medium font-['Manrope'] leading-loose"
                >
                  / blog /
                </motion.div>

                {/* Hero Text */}
                <motion.div
                  variants={containerVariants}
                  className="space-y-1 sm:space-y-2"
                >
                  <motion.div
                    variants={wordVariants}
                    className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-2"
                  >
                    <span className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                      See
                    </span>
                    <span className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                      latest
                    </span>
                    <span className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                      articles
                    </span>
                  </motion.div>
                  <motion.div
                    variants={wordVariants}
                    className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-2"
                  >
                    <span className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                      from
                    </span>
                    <span className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                      our
                    </span>
                    <span className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                      company
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Side - See All Posts Button */}
              {showSeeAllButton && (
                <motion.div variants={itemVariants} className="flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                  >
                    <Link
                      href="/blog"
                      className="group relative inline-flex items-center rounded-2xl border border-gray-900 text-gray-900 pl-6 pr-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/60"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gray-900 transition-[width] duration-300 ease-out group-hover:w-full rounded-2xl"
                      />
                      <span className="relative z-10 font-semibold group-hover:text-white">
                        See all posts
                      </span>
                      <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#39C0C8] text-gray-900">
                        <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                      </span>
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </div>
          )}

          {/* Blog Cards Grid */}
          <motion.div
            variants={containerVariants}
            className={`grid ${gridCols} ${spacing}`}
          >
            {displayedPosts.map((post, index) => (
              <Link href="/blog/innovation-supply-chain-management" key={post.id}>
                <motion.article
                  variants={cardVariants}
                  className="group cursor-pointer"
                >
                  <div className="space-y-6 lg:space-y-8 px-0 xl:px-5 max-w-[460px] mx-auto xl:mx-0">
                    {/* Date with border */}
                    <div className="relative">
                      <div className="border-b-2 border-neutral-900 pb-2 w-full max-w-sm">
                        <span className="text-neutral-400 text-sm font-semibold font-['Manrope'] leading-loose tracking-tight">
                          {post.date}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="pt-4">
                      <h3 className="text-zinc-800 text-xl sm:text-2xl lg:text-3xl font-semibold font-['Manrope'] leading-8 sm:leading-9 group-hover:text-neutral-600 transition-colors">
                        {post.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="pt-2">
                      <p className="text-zinc-800 text-base sm:text-lg font-normal font-['Manrope'] leading-loose">
                        {post.description}
                      </p>
                    </div>

                    {/* Image with Category Tag */}
                    <div className="relative pt-4">
                      <div className="relative w-full aspect-[420/467] rounded-3xl overflow-hidden bg-gray-200">
                        {/* Blog Image */}
                        <Image
                          src={post.image}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Category Tag */}
                        <div className="absolute top-4 left-4">
                          <div
                            className={`${post.categoryColor} rounded-2xl px-6 py-2.5 overflow-hidden flex justify-center items-center`}
                          >
                            <span className="text-zinc-800 text-xs font-medium font-['Manrope'] leading-tight">
                              {post.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>

          {/* Pagination */}
          {showPagination && totalPages > 1 && (
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center mt-16 space-x-2"
            >
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center justify-center w-12 h-12 rounded-2xl border-2 transition-colors ${
                  currentPage === 1
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>

              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`flex items-center justify-center w-12 h-12 rounded-2xl border-2 font-semibold font-['Manrope'] transition-colors ${
                      currentPage === pageNumber
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-200 text-gray-900 hover:border-gray-900"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center justify-center w-12 h-12 rounded-2xl border-2 transition-colors ${
                  currentPage === totalPages
                    ? "border-gray-200 text-gray-400 cursor-not-allowed"
                    : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default BlogGrid;
