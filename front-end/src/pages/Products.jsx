import { useEffect, useState, useCallback, useContext } from 'react';

import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function Products() {
  const { hadleGetItemLocaStorage } = useContext(GenericContext);
  const [product, setproducts] = useState([]);

  const getAllProducts = useCallback(async () => {
    const token = hadleGetItemLocaStorage('token');
    console.log(typeof token);
    try {
      const response = await API.getAllProducts(token);
      setproducts(response);
    } catch (error) {
      throw new Error(error.message);
    }
  }, [hadleGetItemLocaStorage]);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <main>
      <Header />
      <ProductCard products={ product } />
    </main>
  );
}
export default Products;
