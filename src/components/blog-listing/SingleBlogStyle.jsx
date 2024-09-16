import { CatagoryTitle } from "./CatagoryTitle";

export const SingleBlogStyle = ({ blog }) => {
  return (
    <div className=" flex flex-col border-[1px] rounded-2xl shadow-xl gap-4 p-4">
      <img className="rounded-2xl" src={blog.cover_image} alt="" />
      <CatagoryTitle />
      <h1 className="text-[24px] font-bold">{blog.title}</h1>
      <div className="flex justify-between">
        <div>{blog.user.name}</div>
        <div>{blog.published_at}</div>
      </div>
    </div>
  );
};
