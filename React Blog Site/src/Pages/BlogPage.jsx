import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const newUrl = "https://codehelp-apis.vercel.app/api/";
  const [curBlog, setCurBlog] = useState(null); //current blogs
  const [relBlogs, setRelBlogs] = useState([]); //Related Blogs
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext); //calling from App context
  const blogId = location.pathname.split("/").at(-1); //extracting blog ID from URL

  async function fetchRelBlogs() {
    setLoading(true);
    let url = `${newUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCurBlog(data.blog);
      setRelBlogs(data.relatedBlogs);
    } catch (error) {
      console.log("Error in API CALL");
      setCurBlog(null);
      setRelBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelBlogs();
    }
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      {loading ? (
        <Spinner />
      ) : curBlog ? (
        <div>
          <BlogDetails post={curBlog} />
          <div>
            <h2>Related Blogs</h2>
            {relBlogs.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No Blogs Found</p>
      )}
    </div>
  );
};

export default BlogPage;
