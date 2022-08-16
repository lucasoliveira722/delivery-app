import { useEffect, useState, useCallback, useContext } from 'react';

import Header from '../components/Header';
import ProductSection from '../components/ProductSection';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function Products() {
  const { hadleGetItemLocaStorage } = useContext(GenericContext);
  const [product, setproducts] = useState([]);
  const { token, name } = hadleGetItemLocaStorage('user');

  const getAllProducts = useCallback(async () => {
    try {
      const response = await API.getAllProducts(token);
      setproducts(response);
    } catch (error) {
      throw new Error(error.message);
    }
  }, [token]);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <main>
      <Header userName={ name } />
      <ProductSection products={ product } />
    </main>
  );
}
export default Products;
// comment
