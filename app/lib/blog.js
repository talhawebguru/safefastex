// Temporary mock blog data + helpers (replace with Strapi fetching later)

export const blogPosts = [
  {
    slug: 'transportation-services-los-angeles',
    id: 1,
    title: 'Transportation services in Los Angeles region',
    excerpt: 'Triggerfish bluntnose knifefish upside‑down catfish cobia spookfish convict cichlid.',
    category: 'Logistic',
    categoryColor: 'bg-amber-400',
    author: 'Din Parker',
    authorAvatar: '/images/author-placeholder.png',
    date: 'May, 27 / 2024',
    coverImage: '/images/blog-1.png',
    readingTime: '6 min read',
    body: [
      { type: 'paragraph', content: 'Triggerfish bluntnose knifefish upside‑down catfish cobia spookfish convict cichlid. “cat shark; saw shark; trout cod.” Pacific hake false trevally queen parrotfish black prickleback moss. Pacific hake false trevally queen parrotfish black prickleback moss. Hasbrouck duckbilled barracuda, goosefish gar pleco, chum salmon armored catfish gudgeon sawfish withefish orbicular batfish mummichog paradise fish!' },
      { type: 'paragraph', content: 'Curabitur gravida orci purus, pellentesque efficitur metus ullamcorper et. In hac habitasse platea dictumst. Quisque quis turpis dictum, congue est vitae porttitor. Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish mordi.' },
      { type: 'quote', content: 'Vestibulum blandit libero at mauris condimentum scelerisque. In scelerisque in mauris ut malesuada. Nam sodales scelerisque ipsum sed vestibulum. Curabitur gravida orci purus, pellentesque efficitur metus ullamcorper et. In hac habitasse platea dictumst. Quisque quis turpis dictum, congue est vitae porttitor.' },
      { type: 'paragraph', content: 'Vestibulum blandit libero at mauris condimentum scelerisque. In scelerisque in mauris ut malesuada. Nam sodales scelerisque ipsum sed vestibulum. Aliquam euismod mi vitae nibh placerat, nec auctor neque lacinia. Curabitur gravida orci purus, pellentesque efficitur metus ullamcorper et. In hac habitasse platea dictumst. Quisque quis turpis dictum, congue est vitae porttitor. Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside‑down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish mordi.' },
      { type: 'paragraph', content: 'In scelerisque in mauris ut malesuada. Nam sodales scelerisque ipsum sed vestibulum. Curabitur gravida orci purus, pellentesque efficitur metus ullamcorper et. In hac habitasse platea dictumst. Quisque quis turpis dictum, congue est vitae porttitor. Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside‑down catfish finback cat shark. Reedfish bonefish trahira bristlenose catfish, longnose lancetfish mordi. Vestibulum blandit libero at mauris condimentum scelerisque.' },
      { type: 'image', src: '/images/blog-2.png', alt: 'Port operations' },
      { type: 'paragraph', content: 'Reedfish bonefish trahira bristlenose catfish, longnose lancetfish mordi. Vestibulum blandit libero at mauris condimentum scelerisque. In scelerisque in mauris ut malesuada. Nam sodales scelerisque ipsum sed vestibulum.' }
    ],
    tags: ['logistics', 'transport', 'operations']
  },
  {
    slug: 'innovation-supply-chain-management',
    id: 2,
    title: 'Innovation in supply chain management',
    excerpt: 'Explore trends and technologies transforming logistics.',
    category: 'Innovation',
    categoryColor: 'bg-emerald-400',
    author: 'Sara Miles',
    authorAvatar: '/images/author-placeholder.png',
    date: 'Jun, 12 / 2024',
    coverImage: '/images/blog-2.png',
    readingTime: '5 min read',
    body: [
      { type: 'paragraph', content: 'Innovation body placeholder text...' }
    ],
    tags: ['innovation']
  },
  {
    slug: 'sustainable-transportation-solutions',
    id: 3,
    title: 'Sustainable transportation solutions',
    excerpt: 'Eco-friendly approaches to modern transport systems.',
    category: 'Sustainability',
    categoryColor: 'bg-blue-400',
    author: 'Luis Gomez',
    authorAvatar: '/images/author-placeholder.png',
    date: 'Jul, 08 / 2024',
    coverImage: '/images/blog-3.png',
    readingTime: '7 min read',
    body: [
      { type: 'paragraph', content: 'Sustainability body placeholder text...' }
    ],
    tags: ['sustainability']
  }
];

export function getBlogPost(slug) {
  return blogPosts.find(p => p.slug === slug);
}

export function getRelatedPosts(slug, limit = 3) {
  return blogPosts.filter(p => p.slug !== slug).slice(0, limit);
}
