import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PageTitle } from "../../../../components/modules/page-title";
import { IProject } from "./dto/project";
import info from "./data/project.json";

export const UtilitieAppProjectInfo = () => {
  const MODE_NOMAL = 0;
  const MODE_CREATE = 1;
  const MODE_EDIT = 2;

  const refId = useRef<HTMLInputElement>(null);
  const refTitle = useRef<HTMLInputElement>(null);

  const [projects, setProjects] = useState<IProject[]>(() => {
    return info.sort((a, b) => b.order - a.order);
  });

  const [notificationMessage, setNotificationMessage] = useState("");
  const [mode, setMode] = useState(MODE_NOMAL); // 1: create, 2: edit

  const asc = (data: IProject[]) => {
    return data.sort((a, b) => a.order - b.order);
  };

  const desc = (data: IProject[]) => {
    return data.sort((a, b) => b.order - a.order);
  };

  /**
   *
   */
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(asc(projects)))}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "project.json";
    link.click();
  };

  /**
   *
   */
  const showModalCreateProject = () => {
    setMode(MODE_CREATE);
    if (refTitle.current != null) {
      refTitle.current.value = "";
    }
    ($("#modal-create-update") as any).modal("show");
  };

  /**
   *
   */
  const showModalUpdateProject = (id: number) => {
    setMode(MODE_EDIT);
    let project = projects?.filter((x) => x.id === id).shift();
    if (project) {
      if (refId.current != null) {
        refId.current.value = project.id.toString();
      }

      if (refTitle.current != null) {
        refTitle.current.value = project.title;
      }
      ($("#modal-create-update") as any).modal("show");
    }
  };

  /**
   *
   */
  const createOrUpdateProject = async () => {
    if (mode === MODE_CREATE) {
      let newProject = {} as IProject;
      newProject.id = Math.max(...projects.map((x) => x.id)) + 1;
      newProject.order = Math.max(...projects.map((x) => x.order)) + 1;
      if (refTitle.current != null) {
        newProject.title = refTitle.current.value;
      }
      newProject.details = [];
      newProject.tasks = [];

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
    let projectCurrent = projects.filter((c) => c.id === Number(id))[0];

    let index = projects.indexOf(projectCurrent);

    if (isUp) {
      let projectUp = projects[index - 1];

      //swap order number
      let orderTemp = projectUp.order;
      projectUp.order = projectCurrent.order;
      projectCurrent.order = orderTemp;

      let arr = [...projects.slice(0, index - 1), projectUp, projectCurrent, ...projects.slice(index + 1)];
      setProjects(desc(arr));
    } else {
      let projectDown = projects[index + 1];

      //swap order number
      let orderTemp = projectDown.order;
      projectDown.order = projectCurrent.order;
      projectCurrent.order = orderTemp;

      let arr = [...projects.slice(0, index), projectCurrent, projectDown, ...projects.slice(index + 2)];
      setProjects(desc(arr));
    }
  };

  /**
   *
   */
  const showModalDeleteProject = (id: number) => {
    if (refId.current !== null) {
      refId.current.value = id.toString();
    }
    ($("#modal-project-delete") as any).modal("show");
  };

  /**
   *
   */
  const deleteProject = async () => {
    if (refId.current !== null) {
      let id = Number(refId.current.value);

      let project = projects.filter(function (c) {
        return c.id === Number(id);
      })[0];

      let index = projects.indexOf(project);
      let arr = [...projects.slice(0, index), ...projects.slice(index + 1)];
      setProjects(arr);
      ($("#modal-project-delete") as any).modal("hide");
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
      }, 700);
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
                  <input className="btn btn-primary float-end btn-sm" type="button" value={"Thêm"} onClick={() => showModalCreateProject()} />
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
                      <button className="btn pe-0 text-success" onClick={() => showModalUpdateProject(item.id)}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                      <button className="btn pe-0 text-danger" onClick={() => showModalDeleteProject(item.id)}>
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

      <div className="modal fade" id="modal-create-update" aria-labelledby="modal-project-create1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              {mode === MODE_CREATE ? (
                <h5 className="modal-title" id="modal-project-create1">
                  Thêm công việc
                </h5>
              ) : (
                <h5 className="modal-title" id="modal-project-create1">
                  Chỉnh sửa công việc
                </h5>
              )}
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <input ref={refId} type="hidden" className="form-control" />
              <label htmlFor="project-title-create" className="form-label">
                Nội dung
              </label>
              <input ref={refTitle} type="text" className="form-control" id="project-title-create" />
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" value="Lưu" onClick={() => createOrUpdateProject()} />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-project-delete" aria-labelledby="modal-project-delete1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-project-delete1">
                Xóa công việc
              </h5>
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">Bạn có chắc chắn muốn xóa công việc?</div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" onClick={() => deleteProject()} value="Lưu" />
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
