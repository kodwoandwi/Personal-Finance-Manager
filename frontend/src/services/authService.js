import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

// Register user
const register = (username, email, password) => {
  return axios.post(API_URL + 'register', {
    username,
    email,
    password,
  });
};

// Login user
const login = (email, password) => {
  return axios.post(API_URL + 'login', {
    email,
    password,
  });
};

export default {
  register,
  login,
};
