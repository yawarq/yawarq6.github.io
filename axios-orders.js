import axios from 'axios';

const instance = axios.create({
   baseURL : 'https://react-my-burger-69b24.firebaseio.com/'
});

export default instance;
