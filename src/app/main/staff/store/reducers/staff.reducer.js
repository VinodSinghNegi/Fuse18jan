import * as Actions from '../actions';

const initialState = {
    staffList: [],
    staffServices: {},
    staffInfo: {
        firstName: null,
        lastName: null,
        phoneNumber: null,
        email: null,
        note: null,
        employmentStart: null,
        employmentEnd: null,
        permissions: []
    },
};

const client = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.STAFF_LIST:
        {
            return {
                ...state,
                staffList: action.staffList
            };
        }
        case Actions.STAFF_SERVICE:
        {
            return {
                ...state,
                staffServices: { ...state.staffServices, ...action.staffServices }
            };
        }
        case Actions.STAFF_INFO:
        {
            return {
                ...state,
                staffInfo: { ...state.staffInfo, ...action.staffInfo }
            };
        }
        case Actions.CLEAR_STAFF_INFO:
        {
            return {
                ...state,
                staffInfo: initialState.staffInfo
            };
        }
        default:
        {
            return state
        }
    }
};

export default client;