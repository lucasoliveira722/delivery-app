import React, { useCallback, useEffect } from 'react';
import Header from '../components/Header';
import API from '../services/API';

function OrderDetails() {
  const [order, setOrder] = useState([]);

  const getAllSalesById = useCallback(async () => {
    const id = 5;
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
      <div>
        {
          order.map((item, index) => (
            <div key={ index }>
              <h3>
                {`Pedidos ${item.id}`}
              </h3>
              <h3>
                {`${item.date}`}
                {/* TRAZER A DATA DO TIMESTAMP DA SALE E CONVERTER */}
              </h3>
              <h3>
                {`${item.status}`}
                {/* PEGAR O STATUS DA VENDA Q ESTÁ NO REDUX??? */}
              </h3>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default OrderDetails;
