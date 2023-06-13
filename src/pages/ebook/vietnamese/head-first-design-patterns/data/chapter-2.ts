import IContent from 'utils/interface';

export const chapter2: IContent[] = [
  {
    title: 'Observer Pattern – Giữ đối tượng trong tầm kiểm soát',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_1.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        <strong>
          Observer Pattern – Đừng bỏ lỡ khi có điều gì đó thú vị xảy ra! 
        </strong>
        Chúng tôi đã có một mẫu giúp các đối tượng của bạn biết khi nào có
        điều gì đó mà chúng quan tâm đã xảy ra hay chưa. Các đối tượng thậm
        chí có thể quyết định trong runtime xem chúng có muốn được thông báo
        hay không. Observer Pattern là một trong những mẫu được sử dụng nhiều
        nhất trong JDK và nó rất hữu dụng. Trước khi chúng tôi hoàn thành,
        chúng tôi cũng sẽ xem xét một đến nhiều mối quan hệ và khớp nối lỏng
        lẻo (<em>loose coupling</em>) (vâng, đúng vậy, chúng tôi đã nói về
        khớp nối). Với Observer Pattern, bạn sẽ sống trong cuộc sống của bữa
        tiệc Mẫu.
        <br />
      </p>`,
      },
    ],
  },
  {
    title: 'Xin chúc mừng!',
    contents: [
      {
        p: `<h6><b>NHÓM CỦA BẠN VỪA GIÀNH ĐƯỢC HỢP ĐỒNG XÂY DỰNG WEATHER-O-RAMA, INC., TRẠM THEO DÕI THỜI TIẾT QUA INTERNET.</b></h6>`,
      },
      {
        div: `<i>
        <p>
          <strong>Tuyên bố công việc</strong>
        </p>
        <p>
          Chúc mừng bạn đã được chọn để xây dựng Trạm theo dõi thời tiết dựa
          trên Internet thế hệ tiếp theo của chúng tôi!
        </p>
        <p>
          Trạm thời tiết sẽ dựa trên đối tượng WeatherData đang chờ cấp bằng
          sáng chế của chúng tôi, theo dõi các điều kiện thời tiết hiện tại
          (nhiệt độ, độ ẩm và áp suất khí quyển). Chúng tôi muốn bạn tạo một
          ứng dụng ban đầu cung cấp ba yếu tố hiển thị: điều kiện hiện tại,
          thống kê thời tiết và các dự báo đơn giản, tất cả được cập nhật theo
          thời gian thực khi đối tượng WeatherData có được các phép đo gần
          nhất.
        </p>
        <p>
          Hơn nữa, đây là một trạm thời tiết có thể mở rộng. Weather-O-Rama
          muốn phát hành API để các nhà phát triển khác có thể ghi lại màn
          hình thời tiết của riêng họ. Chúng tôi muốn bạn cung cấp API đó!
        </p>
        <p>
          Weather-O-Rama nghĩ rằng chúng tôi có một mô hình kinh doanh tuyệt
          vời: một khi khách hàng bị cuốn hút, chúng tôi dự định tính phí cho
          mỗi màn hình họ sử dụng. Bây giờ là phần tốt nhất: chúng tôi sẽ
          thanh toán cho bạn bằng cổ phiếu.
        </p>
        <p>
          Chúng tôi mong muốn được nhìn thấy thiết kế và ứng dụng alpha của
          bạn.
        </p>
        <p>Trân trọng,</p>
        <p>Johnny Hurricane, Giám đốc điều hành</p>
        <p>
          P.S. Chúng tôi đang thức để chuẩn bị các file nguồn WeatherData cho
          bạn.
        </p>
      </i>`,
      },
    ],
  },
  {
    title: 'Tổng quan về ứng dụng theo dõi thời tiết',
    contents: [
      {
        div: `<p>
        Ba thành phần trong hệ thống là trạm thời tiết 
        <strong>Weather Station</strong> (thiết bị vật lý thu thập dữ liệu
        thời tiết thực tế), đối tượng <strong>WeatherData</strong> (theo dõi
        dữ liệu đến từ Trạm thời tiết và cập nhật màn hình) và 
        <strong>màn hình hiển thị</strong> cho người dùng điều kiện thời tiết
        hiện tại.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_2.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Đối tượng <strong>WeatherData</strong> biết cách nói chuyện với 
        <strong>Weather Station</strong> để có dữ liệu được cập nhật. Sau đó
        đối tượng <strong>WeatherData</strong> cập nhật màn hình cho ba màn
        hình hiển thị khác nhau: Điều kiện hiện tại (hiển thị nhiệt độ, độ ẩm
        và áp suất), Thống kê thời tiết và dự báo.
      </p>
      <p>
        Công việc của chúng tôi, là tạo một ứng dụng sử dụng đối tượng 
        <strong>WeatherData</strong> để update ba màn hình hiển thị: Điều kiện
        hiện tại (hiển thị nhiệt độ, độ ẩm và áp suất), Thống kê thời tiết và
        dự báo.
      </p>`,
      },
    ],
  },
  {
    title: 'Giải nén lớp WeatherData',
    contents: [
      {
        p: `<h6><b>NHƯ ĐÃ HỨA, SÁNG HÔM SAU CÁC FILE SOURCE WEATHERDATA ĐẾN.
        NHÌN BÊN TRONG CODE, MỌI THỨ TRÔNG KHÁ ĐƠN GIẢN:</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_3.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Chúng ta đã biết được những gì?',
    contents: [
      {
        div: `<p>
        Thông số kỹ thuật từ Weather-O-Rama không rõ ràng lắm, nhưng chúng ta
        phải tìm ra những gì chúng ta cần làm. Vì vậy, cho đến giờ chúng ta đã
        biết được những gì?
      </p>

      <ul>
        <li>
          Lớp <strong>WeatherData </strong>có các phương thức getter cho các
          giá trị: nhiệt độ (<strong>getTemperature()</strong>), độ ẩm (
          <strong>getHumidity()</strong>) và áp suất khí quyển (
          <strong>getPressure()</strong>).
        </li>
        <li>
          Phương thức <strong>measurementsChanged()</strong> được gọi bất cứ
          khi nào có dữ liệu đo thời tiết mới. (Chúng tôi không biết hay quan
          tâm đến cách gọi phương thức này; chúng tôi chỉ biết rằng nó là như
          vậy).
        </li>
        <li>
          Chúng ta cần thực hiện ba màn hình hiển thị sử dụng dữ liệu thời
          tiết: màn hình hiển thị điều kiện hiện tại, màn hình thống kê và màn
          hình dự báo. Những màn hình này phải được cập nhật mỗi khi
          WeatherData có số đo mới.
        </li>
        <li>
          Hệ thống phải có khả năng mở rộng, các nhà phát triển khác có thể
          tạo các màn hình hiển thị tùy chỉnh mới và người dùng có thể thêm
          hoặc xóa bao nhiêu phần tử hiển thị mà họ muốn cho ứng dụng. Hiện
          tại, chúng tôi chỉ biết về ba loại hiển thị ban đầu (điều kiện hiện
          tại, số liệu thống kê và dự báo).
        </li>
      </ul>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_4.jpg`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Sai lầm đầu tiên ở Trạm thời tiết (Weather Station)',
    contents: [
      {
        div: `<p>
        Ở đây, một cài đặt đầu tiên, chúng tôi đã được gợi ý từ các nhà phát
        triển trước đó của Weather-O-Rama và thêm code của chúng tôi vào phương
        thức <strong>measurementsChanged()</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_5.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Điều gì sai với việc triển khai của chúng tôi?',
    contents: [
      {
        div: `<p>
        Nghĩ lại tất cả những khái niệm và nguyên tắc của 
        <a href="/react-admin#/ebook/vietnamese/head-first-design-patterns/1">Chương 1</a>…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_6.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Chúng tôi sẽ xem qua <strong>Observer</strong>, sau đó quay lại và tìm
        hiểu cách áp dụng nó vào ứng dụng theo dõi thời tiết.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_7.jpg`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Tìm hiểu Observer Pattern thôi',
    contents: [
      {
        p: `<h6><b>BẠN BIẾT CÁCH ĐĂNG KÝ MUA MUA MỘT TỜ BÁO HOẶC TẠP CHÍ NHƯ THẾ NÀO KHÔNG:</b></h6>`,
      },
      {
        div: `<ol>
        <li>
          Một nhà xuất bản báo đi vào kinh doanh và bắt đầu xuất bản báo.
        </li>
        <li>
          Bạn đăng ký vào một nhà xuất bản cụ thể và mỗi khi có một bài báo
          mới, nó sẽ được gửi cho bạn. Miễn là bạn vẫn là một thuê bao, bạn sẽ
          nhận được báo mới.
        </li>
        <li>
          Bạn hủy đăng ký khi bạn không muốn mua nữa và chúng sẽ không được
          gửi cho bạn.
        </li>
        <li>
          Trong khi đó nhà xuất bản vẫn kinh doanh, người dân, khách sạn, hãng
          hàng không và các doanh nghiệp khác vẫn liên tục đăng ký và hủy đăng
          ký mua báo.
        </li>
      </ol>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_8.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Publishers + Subscribers = Observer Pattern',
    contents: [
      {
        p: `<h6><b>(Nhà xuất bản + Người đăng ký = Mẫu người quan sát)</b></h6>`,
      },
      {
        div: `<p>
        <strong>
          Nếu bạn hiểu việc đăng ký báo, bạn sẽ hiểu khá nhiều về Observer
          Pattern, chúng tôi gọi nhà xuất bản là SUBJECT và người đăng ký là
          OBSERVER.
        </strong>
      </p>

      <p>
        <strong>Hãy xem xét kỹ hơn:</strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_9.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Một ngày trong thế giới của Observer Pattern',
    contents: [
      {
        div: `<p>
        <strong>
          Một đối tượng Vịt đi cùng và nói với Subject rằng nó muốn trở thành
          Observer
        </strong>
      </p>
      <p>
        Vịt thực sự muốn trở thành observer; Những đối tượng đó đang gửi đi
        bất cứ khi nào thay đổi trạng thái của nó thay đổi…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_10.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>Đối tượng Vịt hiện là một Observer chính thức.</strong>
      </p>

      <p>
        Vịt trong danh sách chờ đợi một thông báo tuyệt vời tiếp theo, nó sẽ
        nhận một số int, xem hình:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_11.jpg`),
          width: `55%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>Subject nhận được một cập nhật mới!</strong>
      </p>

      <p>
        Bây giờ Duck và tất cả những observer còn lại nhận được thông báo rằng
        Subject đã được cập nhật.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_12.jpg`),
          width: `55%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>Chuột yêu cầu được remove khỏi danh sách observer.</strong>
      </p>

      <p>
        Chuột đã nhận được số int từ rất lâu và đã mệt mỏi với nó, vì vậy nó
        quyết định đây chính là thời gian để dừng lại nhiệm vụ observer của
        nó.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_13.jpg`),
          width: `55%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>Chuột đã được remove!</strong>
      </p>

      <p>
        Đối tượng Subject chấp nhận yêu cầu của Chuột và xóa nó khỏi observer.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_14.jpg`),
          width: `55%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>Subject có một int mới.</strong>
      </p>

      <p>
        Tất cả các observer nhận được một thông báo khác, ngoại trừ Chuột
        không còn nhận được. Không nói với bất cứ ai, nhưng Chuột vẫn luôn nhớ
        đến những số int đó … có thể nó sẽ yêu cầu trở thành một observer
        trong một ngày nào đó.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_15.jpg`),
          width: `55%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Bộ phim dài năm phút: cần một Subject để quan sát',
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_16.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_17.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Hai tuần sau',
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_18.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Định nghĩa Observer Pattern',
    contents: [
      {
        div: `<p>
        Nếu muốn hình dung về observer pattern, nghĩ đến người mua tạp chí vào
        đăng kí với nhà xuất bản là một cách tốt để trực quan hóa mẫu
        này.&nbsp;
      </p>
      <p>
        Tuy nhiên, thông thường, bạn thường thấy Observer pattern được định
        nghĩa như thế này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_19.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p class="text-center">
        <strong>
          (Observer pattern xác định một phụ thuộc một-nhiều giữa các đối
          tượng để khi một đối tượng thay đổi trạng thái, tất cả các phụ thuộc
          của nó được thông báo và tự động cập nhật.)
        </strong>
      </p>

      <p>Hãy liên hệ định nghĩa này:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_20.jpg`),
          width: `55%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong>Subject</strong> và <strong>Observer</strong> xác định mối
        quan hệ một-nhiều.
      </p>

      <p>
        <strong>Observer</strong> phụ thuộc vào <strong>Subject</strong> sao
        cho khi <strong>Subject</strong> thay đổi trạng thái, 
        <strong>Observer</strong> sẽ được thông báo. Tùy thuộc vào cách thông
        báo, <strong>Observer</strong> cũng có thể được cập nhật với các giá
        trị mới.
      </p>
      <p>
        Khi bạn tìm hiểu, có một vài cách khác nhau để triển khai Observer
        pattern nhưng hầu hết xoay quanh một thiết kế lớp bao gồm các
        interface <strong>Subject</strong> và <strong>Observer</strong>.
      </p>

      <p>Hãy cùng xem nào…</p>`,
      },
    ],
  },
  {
    title: 'Định nghĩa Observer Pattern: sơ đồ lớp',
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_21.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Không có câu hỏi ngớ ngẩn',
    contents: [
      {
        div: `<p>
        <strong>Hỏi</strong>: Mẫu này có liên quan gì đến mối quan hệ
        một-nhiều không?
      </p>

      <p>
        <strong>Đáp</strong>: Với Observer pattern, Subject là một đối tượng
        chứa trạng thái và điều khiển trạng thái đó. Vì vậy, Đây là 
        <strong>MỘT</strong> Subject với các trạng thái (state). Mặt khác, các
        Observer sử dụng state dù chúng không sở hữu nó. Subject thông báo tới
        các Observer rằng state đã thay đổi. Vì vậy, có một mối quan hệ giữa 
        <strong>MỘT</strong> Subject với <strong>NHIỀU</strong> Observer.
      </p>

      <p>
        <strong>Hỏi</strong>: Sự phụ thuộc trong mẫu này như thế nào?
      </p>

      <p>
        <strong>Đáp</strong>: Vì Subject là chủ sở hữu duy nhất của dữ liệu
        đó, nên Observer phụ thuộc vào Subject để cập nhật khi dữ liệu thay
        đổi. Điều này dẫn đến một thiết kế OO sạch hơn là cho phép nhiều đối
        tượng kiểm soát cùng một dữ liệu.
      </p>`,
      },
    ],
  },
  {
    title: 'Observer Pattern: Sức mạnh của khớp nối lỏng lẻo (Loose Coupling)',
    contents: [
      {
        div: `<p>
        Khi hai đối tượng được ghép lỏng lẻo, chúng có thể tương tác, nhưng
        chúng biết rất ít về nhau. 
      </p>
      <p>
        Observer pattern cung cấp một thiết kế đối tượng trong đó subjects và
        observers được ghép lỏng lẻo với nhau.
      </p>

      <p>Tại sao ư?</p>

      <p>
        <strong>
          Điều duy nhất mà Subject biết về một người quan sát (observer) là nó
          implement một interface nhất định (interface Observer). 
        </strong>
        Nó không cần phải biết lớp con cụ thể của Observer, những gì nó làm,
        hoặc bất cứ điều gì khác về nó.
      </p>

      <p>
        <strong>Chúng tôi có thể thêm người quan sát (observer)</strong> 
        <strong>mới bất cứ lúc nào.</strong> Bởi vì điều duy nhất mà đối tượng
        Subject cần là một danh sách các object con implement interface
        Observer, chúng tôi có thể thêm Observer mới bất cứ khi nào chúng tôi
        muốn. Trên thực tế, chúng ta có thể thay thế bất kỳ Observer nào trong
        runtime thông qua setter và đối tượng sẽ tiếp tục chạy. Tương tự như
        vậy, chúng ta có thể loại bỏ các observer bất cứ lúc nào.
      </p>

      <p>
        <strong>
          Chúng tôi không bao giờ cần phải sửa đổi Subject khi thêm các loại
          observer mới. 
        </strong>
        Hãy nói rằng chúng ta có một lớp con Subject mới cần đến một Observer.
        Chúng tôi không cần phải thực hiện bất kỳ thay đổi nào đối với Subject
        để phù hợp với loại lớp mới, tất cả những gì chúng tôi phải làm là
        triển khai interface Observer trong lớp con Subject mới và đăng ký làm
        người quan sát (observer). Subject không quan tâm; nó sẽ gửi thông báo
        đến bất kỳ đối tượng nào implement interface Observer.
      </p>

      <p>
        <strong>
          Chúng ta có thể tái sử dụng các Subject hoặc Observer độc lập với
          nhau.
        </strong> 
        Nếu chúng ta có một mục đích sử dụng khác cho một Subject hoặc một
        Observer, chúng ta có thể dễ dàng sử dụng lại chúng vì cả hai được
        liên kết lỏng lẽo.
      </p>
      <p>
        <strong>
          Thay đổi Subject hoặc Observer sẽ không ảnh hưởng đến đối tượng còn
          lại.
        </strong>
      </p>

      <p>
        Do cả hai được ghép lỏng lẻo, chúng có thể tự do thay đổi, miễn là các
        đối tượng vẫn đáp ứng được trách nhiệm của chúng để implements
        interface Subject hoặc Observer.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_22.jpg`),
          width: `45%`,
          align: `center`,
        },
      },
      {
        div: `<p class="text-center">
        (Cố gắng tạo ra các thiết kế liên kết lỏng lẻo giữa các đối tượng
        tương tác)
      </p>

      <p>
        Các thiết kế được ghép lỏng lẻo cho phép chúng tôi xây dựng các hệ
        thống OO linh hoạt có thể xử lý sự thay đổi vì chúng giảm thiểu sự phụ
        thuộc lẫn nhau giữa các đối tượng.
      </p>`,
      },
    ],
  },
  {
    title: 'Hội thoại về Observer Pattern',
    contents: [
      {
        div: `<p>
        <strong>
          Quay lại dự án Weather Station, các đồng đội của bạn đã bắt đầu suy
          nghĩ về vấn đề …
        </strong>
      </p>

      <p>
        <strong>Mary</strong>: Chà, thật hữu ích khi chúng ta sử dụng Observer
        pattern.
      </p>

      <p>
        <strong>Sue</strong>: Phải … nhưng làm thế nào để chúng ta áp dụng nó?
      </p>

      <p>
        <strong>Mary</strong>: Hừm. Hãy cùng xem lại định nghĩa:
      </p>

      <p>
        Observer pattern xác định một phụ thuộc một-nhiều giữa các đối tượng
        để khi một đối tượng thay đổi trạng thái, tất cả các phụ thuộc của nó
        được thông báo và cập nhật tự động.
      </p>

      <p>
        <strong>Mary</strong>: Điều đó thực sự có ý nghĩa khi bạn nghĩ về nó.
        Lớp WeatherData của chúng tôi là “one” trong những màn hình hiển thị
        khác nhau sử dụng các phép đo thời tiết chính là “many”. (một-nhiều)
      </p>

      <p>
        <strong>Sue</strong>: Đúng vậy. Lớp WeatherData chắc chắn có trạng
        thái … đó là nhiệt độ, độ ẩm và áp suất khí quyển, và những thứ đó
        chắc chắn thay đổi.
      </p>

      <p>
        <strong>Mary</strong>: Yup, và khi các phép đo đó thay đổi, chúng ta
        phải thông báo cho tất cả các màn hình hiển thị để chúng có thể làm
        bất cứ điều gì chúng sẽ làm với các phép đo.
      </p>

      <p>
        <strong>Sue</strong>: Thật tuyệt, bây giờ tôi nghĩ rằng tôi thấy cách
        thức Observer pattern có thể được áp dụng cho vấn đề WeatherStation
        của chúng ta.
      </p>

      <p>
        <strong>Mary</strong>: Vẫn còn một vài điều cần xem xét mà tôi không
        chắc là tôi hiểu.
      </p>

      <p>
        <strong>Sue</strong>: Điều gì?
      </p>

      <p>
        <strong>Mary</strong>: Đối với one-many, làm thế nào để chúng ta có
        được các phép đo thời tiết cho các màn hình hiển thị?
      </p>

      <p>
        <strong>Sue</strong>: Chà, nhìn lại hình ảnh của Observer pattern, nếu
        chúng ta biến đối tượng WeatherData thành Subject và các màn hình hiển
        thị thành Observer, thì màn hình sẽ tự đăng ký với đối tượng
        WeatherData để lấy thông tin họ muốn, đúng chứ?
      </p>

      <p>
        <strong>Mary</strong>: Chính xác … và một khi Weather Station biết về
        một màn hình hiển thị, thì nó có thể gọi một phương thức để nói với nó
        về các phép đo.
      </p>

      <p>
        <strong>Sue</strong>: Chúng ta phải nhớ rằng mọi màn hình hiển thị có
        thể khác nhau … vì vậy tôi nghĩ đó là nơi có interface chung xuất
        hiện. Mặc dù mọi thành phần đều có một loại khác nhau, tất cả chúng
        nên implement cùng một giao diện để đối tượng WeatherData sẽ biết làm
        thế nào để gửi cho chúng các phép đo.
      </p>

      <p>
        <strong>Mary</strong>: Tôi hiểu ý của bạn. Vì vậy, mọi màn hình sẽ có
        một phương thức <strong>update()</strong> mà WeatherData sẽ gọi đến.
      </p>

      <p>
        <strong>Sue</strong>: Và <strong>update()</strong> được định nghĩa
        trong một interface chung mà tất cả các màn hình khác sẽ implement …
      </p>`,
      },
    ],
  },
  {
    title: 'Thiết kế Weather Station',
    contents: [
      {
        div: `So sánh sơ đồ dưới đây và cái của bạn`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_23.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Implementing the Weather Station',
    contents: [
      {
        div: `<p>
        Chúng tôi sẽ bắt đầu triển khai bằng sơ đồ lớp và theo sự dẫn dắt của
        Mary và Sue (từ một vài trang ở trên). Bạn sẽ thấy phần sau trong
        chương này rằng Java cung cấp một số hỗ trợ tích hợp cho Observer
        pattern, tuy nhiên, bây giờ, chúng tôi sẽ tự làm thủ công. Nhưng trong
        một số trường hợp, bạn có thể sử dung dụng hỗ trợ tích hợp sẵn của
        Java, nhưng trong nhiều trường hợp, tự xây dựng Observer riêng của bạn
        (và nó không quá khó) có thể linh hoạt hơn. Vì vậy, hãy để bắt đầu với
        các interface:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_24.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Sử dụng bộ não',
    contents: [
      {
        div: `<p>
        Mary và Sue nghĩ rằng việc truyền trực tiếp các phép đo cho các
        observer là phương pháp cập nhật trạng thái đơn giản nhất. Bạn có nghĩ
        rằng điều này là khôn ngoan? 
      </p>

      <p>
        Gợi ý: đây có phải là một phần code của ứng dụng có thể thay đổi trong
        tương lai không? Nếu nó sẽ thay đổi, liệu thay đổi đã được đóng gói
        tốt hay nó sẽ yêu cầu thay đổi trong nhiều phần khác của code? Bạn có
        thể nghĩ ra những cách khác để tiếp cận vấn đề chuyển trạng thái cập
        nhật cho observer không?
      </p>

      <p>
        Đừng lo, chúng tôi sẽ quay lại thiết kế này sau khi hoàn thành việc
        triển khai ban đầu.
      </p>`,
      },
    ],
  },
  {
    title: 'Cài đặt Subject interface trong WeatherData',
    contents: [
      {
        div: `<p>
        Hãy nhớ nỗ lực đầu tiên của chúng tôi trong việc triển khai lớp 
        <strong>WeatherData</strong> ở đầu chương? Bạn có thể muốn làm mới trí
        nhớ của bạn. Bây giờ, thời gian quay trở lại và làm mọi thứ với
        Observer pattern…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_25.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Bây giờ, hãy xây dựng các màn hình hiển thị',
    contents: [
      {
        div: `<p>
        Bây giờ, chúng tôi đã mở rộng lớp WeatherData, đã đến lúc xây dựng các
        màn hình hiển thị. Weather-O-Rama đã đưa ra ba màn hình hiển thị điều
        kiện thời tiết hiện tại, màn hình thống kê và màn hình dự báo. Hãy
        cùng xem qua màn hình hiển thị điều kiện hiện tại; một khi bạn cảm
        thấy tốt về màn hình này, hãy xem tiếp các màn hình thống kê và dự báo
        hiển thị trong thư mục code đầu tiên. Bạn có thể thấy chúng tương tự
        nhau.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_26.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Không có câu hỏi ngớ ngẩn',
    contents: [
      {
        div: `<p>
        <strong>Hỏi</strong>: <strong>Update()</strong> có phải là nơi tốt
        nhất để gọi <strong>display()</strong> không?
      </p>

      <p>
        <strong>Trả lời</strong>: Trong ví dụ đơn giản này, chúng ta nhìn với
        góc độ hàm <strong>display()</strong> được gọi khi các giá trị thay
        đổi. Tuy nhiên, bạn đã đúng, có nhiều cách tốt hơn để thiết kế cách
        hiển thị dữ liệu. Chúng ta sẽ thấy điều này khi chúng ta đến mẫu 
        <strong>model-view-controller</strong>.
      </p>

      <p>
        <strong>Hỏi</strong>: Tại sao bạn lưu trữ một tham chiếu đến Subject (
        <strong>
          <em>private Subject weatherData</em>
        </strong>
        )? Bạn đâu có sử dụng nó sau khi khởi tạo?
      </p>

      <p>
        <strong>Trả lời:</strong> Đúng, nhưng trong tương lai chúng tôi có thể
        muốn hủy đăng ký với tư cách là người quan sát (observer) và sẽ rất
        hữu ích khi đã có tham chiếu tới subject này.
      </p>`,
      },
    ],
  },
  {
    title: 'Sức mạnh của Weather Station',
    contents: [
      {
        div: `<p>
        <strong>1. Trước tiên, hãy tạo ra một thử nghiệm</strong>
      </p>

      <p>
        Weather Station đã sẵn sàng, tất cả những gì chúng ta cần là một số
        đoạn code để gắn mọi thứ lại với nhau. Đây là nỗ lực đầu tiên của
        chúng tôi. Chúng tôi sẽ quay lại sau trong cuốn sách và đảm bảo tất cả
        các thành phần có thể dễ dàng cài đặt thông qua 
        <em>configuration file</em>. Bây giờ ở đây, cách tất cả hoạt động:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_27.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>2. Run và để Observer thực hiện phép thuật của nó</strong></p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_28.jpg`),
          width: `50%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Gọt bút chì của bạn',
    contents: [
      {
        div: `<p>
        Johnny Hurricane, Giám đốc điều hành Weather-O-Rama vừa gọi, họ không
        thể giao hàng nếu không có yếu tố hiển thị Chỉ số Nhiệt (Heat Index).
        Đây là thông tin chi tiết:
      </p>

      <p>
        Chỉ số nhiệt là một chỉ số kết hợp nhiệt độ và độ ẩm để xác định nhiệt
        độ rõ ràng (độ nóng thực sự cảm thấy như thế nào). Để tính chỉ số
        nhiệt, bạn lấy nhiệt độ T và độ ẩm tương đối RH sau đó sử dụng công
        thức này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_29.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<p>Vì vậy, hãy gõ công thức đó vào!</p>

        <p>
          Đùa thôi. Đừng lo lắng, bạn sẽ không phải nhập công thức đó vào; chỉ
          cần tạo file HeatIndexDisplay.java của riêng bạn và sao chép công thức
          từ Heatindex.txt (lấy từ 
          <a
            href="http://headfirstlabs.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="headfirstlabs.com (mở trong tab mới)"
          >
            headfirstlabs.com
          </a>
          ) vào đó.
        </p>

        <p>
          Làm thế nào nó hoạt động? Bạn phải tham khảo 
          <em>
            <strong>Head First Meteorology</strong>
          </em> 
          hoặc thử hỏi ai đó tại National Weather Service (hoặc thử tìm kiếm
          Google).
        </p>

        <p>Khi bạn hoàn thành, đầu ra của bạn sẽ trông như thế này:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_30.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title:
      'Buổi nói chuyện tối nay: Subject và Observer nói về cách để có được thông tin trạng thái cho Observer',
    contents: [
      {
        div: ` <p>
        <strong>Subject</strong>: Tôi rất vui vì cuối cùng chúng tôi cũng có
        cơ hội trò chuyện.
      </p>

      <p>
        <strong>Observer</strong>: Thật sao? Tôi nghĩ rằng bạn đã không quan
        tâm nhiều đến chúng tôi.
      </p>

      <p>
        <strong>Subject</strong>: À, tôi làm công việc của mình, tôi không
        quan tâm ư? Tôi luôn nói cho bạn biết những gì đang diễn ra … Chỉ vì
        tôi không thực sự biết bạn là ai không có nghĩa là tôi không quan tâm.
        Và bên cạnh đó, tôi biết điều quan trọng nhất về bạn, bạn implement
        interface Observer.
      </p>

      <p>
        <strong>Observer</strong>: Vâng vâng, nhưng đó chỉ là một phần nhỏ của
        con người tôi. Dù sao, tôi biết nhiều về bạn hơn …
      </p>

      <p>
        <strong>Subject</strong>: Ồ vâng, như thế nào?
      </p>

      <p>
        <strong>Observer</strong>: Chà, bạn có thể luôn chuyển trạng thái của
        mình cho chúng tôi để chúng tôi có thể thấy những gì diễn ra bên trong
        bạn. Đôi lúc hơi khó chịu …
      </p>

      <p>
        <strong>Subject</strong>: Vâng tôi xin lỗi. Tôi phải gửi trạng thái
        của mình cùng với thông báo của mình để tất cả những Observer con
        “lười biếng” của bạn sẽ biết chuyện gì đã xảy ra!
      </p>

      <p>
        <strong>Observer</strong>: Ok, dừng lại một chút ở đây; Đầu tiên,
        chúng tôi không lười biếng, chúng tôi có những thứ khác để thực hiện
        giữa các thông báo rất quan trọng của bạn Mr. Subject, và thứ hai, tại
        sao bạn không để chúng tôi truy cập tới bạn trong trạng thái chúng tôi
        muốn thay vì bạn phải “thông báo” nó ra cho tất cả mọi người?
      </p>

      <p>
        <strong>Subject</strong>: Chà… tôi đoán đó là công việc của tôi. Như
        bạn nói, khi đó tôi phải mở rộng bản thân hơn nữa để cho tất cả các
        observer đến và có được trạng thái mà họ cần. Điều đó có thể nguy
        hiểm. Tôi không thể để cho bạn truy cập vào và “rình mò” mọi thứ tôi
        đang có.
      </p>

      <p>
        <strong>Observer</strong>: Tại sao không viết một vài public getter
        methods sẽ cho phép chúng tôi lấy ra trạng thái chúng tôi cần?
      </p>

      <p>
        <strong>Subject</strong>: Có, tôi có thể cho phép bạn push (lấy) trạng
        thái của tôi. Nhưng điều đó sẽ không thuận tiện cho bạn? Nếu bạn phải
        đến với tôi mỗi khi bạn muốn một cái gì đó, bạn có thể phải thực hiện
        nhiều cuộc gọi phương thức để có được tất cả trạng thái bạn muốn. Đó
        là lý do tại sao tôi thích pull (gửi) tới bạn hơn … sau đó bạn có tất
        cả mọi thứ bạn cần trong một thông báo.
      </p>

      <p>
        <strong>Observer</strong>: Đừng có quá khích! Có rất nhiều instance
        khác nhau của chúng tôi, ở đó không có cách nào bạn có thể lường trước
        mọi thứ chúng tôi cần. Chỉ cần để chúng tôi tuy cập tới bạn để có được
        trạng thái chúng tôi cần. Bằng cách đó, nếu một số trong chúng tôi chỉ
        cần một chút trạng thái, chúng tôi vẫn sẽ buộc phải có được tất cả. Nó
        cũng làm cho mọi thứ dễ dàng hơn để sửa đổi sau này. Ví dụ, giả sử bạn
        mở rộng bản thân và thêm một số trạng thái, nếu bạn sử dụng pull
        (gửi), bạn không phải đi xung quanh và thay đổi các cuộc gọi cập nhật
        trên mỗi Observer, bạn chỉ cần thay đổi bản thân để cho phép nhiều
        phương thức getter hơn truy cập trạng thái của chúng tôi.
      </p>

      <p>
        <strong>Subject</strong>: Vâng, tôi có thể thấy những lợi ích để làm
        cả hai cách. Tôi đã nhận thấy rằng có một Mẫu quan sát Java tích hợp
        sẵn cho phép bạn sử dụng hoặc Pull hoặc Push.
      </p>

      <p>
        <strong>Observer</strong>: Ồ thật sao? Tôi nghĩ rằng chúng ta sẽ xem
        xét điều đó tiếp theo ….
      </p>

      <p>
        <strong>Subject</strong>: Tuyệt vời … có lẽ tôi sẽ thấy một ví dụ hay
        về việc pull (kéo) và thay đổi suy nghĩ của mình.
      </p>

      <p>
        <strong>Observer</strong>: Cái gì, chúng ta đồng ý về một cái gì đó?
        Tôi đoán luôn có hy vọng.
      </p>`,
      },
    ],
  },
  {
    title: 'Sử dụng Observer Pattern có sẵn của Java',
    contents: [
      {
        div: `<p>
        Cho đến bây giờ, chúng tôi đã dùng code riêng của mình cho Mẫu
        Observer, nhưng Java đã hỗ trợ tích hợp trong một số API của nó. Tổng
        quát nhất là interface <strong>Observer</strong> và lớp 
        <strong>Observable</strong> trong gói 
        <em>
          <strong>java.util</strong>
        </em>
        . Chúng khá giống với interface Subject và Observer của chúng tôi,
        nhưng cung cấp cho bạn rất nhiều chức năng vượt trội. Bạn cũng có thể
        thực hiện kiểu cập nhật đẩy (Push) hoặc kéo (Pull) cho observer của
        mình, như bạn sẽ thấy. Để có được level cao trong 
        <strong>
          <em>java.util.Observer</em>
        </strong> 
        và 
        <em>
          <strong>java.util.Observable</strong>
        </em>
        , hãy xem thiết kế OO được làm lại này cho WeatherStation:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_31.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
    ],
  },
  {
    title: 'Cách thức Observer Pattern của Java hoạt động',
    contents: [
      {
        div: `<p>
        <strong>Observer Pattern</strong> của Java hoạt động hơi khác so với
        triển khai mà chúng tôi đã sử dụng trên Weather Station. Sự khác biệt
        rõ ràng nhất là WeatherData (Subject của chúng tôi) bây giờ extends 
        <strong>Observable</strong> và kế thừa các phương thức thêm, xóa và
        thông báo cho <strong>Observer</strong>. Đây là cách chúng tôi sử dụng
        phiên bản Java:
      </p>`,
      },
      {
        p: `<h6><b>ĐỂ MỘT OBJECT TRỞ THÀNH OBSERVER …</b></h6>`,
      },
      {
        div: `<p>
        Như thường lệ, triển khai interface Observer (lần này là interface 
        <em>
          <strong>java.util.Observer</strong>
        </em>
        ) và gọi <strong>addObserver()</strong> trên bất kỳ đối tượng observer
        nào. Tương tự như vậy, để loại bỏ một observer, chỉ cần gọi 
        <strong>deleteObserver()</strong>.
      </p>`,
      },
      {
        p: `<h6><b>ĐỂ OBSERVABLE CÓ THỂ GỬI THÔNG BÁO …</b></h6>`,
      },
      {
        div: `<p>
        Trước hết bạn trở thành Observable bằng cách extends “siêu lớp” 
        <em>
          <strong>java.util.Observable</strong>
        </em>
        . Đó là một quá trình gồm hai bước:
      </p>
      <ol>
          <li>
            Trước tiên, bạn phải gọi phương thức <strong>setChanged()</strong> 
            để biểu thị rằng trạng thái đã thay đổi trong đối tượng của bạn.
          </li>
          <li>
            Sau đó, gọi một trong hai phương thức 
            <strong>notifyObservers()</strong>:<br /> 
            <strong>notifyObservers()</strong> hoặc 
            <strong>notifyObservers(Object arg)</strong> (xem hình dưới) 
          </li>
        </ol>`,
      },
      {
        p: `<h6><b>ĐỂ OBSERVER NHẬN THÔNG BÁO …</b></h6>`,
      },
      {
        div: `<p>
          Nó thực hiện phương thức update, như trước đây, nhưng phương pháp hơi
          khác một chút:
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_32.jpg`),
          width: `60%`,
          align: `left`,
        },
      },
      {
        div: ` <p>
        Nếu bạn muốn “đẩy (push)” dữ liệu tới các observer, bạn có thể truyền
        dữ liệu dưới dạng một data object cho phương thức 
        <strong>notifyObserver(arg)</strong>. Nếu không, thì Observer phải tự
        “lấy (pull)” dữ liệu dữ liệu mà nó muốn từ đối tượng Observable được
        truyền cho nó. Làm sao ư? Để tôi lại làm lại Weather Station và bạn sẽ
        thấy.
      </p>

      <p>
        Phương thức <strong>setChanged()</strong> được sử dụng để biểu thị
        rằng trạng thái đã thay đổi và khi đó 
        <strong>notifyObservers()</strong>, khi được gọi, nên cập nhật trình
        observers của nó. Nếu <strong>notifyObservers()</strong> được gọi mà
        không gọi <strong>setChanged()</strong> trước, người quan sát
        (observer) sẽ <strong>KHÔNG</strong> được thông báo. Hãy cùng nhìn vào
        “behind the scenes” của Observable để xem cách thức hoạt động của nó:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_33.jpg`),
          width: `60%`,
          align: `left`,
        },
      },
      {
        div: `<p>
        Tại sao điều này là cần thiết? Phương thức 
        <strong>setChanged()</strong> giúp bạn linh hoạt hơn trong cách bạn
        cập nhật observer bằng cách cho phép bạn tối ưu hóa các thông báo. Ví
        dụ, trong trạm thời tiết của chúng tôi, hãy tưởng tượng nếu các phép
        đo của chúng tôi nhạy cảm đến mức chỉ số nhiệt độ dao động liên tục
        trong một vài phần mười của một độ. Điều đó có thể khiến đối tượng 
        <strong>WeatherData </strong>liên tục gửi thông báo. Thay vào đó,
        chúng tôi có thể chỉ muốn gửi thông báo nếu nhiệt độ thay đổi hơn nửa
        độ và chúng tôi chỉ có thể gọi <strong>setChanged()</strong> sau khi
        điều đó xảy ra.
      </p>

      <p>
        Bạn có thể không sử dụng chức năng này thường xuyên, nhưng nó có ở đó
        nếu bạn cần. Trong cả hai trường hợp, bạn cần gọi 
        <strong>setChanged()</strong> để thông báo hoạt động. Nếu chức năng
        này là một cái gì đó hữu ích cho bạn, bạn cũng có thể muốn sử dụng
        phương thức <strong>clearChanged()</strong>, đặt trạng thái đã thay
        đổi thành <em>false </em>và phương thức <strong>hasChanged()</strong>,
        cho bạn biết trạng thái hiện tại của cờ <strong>changed</strong>.
      </p>`,
      },
    ],
  },
  {
    title: 'Làm lại Weather Station với hỗ trợ của Java Observer Pattern',
    contents: [
      {
        p: `<h6><b>TRƯỚC TIÊN, HÃY ĐỂ LÀM LẠI WEATHERDATA SỬ DỤNG JAVA.UTIL.OBSERVABLE</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_34.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        p: `<br /><h6><b>BÂY GIỜ, HÃY HÃY LÀM LẠI CURRENTCONDITIONSDISPLAY</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_35.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Bài tập cho bạn',
    contents: [
      {
        div: `<p>
        Lớp <strong>ForecastDisplay</strong> được xáo trộn. Bạn có thể xây
        dựng lại các đoạn code để làm cho nó hoạt động không? Một số đoạn code
        bị thiếu, vì vậy hãy thoải mái thêm trong&nbsp; những thứ bạn cần!
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_36.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Chạy lại code mới',
    contents: [
      {
        p: `<h6><b>ĐỂ CHẮC CHẮN, HÃY CHẠY CODE MỚI…</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_37.jpg`),
          width: `50%`,
          align: `left`,
        },
      },
      {
        p: `<h6><b>HMM, BẠN CÓ NHẬN THẤY ĐIỀU GÌ KHÁC KHÔNG? NHÌN LẠI NÀO…</b></h6>`,
      },
      {
        div: `<p>
        Bạn sẽ thấy tất cả các tính toán giống nhau, nhưng bí ẩn quá, thứ tự
        của đầu ra văn bản là khác nhau. Tại sao điều này có thể xảy ra? Hãy
        suy nghĩ một phút trước khi đọc tiếp…
      </p>`,
      },
    ],
  },
  {
    title: 'Không bao giờ phụ thuộc vào thứ tự các thông báo của Observer',
    contents: [
      {
        div: `<p>
        <strong>Java.util.Observable</strong> đã triển khai phương thức 
        <strong>notifyObservers()</strong> sao cho <strong>Observer </strong>
        được thông báo theo một thứ tự khác với cách triển khai của chúng ta.
        Ai có quyền? Không ai; chúng tôi chỉ chọn thực hiện mọi thứ theo những
        cách khác nhau.
      </p>

      <p>
        Tuy nhiên, điều sẽ không chính xác nếu chúng tôi viết code của mình
        phụ thuộc vào một thứ tự thông báo cụ thể. Tại sao? Bởi vì nếu bạn cần
        thay đổi triển khai <strong>Observable/Observer</strong>, thứ tự thông
        báo có thể thay đổi và ứng dụng của bạn sẽ tạo ra kết quả không chính
        xác. Bây giờ, chắc chắn đó không phải là thứ mà chúng tôi coi là 
        <strong>
          <em>kết hợp lỏng lẻo</em>
        </strong> 
        <em>
          <strong>(l</strong>
        </em>
        <strong>
          <em>oosely coupled</em>
        </strong>
        <em>
          <strong>)</strong>
        </em>
        .
      </p>`,
      },
    ],
  },
  {
    title: 'Mặt tối của java.util.Observable',
    contents: [
      {
        div: ` <p>
        Vâng, một sự tìm hiểu tốt. Như bạn đã nhận thấy, 
        <strong>Observable</strong> là một lớp, không phải là một interface,
        và tệ hơn nữa, nó thậm chí không implements một giao diện. Thật không
        may, việc triển khai 
        <strong>
          <em>java.util.Observable</em>
        </strong> 
        có một số vấn đề làm hạn chế tính hữu dụng và tái sử dụng của nó. Điều
        đó không thể nói rằng nó không tiện ích, nhưng có một số vấn đề lớn để
        đề phòng.
      </p>`,
      },
      {
        p: `<h6><b>OBSERVABLE LÀ MỘT CLASS </b></h6>`,
      },
      {
        div: `<p>
        Bạn đã biết từ các nguyên tắc của chúng tôi, đây là một ý tưởng tồi,
        nhưng nó thực sự gây hại gì?
      </p>

      <p>
        Đầu tiên, vì <strong>Observable</strong> là một lớp, bạn phải phân lớp
        nó. Điều đó có nghĩa là bạn có thể thêm vào hành vi có thể quan sát
        được vào một lớp hiện có đã mở rộng một siêu lớp khác. Điều này giới
        hạn tiềm năng tái sử dụng của nó (và không phải là lý do tại sao chúng
        ta đang sử dụng các mẫu ở đầu chương?).
      </p>

      <p>
        Thứ hai, vì không có Observable interface, bạn thậm chí không thể tạo
        ra implementation hoạt động tốt với Java’s built-in Observer API. Bạn
        cũng không có tùy chọn hoán đổi triển khai java.util cho người khác
        (giả sử, multi-threaded implementation).
      </p>`,
      },
      {
        p: `<h6><b>OBSERVABLE PROTECTED NHỮNG PHƯƠNG THỨC QUAN TRỌNG</b></h6>`,
      },
      {
        div: `<p>
        Nếu bạn nhìn vào API Observable, phương thức 
        <strong>setChanged()</strong> là protected. Vậy thì sao? Chà, điều này
        có nghĩa là bạn có thể gọi <strong>setChanged()</strong> trừ khi bạn
        là subclass của Observable. Điều này có nghĩa là bạn thậm chí không
        thể tạo một instance của lớp Observable và kết hợp nó với các object
        khác của riêng bạn, bạn phải trở thành subclass. Thiết kế vi phạm
        nguyên tắc thiết kế thứ hai ở đây “favor composition over inheritance”
        (ủng hộ kết hợp hơn sự kế thừa).
      </p>`,
      },
      {
        p: `<h6><b>CHÚNG TA PHẢI LÀM SAO?</b></h6>`,
      },
      {
        div: `<p>
        Observable có thể phục vụ nhu cầu của bạn nếu bạn có thể mở rộng 
        <em>
          <strong>java.util.Observable</strong>
        </em>
        . Mặt khác, bạn có thể cần phải triển khai implement của riêng bạn như
        chúng tôi đã làm ở đầu chương. Trong cả hai trường hợp, bạn đều biết
        rõ Observer Pattern và bạn có thể ở vị trí tốt để làm việc với bất kỳ
        API nào sử dụng mẫu đó.
      </p>`,
      },
    ],
  },
  {
    title: 'Những nơi khác bạn sẽ tìm thấy Observer Pattern trong JDK',
    contents: [
      {
        div: `<p>
        Việc triển khai 
        <em>
          <strong>java.util</strong>
        </em> 
        của Observer/Observable không phải là nơi duy nhất bạn sẽ tìm thấy
        Observer Pattern trong JDK; cả JavaBeans và Swing cũng cung cấp các
        triển khai mẫu riêng của chúng. Tại thời điểm này, bạn hiểu đủ về
        Observer để tự mình khám phá các API này; tuy nhiên, hãy làm một ví dụ
        Swing đơn giản, nhanh chóng chỉ để giải trí.
      </p>`,
      },
      {
        p: `<h6><b>MỘT CHÚT NỀN TẢNG…</b></h6>`,
      },
      {
        div: `<p>
        Hãy cùng xem một phần đơn giản của Swing API, JButton. Nếu bạn nhìn
        vào sâu trong triển khai của lớp superclass JButton, bạn sẽ thấy rằng
        nó có rất nhiều phương thức add/remove. Các phương thức này cho phép
        bạn thêm và xóa các observer, hoặc như chúng được gọi trong Swing,
        listeners, để lắng nghe các loại sự kiện khác nhau xảy ra trên thành
        phần Swing. Chẳng hạn, một ActionListener cho phép bạn nghe bất kỳ
        loại hành động nào có thể xảy ra trên một button, như Button click.
        Bạn sẽ tìm thấy nhiều loại listeners khác nhau trên Swing API.
      </p>`,
      },
      {
        p: `<h6><b>MỘT ỨNG DỤNG NHỎ LIFE-CHANGING</b></h6>`,
      },
      {
        div: `<p>
        Được rồi, ứng dụng của chúng tôi khá đơn giản. Bạn có một Button
        “Should I do it?”. Và khi bạn nhấp vào Button đó, listeners
        (observers) có thể trả lời câu hỏi theo bất kỳ cách nào chúng muốn.
        Chúng tôi đã triển khai hai listeners như vậy, được gọi là 
        <strong>AngelListener </strong>và <strong>DevilListener</strong>. Đây
        là cách ứng dụng phản hồi:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_38.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Và code…',
    contents: [
      {
        div: `<p>
        Ứng dụng life-changing này đòi hỏi rất ít code. Tất cả những gì chúng
        ta cần làm là tạo một đối tượng JButton, thêm nó vào JFrame và thiết
        lập listener của chúng ta. Chúng tôi sẽ sử dụng các lớp bên trong cho
        listeners, đây là một kỹ thuật phổ biến trong lập trình Swing. Nếu bạn
        không biết, bạn có thể muốn xem lại chương “Getting GUI” – một chương
        trong cuốn <strong>Head First Java</strong>.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-2_39.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
    ],
  },
  {
    title: 'Tóm tắt',
    contents: [
      {
        div: `<ul>
        <li>
          <strong>Observer Pattern</strong> xác định mối quan hệ một-nhiều
          giữa các đối tượng.
        </li>
        <li>
          <strong>Subjects</strong>, hoặc tên gọi khác như chúng ta cũng biết, 
          <strong>Observable</strong>, cập nhật những 
          <strong>Observer</strong> bằng interface&nbsp;chung.
        </li>
        <li>
          <strong>Observer Pattern</strong> đạt được “khớp nối lỏng lẽo” trong
          đó Observable không biết gì về người quan sát (observer) , ngoài
          việc biết chúng implement interface Observer.
        </li>
        <li>
          Bạn có thể push (đẩy) hoặc kéo (pull) dữ liệu từ 
          <strong>Observable</strong> được khi sử dụng mẫu 
          <strong>Observer Pattern</strong> (kéo(pull) được coi là chính xác
          hơn).
        </li>
        <li>
          Không phụ thuộc vào một thứ tự thông báo cụ thể cho những Observer
          của bạn.
        </li>
        <li>
          Java có một số triển khai Observer Pattern, chứa bên trong
          java.util.Observable.
        </li>
        <li>Xem qua các vấn đề khi triển khai java.util.Observable.</li>
        <li>Đừng sợ tạo ra Observable của riêng bạn nếu cần.</li>
        <li>
          Swing sử dụng rất nhiều <strong>Observer Pattern</strong>, cũng như
          nhiều GUI framework.
        </li>
        <li>
          Bạn cũng tìm thấy mẫu này ở nhiều nơi khác, bao gồm JavaBeans và
          RMI.
        </li>
      </ul>`,
      },
    ],
  },
  {
    title: 'Tham khảo',
    contents: [
      {
        div: `<p>
        Đây là link đính kèm bản gốc của quyển sách:&nbsp;
        <a
          rel="noreferrer noopener"
          href="https://drive.google.com/file/d/14lMY_ot5FHgX7aOR9YiVjR2iD1DdJ6hZ/view?usp=sharing"
          target="_blank"
        >
          Head First Design Patterns
        </a>
        .<br />
        Đây là link đính kèm sourcecode của sách:&nbsp;
        <a
          rel="noreferrer noopener"
          href="https://resources.oreilly.com/examples/9780596007126"
          target="_blank"
        >
          Tải SourceCode
        </a>
        . 
      </p>`,
      },
      {
        p: `Nguồn bài dịch: <b>NQT-K4DNC</b>
        <br />
        Chỉnh sửa bởi: <b>Tôi học Design pattern</b>`,
      },
    ],
  },
];
