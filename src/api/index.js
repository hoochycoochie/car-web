import axios from "axios";

const url = "http://localhost:3001/api";
const responseType = { responseType: "json" };

export default {
  cars: {
    read: async id => {
      try {
        const result = await axios.get(`${url}/cars/${id}`, responseType);
        return result;
      } catch (error) {
        throw error;
      }
    },

    find: async (_query = {}, _options = {}) => {
      try {
        const result = await axios.get(`${url}/cars`, responseType);
        return result;
      } catch (error) {
        throw error;
      }
    },

    create: async data => {
      try {
        const result = await axios.post(`${url}/cars`, data, responseType);
        return result;
      } catch (error) {
        throw error;
      }
    },
    update: async (id, data) => {
      try {
        const result = await axios.put(`${url}/cars/${id}`, data, responseType);
        return result;
      } catch (error) {
        throw error;
      }
    },
    remove: async id => {
      try {
        const result = await axios.delete(`${url}/cars/${id}`, responseType);
        return result;
      } catch (error) {
        throw error;
      }
    }
  },
  users: {
    read: async id => {
      try {
        const movies = await axios.get(`${url}/users/${id}`, responseType);
        return movies;
      } catch (error) {
        throw error;
      }
    },
    login: async credentials => {
      try {
        const authenticated = await axios.post(
          `${url}/users/authentication`,
          credentials,
          responseType
        );
        return authenticated;
      } catch (error) {
        throw error;
      }
    },
    find: async (_query = {}, _options = {}) => {
      try {
        const users = await axios.get(`${url}/users`, responseType);
        return users;
      } catch (error) {
        throw error;
      }
    },

    create: async data => {
      try {
        const user = await axios.post(`${url}/users`, data, responseType);
        return user;
      } catch (error) {
        throw error;
      }
    },
    update: async (id, data) => {
      try {
        const user = await axios.put(`${url}/users/${id}`, data, responseType);
        return user;
      } catch (error) {
        throw error;
      }
    },
    remove: async id => {
      try {
        const user = await axios.delete(`${url}/users/${id}`, responseType);
        return user;
      } catch (error) {
        throw error;
      }
    }
  }
};
