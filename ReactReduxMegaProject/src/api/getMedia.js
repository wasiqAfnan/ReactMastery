import axios from "axios";

// unsplash api for images
export const getImages = async (query) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    },
    params: {
      query,
      page: 1,
      per_page: 15,
    },
  });
  return response.data;
};

// pexels api for videos
export const getVideos = async (query) => {
  const response = await axios.get("https://api.pexels.com/videos/search", {
    headers: {
      Authorization: `${import.meta.env.VITE_PEXELS_API_KEY}`,
    },
    params: {
      query,
      page: 1,
      per_page: 15,
    },
  });
  return response.data;
};

// giphy api for gifs
export const getGifs = async (query) => {
  const response = await axios.get("https://api.giphy.com/v1/gifs/search", 
    {
    params: {
      api_key: import.meta.env.VITE_GIPHY_API_KEY,
      q: query,
      limit: 15,
    },
  });
  return response.data;
};
