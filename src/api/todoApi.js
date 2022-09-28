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
   * @param {*} params : {_id: , d_title: , d_content: }
   * @returns 
   */
  updateTodoDetail: (id, params) => {
    const url = `/todo/${id}/update-detail`;
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
  } 
};

export default todoApi;
