import IContent from 'utils/interface';

export const chapter7: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_1.jpg`),
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
    title: `Command Pattern – Đóng gói yêu cầu`,
    contents: [
      {
        div: `<p>
        <strong>
          Trong chương này, chúng tôi đưa việc đóng gói lên một cấp độ hoàn
          toàn mới: đóng gói lời gọi (command) phương thức.
        </strong> 
        Đúng vậy, bằng cách đóng gói lời gọi phương thức, Command pattern có
        thể kết tinh các phần xử lý để đối tượng gọi xử lý không cần phải lo
        lắng về cách thực hiện, nó chỉ sử dụng phương thức của chúng ta để
        hoàn thành nó. Với Command pattern, chúng ta cũng có thể thực hiện một
        số điều với các cách gọi phương thức được đóng gói này, như lưu chúng
        để ghi log&nbsp; hoặc tái sử dụng chúng để thực hiện undo trong code
        của chúng ta.
      </p>`,
      },
      {
        div: `<p>
         
        <em>Chào các bạn!</em> <br />
        <em>
          Gần đây tôi đã nhận được một bản demo và tóm tắt từ Johnny
          Hurricane, CEO của Weather-O-Rama, trên trạm thời tiết có thể mở
          rộng mới của họ. Tôi phải nói rằng, tôi rất ấn tượng với kiến
          &ZeroWidthSpace;&ZeroWidthSpace;trúc phần mềm và tôi đã muốn yêu cầu
          bạn thiết kế API cho Điều khiển từ xa tự động hóa trong gia đình
          (Home Automation Remote Control) mới của chúng tôi. Đổi lại cho các
          dịch vụ của bạn, chúng tôi rất vui khi được thưởng cho bạn các tùy
          chọn cổ phiếu trong Home Automatic hoặc Bust, Inc.
        </em>
        <br />
        <em>
          Tôi đã bao gồm một bản gốc của điều khiển từ xa hiện có của chúng
          tôi cho sự chú ý của bạn. Điều khiển từ xa có bảy khe lập trình (mỗi
          khe có thể được gán cho một thiết bị gia dụng khác nhau) cùng với
          các nút bật/tắt tương ứng cho từng khe (slot). Điều khiển từ xa cũng
          có nút undo chung cho cả remote.
        </em>
        <br />
        <em>
          Tôi cũng kèm theo một tập hợp các lớp Java trên đĩa CD-R được tạo
          bởi các nhà cung cấp khác nhau để điều khiển các thiết bị tự động
          hóa gia đình như đèn, quạt, bồn nước nóng, thiết bị âm thanh và các
          thiết bị điều khiển tương tự khác.
        </em>
        <br />
        <em>
          Chúng tôi muốn bạn tạo một API để lập trình từ xa để mỗi khe có thể
          được chỉ định để điều khiển một thiết bị hoặc bộ thiết bị. Lưu ý
          rằng điều quan trọng là chúng tôi có thể kiểm soát các thiết bị hiện
          tại trên đĩa và bất kỳ thiết bị nào trong tương lai mà các nhà cung
          cấp có thể cung cấp.
        </em>
        <br />
        <em>
          Với công việc bạn đã làm trên 
          <a
            rel="noreferrer noopener"
            href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/2"
            target="_blank"
          >
            trạm thời tiết Weather-O-Rama,
          </a> 
          chúng tôi biết bạn sẽ làm rất tốt công việc điều khiển từ xa của
          chúng tôi!
        </em>
        <br />
        <em>Chúng tôi mong muốn được nhìn thấy thiết kế của bạn.</em>
        <br />
        <em>Trân trọng,</em>
        <br />
        <em>Bill (X-10) Thompson, Giám đốc điều hành</em>. 
      </p>`,
      },
    ],
  },
  {
    title: ` Đã có phần cứng miễn phí! Hãy cùng kiểm tra điều khiển từ xa…`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_2.jpg`),
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
    title: `Nhìn vào các lớp được cung cấp`,
    contents: [
      {
        div: `<p>
        Kiểm tra các lớp từ nhà cung cấp trên đĩa CD-R. Chúng sẽ cung cấp cho
        bạn một số ý tưởng về giao diện của các đối tượng chúng ta cần điều
        khiển từ xa.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_3.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Có vẻ như chúng ta có khá nhiều lớp ở đây, và không dễ để đưa ra một
        bộ interface chung. Không chỉ vậy, trong tương lai, có vẻ như chúng ta
        có thể có các lớp nhiều hơn. Thiết kế API điều khiển từ xa sẽ rất thú
        vị. 
      </p>`,
      },
    ],
  },
  {
    title: `Hội thoại`,
    contents: [
      {
        div: `<p>
        <strong>
          Đồng đội của bạn đã thảo luận về cách thiết kế API điều khiển từ xa
          …
        </strong>
      </p>

      <p>
        <strong>
          <em>Sue: </em>
        </strong>
        Vâng, chúng ta đã có một thiết kế khác để làm. Quan sát đầu tiên của
        tôi là chúng ta đã có một điều khiển từ xa đơn giản với các nút on và
        off nhưng với một tập hợp các lớp từ nhà cung cấp khá đa dạng.
      </p>
      <p>
        <strong>Mary:</strong> Vâng, tôi nghĩ rằng chúng ta đã thấy một loạt
        các lớp với các phương thức <strong>on() </strong>và 
        <strong>off()</strong> nhưng ở đây chúng ta cũng có các phương thức
        như <strong>dim()</strong>, <strong>setTemperature()</strong>, 
        <strong>setVolume()</strong>, <strong>setDirection()</strong>.&nbsp;
      </p>

      <p>
        <strong>Sue:</strong> Không chỉ vậy, có vẻ như chúng ta có thể có các
        lớp từ nhà cung cấp nhiều&nbsp;hơn trong tương lai với các phương thức
        đa dạng hơn.
      </p>

      <p>
        <strong>Mary:</strong> Tôi nghĩ điều quan trọng là chúng ta nên xem
        điều này như một sự tách biệt các mối quan tâm: điều khiển từ xa nên
        biết cách giải thích các lần nhấn nút và đưa ra yêu cầu, nhưng nó
        không nên biết nhiều về hành động khi nhấn nút đó sẽ làm gì (ví dụ
        điều khiển từ xa không cần phải biết cách bật bồn nước nóng).
      </p>

      <p>
        <strong>Sue:</strong> Nghe có vẻ là thiết kế tốt. Nhưng nếu điều khiển
        từ xa chỉ biết cách thực hiện các yêu cầu chung chung, làm thế nào để
        chúng ta thiết kế điều khiển từ xa để nó có thể gọi một hành động, ví
        dụ, bật đèn hoặc mở cửa nhà để xe?
      </p>

      <p>
        <strong>Mary: </strong>Tôi không chắc chắn, nhưng chúng ta không muốn
        điều khiển từ xa phải biết chi tiết cụ thể của các lớp từ nhà cung
        cấp.
      </p>

      <p>
        <strong>Sue:</strong> Ý bạn là gì?
      </p>

      <p>
        <strong>Mary:</strong> Chúng ta không muốn điều khiển từ xa bao gồm
        một tập hợp các câu lệnh if, giống như:
        <br />
        <strong>
          if slot1 == Light, then light.on(), else if slot1 = Hottub then
          hottub.jetsOn()
        </strong>
        <br />
        Chúng ta biết rằng đó là một thiết kế xấu.
      </p>

      <p>
        <strong>Sue:</strong> Tôi đồng ý. Bất cứ khi nào một lớp từ nhà cung
        cấp mới xuất hiện, chúng ta sẽ phải sửa đổi code, có khả năng tạo ra
        lỗi và nhiều công việc hơn cho chính chúng ta!
      </p>

      <p>
        <strong>Một người khác – Joe:</strong> Này, tôi không thể nghe lỏm
        được. Kể từ 
        <a
          rel="noreferrer noopener"
          aria-label="Chương 1 (mở trong tab mới)"
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          target="_blank"
        >
          Chương 1
        </a>
        , tôi đã tập trung vào các mẫu thiết kế. Có một mẫu hình được gọi là
        “Command Pattern” mà tôi nghĩ có thể giúp được.
      </p>

      <p>
        <strong>Mary:</strong> Vâng? Hãy cho chúng tôi biết thêm đi.
      </p>

      <p>
        <strong>Joe:</strong> Command Pattern cho phép bạn tách rời đối tượng
        yêu cầu hành động khỏi đối tượng thực sự thực hiện hành động. Vì vậy,
        ở đây đối tượng yêu cầu sẽ là remote và đối tượng thực hiện hành động
        sẽ là một instance của một trong các lớp từ nhà cung cấp của bạn.
      </p>

      <p>
        <strong>Sue:</strong> Làm thế nào có thể? Làm thế nào chúng ta có thể
        tách chúng ra? Rốt cuộc, khi tôi nhấn một nút, điều khiển từ xa vẫn
        phải bật đèn.
      </p>
      <p>
        <strong>Joe:</strong> Bạn có thể làm điều đó bằng cách đưa những
        “command object” vào thiết kế của bạn. Một command object đóng gói một
        yêu cầu (request) để làm một cái gì đó (như bật đèn) lên một đối tượng
        cụ thể (giả sử, đối tượng Đèn phòng khách). Vì vậy, nếu chúng ta lưu
        trữ một command object cho mỗi nút, khi nhấn nút, chúng ta yêu cầu
        command object thực hiện một số công việc. Remote không biết gì về
        công việc, nó chỉ chứa một command object biết cách nói chuyện với
        đúng đối tượng để hoàn thành công việc. Vì vậy, bạn sẽ thấy, object
        Remote được tách biệt ra với các object Light!
      </p>

      <p>
        <strong>Sue:</strong> Điều này nghe có vẻ như đã đi đúng hướng.
      </p>

      <p>
        <strong>Mary:</strong> Tuy nhiên, tôi đã có một thời gian khó khăn để
        nghĩ về mẫu này.
      </p>

      <p>
        <strong>Joe:</strong> Cho rằng các vật thể rất tách rời nhau, nó hơi
        khó hình dung mẫu thực sự hoạt động như thế nào.
      </p>

      <p>
        <strong>Mary:</strong> Hãy để tôi xem nếu tôi ít nhất có ý tưởng đúng:
        sử dụng mẫu này, chúng ta có thể tạo API trong đó các command object
        có thể được đưa vào các khe slots, cho phép các đoạn code của remote
        đơn giản hơn. Và, các command object gói gọn cách thực hiện nhiệm vụ
        “tự động hóa nhà” thành một object cần thực hiện.
      </p>
      <p>
        <strong>Joe:</strong> Vâng, tôi nghĩ vậy. Tôi cũng nghĩ rằng mẫu này
        có thể giúp bạn với nút Undo, nhưng tôi chưa nghiên cứu phần đó.
      </p>

      <p>
        <strong>Mary:</strong> Điều này nghe có vẻ rất đáng khích lệ, nhưng
        tôi nghĩ rằng tôi có một chút việc phải làm để thực sự “có” được mẫu.
      </p>

      <p>
        <strong>Sue:</strong> Tôi cũng vậy.
      </p>`,
      },
    ],
  },
  {
    title: `<strong>Trong khi đó, trở lại Diner…,</strong>
    <br />
    <strong>hoặc là,</strong>
    <br />
    <strong>Giới thiệu ngắn gọn về Command Pattern&nbsp;</strong>`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_4.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Như Joe đã nói, hơi khó để hiểu Command Pattern bằng cách chỉ nghe mô
        tả của nó. Nhưng đừng sợ, chúng tôi có vài người bạn sẵn sàng giúp đỡ:
        hãy nhớ đến quán ăn thân thiện của chúng tôi từ 
        <a
          rel="noreferrer noopener"
          aria-label="Chương 1 (mở trong tab mới)"
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          target="_blank"
        >
          Chương 1
        </a>
        ? Đã được một lúc kể từ khi chúng ta đến thăm Alice, Flo và người đầu
        bếp, nhưng chúng tôi có lý do chính đáng để quay trở lại (tốt, ngoài
        thức ăn và cuộc trò chuyện tuyệt vời): thực khách sẽ giúp chúng tôi
        hiểu hơn về mẫu Command.
      </p>

      <p>
        Vì vậy, hãy đi một đường vòng ngắn trở lại quán ăn và nghiên cứu các
        tương tác giữa khách hàng (customer), nhân viên phục vụ (waitress),
        đơn đặt hàng (order) và đầu bếp (cook). Thông qua các tương tác này,
        bạn sẽ hiểu được các đối tượng liên quan đến Command Pattern và cũng
        có cảm giác về cách thức tách rời hoạt động. Sau đó, chúng ta sẽ loại
        bỏ API cũ của remote.
      </p>

      <p>
        <strong>Checking in tại Objectville Diner …</strong>
      </p>

      <p>
        <strong>
          Được rồi, tất cả chúng ta đều biết cách thức hoạt động của Diner
        </strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_5.jpg`),
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
    title: `Hãy nghiên cứu sự tương tác để hiểu Command Pattern…`,
    contents: [
      {
        div: `<p class="has-medium-font-size">
        <strong>
          … Và đưa ra bữa tối này là ở Objectville, hãy nghĩ về các cuộc gọi
          đến Object và Method liên quan!
        </strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_6.jpg`),
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
    title: `Vai trò và trách nhiệm của Objectville Diner`,
    contents: [
      {
        div: `<p>
        <strong>
          Một Order đóng gói một yêu cầu để chuẩn bị một bữa ăn.
        </strong>
      </p>

      <p>
        Hãy nghĩ về Order như một đối tượng, một đối tượng đại diện yêu cầu để
        chuẩn bị một bữa ăn. Giống như bất kỳ đối tượng nào, nó có thể được
        truyền đi các class khác – từ Waitress đến quầy đặt hàng hoặc đến
        người Waitress tiếp theo đảm nhận ca làm việc. Order object có một
        interface chỉ bao gồm một phương thức <strong>orderUp()</strong>, gói
        gọn các hành động cần thiết để chuẩn bị bữa ăn. Nó cũng có một tham
        chiếu đến đối tượng cần chuẩn bị nó (trong trường hợp của chúng tôi là
        đầu bếp, Cook). Nó được gói gọn trong đó Waitress không phải biết
        những gì cần làm trong order hay ngay cả những người đầu bếp; Waitress
        chỉ cần cầm order, đưa qua cửa sổ nhà bếp và gọi “Order
        up!”&nbsp;&nbsp;
      </p>

      <p>
        <strong>
          Công việc của Waitress là lấy Order và gọi phương thức orderUp()
        </strong>
      </p>

      <p>
        Công việc của Waitress rất dễ dàng: nhận order từ khách hàng, sau đó
        đi đến quầy đặt hàng, và gọi phương thức<strong> orderUp()</strong> để
        chuẩn bị bữa ăn. Như chúng ta đã thảo luận, ở Objectville, Waitress
        thực sự không phải là người lo lắng về những gì mà trên order ghi hoặc
        đầu bếp nào sẽ nấu; cô ấy chỉ biết <strong>Order</strong> có một
        phương thức <strong>orderUp()</strong> mà cô ấy có thể gọi để hoàn
        thành công việc.
      </p>

      <p>
        Bây giờ, trong suốt cả ngày, phương thức <strong>TakeOrder()</strong> 
        của Waitress được tham số hóa với các order khác nhau từ các khách
        hàng khác nhau, nhưng điều đó không làm cô ấy bối rối; cô ấy biết tất
        cả các order đều hỗ trợ phương thức <strong>orderUp()</strong> và cô
        ấy có thể gọi <strong>orderUp() </strong>bất cứ khi nào cô ấy cần một
        bữa ăn được chuẩn bị.
      </p>

      <p>
        <strong>
          Đầu bếp (Short-Order Cook) có kiến thức cần thiết để chuẩn bị bữa
          ăn.
        </strong>
      </p>

      <p>
        Short-Order Cook là đối tượng thực sự biết cách chuẩn bị bữa ăn. Khi
        Waitress đã gọi phương thức <strong>orderUp();</strong> Short-Order
        Cook tiếp quản và thực hiện tất cả các method cần thiết để tạo ra bữa
        ăn.
      </p>

      <p>
        Lưu ý Waitress và đầu bếp hoàn toàn tách rời: Waitress có Order gói
        gọn các chi tiết của bữa ăn; cô ấy chỉ cần gọi một phương thức trên
        mỗi Order để chuẩn bị.
      </p>

      <p>
        Tương tự như vậy, Short-Order Cook nhận được danh sách các món ăn từ
        Order; anh ta không bao giờ cần phải liên lạc trực tiếp với Waitress.
      </p>

      <p>
        <strong>Kiên nhẫn, chúng ta đã đến đó…</strong>
      </p>

      <p>
        Hãy nghĩ về Diner như một mô hình cho mẫu thiết kế OO, cho phép chúng
        ta tách một đối tượng ”yêu cầu” (request) hành động khỏi các đối tượng
        receiver sẽ thực hiện các yêu cầu đó. Ví dụ, trong API điều khiển từ
        xa của chúng ta, chúng ta cần tách code được gọi khi nhấn nút từ các
        đối tượng của các lớp nhà cung cấp đặc biệt thực hiện các yêu cầu đó.
        Điều gì nếu mỗi slot của remote giữ một đối tượng như đối tượng Order
        của Diner. Sau đó, khi nhấn nút, chúng ta có thể gọi phương thức tương
        đương của Phương thức “orderUp()” trên đối tượng này và bật đèn mà
        không cần đến remote để biết chi tiết về cách làm cho đèn sáng hoặc
        những đối tượng đang tạo ra chúng xảy ra.
      </p>

      <p>
        Bây giờ, hãy chuyển đổi một chút và lập bản đồ cho tất cả các bữa tối
        ở Objectville Diner với Command Pattern…
      </p>`,
      },
    ],
  },
  {
    title: `Sử dụng sức mạnh bộ não`,
    contents: [
      {
        div: `<p>
        Trước khi chúng ta tiếp tục, hãy dành thời gian nghiên cứu sơ đồ phía
        trên cùng với vai trò và trách nhiệm của Diner cho đến khi bạn nghĩ
        rằng bạn đã xử lý được các đối tượng và mối quan hệ của Objectville
        Diner. Khi bạn đã làm xong việc đó, chúng ta sẽ tiếp tục với Command
        Pattern!
      </p>`,
      },
    ],
  },
  {
    title: `Từ Objectville Diner đến Command Pattern&nbsp;&nbsp;`,
    contents: [
      {
        div: `<p>
        Được rồi, chúng tôi đã dành đủ thời gian ở Objectville Diner để chúng
        tôi biết tất cả các tính cách và trách nhiệm của chúng. Bây giờ chúng
        tôi sẽ làm lại sơ đồ của Objectville Diner để phản ánh Mẫu Command.
        Bạn sẽ thấy rằng tất cả các Object đều giống nhau; chỉ có tên đã thay
        đổi.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_7.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong>
          Dùng não của bạn để nối các đối tượng và phương thức Diner với các
          tên tương ứng của Command Pattern.
        </strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_8.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong>Đáp án:</strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_9.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
    ],
  },
  {
    title: `Command object đầu tiên của chúng ta`,
    contents: [
      {
        div: `<p>
        Có phải đó là khoảng thời gian chúng ta xây dựng command object đầu
        tiên không? Hãy đi tiếp và viết code cho remote. Mặc dù chúng ta chưa
        biết cách thiết kế API điều khiển từ xa, nhưng việc xây dựng một vài
        thứ từ dưới lên có thể giúp chúng ta…
      </p>`,
      },
      {
        p: `<h6><b>IMPLEMENTING COMMAND INTERFACE</b></h6>`,
      },
      {
        div: `<p>
        Điều đầu tiên: tất cả các command objects implements cùng một
        interface, chứa một phương thức. Trong Diner chúng tôi gọi phương thức
        này là <strong>orderUp()</strong>; tuy nhiên, chúng ta thường chỉ sử
        dụng tên <strong>execute().</strong>
      </p>

      <p>Đây là giao diện Command:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_10.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        p: `<h6><b>IMPLEMENTING MỘT COMMAND ĐỂ BẬT ĐÈN</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_11.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Bây giờ, hãy nói rằng bạn muốn implement một command để bật đèn lên.
        Đề cập đến tập hợp các lớp nhà cung cấp của chúng tôi, lớp Light có
        hai phương thức: <strong>on() </strong>và <strong>off()</strong>. Đây
        là cách bạn có thể thực hiện điều này như một command:
        <br />
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_12.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Bây giờ bạn đã có một lớp <strong>LightOnCommand</strong>, hãy để xem
        liệu chúng ta có thể đưa nó vào sử dụng…
      </p>`,
      },
    ],
  },
  {
    title: `Dùng command object `,
    contents: [
      {
        div: `<p>
        Được rồi, hãy làm mọi thứ đơn giản: giả sử chúng ta có một remote chỉ
        với một button và slot tương ứng để giữ một thiết bị để điều khiển:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_13.jpg`),
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
    title: `Tạo một bài test đơn giản để sử dụng Remote Control`,
    contents: [
      {
        div: `<p>
        Ở đây, chỉ cần một chút code để kiểm tra điều khiển từ xa đơn giản.
        Chúng ta hãy xem và chúng tôi sẽ chỉ ra chúng tương ứng với phần nào
        trong Command pattern:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_14.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Được rồi, đã đến lúc bạn thực hiện lớp 
        <strong>GarageDoorOpenCommand</strong>. Đầu tiên, cung cấp code cho
        lớp bên dưới. Bạn sẽ cần sơ đồ lớp <strong>GarageDoor</strong>.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_15.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Bây giờ bạn đã có lớp của mình, output của đoạn code sau là gì? (Gợi
        ý: phương thức <strong>up()</strong> của <strong>GarageDoor</strong> 
        in ra “<em>Garage Door is Open</em>” khi chạy.)
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_16.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: ` <p>
        <strong>Đáp án:</strong>
      </p>
`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_17.jpg`),
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
    title: `Định nghĩa Command Pattern`,
    contents: [
      {
        div: ``,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: ``,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: ``,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: ``,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_.jpg`),
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
    title: ``,
    contents: [
      {
        div: ``,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: ``,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: ``,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: ``,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_.jpg`),
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
    title: '',
    contents: [
      {
        code: {
          src: ``,
          language: 'java',
        },
      },
      {
        p: `<h6><b></b></h6>`,
      },
      {
        p: `<p class="text-center"><small></small></p>`,
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Tham khảo',
    contents: [
      {
        p: `Nguồn bài dịch: <b>NQT-K4DNC</b>
        <br />
        Chỉnh sửa bởi: <b>Tôi học Design pattern</b>`,
      },
    ],
  },
];
