import IContent from 'utils/interface';

export const chapter6: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_1.jpg`),
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
          width: `90%`,
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
    title: `Trong khi đó, trở lại Diner…, hoặc là, Giới thiệu ngắn gọn về Command Pattern>`,
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
    title: `Từ Objectville Diner đến Command Pattern`,
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
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
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
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>Đáp án:</strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_9.jpg`),
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
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>IMPLEMENTING MỘT COMMAND ĐỂ BẬT ĐÈN</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_11.jpg`),
          width: `25%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
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
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
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
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
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
          width: `55%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
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
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: ` <p>
        <strong>Đáp án:</strong>
      </p>`,
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_17.jpg`),
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
    title: `Định nghĩa Command Pattern`,
    contents: [
      {
        div: `<p>
        Bạn đã có thời gian của mình ở Objectville Diner, bạn đã thực hiện một phần
        remote control API và trong quá trình đó, bạn đã có một cái nhìn khá tốt về
        cách các lớp và các đối tượng tương tác trong Command Pattern. Bây giờ chúng
        tôi sẽ định nghĩa Command Pattern và tìm hiểu tất cả các chi tiết.
      </p>
      
      <p>Hãy bắt đầu với định nghĩa chính thức của nó:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_18.png`),
          width: `45%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong>
          <em>
            (Command Pattern đóng gói yêu cầu thành đối tượng độc lập, có thể được sử
            dụng để tham số hóa các đối tượng khác với các yêu cầu khác nhau như log,
            queue, và hỗ trợ undo.)
          </em>
        </strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_19.jpg`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Hãy bước qua điều này. Chúng ta biết rằng một command object đóng gói một yêu
        cầu bằng cách map chúng với một tập hợp các hành động trên một receiver cụ
        thể. Để đạt được điều này, nó đóng gói các hành động và receiver thành một đối
        tượng chỉ một phương thức 
        <strong>execute()</strong>. Khi được gọi, <strong>execute()</strong>  sẽ
        gọi đến phương thức trên receiver để thực hiện hành động. Nhìn từ bên ngoài,
        không có đối tượng nào khác thực sự biết những hành động nào được thực hiện
        trên receiver; chúng chỉ biết rằng nếu chúng gọi phương thức
        <strong>execute()</strong>, request của chúng sẽ được thực hiện.
      </p>
      
      <p>
        Chúng ta cũng đã thấy một vài ví dụ về tham số hóa một đối tượng bằng một
        command. Trở lại quán ăn, Waitress được tham số hóa với nhiều Order trong suốt
        cả ngày. Trong <strong>SimpleRemoteControl</strong>, trước tiên, chúng tôi đã
        load vào slot button bằng một “light on” command và sau đó thay thế nó bằng
        một lệnh “garage door open”. Giống như Waitress, remote slot của bạn không
        quan tâm command object nào được đặt vào, miễn là nó implements giao diện
        Command.
      </p>
      <p>
        Những gì chúng ta còn chưa gặp phải là sử dụng các command để cài đặt queues,
        logs và hỗ trợ undo các hành động. Đừng lo lắng, đó là những phần mở rộng khá
        đơn giản của Command Pattern cơ bản và chúng ta sẽ sớm nhận được chúng. Chúng
        ta cũng có thể dễ dàng hỗ trợ những gì mà người ta gọi là Meta Command Pattern
        khi chúng ta có những điều cơ bản. Meta Command Pattern cho phép bạn tạo các
        macro command để bạn có thể thực thi nhiều command cùng một lúc.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_20.jpg`),
          width: `45%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Định nghĩa Command Pattern: Sơ đồ lớp`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_21.jpg`),
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
    title: `Sử dụng sức mạnh bộ não`,
    contents: [
      {
        div: `<p>
        <strong>
          Làm thế nào để thiết kế Command Pattern hỗ trợ việc tách invoker và
          receiver?
        </strong>
      </p>
      
      <p>
        <strong>Sue: </strong>Được rồi, tôi nghĩ rằng bây giờ ta đã có một cái nhìn
        tốt về Command Pattern. Joe thật&nbsp; tuyệt vời, tôi nghĩ chúng ta sẽ trông
        giống như những siêu sao sau khi hoàn thành API remote.
      </p>
      
      <p><strong>Mary:</strong> Tôi cũng vậy. Vì vậy, chúng ta bắt đầu từ đâu?</p>
      
      <p>
        <strong>Sue:</strong> Giống như chúng ta đã làm trong 
        <strong>SimpleRemote</strong>, chúng ta cần cung cấp một cách để gán command
        cho các slots. Trong trường hợp của chúng ta, chúng ta có 7 slots, mỗi slots
        có một nút “on” và “off ”. Vì vậy, chúng ta có thể gán các command cho remote
        như thế này:
      </p>`,
      },
      {
        code: {
          src: `onCommands[0]  = onCommand;
offCommands[0] = offCommand;`,
          language: 'java',
        },
      },
      {
        div: `<p>
        <strong>Mary:</strong> Điều đó có ý nghĩa, ngoại trừ các Light objects. Làm
        thế nào để điều khiển từ xa biết đèn của phòng khách hay đèn của nhà bếp?
      </p>
      
      <p>
        <strong>Sue:</strong> Ah, chỉ vậy à, không thành vấn đề! Điều khiển từ xa
        không biết gì ngoài cách gọi <strong>execute()</strong> trên command object
        tương ứng khi nhấn nút.
      </p>
      
      <p>
        <strong>Mary:</strong> Vâng, tôi đã hiểu điều đó, nhưng trong quá trình thực
        hiện, làm thế nào để chúng ta đảm bảo đúng đối tượng đang bật và tắt đúng
        thiết bị?
      </p>
      
      <p>
        <strong>Sue:</strong> Khi chúng ta tạo các command được load vào điều khiển từ
        xa, chúng ta tạo một <strong>LightCommand</strong> được gắn vào đối tượng
        Living Room Light và một command khác được gắn với đối tượng Kitchen Light.
        Hãy nhớ rằng, receiver bị ràng buộc với command mà nó đóng gói. Vì vậy, tại
        thời điểm nhấn nút, không ai quan tâm đến light của phòng nào, điều đúng sẽ
        xảy ra khi phương thức  <strong>execute() </strong>được gọi.
      </p>
      
      <p>
        <strong>Mary:</strong> Tôi nghĩ rằng tôi đã hiểu được nó. Hãy thực hiện chương
        trình remote và tôi nghĩ điều này sẽ rõ ràng hơn!
      </p>
      
      <p><strong>Sue: </strong>Nghe hay đấy. Bắt đầu thôi…</p>
      `,
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Gán Command vào slot `,
    contents: [
      {
        div: `<p>
        Vì vậy, chúng ta có một kế hoạch: Chúng ta sẽ gán mỗi slot của điều khiển từ
        xa cho một command. Điều này làm cho remote sẽ điều khiển invoker của chúng
        ta. Khi nhấn nút, phương thức 
        <strong>execute() </strong>sẽ được gọi trên command tương ứng, dẫn đến các
        hành động sẽ được gọi trên receiver (như đèn, quạt trần, stereos).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_22.jpg`),
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
    title: `Implementing Remote Control`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_23.jpg`),
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
    title: `Cài đặt Command Pattern`,
    contents: [
      {
        div: `<p>
        Chà, chúng tôi đã bắt đầu thực hiện <strong>LightOnCommand</strong>  cho
        <strong>SimpleRemoteControl</strong>. Chúng ta có thể đặt code tương tự vào
        đây và mọi thứ hoạt động. Các command “Off” không khác nhau; trong thực tế,
        <strong>LightOffCommand</strong> trông như thế này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_24.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_25.jpg`),
          width: `25%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Hãy thử một cái gì đó thử thách hơn một chút; Làm thế nào về việc viết command
        on và off cho Stereo? Được rồi, off rất dễ, chúng ta chỉ cần liên kết phương
        thức Stereo với phương thức <strong>off()</strong>  trong
        <strong>StereoOffCommand</strong>. On thì&nbsp; phức tạp hơn một chút; hãy nói
        rằng chúng tôi muốn viết một 
        <strong>StereoOnWithCDCommand</strong>…<br />
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_26.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Không tệ lắm. Hãy xem phần còn lại của các lớp từ nhà cung cấp; bây giờ, bạn
        chắc chắn có thể “hạ gục” phần còn lại của các lớp Command mà chúng ta cần.
      </p>`,
      },
    ],
  },
  {
    title: `Đặt Remote Control đúng nơi của nó`,
    contents: [
      {
        div: `<p>
        Công việc của chúng ta với điều khiển từ xa được thực hiện khá nhiều; tất cả
        những gì chúng ta cần làm là chạy một số thử nghiệm và tập hợp một số tài liệu
        để mô tả API. Home Automatic hay Bust, Inc. chắc chắn sẽ rất ấn tượng, bạn có
        nghĩ vậy không? Chúng tôi đã quản lý để đưa ra một thiết kế sẽ cho phép họ sản
        xuất một cái remote dễ bảo trì và họ sẽ không gặp khó khăn gì trong việc
        thuyết phục các nhà cung cấp viết một số lớp command đơn giản trong tương lai
        vì họ rất thích sự dễ viết.
      </p>
      
      <p>Hãy thử nghiệm code này!</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_27.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_28.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>
          Đợi một chút, cái gì là NoCommand được load trong các slot từ 4 đến 6?&nbsp;
        </strong>
      </p>
      
      <p>
        Quan sát tốt! Chúng tôi đã lén đặt thêm một chút dòng lệnh. Trong điều khiển
        từ xa, chúng tôi đã không muốn đặt câu if xem command có được load mỗi lần
        chúng tôi tham chiếu một slot không. Chẳng hạn, trong phương thức
        <strong>onButtonWasPushed()</strong>, chúng ta sẽ cần code như thế này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_29.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Vì vậy, làm thế nào để chúng ta không cần đặt câu lệnh if? Implements một
        command mà không cần kiểm tra!
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_30.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Sau đó, trong constructor <strong>RemoteControl</strong> của bạn, chúng tôi
        gán cho mọi slot một đối tượng <strong>NoCommand </strong>
        theo mặc định và chúng tôi biết rằng chúng tôi sẽ luôn có một command để gọi
        trong mỗi slot.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_31.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Vì vậy, trong output của lần chạy thử của chúng tôi, bạn sẽ thấy vài slot chưa
        được gán command, ngoài đối tượng 
        <strong>NoCommand </strong>mặc định mà chúng tôi đã gán khi chúng tôi tạo
        <strong>RemoteControl</strong>.
      </p>
      
      <p>
        Đối tượng <strong>NoCommand</strong> là một ví dụ về null object. Một 
        <strong>Null object</strong> rất hữu ích khi bạn không có một đối tượng có ý
        nghĩa để return và bạn muốn loại bỏ trách nhiệm xử lý kiểm tra null khỏi
        client. Ví dụ, trong Remote control của chúng tôi, chúng tôi không có một đối
        tượng có ý nghĩa để gán cho những slot chưa có thiết bị kết nối vào, vì vậy
        chúng tôi đã cung cấp một đối tượng  <strong>NoCommand</strong> hoạt động
        như một thay thế và không làm gì khi phương thức
        <strong>execute()</strong> của nó được gọi.
      </p>
      
      <p>
        Bạn có thể tìm thấy cách sử dụng cho các <strong>Null Objects</strong> 
        kết hợp với nhiều Mẫu thiết kế và đôi khi bạn thậm chí còn thấy 
        <strong>Null Object</strong> được liệt kê dưới dạng là một Mẫu thiết kế cụ
        thể.
      </p>`,
      },
    ],
  },
  {
    title: `Đã đến lúc viết tài liệu…`,
    contents: [
      {
        div: `<p>
        <strong>
          <em> “Thiết kế Remote Control API cho Home Automation or Bust, Inc., </em>
        </strong>
      </p>
      
      <p>
        <em>
          Chúng tôi hân hạnh giới thiệu với bạn giao diện lập trình ứng dụng và thiết
          kế sau đây cho Home Automation Remote Control của bạn. Mục tiêu thiết kế
          chính của chúng tôi là giữ cho code điều khiển từ xa càng đơn giản càng tốt
          để nó không yêu cầu thay đổi khi các lớp nhà cung cấp mới được sản xuất.
          Cuối cùng, chúng tôi đã sử dụng Command Pattern để phân tách một cách hợp lý
          lớp RemoteControl khỏi các lớp nhà cung cấp. Chúng tôi tin rằng điều này sẽ
          giảm chi phí sản xuất điều khiển từ xa cũng như giảm đáng kể chi phí bảo trì
          liên tục của bạn.
        </em>
      </p>
      
      <p>
        <em> Sơ đồ lớp sau đây cung cấp tổng quan về thiết kế của chúng tôi: </em>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_32.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>
          <em>
            Làm tốt lắm; Có vẻ như bạn đã đưa ra một thiết kế tuyệt vời, nhưng bạn có
            quên một điều mà khách hàng yêu cầu không? NÚT UNDO !!!!
          </em>
        </strong>
      </p>
      
      <p>
        Rất tiếc! Chúng tôi gần như đã quên… may mắn thay, một khi chúng tôi có các
        lớp Command cơ bản, undo rất dễ dàng để thêm vào. Hãy thêm undo các lệnh của
        chúng tôi và vào điều khiển từ xa…
      </p>`,
      },
    ],
  },
  {
    title: `Chúng ta đang làm gì?`,
    contents: [
      {
        div: `<p>
        Được rồi, chúng ta cần thêm chức năng để hỗ trợ nút undo trên điều khiển từ
        xa. Nó hoạt động như thế này: giả sử Đèn phòng khách tắt và bạn nhấn nút bật
        trên điều khiển từ xa. Rõ ràng là đèn bật sáng. Bây giờ nếu bạn nhấn nút undo
        thì hành động cuối cùng sẽ bị đảo ngược – trong trường hợp này đèn sẽ tắt.
        Trước khi chúng ta đi vào các ví dụ phức tạp hơn, hãy để đối tượng Đèn hoạt
        động với nút undo:
      </p>
      
      <p>
        1. Khi các lệnh hỗ trợ undo, chúng có phương thức 
        <strong>undo()</strong> phản chiếu phương thức 
        <strong>execute()</strong>. Bất cứ điều gì <strong>execute()</strong> 
        cuối cùng đã làm, <strong>undo()</strong> sẽ đảo ngược chúng. Vì vậy, trước
        khi chúng ta có thể thêm chức năng undo vào các command của mình, chúng ta cần
        thêm một phương thức <strong>undo()</strong> vào giao diện
        <strong>Command</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_33.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Điều đó đã đủ đơn giản. Bây giờ, hãy đi vào Light command và thực hiện phương
        thức <strong>undo()</strong>.
      </p>
      
      <p>
        2. Hãy bắt đầu với <strong>LightOnCommand</strong>: nếu phương thức 
        <strong> <em>execute()</em> </strong>  của&nbsp;
        <strong>LightOnCommand </strong>được gọi, thì phương thức 
        <strong> <em>on()</em> </strong>  được gọi lần cuối. Chúng ta biết rằng{'
        '} <strong> <em>undo()</em> </strong>  cần phải làm ngược lại điều này
        bằng cách gọi phương thức 
        <strong>
          <em>off()</em>
        </strong>
        .
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_34.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Bây giờ cho <strong>LightOffCommand</strong>. Ở đây, phương thức 
        <strong> <em>undo()</em> </strong>  chỉ cần gọi phương thức 
        <strong> <em>on()</em> </strong>  của object <strong>Light</strong>.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_35.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Điều này có thể dễ dàng hơn không? Được rồi, chúng ta chưa hoàn thành; chúng
        ta cần hỗ trợ một chút vào Điều khiển từ xa để xử lý việc theo dõi nút cuối
        cùng được nhấn và nút undo được nhấn.
      </p>
      
      <p>
        3. Để thêm hỗ trợ cho nút undo, chúng ta chỉ phải thực hiện một vài thay đổi
        nhỏ cho lớp Remote Control. Ở đây, cách thức mà chúng tôi sẽ thực hiện nó:
        chúng tôi sẽ thêm một biến đối tượng mới để theo dõi command cuối cùng được
        gọi; sau đó, bất cứ khi nào nhấn nút undo, chúng tôi sẽ truy xuất command đó
        và gọi phương thức 
        <strong> <em>undo()</em> </strong>  của nó.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_36.png`),
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
    title: `Ứng dụng Command Pattern: nút Undo!`,
    contents: [
      {
        div: `<p>Được rồi, hãy test lại một chút để kiểm tra nút undo:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_37.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>Và đây, kết quả kiểm tra…</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_38.png`),
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
    title: `Sử dụng state để implement Undo`,
    contents: [
      {
        div: `<p>
        Được rồi, thực hiện Undo trên lớp Light là hướng dẫn nhưng hơi quá dễ dàng.
        Thông thường, chúng ta cần quản lý một chút trạng thái (state) để thực hiện
        undo. Hãy thử một cái gì đó thú vị hơn một chút, như lớp Quạt trần
        (CeilingFan) từ các lớp nhà cung cấp. Quạt trần cho phép một số tốc độ quạt
        (speed) được đặt cùng với phương thức off.
      </p>
      
      <p>Đây là code của <strong>CeilingFan</strong>:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_39.jpg`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_40.jpg`),
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
    title: `Thêm Undo vào CeilingFan Command `,
    contents: [
      {
        div: `<p>
        Bây giờ hãy giải quyết việc thêm undo vào các command 
        <strong>CeilingFan </strong>khác nhau. Để làm như vậy, chúng ta cần theo dõi
        cài đặt tốc độ cuối cùng của quạt và, nếu phương thức 
        <strong>undo()</strong> được gọi, hãy khôi phục quạt về tốc độ trước khi tắt.
        Đây là code cho lớp <strong>CeilingFanHighCommand</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_41.jpg`),
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
    title: `Sử dụng sức mạnh bộ não bạn`,
    contents: [
      {
        div: `<p>
        Chúng tôi đã có thêm ba <strong>CellingFan</strong> command: 
        <em>low</em>, <em>medium</em> và <em>off</em> làm thế nào để tất cả chúng được
        thực hiện?
      </p>`,
      },
    ],
  },
  {
    title: `Hãy sẵn sàng để test CellingFan`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_42.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Thời gian để load lên điều khiển từ xa của chúng ta với các 
        <strong>CellingFan </strong>command. Chúng tôi sẽ load slot 0 cho quạt với tốc
        độ <em>medium</em> và slot 1 với mức <em>high</em>. Cả hai nút off tương ứng
        sẽ giữ lệnh tắt quạt trần.
      </p>
      
      <p>Đây là kịch bản thử nghiệm của chúng tôi:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_43.jpg`),
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
    title: `Test lớp Celling Fan của chúng ta`,
    contents: [
      {
        div: `<p>
        Được rồi, hãy khởi động remote, load nó bằng các command và nhấn một số nút!
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_44.jpg`),
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
    title: `Mọi điều khiển từ xa đều cần một Chế độ Party!`,
    contents: [
      {
        div: `<p>
        Điều gì nếu bạn chỉ cần nhấn một nút và đèn sẽ mờ, stereo và TV được bật và
        play DVD, bồn nước nóng được bật lên?
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_45.jpg`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_46.jpg`),
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
    title: `Ứng dụng Command Pattern: Macro command`,
    contents: [
      {
        div: `<p>Hãy xem qua cách chúng tôi sử macro command:</p>

        <p>
          1. Đầu tiên chúng ta tạo tập hợp các command mà chúng ta muốn đưa vào macro:
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_47.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>
          Đến lượt bạn: Chúng ta cũng sẽ cần các command cho các nút off, viết code để
          tạo các nút ở đây
        </strong>
      </p>
      
      <p>
        <strong>Đáp án:</strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_48.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        2. Tiếp theo, chúng ta tạo hai mảng, một cho các lệnh 
        <strong>On </strong>và một cho <strong>Off </strong>và load chúng với các
        command tương ứng:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_49.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        3. Sau đó, chúng ta gán <strong>MacroCommand</strong> cho một button như chúng
        ta đã làm:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_50.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>4. Cuối cùng, chúng ta chỉ cần nhấn một số nút và xem điều này hoạt động.</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_51.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>
          Bài tập: Điều duy nhất MacroCommand của chúng ta thiếu là chức năng undo.
          Khi nhấn nút undo sau một macro command, tất cả các command được gọi trong
          macro phải undo các hành động trước đó của chúng. Đây là code cho
          MacroCommand; tiếp tục và thực hiện phương thức undo():
        </strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_52.jpg`),
          width: `70%`,
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
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_53.jpg`),
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
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi: </strong>Tôi luôn cần một receiver phải không? Tại sao command
        object không thể cài đặt phần chi tiết của 
        <strong> <em>execute()</em> </strong>  method?
      </p>
      
      <p>
        <strong>Trả lời: </strong>Nói chung, chúng tôi cố gắng cho các command
        objects, chỉ cần implement một hành động trên receiver; tuy nhiên, có rất
        nhiều ví dụ về các đối tượng command “thông minh” thực hiện hầu hết, nếu không
        phải là tất cả, logic cần thiết để thực hiện một yêu cầu. Chắc chắn bạn có thể
        làm điều này; chỉ cần lưu ý rằng bạn sẽ không còn mức độ tách rời giữa invoker
        và receiver, bạn cũng không thể tham số hóa các command của bạn với receiver.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Làm thế nào tôi có thể thực hiện một lịch sử hoạt động
        undo? Nói cách khác, tôi muốn có thể nhấn nút undo nhiều lần.
      </p>
      
      <p>
        <strong>Trả lời: </strong>Câu hỏi tuyệt vời! Nó thực sự rất dễ dàng; thay vì
        chỉ giữ một tham chiếu đến Command cuối cùng được thực thi, bạn giữ một ngăn
        xếp Stack các command trước đó. Sau đó, bất cứ khi nào undo được nhấn, invoker
        của bạn sẽ Pop (lấy) command đầu tiên ra khỏi stack và gọi phương thức
        <strong>undo() </strong>của command đó.
      </p>
      
      <p>
        <strong>Hỏi: </strong>Tôi có thể thực hiện “Party Mode” như một command bằng
        cách tạo <strong>PartyCommand</strong> và đặt lệnh gọi đến các phương thức
        <strong>execute() </strong>của Command khác trong phương thức
        <strong>execute()</strong> của  <strong>PartyCommand</strong> không?
      </p>
      
      <p>
        <strong>Trả lời: </strong>Bạn có thể; tuy nhiên, chúng sẽ trở thành “code
        cứng” trong <strong>PartyCommand</strong>. Đó là một rắc rối lớn? Với
        <strong>MacroCommand</strong>, bạn có thể quyết định các 
        <strong>Command </strong>nào bạn muốn vào  <strong>PartyCommand</strong>,
        do đó bạn có thể linh hoạt hơn khi sử dụng <strong>MacroCommand</strong>. Nhìn
        chung,  <strong>MacroCommand</strong> là một giải pháp an toàn hơn và yêu
        cầu ít code mới hơn.
      </p>`,
      },
    ],
  },
  {
    title: `Ứng dụng Command Pattern: Hàng đợi các request`,
    contents: [
      {
        div: `<p>
        Command cho chúng ta một cách để đóng gói một phần xử lý (một receiver và một
        tập hợp các hành động) và chuyển nó đi như một đối tượng first-class. Bây giờ,
        việc xử lí có thể được invoked sau đó khi một số ứng dụng client tạo đối
        Command. Trong thực tế, nó thậm chí có thể được gọi bởi một thread khác. Chúng
        ta có thể lấy kịch bản này và áp dụng nó cho nhiều ứng dụng hữu ích như
        schedulers (đặt lịch chạy), thread pools và&nbsp; job queues.
      </p>
      
      <p>
        Tưởng tượng một hàng đợi công việc: bạn thêm các command vào hàng đợi ở một
        đầu và ở đầu kia là một nhóm các thread. Các thread sẽ chạy đoạn script sau:
        loại bỏ một command khỏi hàng đợi, gọi phương thức 
        <strong>execute()</strong> của nó, đợi cuộc gọi kết thúc, sau đó loại bỏ đối
        tượng command đó và truy xuất một command mới.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_54.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Lưu ý rằng các lớp hàng đợi công việc được tách rời hoàn toàn khỏi các đối
        tượng đang thực hiện xử lí. Một phút một Subject có thể tính toán một tính
        toán, và phút tiếp theo nó có thể lấy một cái gì đó từ network… Các đối tượng
        hàng đợi công việc không quan tâm; chúng chỉ lấy các command và gọi
        <strong>execute().</strong> Tương tự, miễn là bạn đặt các đối tượng vào hàng
        đợi thực hiện Command Pattern, phương thức <strong>execute()</strong> của bạn
        sẽ được gọi khi có một thread.
      </p>`,
      },
    ],
  },
  {
    title: `Sử dụng sức mạnh bộ não`,
    contents: [
      {
        div: `<p>
        Làm thế nào một web server có thể tận dụng dụng một hàng đợi như vậy? Bạn có
        thể nghĩ đến một ứng dụng nào khác không?
      </p>`,
      },
    ],
  },
  {
    title: `Ứng dụng Command Pattern: logging request`,
    contents: [
      {
        div: `<p>
        Ngữ nghĩa của một số ứng dụng yêu cầu chúng tôi log tất cả các hành động và có
        thể phục hồi sau khi gặp sự cố bằng cách khôi phục các hành động đó. Mẫu
        Command có thể hỗ trợ các ngữ nghĩa này với việc bổ sung hai phương thức:
        <strong>store() </strong>và <strong>load()</strong>. Trong Java, chúng ta có
        thể sử dụng object serialization (tuần tự hóa) để thực hiện các phương thức
        này, nhưng hãy cẩn thận khi sử dụng serialization để bảo trì.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_55.jpg`),
          width: `25%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Cái này hoạt động ra sao? Khi chúng tôi thực thi các command, chúng tôi lưu
        trữ (store) một lịch sử của chúng trên đĩa. Khi xảy ra sự cố, chúng ta load
        lại các đối tượng command và gọi các phương thức 
        <strong>execute() </strong>của chúng theo nhóm và theo thứ tự.
      </p>
      
      <p>
        Bây giờ, loại log này sẽ không có ý nghĩa đối với một remote control; tuy
        nhiên, có nhiều ứng dụng gọi các hành động trên các cấu trúc dữ liệu lớn có
        thể được lưu nhanh chóng mỗi khi có thay đổi. Bằng cách sử dụng log, chúng tôi
        có thể lưu tất cả các hoạt động kể từ thời điểm kiểm tra cuối cùng (last check
        point) và nếu có lỗi hệ thống, hãy áp dụng các hoạt động đó cho checkpoint của
        chúng tôi. 
      </p>
      
      <p>
        Lấy ví dụ, một ứng dụng bảng tính (spreadsheet, như excel): chúng tôi có thể
        muốn thực hiện khôi phục lỗi của mình bằng cách ghi log các hành động trên
        bảng tính thay vì viết một bản sao của bảng tính vào đĩa mỗi khi có thay đổi.
        Trong các ứng dụng nâng cao hơn, các kỹ thuật này có thể được mở rộng để áp
        dụng cho các tập hợp hoạt động theo transactional để tất cả các hoạt động sẽ
        hoặc hoàn thành hoặc không có thao tác nào thực hiện (tìm hiểu 
        <a
          rel="noreferrer noopener"
          aria-label="transaction database (mở trong tab mới)"
          href="https://vi.wikipedia.org/wiki/Giao_d%E1%BB%8Bch_c%C6%A1_s%E1%BB%9F_d%E1%BB%AF_li%E1%BB%87u"
          target="_blank"
        >
          transaction database
        </a>
        ).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-7_56.jpg`),
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
          Command Pattern tách riêng một đối tượng, và đưa ra yêu cầu tới đối tượng
          biết cách thực hiện nó.
        </li>
        <li>
          Một đối tượng <strong>Command </strong>nằm ở trung tâm của việc tách rời này
          và đóng gói một receiver bằng một hành động (hoặc tập hợp các hành động).
        </li>
        <li>
          Một invoker đưa ra yêu cầu của một đối tượng 
          <strong>Command </strong>bằng cách gọi phương thức 
          <strong>execute()</strong> của nó, gọi các hành động đó trên receiver.
        </li>
        <li>
          <strong>Invoker </strong>có thể được tham số hóa bằng các 
          <strong>Command</strong>, thậm chí là gán động khi chạy.
        </li>
        <li>
          Command có thể hỗ trợ undo bằng cách thực hiện một phương thức undo khôi
          phục đối tượng về trạng thái trước đó trước khi phương thức 
          <strong>execute()</strong> được gọi lần cuối.
        </li>
        <li>
          <strong>Macro Commands</strong> là một phần mở rộng đơn giản của Command cho
          phép nhiều command được gọi. Tương tự, 
          <strong>Macro Commands</strong> có thể dễ dàng hỗ trợ 
          <strong>undo()</strong>.
        </li>
        <li>
          Trong thực tế, không có gì lạ khi các đối tượng “smart” Command có thể tự
          thực hiện yêu cầu thay vì ủy thác cho receiver.
        </li>
        <li>
          <strong>Command </strong>cũng có thể được sử dụng để thực hiện các hệ
          thống 
          <strong>
            <em>logging </em>
          </strong>
          và 
          <strong>
            <em>transactional</em>
          </strong>
          .
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
          href="https://drive.google.com/file/d/14lMY_ot5FHgX7aOR9YiVjR2iD1DdJ6hZ/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          aria-label=" (mở trong tab mới)"
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
