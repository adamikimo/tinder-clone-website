import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend-with-mern.herokuapp.com'
});

export default instance;