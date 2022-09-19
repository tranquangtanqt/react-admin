import { Button, Col, Divider, Row } from "antd";
import { useState } from "react";

const FindDifferentTwoList = () => {
  const [input1, setInput1] = useState(`1
2
3
4
5`);
  const [input2, setInput2] = useState(`5
2
1
6`);
  const [output1, setOutput1] = useState("");
  const [output2, setOutput2] = useState("");
  const [output3, setOutput3] = useState("");
  const [indexList, setIndexList] = useState("");
  const [difference1List, setDifference1List] = useState("");
  const [difference2List, setDifference2List] = useState("");

  const findText = () => {
    let outputStr1 = "";
    let outputStr2 = "";
    let outputStr3 = "";
    let indexStr = "";
    let difference1 = "";
    let difference2 = "";

    let input1Arr = input1.split("\n");
    input1Arr = input1Arr.map((x) => x.trim());
    let input2Arr = input2.split("\n");
    input2Arr = input2Arr.map((x) => x.trim());

    outputStr1 = input1Arr.filter((x) => !input2Arr.includes(x)).join("\n");
    outputStr2 = input2Arr.filter((x) => !input1Arr.includes(x)).join("\n");
    outputStr3 = input1Arr.filter((x) => input2Arr.includes(x)).join("\n");
    let len1 = input1Arr.length;
    let len2 = input2Arr.length;

    if (len1 >= len2) {
      for (let i = 0; i < len1; i++) {
        if(i < len2){
          if(input1Arr[i] !== input2Arr[i]){
            indexStr += i + "\n";
            difference1 += input1Arr[i] + "\n";
            difference2 += input2Arr[i] + "\n";
          }
        } else {
          indexStr += i + "\n";
          difference1 += input1Arr[i] + "\n";
        }
      }
    } else {
      for (let i = 0; i < len2; i++) {
        if(i < len1){
          if(input2Arr[i] !== input1Arr[i]){
            indexStr += i + "\n";
            difference1 += input1Arr[i] + "\n";
            difference2 += input2Arr[i] + "\n";
          }
        } else {
          indexStr += i + "\n";
          difference2 += input2Arr[i] + "\n";
        }
      }
    }

    setOutput1(outputStr1);
    setOutput2(outputStr2);
    setOutput3(outputStr3);
    setIndexList(indexStr);
    setDifference1List(difference1);
    setDifference2List(difference2);
  };

  return (
    <>
      <Divider orientation="left">
        Finding the Differences Between Two Lists
      </Divider>
      <Row justify="start">
        <Col span={7}>
          <Divider orientation="left">List 1</Divider>
          <textarea
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>

        <Col span={1}></Col>
        <Col span={7}>
          <Divider orientation="left">List 2</Divider>
          <textarea
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={24}>
          <Divider orientation="left">
            <Button type="primary" onClick={() => findText()}>
              Find
            </Button>
          </Divider>
        </Col>
      </Row>

      <Row justify="start">
        <Col span={7}>
          <h1>Same</h1>
          <textarea
            value={output3}
            onChange={(e) => setOutput3(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
        <Col span={1}></Col>

        <Col span={7}>
          <h1>Difference 1</h1>
          <textarea
            value={output1}
            onChange={(e) => setOutput1(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
        <Col span={1}></Col>
        <Col span={7}>
          <h1>Difference 2</h1>
          <textarea
            value={output2}
            onChange={(e) => setOutput2(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
      </Row>

      <Row justify="start">
        <Col span={1}>
          <h1>Index</h1>
          <textarea
            value={indexList}
            onChange={(e) => setIndexList(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
        <Col span={5}>
          <h1>Difference List 1</h1>
          <textarea
            value={difference1List}
            onChange={(e) => setDifference1List(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
        <Col span={5}>
          <h1>Difference List 2 </h1>
          <textarea
            value={difference2List}
            onChange={(e) => setDifference2List(e.target.value)}
            style={{ height: 400, width: "100%" }}
          />
        </Col>
      </Row>
    </>
  );
};

export default FindDifferentTwoList;
