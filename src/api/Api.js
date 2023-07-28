import axios from "axios";

export const Backend_endpoint = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${Backend_endpoint}/albums/top`);
   // console.log(res.data);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchNewAlbums=async () =>{
  try {
    const res = await axios.get(`${Backend_endpoint}/albums/new`);
    //console.log(res.data);
    return res.data;
  }
  catch(err){
    console.log(err);
  }
};

export const fetchSongs=async () =>{
  try {
    const res = await axios.get(`${Backend_endpoint}/songs`);
    //console.log(res.type);
    //console.log(res.data);
    return res.data;
  }
  catch(err){
    console.log(err);
  }
};