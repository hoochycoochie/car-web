import { FETCH_CARS_SUCCESS, FETCH_CARS_ERROR } from "../types";
import api from "../../api";

export const fetchCars = () => {
  return async (dispath, _getState) => {
    try {
      const {
        data: { data }
      } = await api.cars.find();
      
      await dispath({
        type: FETCH_CARS_SUCCESS,
        data
      });
    } catch (error) {
      await dispath({ type: FETCH_CARS_ERROR, error });
    }
  };
};
