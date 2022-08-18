import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// pagina nao esta completa falta fazer integraçao

function Header({ userName }) {
  // const navigate = useNavigate();
  return (
    <header data-testid="header">
      <nav style={ { display: 'flex', justifyContent: 'space-between' } }>
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
          style={ { textDecoration: 'none', color: 'black' } }
        >
          <h1>Produtos</h1>
        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
          style={ { textDecoration: 'none', color: 'black' } }
        >
          <h1>Meus pedidos</h1>
        </Link>
        <Link
          data-testid="customer_products__element-navbar-user-full-name"
          to="/customer/orders/"
          style={ { textDecoration: 'none', color: 'black' } }
        >
          <h1>{userName}</h1>
        </Link>
        <div data-testid="customer_products__element-navbar-link-logout">
          <Link to="/login">
            <button
              type="button"
              onClick={ () => {
                localStorage.removeItem('user');
              } }
            >
              Sair
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

Header.propTypes = {
  userName: PropTypes.string.isRequired,
};
