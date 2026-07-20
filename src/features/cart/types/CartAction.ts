import type { Product } from '../../products/types/Product';

export type CartAction =
    | {
          type: 'ADD_PRODUCT';
          payload: Product;
      }
    | {
          type: 'REMOVE_PRODUCT';
          payload: number;
      }
    | {
          type: 'CLEAR_CART';
      };