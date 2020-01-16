import axios from 'axios';

const KEY = 'AIzaSyCmWp1JzxWf-xXjq300lIvbWVOrRX2EfaY';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`,
  }
});

