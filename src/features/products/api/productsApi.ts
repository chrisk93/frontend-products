import { apiClient } from '../../../api/axios';
import type { ApiResponse } from '../../../shared/types/ApiResponse';
import type { ProductFilters } from '../types/ProductFilters';
import type { ProductsData } from '../types/ProductsData';

export const productsApi = {
  async getProducts(
    filters?: ProductFilters,
  ): Promise<ApiResponse<ProductsData>> {
    const { data } = await apiClient.get<ApiResponse<ProductsData>>(
      '/products',
      {
        params: filters,
      },
    );

    return data;
  },
};