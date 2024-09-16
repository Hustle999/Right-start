import { AllBlogs } from "../blog-listing/AllBlogs";
import { ContentBlogList } from "../blog-listing/ContentBlogList";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export default function BlogListing() {
  return (
    <div>
      <Header />
      <ContentBlogList />
      <Footer />
    </div>
  );
}
