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
   *  delete Todo
   * @param {*} params : {id}
   * @returns
   */
  deleteTodo: (params) => {
    const url = `/todo/delete`;
    return axiosClient.put(url, params);
  },
  /**
   * update todo
   * @param {*} params : {_id , title}
   * @returns
   */
   updateTodoTitle: (params) => {
    const url = `/todo/update-title`;
    return axiosClient.put(url, params);
  },

  /**
   * update todo
   * @param {*} params : {_id , order_number}
   * @returns
   */
   updateTodoOrderNumber: (params) => {
    const url = `/todo/update-order-number`;
    return axiosClient.put(url, params);
  },

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
   * @param {*} params : {_id: , t_status: , t_left, t_right}
   * @returns
   */
   updateTodoDetailOrderNumber: (id, params) => {
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

  /**
   *  create Todo Task
   * @param {*} id : id todo
   * @param {*} params : {t_content: , t_status, t_left, t_right}
   * @returns
   */
  createTodoTask: (id, params) => {
    const url = `/todo/${id}/create-task`;
    return axiosClient.put(url, params);
  },

  /**
   * update todo Task
   * @param {*} id : id todo
   * @param {*} params : {_id: , t_status: , t_left, t_right}
   * @returns
   */
  updateStatusTask: (id, params) => {
    const url = `/todo/${id}/update-status-task`;
    return axiosClient.put(url, params);
  },

  /**
   * delete todo task
   * @param {*} id : id todo
   * @param {*} params : {_id:}
   * @returns
   */
  deleteTodoTask: (id, params) => {
    const url = `/todo/${id}/delete-task`;
    return axiosClient.put(url, params);
  },
  /**
   * update todo task
   * @param {*} id : id todo
   * @param {*} params : {_id: , t_content}
   * @returns
   */
  updateTodoTaskContent: (id, params) => {
    const url = `/todo/${id}/update-task-content`;
    return axiosClient.put(url, params);
  },
};

export default todoApi;
