import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ order }) {
  return (
    <div
      key={ order.id }
      className="orderCard"
    >
      <p
        data-testid={ `customer_orders__element-order-id-${order.id}` }
      >
        {order.id}
      </p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${order.id}` }
      >
        {order.status}
      </p>
      <p
        data-testid={ `customer_orders__element-order-date-${order.id}` }
      >
        {order.saleDate}
      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${order.id}` }
      >
        {order.totalPrice}
      </p>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    index: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.date,
    totalPrice: PropTypes.number,
    subTotal: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};

export default OrderCard;
