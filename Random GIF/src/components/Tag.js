import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  const [tag, setTag] = useState("anime");
  //   const [gif, setGif] = useState("");
  //   const [loading, setLoading] = useState("false");

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const { data } = await axios.get(url);
  //     const imgSource = data.data.images.downsized_large.url;
  //     setGif(imgSource);
  //     setLoading(false);
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  const { gif, loading, fetchData } = useGif(tag);
  return (
    <div className="flex flex-col rounded-2xl w-1/2 bg-blue-500 border border-blue-700 items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] uppercase font-semibold text-2xl">
        <u>Random {tag} Gif</u>
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt={tag} width="450px" />}

      <input
        className="rounded-md w-11/12 text-lg py-2 text-center"
        type="text"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      <button
        onClick={() => fetchData(tag)}
        className="bg-gray-400 rounded-md w-11/12 items-center text-lg py-2 mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
