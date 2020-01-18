import * as Actions from '../actions';

const initialState = {
    productList: [],
    categoryList: {},
};

const client = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.PRODUCT_LIST:
        {
            return {
                ...state,
                productList: action.productList
            };
        }
        case Actions.CATEGORY_LIST:
        {
            return {
                ...state,
                categoryList: action.categoryList
            };
        }
        default:
        {
            return state
        }
    }
};

export default client;