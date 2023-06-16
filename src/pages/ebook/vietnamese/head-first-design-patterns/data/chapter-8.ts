import IContent from 'utils/interface';

export const chapter8: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_1.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
    ],
  },
  {
    title: `<strong
    >Adapter Pattern và
    <a
      href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/2"
      >Facade Pattern</a
    >
    – trở nên thích nghi</strong
  >`,
    contents: [
      {
        div: `<p>
        Trong chương này, chúng tôi sẽ cố gắng thực hiện những chiến-công-bất-khả-thi
        như ghép một cái chốt vuông vào một cái lỗ tròn. Hoàn toàn có thể khi chúng ta
        có các mẫu thiết kế. Bạn nhớ
        <a
          rel="noreferrer noopener"
          aria-label="Decorator Pattern (mở trong tab mới)"
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
          target="_blank"
          >Decorator Pattern</a
        >
        chứ? Chúng tôi bọc các đối tượng để cung cấp cho chúng trách nhiệm mới. Bây
        giờ, chúng tôi sẽ bọc một số đối tượng với một mục đích khác: để làm cho giao
        diện của chúng trở nên khác đi. Tại sao cần làm điều đó? Khi đó, chúng ta có
        thể điều chỉnh một thiết kế mong đợi một interface thành một lớp implements
        một interface khác (<strong>Adapter Pattern</strong>). Đó chưa phải là tất cả;
        Trong khi chúng tôi làm việc với nó, chúng tôi sẽ xem xét một mẫu khác bao bọc
        các đối tượng để đơn giản hóa interface của đối tượng đó (<a
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/2"
          >Facade Pattern</a
        >).
      </p>`,
      },
    ],
  },
  {
    title: `Adapter Pattern xung quanh chúng ta`,
    contents: [
      {
        div: `<p>
        Bạn không gặp khó khăn để hiểu OO adapter là gì, vì thế giới thực có rất
        nhiều. Cho một ví dụ: Bạn đã bao giờ cần sử dụng máy tính xách tay do Mỹ sản
        xuất ở một quốc gia châu Âu chưa? Khi đó, bạn có thể cần một bộ chuyển đổi
        nguồn AC…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_2.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Bạn biết adapter làm gì: nó nằm ở giữa phích cắm của máy tính và ổ cắm AC châu
        Âu; công việc của nó là điều chỉnh ổ cắm châu Âu để bạn có thể cắm máy tính
        xách tay của mình vào đó và nhận nguồn điện. Hoặc nhìn vào nó theo cách này:
        <em
          >Adapter thay đổi interface của ổ cắm thành một cái mà máy tính xách tay của
          bạn mong đợi</em
        >.
      </p>
      
      <p>
        Một số AC adapters rất đơn giản – chúng chỉ thay đổi hình dạng của ổ cắm sao
        cho phù hợp với phích cắm của bạn và chúng truyền thẳng dòng điện AC – nhưng
        các adapter khác có bên trong phức tạp hơn và có thể cần phải tăng hoặc giảm
        nguồn để phù hợp với nhu cầu của thiết bị.
      </p>
      <p>
        Được rồi, đó là thế giới thực, còn bộ OO adapter thì sao? Chà, OO adapter của
        chúng tôi đóng vai trò giống như các Adapter trong thế giới thực: nó có một
        interface và điều chỉnh nó theo interface mà client đang mong đợi.
      </p>`,
      },
    ],
  },
  {
    title: `Adapter pattern trong hướng đối tượng`,
    contents: [
      {
        div: `<p>
        Giả sử bạn <strong>ĐÃ CÓ</strong> một hệ thống phần mềm mà bạn cần làm việc
        với framework từ một nhà cung cấp mới, nhưng nhà cung cấp mới đã thiết kế giao
        diện của họ khác với nhà cung cấp trước đó (Hệ thống phần mềm của bạn chỉ làm
        việc được với giao diện của nhà cung cấp trước đó):
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_3.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Được rồi, bạn không muốn giải quyết vấn đề bằng cách thay đổi code hiện tại
        của mình (và bạn cũng không thể thay đổi code của nhà cung cấp mới) (điểm mấu
        chốt của vấn đề là hệ thống của bạn và các lớp từ nhà cung cấp mới đều không
        thể thay đổi, khi đó sẽ cần đến Adapter Pattern). Vậy bạn làm gì? Chà, bạn có
        thể viết một lớp chuyển interface nhà cung cấp mới thành interface mà bạn mong
        đợi.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_4.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Adapter hoạt động như người trung gian bằng cách nhận các yêu cầu từ client
        (hệ thống của bạn) và chuyển đổi chúng thành các yêu cầu có ý nghĩa đối với
        các lớp của nhà cung cấp mới.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_5.jpg`),
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
    title: `<strong>Nếu đó đi giống vịt và kêu giống vịt, khi đó nó </strong
    ><strong><s>phải</s></strong
    ><strong> có thể là một con </strong><strong><s>vịt</s></strong
    ><strong> gà tây được bọc bởi Duck adapter…</strong>`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_6.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Đây là thời gian để xem cách một adapter hoạt động. Nhớ con vịt của chúng ta
        từ
        <a
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          >Chương 1</a
        >
        không? Hãy cùng xem lại một phiên bản đơn giản hóa của các interface
        <strong>Duck</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_7.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>Ở đây, một lớp con của Duck, <strong>MallardDuck</strong>.</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_8.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>Bây giờ, thời gian để gặp gỡ những chú gà tây mới:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_9.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_10.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Bây giờ, giả sử bạn thiếu các đối tượng <strong>Duck</strong> và bạn muốn sử
        dụng một số đối tượng <strong>Turkey</strong> (Gà tây) thay vào đó. Rõ ràng là
        chúng ta không thể sử dụng <strong>Turkey </strong>hoàn toàn vì chúng có
        interface khác.
      </p>
      
      <p>Vì vậy, hãy viết một bộ chuyển đổi Adapter:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_11.png`),
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
    title: `Tạo test drive cho Adapter pattern`,
    contents: [
      {
        div: `<p>Bây giờ chúng ta chỉ cần một số dòng code để test adapter của chúng ta:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_12.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_13.jpg`),
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
    title: `Giải thích Adapter Pattern`,
    contents: [
      {
        div: `<p>Để hiểu về Adapter Pattern thì trước hết bạn phải hiểu về 3 khái niệm:</p>

        <ul>
          <li>
            <strong>Client:</strong> Đây là lớp sẽ sử dụng đối tượng của bạn (hệ thống
            của chúng ta).
          </li>
          <li>
            <strong>Adaptee:</strong> Đây là những lớp bạn muốn lớp Client sử dụng,
            nhưng hiện thời giao diện của nó không phù hợp (hệ thống mới).
          </li>
          <li>
            <strong>Adapter:</strong> Đây là lớp trung gian, thực hiện việc chuyển đổi
            giao diện cho Adaptee và kết nối Adaptee với Client.
          </li>
        </ul>
        
        <p>
          Bây giờ chúng ta đã có ý tưởng về Adapter là gì, hãy xem lại tất cả các phần.
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_14.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>Ở đây, cách Client sử dụng Adapter:</p>

        <ol>
          <li>
            <strong>Client</strong> đưa ra yêu cầu cho <strong>adapter </strong>bằng
            cách gọi một phương thức trên nó.
          </li>
          <li>
            Adapter chuyển yêu cầu thành một hoặc nhiều cuộc gọi đến
            <strong>adaptee </strong>bằng <strong>adaptee interface</strong>.
          </li>
          <li>
            <strong>Client</strong> nhận được kết quả của cuộc gọi và không bao giờ biết
            có một <strong>Adapter</strong> đang thực hiện chuyển đổi.
          </li>
        </ol>
        
        <p>
          Lưu ý rằng <strong>Client</strong> và <strong>Adaptee</strong> đã được tách
          rời – chúng không biết về nhau.
        </p>`,
      },
      {
        p: `<h6><b>BÀI TẬP:</b></h6>`,
      },
      {
        div: `<p>
        Giả sử chúng ta cũng cần một <strong>Adapter</strong> chuyển đổi
        <strong>Duck</strong> thành <strong>Turkey </strong><em>(ví dụ lúc nãy là </em
        ><strong><em>Turkey</em></strong
        ><em> chuyển thành </em><strong><em>Duck</em></strong
        ><em>).</em> Hãy gọi nó là <strong>DuckAdapter</strong>. Hãy viết lớp đó.<br />
      </p>`,
      },
      {
        p: `<h6><b>ĐÁP ÁN:</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_15.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        p: `<h6><b>BÀI TẬP 2:</b></h6>`,
      },
      {
        div: `<p>Bạn xử lý phương thứ <strong>fly</strong> như thế nào?</p>`,
      },
    ],
  },
  {
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi:</strong> Adapter cần bao nhiêu “sự chuyển đổi”? Nó có vẻ như nếu
        tôi cần chuyển đổi target interface lớn, tôi có thể có RẤT NHIỀU công việc
        trong tay.
      </p>
      
      <p>
        <strong>Trả lời:</strong> Công việc implement một adapter thực sự tỷ lệ với
        kích thước của interface bạn cần hỗ trợ giống như target interface của bạn.
        Hãy suy nghĩ về các lựa chọn của bạn. Bạn có thể phải viết lại tất cả các cuộc
        gọi phía client của mình đến interface, điều này sẽ dẫn đến rất nhiều công
        việc điều tra và thay đổi code. Hoặc, bạn có thể cung cấp rõ ràng một lớp, gói
        gọn tất cả các thay đổi trong một lớp.
      </p>
      <p>
        <strong>Hỏi:</strong> Có phải một adapter luôn bao bọc một và chỉ một lớp
        không?
      </p>
      <p>
        <strong>Trả lời:</strong> Vai trò của <strong>Adapter Pattern</strong> là
        chuyển đổi một interface này sang interface khác. Trong khi hầu hết các ví dụ
        về adapter pattern chỉ nói đến một adapter bao bọc một lớp adaptee, cả hai
        chúng ta đều biết thế giới thực thường lộn xộn hơn một chút. Vì vậy, bạn cũng
        có thể có các tình huống trong đó một adapter giữ hai hoặc nhiều adaptee cần
        thiết để cài đặt target interface.
      </p>
      
      <p>
        Điều này liên quan đến một mẫu khác gọi là
        <a
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/2"
          >Facade Pattern</a
        >; mọi người thường nhầm lẫn hai cái này. Chúng ta sẽ xem lại điều này khi
        chúng ta nói về facade ở phần sau trong chương này.
      </p>
      
      <p>
        <strong>Hỏi: </strong>Điều gì sẽ xảy ra nếu tôi có cả các phần cũ và mới trong
        hệ thống của mình, các phần cũ mong đợi interface từ nhà cung cấp cũ, nhưng
        chúng tôi đã viết các phần mới để sử dụng interface nhà cung cấp mới? Nó sẽ
        gây nhầm lẫn khi sử dụng một adapter ở đây và interface chưa được mở ở đó. Sẽ
        tốt hơn hay không nếu tôi chỉ viết code cũ của mình và quên adapter?
      </p>
      <p>
        <strong>Trả lời:</strong> Không nhất thiết. Một điều bạn có thể làm là tạo Two
        Way Adapter hỗ trợ cả hai interface. Để tạo Two Way Adapter, chỉ cần implement
        cả hai interface liên quan, do đó adapter có thể hoạt động như một interface
        cũ hoặc interface mới.
      </p>`,
      },
    ],
  },
  {
    title: `Định nghĩa Adapter Pattern`,
    contents: [
      {
        div: `<p>
        Đã đủ adapter cho vịt, gà tây và bộ nguồn AC; hãy thực tế và nhìn vào định
        nghĩa chính thức của Adapter Pattern:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_16.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong
          ><em
            >(Adapter Pattern chuyển đổi giao diện của một lớp thành một giao diện
            khác mà client mong đợi. Adapter cho phép các lớp hoạt động cùng nhau mà
            bình thường là không thể bởi vì sự không tương thích về interface)</em
          ></strong
        >
      </p>
      
      <p>
        Bây giờ, chúng ta biết mẫu này cho phép client sử dụng một interface không
        tương thích bằng cách tạo Adapter thực hiện chuyển đổi. Điều này có tác dụng
        tách rời client khỏi interface đã triển khai và nếu chúng ta mong đợi
        interface thay đổi theo thời gian, adapter sẽ đóng gói thay đổi đó để client
        không phải sửa đổi mỗi khi cần hoạt động với interface mới.
      </p>
      
      <p>
        Chúng tôi đã xem xét hành vi runtime của mẫu Adapter Pattern; hãy xem sơ đồ
        lớp của nó:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_17.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Adapter Pattern có đầy đủ các nguyên tắc thiết kế OO tốt: kiểm tra việc kết
        hợp các đối tượng (object composition) để bọc adaptee với interface được sửa
        đổi. Cách tiếp cận này có thêm lợi thế là chúng ta có thể sử dụng adapter với
        bất kỳ lớp con nào của adaptee.
      </p>
      
      <p>
        Ngoài ra, kiểm tra làm thế nào mẫu này có thể liên kết client với một
        interface, không phải bằng một sự thừa kế; chúng ta có thể sử dụng một vài
        adapter, mỗi bộ chuyển đổi một tập các lớp backend khác nhau. Hoặc, chúng ta
        có thể thêm các implementation mới sau đó, miễn là chúng tuân thủ Target
        interface.
      </p>`,
      },
    ],
  },
  {
    title: `Object adapter và class adapter`,
    contents: [
      {
        div: `<p>
        Bây giờ mặc dù đã định nghĩa mẫu, chúng tôi vẫn chưa nói cho bạn toàn bộ câu
        chuyện. Thực tế có hai loại adapter: <strong>object adapter</strong> và
        <strong>class adapter</strong>. Chương này đã nói về các object adapter và sơ
        đồ lớp ở trên là sơ đồ của object adapter.
      </p>
      
      <p>
        Vậy class adapter là gì và tại sao chúng tôi không nói với bạn về nó? Bởi vì
        bạn cần đa kế thừa để cài đặt nó, điều này không thể có trong Java (không hỗ
        trợ đa kế thừa). Nhưng, điều đó không có nghĩa là bạn không có nhu cầu về
        class adapter khi sử dụng đa kế thừa trong ngôn ngữ yêu thích của bạn! Hãy
        nhìn vào sơ đồ lớp cho đa kế thừa.
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_18.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Nhìn có quen không? Đúng vậy – khác biệt duy nhất là với class adapter, chúng
        ta kế thừa cả <strong>Target</strong> và <strong>Adaptee</strong>, trong khi
        với object adapter, chúng ta sử dụng composition (kết hợp) để chuyển yêu cầu
        đến một Adaptee.
      </p>`,
      },
    ],
  },
  {
    title: `Sử dụng sức mạnh bộ não`,
    contents: [
      {
        div: `<p>
        Object adapter và class adapter sử dụng hai ý nghĩa khác nhau của adapting và
        adaptee (composition so với kế thừa). Làm thế nào để những khác biệt thực hiện
        ảnh hưởng đến tính khả dụng của adapter pattern?
      </p>
      
      <p><strong>Duck Magnets</strong></p>
      
      <p>
        Công việc của bạn là lấy duck và turkey magnet và đưa chúng qua một phần của
        sơ đồ mô tả vai trò của 2 con “chim” đó, trong ví dụ trước đây của chúng tôi
        (Cố gắng không kéo lên phía trên). Sau đó thêm chú thích của riêng bạn để mô
        tả cách thức hoạt động của nó.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_19.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_20.jpg`),
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
    title: `Buổi nói chuyện tối nay: Object Adapter và Class Adapter gặp mặt
    nhau`,
    contents: [
      {
        div: `
        <p>
          <strong>Object Adapter: </strong>Bởi vì tôi sử dụng composition nên tôi hữu
          ích. Tôi không chỉ có thể điều chỉnh một lớp adaptee, mà là có thể điều chỉnh
          bất kỳ lớp con nào của nó.
        </p>
        
        <p>
          <strong>Class Adapter: </strong>Điều đó đúng, tôi gặp rắc rối với điều đó bởi
          vì tôi được gắn với một lớp adaptee cụ thể, nhưng tôi có một lợi thế rất lớn
          vì tôi implement lại toàn bộ adaptee. Tôi cũng có thể override hành vi của
          adaptee nếu tôi cần bởi vì tôi chỉ là subclass.
        </p>
        <p>
          <strong>Object Adapter: </strong>Ở thiết kế của tôi, chúng tôi thích sử dụng
          composition hơn thừa kế; bạn có thể đang lưu một vài dòng code, nhưng tất cả
          những gì tôi làm là viết một ít code để ủy quyền cho adaptee. Chúng tôi muốn
          giữ cho mọi thứ linh hoạt.
        </p>
        
        <p>
          <strong>Class Adapter: </strong>Có thể linh hoạt, hiệu quả? Không. Sử dụng
          class adapter, chỉ có một trong tôi, không phải adapter và adaptee.
        </p>
        
        <p>
          <strong>Object Adapter: </strong>Bạn thường được sử dụng trong một đối tượng
          nhỏ phải không? Bạn có thể nhanh chóng override một phương thức, nhưng bất kỳ
          hành vi nào tôi thêm vào adapter của mình đều sẽ làm việc với lớp adaptee và
          tất cả các lớp con của nó.
        </p>
        
        <p>
          <strong>Class Adapter: </strong>Vâng, nhưng điều gì sẽ xảy ra nếu một lớp con
          của adaptee thêm một số hành vi mới. Rồi sao?
        </p>
        
        <p>
          <strong>Object Adapter: </strong>Này, thôi nào, dừng lại 1 chút, tôi chỉ cần
          compose với lớp con để làm cho nó hoạt động.
        </p>
        
        <p><strong>Class Adapter: </strong>Nghe có vẻ lộn xộn …</p>
        
        <p><strong>Object Adapter: </strong>Bạn muốn thấy lộn xộn? Nhìn vào gương!</p>`,
      },
    ],
  },
  {
    title: `Adapter Pattern thế giới thực`,
    contents: [
      {
        div: `<p>Chúng ta hãy xem việc sử dụng một Adapter đơn giản trong thế giới thực…</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_21.jpg`),
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
    title: `Enumerator thời cổ xưa`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_22.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Nếu bạn đã là việc với Java một thời gian, bạn có thể nhớ rằng các kiểu
        collection ban đầu (<strong>Vector</strong>, <strong>Stack</strong>,
        <strong>Hashtable</strong> và một vài thứ khác) cài đặt một phương thức
        <strong>elements()</strong>, trả về một <strong>Enumeration</strong>. Giao
        diện <strong>Enumeration</strong> cho phép bạn duyệt qua các phần tử của của
        collection mà không cần biết thông tin cụ thể về cách chúng được quản lý trong
        collection.
      </p>`,
      },
    ],
  },
  {
    title: `Iterator thời hiện đại`,
    contents: [
      {
        div: `<p>
        Khi Sun phát hành các lớp Collection gần đây hơn, họ bắt đầu sử dụng giao diện
        <strong>Iterator</strong>, như <strong>Enumeration</strong>, iterator cũng cho
        phép bạn duyệt qua một tập hợp các phần tử trong collection, nhưng được thêm
        khả năng xóa các phần tử.
      </p>`,
      },
    ],
  },
  {
    title: `Và bây giờ…`,
    contents: [
      {
        div: `<p>
        Chúng tôi thường phải đối mặt với code được để lại, chúng thể hiện Enumerator
        interface, nhưng chúng tôi đã sử dụng code mới để chỉ sử dụng các Iterator. Có
        vẻ như chúng ta cần xây dựng một adapter.
      </p>
      `,
      },
    ],
  },
  {
    title: `Chuyển đổi một Iterator thành Enumeration`,
    contents: [
      {
        div: `<p>
        Đầu tiên, chúng tôi sẽ xem xét hai giao diện để tìm hiểu cách các phương thức
        ánh xạ từ cái này sang cái kia. Nói cách khác, chúng tôi sẽ tìm ra những gì
        cần gọi trên adaptee khi client gọi một phương thức trên adapter.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_23.jpg`),
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
    title: `Thiết kế Adapter`,
    contents: [
      {
        div: `<p>
        Ở đây, các lớp sẽ trông như: chúng ta cần một adapter thực hiện giao diện
        Target interface (Iterator) và được kết hợp (conpose) với một adaptee. Các
        phương thức <strong>hasNext()</strong> và <strong>next()</strong> rất đơn giản
        để map từ target đến adaptee: chúng ta chỉ cần thực hiện chúng ngay bây giờ.
        Nhưng bạn sẽ làm gì với phương thức <strong>remove()</strong>? Hãy suy nghĩ về
        nó một lát (và chúng tôi sẽ đối phó với nó phía bên dưới).
      </p>
      
      <p>Bây giờ, ở đây, sơ đồ lớp:</p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_24.jpg`),
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
    title: `Xử lý phương thức remove()`,
    contents: [
      {
        div: `<p>
        Chà, chúng tôi biết Enumeration không hỗ trợ <strong>remove</strong>. Nó là
        một “read only” interface. Không có cách nào để kế thừa phương thức
        <strong>remove()</strong> đầy đủ chức năng trên adapter. Điều tốt nhất chúng
        ta có thể làm là ném runtime exception. May mắn thay, các nhà thiết kế giao
        diện Iterator đã thấy trước nhu cầu này và định nghĩa phương thức
        <strong>remove()</strong> để nó hỗ trợ
        <strong>UnsupportedOperationException</strong>.
      </p>
      
      <p>
        Đây là một trường hợp mà adapter không hoàn hảo; client sẽ phải để ý các
        trường hợp ngoại lệ tiềm ẩn, nhưng miễn là client cẩn thận và adapter có
        document đầy đủ thì đây là một giải pháp hoàn toàn hợp lý.
      </p>`,
      },
    ],
  },
  {
    title: `Viết adapter EnumerationIterator`,
    contents: [
      {
        div: `<p>
        Ở đây, code đơn giản nhưng hiệu quả cho tất cả các lớp kế thừa vẫn đang tạo ra
        <strong>Enumeration</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_25.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        p: `<h6><b>BÀI TẬP:</b></h6>`,
      },
      {
        div: `<p>
        Mặc dù Java đã đi theo hướng của <strong>Iterator</strong>, tuy nhiên vẫn có
        rất nhiều client code phụ thuộc vào giao diện <strong>Enumeration</strong>, do
        đó, một Adapter chuyển đổi <strong>Iterator</strong> thành
        <strong>Enumeration</strong> cũng khá hữu ích.
      </p>
      
      <p>
        Viết một Adapter điều chỉnh <strong>Iterator</strong> thành một
        <strong>Enumeration</strong>. Bạn có thể test code của mình bằng cách chuyển
        đổi một <strong>ArrayList</strong>. Lớp <strong>ArrayList</strong> hỗ trợ giao
        diện <strong>Iterator</strong> nhưng không hỗ trợ
        <strong>Enumeration</strong>.
      </p>`,
      },
      {
        p: `<h6><b>ĐÁP ÁN:</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-8_26.jpg`),
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
    title: `Sử dụng sức mạnh bộ não`,
    contents: [
      {
        div: `<p>
        Một số AC adapter không chỉ thay đổi giao diện – chúng còn thêm các tính năng
        khác như bảo vệ khẩn cấp (như tự động ngắt nguồn), đèn tín hiệu và các loại
        chuông và còi khác.
      </p>
      
      <p>Nếu bạn định triển khai các loại tính năng này, bạn sẽ sử dụng mẫu nào?</p>
      
      <h2 class="wp-block-heading">
        <strong
          >Buổi nói chuyện tối nay:
          <a
            href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
            >Decorator Pattern</a
          >
          và Adapter Pattern thảo luận về sự khác biệt của họ</strong
        >
      </h2>
      
      <p>
        <strong>Decorator: </strong>Tôi quan trọng hơn. Công việc của tôi là tất cả về
        trách nhiệm (responsibility) – bạn biết rằng khi cài đặt thêm một Decorator có
        liên quan thì sẽ có một số trách nhiệm hoặc hành vi mới được thêm vào thiết kế
        của bạn.
      </p>
      
      <p>
        <strong>Adapter: </strong>Bạn muốn tất cả vinh quang trong khi các adapter của
        chúng tôi đang ở trong hậu trường và làm những công việc ít người biết đến:
        chuyển đổi các interface. Công việc của chúng tôi có thể không hào nhoáng,
        nhưng client của chúng tôi chắc chắn đánh giá cao vì chúng tôi làm cho cuộc
        sống của họ đơn giản hơn.
      </p>
      <p>
        <strong>Decorator: </strong>Điều đó có thể đúng, nhưng đừng nghĩ rằng chúng
        tôi không làm việc chăm chỉ. Khi chúng ta phải decorate một giao diện lớn,
        whoa, có thể giảm rất nhiều code.
      </p>
      
      <p>
        <strong>Adapter: </strong>Hãy thử trở thành một adapter khi bạn phải kết hợp
        nhiều lớp để cung cấp giao diện mà client của bạn mong đợi. Bây giờ thì khó
        khăn. Nhưng chúng tôi có một câu nói: “an uncoupled client is a happy client”
        (Một client tách biệt xử lí là một client hạnh phúc).
      </p>
      
      <p>
        <strong>Decorator: </strong>Dễ thương đấy. Đừng nghĩ rằng chúng tôi có được
        tất cả vinh quang; đôi khi tôi chỉ là một decorator đang được bao bọc bởi
        những người biết có bao nhiêu decorator khác. Khi một cuộc gọi phương thức
        được ủy quyền cho bạn, bạn sẽ không biết có bao nhiêu decorator khác đã xử lý
        nó và bạn không biết rằng bạn sẽ được chú ý vì những nỗ lực của bạn phục vụ
        yêu cầu.
      </p>
      
      <p>
        <strong>Adapter: </strong>Này, nếu các adapter đang làm công việc của họ,
        client của chúng tôi thậm chí không bao giờ biết chúng tôi đang ở đó. Nó có
        thể là một công việc vô ơn.
      </p>
      
      <p>
        Nhưng, điều tuyệt vời về adapter của chúng tôi là chúng tôi cho phép client sử
        dụng các thư viện và tập hợp con mới mà không thay đổi bất kỳ đoạn code nào,
        họ chỉ dựa vào chúng tôi để thực hiện chuyển đổi cho họ. Này, nó là một phần
        nhỏ, nhưng chúng tôi rất giỏi về nó.
      </p>
      
      <p>
        <strong>Decorator: </strong>Các decorator của chúng tôi cũng làm điều đó, chỉ
        chúng tôi cho phép hành vi mới được thêm vào các lớp mà không thay đổi code
        hiện có. Tôi vẫn nói rằng các adapter chỉ là những decorator “lạ mắt” – ý tôi
        là, giống như chúng tôi, bạn cũng bao bọc một object.
      </p>
      
      <p>
        <strong>Adapter: </strong>Không, không, không, không hề. Chúng tôi luôn chuyển
        đổi interface của những gì chúng tôi bọc bên trong, bạn không bao giờ làm điều
        này. Tôi nói rằng một decorator giống như một adapter; chỉ là bạn không thay
        đổi giao diện!
      </p>
      
      <p>
        <strong>Decorator: </strong>À, không. Công việc của chúng tôi trong cuộc sống
        là mở rộng các hành vi hoặc trách nhiệm của các đối tượng chúng tôi bọc, chúng
        tôi không phải là một “mẫu đơn giản để hiểu” (simple pass through)..
      </p>
      
      <p>
        <strong>Adapter: </strong>Này, bạn đang gọi ai là “mẫu đơn giản để hiểu”? Xem
        tiếp và chúng ta sẽ thấy bạn chuyển đổi một vài giao diện trong bao lâu!
      </p>
      
      <p>
        <strong>Decorator: </strong>Có lẽ chúng ta nên đồng ý hay không đồng ý. Chúng
        ta dường như trông hơi giống nhau trên giấy, nhưng rõ ràng chúng ta cách xa
        nhau trong ý định của chúng ta.
      </p>
      
      <p><strong>Adapter: </strong>Ồ vâng, tôi đồng ý với bạn.</p>
      
      <p>
        (còn tiếp..<a
          rel="noreferrer noopener"
          href="https://toihocdesignpattern.com/chuong-4-factory-pattern-va-abstract-factory-pattern-phan-2.html"
          target="_blank"
          >.</a
        ><a
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/2"
          >phần 2</a
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
      </p>
      `,
      },
      {
        p: `Nguồn bài dịch: <b>NQT-K4DNC</b>
        <br />
        Chỉnh sửa bởi: <b>Tôi học Design pattern</b>`,
      },
    ],
  },
];
