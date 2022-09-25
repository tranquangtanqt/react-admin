import axiosClient from "./axiosClient";

const todoApi = {
  getAll: () => {
    const url = "/todo";
    return axiosClient.get(url);
  },

  getById: (id) => {
    const url = `/todo/${id}`;
    return axiosClient.get(url);
  }
};

export default todoApi;
