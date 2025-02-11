import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import Cards from "./components/Card";
import { toast } from "react-toastify";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
const App = () => {
  const [courses, setCourses] = useState(null);
  const [category, setCategory] = useState(filterData[0].title);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // console.log(output.data);
      setCourses(output.data);
    } catch (error) {
      // console.log(err);
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <div className="bg-bgDark2 min-h-screen">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />

        <div className="w-11/12 max-w-[1200px]  mx-auto flex flex-wrap items-center justify-center">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
