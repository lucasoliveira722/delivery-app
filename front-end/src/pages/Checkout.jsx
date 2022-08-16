import React, { useState, useCallback, useEffect, useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import CheckoutCard from '../components/CheckoutCard';
import Header from '../components/Header';
import GenericContext from '../context/GenericContext';
import API from '../services/API';

function Checkout() {
  const [sallers, setSallers] = useState([]);
  const { hadleGetItemLocaStorage } = useContext(GenericContext);
  const cart = useSelector((state) => state.shoppingCart);

  const totalValue = useMemo(() => {
    const value = cart.totalValue.toFixed(2);
    return value;
  }, [cart]);

  const getAllSallers = useCallback(async () => {
    const { token } = hadleGetItemLocaStorage('user');
    try {
      const response = await API.getAllSalesMan(token);
      setSallers(response);
    } catch (error) {
      throw new Error(error);
    }
  }, [hadleGetItemLocaStorage]);

  useEffect(() => {
    getAllSallers();
  }, [getAllSallers]);

  return (
    <main>
      <Header />
      <div>
        <div>
          <span>Item</span>
          <span>descriçao</span>
          <span>quantidade</span>
          <span>valor unitario</span>
          <span>sub total</span>
          <span>remover Item</span>
        </div>
        <section>
          <div>
            { cart.shoppingCart.length > 0 ? cart.shoppingCart.map((product, index) => (
              <CheckoutCard
                key={ product.productId }
                product={ product }
                index={ index }
              />
            )) : <h1> loading ... </h1>}
          </div>
        </section>
      </div>
      <footer style={ { paddingTop: '5%' } }>
        <section style={ { paddingBottom: '5%' } }>
          <select
            data-testid="customer_checkout__select-seller"
          >
            {sallers ? sallers.map((saller) => (
              <option key={ saller.id }>
                {saller.name}
              </option>
            )) : <option> user</option>}
          </select>
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            placeholder="Digite seu endereço"
          />
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="number"
            placeholder="Digite seu numero"
          />
        </section>
        <h4>{`Total: ${totalValue}`}</h4>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
        >
          Finalizar pedido
        </button>
      </footer>
    </main>
  );
}

export default Checkout;
