import { useState } from "react";
import Code from "../../../../components/modules/code";
import { PageTitle } from "../../../../components/modules/page-title";

export const UtilitiesListFileSelected = () => {
  const [output, setOutput] = useState("");

  const handleupload = (e: any) => {
    let files = e.target.files;
    let fileName = "";
    for (let index = 0; index < files.length; index++) {
      fileName += files[index].name;
      fileName += "\r\n";
    }

    setOutput(fileName);
  };

  return (
    <>
      <PageTitle title="List File Selected From PC"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <input type="file" id="file" onChange={(e) => handleupload(e)} multiple />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <textarea value={output} onChange={(e) => setOutput(e.target.value)} style={{ height: 600, width: "100%" }} />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <Code
            code={`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>get-files</title>
</head>
<body>
<input type="file" name="client-file" id="get-files" multiple onchange="change()"/>
<script>
  function change(){
    var inp = document.getElementById("get-files");
    for (i = 0; i < inp.files.length; i++) {
        let file = inp.files[i];
        console.log(file.name);
    }
  }
</script>
</body>
</html>`}
            language="html"
          />
        </div>
      </div>
    </>
  );
};
