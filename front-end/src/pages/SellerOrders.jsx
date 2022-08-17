import { useEffect, useState, useCallback, useContext } from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SalesOrderCard from '../components/SalesOrderCard';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function SellerOrders() {
  const { idUser, hadleGetItemLocaStorage } = useContext(GenericContext);
  const [sales, setSales] = useState([]);
  const { token, name } = hadleGetItemLocaStorage('user');
  // const { totalValue, shoppingCart } = useSelector((state) => state.shoppingCart);

  const getAllSales = useCallback(async () => {
    try {
      const response = await API.getAllOrdersById(idUser, token);
      setSales(response);
    } catch (error) {
      throw new Error(error.message);
    }
  }, [idUser, token]);

  useEffect(() => {
    getAllSales();
  }, [getAllSales]);

  return (
    <main>
      <Header userName={ name } />
      <section className="salesSection">
        {sales.map((sale, i) => (
          <Link to={ `localhost:3000/seller/orders/${sale.id}` } key={ i }>
            <SalesOrderCard
              key={ i }
              sale={ sale }
              data-testid={ `seller_orders__element-order-date-${sale.id}` }
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
export default SellerOrders;
