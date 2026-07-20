import type { Product } from '../../products/types/Product';
import type { CartItem } from '../types/CartItem';

export interface CartContextType {
    items: CartItem[];

    addProduct: (product: Product) => void;

    removeProduct: (productId: number) => void;

    clearCart: () => void;
}