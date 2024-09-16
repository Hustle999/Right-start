import { useEffect, useState } from "react";
import { SingleBlogStyle } from "./SingleBlogStyle";

export const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?top=10")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  };
  useEffect(() => {
    fetchData();
    console.log(blogs);
  }, []);
  return (
    <div className="grid grid-cols-3 gap-[20px]">
      {blogs.map((blog) => {
        return <SingleBlogStyle blog={blog} />;
      })}
    </div>
  );
};
