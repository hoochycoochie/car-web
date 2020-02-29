import { USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../types";
import api from "../../api";

export const loginUser = credentials => {
  return async (dispath, _getState) => {
    try {
      const data = await api.users.login(credentials);
      console.log("data", data);
      await dispath({
        type: USER_LOGIN_SUCCESS,
        user: data
      });
    } catch (error) {
      await dispath({ type: USER_LOGIN_ERROR, error });
    }
  };
};
