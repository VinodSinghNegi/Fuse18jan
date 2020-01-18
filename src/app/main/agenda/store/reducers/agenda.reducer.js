import * as Actions from '../actions';

const initialState = {
    agendaList: [],
};

const client = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.AGENDA_LIST:
        {
            return {
                ...state,
                agendaList: action.agendaList
            };
        }
        default:
        {
            return state
        }
    }
};

export default client;