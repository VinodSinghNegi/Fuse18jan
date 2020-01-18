import * as Actions from "../actions";

const initialState = {
  role: ["user"], //guest
  data: {
    shortcuts: []
  },
  SessionId: 0,
  UserId: 0,
  SessionCode: null,
  ExpiryDate: null,
  ExpiryDateMax: null,
  SalonId: 0,
  FirstName: null,
  LastName: null,
  PhoneNumber: null,
  Email: null,
  Username: null,
  Title: null,
  Note: null,
  EmploymentStart: null,
  EmploymentEnd: null
};

const user = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
        role: ["user"]
      };
    }
    case Actions.REMOVE_USER_DATA: {
      return {
        ...initialState
      };
    }
    case Actions.USER_LOGGED_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default user;
