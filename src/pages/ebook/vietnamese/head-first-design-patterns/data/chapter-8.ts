import IContent from 'utils/interface';

export const chapter8: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_1.png`),
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
    title: `Template Method Pattern – Đóng gói thuật toán`,
    contents: [
      {
        div: `<p>
        Chúng ta đang trên một chuỗi các đóng gói: chúng tôi đã đóng gói việc tạo đối
        tượng (<a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
          >Factory method</a
        >), đóng gói lời gọi phương thức (<a
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/7"
          >Command</a
        >), đóng gói giao diện phức tạo (<a
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/9"
          >Facade pattern</a
        >), vịt, pizza … tiếp theo sẽ là gì? Với
        <strong>Template method pattern</strong>, chúng tôi sẽ tiếp tục đóng gói các
        phần của thuật toán để các lớp con có thể tự móc (hook) vào một tính toán bất
        cứ lúc nào chúng muốn. Chúng tôi thậm chí sẽ tìm hiểu về một nguyên tắc thiết
        kế lấy cảm hứng từ Hollywood.
      </p>`,
      },
    ],
  },
  {
    title: `Đây là thời gian cần nhiều Caffeine`,
    contents: [
      {
        div: `<p>
        Một số người không thể sống thiếu cà phê; một số người khác không thể sống mà
        không có trà. Thành phần phổ biến của chúng là gì? Tất nhiên Caffeine!
      </p>
      
      <p>
        Nhưng còn nhiều hơn thế; trà và cà phê được làm theo những cách rất giống
        nhau. Hãy cùng kiểm tra nào:
      </p>`,
      },
    ],
  },
  {
    title: `Hướng dẫn pha chế Starbuzz Coffee Barista`,
    contents: [
      {
        div: `<p>
        <strong
          ><em
            >Baristas! Hãy làm theo các công thức này chính xác khi chuẩn bị đồ uống
            Starbuzz.</em
          ></strong
        >
      </p>
      <p>
        <em><strong>Starbuzz Coffee Recipe&nbsp;&nbsp;</strong></em>
      </p>
      <p>(<em>1) Đun sôi nước</em></p>
      <p><em>(2) Pha cà phê trong nước sôi</em></p>
      <p><em>(3) Rót cà phê vào cốc</em></p>
      <p><em>(4) Thêm đường và sữa</em></p>
      <p>
        <em><strong>Starbuzz Tea Recipe</strong></em>
      </p>
      <p><em>(1) Đun sôi một ít nước</em></p>
      <p><em>(2) Bỏ trà vào nước sôi</em></p>
      <p><em>(3) Rót trà vào cốc</em></p>
      <p><em>(4) Thêm chanh</em></p>`,
      },
    ],
  },
  {
    title: `Viết một số lớp cà phê và trà (bằng Java)`,
    contents: [
      {
        div: `<p>Hãy viết một số dòng code để tạo ra cà phê và trà.</p>`,
      },
      {
        p: `<h6><b>Ở ĐÂY, LỚP CÀ PHÊ:</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_2.png`),
          width: `90%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>VÀ BÂY GIỜ LÀ LỚP TRÀ…</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_3.png`),
          width: `90%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Khi chúng ta thấy việc trùng lặp code, đó là một dấu hiệu tốt để bắt đầu dọn
        dẹp lại. Có vẻ như ở đây chúng ta nên trừu tượng hóa những phần chung thành
        một lớp cơ sở vì cà phê và trà trông rất giống nhau?
      </p>
      
      <p><strong>Bài tập</strong>:</p>
      
      <p>
        Bạn đã thấy rằng các lớp Cà phê và Trà có một chút trùng lặp code. Hãy xem xét
        lại và vẽ sơ đồ lớp cho thấy cách bạn thiết kế lại các lớp để loại bỏ sự dư
        thừa.
      </p>
      
      <p><strong>Đáp án:</strong></p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_4.jpg`),
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
    title: `Thưa ông, tôi có thể trừu tượng Cà phê, Trà của ông không?`,
    contents: [
      {
        div: `<p>
        Có vẻ như chúng tôi đã có một bài tập thiết kế khá đơn giản trên tay với các
        lớp Coffee và Tea.
      </p>
      
      <p>Sơ đồ đầu tiên của bạn có thể trông giống như thế này:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_5.png`),
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
        Thiết kế lại có tốt không? Hmmmm, hãy xem xét lại. Có phải chúng ta đang xem
        xét một số điểm chung khác của Cà phê và Trà không? Những điểm chung đó là gì?
      </p>`,
      },
    ],
  },
  {
    title: `Đưa thiết kế đi xa hơn…`,
    contents: [
      {
        div: `<p>
        Vậy, những gì làm cà phê và trà có điểm chung? Hãy bắt đầu với các công thức
        pha chế.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_6.jpg`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>Lưu ý rằng cả hai công thức pha chế đều theo cùng một thuật toán:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_7.jpg`),
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
          >Vì vậy, chúng ta có thể tìm một cách để trừu tượng prepareRecipe() không?
          Có, hãy tìm hiểu…</strong
        ><br />
      </p>`,
      },
    ],
  },
  {
    title: `Trừu tượng prepareRecipe()`,
    contents: [
      {
        div: `<p>
        <strong
          >Hãy nghĩ qua việc trừu tượng prepareRecipe() từ mỗi lớp con (nghĩa là các
          lớp Cà phê và Trà)…</strong
        >
      </p>
      <p>
        <strong
          >1. Vấn đề đầu tiên chúng tôi gặp phải là Cà phê sử dụng các phương thức
          brewCoffeeGrinds() và addSugarAndMilk() trong khi Trà sử dụng các phương
          thức steepTeaBag() và addLemon().</strong
        >
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_8.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Hãy suy nghĩ về điều này: <strong>steeping </strong>và
        <strong>brewing </strong>không quá khác nhau; hay nói cách khác, chúng giống
        nhau. Vì vậy, hãy tạo một tên phương thức mới, gọi là
        <strong>brew()</strong> và chúng tôi sẽ sử dụng cùng phương thức này cho dù
        chúng tôi pha cà phê hay pha trà.
      </p>
      
      <p>
        Tương tự như vậy, thêm “đường và sữa” cũng giống như thêm một “quả chanh”: cả
        hai đều thêm hương vị vào đồ uống. Cũng hãy tạo một tên phương thức mới,
        <strong>addCondiment()</strong> để xử lý việc này. Vì vậy, phương thức
        <strong>prepareRecipe()</strong> mới của chúng ta sẽ trông như thế này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_9.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong
          >2. Bây giờ chúng ta có một phương thức prepareRecipe() mới, nhưng chúng ta
          cần điều chỉnh nó trong code. Để làm điều này, chúng ta sẽ bắt đầu với
          superclass&nbsp;CaffeineBeverage:</strong
        >
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_10.jpg`),
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
          >3. Cuối cùng chúng ta cần phải xử lý với các lớp Cà phê và Trà. Bây giờ
          chúng dựa vào CaffeineBeverage để cài đặt công thức, vì vậy chúng chỉ cần xử
          lý brew() và addCondiments():</strong
        >
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_11.jpg`),
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
          >Bài tập: Bây giờ hãy vẽ sơ đồ lớp mới mà chúng tôi đã chuyển việc triển
          khai prepareRecipe() trong lớp CaffeineBeverage</strong
        >
      </p>`,
      },
    ],
  },
  {
    title: `Chúng ta đã làm gì?`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_12.jpg`),
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
    title: `Gặp gỡ Template Method Pattern`,
    contents: [
      {
        div: `<p>
        Về cơ bản, chúng tôi chỉ thực hiện <strong>Template Method Pattern</strong>.
        Đây là gì vậy? Hãy cùng xem xét cấu trúc của lớp
        <strong>CaffeineBeverage</strong>; nó chứa
        <strong>Template Method Pattern</strong> trên thực tế:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_13.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong
          >Template Method xác định các bước của thuật toán và cho phép các lớp con
          cung cấp việc thực hiện cho một hoặc nhiều bước đó.</strong
        >
      </p>`,
      },
    ],
  },
  {
    title: `Pha một ít trà bằng Template method pattern`,
    contents: [
      {
        div: `<p>
        <strong
          >Hãy tiếp tục bằng việc pha trà và theo dõi cách thức hoạt động của Template
          Method. Bạn có thể thấy rằng Template Method điều khiển thuật toán; tại một
          số điểm nhất định trong thuật toán, nó cho phép lớp con cung cấp việc thực
          hiện các bước…</strong
        >
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_14.png`),
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
    title: `Template Method Pattern đã cho chúng ta những gì?`,
    contents: [
      {
        div: `<table class="">
        <tbody>
          <tr>
            <th><strong>Tea &amp; Coffee implementation</strong></th>
            <th>
              <strong>CaffeineBeverage mới, được cung cấp bởi Template Method</strong>
            </th>
          </tr>
          <tr>
            <td>Cà phê và trà đang tự ra quyết định; chúng kiểm soát thuật toán.</td>
            <td>
              Lớp <strong>CaffeineBeverage </strong>tự ra quyết định; nó có thuật
              toán, và bảo vệ chúng.
            </td>
          </tr>
          <tr>
            <td>Code bị trùng lặp ở lớp Coffee và Tea.</td>
            <td>
              Lớp <strong>CaffeineBeverage </strong>tối đa hóa việc tái sử dụng giữa
              các lớp con.
            </td>
          </tr>
          <tr>
            <td>
              Code thay đổi thuật toán yêu cầu mở tất cả các lớp con và thực hiện
              nhiều thay đổi.
            </td>
            <td>
              Thuật toán chỉ ở một nơi (Template method) và thay đổi code chỉ cần được
              thực hiện thay đổi ở chính nơi đó.
            </td>
          </tr>
          <tr>
            <td>
              Các lớp được tổ chức theo cấu trúc đòi hỏi nhiều công việc để thêm một
              loại thức uống caffeine mới.
            </td>
            <td>
              Phiên bản Template Method cung cấp một framework mà các thức uống
              caffeine khác có thể được gắn vào. Caffeine beverage mới chỉ cần
              implement một vài phương thức.
            </td>
          </tr>
          <tr>
            <td>
              Kiến thức về thuật toán và cách thực hiện nó được phân phối trên nhiều
              lớp.
            </td>
            <td>
              Lớp <strong>CaffeineBeverage </strong>tập trung kiến thức về thuật toán
              và dựa vào các lớp con để cung cấp các triển khai hoàn chỉnh.
            </td>
          </tr>
        </tbody>
      </table>`,
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Định nghĩa Template Method Pattern`,
    contents: [
      {
        div: `<p>
        Bạn đã thấy cách thức <strong>Template Method Pattern</strong> hoạt động trong
        ví dụ về Trà và Cà phê của chúng tôi; Bây giờ, hãy xem định nghĩa chính thức
        và tìm hiểu chi tiết:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_15.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <em
          ><strong
            >(Template Method Pattern xác định bộ khung của thuật toán trong một
            phương thức, trì hoãn một số bước cho các lớp con. Template Method cho
            phép các lớp con định nghĩa lại các bước nhất định của thuật toán mà không
            thay đổi cấu trúc thuật toán)</strong
          ></em
        >
      </p>
      
      <p>
        Mẫu này là tất cả về việc tạo một template cho một thuật toán. Template gì?
        Như bạn đã thấy nó chỉ là một phương thức; cụ thể hơn, nó là một phương thức
        định nghĩa thuật toán là một tập hợp các bước. Một hoặc nhiều bước trong số
        này được định nghĩa là abstract và được implement bởi một lớp con. Điều này
        đảm bảo cấu trúc thuật toán không thay đổi, trong khi các lớp con cung cấp một
        phần của việc thực hiện.
      </p>`,
      },
    ],
  },
  {
    title: `Template method pattern: Sơ đồ lớp`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_16.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Chúng ta hãy xem xét kỹ hơn về cách định nghĩa của
        <strong>AbstractClass</strong>, bao gồm cả
        <strong>templateMethod()</strong> và các <strong>primitiveOperation</strong>.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_17.png`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bây giờ chúng ta sẽ xem xét kỹ hơn các loại phương thức có thể đặt trong lớp
        abstract:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_18.png`),
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
    title: `Hooked trên Template Method Pattern…`,
    contents: [
      {
        div: `<p>
        Với một hook, tôi có thể override phương thức, hoặc không. Nó là lựa chọn của
        tôi. Nếu tôi không muốn, lớp trừu tượng cung cấp một cài đặt mặc định.
      </p>
      
      <p>
        Một hook là một phương thức được khai báo trong lớp trừu tượng, nhưng chỉ cung
        cấp một cài đặt mặc định hoặc rỗng. Điều này mang lại cho các lớp con khả năng
        móc nối vào thuật toán tại các điểm khác nhau, nếu chúng muốn; một lớp con
        cũng được tự do bỏ qua hook.&nbsp;
      </p>
      <p>
        Có một số cách sử dụng hook; Hãy nhìn chúng ngay bây giờ. Chúng tôi sẽ nói về
        một vài cách sử dụng khác sau:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_19.jpg`),
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
    title: `Sử dụng hook`,
    contents: [
      {
        div: `<p>
        Để sử dụng hook, chúng ta override nó trong lớp con của chúng ta. Ở đây, hook
        kiểm soát xem <strong>CaffeineBeverage </strong>có phải là một phần nhất định
        của thuật toán hay không; đó là, liệu nó thêm một gia vị cho đồ uống không?
      </p>
      
      <p>
        Làm thế nào để chúng ta biết liệu client muốn gia vị (đường, sữa, chanh…)
        không? Phải hỏi thôi!
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_20.png`),
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
    title: `Hãy run TestDrive`,
    contents: [
      {
        div: `<p>
        Được rồi, nước đang sôi … Ở đây, code thử nghiệm nơi chúng tôi tạo ra một tách
        trà và một tách cà phê nóng.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_21.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>Và hãy để cho nó chạy…</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_22.png`),
          width: `70%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bây giờ, tôi có thể nghĩ rằng chức năng như hỏi client có thể đã được sử dụng
        bởi tất cả các lớp con không?
      </p>
      
      <p>
        Bạn biết gì không? Chúng tôi đồng ý với bạn. Nhưng bạn phải thừa nhận đó là
        một ví dụ khá hay về cách một hook có thể được sử dụng để kiểm soát một cách
        có điều kiện dòng chảy của thuật toán trong lớp abstract. Chúng tôi chắc chắn
        rằng bạn có thể nghĩ ra nhiều kịch bản thực tế khác, nơi bạn có thể sử dụng
        template method và hook trong code của riêng bạn.
      </p>`,
      },
    ],
  },
  {
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi:</strong> Khi tôi tạo một <strong>template method</strong>, làm
        thế nào để tôi biết khi nào nên sử dụng abstract method và khi nào sử dụng
        hook?
      </p>
      
      <p>
        <strong>Trả lời:</strong> Sử dụng các abstract method khi lớp con của bạn
        <strong>BẮT BUỘC </strong>cung cấp việc triển khai phương thức hoặc các bước
        trong thuật toán. Sử dụng hook khi phần đó của thuật toán là tùy chọn (có thể
        thực hiện hoặc không thực hiện do lớp con lựa chọn). Với hook, một lớp con có
        thể chọn thực hiện hook đó, nhưng nó cũng có thể không cần thực hiện.
      </p>
      
      <p><strong>Hỏi:</strong> Hook thực sự được cho là dùng để làm gì?</p>
      
      <p>
        <strong>Trả lời:</strong> Có một vài cách sử dụng hook. Như chúng ta vừa nói,
        một hook có thể cung cấp một cách để một lớp con thực hiện một phần tùy chọn
        của thuật toán hoặc nếu nó không quan trọng đối với việc thực hiện ở lớp con
        thì lớp con có thể bỏ qua nó. Một cách sử dụng khác là tạo cho lớp con cơ hội
        phản ứng với một số bước trong template method sắp xảy ra hoặc vừa xảy ra.
        Chẳng hạn, một phương thức hook như <strong>justReOrderedList()</strong> cho
        phép lớp con thực hiện một số hoạt động (chẳng hạn như hiển thị lại hiển thị
        trên màn hình) sau khi danh sách được reoder (sắp xếp lại). Như bạn đã thấy
        một cái hook cũng có thể cung cấp một lớp con với khả năng đưa ra quyết định
        cho lớp trừu tượng.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Một lớp con có phải implement tất cả các abstract method
        trong <strong>AbstractClass</strong> không?
      </p>
      <p>
        <strong>Trả lời:</strong> Có, mỗi lớp con cụ thể xác định toàn bộ tập hợp các
        abstract method và cung cấp một triển khai đầy đủ các bước chưa được định
        nghĩa của thuật toán template method.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Có vẻ như tôi nên giữ các abstract method của mình với
        số lượng nhỏ, nếu không, sẽ là một công việc lớn để implement chúng trong lớp
        con.
      </p>
      
      <p>
        <strong>Trả lời:</strong> Đó là một điều tốt để ghi nhớ khi bạn viết các
        template method. Đôi khi điều này có thể được thực hiện bằng cách không làm
        cho các bước của thuật toán của bạn quá chi tiết. Nhưng nó rõ ràng là một sự
        đánh đổi: càng ít chi tiết, càng kém linh hoạt. Hãy nhớ rằng, một số bước sẽ
        là tùy chọn; vì vậy bạn có thể thực hiện chúng như các hook thay vì các phương
        thức trừu tượng, giảm bớt gánh nặng cho các lớp con của lớp trừu tượng của
        bạn.
      </p>`,
      },
    ],
  },
  {
    title: `Nguyên tắc từ Hollywood`,
    contents: [
      {
        div: `<p>
        Chúng tôi đã có một nguyên tắc thiết kế khác cho bạn; nó gọi là Nguyên tắc
        Hollywood:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_23.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center"><small>Đừng gọi chúng tôi, chúng tôi sẽ gọi bạn.</small></p>`,
      },
      {
        div: `<p>Dễ nhớ phải không? Nhưng nó có liên quan gì đến thiết kế OO?</p>

        <p>
          Nguyên tắc Hollywood cung cấp cho chúng ta một cách để ngăn chặn “dependency
          rot” (nghĩa đen: Sự thối rữa phụ thuộc – hiểu nôm na là sự phụ thuộc ảnh hưởng
          đến chúng ta, ví dụ khi bảo trì sẽ khó khăn hơn…). “Dependency rot” xảy ra khi
          bạn có các thành phần cấp cao phụ thuộc vào các thành phần cấp thấp, phụ thuộc
          tiếp vào các thành phần cấp cao khác phụ thuộc vào các thành cấp thấp, v.v. .
          Khi “Dependency rot” xảy ra, không ai có thể dễ dàng hiểu cách thiết kế một hệ
          thống.
        </p>
        <p>
          Với Nguyên tắc Hollywood, chúng tôi cho phép các thành phần cấp thấp tự hook
          vào một hệ thống, nhưng các thành phần cấp cao xác định khi nào cần thiết và
          làm thế nào. Nói cách khác, các thành phần cấp cao cung cấp cho các thành phần
          cấp thấp một tên “đừng gọi chúng tôi, chúng tôi sẽ gọi bạn” (don’t call us,
          we’ll call you).
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_24.png`),
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
    title: `Hollywood Principle và Template Method Pattern`,
    contents: [
      {
        div: `<p>
        Mối liên hệ giữa Nguyên tắc Hollywood và Template method pattern có lẽ đã rõ
        ràng: khi chúng tôi thiết kế với Template method, chúng tôi sẽ nói với các lớp
        con, “<em>don’t call us, we’ll call you</em>”. Bằng cách nào? Hãy xem xét lại
        thiết kế <strong>CaffeineBeverage </strong>của chúng tôi:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_25.jpg`),
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
        Những mẫu thiết kế nào khác sử dụng Nguyên tắc Hollywood?
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
          >Factory Method</a
        >,
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/2"
          >Observer</a
        >; hay bất kì mẫu khác?
      </p>`,
      },
    ],
  },
  {
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi: </strong>Nguyên tắc Hollywood và Nguyên tắc nghịch đảo phụ thuộc
        (Dependency inversion principle) mà chúng ta đã học được một vài chương trước
        liên quan như thế nào?
      </p>
      
      <p>
        <strong>Trả lời:</strong> Nguyên tắc nghịch đảo phụ thuộc dạy chúng ta tránh
        sử dụng các lớp cụ thể và thay vào đó làm việc nhiều nhất có thể với sự trừu
        tượng. Nguyên tắc Hollywood là một kỹ thuật xây dựng các framework hoặc các
        component để các thành phần cấp thấp hơn có thể được nối (hook) vào xử lý,
        nhưng không tạo ra sự phụ thuộc giữa các thành phần cấp thấp vào các lớp cấp
        cao hơn.
      </p>
      <p>
        Vì vậy, cả hai đều có mục tiêu là tách rời, nhưng Nguyên tắc nghịch đảo phụ
        thuộc tạo nên một tuyên bố chung mạnh mẽ và mạnh mẽ hơn nhiều về Làm thế nào
        để tránh phụ thuộc trong thiết kế. Nguyên tắc Hollywood cho chúng ta một kỹ
        thuật để tạo ra các thiết kế cho phép các cấu trúc cấp thấp tương tác với nhau
        trong khi ngăn các lớp khác trở nên quá phụ thuộc vào chúng.
      </p>
      
      <p>
        <strong>Hỏi: </strong>Có phải thành phần cấp thấp không được phép gọi phương
        thức trong thành phần cấp cao hơn không?
      </p>
      
      <p>
        <strong>Trả lời:</strong> Không hẳn. Trong thực tế, một thành phần cấp thấp
        thường sẽ gọi một phương thức được định nghĩa ở trên nó trong hệ thống phân
        cấp kế thừa hoàn toàn thông qua kế thừa. Nhưng chúng tôi muốn tránh tạo ra sự
        phụ thuộc vòng tròn rõ ràng giữa thành phần cấp thấp và thành phần cấp cao.
      </p>
      
      <p><strong>Bài tập:</strong></p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_26.jpg`),
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
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_27.jpg`),
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
    title: `Template Method Pattern trong thực tế`,
    contents: [
      {
        div: `<p>
        <strong>Template Method Pattern</strong> là một mẫu rất phổ biến và bạn sẽ tìm
        thấy rất nhiều mẫu trong thực tế. Mặc dù vậy, bạn phải có một con mắt sắc sảo,
        bởi vì có nhiều cách triển khai Template Method không hoàn toàn trông giống
        như thiết kế trong sách giáo khoa.
      </p>
      
      <p>
        Mẫu này xuất hiện thường xuyên vì đây là công cụ thiết kế tuyệt vời để tạo
        framework, trong đó framework kiểm soát cách thực hiện, nhưng để bạn (người sử
        dụng framework) xác định chi tiết của riêng bạn về những gì thực sự xảy ra ở
        mỗi bước của thuật toán của framework.
      </p>
      <p>
        Hãy xem Safari thông qua một vài cách sử dụng trong thực tế (tốt, được thôi,
        trong API Java)…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_28.jpg`),
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
    title: `Sorting với Template Method Pattern`,
    contents: [
      {
        div: `<p>Cái gì mà chúng ta thường cần phải làm với mảng?</p>

        <p><strong>Sắp xếp chúng!</strong></p>
        
        <p>
          Nhận thấy điều đó, các nhà thiết kế của lớp Java Arrays đã cung cấp cho chúng
          ta một template tiện dụng để sắp xếp. Chúng ta hãy xem cách thức hoạt động của
          phương thức này:<br /><em
            >(Chúng tôi đã phân tích code này một chút để dễ giải thích hơn. Nếu bạn
            muốn xem tất cả, hãy lấy nguồn từ Sun và xem thử…)
          </em>
        </p>
        
        <p>
          Chúng tôi thực sự có hai phương thức ở đây và chúng hoạt động cùng nhau để
          cung cấp chức năng sắp xếp
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_29.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_30.jpg`),
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
    title: `Chúng tôi đã có một số vịt để sắp xếp…`,
    contents: [
      {
        div: `<p>
        Hãy nói rằng bạn có một đàn vịt mà bạn muốn sắp xếp. Làm sao bạn làm điều đó?
        Chà, sort template method trong Arrays cung cấp cho chúng tôi thuật toán,
        nhưng bạn cần cho nó biết cách so sánh vịt, mà bạn làm bằng cách implementing
        phương thức <strong>compareTo()</strong> của lớp Arrays… Như vậy có hợp lý
        không?
      </p>
      
      <p>
        Không, nó không hợp lí. Một Array sẽ không có lớp con nào. Tôi nghĩ rằng
        <strong>sort()</strong> chính là <strong>templateMethod()</strong>. Và bên
        trong phương thức sort có gọi đến <strong>compareTo()</strong>, đây chính là
        một bước trong thuật toán và cần các lớp con override lại.
      </p>
      <p>
        Ở đây, một thỏa thuận: các nhà thiết kế <strong>sort()</strong> muốn nó hữu
        ích trên tất cả các mảng, vì vậy họ phải tạo một phương thức
        <strong>static sort()</strong> có thể được sử dụng từ bất cứ đâu. Nhưng điều
        đó không sao, nó hoạt động gần giống như khi nó ở trong một superclass. Bây
        giờ, đây là một chi tiết nữa: bởi vì <strong>sort()</strong> thực sự không
        được định nghĩa trong superclass của chúng ta, nên phương thức
        <strong>sort()</strong> cần biết rằng bạn đã triển khai phương thức
        <strong>compareTo()</strong> hoặc nếu không bạn không có phần cần thiết để
        hoàn thành thuật toán sắp xếp.&nbsp;
      </p>
      
      <p>
        Để xử lý điều này, các nhà thiết kế đã sử dụng
        <strong>Comparable </strong>interface. Tất cả những gì bạn phải làm là
        implement interface này, nó có một phương thức (bất ngờ chưa):
        <strong>compareTo()</strong>.
      </p>
      
      <p><strong>compareTo() là gì?&nbsp;&nbsp;</strong></p>
      
      <p>
        Phương thức <strong>compareTo()</strong> so sánh hai đối tượng và trả về khi
        một đối tượng nhỏ hơn, lớn hơn hoặc bằng đối tượng kia.
        <strong>sort()</strong> sử dụng điều này làm cơ sở so sánh các đối tượng trong
        mảng.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_31.png`),
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
    title: `So sánh Duck với Duck`,
    contents: [
      {
        div: `<p>
        Được rồi, vì vậy bạn biết rằng nếu bạn muốn sắp xếp Vịt, bạn sẽ phải
        implements phương thức <strong>compareTo()</strong> này; bằng cách đó, bạn sẽ
        cung cấp cho lớp Arrays những gì nó cần để hoàn thành thuật toán và sắp xếp
        vịt của bạn.
      </p>
      
      <p>Đây là cách thực hiện:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_32.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Hãy sắp xếp lại những con Vịt</strong></p>

        <p><strong>Đây là test drive cho việc sắp xếp Ducks… </strong>&nbsp;</p>`,
      },
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
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_34.jpg`),
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
    title: `Việc chế tạo máy phân loại vịt`,
    contents: [
      {
        div: `<p>Hãy để việc sắp xếp bắt đầu!</p>

        <p>
          Thông qua cách thức hoạt động của <strong>sort()</strong> template method.
          Chúng tôi sẽ kiểm tra xem template method điều khiển thuật toán như thế nào và
          tại một số điểm nhất định trong thuật toán, xem cách nó yêu cầu Duck object
          của chúng tôi cung cấp việc thực hiện một bước tính toán…
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_35.jpg`),
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
        div: `<p>
        <strong>Hỏi: </strong>Đây có thực sự là
        <strong>Template Method Pattern</strong> hay bạn đang gượng ép quá mức?
      </p>
      
      <p>
        <strong>Trả lời:</strong> Mẫu yêu cầu thực hiện một thuật toán và để các lớp
        con hoàn thành các bước trong thuật toán – và Arrays sort rõ ràng không làm
        điều đó! Nhưng, như chúng ta đã biết, các mẫu trong thực tế không phải lúc nào
        cũng giống như các mẫu trong sách giáo khoa. Chúng phải được sửa đổi để phù
        hợp với bối cảnh và các ràng buộc thực hiện.
      </p>
      <p>
        Các nhà thiết kế của phương thức Arrays <strong>sort()</strong> có một vài
        ràng buộc. Nói chung, bạn không thể phân lớp một Java array và họ muốn phương
        thức sort được sử dụng trên tất cả các mảng (và mỗi mảng là một lớp khác
        nhau). Vì vậy, họ đã định nghĩa một phương thức static và chuyển phần so sánh
        của thuật toán tới các item được sắp xếp.
      </p>
      
      <p>
        Vì vậy, mặc dù nó không phải là một template method pattern trong sách giáo
        khoa, nhưng việc triển khai này vẫn theo tinh thần của
        <strong>Template Method Pattern</strong>. Ngoài ra, bằng cách loại bỏ yêu cầu
        bạn phải phân lớp Array để sử dụng thuật toán này, họ đã thực hiện sắp xếp
        theo một số cách linh hoạt và hữu ích hơn.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Việc triển khai phương thức sort này thực sự có vẻ giống
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          >Strategy</a
        >
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          >Pattern</a
        >
        hơn là <strong>Template Method Pattern</strong>. Tại sao chúng ta coi nó là
        <strong>Template Method Pattern</strong>?
      </p>
      
      <p>
        <strong>Trả lời:</strong> Có lẽ bạn đang nghĩ rằng bởi vì Strategy<a
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
        >
        </a
        >Pattern sử dụng việc kết hợp (compose) đối tượng (Arrays compose với
        Comparable). Bạn nói đúng – chúng tôi đang sử dụng đối tượng Arrays để sắp xếp
        mảng của chúng tôi, do đó tương tự như Strategy. Nhưng hãy nhớ, trong
        Strategy, lớp mà bạn compose (lớp Comparable) sẽ thực hiện<strong>
          toàn bộ thuật toán</strong
        >. Trong khi thuật toán mà Arrays thực hiện để sắp xếp là
        <strong>không toàn bộ</strong>; nó cần một lớp con để cài đặt phương thức
        <strong>compareTo()</strong> còn thiếu. Vì vậy, nó giống như
        <strong>Template Method Pattern</strong> hơn.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Có ví dụ nào khác về các
        <strong>Template Method Pattern</strong> trong API Java không?
      </p>
      
      <p>
        <strong>Trả lời:</strong> Vâng, bạn sẽ tìm thấy chúng ở một vài nơi. Ví dụ,
        <strong>java.io</strong> có một phương thức <strong>read()</strong> trong
        <strong>InputStream </strong>mà các lớp con phải thực hiện và được sử dụng bởi
        template method <strong><em>read(byte b[], int off, int len)</em></strong
        >.
      </p>`,
      },
    ],
  },
  {
    title: `Sử dụng sức mạnh bộ não`,
    contents: [
      {
        div: `<p>
        Chúng ta biết rằng chúng ta nên ủng hộ compose hơn thừa kế, phải không? Chà,
        những người triển khai <strong>sort()</strong> template method đã quyết định
        không sử dụng tính kế thừa, và thay vào đó cài đặt <strong>sort()</strong> là
        một static method được compose với một <strong>Comparable</strong> khi chạy.
        Chúng tốt hơn như thế nào? Chúng tồi tệ hơn như thế nào? Làm thế nào để bạn
        biết nên tiếp cận cái này hay cái kia? Các mảng Java có làm cho điều này đặc
        biệt khó khăn không?
      </p>
      
      <p><strong>Sử dụng sức mạnh bộ não 2</strong></p>
      
      <p>
        Hãy nghĩ về một mẫu khác là cụ thể hóa của template method. Trong cụ thể hóa
        này, các <strong>primitiveOperation</strong> được sử dụng để tạo và return các
        đối tượng. Đây là mẫu gì? (Xem lại sơ đồ lớp để biết
        <strong>primitiveOperation </strong>là gì)
      </p>`,
      },
    ],
  },
  {
    title: `Swingin’ with Frames`,
    contents: [
      {
        div: `<p>
        Tiếp theo trên Template Method của chúng tôi… hãy chú ý đến việc xoay JFrames!
      </p>
      
      <p>
        Nếu bạn không biết về JFrame, thì đó là Swing container cơ bản nhất và kế thừa
        phương thức <strong>paint()</strong>. Theo mặc định,
        <strong>paint()</strong> không làm gì cả vì nó là hook method! Bằng cách
        override <strong>paint()</strong>, bạn có thể chèn vào thuật toán JFrame, để
        hiển thị màn hình và có đầu ra đồ họa của riêng bạn được tích hợp vào JFrame.
        Ở đây, một ví dụ đơn giản về việc sử dụng JFrame để override phương thức hook
        <strong>paint()</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_36.png`),
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
    title: `Applets`,
    contents: [
      {
        div: `<p>
        Điểm dừng cuối cùng của chúng tôi: applet. Bạn có thể biết một applet là một
        chương trình nhỏ chạy trong một trang web. Bất kỳ applet nào cũng phải kế thừa
        <strong>Applet</strong> class và lớp này cung cấp một số hook. Hãy xem qua một
        vài trong số chúng:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-10_37.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Concrete Applet (lớp <strong>MyApplet</strong>) sử dụng các hook để cung cấp
        hành vi của riêng chúng. Bởi vì các phương thức này được cài đặt như các hook,
        applet không bắt buộc phải implement chúng.
      </p>`,
      },
    ],
  },
  {
    title: `Buổi nói chuyện tối nay: Template Method Pattern và Strategy Pattern so sánh các method của họ`,
    contents: [
      {
        div: `<p>
        <strong>Template Method: </strong
        ><a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          >Strategy</a
        >
        này, chú em đang làm gì trong chương của tôi? Tôi hình dung tôi đã bị kẹt lại
        với một người nhàm chán như
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
          >Factory Method</a
        >.
      </p>
      
      <p>
        <strong>Factory Method:</strong> Này này tôi nghe được đấy, đừng có mà nói lén
        sau lưng tôi.
      </p>
      
      <p>
        <strong>Strategy: </strong>Không, nó khác với tôi, mặc dù hãy cẩn thận – bạn
        và
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
          >Factory Method</a
        >
        có liên quan với nhau không?
      </p>
      
      <p>
        <strong>Template Method: </strong>Tôi chỉ đùa thôi! Giờ thì nghiêm túc, chú em
        đang làm gì ở đây? Chúng tôi đã không nghe nói về chú em suốt tám chương rồi!
      </p>
      
      <p>
        <strong>Strategy: </strong>Tôi nghe nói đến anh trong bản thảo của chương này
        và tôi nghĩ rằng tôi sẽ đi qua để xem nó diễn ra như thế nào. Chúng ta có rất
        nhiều điểm chung, vì vậy tôi nghĩ tôi có thể giúp…
      </p>
      
      <p>
        <strong>Template Method: </strong>Chú em có thể muốn nhắc nhở người đọc một
        chút về những gì chú em làm, vì đã quá lâu để mọi người có thể nhớ chú em là
        ai.
      </p>
      
      <p>
        <strong>Strategy: </strong>Tôi không biết, kể từ
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
          >Chương 1</a
        >, mọi người đã ngăn tôi trên phố và nói rằng, “Bạn không phải là mẫu đó phải
        không?…” vì vậy tôi nghĩ họ biết tôi là ai. Nhưng vì lợi ích của anh: Tôi định
        nghĩa&nbsp;một bộ các thuật toán và làm cho chúng có thể hoán đổi cho nhau. Vì
        mỗi thuật toán được đóng gói, client có thể sử dụng các thuật toán khác nhau
        một cách dễ dàng.&nbsp;
      </p>
      
      <p>
        <strong>Template Method: </strong>Này, nghe có vẻ giống như những gì tôi làm.
        Nhưng ý định của tôi khác một chút so với chú em; công việc của tôi là xác
        định ra “bộ khung” của một thuật toán, nhưng để các lớp con của tôi thực hiện
        một số công việc còn lại. Bằng cách đó, tôi có thể có các triển khai khác nhau
        của các bước trong thuật toán, nhưng giữ quyền kiểm soát cấu trúc thuật toán.
        Có vẻ như chú em phải từ bỏ quyền kiểm soát các thuật toán của mình.
      </p>
      
      <p>
        <strong>Strategy: </strong>Tôi không chắc chắn, nhưng dù sao, tôi cũng không
        bị phụ thuộc khi sử dụng tính kế thừa để triển khai thuật toán. Tôi cung cấp
        cho client một sự lựa chọn thực hiện thuật toán thông qua kết hợp (compose)
        đối tượng.
      </p>
      
      <p>
        <strong>Template Method: </strong>Tôi nhớ điều đó, nhưng tôi có nhiều quyền
        kiểm soát hơn đối với thuật toán của mình và tôi không bị trùng lặp code.
        Trong thực tế, trong trường hợp mọi phần trong thuật toán đều giống nhau ngoại
        trừ một dòng nào đó khác nhau, thì các lớp của tôi hiệu quả hơn nhiều so với
        của chú em. Tất cả các code trùng lặp của tôi được đưa vào superclass, vì vậy
        tất cả các lớp con có thể chia sẻ nó.
      </p>
      
      <p>
        <strong>Strategy: </strong>Anh có thể hiệu quả hơn một chút (chỉ một chút) và
        yêu cầu ít đối tượng hơn. Và anh cũng có thể ít phức tạp hơn một chút so với
        mô hình của tôi, nhưng tôi linh hoạt hơn vì tôi sử dụng object composition
        (kết hợp đối tượng). Với tôi, client có thể thay đổi thuật toán của họ khi
        chạy trong runtime chỉ bằng cách sử dụng một strategy object khác.
      </p>
      
      <p>
        <strong>Template Method:&nbsp; </strong>Vâng, tôi rất vui cho chú em, nhưng
        đừng quên tôi là mẫu được sử dụng nhiều nhất. Tại sao? Bởi vì tôi cung cấp một
        phương thức cơ bản để tái sử dụng code cho phép các lớp con chỉ định hành vi.
        Tôi chắc chắn chú em có thể thấy rằng điều này là hoàn hảo để tạo các
        framework.
      </p>
      
      <p>
        <strong>Strategy:&nbsp; </strong>Vâng, tôi đoán thế… nhưng, còn sự phụ thuộc
        thì sao? Anh phụ thuộc nhiều hơn tôi.
      </p>
      
      <p>
        <strong>Template Method: </strong>Phụ thuộc như thế nào? Superclass của tôi là
        trừu tượng.
      </p>
      
      <p>
        <strong>Strategy: </strong>Nhưng anh phải phụ thuộc vào các phương thức được
        triển khai trong superclass của anh, đây là một phần của thuật toán của anh.
        Tôi không phụ thuộc vào bất cứ ai; Tôi có thể tự làm toàn bộ thuật toán!
      </p>
      
      <p>
        <strong>Template Method: </strong>Giống như tôi đã nói,
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
          >Strategy</a
        >, tôi thật sự hạnh phúc cho chú em. Cảm ơn chú em đã ghé qua, nhưng tôi đã
        hoàn thành phần còn lại của chương này.
      </p>
      
      <p>
        <strong>Strategy: </strong>Được rồi, được rồi, đừng quá xúc động. Tôi sẽ để
        cho anh làm việc, nhưng hãy cho tôi biết nếu anh cần các kỹ thuật đặc biệt của
        tôi, tôi sẽ luôn sẵn lòng giúp đỡ.
      </p>
      
      <p>
        <strong>Template Method: </strong>Hiểu rồi. “Đừng gọi cho tôi, tôi sẽ gọi cho
        bạn…”
      </p>`,
      },
    ],
  },
  {
    title: `Tóm tắt`,
    contents: [
      {
        div: `<ul>
        <li>
          Một “Template method” xác định các bước của một thuật toán, chuyển đến các
          lớp con để thực hiện các bước đó.
        </li>
        <li>
          <strong>Template method pattern</strong> cung cấp cho chúng ta một kỹ thuật
          quan trọng để tái sử dụng lại code.
        </li>
        <li>
          Lớp trừu tượng của Template method có thể định nghĩa các phương thức cụ thể,
          các phương thức trừu tượng và các hook.
        </li>
        <li>Các phương thức trừu tượng được thực hiện trong các lớp con.</li>
        <li>
          Hook là các phương thức không làm gì hoặc chứa hành vi mặc định trong lớp
          trừu tượng, nhưng có thể được override trong lớp con.
        </li>
        <li>
          Để ngăn các lớp con thay đổi thuật toán trong
          <strong>Template method pattern,</strong> hãy khai báo template method với
          từ khóa final.
        </li>
        <li>
          Nguyên tắc Hollywood hướng dẫn chúng ta đưa ra quyết định trong các mô-đun
          cấp cao có thể quyết định cách thức và thời điểm gọi các mô-đun cấp thấp.
        </li>
        <li>
          Bạn có thể thấy rất nhiều cách sử dụng
          <strong>Template Method Pattern</strong> trong thế giới thực, nhưng không
          mong đợi rằng tất cả (giống như bất kỳ mẫu nào) sẽ giống thiết kế bởi cuốn
          sách.
        </li>
        <li>
          Cả
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
            >Strategy </a
          >và <strong>Template Method Pattern</strong> đều đóng gói các thuật toán,
          một theo kế thừa và một theo compose.
        </li>
        <li>
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
            >Factory Method</a
          >
          là một cụ thể hóa của Template Method.
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
