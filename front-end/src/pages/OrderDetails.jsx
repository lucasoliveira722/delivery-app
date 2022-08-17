import React, { useContext, useCallback, useEffect } from 'react';
import Header from '../components/Header';
import SalesCard from '../components/SalesCard';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function OrderDetails() {
  const { idUser, hadleGetItemLocaStorage } = useContext(GenericContext);
  // const [sales, setSales] = useState([]);

  const getSalesById = useCallback(async () => {
    const { token } = hadleGetItemLocaStorage('user');
    try {
      const result = await API.getSealesById(idUser, token);
      console.log(result);
    } catch (error) {
      console.log('passou aki');
      throw new Error(error.message);
    }
  }, [idUser, hadleGetItemLocaStorage]);

  useEffect(() => {
    getSalesById();
  }, [getSalesById]);

  return (
    <main>
      <Header />
      <SalesCard />
    </main>
  );
}

export default OrderDetails;
