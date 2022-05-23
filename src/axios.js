import axios from "axios";

const instance = axios.create({
    baseURL : 'http://localhost:5001/clone-180d6/us-central1/api' // The Api cloud function
});

export default instance;