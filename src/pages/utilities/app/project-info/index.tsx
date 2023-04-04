import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PageTitle } from "../../../../components/modules/page-title";
import IProject from "./dto/project";
import info from "./data/project.json";

export const UtilitieAppProjectInfo = () => {
  const MODE_NOMAL = 0;
  const MODE_CREATE = 1;
  const MODE_EDIT = 2;

  const refId = useRef<HTMLInputElement>(null);
  const refTitle = useRef<HTMLInputElement>(null);

  const [projects, setProjects] = useState<IProject[]>(() => {
    return info.sort(function (a, b) {
      return b.order - a.order;
    });
  });

  const [notificationMessage, setNotificationMessage] = useState("");
  const [mode, setMode] = useState(MODE_NOMAL); // 1: create, 2: edit

  const asc = (data: IProject[]) => {
    return data.sort(function (a, b) {
      return a.order - b.order;
    });
  };

  const desc = (data: IProject[]) => {
    return data.sort(function (a, b) {
      return b.order - a.order;
    });
  };

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(asc(projects)))}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "todo.json";
    link.click();
  };

  /**
   *
   */
  const showModalCreateTodo = () => {
    setMode(MODE_CREATE);
    if (refTitle.current != null) {
      refTitle.current.value = "";
    }
    ($("#modal-create-update") as any).modal("show");
  };

  /**
   * showModalUpdateTodo
   */
  const showModalUpdateTodo = (id: number) => {
    setMode(MODE_EDIT);
    let todo = projects?.filter((x) => x.id === id).shift();
    if (todo) {
      if (refId.current != null) {
        refId.current.value = todo.id.toString();
      }

      if (refTitle.current != null) {
        refTitle.current.value = todo.title;
      }
      ($("#modal-create-update") as any).modal("show");
    }
  };

  /**
   *
   */
  const createOrUpdateTodo = async () => {
    if (mode === MODE_CREATE) {
      let newProject = {} as IProject;
      newProject.id = Math.max(...projects.map((x) => x.id)) + 1;
      newProject.order = Math.max(...projects.map((x) => x.order)) + 1;
      if (refTitle.current != null) {
        newProject.title = refTitle.current.value;
      }

      let temp = [...projects];
      temp = asc(temp);
      temp.push(newProject);
      setProjects(desc(temp));
      showModalNotification("Thêm dữ liệu thành công");
    } else if (mode === MODE_EDIT) {
      if (refId.current !== null) {
        let id = Number(refId.current.value);

        let project = projects.filter(function (c) {
          return c.id === Number(id);
        })[0];

        let updatedObj: IProject;
        if (refTitle.current !== null) {
          updatedObj = Object.assign({}, project, { title: refTitle.current.value });
          let index = projects.indexOf(project);
          let arr = [...projects.slice(0, index), updatedObj, ...projects.slice(index + 1)];
          setProjects(arr);
          showModalNotification("Cập nhật dữ liệu thành công");
        }
      }
    }

    ($("#modal-create-update") as any).modal("hide");
  };

  /**
   * 
   */
  const updateOrderNumber = async (id: number, isUp: boolean) => {
    let todoCurrent = projects.filter(function (c) {
      return c.id === Number(id);
    })[0];

    let index = projects.indexOf(todoCurrent);

    if(isUp) {
      let todoUp = projects[index - 1];

      //swap order number
      let orderTemp = todoUp.order;
      todoUp.order = todoCurrent.order;
      todoCurrent.order = orderTemp;

      let arr = [...projects.slice(0, index - 1), todoUp, todoCurrent, ...projects.slice(index + 1)]
      setProjects(desc(arr))
    } else {
      let todoDown = projects[index + 1];

      //swap order number
      let orderTemp = todoDown.order;
      todoDown.order = todoCurrent.order;
      todoCurrent.order = orderTemp;

      let arr = [...projects.slice(0, index), todoCurrent, todoDown, ...projects.slice(index + 2)]
      setProjects(desc(arr))
    }
    showModalNotification("Cập nhật dữ liệu thành công");
  };

  /**
   * showModalDeleteTodo
   */
  const showModalDeleteTodo = (id: number) => {
    if (refId.current !== null) {
      refId.current.value = id.toString();
    }
    ($("#modal-todo-delete") as any).modal("show");
  };

  /**
   * deleteTodo
   */
  const deleteTodo = async () => {
    if (refId.current !== null) {
      let id = Number(refId.current.value);

      let todo = projects.filter(function (c) {
        return c.id === Number(id);
      })[0];

      let index = projects.indexOf(todo);
      let arr = [...projects.slice(0, index), ...projects.slice(index + 1)];
      setProjects(arr);
      ($("#modal-todo-delete") as any).modal("hide");
      showModalNotification("Xóa dữ liệu thành công");
    }
  };

  /**
   *
   * @param message
   */
  const showModalNotification = (message: string) => {
    if (message.trim().length > 0) {
      setNotificationMessage(message);
      ($("#modal-notification") as any).modal("show");
      setTimeout(() => {
        ($("#modal-notification") as any).modal("hide");
      }, 800);
    }
  };

  return (
    <>
      <PageTitle title="Công việc"></PageTitle>
      <button type="button" className="btn btn-primary btn-sm" onClick={exportData}>
        Export Data
      </button>

      <div className={"row mt-2"}>
        <div className="col-12 col-sm-12 col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="d-flex justify-content-between">
                <div>Danh sách</div>
                <div></div>
                <div>
                  <input className="btn btn-primary float-end btn-sm" type="button" value={"Thêm"} onClick={() => showModalCreateTodo()} />
                </div>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              {projects?.map((item, key) => (
                <li className="list-group-item" key={key}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Link to={`/utilities/app/project-info/${item.id}`}>{item.title}</Link>
                    </div>
                    <div></div>
                    <div>
                      {key > 0 ? (
                        <button className="btn pe-0 text-info" onClick={() => updateOrderNumber(item.id, true)}>
                          <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn cursor-default"></button>
                      )}
                      {key < projects.length - 1 ? (
                        <button className="btn pe-0 text-info" onClick={() => updateOrderNumber(item.id, false)}>
                          <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn cursor-default"></button>
                      )}
                      <button className="btn pe-0 text-success" onClick={() => showModalUpdateTodo(item.id)}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                      <button className="btn pe-0 text-danger" onClick={() => showModalDeleteTodo(item.id)}>
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

      <div className="modal fade" id="modal-create-update" aria-labelledby="modal-todo-create1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              {mode === MODE_CREATE ? (
                <h5 className="modal-title" id="modal-todo-create1">
                  Thêm công việc
                </h5>
              ) : (
                <h5 className="modal-title" id="modal-todo-create1">
                  Chỉnh sửa công việc
                </h5>
              )}
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <input ref={refId} type="hidden" className="form-control" />
              <label htmlFor="todo-title-create" className="form-label">
                Nội dung
              </label>
              <input ref={refTitle} type="text" className="form-control" id="todo-title-create" />
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" value="Lưu" onClick={() => createOrUpdateTodo()} />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-todo-delete" aria-labelledby="modal-todo-delete1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-todo-delete1">
                Xóa công việc
              </h5>
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">Bạn có chắc chắn muốn xóa công việc?</div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" onClick={() => deleteTodo()} value="Lưu" />
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
