import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import todoApi from "../../../../../api/todoApi";
import { PageTitle } from "../../../../../components/modules/pageTitle";
interface ITodo {
  _id: String;
  title: String;
}

export const UtilitieAppTodoDetail = () => {
  let params = useParams();
  const [todo, setTodo] = useState<ITodo>();

  const [isLoading, setIsLoading] = useState(true);

  const fetchTodoList = async (_id: any) => {
    const response = await todoApi.getById(_id);
    if (response) {
      console.log(response.data);
      if (response.status) {
        setTodo(response.data);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchTodoList(params.todo_id);
  }, [params]);

  return (
    <>
        {todo?.title?.toString() 
            ? <PageTitle title={todo?.title?.toString()}></PageTitle>
            : <PageTitle title={"..."}></PageTitle>
        }
      <div className={isLoading ? "row mt-2" : "row mt-2 d-none"}>
        <div style={{ minHeight: "30vh" }}>
          <div className="loading-spinner"></div>
        </div>
      </div>
      <div className={!isLoading ? "row mt-2" : "row mt-2 d-none"}>
        <div className="col-12 col-sm-12 col-md-12">{todo?.title}</div>
      </div>
    </>
  );
};
