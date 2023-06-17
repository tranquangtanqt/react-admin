import IContent from 'utils/interface';

export const chapter4: IContent[] = [
  {
    title: ``,
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_1.jpg`),
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
    title: `Factory Pattern – Hãy sẵn sàng “tiếp đón” một vài thiết kế OO “kết
            hợp lỏng lẻo”`,
    contents: [
      {
        div: `<p>
        Có nhiều thứ để tạo ra đối tượng thay vì sử dụng toán tử 
        <strong>
          <em>new</em>
        </strong>
        . Với <strong>Factory Pattern</strong> bạn sẽ học được rằng khởi tạo
        là một hoạt động không phải lúc nào cũng được thực hiện công khai, và
        điều đó thường dẫn đến các vấn đề về sự phụ thuộc. Và bạn không muốn
        điều đó, phải không? Tìm hiểu làm thế nào 
        <strong>Factory Pattern</strong> có thể cứu bạn khỏi sự phụ thuộc giữa
        các lớp.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_2.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>Khi bạn thấy từ khóa “new”, hãy nghĩ về các lớp con.</strong>
      </p>

      <p>
        Vâng, khi bạn sử dụng 
        <strong>
          <em>new</em>
        </strong>
        , bạn chắc chắn đang tạo một object của lớp con, do đó, chắc chắn là
        một “programing to implement” (Khái niệm này được nhắc ở 
        <a href="https://toihocdesignpattern.com/chuong-1-strategy-pattern-chao-mung-den-voi-design-patterns.html">
          Chương 1
        </a>
        ), không phải là “programing to interface” . Và nó là một câu hỏi hay;
        bạn đã học được rằng việc gắn code của bạn vào một lớp cấp thấp có thể
        dễ vỡ và kém linh hoạt hơn.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_3.jpg`),
          width: `60%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Khi bạn có cả một tập hợp các lớp con liên quan, thường thì bạn sẽ
        buộc phải viết code như thế này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_4.jpg`),
          width: `60%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Ở đây, chúng tôi đã có một số lớp cụ thể được khởi tạo và quyết định
        khởi tạo được đưa ra trong thời gian chạy (runtime) tùy thuộc vào một
        số điều kiện.
      </p>

      <p>
        Khi bạn thấy code thế này, bạn biết rằng khi đến lúc phải thay đổi
        hoặc mở rộng, bạn sẽ phải mở lại code này và kiểm tra những gì cần
        thêm (hoặc xóa). Thông thường loại code thế này kết thúc trong một số
        phần của ứng dụng khiến việc bảo trì và cập nhật trở nên khó khăn hơn
        và dễ bị lỗi hơn.
      </p>
      <p>
          <strong>
            Nhưng bạn phải tạo một đối tượng và Java chỉ cung cấp cho chúng ta
            một cách duy nhất để tạo một đối tượng (new), phải không? Vì vậy, ta
            sẽ làm gì? Có điều gì sai khi sử dụng “new”?
          </strong>
        </p>

        <p>
          Về mặt kỹ thuật, không có gì sai với <strong>new </strong>cả, nó là
          một phần cơ bản của Java. Thủ phạm thực sự là người bạn cũ của chúng
          ta – <strong>SỰ THAY ĐỔI, </strong>và <strong>SỰ THAY ĐỔI</strong> ảnh
          hưởng đến việc sử dụng <strong>new </strong>của chúng ta.
        </p>

        <p>
          Bằng cách “code với một interface” (programing to interface), bạn biết
          rằng bạn có thể tự bảo vệ mình khỏi rất nhiều thay đổi có thể xảy ra
          với một hệ thống. Tại sao? Nếu code của bạn được dựa trên một
          interface, thì nó sẽ hoạt động với bất kỳ lớp mới nào implement
          interface đó thông qua đa hình. Tuy nhiên, khi bạn có code dựa trên
          lớp con, bạn sẽ gặp rắc rối vì code đó có thể phải thay đổi khi các
          lớp con mới được thêm vào. Vì vậy, nói cách khác, lớp của bạn sẽ không
          bị “đóng cho việc sửa đổi” (vi phạm nguyên tắc đã đề cập ở 
          <a href="react-admin/#/ebook/vietnamese/head-first-design-patterns/3">
            Chương 3: Decorator Pattern – Đối tượng trang trí
          </a>
          ). Để có thể mở rộng nó với các loại lớp con mới, bạn sẽ bắt buộc phải
          “mở” lại nó.
        </p>
        <p>
          Vậy bạn có thể làm gì? Đây là lúc bạn có thể dựa vào Nguyên tắc thiết
          kế OO để tìm kiếm manh mối. Hãy nhớ rằng, nguyên tắc đầu tiên của
          chúng ta (
          <a
            href="react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Strategy (mở trong tab mới)"
          >
            Strategy
          </a>
          ) liên quan đến sự thay đổi và hướng dẫn chúng ta xác định các khía
          cạnh khác nhau và tách chúng khỏi những gì vẫn giữ nguyên.
        </p>`,
      },
    ],
  },
  {
    title: 'Sử dụng sức mạnh bộ não',
    contents: [
      {
        div: `<p>
        Làm thế nào bạn có thể lấy tất cả các đoạn code “khởi tạo lớp con”
        trong ứng dụng của bạn và tách hoặc đóng gói chúng khỏi những phần còn
        lại?
      </p>`,
      },
    ],
  },
  {
    title: 'Xác định các khía cạnh khác nhau',
    contents: [
      {
        div: `<p>
        Hãy nói rằng bạn có một cửa hàng pizza và là chủ cửa hàng pizza tiên
        tiến ở Objectville, bạn có thể sẽ viết một số dòng code như thế này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_5.jpg`),
          width: `60%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>NHƯNG BẠN CẦN NHIỀU LOẠI PIZZA HƠN…</b></h6>`,
      },
      {
        div: `<p>
        Vì vậy, sau đó bạn thêm một số dòng code định nghĩa loại pizza phù hợp
        và sau đó khởi tạo bánh pizza:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_6.jpg`),
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
    title: 'Nhưng phải thêm nhiều loại pizza nữa',
    contents: [
      {
        div: `<p>
        Bạn nhận ra rằng tất cả các đối thủ cạnh tranh của bạn đã thêm một vài
        loại pizza “hợp thời trang” vào thực đơn của họ: 
        <strong>Pizza Clam</strong> và <strong>Veggie Pizza</strong>. Rõ ràng
        bạn cần theo kịp đối thủ, vì vậy bạn sẽ <strong>thêm </strong>các mục
        này vào thực đơn của mình. Và gần đây bạn không bán được nhiều bánh 
        <strong>Greek Pizzas</strong>, vì vậy bạn quyết định 
        <strong>loại bỏ</strong> nó ra khỏi thực đơn:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_7.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Rõ ràng, việc xử lý khởi tạo trên thực sự gây rối cho phương thức 
        <strong>
          <em>orderPizza() </em>
        </strong>
        của chúng ta và ngăn không cho nó “đóng cho việc sửa đổi”. Nhưng bây
        giờ chúng ta đã biết cái gì đang thay đổi và cái gì không, có lẽ đã
        đến lúc đóng gói nó.
      </p>`,
      },
    ],
  },
  {
    title: 'Đóng gói việc khởi tạo đối tượng',
    contents: [
      {
        div: `<p>
        Vì vậy, bây giờ chúng ta biết rằng sẽ tốt hơn khi chuyển việc tạo đối
        tượng ra khỏi phương thức 
        <strong>
          <em>orderPizza()</em>
        </strong>
        . Nhưng bằng cách nào? Chà, những gì chúng tôi sẽ làm là lấy phần code
        tạo pizza và chuyển nó ra một đối tượng khác chỉ liên quan đến việc
        tạo ra pizza.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_8.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>
          Chúng tôi đã đặt tên cho đối tượng mới này: chúng tôi gọi nó là
          Factory.
        </strong>
      </p>

      <p>
        Các nhà máy Factory xử lý phần chi tiết của việc tạo đối tượng. Khi
        chúng ta có một <strong>SimplePizzaFactory</strong>, phương thức 
        <em>
          <strong>orderPizza() </strong>
        </em>
        của chúng ta sẽ trở thành một máy khách (client) của đối tượng đó. Bất
        cứ khi nào nó cần một chiếc bánh pizza, nó sẽ yêu cầu nhà máy sản xuất
        pizza làm một cái. Đã qua rồi cái thời mà phương thức 
        <em>
          <strong>orderPizza() </strong>
        </em>
        cần biết về loại pizza <strong>Greek Pizzas</strong> hay là
        <strong> Clam pizzas</strong>. Bây giờ phương thức 
        <em>
          <strong>orderPizza()</strong>
        </em> 
        chỉ quan tâm rằng nó nhận được một chiếc bánh pizza đang implement
        giao diện Pizza để nó có thể gọi 
        <em>
          <strong>prepare()</strong>
        </em>
        , 
        <em>
          <strong>bake()</strong>
        </em>
        , 
        <em>
          <strong>cut()</strong>
        </em>
        , và 
        <em>
          <strong>box()</strong>
        </em>
        .
      </p>
      <p>
          Chúng tôi vẫn có một vài chi tiết để điền vào đây; chẳng hạn, phương
          thức 
          <em>
            <strong>orderPizza()</strong>
          </em> 
          thay thế code tạo của nó bằng gì? Hãy implement một nhà máy đơn giản
          cho cửa hàng pizza và tìm hiểu …
        </p>`,
      },
    ],
  },
  {
    title: 'Xây dựng một Pizza Factory đơn giản',
    contents: [
      {
        div: `<p>
        Chúng tôi sẽ bắt đầu với chính nhà máy. Những gì chúng tôi sẽ làm là
        định nghĩa một lớp gói gọn việc tạo đối tượng cho tất cả các loại
        pizza. Nó đây…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_9.jpg`),
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
    title: 'Không có câu hỏi nào ngớ ngẩn',
    contents: [
      {
        div: `<p>
        <strong>Hỏi:</strong> Lợi ích của việc này là gì? Có vẻ như chúng ta
        chỉ đang đẩy vấn đề sang một đối tượng khác.
      </p>

      <p>
        <strong>Trả lời: </strong>Một điều cần nhớ là 
        <strong>SimplePizzaFactory </strong>có thể có nhiều client. Chúng ta
        chỉ thấy phương thức 
        <strong>
          <em>orderPizza()</em>
        </strong> 
        gọi đến nó; tuy nhiên, có thể có một lớp client khác – 
        <strong>PizzaShopMenu </strong>cũng sử dụng factory để tạo pizza và
        lấy mô tả và giá&nbsp;của nó. Chúng ta cũng có thể có một lớp 
        <strong>HomeDelivery </strong>gọi đến nhà máy tạo pizza theo cách khác
        với lớp <strong>PizzaShop</strong>, nhưng tất cả chúng đều là client
        của <strong>Factory</strong>.
      </p>
      <p>
      Vì vậy, bằng cách đặt việc khởi tạo pizza trong nhiều lớp, giờ đây
      chúng ta chỉ có một lớp để thực hiện sửa đổi khi cần thiết. Đừng quên,
      chúng ta cũng sắp xóa việc khởi tạo lớp con khỏi phương thức 
      <strong>
        <em>orderPizza()</em>
      </strong> 
      !
    </p>
    <p>
          <strong>Hỏi:</strong> Tôi đã thấy một thiết kế tương tự, trong đó một
          factory sẽ được định nghĩa là một phương thức static. Có sự khác biệt
          gì không?
        </p>

        <p>
          <strong>Trả lời:</strong> Định nghĩa factory là một phương thức static
          là một kỹ thuật phổ biến và thường được gọi là một 
          <strong>“static factory”</strong>. Tại sao sử dụng phương thức tĩnh ư?
          Bởi vì bạn không cần khởi tạo một đối tượng để sử dụng phương thức
          factory. Nhưng hãy nhớ rằng nó cũng có sự bất lợi là bạn không thể có
          lớp con và thay đổi hành vi của phương thức <em>get</em>, <em>set</em>
          .
        </p>`,
      },
    ],
  },
  {
    title: 'Làm lại lớp PizzaStore với Simple Factory',
    contents: [
      {
        div: `<p>
        Bây giờ là thời gian để sửa code. Những gì chúng tôi muốn làm là dựa
        vào factory để tạo ra các loại pizza. Dưới đây là những thay đổi:
      </p>

      <p>
        Bây giờ lớp PizzaStore (client) sẽ tham chiếu đến 
        <strong>SimplePizzaFactory</strong> (factory) của chúng ta.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_10.jpg`),
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
    title: 'Sử dụng sức mạnh bộ não',
    contents: [
      {
        div: `<p>
        Chúng ta biết rằng việc kết hợp các object (composition) thay vì
        implementation cho phép chúng ta thay đổi hành vi một cách linh hoạt
        trong runtime bởi vì chúng có thể thay đổi giữa trong và ngoài việc kế
        thừa. Làm thế nào chúng ta có thể sử dụng điều này trong PizzaStore?
        Những triển khai factory nào chúng ta có thể trao đổi giữa trong và
        ngoài?
      </p>`,
      },
    ],
  },
  {
    title: 'Định nghĩa Simple Factory',
    contents: [
      {
        div: ` <p>
        <strong>Simple Factory</strong> không thực sự là một mẫu thiết kế; nó
        là một programming idiom (thành ngữ lập trình). Nhưng nó thường được
        sử dụng, vì vậy chúng tôi sẽ tặng cho nó một danh hiệu “Head First
        Pattern Honorable Mention”. 
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_11.jpg`),
          width: `20%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Một số nhà phát triển đã nhầm với “Factory Pattern” (những gì chúng ta
        tìm hiểu nãy giờ không phải là Factory Pattern), vì vậy lần sau, khi
        giữa bạn và một developer khác không biết nói gì, bạn đã có một chủ đề
        hay để bàn luận.
      </p>

      <p>
        Simple Factory không phải là một mẫu THỰC SỰ, không có nghĩa là chúng
        ta không nên xem xét cách mà nó kết hợp với nhau. Hãy cùng xem sơ đồ
        lớp của Cửa hàng Pizza mới của chúng tôi:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_12.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Hãy nghĩ về Simple Factory như một sự khởi động. Phía sau, chúng ta
        cũng sẽ khám phá 
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/5">
          Abstract Factory Pattern
        </a>
        . Nhưng đừng lo, vẫn còn nhiều điều để nói ở đây!
      </p>

      <p>
        <em>
          * Chỉ là một lời nhắc khác: trong các mẫu thiết kế, cụm từ
          “implement an interface”, không phải lúc nào cũng có nghĩa là “tạo
          một lớp implement một Java interface, bằng cách sử dụng từ khóa
          “implements” trong khai báo lớp con”. Một lớp cụ thể implements một
          phương thức từ một supertype (có thể là một lớp HOẶC interface) vẫn
          được coi là một “implement an interface” của supertype đó.
        </em>
      </p>`,
      },
    ],
  },
  {
    title: 'Nhượng quyền cửa hàng pizza',
    contents: [
      {
        div: `<p>
        <em>
          (Nhượng quyền thương hiệu hiểu nôm na là cho phép dùng thương hiệu
          của bạn để mở một chi nhánh khác, và chia lại lợi nhuận cho bạn.
          Royal tea – Trà sữa ở tất cả các nơi không phải cùng 1 người sở hữu,
          đó đã được nhượng quyền lại cho người khác)
        </em>
      </p>

      <p>
        Objectville PizzaStore của bạn đã làm rất tốt đến nỗi bạn đã vượt qua
        đối thủ và bây giờ mọi người đều muốn có một PizzaStore ở nơi họ sống.
        Là người nhượng quyền (franchiser), bạn muốn đảm bảo chất lượng của
        hoạt động nhượng quyền và vì vậy bạn muốn họ sử dụng lại code (mà bạn
        bạn đã bỏ thời gian ra test) để các cửa hàng được nhượng quyền sử
        dụng.
      </p>
      <p>
          Nhưng có sự khác biệt về khu vực? Mỗi nơi được nhượng quyền có thể
          muốn cung cấp các loại pizza khác nhau (New York, Chicago và
          California,…), tùy thuộc vào vị trí cửa hàng được nhượng quyền và thị
          hiếu của những người sành pizza ở địa phương.
          <br />
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_13.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>CHÚNG TÔI ĐÃ THẤY MỘT CÁCH TIẾP CẬN …</b></h6>`,
      },
      {
        div: `<p>
        Nếu chúng tôi loại bỏ lớp <strong>SimplePizzaFactory </strong>và tạo
        ra ba lớp factory khác: <strong>NYPizzaFactory</strong>, 
        <strong>ChicagoPizzaFactory </strong>và 
        <strong>CaliforniaPizzaFactory</strong>, thì chúng tôi có thể kết hợp 
        <strong>PizzaStore </strong>với một factory phù hợp và nhượng quyền
        thương mại là điều tốt. Đó là một cách tiếp cận.
      </p>
      <p>Hãy xem điều này sẽ trông như …</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_14.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>NHƯNG BẠN MUỐN KIỂM SOÁT CHẤT LƯỢNG HƠN MỘT CHÚT …</b></h6>`,
      },
      {
        div: `<p>
        Vì vậy, bạn đã thử nghiệm <strong>SimpleFactory </strong>cho các cửa
        hàng được nhượng quyền và những gì bạn thấy là các cửa hàng đó đang sử
        dụng <strong>SimpleFactory </strong>để tạo ra pizza, nhưng ở địa
        phương của họ, cách tạo bánh pizza sẽ có một vài khác biệt: họ nướng
        mọi thứ hơi khác một chút, họ phải cắt bánh pizza ra trước khi giao và
        họ sẽ sử dụng hộp của bên thứ ba…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_15.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Xem xét lại vấn đề một chút, bạn thấy rằng những gì bạn thực sự muốn
        làm là tạo ra một khuôn khổ gắn kết cửa hàng và việc tạo ra pizza với
        nhau, nhưng vẫn cho phép mọi thứ vẫn linh hoạt. (Với 
        <strong>SimpleFactory</strong> thì rõ ràng bạn đang bắt buộc các cửa
        hàng nhượng quyền phải theo một khuôn khổ duy nhất)
      </p>

      <p>
        Trong code trước đây của chúng tôi, trước 
        <strong>SimplePizzaFactory</strong>, chúng tôi đã có code làm bánh
        pizza gắn liền với <strong>PizzaStore</strong>, nhưng nó không linh
        hoạt. Vì vậy, làm thế nào chúng ta có thể có bánh pizza của chúng tôi?
      </p>`,
      },
    ],
  },
  {
    title: 'Một Framework cho cửa hàng pizza',
    contents: [
      {
        div: `<p>
        Có một cách để “bản địa hóa” tất cả các hoạt động làm bánh pizza cho
        lớp PizzaStore, nhưng vẫn cho phép nhượng quyền tự do theo style của
        từng khu vực riêng.
      </p>

      <p>
        Những gì chúng tôi sẽ làm là đưa phương thức 
        <strong>createPizza()</strong> trở lại vào <strong>PizzaStore</strong>
        , nhưng lần này là một phương thức trừu tượng (abstract), sau đó tạo
        một lớp con <strong>PizzaStore </strong>cho mỗi kiểu vùng.
      </p>

      <p>Đầu tiên, hãy xem các thay đổi của PizzaStore:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_16.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: ` <p>
        Bây giờ chúng tôi đã có một cửa hàng đang chờ các lớp con kế thừa;
        chúng tôi sẽ có các lớp con cho từng loại khu vực (
        <strong>NYPizzaStore</strong>, <strong>ChicagoPizzaStore</strong>, 
        <strong>CaliforniaPizzaStore</strong>) và mỗi lớp con sẽ đưa ra quyết
        định về những gì tạo nên một chiếc bánh pizza. Hãy xem điều này sẽ
        hoạt động như thế nào.
      </p>`,
      },
    ],
  },
  {
    title: 'Cho phép lớp con quyết định',
    contents: [
      {
        div: `<p>
        Hãy nhớ rằng, PizzaStore đã có một hệ thống đặt hàng được test kỹ
        lưỡng trong phương thức <strong>orderPizza()</strong> và bạn muốn đảm
        bảo rằng nó phù hợp với tất cả các nơi được nhượng quyền.
      </p>

      <p>
        Điều khác biệt giữa các <strong>PizzaStores </strong>ở từng địa phương
        là phong cách pizza họ làm – Pizza New York có lớp vỏ mỏng, Chicago
        Pizza dày, v.v. – và chúng tôi sẽ đưa tất cả các biến thể này vào
        phương thức <strong>createPizza() </strong>và nó sẽ chịu trách nhiệm
        tạo ra đúng loại pizza. Chúng ta làm điều này là bằng cách cho phép
        mỗi lớp con của PizzaStore định nghĩa lại phương thức 
        <strong>createPizza()</strong>. Vì vậy, chúng ta sẽ có một số lớp con
        cụ thể của <strong>PizzaStore</strong>, mỗi lớp có các biến thể pizza
        riêng, tất cả đều nằm trong khung <strong>PizzaStore </strong>và vẫn
        sử dụng phương thức <strong>orderPizza()</strong>.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_17.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Chà, hãy nghĩ về nó theo quan điểm của phương thức 
        <strong>orderPizza()</strong> của lớp <strong>PizzaStore</strong>: nó
        được định nghĩa trong lớp trừu tượng <strong>PizzaStore</strong>,
        nhưng các loại cụ thể chỉ được tạo trong các lớp con.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_18.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bây giờ, để hiểu thêm một chút, phương thức 
        <strong>orderPizza() </strong>thực hiện rất nhiều thứ với một đối
        tượng Pizza (như chuẩn bị, nướng, cắt, đóng hộp), nhưng bởi vì Pizza
        là abstract, <strong>orderPizza()</strong> không biết lớp con thực sự
        là gì, có liên quan như thế nào. Nói cách khác, nó đã tách ra!
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_19.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Khi <strong>orderPizza()</strong> gọi <strong>createdPizza()</strong>,
        một trong các lớp con của bạn sẽ được gọi hành động để tạo ra một
        chiếc bánh pizza. Những loại pizza nào sẽ được làm? Chà, điều đó quyết
        định bởi sự lựa chọn cửa hàng pizza mà bạn đặt hàng từ 
        <strong>NYStylePizzaStore </strong>hoặc 
        <strong>ChicagoStylePizzaStore</strong>.
      </p>

      <p>
        Vì vậy, có một quyết định mà các lớp con đưa ra trong thời gian thực
        (runtime) đúng không? Không, nhưng theo quan điểm của 
        <strong>orderPizza()</strong>, nếu bạn chọn 
        <strong>NYStylePizzaStore</strong>, lớp con đó sẽ xác định loại pizza
        nào được làm. Vì vậy, các lớp con không phải là người quyết định thực
        sự – mà đó là bạn, bạn quyết định bằng cách chọn cửa hàng nào bạn muốn
        – nhưng lớp con lại xác định loại pizza nào được làm.
      </p>`,
      },
    ],
  },
  {
    title: 'Hãy tạo một PizzaStore',
    contents: [
      {
        div: `<p>
        Là một nơi được nhượng quyền sẽ có lợi ích của nó. Bạn nhận được tất
        cả các chức năng của lớp <strong>PizzaStore</strong> miễn phí. Tất cả
        các cửa hàng địa phương cần làm là phân lớp 
        <strong>PizzaStore </strong>và cung cấp phương thức 
        <strong>createPizza() </strong>tạo các loại Pizza của họ. Chúng ta sẽ
        quan tâm ba phong cách pizza lớn cho những người được nhượng quyền.
      </p>

      <p>Ở đây, phong cách khu vực New York:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_20.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Lưu ý rằng phương thức <strong>orderPizza()</strong> trong lớp cha
        không biết loại Pizza nào chúng ta đang tạo; Nó chỉ biết nó có thể
        chuẩn bị, nướng, cắt, và đóng hộp!
      </p>

      <p>
        Một khi chúng ta đã xây dựng các lớp con <strong>PizzaStore</strong>,
        đã đến lúc xem về việc đặt mua một hoặc hai chiếc bánh pizza. Nhưng
        trước khi chúng ta làm điều đó, tại sao bạn không tự xây dựng các cửa
        hàng pizza <strong>Chicago Style</strong> và 
        <strong>California Style</strong>? Lấy giấy ra và làm đi nào.
      </p>`,
      },
    ],
  },
  {
    title: 'Mô tả một phương thức factory',
    contents: [
      {
        div: `<p>
        Chỉ với một vài biến đổi cho <strong>PizzaStore</strong>, chúng tôi đã
        chuyển từ việc chỉ có một đối tượng xử lý việc khởi tạo các lớp cụ thể
        của chúng tôi thành một tập hợp các lớp con hiện đang đảm nhận trách
        nhiệm đó. Hãy để xem xét kỹ hơn:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_21.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_22.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>HÃY CÙNG XEM CÁCH THỨC HOẠT ĐỘNG CỦA NÓ: ĐẶT MỘT CÁI PIZZA VỚI FACTORY METHOD</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_23.jpg`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>VẬY LÀM THẾ NÀO ĐỂ HỌ ĐẶT HÀNG?</b></h6>`,
      },
      {
        div: `<ol>
        <li>
          Đầu tiên, Joel và Ethan cần một thể hiện (instance) của 
          <strong>PizzaStore</strong>. Joel thì cần khởi tạo một 
          <strong>ChicagoPizzaStore </strong>và Ethan cần một 
          <strong>NYPizzaStore</strong>.
        </li>
        <li>
          Với một <strong>PizzaStore </strong>trong tay, cả Ethan và Joel đều
          gọi phương thức <strong>orderPizza()</strong> và điền type pizza mà
          họ muốn (phô mai, rau, v.v.).
        </li>
        <li>
          Để tạo ra các loại pizza, phương thức <strong>createPizza()</strong> 
          được gọi, được định nghĩa trong hai lớp con 
          <strong>NYPizzaStore </strong>và <strong>ChicagoPizzaStore</strong>.
          Như chúng tôi đã định nghĩa chúng, <strong>NYPizzaStore </strong>tạo
          ra một chiếc bánh pizza theo phong cách NY và 
          <strong>ChicagoPizzaStore </strong>tạo ra chiếc bánh pizza kiểu
          Chicago. Trong cả hai trường hợp, Pizza được trả về phương thức 
          <strong>orderPizza()</strong>.
        </li>
        <li>
          Phương thức <strong>orderPizza()</strong> không biết loại pizza nào
          được tạo ra, nhưng nó biết nó là một loại pizza và nó chuẩn bị, làm
          bánh, cắt, và đóng hộp cho Ethan và Joel.
        </li>
      </ol>`,
      },
      {
        p: `<h6><b>HÃY CÙNG KIỂM TRA XEM NHỮNG CHIẾC PIZZA NÀY THỰC SỰ ĐƯỢC SẢN XUẤT NHƯ THẾ NÀO KHI ORDER…</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_24.jpg`),
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
    title: 'Chúng ta vừa quên một thứ: TẠO PIZZA!',
    contents: [
      {
        p: `<h6><b>PIZZASTORE CỦA CHÚNG TA SẼ KHÔNG PHỔ BIẾN NẾU KHÔNG CÓ MỘT SỐ LOẠI PIZZA, VÌ VẬY HÃY LÀM CHÚNG:</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_25.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>BÂY GIỜ CHÚNG TA CHỈ CẦN MỘT SỐ LỚP CON CỤ THỂ … 
        LÀM THẾ NÀO ĐỂ XÁC ĐỊNH CHEESE PIZZAS KIỂU NEW YORK HAY CHICAGO?</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_26.jpg`),
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
    title: `Bạn đã đợi đủ lâu, thời gian này cho một vài cái pizza!`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_27.jpg`),
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
    title: 'Cuối cùng cũng đến lúc biết về Factory Pattern',
    contents: [
      {
        div: `<p>
        Tất cả các mẫu factory đóng gói việc tạo đối tượng. Mẫu 
        <strong>Factory Pattern </strong>đóng gói việc tạo đối tượng bằng cách
        để các lớp con quyết định những đối tượng sẽ tạo. Hãy cùng kiểm tra
        các sơ đồ lớp này để xem ai là “người chơi chính” trong mẫu này:
      </p>`,
      },
      {
        p: `<h6><b>LỚP CREATOR</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_28.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>LỚP PRODUCT  </b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_29.jpg`),
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
    title: `Một góc nhìn khác của Factory Pattern: hệ thống phân cấp lớp dạng
    song song`,
    contents: [
      {
        div: `<p>
        Chúng tôi đã thấy rằng factory pattern cung cấp một framework bằng
        cách cung cấp một phương thức <strong>orderPizza()</strong> được kết
        hợp với một factory method. Một cách khác để xem mẫu này như một
        framework là trong cách nó gói gọn “thông tin về sản phẩm” vào mỗi
        creator.
      </p>

      <p>
        Hãy cùng xem xét hai hệ thống phân cấp lớp đặt song song và xem chúng
        liên quan như thế nào:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_30.jpg`),
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
    title: 'Thiết kế',
    contents: [
      {
        div: ` <p>
        Chúng ta cần một loại bánh pizza khác cho những người California. Vẽ
        một tập hợp các lớp song song khác mà bạn cần để thêm một vùng
        California mới vào chuỗi cửa hàng <strong>PizzaStore </strong>của
        chúng tôi.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_31.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Được rồi, bây giờ viết năm thứ kỳ lạ nhất mà bạn có thể nghĩ ra để đặt
        trên một chiếc bánh pizza.
      </p>

      <p>Sau đó, bạn sẽ sẵn sàng kinh doanh làm pizza ở California!</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_32.jpg`),
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
    title: 'Định nghĩa Factory Pattern',
    contents: [
      {
        div: `<p>
        Đây là thời gian để đưa ra định nghĩa chính thức của 
        <strong>Factory Pattern</strong> (hay 
        <strong>Factory Method Pattern</strong>):
      </p>
`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_33.jpg`),
          width: `70%`,
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
            (Factory Pattern xác định một interface để tạo một đối tượng,
            nhưng cho phép các lớp con quyết định lớp nào sẽ khởi tạo.&nbsp;
            Factory Pattern giao việc khởi tạo một đối tượng cụ thể cho lớp
            con)
          </em>
        </strong>
      </p>

      <p>
        Như với mọi nhà máy, Mẫu <strong>Factory Pattern </strong>cho chúng ta
        một cách để gói gọn các khởi tạo của các loại cụ thể. Nhìn vào sơ đồ
        lớp bên dưới, bạn có thể thấy rằng abstract <strong>Creator</strong> 
        cung cấp cho bạn một interface với phương thức khởi tạo các đối tượng,
        còn được gọi là “factory method”. Bất kỳ lớp nào khác implement lớp
        abstract <strong>Creator </strong>đều được viết để vận hành trên các
        sản phẩm (object) được tạo bởi factory method. Chỉ các lớp con thực sự
        thực hiện phương thức factory và tạo ra sản phẩm (object).
      </p>
      <p>
          Như trong định nghĩa chính thức, bạn sẽ nghe các developer nói rằng 
          <strong>Factory Pattern </strong>cho phép các lớp con quyết định lớp
          nào sẽ khởi tạo. Họ nói rằng “quyết định” không phải vì mô hình cho
          phép chính các lớp con quyết định trong runtime, mà bởi vì lớp creator
          được viết mà không cần biết về các sản phẩm thực tế sẽ được tạo, được
          quyết định hoàn toàn bởi sự lựa chọn của lớp con.
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_34.jpg`),
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
        <strong>Hỏi: </strong>Có lợi ích gì không nếu Factory Pattern chỉ có
        một ConcreteCreator?
      </p>

      <p>
        <strong>Trả lời:</strong> Factory Pattern rất hữu ích nếu bạn chỉ có
        một concrete creator vì bạn đang tách riêng việc triển khai sản phẩm
        khỏi việc sử dụng nó. Nếu bạn thêm sản phẩm bổ sung hoặc thay đổi một
        Sản phẩm triển khai, nó sẽ không ảnh hưởng đến Creator của bạn (vì
        Creator không được liên kết chặt chẽ với bất kỳ ConcreteProduct nào).
      </p>
      <p>
          <strong>Hỏi:</strong> Có đúng không khi nói rằng các cửa hàng NY và
          Chicago của chúng tôi được triển khai bằng 
          <strong>Simple Factory</strong>? Chúng trông giống như nó.
        </p>

        <p>
          <strong>Trả lời:</strong> Chúng giống nhau, nhưng được sử dụng theo
          những cách khác nhau. Mặc dù việc triển khai của mỗi concrete store
          trông rất giống <strong>SimplePizzaFactory</strong>, hãy nhớ rằng các
          concrete store đang extends một lớp đã định nghĩa 
          <strong>createPizza()</strong> là một phương thức trừu tượng. Tùy
          thuộc vào mỗi cửa hàng để xác định hành vi của phương thức 
          <strong>createPizza()</strong>. Trong Simple Factory, factory là một
          đối tượng khác được kết hợp với <strong>PizzaStore</strong>.
        </p>

        <p>
          <strong>Hỏi:</strong> Có phải factory method và 
          <strong>Creator </strong>luôn trừu tượng?
        </p>

        <p>
          <strong>Trả lời:</strong> Không, bạn có thể xác định factory method
          mặc định để sản xuất một số sản phẩm cụ thể. Khi đó, bạn luôn có
          phương tiện tạo sản phẩm ngay cả khi không có lớp con của Creator.
        </p>

        <p>
          <strong>Hỏi:</strong> Mỗi cửa hàng có thể tạo ra bốn loại pizza khác
          nhau dựa trên type được truyền vào. Có phải tất cả các creator con đều
          tạo ra nhiều loại sản phẩm, hay đôi khi chúng chỉ làm một loại?
        </p>

        <p>
          <strong>Trả lời:</strong> Chúng tôi đã implemented những gì được biết
          thành tham số cho factory method. Nó có thể tạo nhiều hơn một đối
          tượng dựa trên tham số được truyền vào, như bạn thấy. Tuy nhiên, thông
          thường, một nhà máy chỉ tạo một đối tượng và không có tham số truyền
          vào. Cả hai đều là cách viết hợp lệ của mẫu.
        </p>

        <p>
          <strong>Hỏi:</strong> Các loại tham số của bạn dường như không an
          toàn. Tôi chỉ truyền một chuỗi String! Điều gì sẽ xảy ra nếu tôi yêu
          cầu một món “<strong>CalmPizza</strong>” (ý nói truyền tùy ý một chuỗi
          String nào cũng được)?
        </p>

        <p>
          <strong>Trả lời:</strong> Bạn chắc chắn là đúng và điều đó là nguyên
          nhân xảy ra lỗi thời gian chạy (runtime error). Có một vài kỹ thuật có
          thể áp dụng để tạo một tham số an toàn hơn hoặc một cách nói khác, đảm
          bảo lỗi trong các parameter có thể được catch (bắt) tại thời điểm biên
          dịch. Chẳng hạn, bạn có thể tạo các đối tượng đại diện cho các loại
          tham số, sử dụng các hằng số hoặc trong Java 5, bạn có thể sử dụng 
          <strong>
            <em>Enums</em>
          </strong>
          .
        </p>

        <p>
          <strong>Hỏi:</strong> Tôi vẫn còn một chút bối rối về sự khác biệt
          giữa <strong>Simple Factory</strong> và 
          <strong>Factory Pattern</strong>. Chúng trông rất giống nhau, ngoại
          trừ trong <strong>Factory Pattern</strong>, lớp
          returns&nbsp;&nbsp;pizza là một lớp con. Bạn có thể giải thích không?
        </p>

        <p>
          <strong>Trả lời:</strong> Bạn đúng về điều đó, các lớp con trông rất
          giống Simple Factory, tuy nhiên, suy nghĩ của Simple Factory như một
          “shot deal”, trong khi với Factory Pattern, bạn đang tạo một framework
          để cho phép các lớp con quyết định việc triển khai nào sẽ được sử
          dụng. Ví dụ, phương thức 
          <strong>
            <em>orderPizza() </em>
          </strong>
          trong Factory Pattern cung cấp một framework chung để tạo ra các loại
          pizza (dựa trên phương thức factory) khi đó các lớp con sẽ trực tiếp
          tạo ra những chiếc pizza. Bằng cách phân lớp 
          <strong>PizzaStore</strong>, bạn quyết định sản phẩm cụ thể nào 
          <strong>
            <em>orderPizza()</em>
          </strong> 
          sẽ return. So sánh với <strong>SimpleFactory</strong>, cung cấp cho
          bạn một cách để đóng gói việc tạo đối tượng, nhưng không cho phép bạn
          linh hoạt như Factory Pattern vì không có cách nào để thay đổi các sản
          phẩm bạn tạo ra.
          <br />
        </p>`,
      },
    ],
  },
  {
    title: 'Sư phụ và Học trò…',
    contents: [
      {
        div: `<p>
        <strong>Sư phụ:</strong> Grasshopper, cho thầy biết con đã học được
        những gì?
      </p>

      <p>
        <strong>Học trò:</strong> Sư phụ, con đã thực hiện nghiên cứu của mình
        về “đóng gói những gì thay đổi” về phạm vi.
      </p>

      <p>
        <strong>Sư phụ:</strong> Tiếp tục đi…
      </p>

      <p>
        <strong>Học trò:</strong> Con đã học được rằng người ta có thể đóng
        gói code tạo ra các đối tượng. Khi có code khởi tạo các lớp cụ thể,
        đây là một khu vực thường xuyên thay đổi. Con đã học được một kỹ thuật
        gọi là “factory pattern”, cho phép con gói gọn hành vi khởi tạo này.
      </p>

      <p>
        <strong>Sư phụ:</strong> Và những “factory” đó, chúng có lợi ích gì?
      </p>

      <p>
        <strong>Học trò:</strong> Có rất nhiều. Bằng cách đặt tất cả code tạo
        đối tượng của mình vào một object hoặc phương thức, con tránh trùng
        lặp trong code của mình và cung cấp một nơi để thực hiện việc bảo trì.
        Điều đó cũng có nghĩa là các client chỉ phụ thuộc vào các interface
        thay vì các lớp cụ thể cần thiết để khởi tạo các đối tượng. Như con đã
        học được trong các nghiên cứu của mình, điều này cho phép con lập
        trình trên một giao diện (program to an interface), không phải là lập
        trình trên implementation và điều đó làm cho code của con linh hoạt
        hơn và có thể mở rộng trong tương lai.
      </p>

      <p>
        <strong>Sư phụ:</strong> Vâng Grasshopper, bản năng OO của con đang
        phát triển. Con có bất kỳ câu hỏi cho sư phụ ngày hôm nay không?
      </p>

      <p>
        <strong>Học trò:</strong> Sư phụ, con biết rằng bằng cách đóng gói
        việc tạo đối tượng, con đang “coding to abstractions” (code đến sự
        trừu tượng) và tách code client của con khỏi các triển khai thực tế.
        Nhưng factory code vẫn phải sử dụng các lớp concrete (lớp con kế thừa
        factory) để khởi tạo các đối tượng thực. Đây có phải là một cú lừa?
      </p>

      <p>
        <strong>Sư phụ:</strong> Grasshopper, Khởi tạo đối tượng là một thực
        tế của cuộc sống; chúng ta phải tạo các đối tượng hoặc chúng ta sẽ
        không bao giờ tạo một chương trình Java. Nhưng, với kiến
        &ZeroWidthSpace;&ZeroWidthSpace;thức về thực tế này, chúng ta có thể
        thiết kế code của mình, vì vậy chúng ta đã điều chỉnh creation code
        này giống như con cừu mà len của nó sẽ kéo qua mắt con
        <em>
           
          (nguyên văn: whose wool you would pull over your eyes – thành ngữ
          chỉ sự lừa ai đó)
        </em>
        . Sau khi được điều chỉnh, chúng ta có thể bảo vệ và bảo trì code khởi
        tạo (creation code). Nếu chúng ta để creation code của mình chạy tự
        do, thì chúng ta sẽ không bao giờ thu thập được “len” của nó.
      </p>

      <p>
        <strong>Học trò:</strong> Sư phụ, con thấy sự thật trong này.
      </p>

      <p>
        <strong>Sư phụ:</strong> Như thầy đã biết con sẽ làm. Bây giờ, đi và
        suy nghĩ về các phụ thuộc đối tượng (object dependencies).
        <br />
      </p>`,
      },
    ],
  },
  {
    title: `Cửa hàng Pizza “rất phụ thuộc”`,
    contents: [
      {
        div: `<p>
        Hãy giả vờ như bạn đã từng nghe nói về 
        <strong>Factory Pattern</strong>. Ở đây, một phiên bản của PizzaStore
        không sử dụng factory pattern; hãy đếm số đối tượng con tạo pizza lớp
        này phụ thuộc. Nếu bạn đã thêm pizza kiểu California vào PizzaStore
        này, thì có bao nhiêu đối tượng sẽ phụ thuộc vào đó?
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_35.jpg`),
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
    title: 'Nhìn vào sự phụ thuộc đối tượng',
    contents: [
      {
        div: `<p>
        Khi bạn trực tiếp khởi tạo một đối tượng, bạn phụ thuộc vào lớp cụ thể
        của nó. Hãy xem lại <strong>PizzaStore</strong> rất nhiều sự phụ thuộc
        của chúng tôi. Nó tạo ra tất cả các đối tượng pizza ngay trong lớp 
        <strong>PizzaStore</strong> thay vì ủy thác cho một lớp 
        <strong>Factory</strong>.
      </p>

      <p>
        Nếu chúng ta vẽ một sơ đồ biểu thị phiên bản đó của PizzaStore và tất
        cả các đối tượng mà nó phụ thuộc vào, thì ở đây, nó trông như thế nào:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_36.jpg`),
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
    title: 'Nguyên tắc nghịch đảo phụ thuộc',
    contents: [
      {
        div: `<p>
        Cần phải rõ ràng rằng việc giảm sự phụ thuộc vào các lớp cụ thể trong
        code của chúng ta là một điều tốt. Thực tế, chúng ta đã có một nguyên
        tắc thiết kế OO chính thức hóa khái niệm này; nó thậm chí còn có một
        tên chính thức lớn: Nguyên tắc nghịch đảo phụ thuộc (
        <em>Dependency Inversion Principle</em>).
      </p>

      <p>Ở đây, nguyên tắc chung:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_37.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <em>
          <strong>
            (Kiểu trừu tượng không nên phụ thuộc kiểu chi tiết. Ngược lại,
            kiểu chi tiết nên phụ thuộc kiểu trừu tượng)
          </strong>
        </em>
      </p>

      <p>
        Lúc đầu, nguyên tắc này nghe có vẻ giống lập trình trên một giao diện,
        không phải là triển khai (“Program to an interface, not an
        implementation”), phải không? Nó là tương tự; tuy nhiên, Nguyên tắc
        nghịch đảo phụ thuộc đưa ra một tuyên bố thậm chí còn mạnh mẽ hơn về
        sự trừu tượng. Nó cho thấy rằng các thành phần cấp cao của chúng ta
        không nên phụ thuộc vào các thành phần cấp thấp; thay vào đó, cả hai
        nên phụ thuộc vào trừu tượng.
      </p>

      <p>
        (
        <em>
          Chú thích thêm: Một thành phần cấp cao là một lớp có hành vi được
          xác định theo các khía cạnh của các thành phần ở cấp độ thấp.
        </em>
      </p>

      <p>
        <em>
          Ví dụ: PizzaStore là một thành phần cấp cao vì hành vi của nó được
          định nghĩa dưới dạng pizza – nó tạo ra tất cả các đối tượng pizza
          khác nhau, chuẩn bị, nướng, cắt và đóng hộp chúng, trong khi các
          loại pizza mà nó sử dụng là các thành phần cấp thấp.
        </em>
        )
      </p>

      <p>Nhưng cái quái đó có nghĩa là gì?</p>

      <p>
        Chà, hãy để bắt đầu bằng cách nhìn lại sơ đồ cửa hàng pizza trên trang
        trước. PizzaStore là thành phần cấp cao của chúng ta, và việc triển
        khai pizza là các thành phần cấp thấp, và rõ ràng PizzaStore phụ thuộc
        vào các lớp pizza cụ thể.
      </p>

      <p>
        Bây giờ, nguyên tắc này cho chúng ta biết thay vào đó chúng ta nên
        viết code để chúng ta phụ thuộc vào trừu tượng, chứ không phải các lớp
        cụ thể. Điều đó áp dụng cho cả các mô-đun cấp cao và mô-đun cấp thấp
        của chúng ta.
      </p>

      <p>
        Nhưng làm thế nào để chúng ta làm điều này? Hãy nghĩ về cách áp dụng
        nguyên tắc này cho việc triển khai PizzaStore rất phụ thuộc của chúng
        ta…
        <br />
      </p>`,
      },
    ],
  },
  {
    title: 'Áp dụng nguyên tắc',
    contents: [
      {
        div: `<p>
        Bây giờ, vấn đề chính với PizzaStore là nó phụ thuộc vào từng loại
        bánh pizza vì nó thực sự tạo ra trong phương thức 
        <strong>orderPizza()</strong> của nó.
      </p>

      <p>
        Mặc dù chúng ta đã tạo ra một sự trừu tượng hóa, Pizza, tuy nhiên
        chúng ta vẫn tạo ra những chiếc bánh pizza cụ thể trong lớp này, vì
        vậy chúng ta không nhận được nhiều lợi ích từ sự trừu tượng này.
      </p>

      <p>
        Làm thế nào chúng ta có thể đưa những cài đặt đó ra khỏi phương thức 
        <strong>orderPizza()</strong>? Vâng, như chúng ta đã biết, 
        <strong>Factory Pattern</strong> cho phép chúng ta làm điều đó.
      </p>

      <p>
        Vì vậy, sau khi chúng ta áp dụng <strong>Factory Pattern</strong>, sơ
        đồ của chúng ta trông như thế này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_38.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Sau khi áp dụng <strong>Factory Pattern</strong>, bạn sẽ nhận thấy
        rằng thành phần cấp cao của chúng tôi PizzaStore và các thành phần cấp
        thấp của chúng tôi, những loại pizza, cả hai đều phụ thuộc vào Pizza,
        sự trừu tượng. <strong>Factory Pattern</strong> không phải là kỹ thuật
        duy nhất tuân thủ Nguyên tắc nghịch đảo phụ thuộc, nhưng nó là một
        trong những kỹ thuật mạnh.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_39.jpg`),
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
    title: `Đâu là “sự đảo ngược” trong Dependency Inversion Principle?`,
    contents: [
      {
        div: `<p>
        “Sự đảo ngược” trong <em>Dependency Inversion Principle</em> là vì nó
        đảo ngược cách bạn thường nghĩ về thiết kế OO của mình. Nhìn vào sơ đồ
        trên trang trước, lưu ý rằng các thành phần cấp thấp hiện phụ thuộc
        vào mức độ trừu tượng cao hơn. Tương tự, thành phần cấp cao cũng được
        gắn với sự trừu tượng cao hơn. Vì vậy, biểu đồ phụ thuộc top-to-bottom
        mà chúng tôi đã vẽ một vài trang trở lại đã tự đảo ngược, với cả các
        mô-đun cấp cao và cấp thấp bây giờ tùy thuộc vào sự trừu tượng
        hóa.&nbsp;
      </p>

      <p></p>

      <p>
        Hãy suy nghĩ lướt qua về quá trình thiết kế điển hình và xem cách giới
        thiệu nguyên tắc có thể đảo ngược cách chúng ta nghĩ về thiết kế …
      </p>`,
      },
    ],
  },
  {
    title: 'Đảo ngược suy nghĩ của bạn',
    contents: [
      {
        div: `<p>
        Được rồi, vì vậy bạn cần phải thực hiện một 
        <strong>PizzaStore</strong>. Ý nghĩ đầu tiên xuất hiện trong đầu bạn
        là gì?
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_40.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Phải, bạn bắt đầu từ đầu và nghiên cứu về các lớp cụ thể, các loại
        pizza. Nhưng, như bạn đã thấy, bạn không muốn cửa hàng của mình quan
        tâm về các loại bánh concrete pizza, bởi vì sau đó nó sẽ phụ thuộc vào
        tất cả các lớp concrete đó!
      </p>

      <p>
        Bây giờ, ngay lập tức, hãy “đảo ngược” suy nghĩ của bạn … thay vì bắt
        đầu từ các lớp concrete, hãy bắt đầu tại Pizzas và suy nghĩ về những
        gì bạn có thể trừu tượng.
        <br />
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_41.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Đúng! Bạn đang nghĩ về Pizza trừu tượng. Vì vậy, bây giờ, hãy quay lại
        và suy nghĩ về thiết kế của Pizza Store một lần nữa.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-4_42.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Nhưng để làm được điều đó, bạn sẽ phải dựa vào một nhà máy Factory để
        đưa concrete classes đó ra khỏi Pizza Store. Một khi bạn đã làm điều
        đó, các loại concrete pizza khác nhau của bạn chỉ phụ thuộc vào sự
        trừu tượng và cửa hàng của bạn cũng vậy. Chúng tôi đã lấy một thiết kế
        trong đó, store phụ thuộc vào concrete classes và đảo ngược các phụ
        thuộc đó (cùng với suy nghĩ của bạn).
      </p>`,
      },
    ],
  },
  {
    title: 'Một vài hướng dẫn để giúp bạn làm theo Nguyên tắc này…',
    contents: [
      {
        div: `<p>
        Các hướng dẫn sau đây có thể giúp bạn tránh các thiết kế OO vi phạm
        Nguyên tắc nghịch đảo phụ thuộc:
      </p>

      <ul>
        <li>
          Không có biến giữ một tham chiếu đến một lớp cụ thể. (Nếu bạn sử
          dụng toán tử 
          <strong>
            <em>new</em>
          </strong>
          , bạn sẽ giữ một tham chiếu đến một lớp cụ thể. Sử dụng 
          <strong>Factory pattern</strong> để có được điều này!)
        </li>
        <li>
          Không có lớp xuất phát từ một lớp cụ thể. (Nếu bạn xuất phát từ một
          lớp cụ thể, bạn phụ thuộc vào một lớp cụ thể. Xuất phát từ một sự
          trừu tượng, như một giao diện hoặc một lớp trừu tượng)
        </li>
        <li>
          Không có phương thức nào override một phương thức của bất kỳ lớp cơ
          sở nào của nó (Nếu bạn override một implemented method, thì lớp cơ
          sở của bạn không thực sự là một sự trừu tượng hóa. Các phương thức
          được triển khai trong lớp cơ sở có nghĩa là được chia sẻ bởi tất cả
          các lớp con của bạn.)
        </li>
      </ul>

      <p>
        Nhưng chờ đã, không phải những hướng dẫn này là không thể làm theo
        sao? Nếu tôi làm theo những điều này, tôi sẽ không bao giờ có thể viết
        được một chương trình nào cẩ!
      </p>

      <p>
        Bạn đã chính xác! Giống như nhiều nguyên tắc của chúng tôi, đây là một
        hướng dẫn bạn nên cố gắng thực hiện, hơn là một quy tắc phải tuân thủ
        mọi lúc.
      </p>

      <p>
        Rõ ràng, mọi chương trình Java từng được viết đều vi phạm các nguyên
        tắc này!
      </p>

      <p>
        Nhưng, nếu bạn tiếp thu những hướng dẫn này và đặt chúng trong suy
        nghĩ của bạn khi thiết kế, bạn sẽ biết khi nào bạn vi phạm nguyên tắc
        và bạn có lý do chính đáng để làm như vậy. Chẳng hạn, nếu bạn có một
        lớp không có khả năng thay đổi và bạn biết điều đó, thì nó không vấn
        đề cho dù bạn có khởi tạo một lớp cụ thể trong code của mình. Nghĩ về
        nó; chúng ta khởi tạo các đối tượng <strong>String </strong>mọi lúc mà
        không cần suy nghĩ về nó.
      </p>

      <p>
        Điều đó có vi phạm nguyên tắc không? Không. Nó không sao cả. Tại sao?
        Bởi vì <strong>String </strong>rất khó thay đổi.
      </p>

      <p>
        Mặt khác, nếu một lớp bạn viết có khả năng thay đổi, bạn có một số kỹ
        thuật tốt như <strong>Factory Method Pattern </strong>để gói gọn sự
        thay đổi đó.
      </p>`,
      },
      {
        div: `<p>
        (còn tiếp..
        <a
          rel="noreferrer noopener"
          aria-label=".phần 2 (mở trong tab mới)"
          href="react-admin/#/ebook/vietnamese/head-first-design-patterns/5"
          target="_blank"
        >
          .phần 2
        </a>
        ).
      </p>`,
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
