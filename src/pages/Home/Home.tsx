import { useProducts } from '../../features/products/hooks/useProducts';
import { ProductGrid } from '../../features/products/components/ProductGrid';
import { Container } from '@mui/material';
import { useCart } from '../../features/cart/hooks';

export const Home = () => {
  const { data, isLoading, isError } = useProducts({
    page: 1,
    limit: 10,
  });

  const { addProduct } = useCart();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading products.</p>;
  }

  return (
  <Container maxWidth="lg">
        <ProductGrid
            products={data?.items ?? []}
            onAddToCart={addProduct}
        />
  </Container>
  );
};