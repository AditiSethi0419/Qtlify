import axios from "axios";

export const Backend_endpoint = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${Backend_endpoint}/albums/top`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
