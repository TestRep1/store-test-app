import { createSelector } from 'reselect';
import shopPage from '../../pages/shop/shop-page';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsArray = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = routeParam =>
    createSelector(
        [selectCollections],
        collections => collections ? collections[routeParam] : null
    )

export const selectIsFetching = createSelector(
    [selectShop],
    shop => shopPage.isFetching
)