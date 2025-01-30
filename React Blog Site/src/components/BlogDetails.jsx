import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div>
      {/* post.id = blogId */}
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold">{post.title}</span>
      </NavLink>
      <p className="text-[10px] mt-1">
        By <span className="italic">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold underline">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-[11px]">Posted on {post.date}</p>
      <p className="text-xs mt-[10px]">{post.content}</p>
      <div className="text-blue-700 flex gap-2">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="underline font-bold text-[9px] mt-2">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
