import IContent from 'utils/interface';

export const chapter11_1: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_1.png`),
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
    title: `Proxy Pattern – Kiểm soát truy cập đối tượng`,
    contents: [
      {
        div: `<p>
        Bạn đã bao giờ chơi trò “Good cop, bad cop” (cảnh sát tốt, cảnh sát xấu) chưa?
        Bạn là một “cảnh sát tốt” và bạn cung cấp tất cả các “dịch vụ” của mình một
        cách thân thiện và tốt đẹp, nhưng bạn không muốn mọi người yêu cầu về các dịch
        vụ mà họ không được phép, vì vậy bạn có một “cảnh sát xấu” để kiểm soát các
        yêu cầu. Đó là những gì <strong>Proxy pattern</strong> làm: kiểm soát và quản
        lý truy cập. Như bạn sẽ thấy, có rất nhiều cách để <strong>Proxy</strong> thay
        thế cho các đối tượng mà chúng ủy quyền thực hiện. Proxy được biết là thứ
        chuyển toàn bộ các cuộc gọi phương thức qua Internet đến các đối tượng được ủy
        quyền; Chúng cũng được biết là kiên nhẫn ở một chỗ cho một số đối tượng “lười
        biếng” (lazy objects).
      </p>
      
      <p>
        Cảnh báo: Chương này nặng lý thuyết về lập trình Network Java RMI (Remote
        Method Invocation), hãy đọc chương này khi bạn đã biết về Java RMI hoặc khi
        bạn đang tập trung hết sức. Có thể bỏ qua và xem đến chương tiếp theo, chúng
        không ảnh hưởng!
      </p>
      
      <p>
        <em
          ><strong
            >Note của người dịch: hãy đọc hết chương này và quay lại đây để hiểu tôi
            đang nói gì!!!</strong
          ></em
        >
        😉
      </p>
      
      <p>
        <em>“Good cop, bad cop” (</em> <em>“Cảnh sát tốt/Cảnh sát xấu” </em> hoặc “<em
          >Chính diện/Phản diện</em
        >” hoặc “<em>Mặt xanh/Mặt đỏ</em>“)
        <em>là một kỹ thuật đàm phán hoặc thẩm vấn. </em>
        <em
          >“Cảnh sát xấu” có lập trường mạnh mẽ, tiêu cực đối với đối tượng, đưa ra
          những lời buộc tội trắng trợn, bình luận xúc phạm, đe dọa và nói chung tạo
          ra ác cảm giữa tội phạm và chính họ. Điều này tạo tiền đề cho “</em
        >
        <em
          >Cảnh sát tốt” hành động thông cảm, tỏ ra ủng hộ và thấu hiểu và nói chung
          thể hiện sự đồng cảm với đối tượng. Đối tượng có thể cảm thấy họ có thể hợp
          tác với “cảnh sát tốt” hoặc không tin tưởng hoặc sợ cảnh sát xấu. Sau đó, họ
          có thể tìm kiếm sự bảo vệ và tin tưởng cảnh sát tốt và cung cấp thông tin mà
          các thẩm vấn viên đang tìm kiếm.</em
        >
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_2.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Nghe thật dễ dàng. Nếu bạn còn nhớ, chúng tôi đã có các phương thức trong code
        <strong>Gumball Machine</strong> để lấy số lượng kẹo cao su
        (<strong>getCount()</strong>) và lấy trạng thái hiện tại của máy
        (<strong>getState()</strong>).
      </p>
      
      <p>
        Tất cả những gì chúng ta cần làm là tạo một báo cáo có thể được in ra và gửi
        lại cho CEO. Hmmm, có lẽ chúng ta cũng nên thêm một trường “vị trí đặt máy”
        (location) vào mỗi Gumball machine; Bằng cách đó, CEO có thể biết những cái
        máy bắn kẹo hiện đang ở đâu.
      </p>
      
      <p>
        Hãy ngồi vào và viết đoạn code này. Chúng tôi sẽ gây ấn tượng với CEO bằng một
        bước ngoặc rất lớn.
      </p>
      
      <p>
        <strong
          >Note của người dịch: Trước khi đọc tiếp, hãy đảm bảo bạn biết điều này:
          <br />– MonitorMachine – là Client (Máy khách) – Là màn hình giám sát của
          CEO.<br />– GumballMachine – là Server (Máy chủ) – Là máy bắn kẹo cao su, ở
          một nơi xa CEO.</strong
        >
      </p>`,
      },
    ],
  },
  {
    title: `Coding cho Monitor (Máy giám sát của CEO)`,
    contents: [
      {
        div: `<p>
        Hãy bắt đầu bằng cách thêm hỗ trợ cho lớp <strong>GumballMachine</strong> để
        nó có thể xử lý các location:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_3.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center"><small>Class GumballMachine</small></p>`,
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bây giờ, hãy để cho tạo một lớp khác, <strong>GumballMonitor</strong>, lấy ra
        vị trí của máy, số lượng kẹo cao su, trạng thái máy hiện tại và in chúng trong
        một báo cáo:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_4.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center"><small>Class GumballMonitor</small></p>`,
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Testing cho Monitor`,
    contents: [
      {
        div: `<p>
        Chúng tôi thực hiện điều đó rất rất nhanh. Giám đốc điều hành sẽ vui mừng và
        ngạc nhiên trước các kỹ năng lập trình của chúng tôi.
      </p>
      
      <p>
        Bây giờ chúng ta chỉ cần khởi tạo <strong>GumballMonitor</strong> (máy giám
        sát) và cung cấp cho nó một đối tượng <strong>GumballMachine</strong> (máy bắn
        kẹo) để theo dõi:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_5.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center"><small>Class GumballMachineTestDrive</small></p>`,
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_6.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_7.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Joe:</strong> Một cái gì xa?</p>

        <p>
          <strong>Frank:</strong> Proxy từ xa. Hãy suy nghĩ về nó: chúng ta đã có code
          cho màn hình giám sát (monitor) được viết, phải không? Chúng ta cung cấp cho
          <strong>GumballMonitor</strong> một tham chiếu tới một cái máy bắn kẹo và nó
          sẽ cung cấp cho chúng ta một báo cáo. Vấn đề là màn hình giám sát với máy bắn
          kẹo cao su chạy trong cùng một JVM nhưng CEO muốn ngồi vào bàn của mình và
          giám sát máy từ xa (màn hình và máy bắn kẹo 2 nơi khác nhau)! Vậy điều gì sẽ
          xảy ra nếu chúng ta không còn ở lớp <strong>GumballMonitor</strong>, nhưng
          chúng ta đã đưa cho nó cho một đối tượng từ xa?
        </p>
        
        <p><strong>Joe:</strong> Tôi không chắc chắn chúng ta có được nó.</p>
        
        <p><strong>Jim:</strong> Tôi cũng vậy.</p>
        
        <p>
          <strong>Frank: </strong>Hãy bắt đầu ngay từ đầu … một proxy là một thay thế
          cho một đối tượng thực sự. Trong trường hợp này, proxy hoạt động giống như nó
          là một đối tượng <strong>GumballMachine</strong>, nhưng đằng sau đó, nó đang
          liên lạc qua network để nói chuyện với <strong>GumballMachine </strong
          ><em>thực sự</em>, từ xa.
        </p>
        
        <p>
          <strong>Jim:</strong> Vì vậy, bạn nói rằng chúng ta giữ nguyên code của mình
          và chúng ta sẽ cung cấp cho <strong>Monitor </strong>một tham chiếu đến phiên
          bản proxy của <strong>GumballMachine</strong>…
        </p>
        <p>
          <strong>Joe:</strong> Và proxy này giả vờ nó là đối tượng thật, nhưng nó thực
          sự chỉ là giao tiếp qua mạng với đối tượng thật.
        </p>
        
        <p><strong>Frank:</strong> Vâng, nó có khá nhiều việc.</p>
        
        <p><strong>Joe:</strong> Nghe có vẻ như nói dễ hơn làm.</p>
        
        <p>
          <strong>Frank:</strong> Có lẽ, nhưng tôi không nghĩ rằng nó sẽ tệ đến thế.
          Chúng tôi phải đảm bảo rằng máy bắn kẹo cao su có thể hoạt động như một dịch
          vụ và chấp nhận các yêu cầu qua mạng; chúng ta cũng cần cung cấp cho
          <strong>MonitorMachine </strong>của mình một cách để có được một tham chiếu
          đến một đối tượng proxy, nhưng chúng ta đã có một số công cụ tuyệt vời được
          tích hợp sẵn trong Java để giúp chúng ta. Trước tiên, hãy nói thêm một chút về
          remote proxy…
        </p>`,
      },
    ],
  },
  {
    title: `Vai trò của “remote proxy”`,
    contents: [
      {
        div: `<p>
        Một “remote proxy” hoạt động như một đối tượng đại diện (ở cục bộ) (local
        representative) cho một đối tượng từ xa (remote object).&nbsp;
      </p>
      
      <p>
        Cái gì là “remote object”? Nó là một một đối tượng tồn tại trong vùng nhớ heap
        của một Java Virtual Machine khác (hay nói chung hơn là một remote object đang
        chạy trong một không gian địa chỉ khác).
      </p>
      
      <p>
        Cái gì là một “local representative”? Nó là một đối tượng mà bạn có thể gọi
        các phương thức ở cục bộ và chuyển tiếp chúng đến remote object.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_8.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong
          ><em
            >Đối tượng khách hàng (MornitorMachine) của bạn hoạt động giống như nó
            thực hiện các cuộc gọi phương thức từ xa. Nhưng những gì nó thực sự làm là
            gọi các phương thức trên một đối tượng proxy cục bộ xử lý tất cả các chi
            tiết cấp thấp của giao tiếp mạng.</em
          ></strong
        >
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_9.jpg`),
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
    title: `Sức mạnh bộ não`,
    contents: [
      {
        div: `<p>
        Trước khi đi xa hơn, hãy suy nghĩ về cách bạn thiết kế một hệ thống để cho
        phép gọi phương thức từ xa. Làm thế nào bạn có thể làm cho nó dễ dàng với nhà
        phát triển để có thể viết càng ít code càng tốt? Làm thế nào bạn sẽ làm cho
        các cuộc gọi từ xa trông liền mạch?
      </p>
      
      <p><strong>Sức mạnh bộ não 2</strong></p>
      
      <p>
        Có nên thực hiện các cuộc gọi từ xa hoàn toàn minh bạch? Đó có phải là một ý
        tưởng tốt? Điều gì có thể là một vấn đề với cách tiếp cận đó?
      </p>
      `,
      },
    ],
  },
  {
    title: `Thêm remote proxy vào Gumball Machine monitoring code`,
    contents: [
      {
        div: `<p>
        Trên giấy tờ, điều này có vẻ tốt, nhưng làm thế nào để chúng ta tạo một proxy
        biết cách gọi một phương thức trên một đối tượng tồn tại trong một JVM khác?
      </p>
      
      <p>
        Hừm. Chà, bạn không thể có được một tham chiếu cho một cái gì đó trên một vùng
        nhớ heap khác, phải không? Nói cách khác, bạn không thể làm điều này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_10.png`),
          width: `40%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bất cứ biến <strong>d</strong> nào được tham chiếu đều phải nằm trong cùng một
        vùng heap giống như code đang chạy câu lệnh. Vậy làm thế nào để chúng ta tiếp
        cận điều này? Chà, đó là nơi mà <strong>Remote Method Invocation</strong> xuất
        hiện… RMI cho chúng ta một cách để tìm các đối tượng trong một JVM từ xa và
        cho phép chúng ta gọi các phương thức của chúng.
      </p>
      
      <p>
        Bạn có thể đã gặp RMI trong cuốn
        <strong
          ><a
            href="https://www.oreilly.com/library/view/head-first-java/0596009208/"
            target="_blank"
            rel="noreferrer noopener"
            >Head First Java</a
          ></strong
        >; nếu chưa, chúng ta sẽ đi đường vòng nhẹ và tăng tốc độ trên RMI trước khi
        thêm proxy helper vào code của <strong>Gumball Machine</strong>.
      </p>
      
      <p>Vì vậy, đây là những gì chúng ta sẽ làm:</p>
      
      <ol>
        <li>
          Đầu tiên, chúng tôi sẽ xem qua <strong>RMI Detour</strong> và kiểm tra RMI.
          Ngay cả khi bạn đã quen thuộc với RMI, bạn có thể muốn nhìn lại một chút.
        </li>
        <li>
          Sau đó, chúng tôi sẽ lấy <strong>GumballMachine </strong>của chúng tôi và
          biến nó thành một dịch vụ từ xa cung cấp một tập hợp các phương thức có thể
          được gọi từ xa.
        </li>
        <li>
          Sau đó, chúng tôi sẽ tạo một proxy có thể giao tiếp với GumballMachine từ
          xa, một lần nữa sử dụng RMI và đặt hệ thống giám sát MornitorMachine lại với
          nhau để CEO có thể giám sát bất kỳ số lượng máy từ xa nào.
        </li>
      </ol>`,
      },
    ],
  },
  {
    title: `Remote methods 101  `,
    contents: [
      {
        div: `<p>
        Hãy nói rằng chúng ta muốn thiết kế một hệ thống cho phép chúng ta gọi một đối
        tượng cục bộ (<strong>local object</strong>) chuyển tiếp từng yêu cầu đến một
        đối tượng ở xa (<strong>remote object</strong>). Chúng ta sẽ thiết kế nó như
        thế nào? Chúng ta cần một vài đối tượng trợ giúp (<strong
          >helper objects</strong
        >) thực sự giao tiếp với đối tượng ở xa.
      </p>
      
      <p>
        Các trình trợ giúp (helper) làm cho Client có thể hành động như thể nó gọi một
        phương thức ở xa, trên một đối tượng cục bộ (thực tế là như vậy). Client gọi
        một phương thức trên client helper, như thể client helper là dịch vụ thực.
        <strong>Client helper</strong> sau đó sẽ đảm nhiệm việc chuyển tiếp yêu cầu đó
        giúp chúng ta.
      </p>
      <p>
        Nói cách khác, đối tượng client nghĩ rằng nó gọi một phương thức trên dịch vụ
        từ xa, bởi vì client helper đang giả vờ là đối tượng dịch vụ. Giả vờ trở thành
        thứ có phương thức mà client muốn gọi.
      </p>
      
      <p>
        Nhưng <strong>client helper </strong>không thực sự là
        <strong>dịch vụ từ xa</strong>. Mặc dù client helper hoạt động như vậy (vì nó
        có cùng phương thức mà dịch vụ từ xa), nhưng client helper không có bất kỳ
        logic thực tế nào mà Client đang mong đợi. Thay vào đó, client helper liên lạc
        với máy chủ, chuyển thông tin về lệnh gọi phương thức (ví dụ: tên của phương
        thức, đối số, v.v.) và chờ return từ máy chủ.
      </p>
      
      <p>
        Về phía máy chủ, trình trợ giúp dịch vụ (<strong>service helper</strong>) nhận
        yêu cầu từ <strong>client helper</strong> (thông qua kết nối Socket), giải nén
        thông tin về cuộc gọi và sau đó gọi phương thức thực trên đối tượng dịch vụ
        thực. Vì vậy, đối tượng dịch vụ, cuộc gọi là cục bộ. Nó đến từ người trợ giúp
        dịch vụ (service helper), không phải khách hàng ở xa (remote client). (Note:
        Chưa hiểu thì có thể xem hình dưới và đọc lại đoạn này.)
      </p>
      
      <p>
        <strong>Service helper</strong> nhận giá trị trả về từ service, đóng gói và
        gửi lại (qua Socket output stream) cho <strong>client helper</strong>. Client
        helper giải nén thông tin và trả về giá trị cho client object.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_11.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Cách gọi phương thức xảy ra</strong></p>

        <ol>
          <li>
            Client object gọi tới phương thức <strong>doBigThing()</strong> trên client
            helper object.
          </li>
        </ol>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_12.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        2. <strong>Client helper</strong> gói thông tin về cuộc gọi (đối số, tên
        phương thức, v.v.) và gửi nó qua mạng cho <strong>Service helper</strong>.
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_13.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        3. <strong>Service helper</strong> giải nén thông tin từ
        <strong>Client helper</strong>, tìm ra phương thức nào để gọi (và trên đối
        tượng nào) và gọi phương thức thực (real method) trên đối tượng real service.
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_14.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        4. Phương thức được gọi trên service object, trả về một số kết quả cho service
        helper.
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_15.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        5. Service helper đóng gói thông tin trả về từ cuộc gọi và gửi lại qua mạng
        cho client helper.
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_16.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        6. <strong>Client helper</strong> giải nén các giá trị được trả về và trả
        chúng về client object. Đối với client object
        (<strong>MonitorMachine</strong>), tất cả đều trong suốt (transparent – ý đoạn
        này là MonitorMachine sẽ không cần biết sự hiện diện của đối tượng ở xa, hay
        đối tượng ở xa sẽ trong suốt trước <strong>MonitorMachine</strong>).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_17.png`),
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
    title: `Java RMI, bức tranh lớn`,
    contents: [
      {
        div: `<p>
        Được rồi, bạn đã khái niệm về cách thức hoạt động của các phương thức từ xa;
        bây giờ bạn chỉ cần hiểu cách sử dụng RMI để cho phép gọi phương thức từ xa.
      </p>
      
      <p>
        Những gì RMI làm cho bạn là xây dựng các đối tượng client helper và service
        helper, ngay lập tức để tạo một đối tượng client helper với các phương thức
        tương tự như remote service (service helper). Điều thú vị về RMI là bạn không
        phải tự viết bất kỳ đoạn code network hoặc code I/O nào. Với client của bạn,
        bạn gọi các phương thức từ xa (tức là, các phương thức mà Real Service có)
        giống như các cuộc gọi phương thức thông thường trên các đối tượng đang chạy
        trong JVM của Client.
      </p>
      <p>
        RMI cũng cung cấp tất cả các cơ sở hạ tầng trong runtime để làm cho tất cả
        công việc, bao gồm cả dịch vụ tra cứu mà khách hàng có thể sử dụng để tìm và
        truy cập các đối tượng từ xa.
      </p>
      
      <p>
        Có một sự khác biệt giữa các cuộc gọi RMI và các cuộc gọi phương thức cục bộ.
        Hãy nhớ rằng mặc dù với máy khách, có vẻ như cuộc gọi phương thức là cục bộ,
        client helper sẽ gửi cuộc gọi phương thức qua mạng. Vì vậy, có mạng và I/O. Và
        chúng ta biết gì về các phương thức kết nối mạng và I/O?
      </p>
      
      <p>
        Chúng rất mạo hiểm! Chúng có thể thất bại! Và vì vậy, chúng ném exception khắp
        nơi. Kết quả là, client phải chấp nhận rủi ro. Chúng ta sẽ xem làm thế nào
        trong một vài trang tiếp.
      </p>
      
      <p>
        <strong
          >Tên gọi trong RMI: trong RMI, client helper là một “stub” và service helper
          là một “skeleton”.</strong
        >
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_18.png`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong
          >Bây giờ, hãy xem qua tất cả các bước cần thiết để biến một đối tượng thành
          một service có thể chấp nhận các cuộc gọi từ xa và cả các bước cần thiết để
          cho phép Client thực hiện các cuộc gọi từ xa.</strong
        >
      </p>
      
      <p>
        <strong
          >Bạn có thể muốn đảm bảo dây an toàn của bạn đã được thắt chặt; có rất nhiều
          bước và một vài va chạm và đường cong – nhưng không có gì phải quá lo
          lắng.</strong
        >
      </p>`,
      },
    ],
  },
  {
    title: `Tạo Remote service`,
    contents: [
      {
        div: `<p>
        Đây là tổng quan về các bước để tạo dịch vụ từ xa (remote service). Nói cách
        khác, các bước cần thiết để lấy một đối tượng bình thường và siêu nạp
        (supercharge) nó để nó có thể được gọi bởi một remote client. Chúng ta sẽ làm
        điều này sau đó với <strong>GumballMachine</strong>. Bây giờ, hãy xem tiếp và
        sau đó chúng tôi sẽ giải thích chi tiết.
      </p>`,
      },
      {
        p: `<h6><b>BƯỚC MỘT: TẠO MỘT REMOTE INTERFACE  </b></h6>`,
      },
      {
        div: `<p>
        Remote interface xác định các phương thức mà client có thể gọi từ xa. Nó có
        những gì mà client sẽ sử dụng làm loại lớp cho service của bạn. Cả Stub và
        service thực tế sẽ implement interface này!
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_19.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>BƯỚC HAI: TẠO MỘT REMOTE IMPLEMENTATION</b></h6>`,
      },
      {
        div: `<p>
        Đây là lớp thực sự làm việc. Nó có triển khai thực sự của các remote method
        được định nghĩa trong remote interface. Nó yêu cầu đối tượng mà Client muốn
        gọi các phương thức trên (ví dụ: GumballMachine của chúng ta!).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_20.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>BƯỚC BA: TẠO “STUB” VÀ “SKELETON” SỬ DỤNG RMIC  </b></h6>`,
      },
      {
        div: `<p>
        Đây là client và server “helpers”. Bạn không cần phải tạo các lớp này hoặc xem
        source code tạo ra chúng. Tất cả đều xử lý tự động khi bạn chạy công cụ rmic
        đi kèm với bộ công cụ phát triển Java (JDK) của bạn.
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_21.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>BƯỚC BỐN: RUN RMIREGISTRY (RMIREGISTRY)  </b></h6>`,
      },
      {
        div: `<p>
        Các rmiregology giống như các trang trắng (white pages) của một danh bạ điện
        thoại. Nó ở nơi Client đi lấy proxy (client stub/helper object).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_22.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>BƯỚC NĂM: BẮT ĐẦU REMOTE SERVICE  </b></h6>`,
      },
      {
        div: `<p>
        Bạn phải đưa đối tượng dịch vụ lên và chạy. Lớp triển khai dịch vụ của bạn
        khởi tạo một thể hiện của dịch vụ và đăng ký nó với RMI registry. Đăng ký nó
        làm cho dịch vụ có sẵn cho khách hàng.
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_23.png`),
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
    title: `Bước một: Tạo một Remote Interface  `,
    contents: [
      {
        div: `<p><strong>1. Extend java.rmi.Remote&nbsp;&nbsp;</strong></p>

        <p>
          Remote là một ‘marker’ interface, có nghĩa là nó không có phương thức. Tuy
          nhiên, nó có ý nghĩa đặc biệt đối với RMI, vì vậy bạn phải tuân theo quy tắc
          này. Lưu ý rằng chúng tôi nói ‘extends’ ở đây. Một giao diện được phép mở rộng
          giao diện khác.
        </p>
        `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_24.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>2. Mô tả tất cả phương thức ném ra một RemoteException</strong></p>

        <p>
          Remote interface là giao diện mà Client sử dụng như là một loại cho service.
          Nói cách khác, Client gọi các phương thức trên một cái gì đó – thứ sẽ
          implement remote interface. Tất nhiên, cái gì đó là stub, và vì stub đang kết
          nối mạng và I/O, tất cả các loại “Điều xấu” đều có thể xảy ra. Client phải
          thừa nhận rủi ro bằng cách xử lý hoặc khai báo các exception từ xa. Nếu các
          phương thức trong Interface khai báo các exception, bất kỳ phương thức gọi
          code nào trên tham chiếu của loại đó (loại interface) cũng phải xử lý hoặc
          khai báo các exception.
        </p>
        `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_25.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Mỗi cuộc gọi phương thức từ xa được coi là “rủi ro”. Khai báo
        <strong>RemoteException </strong>trên mọi phương thức buộc client phải chú ý
        và thừa nhận rằng mọi thứ có thể không hoạt động.
      </p>
      
      <p>
        <strong
          >3. Hãy chắc chắn các đối số và giá trị trả về là primitive (kiểu nguyên
          thủy: int, float,double…) hoặc Serializable</strong
        >
      </p>
      
      <p>
        Các đối số và giá trị trả về của một remote method phải là hoặc primitive hoặc
        Serializable. Hãy suy nghĩ về nó. Bất kỳ đối số nào đối với một remote method
        đều phải được đóng gói và vận chuyển qua mạng và điều đó được thực hiện thông
        qua <strong>Serialization</strong>. Cũng tương tự với giá trị trả về. Nếu bạn
        sử dụng primitives, Strings và phần lớn các loại trong API (bao gồm cả arrays
        và collection), bạn sẽ vẫn ổn.
      </p>
      
      <p>
        Nếu bạn đang chuyển qua các kiểu của riêng mình, chỉ cần chắc chắn rằng các
        lớp của bạn implement <strong>Serializable</strong>.
      </p>
      
      <p>
        (Hãy xem <strong>Head First Java</strong> nếu bạn cần nhớ lại kiến thức của
        mình về <strong>serializable</strong>)
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_26.png`),
          width: `50%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Giá trị trả về này sẽ được chuyển qua mạng từ server trở lại client, vì vậy nó
        cũng phải được <strong>Serializable</strong>. Đó là cách thức args và return
        values được đóng gói và gửi đi.
      </p>`,
      },
    ],
  },
  {
    title: `Bước hai: Tạo một Remote Implementation`,
    contents: [
      {
        div: `<p><strong>1. Implement the Remote interface&nbsp;&nbsp;</strong></p>

        <p>
          Dịch vụ của bạn phải implement remote interface, một trong những phương thức
          mà client của bạn sẽ gọi.
        </p>
        `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_27.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>2. Extend UnicastRemoteObject&nbsp;&nbsp;</strong></p>

        <p>
          Để làm việc như một đối tượng remote service, đối tượng của bạn cần một số
          chức năng liên quan đến ‘being remote’. Cách đơn giản nhất là extend
          &nbsp;UnicastRemoteObject (từ gói <strong><em>java.rmi.server</em></strong
          >) và để lớp đó (superclass của bạn) thực hiện công việc cho bạn.
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_28.png`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong
          >3. Viết một hàm khởi tạo không có đối số mô tả RemoteException</strong
        >
      </p>
      
      <p>
        Superclass mới của bạn, <strong>UnicastRemoteObject</strong>, có một vấn đề
        nhỏ, constructor của nó ném ra <strong>RemoteException</strong>. Cách duy nhất
        để giải quyết vấn đề này là khai báo constructor cho việc triển khai từ xa của
        bạn, để bạn có một nơi để khai báo <strong>RemoteException</strong>. Hãy nhớ
        rằng, khi một lớp được khởi tạo, superclass constructor của nó luôn được gọi.
        Nếu hàm tạo của lớp cha của bạn quăng ra một ngoại lệ, bạn không có lựa chọn
        nào khác ngoài việc khai báo rằng constructor của bạn cũng ném một ngoại lệ.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_29.png`),
          width: `50%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bạn không phải đặt bất cứ thứ gì vào hàm khởi tạo. Bạn chỉ cần một cách để
        khai báo rằng hàm constructor của siêu lớp của bạn ném một ngoại lệ.
      </p>
      
      <p><strong>4. Đăng ký dịch vụ với RMI registry</strong></p>
      
      <p>
        Bây giờ bạn đã có một dịch vụ từ xa, bạn phải cung cấp nó cho các remote
        client. Bạn làm điều này bằng cách khởi tạo nó và đưa nó vào RMI registry
        (phải thực hiện điều này hoặc code của bạn bị lỗi). Khi bạn đăng ký đối tượng
        implementation, hệ thống RMI thực sự đặt stub trong registry, vì đó là những
        gì client thực sự cần. Đăng ký dịch vụ của bạn bằng phương thức static
        <strong>rebind()</strong> của lớp <strong>java.rmi.Naming</strong>.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_30.png`),
          width: `50%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Đặt tên cho dịch vụ của bạn (thứ mà client có thể sử dụng để tra cứu nó trong
        registry) và đăng ký nó với RMI registry. Khi bạn liên kết (bind) đối tượng
        dịch vụ (service object), RMI hoán đổi dịch vụ cho stub và đặt stub trong
        registry.
      </p>`,
      },
    ],
  },
  {
    title: `Bước ba: Tạo “stub” và “skeleton” sử dụng rmic`,
    contents: [
      {
        div: `<p>
        <strong
          >1. Chạy rmic trên lớp remote implementation class (không phải remote
          interface)</strong
        >
      </p>
      
      <p>
        Công cụ rmic, đi kèm với bộ công cụ phát triển phần mềm Java (JDK), lấy
        service implementation và tạo hai lớp mới, stub và skeleton. Nó sử dụng quy
        ước đặt tên là tên của việc triển khai từ xa của bạn + “_Stub” hoặc “_Skel”
        được thêm vào cuối. Có các tùy chọn khác với rmic, bao gồm không tạo
        skeletons, xem source code của các lớp này trông như thế nào và thậm chí sử
        dụng IIOP làm giao thức (protocol). Cách chúng tôi đang làm ở đây là cách mà
        bạn sẽ thường làm. Các lớp sẽ đặt trong thư mục hiện tại (tức là bạn sẽ phải
        <strong>cd</strong> tới các lớp). Hãy nhớ rằng, rmic phải nhìn thấy lớp triển
        khai của bạn, vì vậy bạn có thể chạy rmic từ thư mục nơi triển khai từ xa của
        bạn. (Chúng tôi cố tình không sử dụng các packages ở đây, để làm cho nó đơn
        giản hơn. Trong thế giới thực, bạn sẽ cần tính đến các cấu trúc thư mục
        packages và tên đủ điều kiện).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_31.png`),
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
    title: `Bước bốn: run rmiregistry (rmiregistry)  `,
    contents: [
      {
        div: `<p><strong>1. Mở terminal và bắt đầu rmiregistry.&nbsp;&nbsp;</strong></p>

        <p>
          Hãy chắc chắn rằng bạn bắt đầu nó từ một thư mục có quyền truy cập vào các lớp
          của bạn. Cách đơn giản nhất là khởi động nó từ thư mục ‘classes’.
        </p>
        `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_32.png`),
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
    title: `Bước năm: Bắt đầu service`,
    contents: [
      {
        div: `<p><strong>1. Đưa lên một terminal khác và bắt đầu service của bạn</strong></p>

        <p>
          Điều này có thể là từ một phương thức <strong>main() </strong>trong remote
          implementation class của bạn hoặc từ một lớp launcher riêng biệt.
        </p>
        
        <p>
          Trong ví dụ đơn giản này, chúng tôi đặt code khởi động (starter code) trong
          lớp triển khai, trong một phương thức <strong>main </strong>để khởi tạo đối
          tượng và đăng ký nó với RMI registry.
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_33.png`),
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
    title: `Hoàn thành code cho server side  `,
    contents: [
      {
        div: `<p><strong>Remote interface:&nbsp;&nbsp;</strong></p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_34.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Remote service (implementation):&nbsp;&nbsp;</strong></p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_35.png`),
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
    title: `Làm thế nào để client có được stub object?`,
    contents: [
      {
        div: `<p>
        Client phải lấy stub object (proxy của chúng ta), vì đó là điều mà client sẽ
        gọi các phương thức trên. Và đó là nơi mà RMI registry xuất hiện. Client thực
        hiện tra cứu, giống như đi đến các trang trắng của một danh bạ điện thoại, và
        về cơ bản, Đây là tra cứu một cái tên, và stub sẽ gắn liền với cái tên đó.
      </p>
      
      <p>
        Chúng ta hãy xem code chúng ta cần lookup và truy xuất một đối tượng stub.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_36.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_37.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>CÁCH NÓ LÀM VIỆC</b></h6>`,
      },
      {
        div: `<p>1. Client thực hiện tra cứu trên sổ RMI registry&nbsp;&nbsp;</p>`,
      },
      {
        code: {
          src: `Naming.lookup("rmi://127.0.0.1/RemoteHello");`,
          language: 'java',
        },
      },
      {
        div: `<p>2. RMI registry return một stub object&nbsp;&nbsp;</p>

        <p>
          (như giá trị trả về của phương thức lookup) và RMI tự động deserializes stub.
          Bạn PHẢI có lớp stub (rmic tạo cho bạn) trên client ngược lại stub sẽ không
          được deserialized.
        </p>
        
        <p>3. Client gọi một phương thức trên stub, như thể stub đó là real service.</p>`,
      },
      {
        p: `<h6><b>HOÀN THÀNH CLIENT CODE </b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_38.png`),
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
    title: `Làm thế nào để client có được stub class?`,
    contents: [
      {
        div: `
        <p>
          Bây giờ chúng ta đến với một câu hỏi thú vị. Làm thế nào, hay bằng cách nào
          đó, client phải có stub class (thứ bạn đã tạo trước đó bằng cách sử dụng rmic)
          tại thời điểm client thực hiện lookup, nếu không thì stub sẽ không được
          deserialized trên client và mọi thứ tiếp theo sẽ không được thực hiện. Client
          cũng cần các lớp cho bất kỳ serialized object nào được trả về bởi các phương
          thức gọi đến remote object. Trong một hệ thống đơn giản, bạn có thể chỉ cần
          cung cấp các lớp này cho client.
        </p>
        
        <p>
          Có một cách hay hơn nhiều, mặc dù nó vượt quá phạm vi của cuốn sách này. Nhưng
          trong trường hợp bạn có hứng thú, cách hay hơn được gọi là “dynamic class
          downloading”. Với việc tải xuống động, các đối tượng được serialized (như
          stub) được đóng dấu với một URL thông báo cho hệ thống RMI trên client để tìm
          tệp lớp cho đối tượng đó. Sau đó, trong quá trình deserializing một đối tượng,
          nếu RMI không thể tìm thấy lớp cục bộ, nó sẽ sử dụng URL đó để thực hiện HTTP
          Get để lấy class file. Vì vậy, bạn có thể cần một máy chủ web đơn giản để phục
          vụ các class file và bạn cũng cần thay đổi một số tham số bảo mật trên client.
          Có một vài vấn đề phức tạp khác với “dynamic class downloading”, nhưng đó là
          tổng quan.
        </p>
        
        <p>
          Đối với stub object cụ thể, có một cách khác để client có thể nhận được lớp.
          Điều này chỉ có trong Java 5. Chúng tôi sẽ nói ngắn gọn về điều này ở gần cuối
          chương.
        </p>`,
      },
    ],
  },
  {
    title: `Tiếp tục xem`,
    contents: [
      {
        div: `<p>Ba điều hàng đầu mà các lập trình viên làm sai với RMI là:</p>

        <p>
          1) Quên start rmiregistry trước khi start remote service (khi service được
          đăng ký <strong>Naming.rebind()</strong>, rmiregistry phải được chạy!)
        </p>
        
        <p>
          2) Quên tạo các đối số và trả về các kiểu serializable (bạn sẽ không biết cho
          đến khi runtime; trình biên dịch sẽ không phát hiện.)
        </p>
        
        <p>3) Quên cung cấp stub class cho client.</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_39.png`),
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
    title: `Quay lại với GumballMachine remote proxy của chúng ta`,
    contents: [
      {
        div: `<p>
        Được rồi, bây giờ bạn đã có kiến thức cơ bản về RMI, bạn đã có các công cụ cần
        thiết để thực hiện GumballMachine remote proxy. Hãy xem GumballMachine phù hợp
        với framework này như thế nào:<br />
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_40.png`),
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
    title: `Chuẩn bị GumballMachine trở thành một dịch vụ từ xa`,
    contents: [
      {
        div: `<p>
        Bước đầu tiên trong việc chuyển đổi code của chúng tôi để sử dụng Remote proxy
        là cho phép <strong>GumballMachine </strong>phục vụ các yêu cầu từ xa từ
        client. Nói cách khác, chúng tôi sẽ biến nó thành một dịch vụ. Để làm điều đó,
        chúng ta cần phải:
      </p>
      
      <p>
        1) Tạo giao diện từ xa cho <strong>GumballMachine</strong>. Điều này sẽ cung
        cấp một tập hợp các phương thức có thể được gọi từ xa.
      </p>
      
      <p>
        2) Đảm bảo tất cả các kiểu trả về trong giao diện được
        <strong>serializable</strong>.
      </p>
      
      <p>
        3) Thực hiện giao diện trong một lớp cụ thể. Chúng tôi sẽ bắt đầu với remote
        interface:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_41.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Chúng ta có một kiểu trả về không <strong>Serializable</strong>: lớp
        <strong>State</strong>. Hãy sửa nó lại…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_42.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Trên thực tế, chúng tôi chưa hoàn thành được với serializable; chúng tôi có
        một vấn đề với <strong>State</strong>. Bạn có thể nhớ, mỗi đối tượng
        <strong>State </strong>có một tham chiếu đến
        <strong>Gumball machine</strong> để nó có thể gọi phương thức của Gumball
        machine và thay đổi trạng thái của nó. Chúng tôi không muốn cho toàn bộ
        gumball machine được serialized và chuyển giao với State object. Có một cách
        dễ dàng để khắc phục điều này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_43.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Chúng tôi đã triển khai <strong>GumballMachine</strong>, nhưng chúng tôi cần
        đảm bảo rằng nó có thể hoạt động như một dịch vụ và xử lý các yêu cầu đến từ
        mạng. Để làm điều đó, chúng tôi phải đảm bảo
        <strong>GumballMachine </strong>đang làm mọi thứ cần thiết để implements giao
        diện <strong>GumballMachineRemote</strong>.
      </p>
      
      <p>
        Như bạn đã thấy trong phần “<strong>RMI detour</strong>”, điều này khá đơn
        giản, tất cả những gì chúng ta cần làm là thêm một vài thứ…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_44.png`),
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
    title: `Đăng ký với RMI registry…`,
    contents: [
      {
        div: `<p>
        Điều đó sẽ hoàn thành gumball machine service. Bây giờ chúng tôi chỉ cần kích
        hoạt nó để nó có thể nhận được yêu cầu. Trước tiên, chúng tôi cần đảm bảo rằng
        chúng tôi đăng ký nó với RMI registry để client có thể xác định vị trí của nó.
      </p>
      
      <p>Chúng tôi sẽ thêm một ít code để xử lý việc này:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_45.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>Hãy xem kết quả:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_46.png`),
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
    title: `Bây giờ là GumballMonitor client  `,
    contents: [
      {
        div: `<p>
        Nhớ GumballMonitor không? Chúng tôi muốn sử dụng lại nó mà không cần viết lại
        để hoạt động qua mạng. Chúng tôi sẽ làm điều đó, nhưng chúng tôi cần phải thực
        hiện một vài thay đổi.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_47.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_48.png`),
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
    title: `Viết Monitor test drive`,
    contents: [
      {
        div: `<p>
        Bây giờ chúng tôi đã có tất cả các phần chúng tôi cần. Chúng ta chỉ cần viết
        một số code để CEO có thể giám sát một loạt các máy bắn kẹo cao su:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_49.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_50.png`),
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
    title: `Demo khác cho CEO của Mighty Gumball…`,
    contents: [
      {
        div: `<p>
        Được rồi, đã đến lúc kết hợp tất cả công việc này lại với nhau và đưa ra một
        bản demo khác. Trước tiên, hãy để chắc chắn rằng một vài Gumball machine đang
        chạy code mới:
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_51.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Và bây giờ hãy đặt màn hình theo dõi cho CEO. Hy vọng lần này anh ấy sẽ thích
        nó:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_52.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bằng cách gọi các phương thức trên proxy, một cuộc gọi từ xa được thực hiện
        trên một biến String, một số int và một State object. Bởi vì chúng tôi đang sử
        dụng proxy, <strong>GumballMonitor </strong>không biết, hoặc cần không quan
        tâm, các cuộc gọi đó là từ xa (trừ việc phải lo lắng về các exception từ xa
        được ném ra).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_53.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        1. CEO chạy màn hình, đầu tiên lấy proxy của máy bắn kẹo cao su từ xa và sau
        đó gọi <strong>getState()</strong> trên mỗi máy (cùng với
        <strong>getCount()</strong> và <strong>getLocation()</strong>).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_54.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        2. <strong>getState()</strong> được gọi trên proxy, chuyển cuộc gọi đến remote
        service. Skeleton nhận được yêu cầu và sau đó chuyển nó đến máy bắn kẹo cao
        su.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_55.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        3. <strong>GumballMachine </strong>return trạng thái cho skeleton,
        <strong>serialize </strong>nó và chuyển nó trở lại proxy. Proxy
        <strong>deserialize </strong>nó và return nó như một object cho monitor.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_56.png`),
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
    title: `Định nghĩa Proxy Pattern`,
    contents: [
      {
        div: `<p>
        Chúng ta đã có nhiều trang ở trên để giải thích thêm cho định nghĩa này; như
        bạn có thể thấy, việc giải thích Remote Proxy khá liên quan. Mặc dù vậy, bạn
        sẽ thấy rằng định nghĩa và sơ đồ lớp cho Proxy Pattern thực sự khá đơn giản.
        Lưu ý rằng Remote Proxy là một triển khai của Proxy Pattern cơ bản; thực tế có
        khá nhiều biến thể của mẫu này và chúng ta sẽ nói về chúng sau. Còn bây giờ,
        hãy xem chi tiết của mẫu Proxy Pattern cơ bản.
      </p>
      
      <p>Ở đây, định nghĩa Proxy pattern:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_57.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong
          ><em
            >(Proxy Pattern cung cấp một “đại diện thay thế” hoặc “giữ chỗ” cho một
            đối tượng khác để kiểm soát quyền truy cập vào nó)</em
          ></strong
        >
      </p>
      
      <p>
        Sử dụng Proxy Pattern để tạo một đối tượng đại diện kiểm soát quyền truy cập
        vào một đối tượng khác, có thể là điều khiển từ xa, tốn kém để tạo hoặc cần
        bảo mật.
      </p>
      
      <p>
        Chà, chúng ta đã thấy cách Proxy Pattern cung cấp thay thế hoặc giữ chỗ cho
        một đối tượng khác. Chúng ta cũng đã mô tả proxy như là một “đại diện” cho một
        đối tượng khác.
      </p>
      
      <p>
        Nhưng proxy pattern kiểm soát truy cập như thế nào? Nghe có vẻ hơi lạ. Đừng lo
        lắng. Trong trường hợp của gumball machine, chỉ cần nghĩ đến proxy kiểm soát
        truy cập vào đối tượng từ xa. Proxy pattern cần thiết để kiểm soát quyền truy
        cập vì client của chúng ta, monitor, không biết cách nói chuyện với một đối
        tượng ở xa. Vì vậy, trong một số trường hợp, remote proxy kiểm soát truy cập
        để nó có thể xử lý các chi tiết mạng cho chúng ta. Như chúng ta vừa thảo luận,
        có rất nhiều biến thể của Proxy Pattern và các biến thể thường xoay quanh cách
        proxy kiểm soát truy cập. Sau đó, chúng ta sẽ nói thêm về điều này sau (ở phần
        2), nhưng bây giờ đây là một vài cách kiểm soát truy cập của proxy:
      </p>
      
      <ul>
        <li>
          Như chúng ta biết và thảo luận bên trên, một Remote proxy kiểm soát truy cập
          vào một remote object.
        </li>
        <li>
          Một Virtual proxy (proxy ảo) kiểm soát truy cập vào một tài nguyên, thứ sẽ
          rất tốn kém để tạo ra.
        </li>
        <li>
          Protection proxy kiểm soát quyền truy cập vào tài nguyên dựa trên quyền truy
          cập
        </li>
      </ul>
      
      <p>
        Bây giờ bạn đã biết những khái niệm chính của mẫu Proxy pattern, hãy xem sơ đồ
        lớp…
      </p>`,
      },
    ],
  },
  {
    title: `Sơ đồ lớp Proxy Pattern`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-14_58.png`),
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
    title: `Hãy xem qua sơ đồ Proxy Pattern…`,
    contents: [
      {
        div: `<p>
        Đầu tiên chúng ta có một <strong>Subject</strong>, cung cấp giao diện cho
        <strong>RealSubject </strong>và <strong>Proxy</strong>.
      </p>
      
      <p>
        Bằng cách triển khai cùng một giao diện, <strong>Proxy </strong>có thể được
        thay thế cho <strong>RealSubject </strong>ở bất cứ nơi nào nó xuất hiện.
      </p>
      
      <p>
        <strong>RealSubject </strong>là đối tượng thực hiện công việc thực sự. Nó yêu
        thích đối tượng mà <strong>Proxy </strong>đại diện và kiểm soát quyền truy
        cập.
      </p>
      
      <p>
        <strong>Proxy </strong>giữ một tham chiếu đến <strong>RealSubject</strong>.
        Trong một số trường hợp, Proxy có thể chịu trách nhiệm tạo và hủy
        <strong>RealSubject</strong>. Client tương tác với
        <strong>RealSubject </strong>thông qua <strong>Proxy</strong>. Vì
        <strong>Proxy </strong>và <strong>RealSubject </strong>implements cùng một
        giao diện (Subject), Proxy có thể được thay thế ở bất kỳ nơi nào có thể sử
        dụng subject. Proxy cũng kiểm soát quyền truy cập vào
        <strong>RealSubject</strong>; điều khiển này có thể cần thiết nếu
        <strong>Subject </strong>đang chạy trên một máy từ xa, nếu
        <strong>Subject </strong>tốn kém để tạo theo một cách nào đó hoặc nếu quyền
        truy cập vào <strong>Subject </strong>cần được bảo vệ theo một cách nào đó.
      </p>
      
      <p>
        Bây giờ bạn đã hiểu mẫu cơ bản, hãy có một cái nhìn khác về cách sử dụng proxy
        ngoài Remote Proxy…
      </p>`,
      },
      {
        div: `<p>
        (Đón xem..<a
          rel="noreferrer noopener"
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/15"
          target="_blank"
          >.</a
        >Proxy Pattern – Kiểm soát truy cập đối tượng phần 2).
      </p>`,
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
