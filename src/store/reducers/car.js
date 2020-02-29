import { FETCH_CARS_SUCCESS, FETCH_CARS_ERROR } from "../types";

const initialState = {
  data: {},
  loading: true,

  error: null
};

export const cars = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null
      };

    case FETCH_CARS_ERROR:
      return {
        data: [],
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};
