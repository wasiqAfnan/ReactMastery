import React from "react";
import { getGifs, getImages, getVideos } from "./api/getMedia";
import "./App.css";

const App = () => {
  return (
    <div className="bg-gray-900 h-screen w-full text-white">
      <h1>Hello World</h1>
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
      </div>
    </div>
  );
};

export default App;
