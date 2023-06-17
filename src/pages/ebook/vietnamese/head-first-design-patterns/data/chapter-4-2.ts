import IContent from 'utils/interface';

export const chapter4_2: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p>
        Nếu chưa đọc qua 
        <strong>
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1">
            Factory Pattern
          </a> 
          &amp; Abstract 
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1">
            Factory Pattern
          </a>
        </strong> 
        (
        <a
          rel="noreferrer noopener"
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          target="_blank"
        >
          Phần 1
        </a>
        ), mời bạn xem lại tại đây: 
        <a
          rel="noreferrer noopener"
          aria-label="Chương 4: Factory Pattern &amp; Abstract Factory Pattern (Phần 1) (mở trong tab mới)"
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          target="_blank"
        >
          Chương 4: Factory Pattern &amp; Abstract Factory Pattern (Phần 1)
        </a>
        . Ở phần này – 
        <strong>
          Abstract 
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1">
            Factory pattern
          </a>
        </strong> 
        là phương pháp tạo ra một Super-Factory dùng để tạo ra các Factory
        khác. Hay còn được gọi là Factory của các Factory. 
        <strong>
          Abstract 
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1">
            Factory Pattern
          </a>
        </strong> 
        là một Pattern cấp cao hơn so với 
        <strong>
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1">
            Factory Pattern
          </a>
        </strong>
        . 
      </p>`,
      },
    ],
  },
  {
    title: 'Trong khi đó, trở lại PizzaStore …',
    contents: [
      {
        div: `<p>
        Thiết kế cho PizzaStore đang thực sự định hình: nó có một framework
        linh hoạt và nó thực hiện tốt việc tuân thủ các nguyên tắc thiết kế.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_1.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Giờ đây, chìa khóa thành công của Objectville Pizza luôn là những
        nguyên liệu tươi ngon, chất lượng và điều bạn đã khám phá là với khuôn
        khổ mới, những nơi được nhượng quyền của bạn đã tuân theo quy trình
        của bạn, nhưng một vài nhượng quyền đã thay thế các thành phần kém hơn
        trong bánh nướng của họ để hạ thấp chi phí và tăng tỷ suất lợi nhuận
        của họ. Bạn biết rằng bạn sẽ phải làm một cái gì đó, bởi vì về lâu dài
        điều này sẽ làm ảnh hưởng thương hiệu Objectville!
      </p>`,
      },
      {
        p: `<h6><b>ĐẢM BẢO TÍNH NHẤT QUÁN TRONG THÀNH PHẦN CỦA PIZZA</b></h6>`,
      },
      {
        div: `<p>
        Vì vậy, làm thế nào để bạn đảm bảo mỗi nhượng quyền đang sử dụng các
        thành phần chất lượng hay không? Bạn sẽ xây dựng một factory sản xuất
        chúng và chuyển chúng đến nhượng quyền của bạn!
      </p>

      <p>
        Bây giờ chỉ có một vấn đề với kế hoạch này: nhượng quyền thương mại
        được đặt ở các khu vực khác nhau và nước sốt đỏ ở New York không phải
        là nước sốt đỏ ở Chicago.
      </p>

      <p>
        Vì vậy, bạn có một bộ nguyên liệu cần được chuyển đến New York và một
        bộ nguyên liệu khác cần chuyển đến Chicago. Hãy để xem xét kỹ hơn:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_2.jpg`),
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
    title: `Bộ nguyên liệu …`,
    contents: [
      {
        div: `<p>
        New York sử dụng một bộ nguyên liệu và Chicago là một bộ khác. Với sự
        phổ biến của Objectville Pizza, sẽ không lâu nữa bạn cũng cần phải
        chuyển một bộ nguyên liệu đến những khu vực khác: California, Seattle…
      </p>

      <p>Để làm việc này, bạn sẽ phải tìm ra cách xử lý “bộ nguyên liệu”.</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_3.jpg`),
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
    title: `Xây dựng nhà máy nguyên liệu`,
    contents: [
      {
        div: ` <p>
        Bây giờ chúng ta sẽ xây dựng một nhà máy để tạo ra các nguyên liệu của
        chúng ta; nhà máy sẽ chịu trách nhiệm tạo ra từng nguyên liệu trong
        “bộ tnguyên liệu”. Nói cách khác, nhà máy sẽ cần tạo ra bột, nước sốt,
        phô mai, v.v … Bạn sẽ thấy cách chúng ta sẽ xử lý sự khác biệt trong
        từng khu vực ngay sau đây.
      </p>

      <p>
        Hãy bắt đầu bằng cách xác định interface cho nhà máy sẽ tạo ra tất cả
        các nguyên liệu cho chúng ta:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_4.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>Đây là những gì chúng ta sẽ làm:</strong>
      </p>

      <ol>
        <li>
          Xây dựng nhà máy cho từng vùng. Để làm điều này, bạn sẽ tạo một lớp
          con của <strong>PizzaIngredientFactory </strong>và implement từng
          phương thức tạo.
        </li>
        <li>
          Implement một tập hợp các lớp nguyên liệu sẽ được sử dụng với nhà
          máy, như <strong>ReggianoCheese</strong>, 
          <strong>RedPeppers </strong>và <strong>ThickCrustDough</strong>. Các
          lớp này có thể được chia sẻ giữa các khu vực khi thích hợp.&nbsp;
        </li>
        <li>
          Sau đó, chúng ta cần kết nối tất cả những điều này bằng cách đưa các
          nhà máy sản xuất nguyên liệu mới vào <strong>PizzaStore</strong>.
        </li>
      </ol>`,
      },
    ],
  },
  {
    title: `Xây dựng nhà máy sản xuất nguyên liệu ở New York`,
    contents: [
      {
        div: `<p>
        Được rồi, ở đây, việc triển khai cho nhà máy sản xuất nguyên liệu ở
        New York. Nhà máy này chuyên về sốt Marinara, phô mai Reggiano, Fresh
        Clams…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_5.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: ` <p>
        Bạn hãy tự viết cho lớp&nbsp; 
        <strong>ChicagoPizzaIngredientFactory</strong>. Bạn có thể tham khảo
        các lớp dưới đây trong việc implement của bạn:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_6.jpg`),
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
    title: `Làm lại lớp Pizza …`,
    contents: [
      {
        div: `<p>
        Chúng tôi đã cho tất cả các nhà máy kém chất lượng của chúng tôi bị sa
        thải và sẵn sàng sản xuất các nguyên liệu chất lượng; bây giờ chúng
        tôi chỉ cần làm lại lớp Pizza để chúng chỉ sử dụng các nguyên liệu sản
        xuất tại nhà máy. Chúng tôi sẽ bắt đầu với lớp abstract Pizza của
        mình:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_7.jpg`),
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
    title: `Tiếp tục làm lại lớp Pizza …`,
    contents: [
      {
        div: `<p>
        Bây giờ bạn đã có một lớp abstract Pizza để làm việc, và bây giờ sẽ
        tạo ra những chiếc bánh pizza kiểu New York và Chicago – lúc này,
        chúng sẽ lấy nguyên liệu từ nhà máy.
      </p>

      <p>
        Khi chúng tôi viết Factory Method code ở 
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1">
          Phần 1
        </a>
        , chúng tôi đã có một lớp <strong>NYCheesePizza </strong>và một lớp 
        <strong>ChicagoCheesePizza</strong>. Nếu bạn nhìn vào hai lớp này,
        điều duy nhất khác biệt là việc sử dụng các nguyên liệu trong khu vực.
        Các loại pizza được làm giống nhau (bột + nước sốt + phô mai). Điều
        tương tự cũng xảy ra với các loại pizza khác: <strong>Veggie</strong>, 
        <strong>Clam</strong>,… Tất cả đều theo các bước chuẩn bị giống nhau;
        chúng chỉ có các nguyên liệu khác nhau.
      </p>
      <p>
          Vì vậy, những gì bạn có thể thấy là chúng tôi thực sự không cần hai
          lớp cho mỗi chiếc bánh pizza; nhà máy sản xuất nguyên liệu sẽ xử lý sự
          khác biệt trong khu vực cho chúng tôi.
        </p>

        <p>
          Ở đây, <strong>Cheese Pizza</strong>:
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_8.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Lớp Pizza sử dụng factory mà nó đã được kết hợp để sản xuất các nguyên
        liệu được sử dụng trong pizza. Các nguyên liệu được sản xuất phụ thuộc
        vào nhà máy mà chúng tôi sử dụng. Lớp Pizza không quan tâm; Nó biết
        cách để làm pizza. Giờ đây, nó đã tách ra khỏi sự khác biệt về thành
        phần trong khu vực và có thể dễ dàng tái sử dụng khi có các nhà máy ở
        Rockies, Tây Bắc Thái Bình Dương và những vùng khác.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_9.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>Bình luận của người dịch:</strong>
      </p>

      <p>
        Hãy nhớ lại lúc đầu, các nguyên liệu được tạo ra trong chính lớp
        Pizza, các lớp con kế thừa lớp Pizza và tùy ý gán giá trị cho các biến
        nguyên liệu.
      </p>

      <p>
        Vấn đề đặt ra là lớp cha Pizza muốn quản lý quá trình tạo nguyên liệu
        luôn (không thể để các lớp con gán tùy ý), vì vậy bước tạo nguyên liệu
        được tách ra thành 1 factory 
        <strong>PizzaIngredientFactory&nbsp;</strong>và khai báo tham chiếu
        đến interface này trong lớp cha Pizza. Chúng sẽ đảm bảo được rằng, các
        lớp con tạo nguyên liệu bằng cách dùng factory mà lớp cha Pizza cung
        cấp.
      </p>

      <p>
        <strong>Hãy cùng khám phá ClamPizza:</strong>
      </p>
`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_10.jpg`),
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
    title: `Xem lại các cửa hàng pizza của chúng ta`,
    contents: [
      {
        div: `<p>
        Chúng ta gần đến nơi rồi; chúng ta chỉ cần thực hiện một chuyến đi
        nhanh đến các cửa hàng nhượng quyền để đảm bảo rằng họ đang sử dụng
        đúng lớp Pizza. Chúng ta cũng cần cung cấp cho họ một tham chiếu
        (reference) đến các nhà máy sản xuất nguyên liệu của địa phương của họ
        (Chicago sẽ có <strong>ChicagoPizzaIngredientFactory</strong>, NY sẽ
        có <strong>NYPizzaIngredientFactory</strong>…):
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_11.jpg`),
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
        So sánh phương thức
        <strong>
          <em> createPizza() </em>
        </strong>
        của phiên bản này với phương thức trong triển khai 
        <strong>Factory Method </strong>trước đó trong 
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1">
          Phần 1
        </a>
        .
      </p>`,
      },
    ],
  },
  {
    title: `Chúng ta đã làm được gì?`,
    contents: [
      {
        div: `<p>
        Đó là một loạt các thay đổi về code; Chính xác thì chúng ta đã làm gì?
      </p>

      <p>
        Chúng ta đã cung cấp một phương tiện để tạo ra một “bộ nguyên liệu”
        cho pizza bằng cách giới thiệu một loại nhà máy mới gọi là 
        <strong>Abstract Factory</strong> – sử dụng 
        <strong>
          Abstract 
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1">
            Factory Pattern
          </a>
        </strong>
        .
      </p>
      <p>
          Một 
          <strong>
            Abstract 
            <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1">
              Factory Pattern
            </a>
          </strong> 
          cung cấp cho chúng ta một giao diện để tạo một “bộ sản phẩm”. Bằng
          cách viết code sử dụng giao diện này, chúng ta tách code khỏi factory
          thực tế tạo ra các sản phẩm.
        </p>

        <p>
          Điều đó cho phép chúng ta triển khai nhiều nhà máy sản xuất các sản
          phẩm dành cho các bối cảnh khác nhau – chẳng hạn như các khu vực khác
          nhau, hệ điều hành khác nhau hoặc giao diện khác nhau.
        </p>

        <p>
          Vì code của chúng ta được tách rời khỏi các sản phẩm thực tế, chúng ta
          có thể thay thế các nhà máy khác nhau để có các hành vi khác nhau (như
          lấy marinara thay vì plum tomatoes).
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_12.jpg`),
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
    title: `Nhiều pizza hơn cho Ethan và Joel…  `,
    contents: [
      {
        div: `<p>
        Ethan và Joel không thể có đủ Objectville Pizza! Điều họ không biết là
        bây giờ các đơn hàng của họ đang sử dụng các nhà máy sản xuất nguyên
        liệu mới. Vì vậy, bây giờ khi họ đặt hàng …
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_13.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: ` <p>
        Phần đầu tiên của quy trình đặt hàng đã không thay đổi chút nào. Hãy
        để theo dõi đơn hàng của Ethan lần nữa:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_14.jpg`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: ` <p>
        Từ đây mọi thứ thay đổi, bởi vì chúng tôi đang sử dụng một nhà máy sản
        xuất nguyên liệu
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_15.jpg`),
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
    title: `Định nghĩa Abstract Factory Pattern`,
    contents: [
      {
        div: `<p>
        Chúng tôi đã thêm một 
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1">
          Factory Pattern
        </a> 
        khác vào “gia đình mẫu” của chúng tôi, một mô hình cho phép chúng tôi
        tạo ra các bộ sản phẩm. Hãy cùng kiểm tra định nghĩa chính thức cho
        mẫu này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_16.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong>
          <em>
            (Abstract 
            <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1">
              Factory Pattern
            </a> 
            cung cấp một interface có chức năng tạo ra một 
          </em>
        </strong>
        <a href="https://vi.wikipedia.org/wiki/T%E1%BA%ADp_h%E1%BB%A3p">
          <strong>
            <em>tập hợp</em>
          </strong>
        </a>
        <strong>
          <em>
            các đối tượng liên quan hoặc phụ thuộc lẫn nhau mà không chỉ ra đó
            là những lớp cụ thể nào tại thời điểm thiết kế.)
          </em>
        </strong>
      </p>

      <p>
        Chúng tôi chắc chắn đã thấy rằng 
        <strong>
          Abstract 
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1">
            Factory Pattern
          </a>
        </strong> 
        cho phép client sử dụng giao diện trừu tượng để tạo ra một bộ sản phẩm
        liên quan mà không cần biết (hoặc quan tâm) về các sản phẩm cụ thể
        được tạo ra thực sự. Theo cách này, client được tách ra khỏi bất kỳ
        chi tiết cụ thể nào của concrete products. Chúng ta hãy nhìn vào sơ đồ
        lớp để xem tất cả những thứ này kết hợp với nhau như thế nào:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_17.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Đó là một sơ đồ lớp khá phức tạp; hãy cùng xem xét về khía cạnh 
        <strong>PizzaStore </strong>của chúng tôi:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_18.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_19.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>
          Có phải đó là một Factory Method ẩn giấu bên trong Abstract Factory?
        </strong>
      </p>

      <p>
        Nắm bắt tốt! Có, thường thì các phương thức của một Abstract Factory
        được triển khai như các factory methods. Nó có ý nghĩa, phải không?
        Công việc của một Abstract Factory là xác định một interface để tạo ra
        một bộ sản phẩm. Mỗi phương thức trong interface đó chịu trách nhiệm
        tạo ra một sản phẩm cụ thể và chúng tôi triển khai một lớp con của
        Abstract Factory để cung cấp các triển khai đó. Vì vậy, factory
        methods là một cách tự nhiên để implement product methods trong
        abstract factory của bạn (ý đoạn này khi Abstract Factory tạo ra được
        1 product, product đó chính là 1 factory con) .
      </p>`,
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: ` Buổi phỏng vấn của Factory Method và Abstract Factory Pattern`,
    contents: [
      {
        div: `<p>
        <strong>HeadFirst:</strong> Wow, một cuộc phỏng vấn với hai mẫu cùng
        một lúc! Thật vinh dự cho chúng tôi.
      </p>
      <p>
        <strong>Factory Method:</strong> Vâng, tôi không chắc chắn rằng tôi
        thích được “gộp chung” với Abstract Factory, bạn biết đấy. Chúng tôi
        đều là mẫu “Factory” không có nghĩa là chúng tôi không có các buổi
        phỏng vấn của riêng mình.
      </p>
      <p>
        <strong>HeadFirst:</strong> Đừng nói vậy, chúng tôi muốn phỏng vấn các
        bạn cùng nhau để có thể giúp làm sáng tỏ những sự nhầm lẫn về cái nào
        sẽ là mẫu dành cho độc giả. Các bạn có những điểm tương đồng, và tôi
        đã nghe nói rằng các bạn khiến mọi người đôi khi bối rối.
      </p>

      <p>
        <strong>Abstract Factory:</strong>&nbsp; Đó là sự thật, đã có lần tôi
        đã bị nhầm với <strong>Factory Method</strong> và tôi biết bạn đã gặp
        vấn đề tương tự, đúng không <strong>Factory Method</strong>. Cả hai
        chúng tôi thực sự giỏi trong việc tách các ứng dụng khỏi các triển
        khai cụ thể; chúng tôi chỉ làm điều đó theo những cách khác nhau. Vì
        vậy, tôi có thể thấy tại sao mọi người đôi khi có thể khiến chúng ta
        bối rối.
      </p>

      <p>
        <strong>Factory Method: </strong>Vâng, nó làm tôi nổi điên. Rốt cuộc,
        tôi sử dụng các lớp để tạo và bạn sử dụng các đối tượng; điều đó hoàn
        toàn khác nhau!
      </p>

      <p>
        <strong>HeadFirst:</strong> Bạn có thể giải thích thêm về điều đó,
        Factory Method?
      </p>

      <p>
        <strong>Factory Method:</strong> Chắc chắn rồi. Cả Abstract Factory và
        tôi đều tạo ra các đối tượng – đó là công việc của chúng tôi. Nhưng
        tôi làm điều đó thông qua thừa kế …
      </p>

      <p>
        <strong>Abstract Factory:</strong> … và tôi thực hiện nó thông qua kết
        hợp (composition) đối tượng.
      </p>

      <p>
        <strong>Factory Method: </strong>Đúng. Vì vậy, điều đó có nghĩa là, để
        tạo các đối tượng bằng Factory Method, bạn cần extends một lớp và
        override một phương thức factory.
      </p>

      <p>
        <strong>HeadFirst:</strong> Và phương thức factory đó làm những gì?
      </p>

      <p>
        <strong>Factory Method:</strong> Tất nhiên nó tạo ra các đối tượng! Ý
        tôi là, toàn bộ ý tưởng của Mẫu Factory Method là bạn sử dụng một lớp
        con để tạo ra đối tượng cho bạn. Bằng cách đó, người dùng sẽ chỉ cần
        biết đến lớp trừu tượng như gia cầm, và các lớp con cụ thể sẽ lo về
        các kiểu gà, kiểu vịt, kiểu ngan. Vì vậy, nói theo cách khác, tôi giúp
        chương trình độc lập với các kiểu (type) cụ thể đó.
      </p>

      <p>
        <strong>Abstract Factory:</strong> Và tôi cũng làm điều đó, nhưng theo
        cách khác.
      </p>
      <p>
          <strong>HeadFirst:</strong> Tiếp tục đi, Abstract Factory … bạn đã nói
          gì về kết hợp đối tượng (object composition)?
        </p>

        <p>
          <strong>Abstract Factory:</strong> Tôi cung cấp một loại trừu tượng
          (abstract type) để tạo ra một “bộ sản phẩm” khác. Các lớp con của kiểu
          trừu tượng xác định cách thức các sản phẩm đó được tạo ra. Để áp dụng
          được ý tưởng của tôi, bạn phải tạo ra một instance của một trong các
          lớp con trên (instance này là 1 factory) và đưa nó vào chỗ cần thiết
          trong code. Vì thế, giống như <strong>Factory Method</strong>, những
          nơi sử dụng factory của tôi sẽ hoàn toàn độc lập với những produtcts
          cụ thể.
        </p>

        <p>
          <strong>HeadFirst:</strong> Ồ, tôi hiểu rồi, vì vậy một lợi thế khác
          là bạn nhóm lại một bộ các sản phẩm liên quan.
        </p>

        <p>
          <strong>Abstract Factory:</strong>&nbsp; Đúng vậy.
        </p>

        <p>
          <strong>HeadFirst:</strong> Điều gì xảy ra nếu người ta cần bổ sung
          thêm một sản phẩm nữa vô “nhóm các sản phẩm” mà anh có thể tạo ra?
          Điều đó không yêu cầu thay đổi interface của bạn chứ?
        </p>

        <p>
          <strong>Abstract Factory:</strong> Interface của tôi phải thay đổi nếu
          sản phẩm mới được thêm vào, điều mà tôi biết mọi người không thích làm
          ….
        </p>

        <p>
          <strong>Factory Method:</strong> :)))
        </p>

        <p>
          <strong>Abstract Factory:</strong> Bạn đang cười gì, Factory Method?
        </p>

        <p>
          <strong>Factory Method:</strong> Ồ, thôi nào, đó là một vấn đề lớn!
          Thay đổi giao diện của bạn có nghĩa là bạn phải thay đổi giao diện của
          mọi lớp con (các lớp con ở đây là các factories)! Nghe có vẻ như rất
          nhiều việc ở đây.
        </p>
        <p>
          <strong>Abstract Factory:</strong> Vâng, nhưng tôi cần một “giao diện
          lớn” vì tôi được sử dụng để tạo toàn bộ “bộ sản phẩm”. Bạn chỉ tạo một
          sản phẩm, vì vậy bạn không thực sự cần một “giao diện lớn”, bạn chỉ
          cần một phương thức duy nhất.
        </p>

        <p>
          <strong>HeadFirst:</strong> Abstract Factory, tôi nghe đồn rằng bạn
          thường sử dụng nhiều hàm factory method theo cách của Factory Method
          Pattern để tạo các đổi tượng bên trong những factories của anh, điều
          đó có đúng không? 
        </p>
        <p>
          <strong>Abstract Factory:</strong> Có, tôi thừa nhận điều đó, các
          factory con của tôi thường thực hiện một factory methods để tạo ra sản
          phẩm. Trong trường hợp của tôi, chúng được sử dụng thuần túy để tạo ra
          sản phẩm …
        </p>

        <p>
          <strong>Factory Method:</strong> … trong trường hợp của tôi, tôi dùng
          hàm factory method để tạo ra product cụ thể mà người ta muốn, người
          dùng sẽ không biết cái gì được tạo ra, họ chỉ cần gọi hàm.
        </p>

        <p>
          <strong>HeadFirst:</strong> Có vẻ như cả hai bạn đều giỏi trong những
          gì bạn làm. Tôi chắc rằng đọc giả đã có được lựa chọn của mình; Rốt
          cuộc, các factory rất hữu ích, họ sẽ muốn sử dụng chúng trong tình
          huống thích hợp. Cả hai bạn đều đóng gói việc tạo đối tượng để giúp
          chương trình độc lập và giảm phụ thuộc với những kiểu cụ thể, điều này
          thực sự tuyệt vời, cho dù bạn sử dụng <strong>Factory Method</strong> 
          hay <strong>Abstract Factory</strong>. Hai bạn có lời gì trước khi
          chào tạm biệt đọc giả không ạ?
        </p>

        <p>
          <strong>Abstract Factory:</strong> Cảm ơn. Hãy nhớ đến tôi, Abstract
          Factory và sử dụng tôi bất cứ khi nào bạn có “bộ sản phẩm” bạn cần tạo
          và bạn muốn đảm bảo client của bạn tạo ra các sản phẩm liên quan nhau.
        </p>

        <p>
          <strong>Factory Method:</strong> Và Factory Method của tôi; sử dụng
          tôi để tách client code của bạn khỏi các lớp cụ thể mà bạn cần khởi
          tạo hoặc nếu bạn không biết trước tất cả các lớp cụ thể mà bạn sẽ cần.
          Để sử dụng tôi, chỉ cần tạo lớp con kế thừa tôi và implement factory
          method!
        </p>`,
      },
    ],
  },
  {
    title: `So sánh Factory Method và Abstract Factory Pattern`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_20.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-5_21.jpg`),
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
        <li>Tất cả các factory đóng gói việc tạo đối tượng.</li>
        <li>
          <strong>Simple Factory</strong> không phải là một mẫu thiết kế thực
          sự, nó chỉ là một cách đơn giản để tách client code của bạn khỏi
          concrete classes.
        </li>
        <li>
          <strong>Factory Method</strong> dựa vào sự kế thừa: việc tạo đối
          tượng được ủy quyền cho các lớp con thực hiện phương thức Factory để
          tạo đối tượng.
        </li>
        <li>
          <strong>Abstract Factory</strong> dựa vào kết hợp đối tượng: việc
          tạo đối tượng được thực hiện theo các phương thức được hiển thị
          trong interface của factory.
        </li>
        <li>
          Tất cả các mẫu Factory thúc đẩy đạt tới “khớp nối lỏng lẻo” bằng
          cách giảm sự phụ thuộc của ứng dụng của bạn vào các lớp cụ thể.
        </li>
        <li>
          Mục đích của<strong> Factory Method</strong> là cho phép một lớp trì
          hoãn việc khởi tạo đối với các lớp con của nó.
        </li>
        <li>
          Mục đích của <strong>Abstract Factory</strong> là tạo ra một bộ của
          các đối tượng liên quan mà không phải phụ thuộc vào các lớp cụ thể
          của chúng.
        </li>
        <li>
          Nguyên tắc nghịch đảo phụ thuộc hướng dẫn chúng ta tránh phụ thuộc
          vào các loại cụ thể và cố gắng trừu tượng hóa.
        </li>
        <li>
          <strong>Factory </strong>là một kỹ thuật mạnh mẽ để đạt tới trình độ
          “
          <strong>
            <em>coding to abstractions</em>
          </strong>
          ”, không phải là “
          <strong>
            <em>coding to concrete</em>
          </strong>
          ” nữa.
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
