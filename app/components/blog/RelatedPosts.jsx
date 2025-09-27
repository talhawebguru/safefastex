"use client"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'

const RelatedPosts = ({ posts = [] }) => {
  if (!posts.length) return null
  return (
    <section className="pt-20">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-neutral-900 text-3xl font-semibold font-['Space_Grotesk'] uppercase leading-tight">
          Related Articles
        </h3>
        <Link href="/blog" className="text-sm font-medium font-manrope text-zinc-800 border-b border-zinc-800 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative w-full aspect-[420/260] rounded-3xl overflow-hidden mb-6">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <div className={`${post.categoryColor} rounded-2xl px-4 py-2 flex justify-center items-center`}> 
                  <span className="text-zinc-800 text-xs font-medium font-manrope leading-tight">{post.category}</span>
                </div>
              </div>
            </div>
            <h4 className="text-zinc-800 text-xl font-semibold font-manrope leading-8 mb-3 group-hover:text-neutral-600 transition-colors">
              {post.title}
            </h4>
            <p className="text-zinc-800 text-sm font-normal font-manrope leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default RelatedPosts