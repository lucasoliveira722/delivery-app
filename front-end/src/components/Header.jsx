import React from 'react';
import { Link } from 'react-router-dom';

// pagina nao esta completa falta fazer integraçao

function Header() {
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
          to="/customer/products"
          style={ { textDecoration: 'none', color: 'black' } }
        >
          <h1>Meus pedidos</h1>
        </Link>
        <Link
          data-testid="customer_products__element-navbar-user-full-name"
          to="/customer/products"
          style={ { textDecoration: 'none', color: 'black' } }
        >
          <h1>Pessoa logada</h1>
        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          to="/customer/products"
          style={ { textDecoration: 'none', color: 'black' } }
        >
          <h1>Sair</h1>
        </Link>

      </nav>
    </header>
  );
}

export default Header;
