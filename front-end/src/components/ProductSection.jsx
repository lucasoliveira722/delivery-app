import PropTypes from 'prop-types';
import React from 'react';
import ProductCard from './ProductCard';

function ProductSection({ products }) {
  return (
    <section className="products">
      {products.map((product, i) => (
        <ProductCard
          key={ i }
          product={ product }
        />
      ))}
    </section>
  );
}

export default ProductSection;

ProductSection.propTypes = {
  products: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};
