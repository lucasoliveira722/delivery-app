import PropTypes from 'prop-types';

function CheckoutCard({ product, index }) {
  return (
    <div style={ { display: 'flex', alignContent: 'flex-end' } }>
      <span
        style={ { width: '50%' } }
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
        key={ product.productId }
      >
        {product.name}
      </span>
      <span
        style={ { width: '50%' } }
        data-testid={
          `customer_checkout__element-order-table-quantity-${index}`
        }
        key={ product.productId }
      >
        {product.quantity}
      </span>
      <span
        style={ { width: '50%' } }
        data-testid={ `
        customer_checkout__element-order-table-unit-price-${index}` }
        key={ product.productId }
      >
        {product.unitPrice.toFixed(2)}
      </span>
      <span
        style={ { width: '50%' } }
        data-testid={
          `customer_checkout__element-order-table-sub-total-${index}`
        }
        key={ product.productId }
      >
        {product.subTotal.toFixed(2)}
      </span>
      <button
        style={ { width: '10%' } }
        type="button"
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        key={ product.productId }
      >
        Remover
      </button>
    </div>
  );
}

CheckoutCard.propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.shape({
    index: PropTypes.number,
    name: PropTypes.string,
    productId: PropTypes.number,
    quantity: PropTypes.number,
    subTotal: PropTypes.number,
    unitPrice: PropTypes.number,
  }).isRequired,
};

export default CheckoutCard;
