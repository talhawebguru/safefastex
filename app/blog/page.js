import NameBanner from "../components/about/NameBanner";
import BlogGrid from "../components/common/BlogGrid";

export default function BlogPage() {
  // Define breadcrumbs for blog page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs" }
  ];

  return (
    <main>
        <NameBanner
          title="Our Blogs"
          backgroundImage="/images/nameBanner.jpg"
          breadcrumbs={breadcrumbs}
        />
        <BlogGrid 
          showHeader={false}
          showSeeAllButton={false}
          showPagination={true}
          postsPerPage={9}
          gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          spacing="gap-8 lg:gap-12"
        />
    </main>
  );
}