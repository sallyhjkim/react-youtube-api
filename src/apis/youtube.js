//https://console.developers.google.com/
//npm install axios@0.18.1
import axios from 'axios'
const KEY = 'AIzaSyBHSdBbR9nYMmmfXbgPtsglhUof0o_vPDE';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY,
    }
})
