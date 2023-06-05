import { Avatar, Button, Col, Form, Input, List, message, Popconfirm, Row, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DeleteOutlined, EditOutlined, LoadingOutlined } from '@ant-design/icons';
import todoApi from 'api/todo-api';
import todoDetailApi from 'api/todoDetail';

import './index.scss';

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  let params = useParams();

  const fetchTodoList = async (id) => {
    const response = await todoApi.getById(id);
    if (response?.status === 'OK') {
      setTodoList([]);
      if (response.data?.todoDetail) {
        let details = response.data?.todoDetail;
        details = details.filter((obj) => !obj.delFlg);
        details.sort((a, b) => a.sortOrder - b.sortOrder);
        setTodoList(details);
      }
    }
    // console.log(response);
  };

  useEffect(() => {
    fetchTodoList(params.todo_id);
  }, [params]);

  const initScreen = () => {
    form.resetFields(['name']);
  };

  const editDetail = (id) => {
    let detail = todoList.filter((obj) => obj.id === id);
    form.setFieldsValue({ 'name-edit': detail[0]?.name });
    form.setFieldsValue({ id_detail_edit: id });
    setIsModalVisible(true);
  };

  const createTodoDetail = async () => {
    if (form.getFieldValue('name').trim() === '') {
      return;
    }

    const response = await todoDetailApi.create({
      name: form.getFieldValue('name'),
      todo: {
        id: params.todo_id,
      },
    });

    if (response?.status === 'OK') {
      setTodoList([]);
      if (response.data?.todoDetail) {
        let details = response.data?.todoDetail;
        details = details.filter((obj) => !obj.delFlg);
        details.sort((a, b) => a.sortOrder - b.sortOrder);
        setTodoList(details);
      }

      initScreen();
      message.success('Thêm thành công!');
    }
  };

  const updateTodoDetail = async () => {
    const response = await todoDetailApi.update({
      id: form.getFieldValue('id_detail_edit'),
      name: form.getFieldValue('name-edit'),
    });

    if (response?.status === 'OK') {
      setTodoList([]);
      if (response.data?.todoDetail) {
        let details = response.data?.todoDetail;
        details = details.filter((obj) => !obj.delFlg);
        details.sort((a, b) => a.sortOrder - b.sortOrder);
        setTodoList(details);
      }

      initScreen();
      message.success('Sửa thành công!');
    }
    setIsModalVisible(false);
  };

  const deleteTodoDetail = async (id) => {
    const response = await todoDetailApi.delete(id);
    if (response?.status === 'OK') {
      setTodoList([]);
      if (response.data?.todoDetail) {
        let details = response.data?.todoDetail;
        details = details.filter((obj) => !obj.delFlg);
        details.sort((a, b) => a.sortOrder - b.sortOrder);
        setTodoList(details);
      }
      initScreen();
      message.success('Xóa thành công!');
    }
  };

  return (
    <>
      <Form
        form={form}
        initialValues={{
          name: '',
        }}
      >
        <Row gutter={24} justify={'start'}>
          <Col sm={24} md={12}>
            Mô tả
          </Col>
          <Col sm={24} md={12}>
            <h1>Danh sách công việc</h1>
            <Form.Item label="Nhiệm vụ" name={'name'}>
              <Input placeholder="Tên nhiệm vụ" onPressEnter={createTodoDetail} />
            </Form.Item>
            {
              <List
                dataSource={todoList}
                renderItem={(item) => (
                  <List.Item key={item?.id}>
                    <List.Item.Meta
                      avatar={<Avatar style={{ backgroundColor: 'rgb(221 109 109)' }} icon={<LoadingOutlined />} />}
                      title={item?.name}
                    />
                    <Button type="link" size={'small'} onClick={() => editDetail(item.id)}>
                      <EditOutlined />
                    </Button>
                    <Popconfirm
                      title="Bạn có chắc xóa nhiệm vụ này?"
                      onConfirm={() => deleteTodoDetail(item?.id)}
                      okText="Có"
                      cancelText="Không"
                    >
                      <Button type="link" size={'small'}>
                        <DeleteOutlined />
                      </Button>
                    </Popconfirm>
                  </List.Item>
                )}
              />
            }

            <Modal
              title="Chỉnh sửa tên"
              visible={isModalVisible}
              onOk={updateTodoDetail}
              onCancel={() => {
                setIsModalVisible(false);
              }}
            >
              <Form.Item name={'name-edit'}>
                <Input placeholder="Tên nhiệm vụ" />
              </Form.Item>
              <Form.Item name={'id_detail_edit'} hidden>
                <Input type="hidden" />
              </Form.Item>
            </Modal>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default TodoApp;
