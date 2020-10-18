import axios from 'axios';

function newsList() {
    return axios.get('https://api.hnpwa.com/v0/news/1.json');
}

export { newsList }
