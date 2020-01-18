import * as Actions from '../actions';

const initialState = {
    clientList: [],
};

const client = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.CLIENT_LIST:
        {
            return {
                ...state,
                clientList: action.clientList
            };
        }
        default:
        {
            return state
        }
    }
};

export default client;