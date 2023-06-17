import IContent from 'utils/interface';

export const chapter7_2: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p>
        Nếu chưa đọc qua&nbsp;Adapter và Facade Pattern – Trở nên thích nghi (<a
          href=/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >Phần 1</a
        >), mời bạn xem lại
        <a
          href=/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >tại đây</a
        >. Ở phần này là <strong>Facade Pattern</strong> (Mẫu mặt tiền) –
        <strong>Facade Pattern</strong> cung cấp một interface chung đơn giản thay cho
        một nhóm các interface phức tạp có trong hệ thống.
        <strong>Facade Pattern</strong> định nghĩa một interface cấp cao hơn giúp hệ
        thống con dễ sử dụng hơn.
      </p>`,
      },
    ],
  },
  {
    title: 'Có một Facade Pattern trong chương này',
    no: false,
    contents: [
      {
        div: `<p>
        Bạn đã thấy cách
        <a
          href=/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >Adapter Pattern</a
        >
        chuyển đổi giao diện của một lớp thành một giao diện mà client đang mong đợi.
        Bạn cũng biết chúng ta đạt được điều này trong Java bằng cách bọc đối tượng có
        interface không tương thích bằng một đối tượng được implement từ interface
        tương thích.
      </p>
      
      <p>
        Bây giờ chúng ta sẽ xem xét một mô hình có thể thay đổi giao diện, nhưng cho
        một lý do khác: để đơn giản hóa giao diện. Nó được đặt tên một cách khéo léo
        là <strong>Facade Pattern</strong> (mặt tiền) vì mẫu này che giấu tất cả sự
        phức tạp của một hoặc nhiều lớp đằng sau mặt tiền sạch sẽ, thiết kế rõ ràng.
      </p>
      <p>Để theo dõi tiếp, hãy hoàn thành bài tập sau đây trước khi xem đáp án:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_1.jpg`),
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
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_2.jpg`),
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
    title: `Nhà hát tại gia đình`,
    contents: [
      {
        div: `<p>
        Trước khi chúng ta đi sâu vào các chi tiết của
        <strong>Facade Pattern</strong>, hãy cùng xem qua ví dụ về việc: xây dựng nhà
        hát gia đình của riêng bạn.
      </p>
      
      <p>
        Sau một lúc tự tìm hiểu và mài mò, và bạn đã lắp ráp một hệ thống hoàn chỉnh
        với đầu DVD, hệ thống video chiếu, màn hình tự động, âm thanh vòm và thậm chí
        là một bỏng ngô.
      </p>
      
      <p>Kiểm tra tất cả các thành phần bạn đặt cùng nhau:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_3.jpg`),
          width: `90%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bạn đã dành hàng tuần để đấu dây, lắp máy chiếu, thực hiện tất cả các kết nối
        và điều chỉnh. Bây giờ, thời gian để đưa tất cả vào chuyển động và thưởng thức
        một bộ phim…
      </p>`,
      },
    ],
  },
  {
    title: `Xem một bộ phim (theo một cách khó khăn)`,
    contents: [
      {
        div: `<p>
        Chọn ra một đĩa DVD, thư giãn và sẵn sàng cho phim phép thuật. Ồ, có một điều
        duy nhất – để xem phim, bạn cần thực hiện một vài nhiệm vụ:
      </p>
      
      <ol>
        <li>Bật chế độ ăn bỏng ngô</li>
        <li>Bắt đầu lấy bỏng ngô</li>
        <li>Giảm ánh sáng</li>
        <li>Đặt màn hình xuống</li>
        <li>Bật máy chiếu</li>
        <li>Đặt đầu vào máy chiếu là DVD</li>
        <li>Đặt máy chiếu ở chế độ màn hình rộng</li>
        <li>Bật bộ amplifier&nbsp;</li>
        <li>Đặt đầu vào bộ amplifier thành DVD</li>
        <li>Đặt đầu ra bộ amplifier thành âm thanh vòm</li>
        <li>Đặt âm lượng bộ khuếch đại thành medium (5)</li>
        <li>Bật đầu DVD</li>
        <li>Bắt đầu phát DVD Player</li>
      </ol>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_4.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Hãy cùng kiểm tra các nhiệm vụ tương tự về các lớp và các lệnh gọi phương thức
        cần thiết để thực hiện chúng:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_5.jpg`),
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
    title: `Nhưng có thêm…`,
    contents: [
      {
        div: `<p>Khi bộ phim kết thúc, làm thế nào để bạn tắt mọi thứ?</p>

        <ul>
          <li>Bạn có muốn làm lại tất cả những điều này một lần nữa không?</li>
          <li>Sẽ rất phức tạp khi nghe CD hay radio?</li>
          <li>
            Nếu bạn quyết định nâng cấp hệ thống của mình, có lẽ bạn sẽ phải học một
            thêm một quy trình khác nữa.
          </li>
        </ul>
        
        <p>
          Vậy làm gì bây giờ? Sự phức tạp của việc sử dụng rạp hát tại nhà của bạn đang
          trở nên rõ ràng!
        </p>
        
        <p>
          Hãy cùng xem, làm thế nào <strong>Facade Pattern</strong> có thể giúp chúng ta
          thoát khỏi mớ hỗn độn này để chúng ta có thể thưởng thức bộ phim.
        </p>`,
      },
    ],
  },
  {
    title: `Lights, Camera, Facade pattern!`,
    contents: [
      {
        div: `<p>
        <strong>Facade Pattern</strong> chính là thứ bạn cần: với
        <strong>Facade Pattern</strong>, bạn có thể có một hệ thống con phức tạp và
        làm cho nó dễ sử dụng hơn bằng cách triển khai lớp Facade cung cấp một giao
        diện hợp lý hơn. Đừng lo lắng vì mẫu sẽ không làm thay đổi hệ thống phức tạp
        của bạn; Nếu bạn cần sức mạnh của một hệ thống con phức tạp, nó vẫn ở đó để
        bạn sử dụng, nhưng nếu tất cả những gì bạn cần là một giao diện đơn giản, thì
        Facade pattern luôn sẵn sàng cho bạn.
      </p>
      
      <p>Hãy cùng nhìn vào cách thức hoạt động của Facade:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_6.jpg`),
          width: `100%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_7.jpg`),
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
        <strong>Hỏi: </strong>Nếu <strong>Facade</strong> đóng gói các lớp ở hệ thống
        con, làm thế nào một client vẫn có quyền truy cập vào hệ thống con đó?
      </p>
      
      <p>
        <strong>Trả lời: Facade</strong> không đóng gói các lớp hệ thống con;
        <strong>Facade</strong> chỉ đơn thuần cung cấp một giao diện đơn giản hóa cho
        chức năng của chúng. Các lớp hệ thống con vẫn có sẵn để sử dụng trực tiếp bởi
        các client cần sử dụng các giao diện cụ thể hơn. Đây là một thuộc tính tuyệt
        vời của <strong>Facade Pattern</strong>: nó cung cấp giao diện đơn giản hóa
        trong khi vẫn có đầy đủ chức năng của hệ thống cho những người có thể cần nó.
      </p>
      
      <p>
        <strong>Hỏi: </strong>&nbsp;<strong>Facade </strong>có thêm bất kỳ chức năng
        nào không hay nó chỉ đưa các yêu cầu đến hệ thống con?
      </p>
      
      <p>
        <strong>Trả lời: </strong>Một <strong>Facade</strong> có thể tự do thêm vào đó
        là những chức năng của riêng mình ngoài việc sử dụng hệ thống con. Ví dụ,
        trong khi home threater facade của chúng ta không thực hiện bất kỳ hành vi mới
        nào, nó đủ thông minh để biết rằng bỏng ngô phải được “turn on” trước khi nó
        có thể ăn (pop) (cũng như các chi tiết về cách bật và chiếu một bộ phim đang
        chiếu).
      </p>
      
      <p>
        <strong>Hỏi:</strong> Mỗi hệ thống con chỉ có một <strong>Facade</strong> ư?
      </p>
      
      <p>
        <strong>Trả lời: </strong>Không nhất thiết. Mẫu chắc chắn cho phép bất kỳ số
        lượng <strong>Facade</strong> nào được tạo cho một hệ thống con nhất định.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Lợi ích khác của <strong>Facade</strong> ngoài việc tôi
        có giao diện đơn giản hơn là gì?
      </p>
      
      <p>
        <strong>Trả lời: Facade Pattern</strong> cũng cho phép bạn tách rời triển khai
        ứng dụng client của mình khỏi bất kỳ một hệ thống con nào. Chẳng hạn như bạn
        được tăng lương và quyết định nâng cấp rạp hát tại nhà của mình lên tất cả các
        thành phần mới có giao diện khác nhau.
      </p>
      
      <p>
        Chà, nếu bạn đã code ứng dụng client của mình sang <strong>Facade</strong> chứ
        không phải hệ thống con, client code của bạn không cần thay đổi, chỉ cần
        <strong>Facade</strong> thay đổi (và hy vọng nhà sản xuất đang cung cấp điều
        đó!).
      </p>
      
      <p>
        <strong>Hỏi:</strong> Vậy cách để nói về sự khác biệt giữa
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >Mẫu Adapter</a
        >
        và Mẫu <strong>Facade</strong> là
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >adapter</a
        >
        bao bọc một lớp còn facade có thể đại diện cho nhiều lớp không?
      </p>
      <p>
        <strong>Trả lời: </strong>Không! Hãy nhớ rằng,
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >Adapter</a
        >
        thay đổi giao diện của <strong>một hoặc nhiều</strong> (chứ không phải một)
        lớp thành một giao diện mà client đang mong đợi (Trong khi hầu hết các ví dụ
        trong sách này cho thấy
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >adapter</a
        >
        chỉ làm việc với một lớp), bạn có thể cần phải điều chỉnh nhiều lớp để cung
        cấp giao diện mà client yêu cầu. Tương tự như vậy, một Facade có thể cung cấp
        một giao diện đơn giản hóa từ một (hoặc nhiều) lớp có giao diện rất phức tạp.
      </p>
      
      <p>
        Sự khác biệt giữa hai loại này không nằm ở việc chúng có bao nhiêu lớp mà
        chúng bao bọc, khác biệt là ý định của chúng. Mục đích của
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
          >Mẫu Adapter</a
        >
        là thay đổi giao diện sao cho phù hợp với giao diện mà client đang mong đợi.
        Mục đích của Mẫu Facade là cung cấp giao diện đơn giản cho hệ thống con.
      </p>
      
      <p>
        <strong
          >Một Facade không chỉ đơn giản hóa một giao diện, nó tách rời một client
          khỏi một hệ thống con của các thành phần. Facade và
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
            >Adapter</a
          >
          có thể bao bọc nhiều lớp, nhưng mục đích của Facade là để đơn giản hóa,
          trong khi một
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
            >Adapter</a
          >
          là để chuyển đổi giao diện sang một dạng khác.</strong
        >
      </p>`,
      },
    ],
  },
  {
    title: `Xây dựng nhà hát gia đình bằng Facade Pattern`,
    contents: [
      {
        div: `<p>
        Hãy cùng nhau bước qua việc xây dựng <strong>HomeTheaterFacade</strong>: Bước
        đầu tiên là sử dụng composition để facade có quyền truy cập vào tất cả các
        thành phần của hệ thống con:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_8.jpg`),
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
    title: `Cài đặt giao diện đơn giản hóa`,
    contents: [
      {
        div: `<p>
        Bây giờ, thời gian để đưa các thành phần của hệ thống con lại với nhau thành
        một giao diện hợp nhất.
      </p>
      
      <p>
        Hãy thực hiện các phương thức <strong>watchMovie()</strong> và
        <strong>endMovie()</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_9.jpg`),
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
        Hãy suy nghĩ về các <strong>Facade </strong>bạn đã gặp trong API Java. Bạn
        muốn có một vài cái mới ở đâu không?
      </p>`,
      },
    ],
  },
  {
    title: `Thời gian để xem một bộ phim (một cách dễ dàng) với Facade Pattern`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_10.jpg`),
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
    title: `Định nghĩa Facade Pattern`,
    contents: [
      {
        div: `<p>
        Để sử dụng Facade, chúng tôi tạo một lớp đơn giản hóa và thống nhất một tập
        hợp các lớp phức tạp hơn thuộc về một số hệ thống con. Không giống như rất
        nhiều mẫu khác, Facade khá đơn giản; không cần suy nghĩ về sự trừu tượng để có
        được nó trong đầu của bạn. Nhưng điều đó không làm cho nó trở nên kém mạnh mẽ:
        Mẫu Facade cho phép chúng ta tránh sự kết hợp chặt chẽ (tight coupling) (nhớ
        lại loose coupling – kết nối lỏng lẻo) giữa các client và các hệ thống con,
        và, như bạn sẽ thấy sau đây, cũng giúp chúng ta tuân thủ một nguyên tắc hướng
        đối tượng mới.
      </p>
      
      <p>
        Trước khi chúng tôi giới thiệu nguyên tắc mới đó, chúng ta hãy xem định nghĩa
        chính thức của mẫu:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_11.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong
          ><em
            >(Mẫu Facade cung cấp một giao diện hợp nhất cho một tập hợp các giao diện
            trong một hệ thống con. Facade định nghĩa một giao diện cấp cao hơn giúp
            hệ thống con dễ sử dụng hơn)</em
          ></strong
        >
      </p>
      
      <p>
        Ở đây không có nhiều thứ mà bạn chưa biết, nhưng một trong những điều quan
        trọng nhất cần nhớ về một mẫu là ý định của nó. Định nghĩa này cho chúng ta
        biết nhiều và rõ ràng rằng mục đích của Facade để làm cho một hệ thống con dễ
        sử dụng hơn thông qua một giao diện đơn giản hóa.
      </p>
      
      <p>Bạn có thể thấy điều này trong sơ đồ lớp của mẫu:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_12.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Chỉ nhiêu đó thôi; bạn đã biết được có một mẫu khác! Bây giờ, đã đến lúc cho
        nguyên tắc OO mới đó. Xem ra, điều này có thể thách thức một số giả định!
      </p>`,
      },
    ],
  },
  {
    title: `Nguyên tắc biết càng ít càng tốt (The Principle of Least Knowledge)`,
    contents: [
      {
        div: `<p>
        Nguyên tắc biết càng ít càng tốt hướng dẫn chúng ta giảm bớt sự tương tác giữa
        các đối tượng với một vài “người bạn thân” của chúng.
      </p>
      
      <p>Nguyên tắc thường được nêu là:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_13.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        div: `<p class="text-center">
        <strong>(Biết càng ít càng tốt – Chỉ giao tiếp với “người bạn thân” của
          bạn)</strong></p>
      <p>
        Nhưng điều này có nghĩa gì trong thực tế? Điều đó có nghĩa là khi bạn đang
        thiết kế một hệ thống, cho bất kỳ đối tượng nào, hãy cẩn thận với số lượng các
        lớp mà nó tương tác và cũng như cách nó tương tác với các lớp đó.
      </p>
      
      <p>
        Nguyên tắc này ngăn chúng ta tạo ra các thiết kế có số lượng lớn các lớp được
        ghép với nhau, khi đó thay đổi trong một phần của tầng hệ thống sẽ ảnh hưởng
        sang các phần khác. Khi bạn xây dựng nhiều sự phụ thuộc giữa nhiều lớp, bạn
        đang xây dựng một hệ thống mỏng manh, sẽ tốn kém để duy trì và phức tạp để
        người khác hiểu.
      </p>`,
      },
    ],
  },
  {
    title: `Sử dụng sức mạnh bộ não`,
    contents: [
      {
        div: `<p>Đoạn code này kết hợp bao nhiêu lớp?</p>`,
      },
      {
        code: {
          src: `public float getTemp() {
      return station.getThermometer().getTemperature();
}`,
          language: 'java',
        },
      },
    ],
  },
  {
    title: `Làm thế nào để không phụ thuộc “người bạn thân”?`,
    contents: [
      {
        div: `<p>
        Được rồi, nhưng làm thế nào để bạn không phụ thuộc? Nguyên tắc cung cấp một số
        hướng dẫn: lấy bất kỳ object; bây giờ từ bất kỳ method nào trong object đó,
        nguyên tắc cho chúng ta biết rằng chúng ta chỉ nên gọi các phương thức thuộc
        về:
      </p>
      
      <ul>
        <li>Bản thân object (được tạo trong chính object).</li>
        <li>Các đối tượng được truyền vào dưới dạng tham số cho phương thức.</li>
        <li>Bất kỳ đối tượng nào phương thức tạo hoặc khởi tạo.</li>
        <li>
          Bất kỳ “thành phần” nào của đối tượng (Hãy nghĩ về một “thành phần” như bất
          kỳ đối tượng nào được tham chiếu bởi một biến instance. Nói cách khác, hãy
          nghĩ về điều này như một mối quan hệ <strong>HAS-A</strong>)
        </li>
      </ul>
      
      <p>
        (Điều này hướng dẫn cho chúng ta không gọi các phương thức trên các đối tượng
        được return từ việc gọi các phương thức khác! (xem lại đoạn code bên trên phần
        “<strong><em>Sử dụng sức mạnh bộ não</em></strong
        >”))
      </p>
      
      <p>
        Điều này nghe có vẻ nghiêm ngặt phải không? Tác hại của việc gọi phương thức
        của một object được return từ một method khác là gì? Chà, nếu chúng ta làm
        điều đó, thì chúng ta sẽ đưa ra yêu cầu của một đối tượng phụ khác, và tăng số
        lượng đối tượng chúng ta biết trực tiếp (object được gọi từ một object khác
        thì không được biết trực tiếp).
      </p>
      
      <p>
        Trong những trường hợp như vậy, nguyên tắc buộc chúng ta yêu cầu đối tượng đó
        tạo ra yêu cầu dùm chúng ta (tạo method cho object chúng ta biết trực tiếp và
        thực hiện request tới object phụ, thay vì đoạn code ở phần “<strong
          ><em>Sử dụng sức mạnh bộ não</em></strong
        >”) ; theo cách đó, chúng ta không thể biết về các đối tượng thành phần của nó
        (và chúng tôi giữ cho “nhóm bạn bè” của chúng tôi nhỏ hơn). Ví dụ:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_14.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        (Sự khác biệt giữa hai phương thức là Phương thức 1: muốn có temperature thì
        phải thông qua instance <strong>Thermometer</strong>, trong khi Phương thức 2:
        tạo 1 phương thức <strong>getTemperature </strong>trực tiếp (xử lí tất cả code
        gọi bên trong này))
      </p>`,
      },
    ],
  },
  {
    title: `Giữ các cuộc gọi phương thức của bạn trong giới hạn…`,
    contents: [
      {
        div: `<p>
        Ở đây, một lớp Car thể hiện tất cả các cách bạn có thể gọi các phương thức và
        vẫn tuân thủ Nguyên tắc biết càng ít càng tốt:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_15.jpg`),
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
        <strong>Hỏi:</strong> Có một nguyên tắc khác gọi là Law of Demeter; chúng liên
        quan như thế nào?
      </p>
      
      <p>
        <strong>Trả lời: </strong>Hai nguyên tắc đó là một và giống nhau và bạn sẽ gặp
        các thuật ngữ này được trộn lẫn với nhau. Chúng tôi thích sử dụng Principle of
        Least Knowledge vì một vài lý do: (1) tên này trực quan hơn và (2) việc sử
        dụng từ “Law (Luật)” ngụ ý chúng tôi luôn phải áp dụng nguyên tắc này. Trong
        thực tế, không có nguyên tắc nào là “Luật”, tất cả các nguyên tắc nên được sử
        dụng khi nào và ở đâu chúng hữu ích. Tất cả các thiết kế liên quan đến sự đánh
        đổi (trừu tượng so với tốc độ, không gian so với thời gian, v.v.) và trong khi
        các nguyên tắc cung cấp hướng dẫn, tất cả các yếu tố cần được tính đến trước
        khi áp dụng chúng.
      </p>
      <p>
        <strong>Hỏi:</strong> Có bất kỳ nhược điểm nào khi áp dụng Nguyên tắc biết
        càng ít càng tốt không?
      </p>
      
      <p>
        <strong>Trả lời:</strong> Có; Mặc dù nguyên tắc này làm giảm sự phụ thuộc giữa
        các đối tượng và các nghiên cứu đã cho thấy điều này làm giảm độ phức tạp khi
        bảo trì phần mềm, nhưng cũng có trường hợp áp dụng nguyên tắc này dẫn đến: lớp
        A gọi lớp B, lớp B lại có phương thức gọi lớp C. Điều này có thể dẫn đến tăng
        độ phức tạp và thời gian development cũng như giảm hiệu năng trong runtime.
      </p>
      
      <p>
        <strong
          >Một trong hai lớp này vi phạm Nguyên tắc biết càng ít càng tốt đúng không?
          Tại sao hay tại sao không?</strong
        >
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_16.jpg`),
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
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_17.jpg`),
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
        Bạn có thể nghĩ về việc sử dụng phổ biến Java vi phạm Nguyên tắc biết càng ít
        càng tốt không? Bạn có nên quan tâm?
      </p>
      
      <p>
        <strong>Trả lời:</strong> Suy nghĩ về <strong>System.out.println()</strong>?
      </p>
      `,
      },
    ],
  },
  {
    title: `Facade Pattern và The Principle of Least Knowledge`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-9_18.jpg`),
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
          Khi bạn cần sử dụng một lớp hiện có và interface của nó không phải là thứ
          bạn cần, hãy sử dụng một
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
            >Adapter</a
          >.
        </li>
        <li>
          Khi bạn cần đơn giản hóa và thống nhất một giao diện lớn hoặc bộ giao diện
          phức tạp, hãy sử dụng Facade.
        </li>
        <li>
          Một
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
            >Adapter</a
          >
          thay đổi một interface thành một interface khác mà client mong đợi.
        </li>
        <li>Một Facade tách rời một client khỏi một hệ thống con phức tạp.</li>
        <li>
          Việc thực hiện một
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
            >Adapter</a
          >
          có thể đòi hỏi ít công việc hoặc rất nhiều công việc tùy thuộc vào kích
          thước và độ phức tạp của target interface.
        </li>
        <li>
          Việc thực hiện một Facade đòi hỏi chúng ta phải kết hợp facade với hệ thống
          con của nó và sử dụng ủy quyền để thực hiện công việc của facade.
        </li>
        <li>
          Có hai dạng của
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
            >Mẫu Adapter</a
          >: object adapter và class adapter. Class Adapter yêu cầu đa kế thừa.
        </li>
        <li>Bạn có thể thực hiện nhiều Facade cho một hệ thống con.</li>
        <li>
          Một
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
            >Adapter</a
          >
          bao bọc một đối tượng để thay đổi giao diện của nó, một
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
            >Decorator</a
          >
          bao bọc một đối tượng để thêm các hành vi và trách nhiệm mới, và một Facade
          bao bọc một bộ các đối tượng để đơn giản hóa chúng.
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
        Đây là link đính kèm bản gốc của quyển sách:&nbsp;<a
          rel="noreferrer noopener"
          aria-label=" (mở trong tab mới)"
          href="https://drive.google.com/file/d/14lMY_ot5FHgX7aOR9YiVjR2iD1DdJ6hZ/view?usp=sharing"
          target="_blank"
          >Head First Design Patterns</a
        >.<br />Đây là link đính kèm sourcecode của sách:&nbsp;<a
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
