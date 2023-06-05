import { PageTitle } from 'components/modules/page-title';

export const JavaSettingMaven = () => {
  return (
    <>
      <PageTitle title="Cài đặt maven và tạo project"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>1. Tạo project</b>
          <div className="tab-1">
            <p>
              Truy cập &nbsp;
              <a
                href="https://start.spring.io/"
                target={'_blank'}
                rel="noreferrer"
              >
                https://start.spring.io/
              </a>
              &nbsp; và tải project
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/programming/java/1.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <b>2. Cài đặt maven</b>
          <div className="tab-1">
            <p>
              Truy cập&nbsp;
              <a
                href="http://maven.apache.org/download.cgi"
                target={'_blank'}
                rel="noreferrer"
              >
                http://maven.apache.org/download.cgi
              </a>
              &nbsp; và tải maven
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/programming/java/2.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>
              Sau khi download xong Maven, giải nén file zip vào một thư mục nào
              đó trên ổ cứng. Chẳng hạn bạn giải nén vào: D:\Maven
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/programming/java/3.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>Cài đặt biến môi trường:</p>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/programming/java/4.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>Kiểm tra version maven đã cài đặt:</p>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/programming/java/5.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>Khai báo vị trí cài đặt Maven (Nếu cần)</p>
            <p>Vào thư mục: D:\Maven\apache-maven-3.6.3\conf</p>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/programming/java/6.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>
              Mở file settings.xml để thay đổi thư mục lưu maven (mặc định sẽ là
              C:\Users\{'{tên_user}'}\.m2
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/programming/java/7.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>
              {
                'Trên Eclipse chọn Window => Reference => Maven => Installations => Add'
              }
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/programming/java/8.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/programming/java/9.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>Tiếp theo khai báo vị trí file cấu hình của Maven.</p>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-3">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-2">
            <input
              type="image"
              src={require('resources/img/programming/java/10.jpg')}
              className="img-thumbnail"
              alt="description image"
            />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="tab-1">
            <p>Đến đây việc cài đặt Maven cho Eclipse hoàn thành.</p>
          </div>
        </div>
      </div>
    </>
  );
};
