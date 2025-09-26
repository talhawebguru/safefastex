import Container from "@/app/components/common/Container";
import ArticleBody from "@/app/components/blog/ArticleBody";
import RelatedPosts from "@/app/components/blog/RelatedPosts";
import { getBlogPost, getRelatedPosts } from "@/app/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import NameBanner from "@/app/components/about/NameBanner";

export async function generateStaticParams() {
  // Pre-render all mock posts (replace with Strapi slugs later)
  return [{ blogSlug: "transportation-services-los-angeles" }];
}

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.blogSlug);
  if (!post) return { title: "Blog Post" };
  return {
    title: post.title + " | SafeFastEx",
    description: post.excerpt,
  };
}

export default function BlogArticlePage({ params }) {
  const post = getBlogPost(params.blogSlug);
  if (!post) {
    return (
      <main className="py-32">
        <Container>
          <p className="text-center text-zinc-600 font-['Manrope']">
            Post not found.
          </p>
        </Container>
      </main>
    );
  }

  const related = getRelatedPosts(post.slug, 3);
  // Define breadcrumbs for blog page
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Blogs" }];
  return (
    <main className=" pb-24">
      <NameBanner
        title="Our Blogs"
        backgroundImage="/images/nameBanner.jpg"
        breadcrumbs={breadcrumbs}
      />
      <Container>
        {/* Breadcrumbs */}
        <nav className="text-xs font-['Manrope'] text-zinc-600 mb-8 flex items-center space-x-2">
          <Link href="/" className="hover:text-zinc-800 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-zinc-800 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-zinc-800 line-clamp-1">{post.title}</span>
        </nav>

        {/* Meta & Cover */}
        <div className="">
          <div className="flex items-center text-[11px] tracking-wide font-['Manrope'] text-zinc-600 gap-2 mb-4">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-400" />
            <span>{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-400" />
            <span className="flex items-center gap-1">
              <FiClock className="w-3 h-3" />
              {post.readingTime}
            </span>
          </div>
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-10">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4">
              <div
                className={`${post.categoryColor} rounded-2xl px-5 py-2 flex justify-center items-center`}
              >
                <span className="text-zinc-800 text-xs font-medium font-['Manrope']">
                  {post.category}
                </span>
              </div>
            </div>
          </div>
          <h1 className="text-zinc-800 text-2xl sm:text-3xl lg:text-[30px] font-semibold font-['Manrope'] leading-snug mb-8">
            {post.title}
          </h1>
        </div>

        {/* Article Body */}
        <div className="max-w-4xl">
          <ArticleBody blocks={post.body} />
        </div>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="max-w-4xl mt-14 flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium font-['Manrope']"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Related Posts */}
        <div className="mx-auto">
          <RelatedPosts posts={related} />
        </div>
      </Container>
    </main>
  );
}
