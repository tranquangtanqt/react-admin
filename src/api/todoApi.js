import axiosClient from "./axiosClient";

const todoApi = {
  getAll: () => {
    const url = "/todo";
    return axiosClient.get(url);
  },

  getById: (id) => {
    const url = `/todo/${id}`;
    return axiosClient.get(url);
  },



  updateTodoDetail: (id, params) => {
    const url = `/todo/${id}/update-detail`;
    return axiosClient.put(url, params);
  } 
};

export default todoApi;
