import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

function Products() {
  // passa aray vazio enquanto nao existe dados das bebidas
  return (
    <main>
      <Header />
      <ProductCard products={ [] } />
    </main>
  );
}
export default Products;
