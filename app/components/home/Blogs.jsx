"use client";
import BlogGrid from "../common/BlogGrid";

const Blogs = () => {
  return (
    <BlogGrid 
      showHeader={true}
      showSeeAllButton={true}
      maxPosts={3}
      gridCols="grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      spacing="gap-6 md:gap-8 xl:gap-0"
    />
  );
};

export default Blogs;
