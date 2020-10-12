// reselect memoizes our selectors
import { createSelector } from "reselect";
// memoize is same idea as reselect for our selectors except memoizing the return of our function which returns a selector
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) => Object.keys(collections).map((key) => collections[key])
);

// wrap in memoize, whenever this function gets called and receieves collectionUrlParam memoizes return of the function
// in this case returning a selector, if function gets called again w/ same collectionUrlParam don't rerun the function
// just return selector that's been stored
export const selectCollection = memoize((collectionUrlParam) =>
	createSelector(
		[selectCollections],
		(collections) => collections[collectionUrlParam]
	)
);
