import type { CartAction } from '../types/CartAction';
import type { CartState } from '../types/CartState';

export const initialCartState: CartState = {
    items: [],
};

export const cartReducer = (
    state: CartState,
    action: CartAction,
): CartState => {

    switch(action.type){

        case 'ADD_PRODUCT':{

            const existingItem = state.items.find(item =>
                item.product.id===action.payload.id
            );

            if(!existingItem){

                return{

                    ...state,

                    items:[

                        ...state.items,

                        {

                            product:action.payload,

                            quantity:1,

                        },

                    ],

                };

            }

            return{

                ...state,

                items:state.items.map(item=>{

                    if(item.product.id===action.payload.id){

                        return{

                            ...item,

                            quantity:item.quantity+1,

                        };

                    }

                    return item;

                }),

            };

        }

        case 'REMOVE_PRODUCT': {

            const existingItem = state.items.find(
                item => item.product.id === action.payload,
            );
        
            if (!existingItem) {
                return state;
            }
        
            if (existingItem.quantity === 1) {
        
                return {
                    ...state,
                    items: state.items.filter(
                        item => item.product.id !== action.payload,
                    ),
                };
        
            }
        
            return {
        
                ...state,
        
                items: state.items.map(item => {
        
                    if (item.product.id === action.payload) {
        
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
        
                    }
        
                    return item;
        
                }),
        
            };
        
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