import axios from 'axios';

const API_URL = "https://your-backend-api.com/services";

const serviceOverViewData = async (username, serviceId) => {
    const response = await axios.get(API_URL, {username, serviceId });
    return response.data.token;
};

export default {serviceOverViewData};