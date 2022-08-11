import PropTypes from 'prop-types';
import React, { useState } from 'react';

function ProductCard({ products }) {
  const [qtdProduct, setQtdproduct] = useState(0);
  const n1 = 1;
  // falta criar logica de aumentar quantidades de item e diminuir
  return (
    <section>
      {products.map((product) => (
        <div key={ product.id }>
          <h3
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            {product.price}
          </h3>
          <img
            style={ { width: '30%' } }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            src={ product.url_image }
            alt={ product.name }
          />
          <h5
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            {product.name}
          </h5>
          <button
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            type="button"
            onClick={ () => setQtdproduct(n1) }
          >
            +
          </button>
          <p data-testid={ `customer_products__button-card-rm-item-${product.id}` }>
            { qtdProduct }
          </p>
          <button
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            type="button"
            onClick={ () => setQtdproduct(-n1) }
          >
            -
          </button>
        </div>
      ))}
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  products: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};
