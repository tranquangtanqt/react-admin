import axiosClient from "./axiosClient";

const todoTaskApi = {
  /**
   *  create Todo Task
   * @param {*} id : id todo
   * @param {*} params : {t_content: , t_status, t_left, t_right}
   * @returns
   */
   createTask: (id, params) => {
    const url = `/todo/${id}/create-task`;
    return axiosClient.put(url, params);
  },

  /**
   * update todo Task
   * @param {*} id : id todo
   * @param {*} params : {_id: , t_status: , t_left, t_right}
   * @returns
   */
   updateTaskStatus: (id, params) => {
    const url = `/todo/${id}/update-task-status`;
    return axiosClient.put(url, params);
  },

  /**
   * update todo task
   * @param {*} id : id todo
   * @param {*} params : {_id: , t_content}
   * @returns
   */
  updateTaskContent: (id, params) => {
    const url = `/todo/${id}/update-task-content`;
    return axiosClient.put(url, params);
  },

  updateTaskOrderNumber: (id, params) => {
    const url = `/todo/${id}/update-task-order-number`;
    return axiosClient.put(url, params);
  },

  /**
   * delete todo task
   * @param {*} id : id todo
   * @param {*} params : {_id:}
   * @returns
   */
   deleteTask: (id, params) => {
    const url = `/todo/${id}/delete-task`;
    return axiosClient.put(url, params);
  },
};

export default todoTaskApi;
