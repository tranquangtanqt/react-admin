import Code from '../../../../components/modules/code';
import { PageTitle } from '../../../../components/modules/page-title';
import { useState } from 'react';
// import Code from "../../../../components/modules/code";

export const UtilitiesReadContentMultiFile = () => {
  const [files, setFiles] = useState([]);
  const [output, setOutput] = useState('');

  const getData = () => {
    let readers = [];
    let content = '';
    // Abort if there were no files selected
    if (!files.length) return;

    // Store promises in array
    for (let i = 0; i < files.length; i++) {
      readers.push(readFileAsText(files[i]));
    }

    // Trigger Promises
    Promise.all(readers).then((values) => {
      for (let i = 0; i < values.length; i++) {
        content += values[i];
        content += '\n';
      }

      setOutput(content);
    });
  };

  /**
   *  Simple JavaScript Promise that reads a file as text.
   **/
  const readFileAsText = (file: File) => {
    return new Promise(function (resolve, reject) {
      let fr = new FileReader();

      fr.onload = function () {
        resolve(fr.result);
      };

      fr.onerror = function () {
        reject(fr);
      };

      fr.readAsText(file);
    });
  };

  const handleChangeFile = (event: any) => {
    setFiles(event.target.files);
  };

  return (
    <>
      <PageTitle title="Read content multi file"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>Select multiple files to read from your system</b>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-9 col-md-9">
          <input
            type="file"
            id="file"
            className="form-control"
            multiple
            name="file"
            onChange={(event) => handleChangeFile(event)}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <button type="button" className="btn btn-primary" onClick={getData}>
            Get content of file
          </button>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <textarea value={output} onChange={(e) => setOutput(e.target.value)} style={{ height: 600, width: '100%' }} />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>- index.html</b>
          <div className="tab-1">
            <Code
              code={`<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div class="row">
                    <label>Select multiple files to read from your system:</label>
                    <input type="file" id="fileinput" class="form-control-file" multiple />
                </div>
                
                <div class="row mt-3">
                    <div class="col-2 offset-10 float-end">
                        <input type="button" id="btn-copy" onclick="copyContent()" value="Copy clipboard" class="btn btn-primary" />
                    </div>
                </div>
                
                <div class="row mt-3">
                    <textarea id="output" name="output" rows="30" cols="50"></textarea>	
                </div>
            </div>
            
            <script src="script.js"></script>
        </body>
    </html>
HTML
`}
              language="html"
            />
          </div>
          <b>- script.js</b>
          <div className="tab-1">
            <Code
              code={`var content = "";
/**
 *  Simple JavaScript Promise that reads a file as text.
 **/
function readFileAsText(file){
	return new Promise(function(resolve,reject){
		let fr = new FileReader();

		fr.onload = function(){
			resolve(fr.result);
		};

		fr.onerror = function(){
			reject(fr);
		};

		fr.readAsText(file);
	});
}

// Handle multiple fileuploads
document.getElementById("fileinput").addEventListener("change", function(ev){
	let files = ev.currentTarget.files;
	let readers = [];
	content = "";

	// Abort if there were no files selected
	if(!files.length) return;

	// Store promises in array
	for(let i = 0;i < files.length;i++){
		readers.push(readFileAsText(files[i]));
	}
	
	// Trigger Promises
	Promise.all(readers).then((values) => {
		// Values will be an array that contains an item
		// with the text of every selected file
		// ["File1 Content", "File2 Content" ... "FileN Content"]
		//console.log(values);
		
		for(let i = 0; i < values.length; i++){
			content += values[i];
			content += "\\n";
		}
		console.log(content);
		
		document.getElementById("output").value = content;
		
	});
}, false);

function copyContent(){
	if(content == ""){
		 alert("not found content");
		return;
	}
	copyText(document.getElementById("output"), content);
}

function copyText(ele, str){
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("copied");
}`}
              language="js"
            />
          </div>
        </div>
      </div>
    </>
  );
};
