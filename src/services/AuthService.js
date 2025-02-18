import axios from 'axios';

const API_URL = "https://your-backend-api.com/auth";

const login = async (username, password) => {
    const response = await axios.post(API_URL, {username, password });
    return response.data.token;
};

export default {login};