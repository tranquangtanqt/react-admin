import axiosClient from './axios-client';

const todoDetailApi = {
  /**
   *  create Todo Detail
   * @param {*} id : id todo
   * @param {*} params : {d_title: , d_content: }
   * @returns
   */
  createDetail: (id, params) => {
    const url = `/todo/${id}/create-detail`;
    return axiosClient.put(url, params);
  },

  /**
   * update todo detail
   * @param {*} id : id todo
   * @param {*} params : {_id: , d_title: , d_content}
   * @returns
   */
  updateDetail: (id, params) => {
    const url = `/todo/${id}/update-detail`;
    return axiosClient.put(url, params);
  },

  /**
   * update todo Task
   * @param {*} id : id todo
   * @param {*} params : {_id: , isUp}
   * @returns
   */
  updateDetailOrderNumber: (id, params) => {
    const url = `/todo/${id}/update-detail-order-number`;
    return axiosClient.put(url, params);
  },

  /**
   * delete todo detail
   * @param {*} id : id todo
   * @param {*} params : {_id:}
   * @returns
   */
  deleteDetail: (id, params) => {
    const url = `/todo/${id}/delete-detail`;
    return axiosClient.put(url, params);
  },
};

export default todoDetailApi;
