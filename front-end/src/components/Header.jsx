import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav style={ { display: 'flex', justifyContent: 'space-between' } }>
        <Link
          to="/customer/products"
          style={ { textDecoration: 'none', color: 'black' } }
        >
          <h1>Produtos</h1>
        </Link>
        <Link
          to="/customer/products"
          style={ { textDecoration: 'none', color: 'black' } }
        >
          <h1>Meus pedidos</h1>
        </Link>
        <Link
          to="/customer/products"
          style={ { textDecoration: 'none', color: 'black' } }
        >
          <h1>Pessoa logada</h1>
        </Link>
        <Link
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
