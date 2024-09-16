import { AllBlogs } from "./AllBlogs";

export const ContentBlogList = () => {
  return (
    <div className=" flex flex-col px-[350px] gap-12">
      <div className="text-[24px] font-bold mt-12">All Blog Post</div>
      <AllBlogs />
      <button className="mt-8 rounded-sm bg-gray-100 inline">Load More</button>
    </div>
  );
};
