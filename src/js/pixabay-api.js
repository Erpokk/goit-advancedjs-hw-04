import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = import.meta.env.VITE_PIXA_KEY

async function getPhotos(query, page = 1, perPage) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const res = await axios.get(url, {
      params: {
        per_page: perPage,
        page: page,
      }
    });
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(`Error: ${res.status}`);
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch photos');
  }
}

export { getPhotos };
