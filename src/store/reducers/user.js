import { USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../types";

const initialState = {
  data: {},
  loading: true,
  authenticated: false,
  error: null
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        data: action.user,
        loading: false,
        error: null
      };

    case USER_LOGIN_ERROR:
      return {
        data: {},
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};
