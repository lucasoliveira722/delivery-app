import React from 'react';

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

export default OrderCard;
