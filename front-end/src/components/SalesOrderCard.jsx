import React from 'react';
import PropTypes from 'prop-types';

function SalesOrderCard({ sale }) {
  const substringEndIndex = 10;
  const date = sale.saleDate.substring(0, substringEndIndex);

  return (
    <main>
      <h3>{`Pedido ${sale.id}`}</h3>
      <h3>{`${sale.status}`}</h3>
      <h3>{`${date}`}</h3>
      <h3>{`${sale.totalPrice}`}</h3>
      <h3>{`${sale.deliveryAddress}, ${sale.deliveryNumber}`}</h3>
    </main>
  );
}

export default SalesOrderCard;

SalesOrderCard.propTypes = {
  sale: PropTypes.objectOf({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.instanceOf(Date),
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
  }).isRequired,
};
