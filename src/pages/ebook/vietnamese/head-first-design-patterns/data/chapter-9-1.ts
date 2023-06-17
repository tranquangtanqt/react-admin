import IContent from 'utils/interface';

export const chapter9_1: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_1.png`),
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
    title: `Iterator Pattern và Composite Pattern – Quản lý bộ sưu tập`,
    contents: [
      {
        div: `<p>
  <strong>Có rất nhiều cách để nhét object vào một collection.</strong> Đặt
  chúng trong một <strong>Array,</strong> một <strong>Stack</strong>, một
  <strong>List</strong>, một <strong>Hashtable</strong>, tùy lựa chọn. Mỗi loại
  có những lợi thế và sự đánh đổi riêng. Nhưng đến một lúc nào đó, client của
  bạn sẽ muốn duyệt qua những đối tượng đó, và khi đó, bạn sẽ tự tay cài đặt
  thuật toán duyệt của mình (duyệt 1 mảng sẽ khác duyệt 1
  <strong>ArrayList</strong>), bạn có muốn như vậy? Chúng tôi hy vọng không!
  Điều đó không chuyên nghiệp. Khi xem qua phần
  <strong>Iterator pattern</strong>, bạn sẽ thấy cách bạn có thể cho phép client
  của mình duyệt qua các đối tượng mà không cần phải xem qua cách bạn lưu trữ
  các đối tượng. Bạn cũng sẽ học cách tạo ra một số bộ super collection có thể
  bỏ qua một số cấu trúc dữ liệu trong một ràng buộc duy nhất. Và nếu điều đó
  chưa đủ, bạn cũng sẽ học được một hoặc hai thứ về
  <strong>trách nhiệm của đối tượng</strong>.
</p>`,
      },
    ],
  },
  {
    title: `Tin tức mới nhất: Objectville Diner và Objectville Pancake sáp nhập`,
    contents: [
      {
        div: `<p>
  Tin tốt đấy! Bây giờ chúng ta có thể có được những bữa sáng và những bữa trưa
  ngon tuyệt ở một cùng nơi. Không phải sáng ở Objectville Pancake và trưa lại ở
  Objectville Diner nữa. Nhưng dường như có một vấn đề nhỏ…
</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_2.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>(Trong đoạn trao đổi: Mẹ dùng Mảng và Lou ArrayList để lưu menu)</p>`,
      },
    ],
  },
  {
    title: `Kiểm tra qua các menu`,
    contents: [
      {
        div: `<p>
  Ít nhất là Lou và Mel đồng ý về việc triển khai <strong>MenuItems</strong>.
  Hãy cùng kiểm tra các mục trên mỗi menu, và hãy xem cách thực hiện.
</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_3.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_4.png`),
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
    title: `Cài đặt menu của Lou và Mel`,
    contents: [
      {
        div: `<p>
  Bây giờ, hãy nhìn về những gì Lou và Mel đang tranh cãi. Cả hai đều tốn rất
  nhiều thời gian và code được đầu tư theo cách họ lưu trữ các item trong một
  menu, và rất nhiều code khác phụ thuộc vào nó.
</p>

<p>
  <strong
    >Lou: Tôi đã sử dụng một ArrayList để tôi có thể dễ dàng thêm mới một menu
    item.</strong
  >
