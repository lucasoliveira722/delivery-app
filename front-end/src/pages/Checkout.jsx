import React, { useState, useCallback, useEffect, useContext, useMemo } from 'react';

import GenericContext from '../context/GenericContext';
import API from '../services/API';

function Checkout() {
  const [prodcuts, setProducts] = useState([]);
  const [sallers, setSallers] = useState([]);
  const { hadleGetItemLocaStorage } = useContext(GenericContext);

  const getItemsLocalStorage = useCallback(() => {
    const prodcut = hadleGetItemLocaStorage('userCard');
    setProducts(prodcut);
  }, [hadleGetItemLocaStorage]);

  const totalValue = useMemo(() => {
    let value = 0;
    if (prodcuts) {
      prodcuts.map((prodcut) => {
        value += prodcut.subTotal;
        return value;
      });
    }
    return value;
  }, [prodcuts]);

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
    getItemsLocalStorage();
    getAllSallers();
  }, [getItemsLocalStorage, getAllSallers]);

  return (
    <main>
      <table style={ { width: '100%' } }>
        <thead>
          <tr
            style={ { width: '100%', display: 'flex', justifyContent: 'space-between' } }
          >
            <th>Item</th>
            <th>descriçao</th>
            <th>quantidade</th>
            <th>valor unitario</th>
            <th>sub total</th>
            <th>remover Item</th>
          </tr>
        </thead>
        <tbody>
          <tr style={ { width: '100%' } }>
            {prodcuts ? prodcuts.map((product, index) => (
              <>
                <td
                  data-testid={ `customer_checkout__element-order-table-name-${index}` }
                  key={ product.id }
                >
                  {product.name}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                  key={ product.id }
                >
                  {product.name}
                </td>
                <td
                  data-testid={ `
                  customer_checkout__element-order-table-unit-price-${index}` }
                  key={ product.id }
                >
                  {product.name}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                  key={ product.id }
                >
                  {product.name}
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  key={ product.id }
                >
                  {product.name}
                </td>
              </>
            )) : <h1> loading ... </h1>}
          </tr>
        </tbody>
      </table>
      <footer>
        <section>
          <select data-testid="customer_checkout__select-seller">
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
