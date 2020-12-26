import { CartTypes } from './cart.types';
import { addCartItem } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}