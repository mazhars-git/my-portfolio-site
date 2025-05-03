import React from "react";
import data from "../../../FakeData/blogData";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  return (
    <section id="blog" className="container py-5">
      <h6 className="text-center p-0 m-0">Blog Items</h6>
      <h2 className="text-brand pb-4">Blogs</h2>

      <div className="row">
        {data?.blogs.map((blog) => (
          <BlogDetails blog={blog} key={blog.id}></BlogDetails>
        ))}
      </div>
    </section>
  );
};

export default Blog;
