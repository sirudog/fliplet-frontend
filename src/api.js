import axios from 'axios'

export default {
  
  async getRssFeed (rssUrl) {
    return axios.get('https://api.rss2json.com/v1/api.json', {
    params: {
      rss_url: rssUrl
    }
  })
  .then(function (response) {
    console.log(response.data);
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  })
}
}