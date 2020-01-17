import axios from 'axios';

const KEY = "AIzaSyCGjHyut0Z72YCwg8gHl2t5F8oCgmDs1mQ";
  // const KEY = "AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`,
  }
});

