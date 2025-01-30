import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  //   const [gif, setGif] = useState("");
  //   const [loading, setLoading] = useState("false");

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const { data } = await axios.get(url);
  //     const imgSource = data.data.images.downsized_large.url;
  //     setGif(imgSource);
  //     setLoading(false);
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="flex flex-col rounded-2xl w-1/2 bg-green-600 border border-blue-700 items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] uppercase font-semibold text-2xl">
        <u>A Random Gif</u>
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="gif" width="450px" />}

      <button
        onClick={() => fetchData()}
        className="bg-gray-200 rounded-md w-11/12 items-center text-lg py-2 mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
