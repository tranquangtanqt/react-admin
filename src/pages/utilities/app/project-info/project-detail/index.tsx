import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { PageTitle } from "../../../../../components/modules/page-title";
import { Editor } from "@tinymce/tinymce-react";
import projectJson from "./../data/project.json";

import { IProject } from "../dto/project";
import { IProjectDetail } from "../dto/project-detail";
import { IProjectTask } from "../dto/project-task";

export const UtilitieAppProjectDetail = () => {
  const MODE_NOMAL = 0;
  const MODE_CREATE = 1;
  const MODE_EDIT = 2;

  let params = useParams();

  const refDetailId = useRef<HTMLInputElement>(null);
  const refDetailTitle = useRef<HTMLInputElement>(null);

  const refTaskId = useRef<HTMLInputElement>(null);
  const refTaskContent = useRef<HTMLInputElement>(null);

  const [mode, setMode] = useState(MODE_NOMAL); // 1: create, 2: edit

  const [projects, setProjects] = useState<IProject[]>(projectJson);

  const [project] = useState<IProject>(() => {
    let data: IProject = projectJson.filter((x) => x.id === Number(params.project_id))[0];
    return data;
  });

  const [details, setDetails] = useState<IProjectDetail[]>(() => {
    let data: IProject = projectJson.filter((x) => x.id === Number(params.project_id))[0];
    return data.details.sort((a, b) => b.order - a.order);
  });

  const [detailContent, setDetailContent] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  const [tasks, setTasks] = useState<IProjectTask[]>(() => {
    let data: IProject = projectJson.filter((x) => x.id === Number(params.project_id))[0];
    return data.tasks.sort((a, b) => b.order - a.order);
  });

  const [taskCompleted, setTaskCompleted] = useState<IProjectTask[]>(() => {
    let data: IProject = projectJson.filter((x) => x.id === Number(params.project_id))[0];
    let dataTasks = data.tasks.filter((x) => x.status === 1);
    return dataTasks.sort((a, b) => a.order - b.order);
  });

  const [taskInComplete, setTaskInComplete] = useState<IProjectTask[]>(() => {
    let data: IProject = projectJson.filter((x) => x.id === Number(params.project_id))[0];
    let dataTasks = data.tasks.filter((x) => x.status === 0);
    return dataTasks.sort((a, b) => b.order - a.order);
  });

  const ascDetail = (data: IProjectDetail[]) => {
    return data.sort((a, b) => a.order - b.order);
  };

  const descDetail = (data: IProjectDetail[]) => {
    return data.sort((a, b) => b.order - a.order);
  };

  const ascTask = (data: IProjectTask[]) => {
    return data.sort((a, b) => a.order - b.order);
  };

  const descTask = (data: IProjectTask[]) => {
    return data.sort((a, b) => b.order - a.order);
  };

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
  const changeCollapse = (id: number) => {
    let detailTemp = [...(details || [])];
    detailTemp?.forEach((item) => {
      if (item.id === id) {
        item.collapse = !item.collapse;
      }
    });
    setDetails(detailTemp);
  };

  /**
   *
   */
  const exportData = () => {
    let data: IProject = projects.filter((x) => x.id === Number(params.project_id))[0];
    ascDetail(data.details);
    data.details.forEach((x) => (x.collapse = false));
    updateProjectDetail(data.details);
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(projects))}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";
    link.click();
  };

  /**
   *
   */
  const showModalCreateDetail = () => {
    setMode(MODE_CREATE);
    if (refDetailTitle.current !== null) {
      refDetailTitle.current.value = "";
    }
    setDetailContent("");
    ($("#modal-detail-create-update") as any).modal("show");
  };

  /**
   *
   * @param id
   */
  const showModalUpdateDetail = (id: number) => {
    setMode(MODE_EDIT);
    let detail = details?.filter((x) => x.id === id).shift();

    if (detail) {
      if (refDetailId.current != null) {
        refDetailId.current.value = detail.id.toString();
      }

      if (refDetailTitle.current != null) {
        refDetailTitle.current.value = detail.title;
      }
      setDetailContent(detail.content.toString());
    }
    ($("#modal-detail-create-update") as any).modal("show");
  };

  /**
   *
   */
  const createOrUpdateDetail = async () => {
    if (mode === MODE_CREATE) {
      let detail = {} as IProjectDetail;
      if (details.length > 0) {
        detail.id = Math.max(...details.map((x) => x.id)) + 1;
        detail.order = Math.max(...details.map((x) => x.order)) + 1;
      } else {
        detail.id = 1;
        detail.order = 1;
      }

      detail.project_id = project.id;

      if (refDetailTitle.current != null) {
        detail.title = refDetailTitle.current.value;
      }
      detail.content = detailContent;

      let updDetails: IProjectDetail[] = [...details];
      updDetails = ascDetail(details);
      updDetails.push(detail);
      setDetails(descDetail(updDetails));

      updateProjectDetail(updDetails);
      ($("#modal-detail-create-update") as any).modal("hide");
      showMesage("Thêm dữ liệu thành công");
    } else if (mode === MODE_EDIT) {
      if (refDetailId.current != null) {
        let id = Number(refDetailId.current.value);
        let detail = details?.filter((x) => x.id === id)[0];
        if (refDetailTitle.current != null) {
          detail.title = refDetailTitle.current.value;
        }
        detail.content = detailContent;

        let index = details.findIndex((x) => x.id === id);
        let arr = [...details.slice(0, index), detail, ...details.slice(index + 1)];
        setDetails(descDetail(arr));
        updateProjectDetail(arr);
        ($("#modal-detail-create-update") as any).modal("hide");
        showMesage("Cập nhật dữ liệu thành công");
      }
    }
  };

  /**
   *
   * @param detailsNew
   */
  const updateProjectDetail = (detailsNew: IProjectDetail[]) => {
    let updatedProject: IProject;
    let newObject: IProjectDetail[] = [...detailsNew];
    updatedProject = Object.assign({}, project, { details: ascDetail(newObject) });
    let index = projects.findIndex((x) => x.id === project.id);
    let arr = [...projects.slice(0, index), updatedProject, ...projects.slice(index + 1)];
    setProjects(arr);
  };

  /**
   *
   * @param taskNew
   */
  const updateProjectTask = (taskNew: IProjectTask[]) => {
    let updatedProject: IProject;
    let newObject: IProjectTask[] = [...taskNew];
    updatedProject = Object.assign({}, project, { tasks: ascTask(newObject) });
    let index = projects.findIndex((x) => x.id === project.id);
    let arr = [...projects.slice(0, index), updatedProject, ...projects.slice(index + 1)];
    setProjects(arr);
  };

  /**
   *
   * @param content
   * @param editor
   */
  const handleOnchangeContent = (content: any, editor: any) => {
    setDetailContent(content);
  };

  /**
   * updateDetailOrderNumber
   * @param id
   * @param isUp
   */
  const updateDetailOrderNumber = async (id: number, isUp: boolean) => {
    let detailCurrent = details.filter((c) => c.id === id)[0];
    let index = details.findIndex((x) => x.id === id);

    if (isUp) {
      let detailUp = details[index - 1];

      //swap order number
      let orderTemp = detailUp.order;
      detailUp.order = detailCurrent.order;
      detailCurrent.order = orderTemp;
      let arr = [...details.slice(0, index - 1), detailUp, detailCurrent, ...details.slice(index + 1)];
      setDetails(descDetail(arr));
      updateProjectDetail(arr);
    } else {
      let detailDown = details[index + 1];

      //swap order number
      let orderTemp = detailDown.order;
      detailDown.order = detailCurrent.order;
      detailCurrent.order = orderTemp;

      let arr = [...details.slice(0, index), detailCurrent, detailDown, ...details.slice(index + 2)];
      setDetails(descDetail(arr));
      updateProjectDetail(arr);
    }
    showMesage("Cập nhật dữ liệu thành công");
  };

  /**
   * showModalDeleteDetail
   * @param id
   */
  const showModalDeleteDetail = (id: number) => {
    if (refDetailId.current != null) {
      refDetailId.current.value = id.toString();
      ($("#modal-detail-delete") as any).modal("show");
    }
  };

  /**
   * createDetail
   */
  const deleteDetail = async () => {
    if (refDetailId.current != null) {
      let id = Number(refDetailId.current.value);

      let index = details.findIndex((x) => x.id === id);
      let arr = [...details.slice(0, index), ...details.slice(index + 1)];
      setDetails(descDetail(arr));
      updateProjectDetail(arr);

      ($("#modal-detail-delete") as any).modal("hide");
      showMesage("Xóa dữ liệu thành công");
    }
  };

  /**
   *
   */
  const showModalCreateTask = () => {
    setMode(MODE_CREATE);
    if (refTaskContent.current !== null) {
      refTaskContent.current.value = "";
    }
    ($("#modal-task-create-update") as any).modal("show");
  };

  /**
   *
   */
  const createOrUpdateTask = async () => {
    if (mode === MODE_CREATE) {
      let task = {} as IProjectTask;
      if (tasks.length > 0) {
        task.id = Math.max(...tasks.map((x) => x.id)) + 1;
        task.order = Math.max(...tasks.map((x) => Math.abs(x.order))) + 1;
      } else {
        task.id = 1;
        task.order = 1;
      }

      if (refTaskContent.current != null) {
        task.content = refTaskContent.current.value;
      }

      let updTaskInComs: IProjectTask[] = [...taskInComplete];
      updTaskInComs.push(task);
      descTask(updTaskInComs)
      setTaskInComplete(updTaskInComs);
      
      let arr = [...taskCompleted, ...updTaskInComs];
      setTasks(arr);
      console.log(arr);
      updateProjectTask(arr);

      ($("#modal-task-create-update") as any).modal("hide");
      showMesage("Thêm dữ liệu thành công");
    } else if (mode === MODE_EDIT) {
      // if (refDetailId.current != null) {
      //   let id = Number(refDetailId.current.value);
      //   let detail = details?.filter((x) => x.id === id)[0];
      //   if (refDetailTitle.current != null) {
      //     detail.title = refDetailTitle.current.value;
      //   }
      //   detail.content = detailContent;

      //   let index = details.findIndex((x) => x.id === id);
      //   let arr = [...details.slice(0, index), detail, ...details.slice(index + 1)];
      //   setDetails(descDetail(arr));
      //   updateProjects(arr);
      //   ($("#modal-detail-create-update") as any).modal("hide");
      //   showMesage("Cập nhật dữ liệu thành công");
      // }
    }
  };

  /**
   * updateStatusTask
   */
  const updateStatusToCompletedTask = async (_id: number) => {
    // let task = {
    //   _id: _id,
    //   t_status: 1,
    // };
    // const response = await todoTaskApi.updateTaskStatus(todo?._id, task);
    // if (response?.status) {
    //   showMesage("Cập nhật dữ liệu thành công");
    //   fetchTodoList(todo?._id);
    // }
  };

  /**
   * updateStatusTask
   */
  const updateStatusToInCompleteTask = async (_id: number) => {
    // let task = {
    //   _id: _id,
    //   t_status: 0,
    // };
    // const response = await todoTaskApi.updateTaskStatus(todo?._id, task);
    // if (response?.status) {
    //   showMesage("Cập nhật dữ liệu thành công");
    //   fetchTodoList(todo?._id);
    // }
  };

  /**
   * updateTaskCompleteOrderNumber
   * @param id
   * @param isUp
   */
  const updateTaskCompleteOrderNumber = async (id: number, isUp: boolean) => {
    // let params = {
    //   _id: id,
    //   isUp: isUp,
    // };
    // const response = await todoTaskApi.updateTaskOrderNumber(todo?._id, params);
    // if (response?.status) {
    //   fetchTodoList(todo?._id);
    //   showMesage("Cập nhật dữ liệu thành công");
    // }
  };

  /**
   * showModalDeleteTask
   */
  const showModalDeleteTask = (id: number) => {
    ($("#modal-task-delete") as any).modal("show");
  };

  /**
   * createDetail
   */
  const deleteTask = async () => {
    // let task = {
    //   _id: taskId,
    // };
    // const response = await todoTaskApi.deleteTask(todo?._id, task);
    // if (response?.status) {
    //   ($("#modal-task-delete") as any).modal("hide");
    //   showMesage("Xóa dữ liệu thành công");
    //   fetchTodoList(todo?._id);
    // }
  };

  /**
   * showModalUpdateTaskContent
   * @param id
   * @param isComplete
   */
  const showModalUpdateTaskContent = (id: number, isComplete: boolean) => {
    // let task;
    // if (isComplete) {
    //   task = taskCompleted?.filter((x) => x._id === id).shift();
    // } else {
    //   task = taskInComplete?.filter((x) => x._id === id).shift();
    // }
    // if (task) {
    //   setTaskContent(task.t_content.toString());
    //   setTaskId(task._id.toString());
    // }
    // ($("#modal-task-update") as any).modal("show");
  };

  /**
   * updateTaskContent
   */
  const updateTaskContent = async () => {
    // let task = {
    //   _id: taskId,
    //   t_content: taskContent,
    // };
    // const response = await todoTaskApi.updateTaskContent(todo?._id, task);
    // if (response?.status) {
    //   ($("#modal-task-update") as any).modal("hide");
    //   showMesage("Cập nhật dữ liệu thành công");
    //   fetchTodoList(todo?._id);
    // }
  };

  const renderTask = (tasks: any) => {
    // let taskCompletedMapApi: IProjectTask[] = [];
    // let taskInCompleteMapApi: IProjectTask[] = [];
    // tasks.forEach((item: any) => {
    //   if (item.t_status === 0) {
    //     taskInCompleteMapApi.push({
    //       _id: item._id,
    //       t_content: item.t_content,
    //       t_status: item.t_status,
    //       t_order_number: item.t_order_number,
    //     } as IProjectTask);
    //   } else if (item.t_status === 1) {
    //     taskCompletedMapApi.push({
    //       _id: item._id,
    //       t_content: item.t_content,
    //       t_status: item.t_status,
    //       t_order_number: item.t_order_number,
    //     } as IProjectTask);
    //   }
    // });
    // setTaskCompleted(taskCompletedMapApi);
    // setTaskInComplete(taskInCompleteMapApi);
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
      {project?.title?.toString() ? <PageTitle title={project?.title?.toString()}></PageTitle> : <PageTitle title={"..."}></PageTitle>}

      <button type="button" className="btn btn-primary btn-sm" onClick={exportData}>
        Export Data
      </button>

      <div className={"row mt-2"}>
        <div className="col-12 col-sm-8 col-md-8">
          <div className="d-flex flex-row-reverse">
            <input className="btn btn-primary float-end btn-sm" type="button" value={"Thêm"} onClick={() => showModalCreateDetail()} />
          </div>

          <div className="accordion mt-2" id="accordionExample">
            {details?.map((detail, key) => (
              <div className="card" key={key}>
                <div className="card-header" id={detail.id.toString()}>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0" onClick={() => changeCollapse(detail.id)}>
                      <input className="btn btn-link btn-link-custom font-size-14" type="button" value={detail.title.toString() || ""} />
                    </p>
                    <div>
                      {key > 0 ? (
                        <button className="btn pe-0 text-info" onClick={() => updateDetailOrderNumber(detail.id, true)}>
                          <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn cursor-default"></button>
                      )}
                      {key < details.length - 1 ? (
                        <button className="btn pe-0 text-info" onClick={() => updateDetailOrderNumber(detail.id, false)}>
                          <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn cursor-default"></button>
                      )}
                      <button className="btn text-success" onClick={() => showModalUpdateDetail(detail.id)}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                      <button className="btn ps-0 text-danger" onClick={() => showModalDeleteDetail(detail.id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div id="collapseOne" className={detail.collapse ? "collapse show" : "collapse"}>
                  <div className="card-body">
                    <div dangerouslySetInnerHTML={{ __html: detail.content.toString() || "" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 col-sm-4 col-md-4">
          <div className="d-flex flex-row-reverse">
            <input className="btn btn-primary float-end btn-sm" type="button" value={"Thêm"} onClick={() => showModalCreateTask()} />
          </div>
          <div className="card mt-2">
            <div className="card-header">Danh sách nhiệm vụ</div>
            <ul className="list-group list-group-flush">
              {taskInComplete?.map((task, key) => (
                <li className="list-group-item" key={key}>
                  <div className="d-flex justify-content-between">
                    <div className="cursor-pointer">
                      <i className="fa fa-circle-o me-2" aria-hidden="true" onClick={() => updateStatusToCompletedTask(task.id)}></i>
                      {task.content}
                    </div>
                    <div></div>
                    <div>
                      {key > 0 ? (
                        <button className="btn pe-0 text-info" onClick={() => updateTaskCompleteOrderNumber(task.id, true)}>
                          <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn cursor-default"></button>
                      )}
                      {key < taskInComplete.length - 1 ? (
                        <button className="btn pe-0 text-info" onClick={() => updateTaskCompleteOrderNumber(task.id, false)}>
                          <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn cursor-default"></button>
                      )}
                      <button className="btn pe-0 text-success" onClick={() => showModalUpdateTaskContent(task.id, false)}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                      <button className="btn pe-0 text-danger" onClick={() => showModalDeleteTask(task.id)}>
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
                      <i className="fa fa-check-circle-o me-2" aria-hidden="true" onClick={() => updateStatusToInCompleteTask(task.id)}></i>
                      <s>{task.content}</s>
                    </div>
                    <div></div>
                    <div>
                      <button className="btn pe-0 text-success" onClick={() => showModalUpdateTaskContent(task.id, true)}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                      <button className="btn pe-0 text-danger" onClick={() => showModalDeleteTask(task.id)}>
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

      <div className="modal fade" id="modal-detail-create-update" aria-labelledby="modal-detail-create-update1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              {mode === MODE_CREATE ? (
                <h5 className="modal-title" id="modal-detail-create-update1">
                  Thêm chi tiết
                </h5>
              ) : (
                <h5 className="modal-title" id="modal-detail-create-update1">
                  Chỉnh sửa chi tiết
                </h5>
              )}

              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div>
                <input ref={refDetailId} type="hidden" className="form-control" />
                <label htmlFor="detail-title-create-update" className="form-label">
                  Tiêu đề
                </label>
                <input ref={refDetailTitle} type="text" className="form-control" id="detail-title-create-update" />
              </div>

              <div className="mt-2">
                <label htmlFor="text-area-create-update" className="form-label">
                  Nội dung
                </label>
                <Editor
                  initialValue=""
                  value={detailContent}
                  onEditorChange={handleOnchangeContent}
                  id="text-area-create-update"
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
              <input type="button" className="btn btn-primary" onClick={() => createOrUpdateDetail()} value="Lưu" />
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
            <div className="modal-body">Bạn có chắc chắn muốn xóa chi tiết?</div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" onClick={() => deleteDetail()} value="Lưu" />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-task-create-update" aria-labelledby="modal-task-create-update1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              {mode === MODE_CREATE ? (
                <h5 className="modal-title" id="modal-task-create-update1">
                  Thêm nhiệm vụ
                </h5>
              ) : (
                <h5 className="modal-title" id="modal-task-create-update1">
                  Chỉnh sửa nhiệm vụ
                </h5>
              )}
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div>
                <input ref={refTaskId} type="hidden" className="form-control" />
                <label htmlFor="task-content-create-update" className="form-label">
                  Nội dung
                </label>
                <input ref={refTaskContent} type="text" className="form-control" id="task-content-create-update" />
              </div>
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" onClick={() => createOrUpdateTask()} value="Lưu" />
            </div>
          </div>
        </div>
      </div>

      {/* 
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

      */}

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
