import axiosClient from "./axiosClient";

const todoDetailApi = {
  /**
   *  create Todo Detail
   * @param {*} id : id todo
   * @param {*} params : {d_title: , d_content: }
   * @returns
   */
  createTodoDetail: (id, params) => {
    const url = `/todo/${id}/create-detail`;
    return axiosClient.put(url, params);
  },

  /**
   * update todo detail
   * @param {*} id : id todo
   * @param {*} params : {_id: , d_title: , d_content}
   * @returns
   */
  updateTodoDetail: (id, params) => {
    const url = `/todo/${id}/update-detail`;
    return axiosClient.put(url, params);
  },

  /**
   * update todo Task
   * @param {*} id : id todo
   * @param {*} params : {_id: , isUp}
   * @returns
   */
   updateOrderNumber: (id, params) => {
    const url = `/todo/${id}/update-detail-order-number`;
    return axiosClient.put(url, params);
  },

  /**
   * delete todo detail
   * @param {*} id : id todo
   * @param {*} params : {_id:}
   * @returns
   */
  deleteTodoDetail: (id, params) => {
    const url = `/todo/${id}/delete-detail`;
    return axiosClient.put(url, params);
  },
};

export default todoDetailApi;
