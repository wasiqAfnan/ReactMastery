import React from "react";
import { getImages } from "./api/getMedia";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <button
          className="btn"
          onClick={async () => {
            const res = await getImages("cat");
            console.log(res);
          }}
        >
          Get Images
        </button>
        <button
          className="btn"
          onClick={async () => {
            const res = await getVideos("cat");
            console.log(res);
          }}
        >
          Get Images
        </button>
        <button
          className="btn"
          onClick={async () => {
            const res = await getGifs();
            console.log(res);
          }}
        >
          Get Images
        </button>
      </div>
    </div>
  );
};

export default App;
