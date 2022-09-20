import { Button, Col, Divider, Row } from "antd";
import { useState } from "react";

const FindTextColumnJPEN = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [output, setOutput] = useState("");

  const findText = () => {
    let outputStr = "";
    let input1Arr = input1.split("\n");
    input1Arr = input1Arr.map((x) => x.trim());

    let input2Arr = input2.split("\n");
    input2Arr = input2Arr.map((x) => x.trim());

    for (let i = 0; i < input1Arr.length; i++) {
      if (input1Arr[i].trim().length > 0) {
        for (let j = 0; j < input2Arr.length; j++) {
          let row = input2Arr[j].split("\t");
          if (row.includes(input1Arr[i])) {
            outputStr += row[1] + "\n";
          }
        }
      }
    }

    setOutput(outputStr);
  };

  return (
    <>
      <Divider orientation="left">Find Column</Divider>
      <Row justify="start">
        <Col span={6}>
          <Divider orientation="left">List JP</Divider>
          <textarea
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>

        <Col span={18}>
          <Divider orientation="left">List JP-EN</Divider>
          <textarea
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={18}>
          <Divider orientation="left">
            <Button type="primary" onClick={() => findText()}>
              Find
            </Button>
          </Divider>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={6}>
          <textarea
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default FindTextColumnJPEN;
