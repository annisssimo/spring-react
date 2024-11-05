import { LOGIN } from '../constants/userActionTypes';

const initialState = {
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default userReducer;
