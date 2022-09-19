import { Button, Col, Divider, Input, Row } from "antd";
import { useState } from "react";
import Utils from "../../../themes/utils";

const RepeatTextOne = () => {
  const [input, setInput] = useState("###replace###");
  const [output, setOutput] = useState("");
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const renderText = () => {
    let outputStr = "";
    if (isNaN(start)) {
      let startNumber = start.charCodeAt(0);
      let endNumber = end.charCodeAt(0);
      for (let i = startNumber; i <= endNumber; i++) {
        let str = Utils.replaceAll(input, "###replace###", String.fromCharCode(i));

        outputStr += str;
        outputStr += "\r\n";
      }
    } else {
      // number
      for (let i = parseInt(start); i <= parseInt(end); i++) {
        let str = Utils.replaceAll(input, "###replace###", i);
        outputStr += str;
        outputStr += "\r\n";
      }
    }

    setOutput(outputStr);
  };

  return (
    <>
      <form>
        <Divider orientation="left">Input</Divider>
        <Row justify="start">
          <Col span={24}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ height: 200, width: "100%" }}
            />
          </Col>
        </Row>

        <Divider orientation="left">Start</Divider>
        <Input
          placeholder="Start"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />

        <Divider orientation="left">End</Divider>
        <Input
          placeholder="End"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />

        <Divider orientation="left">
          <Button type="primary" onClick={renderText}>
            Render text
          </Button>
        </Divider>

        <Row justify="start">
          <Col span={24}>
            <textarea
              value={output}
              onChange={(e) => setOutput(e.target.value)}
              style={{ height: 200, width: "100%" }}
            />
          </Col>
        </Row>
      </form>
    </>
  );
};

export default RepeatTextOne;
