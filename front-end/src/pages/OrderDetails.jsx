import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import API from '../services/API';

function OrderDetails() {
  const [order, setOrder] = useState([]);

  const test = useSelector((state) => console.log(state));
  console.log(test);
  const getAllSalesById = useCallback(async () => {
    const id = 1;
    try {
      const response = await API.getSalesById(id);
      setOrder(response);
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

  useEffect(() => {
    getAllSalesById();
  }, [getAllSalesById]);

  return (
    <>
      <Header />
      <div>Detalhe do Pedido</div>
      {/* Fazer logica de finalizar pedido e mudar estado do pedido */}
      <button
        data-testid="seller_order_details__
        button-preparing-check"
        type="button"
      >
        Preparar Pedido
      </button>
      <button
        data-testid="seller_order_details__
        button-dispatch-check"
        type="button"
      >
        Saiu pra Entrega
      </button>
      <div>
        {
          order.map((item, index) => (
            <div key={ index }>
              <h3
                data-testid="seller_order_details__element-order-details-label-order-id"
              >
                {`Pedidos ${item.id}`}
              </h3>
              <h3
                data-testid="seller_order_details__element-order-details-label-order-date"
              >
                {`${item.saleDate}`}
                {/* CONVERTER A DATA */}
              </h3>
              <h3
                data-testid="seller_order_details__element
                -order-details-label-delivery-status"
              >
                {`${item.status}`}
                {/* PEGAR O STATUS DA VENDA Q ESTÁ NO REDUX??? */}
              </h3>
              {item.itemsSold.map((beer, id) => (
                <tr key={ id }>
                  <td
                    data-testid={ `seller_order_details__element
                    -order-table-item-number-${id}` }
                  >
                    {beer.id}
                  </td>
                  <td
                    data-testid={ `seller_order_details__element
                    -order-table-name-${id}` }
                  >
                    {beer.name}
                  </td>
                  <td
                    data-testid={ `seller_order_details__element
                    -order-table-quantity-${id}` }
                  >
                    {beer.quantity}
                  </td>
                  <td
                    data-testid={ `seller_order_details__element
                    -order-table-unit-price-${id}` }
                  >
                    {beer.price}
                  </td>
                  {/* VERIFICAR COMO PEGAR O VALOR UNITÁRIO DA CERVEJA */}
                  <td
                    data-testid={ `seller_order_details__element
                    -order-table-sub-total-${id}` }
                  >
                    {beer.subtotal}
                  </td>
                  {/* VERIFICAR SE RECEBEMOS A QUANTIDADE COMPRADA E MULTIPLICAR PLEO VALOR UNITÁRIO */}
                </tr>
              ))}
            </div>
          ))
        }
      </div>
      <h2>
        {`Total: ${order.totalValue}`}
        {/* Recebe do reducer */}
      </h2>
    </>
  );
}

export default OrderDetails;
