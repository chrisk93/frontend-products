import { createContext, useReducer } from 'react';
import type { ReactNode } from 'react';

import type { Product } from '../../products/types/Product';
import type { CartContextType } from './CartContextType';
import { cartReducer, initialCartState } from '../reducer';

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialCartState,
  );

  console.log(state.items)

  const addProduct = (product: Product) => {
    console.log('Producto agregado:', product);
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product,
    });
  };

  const removeProduct = (productId: number) => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: productId,
    });
  };

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};