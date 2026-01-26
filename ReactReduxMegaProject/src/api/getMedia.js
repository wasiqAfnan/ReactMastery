import axios from "axios";

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

export const getVideos = async (query) => {
  const response = await axios.get("https://api.pexels.com/videos/search",
    {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
    },
    params: {
      query,
      page: 1,
      per_page: 20,
    },
  });
  return response.data;
};
