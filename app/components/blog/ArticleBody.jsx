"use client"
import Image from 'next/image'
import { motion } from 'motion/react'

const blockVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 }
  })
}

const ArticleBody = ({ blocks = [] }) => {
  return (
    <div className="space-y-10 md:space-y-12">
      {blocks.map((block, idx) => {
        if (block.type === 'paragraph') {
          return (
            <motion.p
              key={idx}
              custom={idx}
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="text-zinc-800 text-sm md:text-[15px] font-normal font-['Manrope'] leading-[1.85] tracking-tight"
            >
              {block.content}
            </motion.p>
          )
        }
        if (block.type === 'quote') {
          return (
            <motion.blockquote
              key={idx}
              custom={idx}
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="relative pl-14 pr-4 py-6 bg-[#39C0C8]/5 rounded-2xl border border-[#39C0C8]/20"
            >
              <span className="absolute left-6 top-6 flex space-x-1">
                <span className="w-3 h-3 rounded-sm bg-zinc-800" />
                <span className="w-3 h-3 rounded-sm bg-[#39C0C8]" />
              </span>
              <p className="text-zinc-800 text-sm md:text-[15px] font-normal font-['Manrope'] leading-[1.85] tracking-tight">
                {block.content}
              </p>
            </motion.blockquote>
          )
        }
        if (block.type === 'image') {
          return (
            <motion.div
              key={idx}
              custom={idx}
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="relative w-full aspect-[920/460] rounded-3xl overflow-hidden"
            >
              <Image
                src={block.src}
                alt={block.alt || 'Blog image'}
                fill
                sizes="(min-width: 1024px) 920px, 100vw"
                className="object-cover"
              />
            </motion.div>
          )
        }
        return null
      })}
    </div>
  )
}

export default ArticleBody