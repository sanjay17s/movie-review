import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9036',
    headers: {
        headers: {"ngrok-skip-browser-warning": "true"}
    }
});

export default api;
