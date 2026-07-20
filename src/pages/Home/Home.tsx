import { useProducts } from '../../features/products/hooks/useProducts';
import { ProductGrid } from '../../features/products/components/ProductGrid';
import { ProductFilter } from '../../features/products/components/ProductFilter';
import { Container } from '@mui/material';
import { useCart } from '../../features/cart/hooks';
import { Cart } from '../../features/cart/components';
import { useMemo, useState } from 'react';

export const Home = () => {
  const [search, setSearch] = useState('');
  console.log(search);

  const { data, isLoading, isError } = useProducts({
    page: 1,
    limit: 10,
  });

  const filteredProducts = useMemo(() => {
    const products = data?.items ?? [];
  
    if (!search.trim()) {
      return products;
    }
  
    return products.filter(product =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [data, search]);

  const { addProduct } = useCart();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading products.</p>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <ProductFilter
        value={search}
        onSearchChange={setSearch}
      />
      <ProductGrid
        products={filteredProducts}
        onAddToCart={addProduct}
      />
      <Cart />
    </Container>
  );
};