import { useMemo } from 'react';

import { useCart } from './useCart';

export const useCartSummary = () => {
  const { items } = useCart();

  const totalItems = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.quantity,
      0,
    );
  }, [items]);

  const totalPrice = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  }, [items]);

  return {
    totalItems,
    totalPrice,
  };
};