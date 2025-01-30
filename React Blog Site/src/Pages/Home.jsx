import React from "react";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-y-1">
      <Header />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
