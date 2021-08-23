import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://first-project-471af-default-rtdb.firebaseio.com/'
});

export default instance;