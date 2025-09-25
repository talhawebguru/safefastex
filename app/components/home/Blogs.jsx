"use client";
import { motion } from "motion/react";
import Container from "../common/Container";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Blog1 from "@/public/images/blog-1.png"; // Replace with your image paths
import Blog2 from "@/public/images/blog-2.png";
import Blog3 from "@/public/images/blog-3.png";
import Link from "next/link";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      date: "Jul. 05/2024",
      title: "Digital communications in people's daily lives",
      description:
        "Link salmon cherry salmon combtail gourami frigate mackerel snake mackerel....",
      image: Blog1,
      category: "Logistic",
      categoryColor: "bg-amber-400",
    },
    {
      id: 2,
      date: "Jul. 05/2024",
      title: "Creating new working conditions in the logistic",
      description:
        "Frigate mackerel snake mackerel upside-down catfish finback cat shark. Halo...",
      image: Blog2,
      category: "Transport",
      categoryColor: "bg-amber-400",
    },
    {
      id: 3,
      date: "Jul. 05/2024",
      title: "Transportation services in Los Angeles region",
      description:
        "Reedfish bonefish trahira bristlenose catfish, longnose. Frigate mackerel s...",
      image: Blog3,
      category: "Shipping",
      categoryColor: "bg-amber-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header Section */}
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
            <motion.div variants={itemVariants} className="flex-shrink-0">
                <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              className=""
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
                <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-gray-900">
                  <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                </span>
              </Link>
            </motion.div>
            </motion.div>
          </div>

          {/* Blog Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-0"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
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
                      {/* Placeholder Image */}
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
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Blogs;
