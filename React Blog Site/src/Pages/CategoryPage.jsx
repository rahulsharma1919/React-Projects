import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const navigation = useNavigate();

  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>
          Blogs On<span>{category}</span>
        </h2>
      </div>
      <Blogs />
      <Footer />
    </div>
  );
};

export default CategoryPage;
