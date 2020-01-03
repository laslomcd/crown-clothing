import { createSelector } from 'reselect';

const selectShopData = state => state.shop

export const selectCollections = createSelector(
    [selectShopData],
    shop => shop.collections
)