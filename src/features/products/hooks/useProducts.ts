import { useQuery } from '@tanstack/react-query';

import { productRepository } from '../repository/ProductRepository';
import type { ProductFilters } from '../types/ProductFilters';

export const useProducts = (filters?: ProductFilters) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => productRepository.getProducts(filters),
  });
};