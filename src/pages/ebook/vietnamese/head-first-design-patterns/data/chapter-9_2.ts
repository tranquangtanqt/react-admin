import IContent from 'utils/interface';

export const chapter9_2: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p>
        Mời bạn đọc qua bài viết
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/11"
          >Iterator Pattern và Composite Pattern (Phần 1)</a
        >. Ở chương này, bạn sẽ tìm hiểu qua <strong>Composite Pattern</strong>:
      </p>
      
      <ul>
        <li>
          <strong>Composite Pattern</strong> là mẫu cho phép kết hợp các đối tượng
          thành các cấu trúc cây để thể hiện hệ thống phân cấp.
        </li>
        <li>
          <strong>Composite Pattern</strong> cho phép client xử lý các đối tượng đơn
          và các composite con theo cùng một kiểu.
        </li>
      </ul>`,
      },
    ],
  },
  {
    title: `Ngay khi chúng tôi nghĩ rằng nó an toàn…`,
    contents: [
      {
        div: `<p>Bây giờ họ muốn thêm một menu con, món tráng miệng (DessertMenu).</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_1.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Được rồi, bây giờ thì sao? Bây giờ chúng tôi phải hỗ trợ không chỉ nhiều menu,
        mà cả các menu con trong menu.
      </p>
      
      <p>
        Sẽ thật tuyệt nếu chúng ta có thể biến DessertMenu thành một phần của
        DinerMenu, nhưng khi đó chúng sẽ không hoạt động giống như code hiện tại.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_2.png`),
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
    title: `Chúng ta cần gì?`,
    contents: [
      {
        div: `<p>
        Đã đến lúc đưa ra quyết định để làm lại thành một thứ đủ chung để làm việc
        được trên tất cả các menu (cả menu phụ – sub menu). Đúng vậy, chúng tôi sẽ nói
        với các đầu bếp rằng đã đến lúc chúng tôi phải làm lại thực đơn của họ.
      </p>
      
      <p>
        Thực tế là chúng tôi đã đạt đến một mức độ phức tạp đến mức nếu bây giờ chúng
        tôi không làm lại thiết kế, chúng tôi sẽ không bao giờ có một thiết kế có thể
        phù hợp với việc kết hợp với <strong>DessertMenu</strong>.
      </p>
      
      <p>Vì vậy, chúng ta thực sự cần thiết kế mới những gì?</p>
      
      <ul>
        <li>
          Chúng ta cần một số loại cấu trúc cây sẽ chứa các <strong>menu</strong>,
          <strong>menu con</strong> và các <strong>menu item</strong>.
        </li>
        <li>
          Chúng ta cần đảm bảo rằng chúng ta có một cách để duyệt qua các phần tử
          trong mỗi menu ít nhất là thuận tiện như những gì chúng ta đang làm bây giờ
          với các iterator.
        </li>
        <li>
          Chúng ta có thể cần phải duyệt qua các phần tử một cách linh hoạt hơn. Chẳng
          hạn, chúng ta có thể chỉ cần duyệt trên dessert menu của Diner, hoặc chúng
          ta có thể cần duyệt toàn bộ Diner menu, bao gồm cả dessert submenu.
        </li>
      </ul>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_3.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_4.jpg`),
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
        Bạn sẽ xử lý vấn đề mới này như thế nào theo yêu cầu thiết kế của chúng tôi?
        Hãy suy nghĩ về nó trước khi đọc tiếp.
      </p>`,
      },
    ],
  },
  {
    title: `Định nghĩa Composite Pattern`,
    contents: [
      {
        div: `<p>
        Đúng vậy, chúng tôi sẽ giới thiệu một mẫu thiết kế khác để giải quyết vấn đề
        này. Chúng tôi đã không từ bỏ Iterator – nó vẫn sẽ là một phần của giải pháp
        của chúng tôi – tuy nhiên, vấn đề quản lý các menu đã diễn ra ở một khía cạnh
        mới mà Iterator không giải quyết được. Vì vậy, chúng tôi sẽ lùi lại và giải
        quyết nó với <strong>Composite Pattern</strong>.
      </p>
      
      <p>
        Chúng ta có định nghĩa <strong>Composite Pattern</strong> chính thức bây giờ:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_5.jpg`),
          width: `45%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong
          ><em
            >(Composite Pattern cho phép bạn kết hợp các đối tượng thành các cấu trúc
            cây để thể hiện hệ thống phân cấp toàn bộ. Composite cho phép client xử lý
            các đối tượng riêng lẻ và các thành phần của các đối tượng một cách thống
            nhất)</em
          ></strong
        >
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_6.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Hãy suy nghĩ về điều này trong các menu của chúng ta: mẫu này cho chúng ta một
        cách để tạo ra một cấu trúc cây có thể xử lý một nhóm các menu và các menu
        item lồng nhau trong cùng một cấu trúc. Bằng cách đặt các menu và các item
        trong cùng một cấu trúc, chúng tôi tạo ra một hệ thống phân cấp toàn bộ; nghĩa
        là, một cây các đối tượng được tạo thành từ các thành phần (menu và các menu
        item) nhưng có thể được coi như một tổng thể, giống như một menu lớn.
      </p>
      
      <p>
        Khi chúng tôi có menu của mình, chúng tôi có thể sử dụng mẫu này để xử lý
        thống nhất các đối tượng và thành phần riêng lẻ. Điều đó có nghĩa là gì? Điều
        đó có nghĩa là nếu chúng ta có một cấu trúc cây gồm các menu, menu con và có
        lẽ là các menu con của menu con cùng với các menu item, khi đó bất kỳ menu nào
        cũng là một “composition” vì nó có thể chứa cả các menu khác và các menu item.
        Các đối tượng riêng lẻ chỉ là các menu item – chúng không lưu giữ các đối
        tượng khác. Như bạn thấy, sử dụng một thiết kế tuân theo Composite Pattern sẽ
        cho phép chúng ta viết một số code đơn giản có thể áp dụng cùng một thao tác
        (như in!) Trên toàn bộ cấu trúc menu.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_7.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_8.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Composite Pattern cho phép chúng ta xây dựng các cấu trúc của các đối tượng ở
        dạng cây có chứa cả các tập hợp của các đối tượng và các đối tượng riêng lẻ
        dưới dạng các nút.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_9.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Sử dụng một cấu trúc composite, chúng ta có thể áp dụng các hoạt động tương tự
        trên cả đối tượng composite và các đối tượng riêng lẻ. Nói cách khác, trong
        hầu hết các trường hợp, chúng ta có thể bỏ qua sự khác biệt giữa các composite
        của các đối tượng và các đối tượng riêng lẻ.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_10.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_11.jpg`),
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
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p><strong>Hỏi: </strong>Component, Composite, Trees? Tôi hơi bối rối.</p>

        <p>
          <strong>Đáp:</strong> Một Composite chứa các Component. Component chứa hai
          loại: composite&nbsp;và các nút lá. Nghe như đệ quy? Chính nó. Một composite
          chứa một tập hợp các nút con, những nút con đó có thể là composite khác hoặc
          các nút lá.
        </p>
        
        <p>
          Khi bạn tổ chức dữ liệu theo cách này, bạn hoàn thành với cấu trúc cây (thực
          ra là cấu trúc cây lộn ngược) với một composite ở gốc và các nhánh của
          composite mọc lên đến các nút lá.
        </p>
        
        <p>
          <strong>Hỏi:</strong> Làm thế nào điều này liên quan đến các
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/11"
            >iterator</a
          >?
        </p>
        <p>
          <strong>Đáp:</strong> Hãy nhớ rằng, chúng tôi đã thực hiện một cách tiếp cận
          mới. Chúng tôi sẽ thực hiện lại các menu với một giải pháp mới: Composite
          Pattern. Vì vậy, đừng tìm kiếm một số chuyển đổi từ một
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/11"
            >Iterator </a
          >sang một Composite. “Liên quan đến các iterator” có nghĩa là: hai mẫu này kết
          hợp với nhau. Bạn sẽ sớm thấy rằng chúng ta có thể sử dụng các
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/11"
            >iterator </a
          >theo một vài cách trong việc thực hiện composite.
        </p>
        `,
      },
    ],
  },
  {
    title: `Thiết kế Menu với Composite pattern`,
    contents: [
      {
        div: `<p>
        Vì vậy, làm thế nào để chúng tôi áp dụng
        <strong>Composite Pattern</strong> vào các menu của chúng tôi? Để bắt đầu,
        chúng ta cần tạo một giao diện component; điều này hoạt động như giao diện
        chung cho cả menu và các menu item và cho phép chúng ta xử lý chúng đồng nhất.
        Nói cách khác, chúng ta có thể gọi cùng một phương thức tương tự trên cả các
        menu và các menu item.
      </p>
      
      <p>
        Bây giờ, một số phương thức có thể <strong>không có ý nghĩa</strong> khi gọi
        trên một menu item hoặc một menu, nhưng chúng ta có thể đối phó với điều đó,
        và chúng ta sẽ làm trong chốc lát. Nhưng bây giờ, hãy xem qua một bản phác
        thảo về cách các menu sẽ chuyển thành cấu trúc
        <strong>Composite Pattern</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_12.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>CÀI ĐẶT MENU COMPONENT</b></h6>`,
      },
      {
        div: `<p>
        Được rồi, chúng tôi sẽ bắt đầu với lớp trừu tượng
        <strong>MenuComponent</strong>; hãy nhớ rằng, vai trò của menu component là
        cung cấp interface cho các nút lá và các nút composite. Bây giờ bạn có thể
        hỏi, “không phải <strong>MenuComponent</strong> đóng hai vai trò sao?”, có lẽ
        nó cũng sẽ như vậy và chúng tôi sẽ quay lại chỗ này bằng một quy tắc thiết kế.
      </p>
      
      <p>
        Tuy nhiên, hiện tại chúng tôi sẽ cung cấp một triển khai mặc định của các
        phương thức để nếu MenuItem (lá) hoặc Menu (composite) không muốn thực hiện
        một số phương thức (ví dụ nút lá sẽ không cần phương thức
        <strong>getChild()</strong>) chúng có thể cài đặt cho chúng một số hành vi mặc
        định.
      </p>
      
      <p>
        Tất cả các component phải implement giao diện <strong>MenuComponent</strong>;
        tuy nhiên, vì các node và leaf có vai trò khác nhau, chúng tôi không thể cài
        đặt cách triển khai mặc định cho mỗi phương thức đều có ý nghĩa. Đôi khi điều
        tốt nhất bạn có thể làm là ném runtime exception.
      </p>
      
      <p>
        Vì một số phương thức chỉ có ý nghĩa đối với <strong>MenuItem</strong> và một
        số phương thức chỉ có ý nghĩa đối với <strong>Menu</strong>, nên việc triển
        khai mặc định sẽ là <strong>UnsupportedOperationException</strong>. Theo cách
        đó, nếu <strong>MenuItem</strong> hoặc <strong>Menu</strong> không hỗ trợ thao
        tác, chúng không phải làm gì cả, chúng chỉ có thể kế thừa việc thực hiện mặc
        định.
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_13.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>CÀI ĐẶT MENU ITEMT</b></h6>`,
      },
      {
        div: `<p>
        Được rồi, hãy thử viết cho lớp <strong>MenuItem</strong>. Hãy nhớ rằng, đây là
        lớp lá trong Composite diagram và nó thực hiện hành vi của các element của
        composite.
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_14.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>CÀI ĐẶT COMPOSITE MENU</b></h6>`,
      },
      {
        div: `<p>
        Bây giờ chúng ta có MenuItem, chúng ta chỉ cần lớp composite mà chúng ta gọi
        là Menu. Hãy nhớ rằng, lớp composite có thể chứa MenuItem (leaf) hoặc các Menu
        (node) khác. Có một vài phương thức từ MenuComponent, lớp này không triển
        khai: <strong>getprice()</strong> và <strong>isVegetarian()</strong>, vì những
        phương thức này không có nhiều ý nghĩa đối với Menu.
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_15.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_16.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Nắm bắt tuyệt vời. Vì menu là một composite và nó chứa cả Menu Item và các
        Menu khác, nên phương thức <strong>print()</strong> của nó sẽ in mọi thứ mà nó
        chứa. Nếu không như vậy, chúng tôi không phải duyệt toàn bộ composite và tự in
        từng mục. Điều đó sẽ làm sai mục đích của việc có một cấu trúc composite.
      </p>
      
      <p>
        Như bạn sẽ thấy, việc triển khai <strong>print()</strong> chính xác rất dễ
        dàng vì chúng ta có thể dựa vào từng component để có thể tự in. Kiểm tra nó:
      </p>`,
      },
      {
        p: `<h6><b>SỬA PHƯƠNG THỨC PRINT()</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_17.jpg`),
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
    title: `Sẵn sàng cho một test drive…`,
    contents: [
      {
        div: `<p>
        Đã đến lúc chúng tôi lấy code này để chạy thử, nhưng chúng tôi cần cập nhật
        code Waitress trước khi thực hiện – sau tất cả, Waitress là client của đoạn
        code:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_18.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Được rồi, một điều cuối cùng trước khi chúng tôi viết test drive của chúng
        tôi. Hãy có ý tưởng về việc component menu sẽ trông như thế nào trong thời
        gian chạy runtime:
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_19.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>BÂY GIỜ CHO TEST DRIVE…  </b></h6>`,
      },
      {
        div: `<p>
        Được rồi, bây giờ chúng tôi chỉ cần một test drive. Không giống như phiên bản
        trước của chúng tôi, chúng tôi sẽ xử lý tất cả việc tạo menu trong test drive.
        Chúng tôi có thể yêu cầu mỗi đầu bếp cung cấp cho chúng tôi menu mới của anh
        ấy, nhưng hãy thử nghiệm tất cả trước. Đây là code:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_20.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>SẴN SÀNG CHO MỘT TEST DRIVE…</b></h6>`,
      },
      {
        div: `<p>(LƯU Ý: kết quả này dựa trên sourcecode hoàn chỉnh)</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_21.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_22.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Có một số sự thật cho quan sát đó. Chúng ta có thể nói rằng Composite Pattern
        áp dụng nguyên tắc <strong>Single Responsibility</strong> và biến đổi nó để
        trong suốt (<em>transparency</em>). <em>Transparency </em>gì? Chà, bằng cách
        cho phép Component interface chứa các hoạt động quản lý node và leaf, một
        client có thể xử lý node và leaf một cách tương tự; vì vậy một phần tử có thể
        là nút composite hay nút lá đều trở nên “trong suốt” đối với client.
      </p>
      
      <p>
        Bây giờ chúng ta có cả hai loại hoạt động trong lớp Component, chúng ta mất
        một chút an toàn vì client có thể cố gắng làm điều gì đó không phù hợp hoặc vô
        nghĩa trên một Component (như thử thêm menu vào một menu item). Đây là một
        quyết định thiết kế; chúng ta có thể đưa thiết kế theo hướng khác và tách các
        trách nhiệm thành các interface. Điều này sẽ làm cho thiết kế của chúng ta an
        toàn, theo nghĩa là bất kỳ lệnh gọi không phù hợp nào đối với các phần tử sẽ
        bị catch trong thời gian biên dịch hoặc runtime, nhưng chúng tôi mất tính
        <em>transparency</em> và code của chúng tôi sẽ phải sử dụng các điều kiện và
        toán tử <strong>instanceof</strong>.
      </p>
      <p>
        Vì vậy, để trở lại câu hỏi của bạn, đây là một trường hợp đánh đổi kinh điển.
        Chúng tôi được hướng dẫn bởi các nguyên tắc thiết kế, nhưng chúng tôi luôn cần
        phải xem xét ảnh hưởng của chúng đối với các thiết kế. Đôi khi chúng tôi cố
        tình làm mọi thứ theo cách dường như vi phạm nguyên tắc.
      </p>
      
      <p>
        Tuy nhiên, trong một số trường hợp, đây là vấn đề về quan điểm; chẳng hạn, sẽ
        không chính xác khi có các phương thức quản lý nút con trong các nút lá (nút
        lá sẽ không cần <strong>add()</strong>, <strong>remove()</strong> và
        <strong>getChild()</strong>), nhưng sau đó, bạn cũng có thể thay đổi quan điểm
        của mình và xem một nút lá như một node không có nút con và các phương thức
        <strong>add()</strong>, <strong>remove()</strong> và
        <strong>getChild()</strong> sẽ trở nên phù hợp.
      </p>
      `,
      },
    ],
  },
  {
    title: `Nhớ lại mẫu Iterator và kết hợp chúng với Composite Pattern`,
    contents: [
      {
        div: `<p>
        Chúng tôi đã hứa với bạn rằng chúng tôi sẽ chỉ cho bạn cách sử dụng
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/11"
          >Iterator </a
        >với một Composite. Bạn biết rằng chúng tôi đã sử dụng
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/11"
          >Iterator </a
        >trong cài đặt của phương thức <strong>print()</strong>, nhưng chúng tôi cũng
        có thể cho phép Waitress duyệt toàn bộ composite nếu cần, ví dụ, nếu cô ấy
        muốn duyệt qua toàn bộ menu và lấy tất cả vegetarian item ra.
      </p>
      
      <p>
        Để cài đặt một Composite iterator, hãy thêm một phương thức
        <strong>createrterator()</strong> trong mọi component. Chúng tôi sẽ bắt đầu
        với lớp trừu tượng <strong>MenuComponent</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_23.jpg`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bây giờ chúng ta cần thực hiện phương thức này trong các lớp
        <strong>Menu</strong> và <strong>MenuItem</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_24.jpg`),
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
    title: `Composite Iterator`,
    contents: [
      {
        div: `<p>
        <strong>CompositeIterator</strong> là một iterator HẤP DẪN. Công việc của nó
        là duyệt phần tử trên các <strong>MenuItem</strong> trong component và đảm bảo
        tất cả các sub-Menu (và sub-sub-Menu, v.v.) cũng được duyệt.
      </p>
      
      <p>
        Đây là code. Xem ra, ở đây không có quá nhiều code, nhưng nó có thể là một
        chút thay đổi về suy nghĩ. Chỉ cần lặp lại với chính mình khi bạn đọc qua nó
        “đệ quy là bạn của tôi, đệ quy là bạn của tôi.”
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_25.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_26.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Khi chúng ta viết phương thức <strong>print()</strong> trong lớp
        <strong>MenuComponent</strong>, chúng ta đã sử dụng một iterator để duyệt qua
        từng phần tử trong component và nếu phần tử đó là <strong>Menu</strong> (chứ
        không phải là <strong>MenuItem</strong>), thì chúng ta gọi đệ quy phương thức
        <strong>print()</strong> để xử lý nó. Nói cách khác,
        <strong>MenuComponent</strong> đã tự xử lý việc duyệt phần tử bên trong nó.
      </p>
      
      <p>
        Với code này, chúng tôi đang triển khai một <em>external </em> iterator để có
        nhiều thứ hơn để theo dõi. Đối với người mới bắt đầu, một
        <em>external </em>iterator phải duy trì vị trí của nó trong vòng lặp để client
        bên ngoài có thể điều khiển vòng lặp bằng cách gọi
        <strong>hasNext()</strong> và <strong>next()</strong>. Trong trường hợp này,
        code của chúng tôi cần duy trì vị trí trên một composite. Đó là lý do tại sao
        chúng tôi sử dụng Stack để duy trì vị trí khi chúng tôi di chuyển lên và xuống
        hệ thống phân cấp composite.
      </p>`,
      },
    ],
  },
  {
    title: `Bài tập`,
    contents: [
      {
        div: `<p>
        Vẽ sơ đồ của <strong>Menu</strong> và <strong>MenuItem</strong>. Sau đó, giả
        vờ bạn là <strong>CompositeIterator</strong> và công việc của bạn là xử lý các
        cuộc gọi đến <strong>hasNext()</strong> và <strong>next()</strong>. Theo dõi
        cách <strong>CompositeIterator</strong> duyệt qua cấu trúc khi code này được
        thực thi:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_27.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Null Iterator </strong>&nbsp;</p>

        <p>
          Được rồi, bây giờ Null Iterator này là gì? Hãy suy nghĩ về nó theo cách này:
          một MenuItem không có gì để duyệt, phải không? Vậy làm thế nào để chúng ta xử
          lý việc thực hiện phương thức <strong>createIterator()</strong> của nó? Vâng,
          chúng tôi có hai sự lựa chọn:
        </p>
        
        <p><strong>Lựa chọn 1: Return null</strong></p>
        
        <p>
          Chúng tôi có thể return null từ <strong>createIterator()</strong>, nhưng sau
          đó chúng tôi sẽ cần code điều kiện (if) trong client để xem null có được
          return hay không.
        </p>
        
        <p>
          <strong
            >Lựa chọn 2: Return một iterator luôn return false khi hasNext() được
            gọi</strong
          >
        </p>
        
        <p>
          Đây dường như là một kế hoạch tốt hơn. Chúng tôi vẫn có return về một
          iterator, nhưng client không phải lo lắng về việc có bao giờ null được return
          hay không. Thực tế, chúng tôi đã tạo ra một iterator là một “lệnh vô tác”
          (no-operation – toán tử không thực hiện thao tác)”.
        </p>
        
        <p>
          Sự lựa chọn thứ hai chắc chắn có vẻ tốt hơn. Hãy gọi nó là
          <strong>NullIterator</strong> và thực hiện nó.
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_28.png`),
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
    title: `Cho tôi thực đơn chay!`,
    contents: [
      {
        div: `<p>
        Bây giờ chúng tôi đã có một cách để duyệt trên mọi item của Menu. Hãy đưa cho
        Waitress của chúng ta một method có thể cho chúng ta biết chính xác món nào là
        món chay (vegetarian).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_29.jpg`),
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
    title: `Kết hợp Iterator & Composite Pattern với nhau…`,
    contents: [
      {
        div: `<p>
        Ôi trời! Đó là một nỗ lực phát triển để đưa code của chúng tôi đến thời điểm
        này. Bây giờ chúng tôi đã có một cấu trúc menu chung sẽ tồn tại lâu dài trong
        đế chế Diner đang phát triển. Bây giờ đã đến lúc ngồi lại và gọi một ít thức
        ăn chay (Vegetarian food):
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_30.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_31.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>Hãy cùng xem những gì bạn đang nói:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-12_32.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Nói chung chúng tôi đồng ý; <strong>try/catch</strong> là để xử lý lỗi, không
        phải dành cho logic chương trình. Các lựa chọn khác của chúng ta là gì? Chúng
        ta có thể kiểm tra loại menu component trong runtime với
        <strong>instanceof </strong>để đảm bảo rằng nó là
        <strong>MenuItem</strong> trước khi gọi đến <strong>isVegetarian()</strong>.
        Nhưng trong quá trình đó, chúng tôi mất đi sự trong suốt (<em
          >transparency – client bên ngoài nhìn thấy Menu hay MenuItem như nhau vì
          chúng đều là MenuComponent</em
        >) vì chúng tôi sẽ đối xử với Menu và MenuItem một cách thống nhất.
      </p>
      
      <p>
        Chúng ta cũng có thể thay đổi <strong>isVegetarian()</strong> trong Menu để nó
        return false. Điều này cung cấp một giải pháp đơn giản và chúng vẫn
        <em>transparency</em>.
      </p>
      <p>
        Trong giải pháp của chúng tôi, chúng tôi làm mọi thứ rõ ràng hơn (không còn
        <em>transparency</em> nữa): chúng tôi muốn biết rằng: đây là một phương thức
        có được hỗ trợ trên Menu hay không (khác với cách làm return false trong
        <strong>isVegetarian()</strong>).
      </p>`,
      },
    ],
  },
  {
    title: `Phỏng vấn tuần này: Composite Pattern nói về các vấn đề implementation`,
    contents: [
      {
        div: `<p>
        <strong>HeadFirst:</strong> Tối nay, chúng tôi ở đây nói chuyện với Composite
        Pattern. Tại sao anh không nói với chúng tôi một chút về bản thân, Composite?
      </p>
      
      <p>
        <strong>Composite:</strong> Chắc chắn rồi… Tôi là một mẫu để sử dụng khi bạn
        có tập hợp các đối tượng có mối quan hệ toàn bộ (whole-part relationship) và
        bạn mong muốn có thể xử lý các đối tượng đó một cách thống nhất theo cùng một
        cách.
      </p>
      
      <p>
        <strong>HeadFirst:</strong> Được rồi, hãy dừng lại một chút ngay tại đây …“mối
        quan hệ toàn bộ” là gì?
      </p>
      
      <p>
        <strong>Composite:</strong> Tưởng tượng một giao diện người dùng đồ họa (GUI);
        ở đó, bạn sẽ thường tìm thấy một thành phần cấp cao nhất như Frame hoặc Panel,
        có chứa các thành phần khác bên trong, như menu, text pane, scrollbar và
        button. Vì vậy, GUI của bạn bao gồm nhiều phần, nhưng khi bạn hiển thị nó, bạn
        thường nghĩ về nó như một tổng thể. Bạn nói với thành phần cấp cao nhất (top
        level) sẽ hiển thị và dựa vào nó để hiển thị tất cả các thành phần bên trong
        của nó. Chúng tôi gọi các thành phần có chứa các thành phần khác bên trong là
        <strong>Composite </strong>và các thành phần không chứa các thành phần khác là
        <strong>Leaf</strong>.
      </p>
      
      <p>
        <strong>HeadFirst:</strong> Đó có phải là ý của anh khi đối xử thống nhất với
        các đối tượng? Có một phương thức chung anh có thể gọi cả trên composite và
        leaf phải không?
      </p>
      
      <p>
        <strong>Composite:</strong> Phải. Tôi có thể nói với một composite object hoặc
        một leaf object khi muốn hiển thị và nó sẽ làm đúng. Composite object sẽ hiển
        thị bằng cách thông báo cho tất cả các thành phần bên trong của nó hiển thị.
      </p>
      
      <p>
        <strong>HeadFirst:</strong> Điều đó ngụ ý rằng mọi đối tượng đều có cùng
        interface. Điều gì nếu anh có các đối tượng trong composite của anh, nhưng
        chúng lại làm những việc khác nhau?
      </p>
      
      <p>
        <strong>Composite:</strong> Vâng, để composite hoạt động một cách
        <em>transparent </em>đối với client, bạn phải triển khai cùng một interface
        cho tất cả các đối tượng trong composite, nếu không, client phải lo lắng về
        việc đối tượng nào đang implement interface nào, loại nào làm những gì. Rõ
        ràng điều đó có nghĩa là đôi khi bạn có thể có các đối tượng mà với vài phương
        thức được gọi, nhưng không có nghĩa.
      </p>
      
      <p><strong>HeadFirst:</strong> Vậy làm thế nào để anh xử lý điều đó?</p>
      
      <p>
        <strong>Composite:</strong> Vâng, có một vài cách để xử lý nó; đôi khi bạn
        không thể làm gì hoặc return null hoặc false – bất cứ điều gì có ý nghĩa trong
        ứng dụng của bạn. Những lần khác, bạn sẽ muốn chủ động hơn và đưa ra một
        exception. Tất nhiên, sau đó client phải sẵn sàng thực hiện một công việc nhỏ
        là bắt exception đó và đảm bảo rằng không sinh ra lỗi không mong đợi.
      </p>
      
      <p>
        <strong>HeadFirst:</strong> Nhưng nếu client không biết loại đối tượng mà họ
        đang xử lý, làm sao họ biết cuộc gọi nào sẽ thực hiện mà không kiểm tra loại
        đối tượng?
      </p>
      
      <p>
        <strong>Composite:</strong> Nếu bạn có một chút sáng tạo, bạn có thể cấu trúc
        các phương thức của mình để các default implementation thực hiện điều gì đó có
        ý nghĩa. Chẳng hạn, nếu client đang gọi <strong>getChild()</strong>, thì trên
        composite, điều này có ý nghĩa. Và nó cũng có ý nghĩa trên một nút lá, nếu bạn
        nghĩ về nút lá như một composite không có nút con.
      </p>
      
      <p>
        <strong>HeadFirst:</strong> Ah … thông minh. Nhưng, tôi đã nghe một số client
        rất lo lắng về vấn đề này, họ yêu cầu các interface riêng cho các đối tượng
        khác nhau vì vậy chúng không được phép thực hiện các cuộc gọi phương thức vô
        nghĩa. Có phải đó vẫn là Composite Pattern?
      </p>
      
      <p>
        <strong>Composite:</strong> Vâng. Nó có phiên bản an toàn hơn nhiều cho
        Composite Pattern, nhưng nó yêu cầu client kiểm tra loại của mọi đối tượng
        trước khi thực hiện cuộc gọi để đối tượng có thể được truyền chính xác.
      </p>
      
      <p>
        <strong>HeadFirst:</strong> Hãy cho chúng tôi biết thêm một chút về cách các
        đối tượng composite và leaf được cấu trúc.
      </p>
      
      <p>
        <strong>Composite:</strong> Thông thường, nó có cấu trúc cây, một loại của
        thừa kế. Nút gốc là composite cấp cao nhất và tất cả các con của nó là
        composite hoặc nút lá (leaf).
      </p>
      
      <p>
        <strong>HeadFirst:</strong> Nút con có bao giờ trỏ ngược lại nút cha không?
      </p>
      
      <p>
        <strong>Composite:</strong> Có, một component có thể có một con trỏ tới cha để
        làm cho việc duyệt qua cấu trúc dễ dàng hơn. Và, nếu bạn có một tham chiếu một
        nút con, và bạn cần xóa nó, bạn sẽ cần phải có nút cha để loại bỏ nút con đó.
        Có tham chiếu tới nút cha làm cho điều đó cũng dễ dàng hơn.
      </p>
      
      <p>
        <strong>HeadFirst:</strong> Có rất nhiều thứ để xem xét khi thực hiện. Có vấn
        đề nào khác chúng ta nên suy nghĩ khi thực hiện Composite Pattern không?
      </p>
      
      <p>
        <strong>Composite:</strong> Thật ra có… một là thứ tự của nút con. Điều gì nếu
        bạn có một composite cần phải giữ con của nó theo một thứ tự cụ thể? Sau đó,
        bạn sẽ cần một sơ đồ quản lý tinh vi hơn để thêm và xóa nút con, và bạn sẽ
        phải cẩn thận về cách bạn duyệt qua hệ thống phân cấp.
      </p>
      
      <p><strong>HeadFirst:</strong> Một điểm hay mà tôi đã nghĩ đến.&nbsp;</p>
      
      <p><strong>Composite:</strong> Và bạn đã nghĩ về bộ nhớ đệm (caching) chưa?</p>
      
      <p><strong>HeadFirst:</strong> Bộ nhớ đệm?</p>
      
      <p>
        <strong>Composite:</strong> Yeah, bộ nhớ đệm. Đôi khi, nếu cấu trúc composite
        phức tạp hoặc tốn kém để duyệt qua, nó có ích để thực hiện lưu trữ bộ đệm của
        các nút composite. Chẳng hạn, nếu bạn liên tục duyệt qua một composite và tất
        cả các phần tử con của nó để tính toán một số kết quả, bạn có thể triển khai
        bộ đệm lưu trữ kết quả tạm thời để lưu các lần duyệt.
      </p>
      
      <p>
        <strong>HeadFirst:</strong> Chà, có rất nhiều điều về Composite Pattern, nhiều
        hơn tôi từng nghĩ. Trước khi chúng tôi kết thúc buổi phỏng vấn, thêm một câu
        hỏi nữa: Anh nghĩ gì về sức mạnh lớn nhất của mình?
      </p>
      
      <p>
        <strong>Composite:</strong> Tôi nghĩ rằng tôi đơn giản hóa cuộc sống cho
        client của tôi. Các client của tôi không phải lo lắng về việc họ có đang xử lý
        một đối tượng composite hay một đối tượng lá hay không, vì vậy họ không phải
        viết các câu lệnh ở khắp mọi nơi để đảm bảo rằng họ gọi đúng phương thức trên
        đúng đối tượng. Thông thường, họ chỉ thực hiện một cuộc gọi phương thức và
        chúng sẽ thực hiện một thao tác trên toàn bộ cấu trúc.
      </p>
      
      <p>
        <strong>HeadFirst:</strong> Nghe có vẻ như là một lợi ích quan trọng. Không có
        nghi ngờ gì nữa, anh có thể có một pattern hữu ích để thu thập và quản lý các
        đối tượng. Và với điều đó, chúng tôi đã hết thời gian… Cảm ơn rất nhiều vì đã
        tham gia với chúng tôi và chúng ta sẽ sớm quay lại với các mẫu khác.
      </p>`,
      },
    ],
  },
  {
    title: `Nối từng mẫu với định nghĩa của nó`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_33.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Đáp án:</strong></p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_34.jpg`),
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
    title: `Tóm tắt`,
    contents: [
      {
        div: `<ul>
        <li>
          <strong>Một Iterator</strong> cho phép truy cập vào một phần tử tập hợp mà
          không làm lộ cấu trúc bên trong của nó.
        </li>
        <li>
          <strong>Một </strong
          ><a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/11"
            ><strong>Iterator</strong> </a
          >đảm nhận công việc duyệt phần tử trên một tập hợp và gói nó trong một đối
          tượng khác.
        </li>
        <li>
          Khi sử dụng <strong>Iterator</strong>, chúng tôi giảm bớt trách nhiệm tổng
          hợp của các hoạt động hỗ trợ cho việc truyền tải dữ liệu của nó.
        </li>
        <li>
          <strong>Iterator</strong> cung cấp một giao diện chung để duyệt qua các item
          của tập hợp, cho phép bạn sử dụng đa hình khi viết code sử dụng các item của
          tập hợp.
        </li>
        <li>Chúng ta nên cố gắng chỉ giao một trách nhiệm cho mỗi lớp.</li>
        <li>
          <strong>Composite Pattern</strong> cung cấp một cấu trúc để chứa cả các leaf
          object và composite con.
        </li>
        <li>
          <strong>Composite Pattern</strong> cho phép client xử lý composite và các
          leaf object một cách thống nhất.
        </li>
        <li>
          Component là bất kỳ đối tượng nào trong cấu trúc cây của Composite. Các
          Component có thể là <strong>Composite</strong> khác hoặc các
          <strong>nút lá</strong>.
        </li>
        <li>
          Có nhiều sự đánh đổi trong thiết kế khi cài đặt
          <strong>Composite pattern</strong>. Bạn cần phải cân bằng sự transparent và
          sự an toàn với nhu cầu của bạn.
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
