import IContent from 'utils/interface';

export const chapter3: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_1.jpg`),
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
    title:
      'Decorator Pattern – Gọi chương này là “Thiết kế đôi mắt của bạn cho sự thừa kế”',
    contents: [
      {
        div: `<p>
        Chúng tôi sẽ kiểm tra lại việc lạm dụng thừa kế thường gặp và bạn sẽ
        học cách “trang trí” các lớp của mình khi runtime bằng cách sử dụng
        việc kết hợp (compose) các đối tượng. Tại sao à? Một khi bạn biết các
        kỹ thuật decorating (với Decorator Pattern), bạn sẽ có thể cung cấp
        cho các object của mình những hành vi mới mà không cần phải thay đổi
        code đối với các lớp bên trong.
      </p>`,
      },
    ],
  },
  {
    title: 'Chào mừng đến với Starbuzz Coffee',
    contents: [
      {
        div: `<p>
        Starbuzz Coffee là cửa hàng cà phê phát triển nhanh. Ở bất kì nơi nào
        đó, hãy nhìn qua đường; bạn sẽ thấy một tiệm Starbuzz Coffee hiện
        diện.
      </p>

      <p>
        Bởi vì họ đã phát triển quá nhanh, họ phải cập nhật hệ thống đặt hàng
        để phù hợp với các dịch vụ đồ uống của mình.
      </p>
      <p>Khi họ bắt đầu kinh doanh, họ đã thiết kế các lớp như thế này …</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_2.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Ngoài ly cà phê tiêu chuẩn của bạn, bạn cũng có thể yêu cầu kèm thêm
        một số thứ khác như sữa, đậu nành và mocha, và tất cả đều được phủ lên
        trên bằng sữa tươi. Starbuzz tính phí cho mỗi thứ này, vì vậy họ thực
        sự cần phải xây dựng chúng trong hệ thống đặt hàng của mình.
      </p>

      <p>Đây là nỗ lực đầu tiên của họ …</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_3.jpg`),
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
    title: 'Sử dụng sức mạnh của bộ não',
    contents: [
      {
        div: `<p>
        Khá rõ ràng rằng Starbuzz đã tạo ra một cơn ác mộng bảo trì cho chính
        họ. Điều gì xảy ra khi giá sữa tăng? Họ sẽ làm gì khi thêm một lớp phủ
        caramel mới?
      </p>

      <p>
        Bỏ qua vấn đề bảo trì, chúng có vi phạm những nguyên tắc thiết kế mà
        chúng tôi đã đề cập trước đây không?
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_4.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Chà, hãy thử nghiệm một chút. Bắt đầu với base class&nbsp; Beverage
        (Đồ uống) và thêm các biến instance để thể hiện các loại toping đi
        kèm: milk, soy, mocha và whip…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_5.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bây giờ, hãy thêm vào các lớp con, một cho mỗi loại đồ uống trên menu:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_6.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_7.jpg`),
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
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_8.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_9.jpg`),
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
    title: 'Làm nhọn bút chì của bạn',
    contents: [
      {
        div: `<p>
        <strong>
          Những yêu cầu hoặc các yếu tố khác có thể thay đổi sẽ ảnh hưởng đến
          thiết kế này là gì?
        </strong>
      </p>

      <ul>
        <li>
          Thay đổi giá các loại toping sẽ buộc họ phải thay đổi code hiện có.
        </li>
        <li>
          Toping mới sẽ buộc chúng ta thêm các phương thức mới và thay đổi
          cách tính chi phí cost() trong lớp cha.
        </li>
        <li>
          Chúng tôi có thể có đồ uống mới. Đối với một số đồ uống này (trà đá
          – Tea?), Toping có thể không phù hợp nữa, chúng ta không thể bỏ
          mocha vào trà đá, nhưng ở đây, lớp con <strong>Tea </strong>vẫn sẽ
          kế thừa các phương thức như hasWhip().
        </li>
        <li>Điều gì nếu một khách hàng muốn một lượng mocha gấp đôi?</li>
        <li>Đến lượt bạn viết thêm một số yếu tố nữa:…………</li>
      </ul>`,
      },
    ],
  },
  {
    title: 'Sư phụ và học trò',
    contents: [
      {
        div: `<p>
        <strong>Sư phụ:</strong> Grasshopper, đã một thời gian kể từ cuộc nói
        chuyện cuối cùng của chúng ta. Con đã từng suy nghĩ thật lâu về thừa
        kế chưa?
      </p>

      <p>
        <strong>Học trò:</strong> Vâng, thưa thầy. Mặc dù tính kế thừa rất
        mạnh mẽ nhưng con đã học được rằng nó không phải lúc nào cũng dẫn đến
        các thiết kế linh hoạt nhất hoặc có thể bảo trì.
      </p>
      <p>
        <strong>Sư phụ:</strong> À đúng rồi, con đã có một số tiến bộ. Vì vậy,
        hãy cho thầy biết Học trò của thầy, làm thế nào con sẽ đạt được “tái
        sử dụng” nếu không thông qua thừa kế?
      </p>

      <p>
        <strong>Học trò:</strong> Sư phụ, con đã học được rằng có nhiều cách
        để kế thừa hành vi trong thời gian chạy thông qua composition (kết hợp
        hành vi) và delegation (ủy thác hành vi cho các lớp khác).
      </p>

      <p>
        <strong>Sư phụ:</strong> Tiếp tục đi…
      </p>

      <p>
        <strong>Học trò: </strong>Khi con kế thừa hành vi bằng cách phân lớp,
        hành vi đó được đặt cố định tại thời gian biên dịch. Ngoài ra, tất cả
        các lớp con phải kế thừa cùng một hành vi. Tuy nhiên, nếu con có thể
        mở rộng một hành vi của đối tượng thông qua composition, thì con có
        thể thực hiện điều này một cách linh hoạt khi chạy.
      </p>

      <p>
        <strong>Sư phụ:</strong> Rất tốt, Grasshopper, con đang bắt đầu thấy
        sức mạnh của composition.
      </p>
      <p>
        <strong>Học trò:</strong> Có, con có thể thêm nhiều hành vi mới cho
        các đối tượng thông qua kỹ thuật này, bao gồm cả những hành vi mà
        người thiết kế lớp cha&nbsp;thậm chí không nghĩ tới. Và, con không
        phải đụng chạm vào code của họ!
      </p>

      <p>
        <strong>Sư phụ:</strong> Con đã học được gì về tác dụng của
        composition trong việc bảo trì code của mình?
      </p>

      <p>
        <strong>Học trò: </strong>Vâng, đó là những gì con đã nhận được. Bằng
        cách kết hợp động các đối tượng, con có thể thêm chức năng mới bằng
        cách viết thêm code thay vì thay đổi code hiện có. Và vì không thay
        đổi code hiện tại, nên cơ hội xảy ra lỗi hoặc gây ra ảnh hưởng ngoài ý
        muốn trong code trước đó đã giảm đi nhiều.
      </p>

      <p>
        <strong>Sư phụ:</strong> Rất tốt. Đã đủ cho ngày hôm nay, Grasshopper.
        Thầy muốn con đi và suy ngẫm sâu hơn về chủ đề này … Hãy nhớ rằng,
        code nên được đóng (để thay đổi) như hoa sen vào buổi tối, nhưng mở
        (để mở rộng) như hoa sen vào buổi sáng.
      </p>`,
      },
    ],
  },
  {
    title: 'Nguyên tắc đóng mở (The Open-Closed Principle)',
    contents: [
      {
        div: `Grasshopper đã nói về một trong những nguyên tắc thiết kế quan trọng nhất:`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_10.jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center"><small><i>(Những class nên mở cho việc mở rộng, nhưng đóng cho việc sửa đổi)</i></small></p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_11.jpg`),
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
          Mục tiêu của chúng tôi là cho phép các lớp dễ dàng được mở rộng để kết hợp
          hành vi mới mà không cần sửa đổi code hiện có. Chúng ta nhận được gì nếu đạt
          được điều này? Các thiết kế có khả năng phục hồi để thay đổi và đủ khả thi
          để đảm nhận chức năng mới đáp ứng các yêu cầu thay đổi.
        </strong>
      </p>`,
      },
    ],
  },
  {
    title: 'Không có câu hỏi ngớ ngẩn',
    contents: [
      {
        div: `<p>
        <strong>Hỏi:</strong> Mở để mở rộng và đóng để sửa đổi? Nghe có vẻ rất
        mâu thuẫn. Làm thế nào một thiết kế có thể là cả hai?
      </p>

      <p>
        <strong>Trả lời</strong>: Đó là một câu hỏi rất hay. Nó chắc chắn nghe
        có vẻ mâu thuẫn lúc đầu. Rốt cuộc, một cái gì đó càng ít sửa đổi, càng
        khó mở rộng, phải không? Mặc dù hóa ra, có một số kỹ thuật OO thông
        minh để cho phép các hệ thống được mở rộng, ngay cả khi chúng ta không
        thể thay đổi code cơ bản. Hãy suy nghĩ về 
        <a
          rel="noreferrer noopener"
          aria-label="Mẫu Người quan sát (mở trong tab mới)"
          href="/react-admin#/ebook/vietnamese/head-first-design-patterns/2"
          target="_blank"
        >
          Mẫu Người quan sát
        </a> 
        (trong 
        <a
          rel="noreferrer noopener"
          aria-label="Chương 2 (mở trong tab mới)"
          href="/react-admin#/ebook/vietnamese/head-first-design-patterns/2"
          target="_blank"
        >
          Chương 2
        </a>
        ) … bằng cách thêm 
        <a
          href="/react-admin#/ebook/vietnamese/head-first-design-patterns/2"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Người quan sát (mở trong tab mới)"
        >
          Người quan sát
        </a> 
        mới, chúng ta có thể mở rộng Subject bất cứ lúc nào mà không cần thêm
        code vào lớp Subject. Bạn sẽ thấy khá nhiều cách mở rộng hành vi với
        các kỹ thuật thiết kế OO khác.
      </p>
      <p>
        <strong>Hỏi:</strong> Được rồi, tôi hiểu 
        <a
          href="/react-admin#/ebook/vietnamese/head-first-design-patterns/2"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Observable (mở trong tab mới)"
        >
          Observable
        </a>
        , nhưng làm thế nào để tôi thiết kế một cái gì đó có thể mở rộng,
        nhưng đóng để sửa đổi?
      </p>

      <p>
        <strong>Trả lời:</strong> Nhiều mẫu đã được chúng tôi thử nghiệm các
        thiết kế, chúng có thể bảo vệ code của bạn tránh bị sửa đổi bằng cách
        cung cấp các extension. Trong chương này, bạn sẽ thấy một ví dụ hay về
        việc sử dụng mẫu Trang trí (<strong>Decorator Pattern</strong>) để
        tuân theo nguyên tắc Đóng-Mở.
      </p>

      <p>
        <strong>Hỏi:</strong> Làm thế nào tôi có thể làm cho 
        <strong>MỌI PHẦN</strong> trong thiết kế của mình tuân theo Nguyên tắc
        Đóng mở?
      </p>

      <p>
        <strong>Trả lời:</strong> Thông thường, bạn không thể. Làm cho thiết
        kế OO linh hoạt và mở để mở rộng mà không cần sửa đổi code hiện có cần
        có thời gian và công sức. Nói chung, chúng tôi không buộc tất cả các
        phần trong thiết kế của chúng tôi (và có lẽ sẽ lãng phí) tuân theo
        điều này. Tuân theo Nguyên tắc Đóng mở thường đưa ra các mức độ trừu
        tượng mới, và thêm sự phức tạp vào code. Chỉ nơi nào bạn muốn có nhiều
        khả năng thay đổi thì hãy áp dụng các nguyên tắc ở đó.
      </p>

      <p>
        <strong>Hỏi</strong>: Làm thế nào để tôi biết nơi nào có nhiều khả
        năng thay đổi?
      </p>

      <p>
        <strong>Trả lời: </strong>Đó là một phần vấn đề kinh nghiệm trong việc
        thiết kế các hệ thống OO và cũng là vấn đề sự hiểu biết lĩnh vực bạn
        đang làm việc. Nhìn vào các ví dụ khác sẽ giúp bạn tìm hiểu thêm những
        nơi hay thay đổi trong thiết kế của riêng bạn.
      </p>

      <p>
        <strong>
          Mặc dù có vẻ như mâu thuẫn, nhưng có những kỹ thuật cho phép mở rộng
          code mà không cần sửa đổi trực tiếp.
        </strong>
      </p>

      <p>
        <strong>
          Hãy cẩn thận khi chọn các nơi code cần được mở rộng; áp dụng Nguyên
          tắc đóng mở MỌI NƠI là lãng phí, không cần thiết và có thể dẫn đến
          code phức tạp, khó hiểu.
        </strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_12.jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: 'Đến với Decorator Pattern',
    contents: [
      {
        div: `<p>
        Được rồi, chúng tôi đã thấy rằng việc đại diện cho đồ uống của chúng
        tôi cộng với kế hoạch tính giá các loại toping bằng sự kế thừa không
        có kết quả tốt – chúng tôi có các “vụ nổ” lớp, thiết kế cứng nhắc hoặc
        chúng tôi thêm các chức năng cho baseclass không phù hợp với một số
        lớp con.
      </p>

      <p>
        Vì vậy, ở đây, những gì chúng tôi sẽ làm thay vào đó: chúng tôi sẽ bắt
        đầu với một loại đồ uống và “trang trí” cho nó bằng các loại toping
        trong khi chạy (runtime). Ví dụ: nếu khách hàng muốn uống Dark Roast
        với toping là Mocha và Whip, thì chúng tôi sẽ:
      </p>

      <ol>
        <li>Lấy một đối tượng DarkRoast</li>
        <li>Trang trí nó với một đối tượng Mocha</li>
        <li>Trang trí nó với một đối tượng Whip</li>
        <li>
          Gọi phương thức <strong>cost()</strong> và dựa vào ủy quyền
          (delegate) để tính giá tiền cho các loại toping.
        </li>
      </ol>

      <p>
        Được rồi, nhưng làm thế nào để bạn trang trí một đối tượng, và làm thế
        nào để delegation (ủy quyền)? <strong>Một gợi ý: </strong>hãy nghĩ về
        các đối tượng trang trí như các “trình bao bọc” (wrappers) thứ sẽ bao
        bên ngoài đối tượng chính của chúng ta.
      </p>`,
      },
    ],
  },
  {
    title: 'Xây dựng một đơn đặt hàng đồ uống với Decorator Pattern',
    contents: [
      {
        div: `<p>1. Chúng tôi bắt đầu với đối tượng <strong>DarkRoast</strong>.</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_13.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        2. Khách hàng muốn <strong>Mocha</strong>, vì vậy chúng tôi tạo một
        đối tượng <strong>Mocha</strong> và bọc nó xung quanh 
        <strong>DarkRoast</strong>.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_14.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        3. Khách hàng cũng muốn <strong>Whip</strong>, vì vậy chúng tôi tạo ra
        một trang trí <strong>Whip</strong> và bọc nó ngoài 
        <strong>Mocha</strong>.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_15.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        4. Bây giờ là thời gian để tính toán giá tiền 
        <strong>
          <em>cost()</em>
        </strong> 
        cho khách hàng. Chúng ta thực hiện điều này bằng cách gọi 
        <em>
          <strong>cost()</strong>
        </em> 
        trên decorator ngoài cùng là <strong>Whip</strong> và 
        <strong>Whip</strong> sẽ ủy thác tính toán chi phí cho các đối tượng
        mà nó bọc bên trong. Một khi nó nhận được một giá tiền, nó sẽ cộng
        thêm vào giá tiền của Whip (hãy nghĩ về 
        <a
          href="https://techmaster.vn/posts/35006/khai-niem-de-quy-voi-java"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="đệ quy (mở trong tab mới)"
        >
          đệ quy
        </a>
        ).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_16.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>ĐƯỢC RỒI, Ở ĐÂY, NHỮNG GÌ CHÚNG TA BIẾT CHO ĐẾN GIỜ… </b></h6>`,
      },
      {
        div: `<ul>
        <li>
          Các trình trang trí <strong>(Decorator)</strong> có kiểu giống như
          các đối tượng mà chúng trang trí (decorate).
        </li>
        <li>
          Bạn có thể sử dụng một hoặc nhiều trình trang trí (decorator) để bọc
          một đối tượng.
        </li>
        <li>
          Trình trang trí có kiểu giống như đối tượng mà nó trang trí, chúng
          ta có thể sử dụng một đối tượng được trang trí thay cho đối tượng
          ban đầu (được bọc).
        </li>
        <li>
          Decorator thêm hành vi của chính mình trước và/hoặc sau khi ủy thác
          cho đối tượng mà nó trang trí để thực hiện phần còn lại của công
          việc.
        </li>
        <li>
          Các đối tượng có thể được trang trí bất cứ lúc nào, vì vậy chúng ta
          có thể trang trí các đối tượng một cách linh hoạt trong runtime với
          nhiều trang trí tùy thích.
        </li>
      </ul>`,
      },
      {
        p: `<h6><b>BÂY GIỜ HÃY XEM LÀM THẾ NÀO TẤT CẢ THỰC SỰ HOẠT ĐỘNG BẰNG CÁCH NHÌN VÀO
         ĐỊNH NGHĨA MẪU TRANG TRÍ VÀ VIẾT MỘT SỐ DÒNG CODE.</b></h6>`,
      },
    ],
  },
  {
    title: 'Định nghĩa Decorator Pattern',
    contents: [
      {
        div: `<p>Trước tiên, hãy xem phần mô tả của Decorator Pattern</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_17.jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center"><small><b>(Mẫu trang trí gắn các trách nhiệm bổ sung 
          cho một đối tượng một cách linh hoạt. Mẫu trang trí cung cấp một sự thay thế linh hoạt
           cho phân lớp để mở rộng chức năng)</b></small></p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_18.jpg`),
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
    title: 'Trang trí lớp Beverages (đồ uống) của chúng ta',
    contents: [
      {
        div: `<p>
        <strong>
          Được rồi, hãy để chúng tôi đưa đồ uống của Starbuzz vào mẫu này …
        </strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_19.jpg`),
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
        <strong>
          Trước khi tiếp tục, hãy suy nghĩ về cách bạn implements phương&nbsp;
          thức cost() của cà phê và toping. Ngoài ra, hãy suy nghĩ về cách bạn
          implements phương thức getDescription() trong từng loại toping.
        </strong>
      </p>`,
      },
    ],
  },
  {
    title: 'Đoạn hội thoại về Decorator Pattern',
    contents: [
      {
        div: `<p>
        <strong>
          Một số nhầm lẫn về Kế thừa (Inheritance) so với Thành phần
          (Composition)
        </strong>
      </p>

      <p>
        <strong>Mary: </strong>Được rồi, tôi có một chút bối rối … Tôi nghĩ
        rằng chúng ta sẽ không sử dụng sự kế thừa trong mô hình này, mà thay
        vào đó chúng ta sẽ dựa vào thành phần để thay thế.
      </p>

      <p>
        <strong>Sue:</strong> Ý bạn là gì?
      </p>

      <p>
        <strong>Mary:</strong> Nhìn vào sơ đồ lớp. Lớp 
        <strong>CondimentDecorator</strong> đang 
        <em>
          <strong>extends</strong>
        </em> 
        lớp <strong>Beverage</strong>. Đó là sự kế thừa, phải không?
      </p>

      <p>
        <strong>Sue:</strong> Đúng. Tôi nghĩ vấn đề quan trọng là các
        decorator có cùng loại với các đối tượng mà nó sẽ trang trí. Vì vậy, ở
        đây chúng tôi sử dụng tính kế thừa để đạt được kiểu giống nhau, nhưng
        chúng tôi không sử dụng tính kế thừa để có các hành vi.
      </p>

      <p>
        <strong>Mary:</strong> Được rồi, tôi có thể thấy các trình trang trí
        decorator cần kiểu interface tương tự như các thành phần nó bọc bên
        trong bởi vì nó cần phải thay thế các thành phần đó. Nhưng còn hành vi
        đến từ đâu khi chúng không thừa kế từ lớp cha?
      </p>

      <p>
        <strong>Sue:</strong> Khi chúng tôi kết hợp một 
        <strong>decorator</strong> với <strong>component</strong>, chúng tôi
        sẽ thêm hành vi mới. Chúng ta đang có được hành vi mới không phải bằng
        cách kế thừa nó từ một lớp cha, mà bằng cách kết hợp các đối tượng lại
        với nhau.
      </p>

      <p>
        <strong>Mary:</strong> Được rồi, vì vậy chúng tôi đang phân lớp lớp
        trừu tượng Beverage để có được loại chính xác, không kế thừa hành vi
        của nó. Các hành vi xuất hiện thông qua việc kết hợp các thành phần
        của decorators (toping) với các base components (đồ uống) cũng như các
        decorator (đồ uống) khác.
      </p>

      <p>
        <strong>Mary:</strong> Ooooh, tôi hiểu rồi. Và bởi vì chúng tôi đang
        sử dụng việc kết hợp đối tượng, chúng tôi có được sự linh hoạt hơn rất
        nhiều về cách pha trộn và kết hợp toping và đồ uống. Rất tuyệt vời.
      </p>

      <p>
        <strong>Sue:</strong> Có, nếu chúng tôi dựa vào thừa kế, thì hành vi
        của chúng tôi chỉ có thể bị cố định tại thời gian biên dịch. Nói cách
        khác, chúng ta chỉ có được bất kỳ hành vi nào mà superclass mang lại
        cho chúng ta hoặc chúng ta override. Với composition, chúng ta có thể
        kết hợp các trang trí theo bất kỳ cách nào chúng ta thích … in
        runtime.
      </p>

      <p>
        <strong>Mary:</strong> Và theo tôi hiểu, chúng ta có thể implement một
        decorators mới bất cứ lúc nào để thêm hành vi mới. Nếu chúng tôi dựa
        vào sự kế thừa, chúng tôi phải thay đổi code hiện có bất cứ khi nào
        chúng tôi muốn hành vi mới.
      </p>

      <p>
        <strong>Sue:</strong> Chính xác.
      </p>

      <p>
        <strong>Mary: </strong>Một câu hỏi nữa. Nếu tất cả những gì chúng ta
        cần kế thừa là loại component, tại sao chúng ta không sử dụng
        interface thay vì một lớp abstract cho lớp Beverage?
      </p>

      <p>
        <strong>Sue:</strong> Chà, hãy nhớ rằng, khi chúng tôi nhận được code,
        Starbuzz đã có một lớp abstract Beverage. Theo quy tắc, Decorator
        Pattern sẽ chỉ định một abstract class, nhưng trong Java, rõ ràng,
        chúng ta có thể sử dụng một interface. Nhưng chúng tôi luôn cố gắng
        tránh thay đổi code hiện có, vì vậy đừng sửa nó nếu lớp trừu tượng vẫn
        hoạt động tốt.
        <br />
      </p>

      <p>
        <strong>
          Tạo một bức tranh cho những gì xảy ra khi đơn đặt hàng cho một ly cà
          phê với toping là soy, gấp đôi mocha, và whip. Sử dụng menu để có
          được giá chính xác và vẽ hình ảnh của bạn bằng cách sử dụng cùng
          định dạng chúng tôi đã sử dụng dưới đây:
        </strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_20.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Hãy suy nghĩ trước khi xem đáp án:</strong></p>
        `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_21.jpg`),
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
    title: 'Viết Code cho Starbuzz',
    contents: [
      {
        div: `<p>
        <strong>Đã đến lúc đưa thiết kế này vào một đoạn code thực.</strong>
      </p>

      <p>
        <strong>
          Hãy bắt đầu với lớp Beverage, mà không cần phải thay đổi từ thiết kế
          ban đầu của Starbuzz. Hãy xem, hãy xem:
        </strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_22.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Beverage rất đơn giản. Chúng ta cũng hãy tạo lớp Condiments (đây là
        lớp cha của mọi toping – là một Decorator) implements Beverage:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_23.jpg`),
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
    title: 'Code cho các lớp đồ uống',
    contents: [
      {
        div: `<p>
        Bây giờ, chúng tôi đã đưa các lớp cơ sở của mình ra khỏi đường đi, hãy
        để chúng implements lớp Beverage. Chúng tôi sẽ bắt đầu với Espresso.
        Hãy nhớ rằng, chúng ta cần thiết lập một description cho đồ uống cụ
        thể và cũng implements phương thức cost().
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_24.jpg`),
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
    title: 'Code các lớp toping (condiments)',
    contents: [
      {
        div: `<p>
        Nếu bạn nhìn lại sơ đồ lớp Mẫu trang trí, bạn sẽ thấy chúng ta đã viết
        thành phần trừu tượng (Đồ uống), chúng ta có các thành phần cụ thể
        (HouseBlend) và chúng ta có lớp trừu tượng decorator
        (CondimentDecorator). Bây giờ nó thời gian để implements các loại
        toping. Dưới đây là <strong>Mocha</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_25.jpg`),
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
    title: 'Phục vụ một ít cà phê',
    contents: [
      {
        div: `<p>
        Xin chúc mừng. Đó là thời gian để ngồi lại, đặt một vài tách cà phê và
        ngạc nhiên trước thiết kế linh hoạt mà bạn đã tạo ra với Mẫu trang
        trí.
      </p>

      <p>Dưới đây là một đoạn test code để order một tách cà phê</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_26.jpg`),
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
        div: `
        <p>
          <strong>Hỏi:</strong> Tôi có một chút lo lắng về code&nbsp; khi test
          một lớp con của đồ uống, giả sử HouseBlend – và làm một cái gì đó, như
          phát hành mã giảm giá. Khi tôi đã bọc <strong>HouseBlend</strong> bằng
          các decorator, điều này sẽ không còn hiệu quả nữa.
        </p>

        <p>
          <strong>Trả lời:</strong> Điều đó hoàn toàn chính xác. Nếu bạn có code
          dựa trên loại concrete component, decorators sẽ phá vỡ code đó. Miễn
          là bạn viết code theo kiểu abstract component, việc sử dụng các
          decorators sẽ “trong suốt” đối với code của bạn. Tuy nhiên, một khi
          bạn bắt đầu viết code chống lại các concrete component, bạn sẽ muốn
          suy nghĩ lại thiết kế ứng dụng của bạn và sử dụng trang trí của bạn.
        </p>

        <p>
          <strong>Hỏi:</strong> Không dễ để một để một loại đồ uống của ai đó
          kết thúc với một decorator mà không phải là decorator ngoài cùng?
          Giống như nếu tôi có <strong>DarkRoast</strong> với 
          <strong>Mocha</strong>, <strong>Soy</strong> và <strong>Whip</strong>,
          thật dễ dàng để viết code mà bằng cách nào đó kết thúc bằng một tham
          chiếu đến Soy thay vì Whip, có nghĩa là nó sẽ không bao gồm Whip trong
          đơn hàng.
        </p>

        <p>
          <strong>Trả lời:</strong> Bạn chắc chắn có thể lập luận rằng bạn phải
          quản lý nhiều đối tượng hơn với Decorator Pattern và do đó, có nhiều
          khả năng coding errors sẽ đưa ra các vấn đề như bạn nói. Tuy nhiên,
          decorator thường được tạo bằng cách sử dụng các mẫu khác như 
          <strong>Factory</strong> và <strong>Builder</strong>. Một khi chúng
          tôi đã trình bày các mẫu này, bạn sẽ thấy rằng việc tạo ra concrete
          component với decorator của nó là một gói được đóng gói tốt và không
          dẫn đến các loại vấn đề bên trên.
        </p>

        <p>
          <strong>Hỏi: Decorator</strong> có thể biết về các Decorator khác
          trong chuỗi không? tôi muốn phương thức 
          <em>
            <strong>getDecription()</strong>
          </em> 
          của tôi in dòng chữ “
          <strong>
            <em>Whip, Double Mocha</em>
          </strong>
          ” thay vì của “
          <strong>
            <em>Mocha, Whip, Mocha</em>
          </strong>
          ”? Điều đó đòi hỏi decorator ngoài cùng của tôi biết tất cả những
          decorator mà nó đang bọc.
        </p>

        <p>
          <strong>Trả lời:</strong> Decorator có nghĩa là thêm hành vi cho đối
          tượng nó bọc. Khi bạn cần biết đến nhiều lớp trong chuỗi decorator,
          bạn đang bắt đầu đưa decorator vượt ra ngoài ý định thực sự của nó.
          Tuy nhiên, những điều như vậy là có thể. Hãy tưởng tượng một decorator 
          <strong>CondimentPrettyPrint</strong> phân tích cú pháp lớp cuối cùng
          và có thể in ra “
          <strong>
            <em>Mocha, Whip, Mocha</em>
          </strong>
          ” thành “
          <strong>
            <em>Whip, Double Mocha</em>
          </strong>
          ”.
          <br />
        </p>

        <p>
          <strong>Bài tập:</strong>
        </p>

        <p>
          Bạn bè của chúng tôi tại Starbuzz đã giới thiệu “size” vào menu của
          họ. Bây giờ bạn có thể đặt một tách cà phê với kích thước 
          <strong>tall</strong>, <strong>grande</strong> và 
          <strong>venti</strong> (nhỏ, vừa và lớn). Starbuzz thấy đây là một
          phần của lớp cà phê, vì vậy họ đã thêm hai phương thức vào lớp
          Beverage: 
          <strong>
            <em>setSize()</em>
          </strong> 
          và 
          <strong>
            <em>getSize()</em>
          </strong>
          . Họ cũng thích các loại gia vị được tính theo kích cỡ, vì vậy, ví dụ,
          Soy có giá lần lượt là 10¢, 15¢ và 20¢ cho các loại cà phê 
          <strong>tall</strong>, <strong>grande</strong> và 
          <strong>venti</strong>.
        </p>

        <p>
          Làm thế nào bạn sẽ thay đổi các lớp decorator để xử lý sự thay đổi
          trong các yêu cầu?
        </p>

        <p>
          <strong>Đáp án:</strong>
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_27.jpg`),
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
    title: 'Thế giới thực của Decorator Pattern: Java I/O',
    contents: [
      {
        div: `<p>
        Số lượng lớn các lớp trong gói <strong>java.io</strong> là … quá
        nhiều. Đừng cảm thấy cô đơn nếu bạn nói rằng “whoa”&nbsp; một lần (và
        hai lần và ba lần) bạn đã xem API này. Nhưng bây giờ bạn đã biết
        Decorator Pattern, các lớp I/O sẽ có ý nghĩa hơn vì gói 
        <strong>java.io</strong> chủ yếu dựa trên Decorator Pattern. Dưới đây
        là một bộ đối tượng điển hình sử dụng Decorator Pattern để thêm chức
        năng đọc dữ liệu từ một tệp:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_28.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Cả <strong>Buffered</strong>InputStream và <strong>LineNumber</strong>
        InputStream đều extends <strong>Filter</strong>InputStream – hoạt động
        như lớp trang trí trừu tượng.
      </p>`,
      },
      {
        p: `<h6><b>DECORATING THE JAVA.IO CLASSES</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_29.jpg`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: ` <p>
        Bạn có thể thấy rằng sơ đồ này không quá khác biệt so với thiết kế của
        Starbuzz. Bây giờ bạn sẽ ở một vị trí tốt để xem qua các tài liệu API
        java.io và soạn thảo các compose decorator trên các inputstream khác
        nhau.
      </p>

      <p>
        Và bạn sẽ thấy rằng các <em>output stream</em> có cùng thiết kế. Và
        bạn có lẽ đã phát hiện ra rằng các luồng Reader/Writer (đối với dữ
        liệu dựa trên ký tự) phản ánh chặt chẽ thiết kế của các lớp luồng (có
        một chút khác biệt, nhưng đủ để tìm hiểu điều gì xảy ra).
      </p>

      <p>
        Nhưng Java I/O cũng chỉ ra một trong những nhược điểm của Decorator
        Pattern: các thiết kế sử dụng mẫu này thường dẫn đến một số lượng lớn
        các lớp nhỏ có thể làm cho nhà phát triển đang cố gắng sử dụng API dựa
        trên Decorator cảm thấy choáng ngộp. Nhưng bây giờ bạn đã biết cách
        Decorator hoạt động, bạn có thể giữ mọi thứ trong khuôn mẫu và khi bạn
        đang sử dụng một API Decorator khổng lồ của người khác, bạn có thể tìm
        hiểu cách tổ chức các lớp của họ để có thể dễ dàng sử dụng gói để có
        được hành vi sau đó.
      </p>`,
      },
      {
        p: `<h6><b>VIẾT TRÌNH TRANG TRÍ I/O JAVA CỦA RIÊNG BẠN</b></h6>`,
      },
      {
        div: `<p>
        Được rồi, bạn biết Decorator Pattern, bạn đã thấy sơ đồ lớp I/O. Bạn
        nên sẵn sàng để viết input decorator của riêng bạn.
      </p>

      <p>
        <strong>Làm thế nào: </strong>viết một <strong>Decorator</strong> 
        chuyển đổi tất cả các ký tự chữ hoa thành chữ thường trong input
        stream. Nói cách khác, nếu chúng ta đọc “
        <em>I know the Decorator Pattern therefore I RULE!</em>” khi đó
        decorator của bạn sẽ chuyển thành “
        <em>i know the decorator pattern therefore i rule!</em>”
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_30.jpg`),
          width: `70%`,
          align: `left`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>TEST JAVA I/O DECORATOR MỚI CỦA BẠN</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-3_31.jpg`),
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
    title: 'Phỏng vấn tuần này: Lời thú tội của một Decorator Pattern',
    contents: [
      {
        div: `<p>
        <strong>HeadFirst:</strong> Chào mừng Decorator Pattern. Chúng tôi
        nghe nói rằng bạn gần đây đã hơi thất vọng?
      </p>

      <p>
        <strong>Decorator: </strong>Vâng, tôi biết thế giới coi tôi là mẫu
        thiết kế hấp dẫn, nhưng bạn biết đấy, tôi đã có những chia sẻ về vấn
        đề của mình đến mọi người.
      </p>

      <p>
        <strong>HeadFirst:</strong> Có lẽ bạn nên chia sẻ một số rắc rối của
        bạn với chúng tôi?
      </p>

      <p>
        <strong>Decorator:</strong> Chắc chắn rồi. Chà, bạn biết tôi đã có sức
        mạnh để thêm sự linh hoạt cho các thiết kế, điều đó là chắc chắn,
        nhưng tôi cũng có một mặt hạn chế. Bạn thấy đấy, đôi khi tôi có thể
        thêm rất nhiều lớp nhỏ vào một thiết kế và điều này đôi khi dẫn đến
        một thiết kế rất khó để người khác hiểu.
      </p>

      <p>
        <strong>HeadFirst: </strong>Bạn có thể cho chúng tôi một ví dụ?
      </p>

      <p>
        <strong>Decorator:</strong> Lấy các thư viện I/O Java. Đây là những
        thứ khó cho mọi người có thể hiểu ở lần đầu tiên. Nhưng nếu họ chỉ xem
        các lớp là một tập hợp các hàm bao quanh InputStream, cuộc sống sẽ dễ
        dàng hơn nhiều.
      </p>

      <p>
        <strong>HeadFirst: </strong>Điều đó nghe có vẻ rất tệ. Bạn vẫn là một
        mô hình tuyệt vời, và cải thiện điều này chỉ là một vấn đề nhỏ, phải
        không? 
      </p>

      <p>
        <strong>Decorator: </strong>Còn nhiều hơn nữa, tôi sợ. Tôi đã gặp vấn
        đề: bạn thấy đấy, đôi khi người ta lấy một đoạn code dựa trên các lớp
        con và áp dụng vào các Decorator mà không suy nghĩ. Bây giờ, một điều
        tuyệt vời với tôi là bạn thường có thể thêm “trang trí trong suốt” và
        client không bao giờ phải biết nó. Nhưng như tôi đã nói, một số code
        phụ thuộc vào các lớp con và khi bạn bắt đầu đưa vào decorators, boom!
        Những điều tồi tệ sẽ xảy ra.
      </p>

      <p>
        <strong>HeadFirst:</strong> Chà, tôi nghĩ mọi người đều hiểu rằng cần
        phải cẩn thận khi sử dụng Decorator, nhưng tôi không nghĩ rằng đây là
        một lý do để bạn coi thường bản thân.
      </p>

      <p>
        <strong>Decorator:</strong> Tôi biết, tôi cố gắng không được. Tôi cũng
        có một vấn đề là áp dụng các Decorator có thể làm tăng độ phức tạp của
        code cần thiết để khởi tạo component. Khi bạn đã dùng Decorator, bạn
        không chỉ khởi tạo component mà còn bao bọc nó với những decorators.
      </p>

      <p>
        <strong>HeadFirst:</strong> Tôi sẽ phỏng vấn các mẫu 
        <strong>Factory</strong> và <strong>Builder</strong> vào tuần tới –
        Tôi nghe nói chúng có thể rất hữu ích với điều này?
      </p>

      <p>
        <strong>Decorator: </strong>Điều đó là đúng; Tôi nên nói chuyện với
        những mẫu đó thường xuyên hơn.
      </p>

      <p>
        <strong>HeadFirst:</strong> Chà, tất cả chúng ta đều nghĩ rằng bạn là
        một mẫu thiết kế tuyệt vời để tạo ra các thiết kế linh hoạt và đúng
        với Nguyên tắc Đóng mở, vì vậy hãy giữ nó và suy nghĩ tích cực! 
      </p>

      <p>
        <strong>Decorators:</strong> Tôi làm hết sức mình, cảm ơn bạn.
      </p>`,
      },
    ],
  },
  {
    title: 'Tóm tắt',
    contents: [
      {
        div: `<ul>
        <li>
          Kế thừa là một hình thức mở rộng, nhưng không nhất thiết là cách tốt
          nhất để đạt được sự linh hoạt trong các thiết kế của chúng tôi.
        </li>
        <li>
          Trong các thiết kế của chúng tôi, chúng tôi nên cho phép hành vi
          được mở rộng mà không cần phải sửa đổi code hiện có.
        </li>
        <li>
          <strong>Composition</strong> và <strong>delegation</strong> thường
          có thể được sử dụng để thêm các hành vi mới
          <em>
            <strong> in runtime</strong>
          </em>
          .
        </li>
        <li>
          <strong>Decorator Pattern</strong> cung cấp một sự thay thế cho
          subclass để mở rộng hành vi.
        </li>
        <li>
          <strong>Decorator Pattern</strong> bao gồm một tập hợp các lớp trang
          trí được sử dụng để bọc các concrete component (concrete component
          kế thừa từ lớp component).
        </li>
        <li>
          Các lớp Decorator phản chiếu các loại thành phần mà nó trang trí.
          (Trên thực tế, chúng cùng loại với các component mà chúng trang trí,
          thông qua kế thừa hoặc implement interface.)
        </li>
        <li>
          Các Decorator thay đổi hành vi của các component của chúng bằng cách
          thêm chức năng mới trước và/hoặc sau (hoặc thậm chí thay thế) các
          cuộc gọi phương thức đến component.
        </li>
        <li>
          Bạn có thể bọc một component với bao nhiêu decorator tuỳ thích.
        </li>
        <li>
          Decorator thường transparent (trong suốt – nghĩa là client chỉ biết
          đến các lớp base class trừu tượng bên trên mà không cần biết đến các
          lớp con cụ thể) với client của component.
        </li>
        <li>
          Decorators có thể dẫn đến nhiều đối tượng nhỏ trong thiết kế của bạn
          và việc sử dụng quá mức có thể phức tạp.
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
        p: `Nguồn bài dịch: <b>NQT-K4DNC</b>
        <br />
        Chỉnh sửa bởi: <b>Tôi học Design pattern</b>`,
      },
    ],
  },
];
