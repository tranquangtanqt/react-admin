import axiosClient from "./axios-client";

const todoApi = {
  getAll: () => {
    const url = "/todo";
    return axiosClient.get(url);
  },

  getById: (id) => {
    const url = `/todo/${id}`;
    return axiosClient.get(url);
  },

  /**
   *  create Todo
   * @param {*} params : {title}
   * @returns
   */
  createTodo: (params) => {
    const url = `/todo`;
    return axiosClient.post(url, params);
  },

  /**
   * update todo
   * @param {*} params : {_id , title}
   * @returns
   */
   updateTitle: (params) => {
    const url = `/todo/update-title`;
    return axiosClient.put(url, params);
  },

  /**
   * update todo
   * @param {*} params : {_id , order_number}
   * @returns
   */
   updateOrderNumber: (params) => {
    const url = `/todo/update-order-number`;
    return axiosClient.put(url, params);
  },
  
  /**
   *  delete Todo
   * @param {*} params : {id}
   * @returns
   */
   deleteTodo: (params) => {
    const url = `/todo/delete`;
    return axiosClient.put(url, params);
  }
};

export default todoApi;
