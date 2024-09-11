import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";

export const SingleBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  };
  useEffect(() => {
    fetchData();
    console.log(blogs);
  }, []);
  return (
    <div>
      {blogs.map((blog) => {
        return <ArticleCard blog={blog} />;
      })}
    </div>
  );
};
