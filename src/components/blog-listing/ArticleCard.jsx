export const ArticleCard = ({ blog }) => {
  return (
    <div>
      {/* <h1>{blog.title}</h1> */}
      <div>{blog.description}</div>
      <img src={blog.cover_image} alt="" />
    </div>
  );
};
