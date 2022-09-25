import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import todoApi from "../../../../api/todoApi";
import { PageTitle } from "../../../../components/modules/pageTitle";

export const UtilitieAppTodo = () => {
  const [todos, setTodos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      <PageTitle title="TODO"></PageTitle>
      <div className={ isLoading ? "row mt-2" : "row mt-2 d-none"}>
        <div style={{ minHeight: "30vh" }}>
          <div className="loading-spinner"></div>
        </div>
      </div>
      <div className={ !isLoading ? "row mt-2" : "row mt-2 d-none"}>
        <div className="col-12 col-sm-12 col-md-12">
          <div className="card">
            <div className="card-header">Danh sách</div>
            <ul className="list-group list-group-flush">
              {todos?.map((item, key) => (
                <li className="list-group-item" key={key}>
                    <Link to={`/utilities/app/todo/${item["_id"]}`} >{item["title"]}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
