import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import OrderCard from '../components/OrderCard';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function CustomerOrders() {
  const { hadleGetItemLocaStorage } = useContext(GenericContext);
  const { token, name, id } = hadleGetItemLocaStorage('user');
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    const response = await API.getAllOrdersById(id, token);
    setOrders(response);
  };

  console.log(orders);

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <main>
      <Header userName={ name } />
      <h1>Customer Orders</h1>
      <section className="orders">
        {orders.map((order) => (
          <OrderCard
            key={ order.id }
            order={ order }
          />
        ))}
      </section>
    </main>
  );
}

export default CustomerOrders;
