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

const getAllProducts = async (token) => {
  try {
    const { data } = await axios.get(
      'http://localhost:3001/products',
      { headers: {
        Authorization: token,
      } },
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllSalesMan = async (token) => {
  try {
    const { data } = await axios.get('http://localhost:3001/users/sellers', {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getSealesById = async (id, token) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/sales/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const API = {
  loginUser,
  registerUser,
  getAllProducts,
  getAllSalesMan,
  getSealesById,
};

export default API;
