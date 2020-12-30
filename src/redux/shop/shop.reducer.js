//import SHOP_DATA from './shop-data';

import ShopTypes from './shop.types'

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case ShopTypes.FETCH_COLLECTIONS_START:
        //     return {
        //         ...state,
        //         isFetching: true
        //     }
        case ShopTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false
            }
        case ShopTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}