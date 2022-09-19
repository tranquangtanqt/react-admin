import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Col, Divider, Row } from "antd";
import Textarea from "../../../components/modules/textarea";

const TinyMCE = () => {
  const [textareaVal, settextareaVal] = useState("");
  const editorRef = useRef(null);

  const getValue = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      settextareaVal(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
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

      <Divider orientation="left">
        <Button type="primary" onClick={getValue}>
          GET CONTENT
        </Button>
      </Divider>
      <Row gutter={24}>
        <Col className="gutter-row" span={24}>
          <Textarea value={textareaVal}></Textarea>
        </Col>
      </Row>
    </>
  );
};

export default TinyMCE;
