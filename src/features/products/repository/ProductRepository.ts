import { productsApi } from '../api/productsApi';
import type { ProductFilters } from '../types/ProductFilters';
import type { ProductsData } from '../types/ProductsData';

export const productRepository = {
  async getProducts(filters?: ProductFilters): Promise<ProductsData> {
    const response = await productsApi.getProducts(filters);

    return response.data;
  },
};