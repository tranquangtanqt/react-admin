import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import todoApi from "../../../../../api/todoApi";
import { PageTitle } from "../../../../../components/modules/pageTitle";
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
}

export const UtilitieAppTodoDetail = () => {
  let params = useParams();
  const [todo, setTodo] = useState<ITodo>();
  const [details, setDetails] = useState<ITodoDetail[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [detailContent, setDetailContent] = useState("");
  const [detailTitle, setDetailTitle] = useState("");
  const [detailId, setDetailId] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  /**
   * fetchTodoList
   * @param _id
   */
  const fetchTodoList = async (_id: any) => {
    const response = await todoApi.getById(_id);
    if (response) {
      let detailMapApi: ITodoDetail[] = [];
      if (response.status) {
        let todoDetails = Array.from(response.data.details);

        todoDetails.forEach((item: any, index) => {
          detailMapApi.push({ _id: item._id, d_title: item.d_title, d_content: item.d_content, collapse: false } as ITodoDetail);
        });
        setTodo(response.data);
        setDetails(detailMapApi);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchTodoList(params.todo_id);
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

  const updateDetail = async () => {
    let detail = {
      _id: detailId,
      d_title: detailTitle,
      d_content: detailContent,
    };

    const response = await todoApi.updateTodoDetail(todo?._id, detail);

    console.log(response);
    if (response?.status) {
      if (response.data) {
        let detailMapApi: ITodoDetail[] = [];
        let todoDetails = Array.from(response.data.details);

        todoDetails.forEach((item: any, index) => {
          detailMapApi.push({ _id: item._id, d_title: item.d_title, d_content: item.d_content, collapse: false } as ITodoDetail);
        });
        setTodo(response.data);
        setDetails(detailMapApi);
      }
      ($("#modal-detail-update") as any).modal("hide");
      setNotificationMessage("Cập nhật dữ liệu thành công");

      ($("#modal-detail-update") as any).modal("hide");
      ($("#modal-notification") as any).modal("show");
      setTimeout(() => {
        ($("#modal-notification") as any).modal("hide");
      }, 2000);
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

    const response = await todoApi.createTodoDetail(todo?._id, detail);

    console.log(response);
    if (response?.status) {
      if (response.data) {
        let detailMapApi: ITodoDetail[] = [];
        let todoDetails = Array.from(response.data.details);

        todoDetails.forEach((item: any, index) => {
          detailMapApi.push({ _id: item._id, d_title: item.d_title, d_content: item.d_content, collapse: false } as ITodoDetail);
        });
        setTodo(response.data);
        setDetails(detailMapApi);
        setNotificationMessage("Thêm dữ liệu thành công");

        ($("#modal-detail-add") as any).modal("hide");
        ($("#modal-notification") as any).modal("show");
        setTimeout(() => {
          ($("#modal-notification") as any).modal("hide");
        }, 2000);
      }
    }
  };

  /**
   * showModalDeleteDetail
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

    const response = await todoApi.deleteTodoDetail(todo?._id, detail);

    console.log(response);
    if (response?.status) {
      if (response.data) {
        let detailMapApi: ITodoDetail[] = [];
        let todoDetails = Array.from(response.data.details);

        todoDetails.forEach((item: any, index) => {
          detailMapApi.push({ _id: item._id, d_title: item.d_title, d_content: item.d_content, collapse: false } as ITodoDetail);
        });
        setTodo(response.data);
        setDetails(detailMapApi);
        setNotificationMessage("Xóa dữ liệu thành công");

        ($("#modal-detail-delete") as any).modal("hide");
        ($("#modal-notification") as any).modal("show");
        setTimeout(() => {
          ($("#modal-notification") as any).modal("hide");
        }, 2000);
      }
    }
  };

  const functionDumy = () => {
    setNotificationMessage("Function temp");

    ($("#modal-notification") as any).modal("show");
    setTimeout(() => {
      ($("#modal-notification") as any).modal("hide");
    }, 2000);
  };

  return (
    <>
      {todo?.title?.toString() ? <PageTitle title={todo?.title?.toString()}></PageTitle> : <PageTitle title={"..."}></PageTitle>}
      <div className={isLoading ? "row mt-2" : "row mt-2 d-none"}>
        <div style={{ minHeight: "30vh" }}>
          <div className="loading-spinner"></div>
        </div>
      </div>
      <div className={!isLoading ? "row mt-2" : "row mt-2 d-none"}>
        <div className="col-12 col-sm-8 col-md-8">
          <div className="d-flex flex-row-reverse">
            <input className="btn btn-primary float-end btn-sm" type="button" value={"Thêm"} onClick={() => showModalCreateDetail()} />
          </div>

          <div className="accordion mt-2" id="accordionExample">
            {details?.map((detail, key) => (
              <div className="card" key={key}>
                <div className="card-header" id={detail._id.toString()}>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0" onClick={() => changeCollapse(detail._id)}>
                      <input className="btn btn-link btn-link-custom font-size-14" type="button" value={detail.d_title.toString() || ""} />
                    </p>
                    <div>
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
            <input className="btn btn-primary float-end btn-sm" type="button" value={"Thêm"} onClick={() => functionDumy()} />
          </div>
          <div className="card mt-2">
            <div className="card-header">Danh sách nhiệm vụ</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div>Nhiệm vụ 1</div>
                  <div></div>
                  <div>
                    <button className="btn pe-0 text-success" onClick={() => functionDumy()}>
                      <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </button>
                    <button className="btn pe-0 text-danger" onClick={() => functionDumy()}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <button className="btn pe-0 text-info" onClick={() => functionDumy()}>
                      <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
                    </button>
                    <button className="btn pe-0 text-info" onClick={() => functionDumy()}>
                      <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="card mt-2">
            <div className="card-header">Hoàn thành</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
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
                <input type="hidden" className="form-control" id="detail-id" value={detailId} onChange={(e) => setDetailId(e.target.value)} />
                <label htmlFor="detail-title" className="form-label">
                  Tiêu đề
                </label>
                <input type="text" className="form-control" id="detail-title" value={detailTitle} onChange={(e) => setDetailTitle(e.target.value)} />
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
              <input type="hidden" className="form-control" id="detail-id" value={detailId} onChange={(e) => setDetailId(e.target.value)} />
              Bạn có chắc chắn muốn xóa chi tiết?
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" onClick={() => deleteDetail()} value="Lưu" />
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
