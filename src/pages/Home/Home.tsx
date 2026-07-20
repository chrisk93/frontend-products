import { useProducts } from '../../features/products/hooks/useProducts';
import * as ProductCardModule from '../../features/products/components/ProductCard/ProductCard';
import { ProductGrid } from '../../features/products/components/ProductGrid';
import { Container } from '@mui/material';
export const Home = () => {
  const { data, isLoading, isError } = useProducts({
    page: 1,
    limit: 10,
  });

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
        />
  </Container>
  );
};