import IContent from 'utils/interface';

export const chapter11_2: IContent[] = [
  {
    title: `Sẵn sàng cho Virtual Proxy`,
    no: false,
    contents: [
      {
        div: `<p>
        Được rồi, cho đến giờ bạn đã biết định nghĩa về
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/14"
          >Proxy Pattern</a
        >
        là gì ở
        <a href="/chuong-11-proxy-pattern-kiem-soat-truy-cap-doi-tuong-p1.html"
          >phần 1</a
        >, và bạn đã xem qua một ví dụ cụ thể: <strong>Remote Proxy</strong>. Bây giờ
        chúng tôi sẽ xem xét một loại proxy khác, <strong>Virtual Proxy</strong>. Khi
        bạn phát hiện ra, Mẫu Proxy có thể ở nhiều dạng, tuy nhiên tất cả các dạng đều
        tuân theo thiết kế proxy chung. Tại sao lại có nhiều dạng? Bởi vì mẫu proxy có
        thể được áp dụng cho rất nhiều trường hợp sử dụng khác nhau. Hãy kiểm tra
        <strong>Virtual Proxy</strong> và so sánh với <strong>Remote Proxy</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_1.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_2.png`),
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
    title: `Hiển thị CD covers`,
    contents: [
      {
        div: `<p>
        Giả sử bạn muốn viết một ứng dụng hiển thị <strong>CD covers</strong> danh
        sách đĩa CD yêu thích của bạn. Bạn có thể tạo một menu các
        <strong>CD title</strong> và sau đó lấy hình ảnh từ một dịch vụ trực tuyến như
        Amazon.com. Nếu bạn đang sử dụng Java Swing, bạn có thể tạo Icon và yêu cầu nó
        tải hình ảnh từ internet. Vấn đề duy nhất là, tùy thuộc vào tốc độ mạng mạng
        và băng thông kết nối của bạn, việc truy xuất <strong>CD covers</strong> có
        thể mất một chút thời gian, vì vậy ứng dụng của bạn sẽ hiển thị một cái gì đó
        (như “message”) trong khi bạn chờ tải hình ảnh. Chúng tôi cũng không muốn treo
        toàn bộ ứng dụng trong khi nó đang chờ tải hình ảnh. Khi hình ảnh được tải,
        “mesage” sẽ biến mất và bạn sẽ thấy hình ảnh.
      </p>
      
      <p>
        Một cách dễ dàng để đạt được điều này là thông qua một virtual proxy. Proxy ảo
        có thể thay thế Icon, quản lý background loading và trước khi hình ảnh được
        tải về từ mạng, chúng ta sẽ hiển thị “<em
          >Loading CD cover, please wait&#8230;</em
        >”. Khi hình ảnh được tải, proxy ủy thác hiển thị cho icon.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_3.png`),
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
    title: `Thiết kế CD cover Virtual Proxy `,
    contents: [
      {
        div: `<p>Trước khi viết code cho CD Cover Viewer, hãy xem sơ đồ lớp của nó.</p>

        <p>
          Bạn sẽ thấy nó trông giống như sơ đồ lớp <strong>Remote Proxy</strong> của
          chúng tôi, nhưng ở đây proxy được sử dụng để ẩn một đối tượng “đắt đỏ” (tốn
          thời gian) để tạo (vì chúng tôi cần truy xuất dữ liệu Icon thông qua internet)
          trái ngược với đối tượng thực sự đang ở một nơi khác trên mạng.
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_4.png`),
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
    title: `ImageProxy sẽ hoạt động như thế nào`,
    contents: [
      {
        div: `<p>
        1. Đầu tiên <strong>ImageProxy </strong>tạo <strong>ImageIcon </strong>và bắt
        đầu tải nó từ một URL mạng.
      </p>
      
      <p>
        2. Trong khi các byte của hình ảnh đang được truy xuất,
        <strong>ImageProxy </strong>hiển thị “<em
          >Loading CD cover, please wait&#8230;”</em
        >
      </p>
      
      <p>
        3. Khi hình ảnh được tải đầy đủ, <strong>ImageProxy </strong>ủy quyền tất cả
        các lệnh gọi phương thức đến <strong>ImageIcon</strong>, bao gồm
        <strong>paintIcon()</strong>, <strong>getWidth()</strong> và
        <strong>getHeight()</strong>.
      </p>
      
      <p>
        4. Nếu người dùng yêu cầu một hình ảnh mới, chúng tôi sẽ tạo một proxy mới và
        bắt đầu lại quá trình.
      </p>`,
      },
    ],
  },
  {
    title: `Viết code Image Proxy`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_5.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_6.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_7.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_8.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p><strong>Đáp án:</strong></p>

        <p>
          Sử dụng
          <strong
            ><a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/13"
              >State Pattern</a
            ></strong
          >: implement hai trạng thái, <strong>ImageLoaded </strong>và
          <strong>ImageNotLoaded</strong>. Sau đó đặt code từ câu lệnh if vào các trạng
          thái tương ứng của chúng. Bắt đầu ở trạng thái
          <strong>ImageNotLoaded </strong>và sau đó chuyển sang trạng thái
          <strong>ImageLoaded </strong>khi ImageIcon đã được truy xuất.
        </p>
        `,
      },
    ],
  },
  {
    title: `Testing CD Cover Viewer`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_9.png`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Được rồi, đã đến lúc thử nghiệm Virtual proxy mới &#8220;lạ mắt&#8221; này.
        Đằng sau nó, chúng tôi đã tạo ra một <strong>ImageProxyTestDrive </strong>mới,
        thiết lập cửa sổ, tạo frame, cài đặt các menu và tạo proxy của chúng tôi.
        Chúng tôi không có thông tin chi tiết về code này ở đây, nhưng bạn luôn có thể
        lấy source code và xem hoặc kiểm tra nó ở cuối chương nơi chúng tôi liệt kê
        tất cả&nbsp; source code cho <strong>Virtual Proxy</strong>.
      </p>
      
      <p>Ở đây, một góc nhìn của test drive code:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_10.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>Bây giờ hãy chạy test drive:&nbsp;&nbsp;</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_11.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<p class="text-center"><small>Đầu tiên hiển thị message, sau thi tải ảnh xong sẽ hiện ảnh lên</small></p><br />`,
      },
    ],
  },
  {
    title: `Những điều bạn có thể thử`,
    contents: [
      {
        div: `<p>
        1. Sử dụng menu để tải CD cover khác nhau; xem màn hình proxy hiển thị
        “loading”&nbsp;cho đến khi hình ảnh tải xong.
      </p>
      
      <p>
        2. Thay đổi kích thước cửa sổ khi message “loading” được hiển thị. Lưu ý rằng
        proxy đang xử lý tải mà không treo cửa sổ Swing.
      </p>
      
      <p>
        3. Thêm đĩa CD yêu thích của riêng bạn vào
        <strong>ImageProxyTestDrive</strong>.
      </p>
      `,
      },
    ],
  },
  {
    title: `Chúng ta đã làm những gì?`,
    contents: [
      {
        div: `<p>
        1. Chúng tôi đã tạo một <strong>ImageProxy </strong>cho màn hình. Phương thức
        <strong>paintIcon()</strong> được gọi và ImageProxy tạo một luồng (thread) để
        truy xuất hình ảnh và tạo ImageIcon.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_12.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        2. Tại một thời điểm nào đó, hình ảnh được trả về và
        <strong>ImageIcon </strong>được khởi tạo hoàn toàn.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_13.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        3. Sau khi <strong>ImageIcon </strong>được tạo, lần sau khi gọi
        <strong>paintIcon()</strong>, proxy sẽ ủy quyền cho
        <strong>ImageIcon</strong>.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_14.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi:</strong> Đối với tôi, <strong>Remote Proxy</strong> và
        <strong>Virtual Proxy</strong> có vẻ khác nhau; chúng có thực sự là MỘT mẫu
        không?<br /><strong>Đáp:</strong> Bạn sẽ tìm thấy rất nhiều biến thể của
        <strong>Mẫu proxy</strong> trong thế giới thực; điểm chung của chúng là chúng
        chặn một lệnh gọi phương thức mà client đang thực hiện trên đối tượng thực
        sự.<br />Mức độ chuyển hướng này cho phép chúng tôi thực hiện nhiều việc, bao
        gồm gửi yêu cầu đến một đối tượng từ xa, cung cấp đại diện cho một đối tượng
        &#8220;đắt đỏ&#8221; khi nó được tạo ra hoặc, như bạn đã thấy, cung cấp một số
        mức bảo vệ có thể xác định client nào nên gọi phương thức nào. Đó chỉ là sự
        khởi đầu; <strong>Mẫu Proxy</strong> chung có thể được áp dụng theo nhiều cách
        khác nhau và chúng tôi sẽ đề cập đến một số cách khác ở cuối chương.
      </p>
      
      <p>
        <strong>Hỏi:</strong> ImageProxy đối với tôi có vẻ giống như một
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
          >Decorator</a
        >. Ý tôi là, về cơ bản chúng ta đang bao bọc một đối tượng này bằng một đối
        tượng khác và sau đó ủy quyền các lệnh gọi cho <strong>ImageIcon</strong>. Tôi
        đang bỏ lỡ điều gì?<br /><strong>Đáp:</strong> Đôi khi Proxy và Decorator
        trông rất giống nhau, nhưng mục đích của chúng khác nhau: một decorator thêm
        hành vi vào một lớp, trong khi proxy kiểm soát quyền truy cập vào nó.
        <br />Bạn có thể tự hỏi, &#8220;Loading message có thêm hành vi mới vào
        không?&#8221; Theo một số cách thì nó là có; tuy nhiên, quan trọng hơn,
        <strong>ImageProxy </strong>đang kiểm soát quyền truy cập vào
        <strong>ImageIcon</strong>. Nó kiểm soát quyền truy cập như thế nào? Hãy nghĩ
        về nó theo cách này: proxy đang tách <strong>Client </strong>khỏi
        <strong>ImageIcon</strong>. Nếu chúng không tách, Client sẽ phải đợi cho đến
        khi mỗi hình ảnh được truy xuất trước khi nó có thể vẽ toàn bộ giao diện.
        Proxy kiểm soát quyền truy cập vào ImageIcon để trước khi nó được tạo đầy đủ,
        proxy cung cấp một biểu diễn khác trên màn hình. Sau khi ImageIcon được tạo,
        proxy cho phép truy cập.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Làm cách nào để khiến Client sử dụng Proxy thay vì
        Object thực (gọi là <strong>Subject</strong>)?<br /><strong>Đáp:</strong> Câu
        hỏi hay. Một kỹ thuật phổ biến là cung cấp một
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/5"
          >Factory </a
        >khởi tạo và trả về <strong>Subject</strong>. Bởi vì điều này xảy ra trong
        <strong>factory method</strong> nên chúng tôi có thể bọc
        <strong>Subject</strong> bằng proxy trước khi return. Client không bao giờ
        biết hoặc không quan tâm rằng họ đang sử dụng proxy thay vì Object thực
        (<strong>Subject</strong>).
      </p>
      
      <p>
        <br /><strong>Hỏi:</strong> Tôi nhận thấy trong ví dụ
        <strong>ImageProxy</strong>, bạn luôn tạo một <strong>ImageIcon </strong>để
        lấy hình ảnh, ngay cả khi hình ảnh đã được truy xuất. Bạn có thể triển khai
        một cái gì đó tương tự như <strong>ImageProx </strong>lưu trữ các truy xuất
        trước đó?<br /><strong>Đáp:</strong> Bạn đang nói về một dạng đặc biệt của
        <strong>Virtual Proxy</strong> được gọi là<strong> Caching Proxy</strong>. Một
        caching proxy duy trì bộ nhớ cache của các đối tượng đã tạo trước đó và khi có
        yêu cầu, nó sẽ trả về đối tượng được lưu trong bộ nhớ cache, nếu có thể. Chúng
        ta sẽ xem xét điều này và một số biến thể khác của Mẫu proxy ở cuối chương.<br />
      </p>
      
      <p>
        <strong>Hỏi:</strong> Tôi đã thấy
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
          >Decorator</a
        >
        và Proxy liên quan, nhưng còn
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/9"
          >Adapter</a
        >
        thì sao? Mẫu này cũng giống một
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >Adapter Pattern</a
        >?<br /><strong>Đáp:</strong> Cả Proxy và
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >Adapter Pattern</a
        >
        đều đứng trước các đối tượng khác và chuyển tiếp yêu cầu đến chúng. Hãy nhớ
        rằng
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >Adapter Pattern</a
        >
        thay đổi giao diện của các đối tượng mà nó thích ứng, trong khi
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/14"
          >Proxy Pattern</a
        >
        implement cùng một giao diện với Sublect. <br />Có một điểm tương tự bổ sung
        liên quan đến <strong>Protection Proxy</strong>.
        <strong>Protection Proxy</strong> có thể cho phép hoặc không cho phép Client
        truy cập vào các phương thức cụ thể trong một đối tượng dựa trên vai trò của
        Client. Bằng cách này, Protection Proxy có thể chỉ cung cấp một phần interface
        cho Client, interface này khá giống với một số
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >Adapter Pattern</a
        >. Chúng ta sẽ xem xét <strong>Protection Proxy</strong> trong một vài trang
        tới.
      </p>`,
      },
    ],
  },
  {
    title: `Buổi nói chuyện tối nay: Proxy và Decorator Pattern`,
    contents: [
      {
        div: `<p>
        <strong>Proxy:</strong> Xin chào, anh Decorator. Tôi cho rằng anh ở đây vì đôi
        khi mọi người khiến chúng ta bối rối?
      </p>
      
      <p>
        <strong>Decorator:</strong> Chà, tôi nghĩ lý do khiến mọi người khiến chúng ta
        bối rối là chú em cứ giả vờ là một hình mẫu hoàn toàn khác, trong khi thực tế,
        chú em chỉ là một Người trang trí (Decorator) được ngụy trang. Tôi thực sự
        không nghĩ rằng chú em không nên sao chép tất cả các ý tưởng của tôi.
      </p>
      
      <p>
        <strong>Proxy:</strong> Tôi sao chép ý tưởng của anh? Làm ơn&#8230; Tôi kiểm
        soát quyền truy cập vào các đối tượng. Anh chỉ việc trang trí chúng. Công việc
        của tôi quan trọng hơn công việc của anh, anh đùa không vui chút nào.
      </p>
      
      <p>
        <strong>Decorator:</strong> &#8220;Chỉ&#8221; trang trí? Chú em nghĩ rằng
        trang trí là một mẫu không quan trọng? Hãy để tôi nói với chú em, tôi thêm
        hành vi. Đó là điều quan trọng nhất của các đối tượng &#8211; những gì chúng
        tôi làm!
      </p>
      
      <p>
        <strong>Proxy:</strong> Tốt thôi, vì vậy có thể anh không hoàn toàn vô dụng …
        nhưng tôi vẫn không hiểu tại sao anh nghĩ rằng tôi đang sao chép tất cả ý
        tưởng của anh. Tôi chỉ muốn đại diện cho các đối tượng của tôi, không phải
        trang trí chúng.
      </p>
      
      <p>
        <strong>Decorator:</strong> Chú em có thể gọi nó là &#8220;đại diện&#8221;
        nhưng nếu nó trông giống một con vịt và đi như một con vịt… Ý tôi là, chỉ cần
        nhìn vào Virtual Proxy của chú em; đó chỉ là một cách khác để thêm hành vi để
        thực hiện điều gì đó trong khi một số đối tượng &#8220;đắt đỏ&#8221; đang được
        tải và Remote Proxy của chú em là một cách nói chuyện với các đối tượng từ xa
        để client không phải bận tâm đến điều đó. Đó cũng chỉ là những hành vi, giống
        như tôi đã nói.
      </p>
      
      <p>
        <strong>Proxy:</strong> Tôi không nghĩ là anh đã hiểu, Decorator. Tôi ủng hộ
        Subject của mình; Tôi không chỉ thêm hành vi. Client sử dụng tôi như một người
        đại diện cho đối tượng thực vì tôi có thể bảo vệ họ khỏi sự truy cập không
        mong muốn hoặc giữ cho GUI của họ không bị treo khi họ đang chờ tải các đối
        tượng lớn hoặc làm &#8220;ẩn đi&#8221; sự thật rằng Subject của họ đang chạy
        trên các máy từ xa . Tôi muốn nói rằng đó là một mục đích rất khác với ý định
        của anh!
      </p>
      
      <p>
        <strong>Decorator:</strong> Chú em nói sao cũng được. Tôi implement giao diện
        giống như các đối tượng tôi bọc; bạn cũng vậy.
      </p>
      
      <p>
        <strong>Proxy:</strong> Được rồi, hãy xem lại điều đó. Anh bọc một đối tượng.
        Mặc dù đôi khi chúng ta nói một cách không chính thức một proxy bọc Subject
        của nó, nhưng đó không thực sự là một thuật ngữ chính xác.
      </p>
      
      <p><strong>Decorator:</strong> Ồ, vậy à? Tại sao không?</p>
      
      <p>
        <strong>Proxy:</strong> Hãy nghĩ về một Remote Proxy… tôi đang bọc đối tượng
        nào? Đó là đối tượng mà tôi đang &#8220;đại diện&#8221; và kiểm soát quyền
        truy cập đang ở trên một máy khác!<br />Hãy xem anh làm điều đó như thế nào.
      </p>
      
      <p>
        <strong>Decorator:</strong> Được rồi, nhưng chúng ta đều biết
        <strong>Remote Proxy</strong> khá kỳ lạ. Có một ví dụ thứ hai không? Tôi nghi
        ngờ điều đó.
      </p>
      
      <p>
        <strong>Proxy:</strong> Được, được rồi, sử dụng
        <strong>Virtual Proxy</strong>… hãy nghĩ về ví dụ về
        <strong>CD covers</strong>. Khi client sử dụng tôi lần đầu tiên làm proxy,
        Subject thậm chí không tồn tại! Vậy tôi đang bọc cái gì ở đó?
      </p>
      
      <p>
        <strong>Decorator:</strong> Uh huh, và điều tiếp theo chú em sẽ nói là chú em
        thực sự phải tạo ra các đối tượng.
      </p>
      
      <p>
        <strong>Proxy:</strong> Tôi chưa bao giờ biết những người trang trí
        (decorator) lại ngốc như vậy! Tất nhiên, đôi khi tôi tạo ra các đối tượng, anh
        nghĩ làm thế nào để <strong>Virtual Proxy</strong> có được Subject của nó!
        Được rồi, anh vừa chỉ ra một sự khác biệt lớn giữa chúng ta: cả hai chúng ta
        đều biết những decorator chỉ thêm hành vi; và không bao giờ có thể khởi tạo
        bất cứ điều gì.
      </p>
      
      <p><strong>Decorator:</strong> Ồ, vậy à?</p>
      
      <p>
        <strong>Proxy:</strong> Này, sau cuộc trò chuyện này, tôi tin rằng bạn chỉ là
        một &#8220;proxy&#8221; ngu ngốc (ý nói decorator cũng là 1 dạng proxy)!
      </p>
      
      <p>
        <strong>Decorator:</strong> &#8220;Proxy&#8221; ngu ngốc? Tôi muốn chú em thấy
        tôi có thể bọc một cách đệ quy một đối tượng với 10 decorator nhưng vẫn có thể
        dễ hiểu.
      </p>
      
      <p>
        <strong>Proxy:</strong> Rất hiếm khi anh thấy một proxy bọc một Subject nhiều
        lần; trên thực tế, nếu anh đang bọc một thứ gì đó 10 lần, tốt hơn anh nên quay
        lại kiểm tra lại thiết kế của mình.
      </p>
      
      <p>
        <strong>Decorator:</strong> Cũng giống như một proxy, hoạt động thì như đối
        tượng thật, trong khi thực tế chú em chỉ đứng sau các đối tượng đang thực hiện
        công việc thực sự. Chú em biết đấy, tôi thực sự cảm thấy tiếc cho chú em.
      </p>`,
      },
    ],
  },
  {
    title: `Sử dụng Proxy của Java API để tạo Protection Proxy`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_15.png`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Java có hỗ trợ proxy riêng ngay trong gói<strong> java.lang.reflect</strong>.
        Với gói này, Java cho phép bạn tạo một lớp proxy nhanh chóng implement một
        hoặc nhiều interface và chuyển tiếp các lệnh gọi phương thức đến một lớp mà
        bạn chỉ định. Vì lớp proxy thực được tạo trong thời gian chạy (runtime), chúng
        tôi gọi công nghệ Java này là <strong>proxy động</strong> (dynamic proxy).
      </p>
      
      <p>
        Chúng tôi sẽ sử dụng dynamic proxy của Java để tạo triển khai proxy tiếp theo
        (protection proxy), nhưng trước khi làm điều đó, chúng ta hãy xem nhanh sơ đồ
        lớp cho thấy cách các dynamic proxy được kết hợp với nhau. Giống như hầu hết
        mọi thứ trong thế giới thực, nó hơi khác so với khái niệm cổ điển của mẫu:
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_16.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Vì Java tạo ra lớp Proxy cho bạn, bạn cần một cách để cho lớp Proxy biết phải
        làm gì. Bạn không thể đặt code của mình vào lớp Proxy của Java như chúng ta đã
        làm trước đây, vì bạn không triển khai trực tiếp. Vì vậy, nếu bạn không thể
        đặt code vào lớp Proxy, bạn sẽ đặt nó ở đâu? Trong một
        <strong>InvocationHandler</strong>. Công việc của
        <strong>InvocationHandler </strong>là trả lời bất kỳ lệnh gọi phương thức nào
        trên proxy. Hãy coi <strong>InvocationHandler </strong>là đối tượng mà Proxy
        yêu cầu thực hiện tất cả các công việc thực sự sau khi nó nhận được các lệnh
        gọi phương thức.<br />Được rồi, hãy cùng xem qua cách sử dụng dynamic proxy…
      </p>`,
      },
    ],
  },
  {
    title: `Dịch vụ mai mối ở Objectville`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_17.png`),
          width: `25%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Thị trấn nào cũng cần có dịch vụ mai mối, đúng không? Bạn đã hoàn thành
        nhiệm vụ và triển khai dịch vụ hẹn hò cho Objectville. Bạn cũng đã cố gắng
        đổi mới bằng cách đưa tính năng “Phổ biến hoặc Không &#8211; Hot or Not”
        vào dịch vụ nơi những người tham gia có thể đánh giá lẫn nhau &#8211; bạn
        cho rằng điều này giúp người dùng của bạn tương tác và xem qua các kết quả
        phù hợp có thể có; nó cũng làm cho mọi thứ vui vẻ hơn rất nhiều.<br />Dịch
        vụ của bạn xoay quanh một <strong>PersonBean </strong>cho phép bạn thiết
        lập và nhận thông tin về một người:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_18.png`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>Bây giờ chúng ta hãy kiểm tra việc triển khai …</p>`,
      },
    ],
  },
  {
    title: `Implement PersonBean`,
    contents: [
      {
        div: ``,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_19.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_20.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Mặc dù chúng tôi nghi ngờ các yếu tố khác có thể khiến Elroy không tìm kiếm
        được người phù hợp, nhưng anh ấy đã đúng: bạn không thể rating cho chính mình
        hoặc thay đổi dữ liệu của người khác. Cách PersonBean của chúng tôi được định
        nghĩa, <strong>bất kỳ ai</strong> cũng có thể
        <strong>gọi bất kỳ phương thức nào</strong> trong đó.<br />Đây là một ví dụ
        hoàn hảo về nơi chúng tôi có thể sử dụng <strong>Protection Proxy</strong>.
        <strong>Protection Proxy</strong> là gì? Nó là một proxy
        <strong>kiểm soát quyền truy cập vào một đối tượng</strong> dựa trên
        <strong>quyền truy cập</strong>. Ví dụ: nếu chúng ta có đối tượng nhân viên
        (employee), Protection proxy có thể cho phép employee gọi một số phương thức
        nhất định trên đối tượng, người quản lý (manager) gọi các phương thức bổ sung
        (như setSalary()) và nhân viên quản lí nhân sự (human resources) có thể gọi
        bất kỳ phương thức nào trên đối tượng đó.<br />Trong dịch vụ hẹn hò của mình,
        chúng tôi muốn đảm bảo rằng người dùng có thể cài đặt thông tin cá nhân của
        riêng mình trong khi ngăn người khác sửa đổi thông tin đó. Chúng tôi cũng muốn
        cho phép điều ngược lại với xếp hạng HotOrNot: chúng tôi muốn những người dùng
        khác có thể rating cho bạn, nhưng họ không thể tự rating cho mình.<br />Chúng
        tôi cũng có một số phương thức getter trong <strong>PersonBean </strong>và vì
        không có phương thức nào trong số này trả về thông tin cá nhân, nên bất kỳ
        người dùng nào cũng có thể gọi chúng.
      </p>`,
      },
    ],
  },
  {
    title: `Đoạn phim 5 phút: protecting subjects`,
    contents: [
      {
        div: `<p>
        <a
          href="https://vi.wikipedia.org/wiki/Bong_b%C3%B3ng_dot-com"
          target="_blank"
          rel="noreferrer noopener nofollow"
          >Internet Bubble</a
        >
        dường như là một ký ức xa vời; đó là những ngày mà tất cả những gì bạn cần làm
        để tìm một công việc tốt hơn, lương cao hơn là đi bộ qua đường. Ngay cả các
        đại lý cho các nhà phát triển phần mềm cũng thịnh hành …
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_21.png`),
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
    title: `Bức tranh lớn: tạo Dynamic Proxy cho PersonBean`,
    contents: [
      {
        div: `<p>
        Chúng tôi có một số vấn đề cần khắc phục: Người dùng không được thay đổi
        rating HotOrNot của chính họ và cũng không thể thay đổi thông tin cá nhân của
        người dùng khác khác. Để khắc phục những sự cố này, chúng tôi sẽ tạo hai
        proxy:
        <strong>một proxy để truy cập đối tượng PersonBean của riêng bạn</strong> và
        <strong>một proxy để truy cập đối tượng PersonBean của người dùng khác</strong
        >. Bằng cách đó, các proxy có thể kiểm soát những yêu cầu nào có thể được thực
        hiện trong từng trường hợp.
      </p>
      
      <p>
        Để tạo các proxy này, chúng tôi sẽ sử dụng dynamic proxy của Java API mà bạn
        đã thấy một vài trang trước đó. Java sẽ tạo hai proxy cho chúng ta; tất cả
        những gì chúng ta cần làm là cung cấp cho bộ xử lý biết phải làm gì khi một
        phương thức được gọi trên proxy.
      </p>
      
      <p>
        <strong>Bước 1: Tạo InvocationHandlers</strong>
      </p>
      
      <p>
        InvocationHandlers thực hiện hành vi của proxy. Như bạn sẽ thấy Java sẽ đảm
        nhận việc tạo đối tượng và lớp proxy thực tế, chúng tôi chỉ cần cung cấp một
        trình xử lý biết phải làm gì khi một phương thức được gọi trên đó.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_22.png`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p class="has-medium-font-size">
        <strong>Bước 2: Viết code tạo Dynamic proxy.</strong>
      </p>
      
      <p>
        Chúng ta cần viết một chút code để tạo lớp proxy và khởi tạo nó. Chúng tôi sẽ
        xem qua code này chỉ trong giây lát.
      </p>
      
      <p>
        <strong
          >Bước 3: Bao bọc bất kỳ đối tượng PersonBean nào bằng proxy thích
          hợp.</strong
        >
      </p>
      
      <p>
        Khi chúng ta cần sử dụng một đối tượng PersonBean, đó là đối tượng của chính
        người dùng (trong trường hợp đó, sẽ gọi người này là “chủ sở hữu”) hoặc là một
        người dùng khác (trong trường hợp đó, chúng tôi sẽ gọi người này là “không sở
        hữu”). Trong cả hai trường hợp, chúng tôi tạo proxy thích hợp cho PersonBean.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_23.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Bước 1: Tạo Invocation Handlers`,
    contents: [
      {
        div: `<p>
        Chúng tôi biết rằng chúng tôi cần phải viết hai trình xử lý lệnh gọi
        (invocation handlers), một cho &#8220;chủ sở hữu&#8221; và một cho
        &#8220;không sở hữu&#8221;. Nhưng <strong>invocation handlers</strong> là gì?
        Đây là cách để suy nghĩ về chúng: khi một lệnh gọi phương thức được thực hiện
        trên proxy, proxy sẽ chuyển tiếp cuộc gọi đó đến
        <strong>invocation handlers</strong> của bạn, nhưng không phải bằng cách gọi
        phương thức tương ứng trên <strong>invocation handlers</strong>. Vậy, nó gọi
        là gì? Hãy xem giao diện InvocationHandler:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_24.png`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Chỉ có một phương thức, <strong>invoke() </strong>và bất kể phương thức nào
        được gọi trên proxy, phương thức <strong>invoke()</strong> là phương thức được
        gọi trên <strong>invocation handlers</strong>. Hãy xem cách này hoạt động như
        thế nào:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_25.png`),
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
    title: `Tiếp tục tạo Invocation Handlers…`,
    contents: [
      {
        div: `<p>
        Khi <strong>invoke()</strong> được gọi bởi proxy, làm cách nào để bạn biết
        phải làm gì với lệnh gọi? Thông thường, bạn sẽ kiểm tra phương thức được gọi
        trên proxy và đưa ra quyết định dựa trên tên của method và có thể là các đối
        số (arguments) của nó. Hãy implement
        <strong>OwnerInvocationHandler </strong>để xem cách này hoạt động như thế nào:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_26.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Bài tập: <strong>NonOwnerInvocationHandler </strong>hoạt động giống như
        <strong>OwnerInvocationHandler </strong>ngoại trừ việc nó cho phép các lệnh
        gọi <strong>setHotOrNotRating()</strong> và nó không cho phép các lệnh gọi đến
        bất kỳ phương thức set nào khác. Hãy tiếp tục và tự viết trình xử lý này.
      </p>
      
      <p><strong>Đáp án:</strong></p>`,
      },
      {
        code: {
          src: `import java.lang.reflect.*;
public class NonOwnerInvocationHandler implements InvocationHandler {
      PersonBean person;
      public NonOwnerInvocationHandler(PersonBean person) {
          this.person = person;
      }
      public Object invoke(Object proxy, Method method, Object[] args) throws IllegalAccessException {
          try {
                if (method.getName().startsWith(“get”)) {
                    return method.invoke(person, args);
                } else if (method.getName().equals(“setHotOrNotRating”)) {
                    return method.invoke(person, args);
                } else if (method.getName().startsWith(“set”)) {
                    throw new IllegalAccessException();
                }
          } catch (InvocationTargetException e) {
                e.printStackTrace();
          }
          return null;
      }
}`,
          language: 'java',
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Bước hai: Tạo lớp Proxy và khởi tạo đối tượng Proxy`,
    contents: [
      {
        div: `<p>
        Bây giờ, tất cả những gì chúng ta còn lại là tạo &#8220;động&#8221; lớp proxy
        và khởi tạo đối tượng proxy. Hãy bắt đầu bằng cách viết một phương thức sử
        dụng PersonBean và biết cách tạo proxy &#8220;chủ sở hữu&#8221; cho nó. Đó là,
        chúng tôi sẽ tạo một loại proxy chuyển tiếp các cuộc gọi phương thức của nó
        tới <strong>OwnerInvocationHandler</strong>. Đây là code:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_27.png`),
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
    title: `Làm nhọn bút chì`,
    contents: [
      {
        div: `<p>
        Mặc dù hơi phức tạp nhưng không có nhiều thứ khi tạo dynamic proxy. Tại sao
        bạn không viết <strong>getNonOwnerProxy()</strong>, trả về một proxy cho
        <strong>NonOwnerInvocationHandler</strong>:<br /><strong>Xa hơn: </strong>bạn
        có thể viết một phương thức <strong>getProxy()</strong> nhận một
        <strong>InvocationHandler</strong>, một <strong>PersonBean </strong>và return
        về một proxy sử dụng <strong>InvocationHandler</strong> đó không?
      </p>`,
      },
      {
        code: {
          src: `PersonBean getNonOwnerProxy(PersonBean person) {
    return (PersonBean) Proxy.newProxyInstance(
              person.getClass().getClassLoader(),
              person.getClass().getInterfaces(),
              new NonOwnerInvocationHandler(person));
}`,
          language: 'java',
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Thử nghiệm dịch vụ mai mối`,
    contents: [
      {
        div: `<p>
        Hãy chạy thử nghiệm dịch vụ mai mối và xem cách nó kiểm soát quyền truy cập
        vào các phương thức setter dựa trên proxy được sử dụng.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_28.png`),
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
    title: `Chạy code`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_29.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi: </strong>Vậy khía cạnh &#8220;dynamic&#8221; của dynamic proxy
        chính xác là gì? Có phải tôi đang khởi tạo proxy và đặt nó trong handler ở
        runtime không?<br /><strong>Đáp:</strong> Không, proxy là
        &#8220;dynamic&#8221; vì lớp của nó được tạo trong thời gian chạy. Hãy nghĩ về
        nó: trước khi code của bạn chạy, không có lớp proxy nào; nó được tạo theo yêu
        cầu từ tập hợp các interface mà bạn truyền cho nó.
      </p>
      
      <p>
        <strong>Hỏi:</strong> InvocationHandler của tôi có vẻ giống như một proxy rất
        lạ, nó không triển khai bất kỳ phương thức nào của lớp mà nó đang ủy quyền.<br /><strong
          >Đáp:</strong
        >
        Đó là bởi vì InvocationHandler không phải là proxy &#8211; nó là một lớp mà
        proxy gửi đến để xử lý các cuộc gọi phương thức. Bản thân proxy được tạo
        dynamic trong thời gian chạy bằng phương thức static
        <strong>Proxy.newProxyInstance()</strong>.
      </p>
      
      <p>
        <strong>Hỏi: </strong>Có cách nào để biết một lớp có phải là lớp Proxy
        không?<br /><strong>Đáp:</strong> Vâng. Lớp Proxy có một phương thức static
        được gọi là <strong>isProxyClass()</strong>. Việc gọi phương thức này với một
        lớp sẽ trả về true nếu lớp đó là một lớp dynamic proxy. Ngoài ra, lớp proxy sẽ
        hoạt động giống như bất kỳ lớp nào khác implement một bộ giao diện cụ thể.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Có bất kỳ hạn chế nào đối với các loại interface tôi có
        thể truyền vào <strong>newProxyInstance()</strong> không?<br /><strong
          >Đáp:</strong
        >
        Vâng, có một vài. Đầu tiên, cần chỉ ra rằng chúng ta luôn truyền
        <strong>newProxyInstance()</strong> một mảng interface &#8211; chỉ interface
        là được phép, không phải class. Các hạn chế chính là tất cả các interface
        không public cần phải từ cùng một package. Bạn cũng không thể có các giao diện
        có tên phương thức xung đột (nghĩa là hai giao diện có cùng một phương thức có
        cùng chữ ký). Ngoài ra còn có một số điểm nhỏ khác, vì vậy tại một số thời
        điểm, bạn nên xem tài liệu trên các dynamic proxy trong <em>javadoc</em>.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Tại sao bạn sử dụng skeletons? Tôi nghĩ rằng chúng tôi
        đã loại bỏ chúng trong Java 1.2.<br /><strong>Đáp:</strong> Bạn nói đúng;
        chúng ta không cần thực sự tạo ra các skeletons. Đối với Java 1.2, thời gian
        chạy RMI có thể gửi các cuộc gọi máy client trực tiếp đến dịch vụ từ xa bằng
        cách sử dụng reflection. Nhưng chúng tôi muốn hiển thị skeleton, vì về mặt
        khái niệm, nó giúp bạn hiểu rằng có điều gì đó nằm bên dưới đang thực hiện
        giao tiếp giữa client stubs và dịch vụ từ xa xảy ra.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Tôi nghe nói rằng trong Java 5, tôi thậm chí không cần
        tạo stubs nữa. Có đúng như vậy không?<br /><strong>Đáp:</strong> Chắc chắn là
        vậy. Trong Java 5, RMI và Dynamic Proxy kết hợp với nhau và bây giờ các stub
        được tạo động bằng Dynamic Proxy. Stubs của đối tượng từ xa là một instance
        của <strong>java.lang.reflect.Proxy</strong> (với trình xử lý lệnh gọi) được
        tạo tự động để xử lý tất cả các chi tiết về việc ứng dụng khách gọi phương
        thức cục bộ tới đối tượng từ xa. Vì vậy, bây giờ bạn không cần phải sử dụng
        rmic nữa; mọi thứ bạn cần để client nói chuyện với một đối tượng từ xa đã được
        xử lý cho bạn ở bên trong.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_30.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Sở thú Proxy`,
    contents: [
      {
        div: `<p>
        Chào mừng đến với Sở thú Objectville!<br />Bây giờ bạn đã biết về các remote
        proxy, virtual và protection, nhưng ngoài thế giới thực, bạn sẽ thấy rất nhiều
        phiên bản của mẫu này. Ở đây, ở một góc Proxy của vườn thú, chúng tôi đã có
        một bộ sưu tập về các mẫu proxy hoang dã mà chúng tôi đã thu thập được để bạn
        nghiên cứu.<br />Công việc của chúng tôi chưa hoàn thành; chúng tôi chắc chắn
        rằng bạn sẽ thấy nhiều biến thể hơn của mẫu này trong thế giới thực, vì vậy
        hãy giúp chúng tôi lập danh mục nhiều proxy hơn. Hãy cùng xem bộ sưu tập hiện
        có:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_31.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-15_32.png`),
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
    title: `Tóm tắt`,
    contents: [
      {
        div: `<ul>
        <li>
          Mẫu Proxy cung cấp một đại diện cho một đối tượng để kiểm soát quyền truy
          cập của client vào đối tượng đó. Có một số cách nó có thể quản lý quyền truy
          cập đó.
        </li>
        <li>
          Một Remote Proxy quản lý sự tương tác giữa một client và một đối tượng từ xa
          (khác với vùng nhớ của client).
        </li>
        <li>
          Một Virtual Proxy kiểm soát quyền truy cập vào một đối tượng &#8220;đắt
          đỏ&#8221; để khởi tạo.
        </li>
        <li>
          Một Protected Proxy kiểm soát quyền truy cập vào các phương thức của một đối
          tượng dựa trên lời gọi phương thức (caller).
        </li>
        <li>
          Nhiều biến thể khác của
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/14"
            >Proxy Pattern</a
          >
          tồn tại bao gồm proxy bộ nhớ đệm (caching proxies), proxy đồng bộ hóa
          (synchronization proxies), proxy tường lửa (firewall proxies), copy-on-write
          proxy, v.v.
        </li>
        <li>
          Proxy có cấu trúc tương tự như
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
            >Decorator</a
          >, nhưng cả hai khác nhau về mục đích của chúng.
        </li>
        <li>
          Decorator thêm hành vi vào đối tượng, trong khi Proxy kiểm soát quyền truy
          cập.
        </li>
        <li>
          Hỗ trợ tích hợp của Java dành cho Proxy có thể tạo một lớp dynamic proxy
          theo yêu cầu và gửi tất cả các lệnh gọi trên đó đến một trình xử lý
          (handler) mà bạn chọn.
        </li>
        <li>
          Giống như bất kỳ trình bao bọc nào (như Decorator&#8230;), proxy sẽ tăng số
          lượng lớp và đối tượng trong thiết kế của bạn.
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
        Link đính kèm bản gốc của quyển sách:&nbsp;<a
          rel="noreferrer noopener"
          href="https://drive.google.com/file/d/14lMY_ot5FHgX7aOR9YiVjR2iD1DdJ6hZ/view?usp=sharing"
          target="_blank"
          >Head First Design Patterns</a
        >.<br />Link đính kèm sourcecode của sách:&nbsp;<a
          rel="noreferrer noopener"
          href="https://resources.oreilly.com/examples/9780596007126"
          target="_blank"
          >Tải SourceCode</a
        >.
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
