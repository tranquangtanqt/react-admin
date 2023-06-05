import Code from 'components/modules/code';
import { PageTitle } from 'components/modules/page-title';

export const ProgrammingJavascriptTipsTips = () => {
  return (
    <>
      <PageTitle title="Thủ thuật JavaScript hữu ích"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1.Tạo hàm query DOM ngắn gọn hơn với bind</b>
          <div className="tab-1">
            <p>
              JavaScript cung cấp phương thức document.querySelector() cho phép
              bạn query DOM dựa trên selector. Tuy nhiên, việc sử dụng phương
              thức này khá dài dòng. Ví dụ:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`let ele1 = document.querySelector("#id1");
let ele2 = document.querySelector(".class2");
let ele3 = document.querySelector("div.user-panel.main input[name='login']");`}
              language="sql"
            />
          </div>
          <div className="tab-1">
            <p>Có thể lợi dụng phương thức bind để rút gọn phương thức này:</p>
          </div>
          <div className="tab-2">
            <Code
              code={`let $ = document.querySelector.bind(document);

// Usage
let ele1 = $("#id1");
let ele2 = $(".class2");
let ele3 = $("div.user-panel.main input[name='login']");`}
              language="sql"
            />
          </div>
        </div>
        <div className="tab-1">
          <p>
            Ở đây đặt tên hàm mới là $, nên thấy nó giống với jQuery, nhưng nhớ
            rằng đây vẫn chỉ là JavaScript thuần mà thôi.
          </p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Rút gọn hàm console.log</b>
          <div className="tab-1">
            <p>
              Tương tự như trên, có thể sử dụng bind để rút gọn phương thức
              console.log như sau:
            </p>
          </div>
          <div className="tab-2">
            <Code
              code={`let log = console.log.bind(document);
log("hello"); // => hello`}
              language="sql"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12"></div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12"></div>
      </div>
    </>
  );
};
