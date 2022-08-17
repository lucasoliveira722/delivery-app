import { useEffect, useState, useCallback, useContext } from 'react';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SalesOrderCard from '../components/SalesOrderCard';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function SellerOrders() {
  const { idUser, hadleGetItemLocaStorage } = useContext(GenericContext);
  const [sales, setSales] = useState([]);
  const { token, name } = hadleGetItemLocaStorage('user');
  // const { totalValue, shoppingCart } = useSelector((state) => state.shoppingCart);
  const navigate = useNavigate();

  const getAllSales = useCallback(async () => {
    try {
      const response = await API.getSellerSalesById(idUser, token);
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
          <SalesOrderCard
            key={ i }
            sale={ sale }
            data-testid={ `seller_orders__element-order-date-${sale.id}` }
          />
        ))}
      </section>
      <h2
        data-testid="customer_products__checkout-bottom-value"
      >
        {totalValue.toFixed(2).replace('.', ',')}
      </h2>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => navigate('/customer/checkout') }
        disabled={ !shoppingCart.some((item) => item.quantity > 0) }
      >
        Checkout
      </button>
    </main>
  );
}
export default SellerOrders;
