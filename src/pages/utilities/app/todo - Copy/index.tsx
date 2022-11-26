import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import todoApi from "../../../../api/todoApi";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const UtilitieAppTodo = () => {
  const [todos, setTodos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [todoId, setTodoId] = useState("");
  const [todoTitle, setTodoTitle] = useState("");
  const [maxOrderNumber, setMaxOrderNumber] = useState(0);
  const [notificationMessage, setNotificationMessage] = useState("");

  const fetchTodoList = async () => {
    const response = await todoApi.getAll();
    if (response.status) {
      response.data.sort((a: any, b: any) => b["order_number"] - a["order_number"]);
      setTodos(response.data);
      let max = 0;
      response.data.forEach((element: any) => {
        if (element["order_number"] > max) {
          max = element["order_number"];
        }
      });

      setIsLoading(false);
      setMaxOrderNumber(max);
    }
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const showModalCreateTodo = () => {
    setTodoId("");
    setTodoTitle("");
    ($("#modal-todo-create") as any).modal("show");
  };

  const createTodo = async () => {
    setIsLoading(true);
    let todo = {
      title: todoTitle,
      order_number: maxOrderNumber + 1
    };

    const response = await todoApi.createTodo(todo);
    if (response.status) {
      fetchTodoList();
      showModalNotification("Thêm dữ liệu thành công");
      setIsLoading(false);
    }
    ($("#modal-todo-create") as any).modal("hide");
  };

  const showModalNotification = (message: string) => {
    if (message.trim().length > 0) {
      setNotificationMessage(message);
      ($("#modal-notification") as any).modal("show");
      setTimeout(() => {
        ($("#modal-notification") as any).modal("hide");
      }, 1000);
    }
  };

  /**
   * showModalDeleteTodo
   */
  const showModalDeleteTodo = (id: String) => {
    setTodoId(id.toString() || "");
    ($("#modal-todo-delete") as any).modal("show");
  };

  const deleteTodo = async () => {
    let todo = {
      _id: todoId,
    };

    const response = await todoApi.deleteTodo(todo);

    if (response?.status) {
      if (response.data) {
        fetchTodoList();
        ($("#modal-todo-delete") as any).modal("hide");
        showModalNotification("Xóa dữ liệu thành công");
      }
    }
  };

  /**
   * showModalUpdateTodo
   */
   const showModalUpdateTodo = (id: String) => {
    
    let todo = todos?.filter((x) => x["_id"] === id).shift();
    if(todo) {
      setTodoId(todo["_id"]);
      setTodoTitle(todo["title"]);
      ($("#modal-todo-update") as any).modal("show");
    }
  };

  const updateTodo = async () => {
    let todo = {
      _id: todoId,
      title: todoTitle
    };

    // const response = await todoApi.updateTodoTitle(todo);

    // if (response?.status) {
    //   if (response.data) {
    //     fetchTodoList();
    //     ($("#modal-todo-update") as any).modal("hide");
    //     showModalNotification("Cập nhật dữ liệu thành công");
    //   }
    // }
  };

  const updateOrderNumber = async (indexOfTodos: number, isUp: boolean) => {
    let todo1: any;
    let todo2: any;
    if(isUp) {
      todos.forEach((item, index) => {
        if(index === indexOfTodos) {
          todo1 = item;
        }
        if(index === indexOfTodos - 1) {
          todo2 = item;
        }
      });
    } else {
      todos.forEach((item, index) => {
        if(index === indexOfTodos) {
          todo1 = item;
        }
        if(index === indexOfTodos + 1) {
          todo2 = item;
        }
      });
    }
   
    let temp = todo1["order_number"];
    todo1["order_number"] = todo2["order_number"];
    todo2["order_number"] = temp;
    
    // const response1 = await todoApi.updateTodoOrderNumber(todo1);
    // if (response1?.status) {
    //   const response2 = await todoApi.updateTodoOrderNumber(todo2);
    //   if (response2?.status) {
    //     if (response2.data) {
    //       fetchTodoList();
    //       ($("#modal-todo-update") as any).modal("hide");
    //       showModalNotification("Cập nhật dữ liệu thành công");
    //     }
    //   }
    // }
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
                  <div className="d-flex justify-content-between">
                    <div>
                      <Link to={`/utilities/app/todo/${item["_id"]}`}>{item["title"]}</Link>
                    </div>
                    <div></div>
                    <div>
                    {key > 0 ? (
                        <button className="btn pe-0 text-info" onClick={() => updateOrderNumber(key, true)}>
                          <i className="fa fa-arrow-circle-up" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn cursor-default"></button>
                      )}
                      {key < todos.length - 1 ? (
                        <button className="btn pe-0 text-info" onClick={() => updateOrderNumber(key, false)}>
                          <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                        </button>
                      ) : (
                        <button className="btn cursor-default"></button>
                      )}
                      <button className="btn pe-0 text-success" onClick={() => showModalUpdateTodo(item["_id"])}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                      </button>
                      <button className="btn pe-0 text-danger" onClick={() => showModalDeleteTodo(item["_id"])}>
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
                <input type="text" className="form-control" id="task-content-add" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
              </div>
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" value="Lưu" onClick={() => createTodo()} />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-todo-update" aria-labelledby="modal-todo-update1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-todo-update1">
                Chỉnh sửa công việc
              </h5>
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <input type="hidden" className="form-control" id="todo-id" value={todoId} onChange={(e) => setTodoId(e.target.value)} />
              <label htmlFor="task-content-add" className="form-label">
                Nội dung
              </label>
              <input type="text" className="form-control" id="task-content-add" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" value="Lưu" onClick={() => updateTodo()} />
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

      <div className="modal fade" id="modal-todo-delete" aria-labelledby="modal-todo-delete1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-todo-delete1">
                Xóa công việc
              </h5>
              <input type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <input type="hidden" className="form-control" id="todo-id" value={todoId} onChange={(e) => setTodoId(e.target.value)} />
              Bạn có chắc chắn muốn xóa công việc?
            </div>
            <div className="modal-footer">
              <input type="button" className="btn btn-secondary" data-bs-dismiss="modal" value={"Đóng"} />
              <input type="button" className="btn btn-primary" onClick={() => deleteTodo()} value="Lưu" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
