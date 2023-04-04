import { Button, Col, Form, Input, Row } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import "./index.scss";

import TodoApi from "../../../api/todo-api";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todoDetails, setTodoDetails] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = () => {
    const fetchTodoList = async () => {
      try {
        const params = {
          // _page: 1,
          // _limit: 10,
        };
        const response = await TodoApi.getAll(params);
        if (response.status === "OK") {
          setTodos(response);
          setTodoDetails(response.data[0].todoDetail);
        }
      } catch (error) {
        console.log("Failed to fetch todo list: ", error);
      }
    };
    fetchTodoList();
  };

  return (
    <>
      <Row justify="start">
        <Col sm={24} md={24}>
          <Row justify="start" className="todo-list">
            <Col sm={24} md={24} lg={24}>
              <h1>
                Danh sách
                <span>Việc hôm nay không để ngày mai.</span>
              </h1>

              <Form
                // labelCol={{ span: 4 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
                // onValuesChange={onFormLayoutChange}
                // disabled={componentDisabled}
              >
                <Form.Item label="Input" wrapperCol={{ sm: 0, md: 14 }}>
                  <Input />
                </Form.Item>

                <Form.Item label="Button">
                  <Button>Button</Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>

        {/* <Col sm={24} md={12}>
          <main id="todolist">
            <h1>
              Danh sách
              <span>Việc hôm nay không để ngày mai.</span>
            </h1>

            <form>
              <input type="text" name="name" id="name" />
              <input type="text" name="id" id="name" />
              <button type="button">Thêm mới</button>
            </form>

            {todoDetails?.map((detail, key) => (
              <li key={key}>
                <span className="label">{detail.name}</span>
                <div className="actions">
                  <button className="btn-picto" type="button">
                    <i className="fas fa-user-edit"></i>
                  </button>
                  <button className="btn-picto" type="button" aria-label="Delete" title="Delete">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}

            <li className="done">
              <span className="label">123</span>
              <div className="actions">
                <button className="btn-picto" type="button">
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn-picto" type="button" aria-label="Delete" title="Delete">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </li>
            <p>Danh sách nhiệm vụ trống.</p> 
          </main>
        </Col> */}

        <Col sm={24} md={12}>
          <h1>List users</h1>
          <ul>
            {todos.data?.map((todo) => (
              <li key={todo.id}>{todo.name}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default TodoApp;
