import * as Actions from '../actions';

const initialState = {
    serviceList: [],
    categoryList: {}
};

const client = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.SERVICE_LIST:
        {
            return {
                ...state,
                serviceList: action.serviceList
            };
        }
        case Actions.SERVICE_CATEGORY_LIST:
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