import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  // consume
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="w-11/12 max-w-[450px] py-3 flex flex-col gap-y-7 mt-16 mb-[70px] justify-center items-center">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className="mt-56">
          <p className="font-bold text-4xl">Oops ! Posts Not Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post} />
          // <div key={post.id}>
          //   <p className="text-xs font-bold">{post.title}</p>
          //   <p className="text-[10px] mt-1">
          //     By <span className="italic">{post.author}</span> on{" "}
          //     <span className="font-bold underline">{post.category}</span>
          //   </p>
          //   <p className="text-[11px]">Posted on {post.date}</p>
          //   <p className="text-xs mt-[10px]">{post.content}</p>
          //   <div className="text-blue-700 flex gap-2">
          //     {post.tags.map((tag, index) => {
          //       return (
          //         <span
          //           className="underline font-bold text-[9px] mt-2"
          //           key={index}
          //         >{`#${tag}`}</span>
          //       );
          //     })}
          //   </div>
          // </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
