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

  const showModalUpdateDetail = (event: any, id: String) => {
    event.preventDefault();
    let detail = details?.filter((x) => x._id === id).shift();
    if (detail) {
      setDetailTitle(detail.d_title.toString());
      setDetailContent(detail.d_content.toString());
      setDetailId(detail._id.toString());
    }
    ($("#modal-content") as any).modal("show");
  };

  const saveDetail = async () => {
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
      ($("#modal-content") as any).modal("hide");
      alert("Cập nhật dữ liệu thành công");
    }
    // setShowLoading(false);
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
          <div className="accordion" id="accordionExample">
            {details?.map((detail, key) => (
              <div className="card" key={key}>
                <div className="card-header" id={detail._id.toString()}>
                  <div className="d-flex justify-content-between">
                    <p className="mb-0"  onClick={() => changeCollapse(detail._id)}>
                      <button className="btn btn-link btn-link-custom font-size-14" type="button">
                        {detail.d_title}
                      </button>
                    </p>
                    <div>
                      <button className="btn text-success" onClick={(e) => showModalUpdateDetail(e, detail._id)}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                      <button className="btn ps-0 text-danger">
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
      </div>

      <div className="modal fade" id="modal-content" aria-labelledby="note-modal1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="note-modal1">
                Chỉnh sửa chi tiết
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Đóng
              </button>
              <button type="button" className="btn btn-primary" onClick={() => saveDetail()}>
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