</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_5.png`),
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
    >Mel: Haaa! Một Arraylist … Tôi đã sử dụng một array THỰC SỰ để tôi có thể
    kiểm soát kích thước tối đa của menu và get MenuItems của mình mà không phải
    sử dụng cast.</strong
  >
</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_6.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Vấn đề với việc có hai biểu diễn menu khác nhau là gì?</strong></p>

<p>
  Để xem lý do tại sao việc có hai biểu diễn menu khác nhau lại làm phức tạp mọi
  thứ, hãy thử thực hiện một ứng dụng client sử dụng hai menu. Hãy tưởng tượng
  bạn đã được thuê bởi công ty mới được thành lập bởi sự hợp nhất của Diner và
  Pancake House để tạo ra một phục vụ <strong>Java-enabled Waitress</strong>. Mô
  tả cho người phục vụ để cô ấy có thể in một menu theo khách hàng theo yêu cầu
  và thậm chí cho bạn biết khi một menu item là món chay mà không cần phải hỏi
  đầu bếp – bây giờ là một sự đổi mới!
</p>

<p>Hãy kiểm tra mô tả, và sau đó bước qua những gì có thể cần để thực hiện…</p>`,
      },
    ],
  },
  {
    title: `Mô tả cho Java-Enabled Waitress (client)`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_7.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
  Hãy bắt đầu bằng cách xem qua cách chúng tôi thực hiện phương thức
  <strong>printMenu()</strong>:
</p>

<p>
  1. Để in tất cả các item trên mỗi menu, bạn sẽ cần gọi phương thức
  <strong>getMenuItem()</strong> trên <strong>PancakeHouseMenu</strong> và
  <strong>DinerMenu</strong> để lấy các menu item tương ứng của chúng. Lưu ý
  rằng mỗi phương thức trả về một kiểu lưu trữ khác nhau (mảng và ArrayList):
</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_8.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
  2. Bây giờ, để in ra các item từ <strong>PancakeHouseMenu</strong>, chúng tôi
  sẽ duyệt qua các item trên ArrayList <strong>breakfastItems</strong>. Và để in
  ra các Diner item, chúng tôi sẽ duyệt qua một mảng.
</p>
`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_9.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
  Thực hiện mọi phương thức khác trong Waitress sẽ là một biến thể của chương
  này. Chúng tôi luôn luôn cần có cả hai menu và sử dụng hai vòng để lặp qua các
  item của chúng. Nếu một nhà hàng khác có triển khai khác được gộp thì chúng
  tôi sẽ có ba vòng lặp.
</p>

<p><strong>Bài tập:</strong></p>

<p>
  Dựa trên việc triển khai <strong>printMenu()</strong> của chúng tôi, áp dụng
  nào sau đây?
</p>

<ul>
  <li>
    ❏ A. Chúng tôi đang code cho các triển khai cụ thể của
    <strong>PancakeHouseMenu</strong> và <strong>DinerMenu</strong>, chứ không
    phải cho một interface.
  </li>
  <li>
    ❏ B. <strong>Waitress</strong> không implement Java Waitress API và vì vậy
    cô ấy không tuân thủ theo tiêu chuẩn.
  </li>
  <li>
    ❏ C. Nếu chúng tôi quyết định chuyển từ sử dụng
    <strong>DinerMenu</strong> sang một loại menu khác đã triển khai danh sách
    các menu item của nó bằng <strong>Hashtable</strong>, chúng tôi đã phải sửa
    đổi rất nhiều code trong Waitress.
  </li>
  <li>
    ❏ D. Waitress cần biết làm thế nào mỗi menu đại diện cho tập hợp các menu
    item bên trong của nó; Điều này vi phạm nguyên tắc đóng gói.
  </li>
  <li>
    ❏ E. Chúng tôi có code trùng lặp: phương thức
    <strong>printMenu()</strong> cần hai vòng lặp riêng biệt để lặp qua hai loại
    menu khác nhau. Và nếu chúng ta thêm một menu thứ ba, chúng ta sẽ có một
    vòng lặp khác.
  </li>
  <li>
    ❏ F. Việc triển khai không dựa trên MXML (Menu XML) và do đó không thể tương
    thích như mong muốn.
  </li>
</ul>

<p><strong>Đáp án: A, C, D, E</strong></p>`,
      },
    ],
  },
  {
    title: `Bây giờ thì sao?`,
    contents: [
      {
        div: `<p>
  Mel và Lou đang đặt chúng ta vào thế khó. Họ không muốn thay đổi cách triển
  khai vì điều đó có nghĩa là viết lại rất nhiều code trong mỗi lớp menu tương
  ứng. Nhưng nếu một trong số họ không nhượng bộ, thì chúng tôi sẽ có công việc
  của Waitress sẽ khó duy trì và mở rộng.
</p>

<p>
  Sẽ thật tuyệt nếu chúng ta có thể tìm cách cho phép chúng implements cùng một
  interface cho các menu. Hiện tại chúng đã đóng (không có implement), ngoại trừ
  kiểu trả về của phương thức <strong>getMenuItems()</strong>. Bằng cách đó,
  chúng ta có thể giảm thiểu các tham chiếu cụ thể trong code Waitress và cũng
  hy vọng thoát khỏi nhiều vòng lặp cần thiết để duyệt trên cả hai menu.
</p>

<p>Nghe hay đấy? Chà, làm thế nào chúng ta làm được điều đó?</p>`,
      },
    ],
  },
  {
    title: `Chúng ta có thể gói gọn việc duyệt phần tử không?`,
    contents: [
      {
        div: `<p>
  Nếu chúng ta đã được học một điều từ cuốn sách này, đó là đóng gói những gì
  thay đổi. Những gì đang thay đổi ở đây đã rõ ràng: “duyệt phần tử”, gây ra bởi
  các kiểu tập hợp khác nhau, được return từ các menu. Nhưng chúng ta có thể
  đóng gói điều này không? Hãy suy nghĩ một chút…
</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_10.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_11.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_12.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_13.png`),
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
    title: `Gặp gỡ Iterator Pattern`,
    contents: [
      {
        div: `<p>
        Chà, có vẻ như kế hoạch đóng gói của chúng ta thực sự có thể hoạt động; và bạn
        có thể đã biết từ đầu tiêu đề, Mẫu thiết kế này được gọi là
        <strong>Iterator Pattern</strong>.
      </p>
      
      <p>
        Điều đầu tiên bạn cần biết về <strong>Iterator Pattern</strong> là nó dựa trên
        interface có tên là Iterator. Ở đây, một Iterator interface có thể có:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_14.png`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bây giờ, khi chúng ta có giao diện này, chúng ta có thể triển khai
        <strong>Iterator pattern</strong> cho bất kỳ loại tập hợp đối tượng nào: mảng,
        danh sách, hashtables, … chọn loại tập hợp đối tượng yêu thích của bạn. Khi
        chúng ta muốn triển khai <strong>Iterator pattern </strong>cho Array được sử
        dụng trong <strong>DinerMenu</strong>. Nó sẽ trông như thế này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_15.jpg`),
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
    title: `Áp dụng Iterator Pattern vào DinerMenu`,
    contents: [
      {
        div: `<p>
        Để thêm <strong>Iterator</strong> vào <strong>DinerMenu</strong>, trước tiên
        chúng ta cần định nghĩa <strong>Iterator</strong> Interface:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_16.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Và bây giờ chúng ta cần triển khai một Iterator con đại diện cho Diner Menu:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_17.png`),
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
    title: `Làm lại DinerMenu với Iterator Pattern`,
    contents: [
      {
        div: `<p>
        Được rồi, chúng tôi đã có các iterator. Thời gian để làm việc với
        <strong>DinerMenu</strong>; tất cả những gì chúng ta cần làm là thêm một
        phương thức để tạo <strong>DinerMenuIterator</strong> và return lại cho
        client:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_18.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Bài tập:</strong></p>

        <p>
          Hãy tiếp tục và tự mình thực hiện <strong>PancakeHouseIterator</strong> và
          thực hiện các thay đổi cần thiết để kết hợp nó vào
          <strong>PancakeHouseMenu</strong>.
        </p>`,
      },
      {
        p: `<h6><b>Sửa code Waitress</b></h6>`,
      },
      {
        div: `<p>
        Bây giờ chúng ta cần tích hợp <strong>iterator pattern </strong>vào Waitress.
        Chúng ta sẽ có thể loại bỏ một số dư thừa trong tiến trình. Việc tích hợp khá
        đơn giản: đầu tiên chúng ta tạo một phương thức <strong>printMenu()</strong>,
        sau đó chúng ta sử dụng phương thức <strong>createIterator()</strong> trên mỗi
        menu để lấy Iterator và chuyển nó sang phương thức mới.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_19.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>TESTING CODE CỦA BẠN</b></h6>`,
      },
      {
        div: `<p>
        Đây là thời gian để đưa mọi thứ vào một thử nghiệm. Hãy viết một số test drive
        và xem cách Waitress hoạt động…&nbsp;&nbsp;
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_20.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>Đây là kết quả…</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_21.jpg`),
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
    title: `Chúng ta đã làm gì cho tới bây giờ?`,
    contents: [
      {
        div: `<p>
        Để bắt đầu, chúng tôi đã làm cho các đầu bếp Objectville của chúng tôi rất
        hạnh phúc. Họ giải quyết sự khác biệt và giữ thực hiện riêng của họ. Khi chúng
        tôi đưa cho họ một <strong>PancakeHouseMenuIterator</strong> và
        <strong>DinerMenuIterator</strong>, tất cả những gì họ phải làm là thêm một
        phương thức <strong>createIterator()</strong> và họ đã hoàn thành.
      </p>
      
      <p>
        Chúng tôi cũng đã tự giúp mình trong quá trình này. Waitress sẽ dễ dàng hơn
        nhiều để duy trì và mở rộng trong tương lai. Hãy đi qua chính xác những gì
        chúng ta đã làm và nghĩ về hậu quả:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_22.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Những gì chúng ta có cho đến giờ…</strong></p>

        <p>
          Trước khi chúng tôi dọn dẹp mọi thứ, hãy có một cái nhìn toàn cảnh về thiết kế
          hiện tại của chúng tôi.
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_23.jpg`),
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
    title: `Cải tiến menu với Iterator Pattern…của Java`,
    contents: [
      {
        div: `<p>
        Được rồi, chúng tôi biết các interface của
        <strong>PancakeHouseMenu</strong> và <strong>DinerMenu</strong> hoàn toàn
        giống nhau và chúng tôi chưa định nghĩa interface chung cho chúng. Vì vậy,
        chúng tôi sẽ làm điều đó và thay đổi Waitress thêm một chút nữa.
      </p>
      
      <p>
        Bạn có thể tự hỏi tại sao chúng tôi không sử dụng interface Iterator của Java
        từ đầu – chúng tôi đã làm vậy để bạn có thể thấy cách xây dựng một iterator.
        Bây giờ chúng tôi đã thực hiện điều đó, chúng tôi sẽ chuyển sang sử dụng
        interface Iterator Java, bởi vì chúng tôi sẽ nhận được rất nhiều lợi ích bằng
        cách implement nó thay vì interface Iterator “tự xây dựng” của chúng tôi.
        Những lợi ích gì? Bạn sẽ sớm thấy thôi.
      </p>
      
      <p>Trước tiên, hãy xem qua giao diện <strong>java.util.Iterator</strong>:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_24.png`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Đây sẽ là một miếng bánh: Chúng ta chỉ cần thay đổi interface mà cả
        <strong>PancakeHouseMenuIterator</strong> và
        <strong>DinerMenuIterator</strong> extend, phải không? Hầu như … thực sự, nó
        thậm chí còn dễ dàng hơn thế. <strong>Java.util</strong> không chỉ có
        interface <strong>Iterator</strong> riêng mà ArrayList còn có phương thức
        <strong>iterator()</strong> trả về một iterator. Nói cách khác, chúng ta không
        bao giờ cần phải implement iterator riêng cho ArrayList. Tuy nhiên, chúng tôi
        vẫn cần triển khai cho <strong>DinerMenu</strong> vì giả sử nó phụ thuộc vào
        một mảng không hỗ trợ phương thức <strong>iterator()</strong> (hoặc không hỗ
        trợ bất kỳ cách nào khác để tạo một array iterator).
      </p>`,
      },
    ],
  },
  {
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi:</strong> Điều gì sẽ xảy ra nếu tôi không muốn cung cấp khả năng
        remove thứ gì đó khỏi tập hợp các đối tượng cơ bản?
      </p>
      
      <p>
        <strong>Trả lời:</strong> Phương thức <strong>remove()</strong> được coi là
        tùy chọn. Bạn không phải cung cấp chức năng remove. Nhưng, rõ ràng là bạn cần
        phải cung cấp phương thức này vì nó là một phần của interface Iterator. Nếu
        bạn không cho phép <strong>remove()</strong> trong iterator của mình, bạn sẽ
        ném runtime exception
        <strong>java.lang.UnsupportedOperationException</strong>.
      </p>
      
      <p>
        Tài liệu API của Iterator chỉ định rằng exception này có thể được ném từ
        <strong>remove()</strong> và bất kỳ thiết kế nào tốt đều sẽ kiểm tra exception
        này khi gọi phương thức <strong>remove()</strong>.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Làm thế nào để <strong>remove()</strong> hoạt động trong
        đa luồng (multiple thread) có thể sử dụng các iterator khác nhau trên cùng một
        tập hợp đối tượng?
      </p>
      
      <p>
        <strong>Trả lời:</strong> Hành vi của <strong>remove()</strong> là không xác
        định nếu tập hợp bị thay đổi trong khi bạn đang duyệt qua nó. Vì vậy, bạn nên
        cẩn thận trong việc thiết kế code multiple thread của riêng bạn khi truy cập
        đồng thời một tập hợp.
      </p>`,
      },
    ],
  },
  {
    title: `Dọn dẹp mọi thứ với java.util.Iterator`,
    contents: [
      {
        div: `<p>
        Hãy bắt đầu với <strong>PancakeHouseMenu</strong>, thay đổi nó thành
        <strong>java.util.Iterator</strong> sẽ trở nên dễ dàng. Chúng tôi chỉ cần xóa
        lớp <strong>PancakeHouseMenuIterator</strong>, thêm
        <strong>java.util.Iterator</strong> lên đầu class
        <strong>PancakeHouseMenu</strong> và thay đổi một dòng của
        <strong>PancakeHouseMenu</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_25.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>Và đó là nó, <strong>PancakeHouseMenu</strong> đã hoàn thành.</p>

        <p>
          Bây giờ chúng ta cần thực hiện các thay đổi để cho phép
          <strong>DinerMenu</strong> hoạt động với <strong>java.util.Iterator</strong>.
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_26.png`),
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
    title: `Chúng ta gần hoàn thành…`,
    contents: [
      {
        div: `<p>
        Chúng ta chỉ cần cung cấp cho các Menu một interface chung và làm lại Waitress
        một chút. Giao diện Menu khá đơn giản: cuối cùng chúng tôi có thể muốn thêm
        một vài phương thức nữa, như <strong>addItem()</strong>, nhưng bây giờ chúng
        tôi sẽ cho phép các đầu bếp kiểm soát các menu của họ bằng cách đưa phương
        thức đó ra khỏi public interface:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_27.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bây giờ chúng ta cần thêm implements Menu vào cả định nghĩa lớp
        <strong>PancakeHouseMenu</strong> và <strong>DinerMenu</strong>, sau đó cập
        nhật Waitress:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_28.png`),
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
    title: `Iterator Pattern cho chúng ta những gì?`,
    contents: [
      {
        div: `<p>
        Các lớp <strong>PancakeHouseMenu</strong> và
        <strong>DinerMenu</strong> implement cùng một interface, Menu. Waitress có thể
        tham chiếu từng đối tượng menu bằng interface chứ không phải lớp cụ thể. Vì
        vậy, chúng tôi giảm bớt sự phụ thuộc giữa Waitress và các lớp cụ thể bằng cách
        lập trình vào một giao diện, chứ không phải là một triển khai (programming to
        an interface, not an implementation) =&gt; Điều này giải quyết vấn đề của
        Waitress phụ thuộc vào concrete Menu (menu con).
      </p>
      
      <p>
        Interface Menu mới có một phương thức, <strong>createIterator()</strong>, được
        triển khai bởi <strong>PancakeHouseMenu</strong> và
        <strong>DinerMenu</strong>. Mỗi lớp menu đảm nhận trách nhiệm tạo ra một
        Iterator cụ thể phù hợp cho việc thực hiện bên trong các menu item =&gt; Điều
        này giải quyết vấn đề của Waitress phụ thuộc vào việc triển khai MenuItem.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_29.jpg`),
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
    title: `Định nghĩa Iterator Pattern`,
    contents: [
      {
        div: `<p>
        Bạn đã thấy cách triển khai<strong> Iterator Pattern</strong> với iterator
        riêng của mình. Bạn cũng đã thấy cách Java hỗ trợ các iterator trong một số
        lớp collection (ArrayList). Bây giờ đã đến lúc để kiểm tra định nghĩa chính
        thức của mẫu:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_30.jpg`),
          width: `45%`,
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
            >(Iterator Pattern cung cấp một cách để truy cập các phần tử của một tập
            hợp đối tượng một cách tuần tự mà không làm lộ đại diện bên dưới của
            nó)</em
          ></strong
        >
      </p>
      
      <p>
        Điều này rất có ý nghĩa: mẫu cung cấp cho bạn một cách để duyệt qua các phần
        tử của tập hợp mà không cần phải biết cách mọi thứ được thể hiện bên trong.
        Bạn đã thấy điều đó với hai cài đặt của Menu. Nhưng hiệu quả của việc sử dụng
        các <strong>Iterator Pattern</strong> trong thiết kế của bạn là: một khi bạn
        có cách truy cập thống nhất các phần tử của tất cả các tập hợp của mình, bạn
        có thể viết code đa hình hoạt động với bất kỳ tập hợp nào – giống như phương
        thức <strong>printMenu()</strong>, nó không quan tâm các menu item được lưu
        trong một Array hay ArrayList (hoặc bất cứ thứ gì khác có thể tạo Iterator),
        miễn là nó có thể tạo được Iterator.
      </p>
      
      <p>
        Tác động quan trọng khác đối với thiết kế của bạn là
        <strong>Iterator Pattern</strong> có trách nhiệm di chuyển các phần tử và giao
        trách nhiệm đó cho iterator object chứ không phải collection object. Điều này
        không chỉ giữ cho collection interface và collection implement (các đối tượng
        Array, ArrayList) đơn giản hơn, nó loại bỏ trách nhiệm duyệt phần tử khỏi tập
        hợp và giữ cho tập hợp tập trung vào những thứ cần tập trung (quản lý tập hợp
        đối tượng), không phải quản lý vòng lặp.
      </p>`,
      },
    ],
  },
  {
    title: `Iterator Pattern: Sơ đồ lớp`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_31.jpg`),
          width: `90%`,
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
        Sơ đồ lớp cho <strong>Iterator Pattern</strong> trông rất giống với Mẫu nào
        khác mà bạn đã nghiên cứu? Gợi ý: Một lớp con quyết định đối tượng nào được
        tạo.
      </p>`,
      },
    ],
  },
  {
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi:</strong> Tôi đã thấy các cuốn sách khác biểu diển sơ đồ lớp
        Iterator với các phương thức <strong>first()</strong>,
        <strong>next()</strong>, <strong>isDone()</strong> và
        <strong>currentItem()</strong>. Tại sao chúng không giống các phương thức của
        <strong>Iterator Pattern</strong> trong chương này?
      </p>
      
      <p>
        <strong>Trả lời: </strong>Đó là những tên phương thức cũ đã được sử dụng. Các
        tên này đã thay đổi theo thời gian và bây giờ chúng ta có
        <strong>next()</strong>, <strong>hasNext()</strong> và thậm chí
        <strong>remove()</strong> trong <strong>java.util.Iterator</strong>.&nbsp;
      </p>
      
      <p>
        Hãy nhìn vào các phương thức cũ <strong>next()</strong> và
        <strong>currentItem()</strong> đã được hợp nhất thành một phương thức trong
        <strong>java.util</strong>. Phương thức <strong>isDone()</strong> rõ ràng đã
        trở thành <strong>hasNext()</strong>; nhưng chúng ta không có phương thức
        tương ứng với <strong>First()</strong>. Điều đó bởi vì trong Java, chúng ta có
        xu hướng chỉ cần có một vòng lặp mới bất cứ khi nào chúng ta cần bắt đầu duyệt
        phần tử. Tuy nhiên, bạn có thể thấy có rất ít sự khác biệt trong các giao diện
        này. Trong thực tế, có một loạt các hành vi bạn có thể đưa ra cho các iterator
        của mình. Phương thức <strong>remove()</strong> là một ví dụ về phần mở rộng
        trong <strong>java.util.Iterator</strong>.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Tôi đã nghe nói về các “internal” iterator và “external”
        iterator. Chúng là gì? Chúng ta đã thực hiện trong ví dụ trên loại nào?
      </p>
      
      <p>
        <strong>Trả lời: </strong>Chúng ta đã triển khai một external iterator, có
        nghĩa là client điều khiển phép lặp bằng cách gọi <strong>next()</strong> để
        lấy phần tử tiếp theo. Một internal iterator được điều khiển bởi chính
        iterator đó. Trong trường hợp đó, bởi vì nó là bộ lặp iterator mà duyệt qua
        các phần tử, bạn phải nói cho iterator biết phải làm gì với các phần tử đó khi
        nó duyệt qua chúng. Điều đó có nghĩa là bạn cần một cách để chuyển một hoạt
        động đến một iterator. Các internal iterator kém linh hoạt hơn các external
        iterator vì client không có quyền kiểm soát vòng lặp. Tuy nhiên, một số người
        có thể lập luận rằng chúng dễ sử dụng hơn vì bạn chỉ cần đưa cho chúng một
        thao tác và bảo chúng lặp lại, và chúng làm tất cả công việc cho bạn.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Tôi có thể triển khai một Iterator có thể duyệt lùi
        giống như duyệt tới không?
      </p>
      
      <p>
        <strong>Trả lời: </strong>Chắc chắn rồi. Trong trường hợp đó, bạn có thể muốn
        thêm hai phương thức, một phương thức để duyệt đến phần tử phía sau và một
        phương thức để duyệt đến phần tử phía trước. Java’s Collection Framework cung
        cấp một loại giao diện lặp khác gọi là <strong>ListIterator</strong>. Trình
        lặp này thêm <strong>previous()</strong> và một vài phương thức khác vào giao
        diện Iterator tiêu chuẩn. Nó được hỗ trợ bởi bất kỳ tập hợp nào implement List
        interface.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Ai định nghĩa thứ tự duyệt phần tử trong tập hợp như
        <strong>Hashtable</strong>, chúng vốn không có thứ tự?
      </p>
      
      <p>
        <strong>Trả lời: </strong>Iterator ngầm định là không có thứ tự. Các tập hợp
        cơ bản có thể không được sắp xếp; chúng thậm chí có thể chứa các phần tử trùng
        lặp. Vì vậy, thứ tự có liên quan đến cả các thuộc tính của tập hợp bên trong
        các các implement của nó. Nói chung, bạn không nên đưa ra giả định nào về thứ
        tự trừ khi Collection chỉ ra.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Bạn nói rằng chúng ta có thể viết code đa hình
        (polymorphic code) bằng cách sử dụng một trình iterator; bạn có thể giải thích
        thêm không?
      </p>
      
      <p>
        <strong>Trả lời: </strong>Khi chúng ta viết các phương thức lấy Iterator làm
        tham số, chúng ta đang sử dụng phép lặp đa hình. Điều đó có nghĩa là chúng tôi
        đang tạo code có thể duyệt trên bất kỳ tập hợp nào miễn là nó hỗ trợ Iterator.
        Chúng tôi không quan tâm đến cách tập hợp được implement, chúng tôi vẫn có thể
        viết code để duyệt nó.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Nếu tôi sử dụng Java, không phải lúc nào tôi cũng muốn
        sử dụng giao diện <strong>java.util.Iterator</strong>, vì vậy tôi có thể tạo
        ra các iterator của riêng mình cho các lớp đã sử dụng Java iterator không?
      </p>
      
      <p>
        <strong>Trả lời: </strong>Có lẽ. Nếu bạn có một Iterator interface chung, chắc
        chắn nó sẽ giúp bạn dễ dàng trộn và kết nối các tập hợp của riêng bạn với các
        tập hợp Java như ArrayList và Vector. Nhưng hãy nhớ, nếu bạn cần thêm chức
        năng vào giao diện Iterator cho tập hợp của bạn, bạn luôn có thể extend
        Iterator interface.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Tôi đã thấy một Enumeration interface trong Java; Nó có
        cài đặt <strong>Iterator Pattern</strong> không?
      </p>
      
      <p>
        <strong>Trả lời: </strong>Chúng tôi đã nói về điều này trong
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >Chương Adaptor Pattern</a
        >. Nhớ lại xem? Các <strong>java.util.Enumeration</strong> là một triển khai
        cũ hơn của Iterator đã được thay thế bởi <strong>java.util.Iterator</strong>.
        Enumeration có hai phương thức, <strong>hasMoreElements()</strong>, tương ứng
        với <strong>hasNex()</strong> và <strong>nextElement()</strong> tương ứng với
        <strong>next()</strong>. Tuy nhiên, bạn có thể muốn sử dụng Iterator trên
        Enumeration vì nhiều lớp Java hỗ trợ nó. Nếu bạn cần chuyển đổi từ cái này
        sang cái khác, hãy xem lại
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >Chương Adaptor</a
        >
        nơi bạn đã triển khai bộ chuyển đổi Enumeration và Iterator.
      </p>`,
      },
    ],
  },
  {
    title: `Single Responsibility và Iterator Pattern`,
    contents: [
      {
        div: `<p>
        Điều gì xảy ra nếu chúng tôi cho phép tập hợp của chúng tôi implement các
        “internal collection” và các chức năng liên quan VÀ các iteration method của
        chúng? Chà, chúng ta đã biết rằng sẽ mở rộng số lượng phương thức trong tập
        hợp, nhưng vậy thì sao? Tại sao điều đó sẽ rất tệ?
      </p>
      
      <p>
        Chà, để xem tại sao, trước tiên bạn cần nhận ra rằng khi chúng tôi cho phép
        một lớp không chỉ quan tâm nghiệp vụ của riêng mình (quản lý một số loại tập
        hợp) mà còn đảm nhận nhiều trách nhiệm hơn (như vòng lặp) thì chúng tôi đã
        giao cho lớp hai lý do để thay đổi. Hai ư? vâng, hai: nó có thể thay đổi nếu
        <strong>bộ sưu tập thay đổi</strong> theo một cách nào đó và nó có thể thay
        đổi nếu <strong>cách chúng ta duyệt vòng lặp thay đổi</strong>. Vì vậy, một
        lần nữa người bạn THAY ĐỔI của chúng tôi là trung tâm của một nguyên tắc thiết
        kế khác:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_32.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center"><small>Mỗi lớp nên có một và chỉ một lý do để thay đổi.</small></p>`,
      },
      {
        div: `<p>
        Mỗi trách nhiệm của một lớp là một lĩnh vực thay đổi tiềm năng. Nhiều hơn một
        trách nhiệm có nghĩa là nhiều hơn một lĩnh vực thay đổi.
      </p>
      
      <p>
        Nguyên tắc này hướng dẫn chúng tôi giữ cho mỗi lớp chịu trách nhiệm duy nhất.
      </p>
      
      <p>
        Chúng tôi biết rằng chúng tôi muốn tránh thay đổi trong một lớp như “bệnh
        dịch” – code sửa đổi cung cấp tất cả các loại cơ hội cho các vấn đề xuất hiện.
        Có hai cách để có thể thay đổi lớp, sẽ tăng xác suất lớp đó bị thay đổi trong
        tương lai và khi đó, nó sẽ xảy ra và ảnh hưởng đến hai khía cạnh của thiết kế
        của bạn.
      </p>
      
      <p>
        Giải pháp? Nguyên tắc hướng dẫn chúng tôi phân công mỗi trách nhiệm cho một
        lớp và chỉ một lớp.
      </p>
      
      <p>
        Điều đó đúng, nó có thể dễ dàng như vậy, và một lần nữa, nó không phải là:
        tách biệt trách nhiệm trong thiết kế là một trong những điều khó khăn nhất để
        làm. Bộ não của chúng ta chỉ quá giỏi trong việc nhìn thấy một tập hợp các
        hành vi và nhóm chúng lại với nhau ngay cả khi thực sự có hai hoặc nhiều trách
        nhiệm. Cách duy nhất để thành công là siêng năng kiểm tra các thiết kế của bạn
        và tìm ra các dấu hiệu cho thấy một lớp bị thay đổi theo nhiều cách khi hệ
        thống của bạn phát triển.
      </p>
      
      <p>
        <strong>Sự gắn kết (Cohesion)</strong> là một thuật ngữ mà bạn nghe thấy được
        sử dụng như một thước đo mức độ chặt chẽ của một lớp hoặc một mô-đun hỗ trợ
        cho một mục đích hoặc trách nhiệm duy nhất.
      </p>
      
      <p>
        Chúng tôi nói rằng một mô-đun hoặc lớp có độ gắn kết cao khi nó được thiết kế
        xung quanh một tập hợp các hàm liên quan và chúng tôi nói rằng nó có độ gắn
        kết thấp khi nó được thiết kế xung quanh một tập hợp các hàm không liên quan.
      </p>
      
      <p>
        Sự gắn kết là một khái niệm tổng quát hơn
        <strong>Nguyên tắc đơn trách nhiệm</strong>, nhưng hai nguyên tắc này có liên
        quan chặt chẽ với nhau.
      </p>
      
      <p>
        Các lớp tuân thủ <strong>Nguyên tắc đơn trách nhiệm</strong> có xu hướng có sự
        gắn kết cao và dễ duy trì hơn các lớp đảm nhận nhiều trách nhiệm và có độ gắn
        kết thấp.
      </p>`,
      },
    ],
  },
  {
    title: `Sử dụng sức mạnh bộ não`,
    contents: [
      {
        div: `<p>Kiểm tra các lớp này và xác định cái nào có nhiều trách nhiệm.</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_33.jpg`),
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
    title: `Sử dụng sức mạnh bộ não 2`,
    contents: [
      {
        div: `<p>Xác định xem các lớp này có độ gắn kết thấp hay cao.</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_34.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Thật tốt khi bạn đang tìm hiểu về <strong>Iterator Pattern</strong> bởi vì tôi
        vừa nghe rằng Objectville Mergers và Acquisitions đã thực hiện một thỏa thuận
        khác … đưa Objectville Cafe vào Dinner menu của họ.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_35.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
    ],
  },
  {
    title: `Hãy nhìn vào CafeMenu`,
    contents: [
      {
        div: `<p>
        Ở đây là <strong>CafeMenu</strong>. Có vẻ như rất nhiều rắc rối khi tích hợp
        <strong>CafeMenu </strong>vào khuôn khổ của chúng tôi… Hãy kiểm tra nó:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_36.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Bài tập</strong></p>

        <p>
          Trước khi nhìn vào trang tiếp theo, hãy nhanh chóng ghi lại ba điều chúng ta
          phải làm với đoạn code này để phù hợp với framework của chúng ta.
        </p>
        
        <p><strong>Đáp án:</strong>&nbsp;</p>
        
        <ol>
          <li>Implement Menu interface.</li>
          <li>Thoát khỏi <strong>getItems()</strong>.</li>
          <li>
            Thêm <strong>createIterator()</strong> và return một Iterator có thể duyệt
            qua các giá trị Hashtable.
          </li>
        </ol>`,
      },
    ],
  },
  {
    title: `Viết lại code CafeMenu`,
    contents: [
      {
        div: `<p>
        Đưa <strong>CafeMenu</strong> vào khuôn khổ của chúng tôi rất dễ dàng. Tại
        sao? Bởi vì <strong>Hashtable </strong>là một trong những bộ sưu tập Java hỗ
        trợ <strong>Iterator</strong>. Nhưng nó không hoàn toàn giống với ArrayList…
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_37.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Hashtable phức tạp hơn một chút so với ArrayList vì nó hỗ trợ cả key và value,
        nhưng chúng ta vẫn có thể nhận được Iterator cho các value (chúng là các
        <strong>MenuItem</strong>).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_38.png`),
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
    title: `Thêm CafeMenu vào Waitress`,
    contents: [
      {
        div: `<p>
        Điều đó thật dễ dàng; Làm thế nào về việc sửa đổi Waitress để hỗ trợ Menu mới
        của chúng tôi? Bây giờ, Waitress mong đợi Iterator, điều đó cũng dễ dàng.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_39.png`),
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
    title: `Bữa sáng, bữa trưa VÀ bữa tối`,
    contents: [
      {
        div: `<p>
        Hãy để cập nhật test drive của chúng ta để đảm bảo tất cả đều hoạt động đúng.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_40.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>Tại đây, chạy thử nghiệm; kiểm tra thực đơn bữa tối mới từ Cafe!</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_41.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_42.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_43.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_44.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_45.jpg`),
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
    title: `Iterator Pattern và Collection`,
    contents: [
      {
        div: `<p>
        Chúng tôi đã sử dụng một vài lớp là một phần của Java Collections Framework.
        Framework này chỉ là một tập hợp các lớp và interface, bao gồm ArrayList mà
        chúng tôi đã sử dụng và nhiều thứ khác như Vector, LinkedList, Stack và
        PriorityQueue. Các lớp này implement giao diện
        <strong>java.util.Collection</strong>, chứa một loạt các phương thức hữu ích
        để thao tác các nhóm đối tượng.
      </p>
      
      <p>
        Hashtable là một trong một vài lớp gián tiếp hỗ trợ Iterator. Như bạn đã thấy
        khi chúng tôi triển khai <strong>CafeMenu</strong>, bạn có thể nhận được
        Iterator từ nó, nhưng chỉ bằng cách truy xuất các giá trị được gọi là
        Collection của nó. Nếu bạn nghĩ về nó, điều này có ý nghĩa: Hashtable chứa hai
        bộ đối tượng: keys và values. Nếu chúng ta muốn lặp các value của nó, trước
        tiên chúng ta cần truy xuất chúng từ Hashtable, sau đó lấy iterator.
      </p>
      
      <p>Hãy xem nhanh giao diện:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_46.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_47.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Iterators và Collections trong Java 5 </strong>&nbsp;</p>

        <p>
          Java 5 bao gồm một dạng mới của câu lệnh <strong>for</strong>, được gọi là
          <strong>for/in</strong>, cho phép bạn lặp lại một tập hợp hoặc một mảng mà
          không cần tạo một vòng lặp rõ ràng.
        </p>
        
        <p>
          Để sử dụng <strong>for/in</strong>, bạn sử dụng câu lệnh for trông giống như:
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_48.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Đây là cách bạn duyệt qua một ArrayList bằng cách sử dụng
        <strong>for/in</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_49.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bạn cần sử dụng tính năng tổng quát mới của Java 5 để đảm bảo an toàn loại
        <strong>for/in</strong>. Hãy chắc chắn rằng bạn đã đọc chi tiết trước khi sử
        dụng <strong>for/in</strong>.
      </p>
      `,
      },
    ],
  },
  {
    title: `Code Magnets`,
    contents: [
      {
        div: `<p>
        Các đầu bếp đã quyết định rằng họ muốn có thể thay thế các món ăn trong thực
        đơn bữa trưa của họ; nói cách khác, họ sẽ cung cấp một số món vào Thứ Hai, Thứ
        Tư, Thứ Sáu và Chủ Nhật, và các món khác vào Thứ Ba, Thứ Năm và Thứ Bảy. Một
        người nào đó đã viết code cho một DinerMenu Iterator mới để nó thay thế các
        món ăn trong menu, nhưng họ đã xáo trộn nó như một trò đùa. Một số đoạn code
        rơi xuống sàn và chúng quá nhỏ để nhặt lại, vì vậy hãy thoải mái thêm bao
        nhiêu trong số những thứ bạn cần.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_50.jpg`),
          width: `70%`,
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
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_51.jpg`),
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
    title: `Waitress đã sẵn sàng cho thời gian chính?`,
    contents: [
      {
        div: `<p>
        Waitress đã đi được một chặng đường dài, nhưng bạn đã phải thừa nhận ba lần
        gọi đến <strong>printMenu()</strong> trông có vẻ “xấu xí”.
      </p>
      
      <p>
        Hãy xem thực tế, mỗi khi chúng ta thêm một menu mới, chúng ta sẽ phải mở triển
        khai Waitress và thêm code mới. Bạn có thể nói rằng “vi phạm nguyên tắc đóng
        mở” không?
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_52.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Nó không phải là lỗi của Waitress. Chúng tôi đã thực hiện một công việc tuyệt
        vời là tách rời việc thực hiện menu và đưa phép lặp vào một iterator. Nhưng
        chúng tôi vẫn đang xử lý các menu với các đối tượng độc lập, riêng biệt –
        chúng tôi cần một cách để quản lý chúng cùng nhau.
      </p>`,
      },
    ],
  },
  {
    title: `Sử dụng sức mạnh bộ não`,
    contents: [
      {
        div: `<p>
        Waitress vẫn cần thực hiện ba lần gọi đến <strong>printMenu()</strong>, một
        lần gọi cho mỗi menu. Bạn có thể nghĩ ra cách kết hợp các menu để chỉ cần thực
        hiện một lần gọi không?
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_53.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-11_54.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Điều này có vẻ khá tốt, mặc dù chúng tôi đã mất tên của các menu, nhưng chúng
        tôi có thể thêm tên vào mỗi menu.
      </p>
      
      <p>
        (xem tiếp..<a
          rel="noreferrer noopener"
          href="https://toihocdesignpattern.com/chuong-4-factory-pattern-va-abstract-factory-pattern-phan-2.html"
          target="_blank"
          >.</a
        ><a
          href="https://toihocdesignpattern.com/chuong-9-iterator-pattern-va-composite-pattern-p2-composite-pattern.html"
          >Iterator Pattern và Composite Pattern phần 2</a
        >).
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
