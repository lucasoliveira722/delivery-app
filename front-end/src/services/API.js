const axios = require('axios').default;

const loginUser = async (email, password) => {
  try {
    const { data } = await axios.post('http://localhost:3001/login', { email, password });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const registerUser = async (name, email, password, role) => {
  try {
    const { data } = await axios.post('http://localhost:3001/users/create', { name, email, password, role });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const API = {
  loginUser,
  registerUser,
};

export default API;
