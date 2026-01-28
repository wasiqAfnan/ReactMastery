import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getGifs, getImages, getVideos } from "./api/getMedia";
import { setSearchTerm } from "./redux/features/searchSlice";

const App = () => {
  const [query, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(query);
    dispatch(setSearchTerm(query));
    const res = await getGifs(query);
    console.log(res);
  };
  
  return (
    <div className="bg-gray-900 h-screen w-full text-white">
      {/* <h1>Hello World</h1>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3 my-3"
          onClick={async () => {
            const res = await getImages("cat");
            console.log(res.results);
          }}
        >
          Get Images
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-3 my-3"
          onClick={async () => {
            const res = await getVideos("cat");
            console.log(res.videos);
          }}
        >
          Get Videos
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-3 my-3"
          onClick={async () => {
            const res = await getGifs("cat");
            console.log(res.data);
          }}
        >
          Get GIFs
        </button>
      </div> */}

      <form
        className="flex flex-col items-center justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Search for gifs, images, or videos"
          className="border-2 border-gray-500 rounded-lg p-2 w-full mx-4 my-2 px-4 outline-amber-50"
          value={query}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-3 my-3"
        >
          Get GIFs
        </button>
      </form>
    </div>
  );
};

export default App;
