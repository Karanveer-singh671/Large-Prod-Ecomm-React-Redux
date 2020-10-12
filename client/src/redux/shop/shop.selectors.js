// reselect memoizes our selectors
import { createSelector } from "reselect";
// memoize is same idea as reselect for our selectors except memoizing the return of our function which returns a selector 
import memoize from "lodash.memoize";
// need since routes go to /hats / sneakers etc. but the id we get is a number so need to map
const COLLECTION_ID_MAP = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);
// wrap in memoize, whenever this function gets called and receieves collectionUrlParam memoizes return of the function
// in this case returning a selector, if function gets called again w/ same collectionUrlParam don't rerun the function
// just return selector that's been stored
export const selectCollection = memoize((collectionUrlParam) =>
	createSelector([selectCollections], (collections) =>
		collections.find(
			// find collection.id matching the url parameter of our collectionIDMAP
			(collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
		)
	)
);
