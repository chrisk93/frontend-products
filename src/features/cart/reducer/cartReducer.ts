import type { Product } from '../../products/types/Product';
import type { CartAction } from '../types/CartAction';
import type { CartState } from '../types/CartState';

export const initialCartState: CartState = {
    items: [],
};

export const cartReducer = (
    state: CartState,
    action: CartAction,
): CartState => {

    switch (action.type) {

        case 'ADD_PRODUCT': {
            
            return addProductToCart(state, action.payload);

        }

        case 'REMOVE_PRODUCT': {
            return removeProduct(state, action.payload);

        }

        case 'CLEAR_CART': {
            return {

                ...state,

                items: [],

            };
        }

        default:

            return state;

    }

};

const addProductToCart = (
    state: CartState,
    product: Product
): CartState => {

    const existingItem = state.items.find(
        item => item.product.id === product.id
    );

    if (!existingItem) {
        return {
            ...state,
            items: [
                ...state.items,
                {
                    product,
                    quantity: 1,
                },
            ],
        };
    }

    if (existingItem.quantity >= product.stock) {
        return state;
    }

    return {
        ...state,
        items: state.items.map(item =>
            item.product.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                }
                : item
        ),
    };
};

const removeProduct = (
    state: CartState,
    id: number
): CartState => {
    const existingItem = state.items.find(
        item => item.product.id === id,
    );

    if (!existingItem) {
        return state;
    }

    if (existingItem.quantity === 1) {

        return {
            ...state,
            items: state.items.filter(
                item => item.product.id !== id,
            ),
        };

    }

    return {

        ...state,

        items: state.items.map(item => {

            if (item.product.id === id) {

                return {
                    ...item,
                    quantity: item.quantity - 1,
                };

            }

            return item;

        }),

    };
};