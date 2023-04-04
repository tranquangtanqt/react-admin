import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import todoApi from "../../../../../api/todo-api";
import todoDetailApi from "../../../../../api/todo-detail-api";
import todoTaskApi from "../../../../../api/todo-task-api";
import { PageTitle } from "../../../../../components/modules/page-title";
import { Editor } from "@tinymce/tinymce-react";

interface ITodo {
  _id: String;
  title: String;
}

interface ITodoDetail {
  _id: String;
  d_title: String;
  d_content: String;
  collapse: boolean;
  d_order_number: Number;
}

interface ITodoTask {
  _id: String;
  t_content: String;
  t_status: Number;
  t_order_number: Number;
}

export const UtilitieAppTodoDetail = () => {
  let params = useParams();
  const [todo, setTodo] = useState<ITodo>();
  const [details, setDetails] = useState<ITodoDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [detailContent, setDetailContent] = useState("");
  const [detailTitle, setDetailTitle] = useState("");
  const [detailId, setDetailId] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  const [taskCompleted, setTaskCompleted] = useState<ITodoTask[]>([]);
  const [taskInComplete, setTaskInComplete] = useState<ITodoTask[]>([]);
  const [taskId, setTaskId] = useState("");
  const [taskContent, setTaskContent] = useState("");
  const [taskStatus, setTaskStatus] = useState(0);

  /**
   * fetchTodoList
   * @param _id
   */
  const fetchTodoList = async (_id: any) => {
    const response = await todoApi.getById(_id);

    if (response) {
      setTodo(response.data);

      let detailMapApi: ITodoDetail[] = [];

      if (response.status) {
        let todoDetails = Array.from(response.data.details);
        todoDetails.forEach((item: any) => {
          detailMapApi.push({
            _id: item._id,
            d_title: item.d_title,
            d_content: item.d_content,
            collapse: false,
            d_order_number: item.d_order_number,
          });
        });

        setDetails(detailMapApi);
        renderTask(response.data.tasks);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    // <em>fetchTodoList(params.todo_id)</em>;
    fetchTodoList(params.todo_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  /**
   * // remove tinyMCE
   */
  const removeMessageTinyMCE = () => {
    setTimeout(() => {
      document.querySelectorAll(".tox-tinymce-aux").forEach((e) => e.remove());
    }, 1000);
  };

  removeMessageTinyMCE();

  /**
   * changeCollapse
   * @param id
   */
  const changeCollapse = (id: String) => {
    let detailTemp = [...(details || [])];
    detailTemp?.forEach((item) => {
      if (item._id === id) {
        item.collapse = !item.collapse;
      }
    });
    setDetails(detailTemp);
  };

  const handleOnchangeContent = (content: any, editor: any) => {
    setDetailContent(content);
  };

  const showModalUpdateDetail = (id: String) => {
    let detail = details?.filter((x) => x._id === id).shift();
    if (detail) {
      setDetailTitle(detail.d_title.toString());
      setDetailContent(detail.d_content.toString());
      setDetailId(detail._id.toString());
    }
    ($("#modal-detail-update") as any).modal("show");
  };

  /**
   * 
   */
  const updateDetail = async () => {
    let detail = {
      _id: detailId,
      d_title: detailTitle,
      d_content: detailContent,
    };

    const response = await todoDetailApi.updateDetail(todo?._id, detail);

    if (response?.status) {
      if (response.data) {
        fetchTodoList(todo?._id);
        ($("#modal-detail-update") as any).modal("hide");
        showMesage("Cập nhật dữ liệu thành công");
      }
    }
  };

  /**
   * showModalCreateDetail
   */
  const showModalCreateDetail = () => {
    setDetailId("");
    setDetailContent("");
    setDetailTitle("");
    ($("#modal-detail-add") as any).modal("show");
  };

  /**
   * createDetail
   */
  const createDetail = async () => {
    let detail = {
      d_title: detailTitle,
      d_content: detailContent,
    };

    const response = await todoDetailApi.createDetail(todo?._id, detail);

    if (response?.status) {
      if (response.data) {
        fetchTodoList(todo?._id);
        ($("#modal-detail-add") as any).modal("hide");
        showMesage("Thêm dữ liệu thành công");
      }
    }
  };

  /**
   * updateDetailOrderNumber
   * @param id 
   * @param isUp 
   */
  const updateDetailOrderNumber = async (id: String, isUp: boolean) => {
    let params = {
      _id: id,
      isUp: isUp,
    };

    const response = await todoDetailApi.updateDetailOrderNumber(todo?._id, params);

    if (response?.status) {
      fetchTodoList(todo?._id);
      showMesage("Cập nhật dữ liệu thành công");
    }
  };

  /**
   * showModalDeleteDetail
   * @param id 
   */
  const showModalDeleteDetail = (id: String) => {
    setDetailId(id.toString() || "");
    ($("#modal-detail-delete") as any).modal("show");
  };

  /**
   * createDetail
   */
  const deleteDetail = async () => {
    let detail = {
      _id: detailId,
    };

    const response = await todoDetailApi.deleteDetail(todo?._id, detail);

    if (response?.status) {
      fetchTodoList(todo?._id);
      ($("#modal-detail-delete") as any).modal("hide");
      showMesage("Xóa dữ liệu thành công");
    }
  };

  /**
   * showModalCreateTask
   */
  const showModalCreateTask = () => {
    setTaskId("");
    setTaskContent("");
    setTaskStatus(0);
    ($("#modal-task-add") as any).modal("show");
  };

  /**
   * createTask
   */
  const createTask = async () => {
    let task = {
      t_content: taskContent,
      t_status: taskStatus,
    };

    const response = await todoTaskApi.createTask(todo?._id, task);

    if (response?.status) {
      showMesage("Thêm dữ liệu thành công");
      fetchTodoList(todo?._id);
    }
  };

  /**
   * updateStatusTask
   */
  const updateStatusToCompletedTask = async (_id: String) => {
    let task = {
      _id: _id,
      t_status: 1,
    };

    const response = await todoTaskApi.updateTaskStatus(todo?._id, task);

    if (response?.status) {
      showMesage("Cập nhật dữ liệu thành công");
      fetchTodoList(todo?._id);
    }
  };

  /**
   * updateStatusTask
   */
  const updateStatusToInCompleteTask = async (_id: String) => {
    let task = {
      _id: _id,
      t_status: 0,
    };

    const response = await todoTaskApi.updateTaskStatus(todo?._id, task);

    if (response?.status) {
      showMesage("Cập nhật dữ liệu thành công");
      fetchTodoList(todo?._id);
    }
  };

  /**
   * updateTaskCompleteOrderNumber
   * @param id 
   * @param isUp 
   */
  const updateTaskCompleteOrderNumber = async (id: String, isUp: boolean) => {
    let params = {
      _id: id,
      isUp: isUp,
    };

    const response = await todoTaskApi.updateTaskOrderNumber(todo?._id, params);

    if (response?.status) {
      fetchTodoList(todo?._id);
      showMesage("Cập nhật dữ liệu thành công");
    }
  };

  /**
   * showModalDeleteTask
   */
  const showModalDeleteTask = (id: String) => {
    setTaskId(id.toString() || "");
    ($("#modal-task-delete") as any).modal("show");
  };

  /**
   * createDetail
   */
  const deleteTask = async () => {
    let task = {
      _id: taskId,
    };

    const response = await todoTaskApi.deleteTask(todo?._id, task);

    if (response?.status) {
      ($("#modal-task-delete") as any).modal("hide");
      showMesage("Xóa dữ liệu thành công");
      fetchTodoList(todo?._id);
    }
  };

  /**
   * showModalUpdateTaskContent
   * @param id 
   * @param isComplete 
   */
  const showModalUpdateTaskContent = (id: String, isComplete: boolean) => {
    let task;
    if (isComplete) {
      task = taskCompleted?.filter((x) => x._id === id).shift();
    } else {
      task = taskInComplete?.filter((x) => x._id === id).shift();
    }

    if (task) {
      setTaskContent(task.t_content.toString());
      setTaskId(task._id.toString());
    }
    ($("#modal-task-update") as any).modal("show");
  };

  /**
   * updateTaskContent
   */
  const updateTaskContent = async () => {
    let task = {
      _id: taskId,
      t_content: taskContent,
    };

    const response = await todoTaskApi.updateTaskContent(todo?._id, task);

    if (response?.status) {
      ($("#modal-task-update") as any).modal("hide");
      showMesage("Cập nhật dữ liệu thành công");
      fetchTodoList(todo?._id);
    }
  };

  const renderTask = (tasks: any) => {
    let taskCompletedMapApi: ITodoTask[] = [];
    let taskInCompleteMapApi: ITodoTask[] = [];

    tasks.forEach((item: any) => {
      if (item.t_status === 0) {
        taskInCompleteMapApi.push({
          _id: item._id,
          t_content: item.t_content,
          t_status: item.t_status,
          t_order_number: item.t_order_number,
        } as ITodoTask);
      } else if (item.t_status === 1) {
        taskCompletedMapApi.push({
          _id: item._id,
          t_content: item.t_content,
          t_status: item.t_status,
          t_order_number: item.t_order_number,
        } as ITodoTask);
      }
    });

    setTaskCompleted(taskCompletedMapApi);
    setTaskInComplete(taskInCompleteMapApi);
  };

  /**
   * showMesage
   * @param message 
   */
  const showMesage = (message: string) => {
    if (message.trim().length > 0) {
      setNotificationMessage(message);
      ($("#modal-notification") as any).modal("show");
      setTimeout(() => {
        ($("#modal-notification") as any).modal("hide");
      }, 1000);
    }
  };

  // const functionDumy = () => {
  //   setNotificationMessage("Function temp");

  //   ($("#modal-notification") as any).modal("show");
  //   setTimeout(() => {
  //     ($("#modal-notification") as any).modal("hide");
  //   }, 1000);
  // };

  return (
    <>
      {todo?.title?.toString() ? (
        <PageTitle title={todo?.title?.toString()}></PageTitle>
      ) : (
        <PageTitle title={"..."}></PageTitle>
      )}
      <div className={isLoading ? "row mt-2" : "row mt-2 d-none"}>
        <div style={{ minHeight: "30vh" }}>
          <div className="loading-spinner"></div>
        </div>
      </div>

      <div className={!isLoading ? "row mt-2" : "row mt-2 d-none"}>
        <div className="col-12 col-sm-8 col-md-8">
          <div className="d-flex flex-row-reverse">
            <input
              className="btn btn-primary float-end btn-sm"
              type="button"
              value={"Thêm"}
              onClick={() => showModalCreateDetail()}
            />
          </div>

          <div className="accordion mt-2" id="accordionExample">
            {details?.map((detail, key) => (
              <div className="card" key={key}>
                <div className="card-header" id={detail._id.toString()}>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0" onClick={() => changeCollapse(detail._id)}>
                      <input
                        className="btn btn-link btn-link-custom font-size-14"
                        type="button"
                        value={detail.d_title.toString() || ""}
                      />
                    </p>
                    <div>
                      {key > 0 ? (
                        <button
                          className="btn pe-0 text-info"
                          onClick={() => updateDetailOrderNumber(detail._id, true)}
                        >
                          <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn cursor-default"></button>
                      )}
                      {key < details.length - 1 ? (
                        <button
                          className="btn pe-0 text-info"
                          onClick={() => updateDetailOrderNumber(detail._id, false)}
                        >
                          <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn cursor-default"></button>
                      )}
                      <button className="btn text-success" onClick={() => showModalUpdateDetail(detail._id)}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                      <button className="btn ps-0 text-danger" onClick={() => showModalDeleteDetail(detail._id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div id="collapseOne" className={detail.collapse ? "collapse show" : "collapse"}>
                  <div className="card-body">
                    <div dangerouslySetInnerHTML={{ __html: detail.d_content.toString() || "" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 col-sm-4 col-md-4">
          <div className="d-flex flex-row-reverse">
            <input
              className="btn btn-primary float-end btn-sm"
              type="button"
              value={"Thêm"}
              onClick={() => showModalCreateTask()}
            />
          </div>
          <div className="card mt-2">
            <div className="card-header">Danh sách nhiệm vụ</div>
            <ul className="list-group list-group-flush">
              {taskInComplete?.map((task, key) => (
                <li className="list-group-item" key={key}>
                  <div className="d-flex justify-content-between">
                    <div className="cursor-pointer">
                      <i
                        className="fa fa-circle-o me-2"
                        aria-hidden="true"
                        onClick={() => updateStatusToCompletedTask(task._id)}
                      ></i>
                      {task.t_content}
                    </div>
                    <div></div>
                    <div>
                      {key > 0 ? (
                        <button className="btn pe-0 text-info" onClick={() => updateTaskCompleteOrderNumber(task._id, true)}>
                          <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn cursor-default"></button>
                      )}
                      {key < taskInComplete.length - 1 ? (
                        <button className="btn pe-0 text-info" onClick={() => updateTaskCompleteOrderNumber(task._id, false)}>
                          <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn cursor-default"></button>
                      )}
                      <button className="btn pe-0 text-success" onClick={() => showModalUpdateTaskContent(task._id, false)}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                      <button className="btn pe-0 text-danger" onClick={() => showModalDeleteTask(task._id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card mt-2">
            <div className="card-header">Hoàn thành</div>
            <ul className="list-group list-group-flush">
              {taskCompleted?.map((task, key) => (
                <li className="list-group-item" key={key}>
                  <div className="d-flex justify-content-between">
                    <div className="text-secondary cursor-pointer">
                      <i
                        className="fa fa-check-circle-o me-2"
                        aria-hidden="true"
                        onClick={() => updateStatusToInCompleteTask(task._id)}
                      ></i>
                      <s>{task.t_content}</s>
                    </div>
                    <div></div>
                    <div>
                      <button className="btn pe-0 text-success" onClick={() => showModalUpdateTaskContent(task._id, true)}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                      <button className="btn pe-0 text-danger" onClick={() => showModalDeleteTask(task._id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-detail-update" aria-labelledby="note-modal1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="note-modal1">
                Chỉnh sửa chi tiết
              </h5>
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div>
                <input
                  type="hidden"
                  className="form-control"
                  id="detail-id"
                  value={detailId}
                  onChange={(e) => setDetailId(e.target.value)}
                />
                <label htmlFor="detail-title" className="form-label">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="detail-title"
                  value={detailTitle}
                  onChange={(e) => setDetailTitle(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <label htmlFor="text-area" className="form-label">
                  Nội dung
                </label>
                <Editor
                  initialValue=""
                  value={detailContent}
                  onEditorChange={handleOnchangeContent}
                  id="text-area"
                  init={{
                    height: 300,
                    menubar: false,
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" onClick={() => updateDetail()} value="Lưu" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-detail-add" aria-labelledby="modal-detail-add1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-detail-add1">
                Thêm chi tiết
              </h5>
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div>
                <label htmlFor="detail-title-add" className="form-label">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="detail-title-add"
                  value={detailTitle}
                  onChange={(e) => setDetailTitle(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <label htmlFor="text-area-add" className="form-label">
                  Nội dung
                </label>
                <Editor
                  initialValue=""
                  value={detailContent}
                  onEditorChange={handleOnchangeContent}
                  id="text-area-add"
                  init={{
                    height: 300,
                    menubar: false,
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" onClick={() => createDetail()} value="Lưu" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-detail-delete" aria-labelledby="modal-detail-delete1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-detail-delete1">
                Xóa chi tiết
              </h5>
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <input
                type="hidden"
                className="form-control"
                id="detail-id"
                value={detailId}
                onChange={(e) => setDetailId(e.target.value)}
              />
              Bạn có chắc chắn muốn xóa chi tiết?
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" onClick={() => deleteDetail()} value="Lưu" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-task-delete" aria-labelledby="modal-task-delete1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-task-delete1">
                Xóa nhiệm vụ
              </h5>
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <input
                type="hidden"
                className="form-control"
                id="task-id"
                value={taskId}
                onChange={(e) => setTaskId(e.target.value)}
              />
              Bạn có chắc chắn muốn xóa chi tiết?
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" onClick={() => deleteTask()} value="Lưu" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-task-add" aria-labelledby="modal-task-add1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-task-add1">
                Thêm nhiệm vụ
              </h5>
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div>
                <label htmlFor="task-content-add" className="form-label">
                  Nội dung
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="task-content-add"
                  value={taskContent}
                  onChange={(e) => setTaskContent(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" onClick={() => createTask()} value="Lưu" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-task-update" aria-labelledby="modal-task-update1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-task-update1">
                Chỉnh sửa nhiệm vụ
              </h5>
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <input
                type="hidden"
                className="form-control"
                id="task-id"
                value={taskId}
                onChange={(e) => setTaskId(e.target.value)}
              />
              <label htmlFor="task-content-update" className="form-label">
                Nội dung
              </label>
              <input
                type="text"
                className="form-control"
                id="task-content-update"
                value={taskContent}
                onChange={(e) => setTaskContent(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" onClick={() => updateTaskContent()} value="Lưu" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-notification" aria-labelledby="modal-notification" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-notification">
                Thông báo
              </h5>
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">{notificationMessage}</div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
