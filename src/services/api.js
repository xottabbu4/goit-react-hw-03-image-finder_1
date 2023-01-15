import axios from 'axios';

const API_KEY = '32110620-685fe93ec9f2cf885f5434147';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, page) => {
  const { data } = await axios.get(`${axios.defaults.baseURL}`, {
    params: {
      q: query,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return data;
};
