// src/services/BalanceService.js
import axios from 'axios';

const API_URL = 'https://your-backend-api.com/erp/balance';

const getBalance = async () => {
  const response = await axios.get(API_URL);
  return response.data.balance;
};

export default { getBalance };
