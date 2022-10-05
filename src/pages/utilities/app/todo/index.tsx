import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import todoApi from "../../../../api/todoApi";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const UtilitieAppTodo = () => {
  const [todos, setTodos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [todoContent, setTodoContent] = useState("");


  const fetchTodoList = async () => {
    const response = await todoApi.getAll();
    if (response.status) {
      console.log(response);
      setTodos(response.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const showModalCreateTodo = () => {
    ($("#modal-todo-create") as any).modal("show");
  }

  const createTodo = () => {
    

    ($("#modal-todo-create") as any).modal("hide");
  }

  return (
    <>
      <PageTitle title="Công việc"></PageTitle>
      <div className={isLoading ? "row mt-2" : "row mt-2 d-none"}>
        <div style={{ minHeight: "30vh" }}>
          <div className="loading-spinner"></div>
        </div>
      </div>
      <div className={!isLoading ? "row mt-2" : "row mt-2 d-none"}>
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
              {todos?.map((item, key) => (
                <li className="list-group-item" key={key}>
                  <Link to={`/utilities/app/todo/${item["_id"]}`}>{item["title"]}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-todo-create" aria-labelledby="modal-todo-create1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-todo-create1">
                Thêm công việc
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
                  value={todoContent}
                  onChange={(e) => setTodoContent(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" value="Lưu"  onClick={() => createTodo()} /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
