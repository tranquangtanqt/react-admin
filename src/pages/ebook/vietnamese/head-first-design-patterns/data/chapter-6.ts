import IContent from 'utils/interface';

export const chapter6: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_1.jpg`),
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
    title: 'Singleton Pattern – Chỉ 1 cho mỗi loại object',
    contents: [
      {
        div: `<p>
        <strong>
          Điểm dừng chân tiếp theo của chúng tôi chính là Singleton Pattern,
          để tạo ra một đối tượng độc nhất (Single) cho những thứ mà chỉ cần
          duy nhất một instance
        </strong>
        . Bạn có thể vui mừng khi biết rằng trong tất cả các mẫu, Singleton
        Pattern có sơ đồ lớp đơn giản nhất; trong thực tế, Singleton chỉ nằm
        trong một lớp duy nhất! Nhưng đừng quá thoải mái; mặc dù Singleton đơn
        giản trong thiết kế lớp, chúng ta vẫn sẽ gặp một vài vấn đề khi áp
        dụng nó.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_.2jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong>Developer:</strong> Công dụng của nó là gì vậy ông chuyên gia?
      </p>

      <p>
        <strong>Chuyên gia:</strong> Có nhiều đối tượng chúng ta chỉ cần một
        trong số chúng: ví dụ như thread pools này, caches này, dialog boxes,
        đối tượng xử lý preferences và cài đặt registry, đối tượng được sử
        dụng để ghi log và các đối tượng đóng vai trò là trình điều khiển
        thiết bị cho các thiết bị như máy in và card đồ họa…nhiều lắm. Trong
        thực tế, đối với nhiều loại đối tượng này, nếu chúng ta khởi tạo nhiều
        hơn một đối tượng chúng ta sẽ gặp phải tất cả các vấn đề như hành vi
        chương trình không chính xác, lạm dụng tài nguyên hoặc kết quả không
        nhất quán.
      </p>
      <p>
          <strong>Developer:</strong>&nbsp; Được rồi, vì vậy có thể có các lớp
          chỉ nên được khởi tạo một lần, nhưng tôi có cần cả một chương cho việc
          này không? Tôi không thể làm điều này bởi convention hoặc biến toàn
          cục (global variable) sao? Ông biết đấy, như trong Java, tôi có thể
          làm điều đó chỉ với một biến static.
        </p>

        <p>
          <strong>Chuyên gia:</strong> Theo nhiều cách, Singleton Pattern là một
          quy ước để đảm bảo một và chỉ một đối tượng được khởi tạo cho một lớp
          nhất định. Nếu chú em đã có một cái tốt hơn, mọi người sẽ muốn nghe về
          nó; nhưng hãy nhớ rằng, giống như tất cả các mẫu khác, Singleton
          Pattern là phương pháp được thử nghiệm nhiều lần bởi nhiều developer
          khác để đảm bảo chỉ có một đối tượng được tạo. Mẫu Singleton cũng cung
          cấp cho chúng ta một nơi truy cập toàn cục, giống như một biến toàn
          cục, nhưng không có nhược điểm.
        </p>

        <p>
          <strong>Developer:</strong> Nhược điểm gì?
        </p>

        <p>
          <strong>Chuyên gia:</strong> Vâng, đây là một ví dụ: nếu chú em gán
          một đối tượng cho một biến toàn cục, thì đối tượng đó có thể được tạo
          khi ứng dụng của chú em vừa bắt đầu. Đúng chứ? Điều gì xảy ra nếu đối
          tượng này sử dụng nhiều tài nguyên và ứng dụng của bạn không bao giờ
          kết thúc việc sử dụng nó? Như chú em thấy, với Singleton Pattern,
          chúng ta chỉ có thể tạo các đối tượng của mình khi cần.
        </p>

        <p>
          <strong>Developer:</strong> Điều này dường như vẫn chưa thực sự quá
          hữu ích.
        </p>
        <p>
          <strong>Chuyên gia:</strong> Nếu chú em đã xử lý tốt các biến và
          phương thức static cũng như các access modifiers (public, protected,
          private), thì nó không thành vấn đề. Nhưng, trong cả hai trường hợp,
          thật thú vị khi xem cách Singleton Pattern hoạt động, và code
          Singleton không khó để áp dụng. Chỉ cần tự hỏi: làm thế nào để tôi
          ngăn chặn nhiều hơn một đối tượng được khởi tạo?
        </p>`,
      },
    ],
  },
  {
    title: `The Little Singleton Pattern`,
    contents: [
      {
        div: `<p>Làm thế nào để tạo ra một đối tượng?&nbsp;</p>`,
      },
      {
        code: {
          src: `new MyObject();`,
          language: 'java',
        },
      },
      {
        div: `<p>
        Và, nếu một đối tượng khác muốn tạo <strong>MyObject</strong> thì sao?
        Nó có thể gọi new trên <strong>MyObject</strong> một lần nữa
        không?&nbsp; 
      </p>

      <ul>
        <li>Vâng, đương nhiên.</li>
      </ul>

      <p>
        Vì vậy, miễn là chúng ta có một lớp, chúng ta có thể khởi tạo nó một
        hoặc nhiều lần đúng không?
      </p>

      <ul>
        <li>Vâng. Nhưng chỉ khi nó là một public class.</li>
      </ul>

      <p>Và nếu không?</p>

      <ul>
        <li>
          Chà, nếu nó không phải là một public class, chỉ các lớp trong cùng
          một package có thể khởi tạo nó. Nhưng chúng vẫn có thể khởi tạo nó
          nhiều hơn một lần.
        </li>
      </ul>

      <p>Hừm, thú vị. Bạn có biết bạn có thể làm điều này?</p>`,
      },
      {
        code: {
          src: `public MyClass {
    private MyClass() {}
} `,
          language: 'java',
        },
      },
      {
        div: `<ul>
        <li>
          Không, tôi không bao giờ nghĩ về nó, nhưng tôi đoán chúng vẫn hợp lý
          bởi vì nó là một cú pháp đúng.
        </li>
      </ul>

      <p>Nó có nghĩa là gì?</p>

      <ul>
        <li>
          Tôi cho rằng đó là một lớp không thể được khởi tạo bởi vì nó có một
          private constructor.
        </li>
      </ul>

      <p>
        Chà, có <strong>BẤT KỲ </strong>object nào có thể sử dụng private
        constructor không?
      </p>

      <ul>
        <li>
          Hmm, tôi nghĩ bên trong lớp <strong>MyClass </strong>là nơi duy nhất
          có thể gọi nó. Nhưng điều đó không có nhiều ý nghĩa.
        </li>
      </ul>

      <p>Tại sao không ?</p>`,
      },
      {
        div: `Bên trong lớp MyClass sẽ làm được điều này:`,
      },
      {
        code: {
          src: `public MyClass getMyClass() { return new MyClass(); }`,
          language: 'java',
        },
      },
      {
        div: `<p>
        Nhưng cho dù có phương thức getMyClass() đi nữa cũng không thể đem ra
        khỏi lớp này được, bởi vì muốn sử dụng thì phải tạo instance mới và
        gọi instance.getMyClass(), nhưng không thể tạo được biến instance).
        Đây là một vấn đề về con gà và quả trứng: Tôi có thể sử dụng
        constructor từ một đối tượng thuộc loại MyClass, nhưng tôi không bao
        giờ có thể khởi tạo đối tượng đó vì không đối tượng nào khác có thể sử
        dụng “new MyClass()”.
      </p>
      <p>
        Đúng vậy. Nhưng đó chỉ là một suy nghĩ của bạn. Vậy đoạn code này thế
        nào?
      </p>`,
      },
      {
        code: {
          src: `public MyClass {
      public static MyClass getInstance() {
      }
}`,
          language: 'java',
        },
      },
      {
        div: `<ul>
        <li>
          <strong>MyClass </strong>là một lớp với một static method. Chúng ta
          có thể gọi static method như thế này: 
          <strong>MyClass.getInstance();</strong>
        </li>
      </ul>

      <p>
        Tại sao bạn sử dụng <strong>MyClass.getInstance()</strong>, thay vì
        gọi thông qua đối tượng <strong>myObject.getInstance()</strong>?
      </p>

      <ul>
        <li>
          Chà, <strong>getInstance()</strong> là một static method; nói cách
          khác, nó là một CLASS method (ý nói phương thức này thuộc về class,
          không phải thuộc về instance). Bạn cần sử dụng tên lớp để tham chiếu
          một static method.
        </li>
      </ul>

      <p>
        Rất thú vị. Điều gì sẽ xảy ra nếu chúng ta đặt mọi thứ lại với nhau.
        Bây giờ tôi có thể khởi tạo MyClass không?
      </p>`,
      },
      {
        code: {
          src: `public MyClass {
      private MyClass() {}
      public static MyClass getInstance() {
              return new MyClass();
      }
}`,
          language: 'java',
        },
      },
      {
        div: `<ul>
        <li>Wow, chắc chắn có thể.</li>
      </ul>

      <p>
        Vì vậy, bây giờ bạn có thể nghĩ ra một cách thứ hai để khởi tạo một
        đối tượng không?
      </p>`,
      },
      {
        code: {
          src: `MyClass.getInstance();`,
          language: 'java',
        },
      },
      {
        div: `<p>
        Bạn có thể viết đoạn code để chỉ <strong>MỘT </strong>phiên bản 
        <strong>MyClass</strong> được tạo không?
      </p>

      <ul>
        <li>Vâng tôi cũng nghĩ có thể…</li>
      </ul>`,
      },
    ],
  },
  {
    title: `Triển khai Singleton Pattern cổ điển`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_3.jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong>
          Nếu bạn chỉ lướt qua 
          <a
            rel="noreferrer noopener"
            aria-label="cuốn sách (mở trong tab mới)"
            href="/react-admin/#/ebook/vietnamese"
            target="_blank"
          >
            cuốn sách
          </a>
          , đừng copy code này một cách mù quáng, bạn sẽ thấy nó có một vài
          vấn đề phía sau trong chương này.
        </strong>
      </p>`,
      },
    ],
  },
  {
    title: ` Cuộc phỏng vấn tuần này:
    <br />
    Lời thú nhận của một Singleton Pattern`,
    contents: [
      {
        div: `<p>
        <strong>HeadFirst:</strong> Hôm nay chúng tôi rất vui khi được phỏng
        vấn bạn, Singleton. Tại sao bạn không bắt đầu bằng cách cho chúng tôi
        biết một chút về bản thân bạn.
      </p>

      <p>
        <strong>Singleton Pattern:</strong> Chà, tôi hoàn toàn độc nhất (hơi
        cô đơn); nhưng thực sự tôi chỉ có một.
      </p>

      <p>
        <strong>HeadFirst:</strong> Một?
      </p>

      <p>
        <strong>Singleton Pattern:</strong> Vâng, chỉ một. Tôi đã dựa trên
        Singleton Pattern, đảm bảo rằng bất cứ lúc nào cũng chỉ có một
        instance của tôi.
      </p>

      <p>
        <strong>HeadFirst:</strong> Có phải đó là một sự lãng phí? Ai đó đã
        dành thời gian để phát triển một lớp toàn diện và bây giờ tất cả những
        gì chúng ta có thể nhận được là chỉ một đối tượng trong số đó?
      </p>
      <p>
      <strong>Singleton Pattern:</strong> Không hề! Có sức mạnh trong “MỘT”.
      Hãy nói rằng bạn có một đối tượng có chứa các cài đặt trong registry.
      Bạn không muốn có nhiều bản sao của đối tượng đó và các giá trị của nó
      chạy nhiều nơi – điều đó sẽ dẫn đến sự hỗn loạn. Bằng cách sử dụng một
      đối tượng như tôi, bạn có thể đảm bảo rằng mọi đối tượng trong ứng
      dụng của bạn đang sử dụng cùng một tài nguyên global.
    </p>

    <p>
      <strong>HeadFirst:</strong> Hãy cho chúng tôi biết thêm đi.
    </p>

    <p>
      <strong>Singleton Pattern: </strong>Ồ, tôi rất tốt cho mọi thứ. Độc
      thân đôi khi có những lợi thế mà bạn chưa biết. Tôi thường được sử
      dụng để quản lý nhóm tài nguyên, nhóm kết nối (connection) hoặc luồng
      (thread).
    </p>
    <p>
    <strong>HeadFirst: </strong>Tuy nhiên, chỉ có một thể hiện (instance)
    của bạn? Điều đó nghe thật cô đơn.
  </p>
  <p>
      <strong>Singleton Pattern:</strong> Dù chỉ có một trong số tôi, tôi
      vẫn bận rộn, nhưng thật tuyệt nếu nhiều nhà phát triển biết đến tôi –
      nhiều nhà phát triển gặp phải lỗi vì họ có nhiều bản sao “trôi nổi”
      trong ứng dụng mà họ thậm chí không biết.
    </p>

    <p>
      <strong>HeadFirst:</strong> Nhưng làm sao bạn biết chỉ có một mình
      bạn? Không ai có thể dùng <strong>new</strong> để tạo ra một “
      <strong>
        <em>new </em>you
      </strong>
      ” hay sao?
    </p>

    <p>
      <strong>Singleton Pattern:</strong> Không! Tôi thực sự độc nhất.
    </p>

    <p>
      <strong>HeadFirst:</strong> Chà, có chắc các nhà phát triển có thể sẽ
      không khởi tạo bạn nhiều lần?
    </p>

    <p>
      <strong>Singleton Pattern:</strong> Chắc chắc. Sự thật tôi không có
      public constructor.
    </p>

    <p>
      <strong>HeadFirst:</strong> KHÔNG PUBLIC CONSTRUCTOR! Ồ, xin lỗi,
      không có public constructor ư?
    </p>

    <p>
      <strong>Singleton Pattern:</strong> Đúng vậy. Constructor của tôi được
      khai báo là <strong>private</strong>.
    </p>
    <p>
      <strong>HeadFirst:</strong> Nó hoạt động như thế nào? Làm thế nào để
      bạn có được instance?
    </p>
    <p>
          <strong>Singleton Pattern:</strong> Bạn thấy đấy, để có được một đối
          tượng Singleton, bạn không cần khởi tạo đối tượng, bạn chỉ cần yêu cầu
          một instance. Vì vậy, lớp của tôi có một phương thức tĩnh gọi là
          getInstance(). Gọi nó và tôi sẽ xuất hiện ngay lập tức, sẵn sàng làm
          việc. Trong thực tế, tôi có thể đang được các đối tượng khác gọi đến
          trong khi bạn yêu cầu tôi.
        </p>

        <p>
          <strong>HeadFirst:</strong> Chà, Mr.Singleton, dường như có rất nhiều
          thứ dưới vỏ bọc của bạn để làm tất cả công việc này. Cảm ơn vì đã tiết
          lộ bản thân và chúng tôi hy vọng sẽ sớm gặp lại bạn!
        </p>`,
      },
    ],
  },
  {
    title: `Nhà máy Chocolate`,
    contents: [
      {
        div: `<p>
        Mọi người đều biết rằng tất cả các nhà máy sô cô la hiện đại đều có
        nồi hơi sô cô la điều khiển bằng máy tính. Công việc của lò hơi là lấy
        sô cô la và sữa, đun sôi chúng, sau đó chuyển chúng sang giai đoạn
        tiếp theo để làm thanh sô cô la.
      </p>

      <p>
        Ở đây, lớp điều khiển của công ty Choc-O-Holic, Inc. Nồi hơi sô cô la
        cường độ công nghiệp. Kiểm tra code; bạn sẽ nhận thấy họ đã cố gắng
        hết sức cẩn thận để đảm bảo rằng những điều tồi tệ không xảy ra, như
        rút hết 500 gallon hỗn hợp chưa đun sôi, hoặc đổ vào nồi hơi đến khi
        nó đầy, hoặc kiểm tra việc đun một nồi hơi khi đang trống không!
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_4.jpg`),
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
    title: `Sử dụng sức mạnh bộ não`,
    contents: [
      {
        div: `<p>
        Choc-O-Holic đã thực hiện một việc tốt là đảm bảo những sai lầm không
        xảy ra, bạn có nghĩ thế không? Nhưng sau đó, bạn có thể nghi ngờ rằng
        nếu 2 instance của <strong>ChocolateBoiler </strong>được tạo, một số
        điều rất xấu có thể xảy ra.
      </p>

      <p>
        Làm thế nào mọi thứ có thể đi sai nếu nhiều hơn một instance của
        ChocolateBoiler được tạo ra trong một ứng dụng? (Xem đáp án ở phần
        dưới).
      </p>
      <p>
      Bạn có thể giúp Choc-O-Holic cải thiện lớp ChocolateBoiler của họ bằng
      cách biến nó thành một singleton không?
    </p>`,
      },
      {
        div: `<p>
        <strong>Đáp án:</strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_6.jpg`),
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
    title: `Định nghĩa Singleton Pattern`,
    contents: [
      {
        div: ` <p>
        Bây giờ bạn đã có bản triển khai <strong>Singleton</strong> cổ điển
        trong đầu, đã đến lúc ngồi lại, thưởng thức một thanh sô cô la và kiểm
        tra các điểm khác của Mẫu Singleton.
      </p>

      <p>Hãy bắt đầu với định nghĩa ngắn gọn của mẫu:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_7.jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong>
          <em>
            (Mẫu Singleton đảm bảo rằng một lớp chỉ có một thể hiện (instance)
            duy nhất và cung cấp một điểm truy cập toàn cục đến nó)
          </em>
        </strong>
      </p>

      <p>
        <strong>
          Không có bất ngờ lớn ở đây. Nhưng, hãy tìm hiểu nó thêm một chút
          nữa:
        </strong>
      </p>

      <ul>
        <li>
          Điều gì đang thực sự xảy ra ở đây? Chúng tôi lấy một lớp và để nó tự
          quản lý một thể hiện (instance) của nó. Chúng tôi cũng không cho bất
          kỳ lớp nào khác tự tạo một instance mới. Để có được một instance,
          bạn đã phải gọi thông qua chính lớp đó.
        </li>
        <li>
          Chúng tôi cũng cung cấp một điểm truy cập toàn cục cho instance: bất
          cứ khi nào bạn cần một instance, chỉ cần truy vấn lớp và nó sẽ
          return lại cho bạn instance duy nhất. Như bạn đã thấy, chúng ta có
          thể thực hiện điều này để Singleton được tạo ra một cách 
          <a
            rel="noreferrer noopener"
            aria-label="lười biếng (mở trong tab mới)"
            href="https://en.wikipedia.org/wiki/Lazy_loading"
            target="_blank"
          >
            lười biếng
          </a> 
          (lazy – khi cần thì mới khởi tạo), điều này đặc biệt quan trọng đối
          với các đối tượng sử dụng nhiều tài nguyên.
        </li>
      </ul>`,
      },
    ],
  },
  {
    title: `Được rồi, hãy để kiểm tra sơ đồ lớp:`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_8.jpg`),
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
    title: `Chúng tôi có một vấn đề…`,
    contents: [
      {
        div: `<p>
        Có vẻ như Chocolate Boiler đã làm chúng ta thất vọng; mặc dù thực tế
        chúng tôi đã cải thiện code bằng Singleton cổ điển, nhưng bằng cách
        nào đó, phương thức <strong>fill()</strong>&nbsp;của 
        <strong>ChocolateBoiler </strong>đã có thể đổ thêm sô cô la và sữa vào
        nồi hơi mặc dù đã có sữa và sô cô la đang sôi trong nồi! Và 500 gallon
        sữa (và sô cô la) bị tràn! Chuyện gì đã xảy ra!?
      </p>
`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_9.jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Có thể việc bổ sung các thread đã gây ra điều này? Có phải đó là
        trường hợp một khi chúng ta đã đặt biến 
        <strong>
          <em>uniqueInstance </em>
        </strong>
        thành phiên bản duy nhất của <strong>ChocolateBoiler</strong>, tất cả
        các lệnh gọi <strong>getInstance()</strong> sẽ trả về cùng một
        instance? Đúng không?
      </p>
`,
      },
    ],
  },
  {
    title: `Trở thành JVM (Java Virtual Machine)`,
    contents: [
      {
        div: `<p>
        Chúng tôi có hai luồng (thread), mỗi luồng đều thực thi đoạn code bên
        dưới.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_10.jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Công việc của bạn là chạy JVM và xác định xem có trường hợp nào hai
        luồng có thể nhận được các đối tượng nồi hơi khác nhau hay không. Gợi
        ý: bạn thực sự chỉ cần xem chuỗi hoạt động trong phương thức 
        <strong>getInstance()</strong> và giá trị của 
        <strong>
          <em>uniqueInstance</em>
        </strong>
        <em> </em>để xem chúng có thể trùng nhau như thế nào. Sử dụng công cụ
        code <strong>Magnets </strong>để giúp bạn nghiên cứu cách code có thể
        xen kẽ để tạo hai đối tượng nồi hơi.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_11.jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong>Đáp án:</strong> Đây là trường hợp vẫn tạo ra được 2 instance
        mặc dù dùng Singleton pattern.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_12.jpg`),
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
    title: `Xử lý đa luồng cho Singleton Pattern`,
    contents: [
      {
        div: `<p>
        <strong>
          Các vấn đề trong đa luồng của chúng ta hầu như được sửa chữa một
          cách thông thường bằng cách biến getInstance() thành một phương thức
          được đồng bộ hóa (synchronized):
        </strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_13.jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        <strong>Tôi đồng ý điều này đã khắc phục vấn đề.</strong>
      </p>

      <p>
        <strong>
          Nhưng đồng bộ hóa là “quá tốn kém”; Đây có phải cũng là một vấn đề?
        </strong>
      </p>

      <p>
        Suy nghĩ rất tốt, và nó thực sự tệ hơn một chút so với bạn nghĩ: thời
        gian duy nhất cần đến việc đồng bộ là lần đầu tiên gọi phương thức
        này. Nói cách khác, một khi chúng ta đã khởi tạo được biến
        uniqueInstance, chúng ta không cần phải đồng bộ hóa phương thức này
        nữa. Sau lần đầu tiên, việc đồng bộ hóa hoàn toàn không cần thiết!
      </p>

      <p>
        <strong>Chúng ta có thể cải thiện đa luồng không?</strong>
      </p>

      <p>
        Đối với hầu hết các ứng dụng Java, rõ ràng chúng ta cần đảm bảo rằng
        Singleton hoạt động với sự có mặt của nhiều luồng. Nhưng, có vẻ khá
        tốn kém để đồng bộ hóa phương thức <strong>getInstance()</strong>, vậy
        chúng ta phải làm gì?
      </p>`,
      },
    ],
  },
  {
    title: `Chà, chúng tôi có một vài lựa chọn…`,
    contents: [
      {
        div: ` <p>
        <strong>
          1. Không làm gì nếu hiệu suất của getInstance() không quan trọng đối
          với ứng dụng của bạn
        </strong>
      </p>

      <p>
        Đúng rồi; nếu gọi phương thức <strong>getInstance()</strong> là không
        gây ra chi phí đáng kể cho ứng dụng của bạn, hãy quên nó đi. Đồng bộ
        hóa <strong>getInstance()</strong> rất đơn giản và hiệu quả. Chỉ cần
        lưu ý rằng đồng bộ hóa một phương thức có thể làm giảm hiệu suất xuống
        100 lần, vì vậy nếu nó chiếm một phần lưu lượng truy cập cao trong
        code của bạn, bạn có thể phải xem xét lại.
      </p>
      <p>
      <strong>
        2. Sử dụng kĩ thuật eagerly created instance (load tất cả lên 1 lần
        duy nhất ngay từ đầu) thay vì một lazily created (dùng tới đâu load
        tới đó)
      </strong>
    </p>

    <p>
      Nếu ứng dụng của bạn luôn tạo và sử dụng một phiên bản của Singleton
      hoặc chi phí việc tạo và thời gian tạo Singleton không phải là vấn đề,
      bạn có thể muốn tạo Singleton eagerly (khởi tạo ngay từ đầu), như thế
      này:
    </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_14.jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Sử dụng cách tiếp cận này, chúng tôi dựa vào JVM để tạo instance duy
        nhất của Singleton khi lớp được load. JVM đảm bảo rằng instance sẽ
        được tạo trước khi bất kỳ luồng nào truy cập vào biến static 
        <strong>
          <em>uniqueInstance</em>
        </strong>
        .
      </p>

      <p>
        <strong>
          3. Sử dụng “double-checked locking”, để giảm việc sử dụng
          synchronized trong getInstance()
        </strong>
      </p>

      <p>
        Với double-check locking, trước tiên chúng tôi kiểm tra xem liệu một
        phiên bản có được tạo không và nếu không, thì chúng tôi sẽ đồng bộ
        hóa. Bằng cách này, chúng tôi chỉ đồng bộ hóa lần đầu tiên. Đây là
        những gì chúng ta muốn.
      </p>

      <p>Hãy kiểm tra code:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_15.jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        Nếu hiệu suất là một vấn đề trong việc bạn sử dụng phương thức 
        <strong>getInstance() </strong>thì phương thức triển khai Singleton
        này có thể làm giảm đáng kể chi phí.
      </p>

      <p>
        <strong>
          Double-checked locking không hoạt động trong Java 1.4 trở về trước!
        </strong>
      </p>

      <p>
        Thật không may, trong phiên bản Java 1.4 trở về trước, nhiều JVM chứa
        các triển khai từ khóa 
        <strong>
          <em>volatile</em>
        </strong> 
        cho phép đồng bộ hóa không đúng cách để double-check locking. Nếu bạn
        phải sử dụng một JVM cũ hơn Java 5, hãy xem xét các cách khác để triển
        khai Singleton.
      </p>`,
      },
    ],
  },
  {
    title: `Trong khi đó, trở lại tại Nhà máy Sô cô la…`,
    contents: [
      {
        div: `<p>
        Trong khi chúng tôi đã tắt chẩn đoán các vấn đề đa luồng, nồi hơi sô
        cô la đã được làm sạch và sẵn sàng để làm việc. Nhưng trước hết, chúng
        ta phải sửa các vấn đề đa luồng. Chúng ta có sẵn một vài giải pháp,
        mỗi giải pháp có sự đánh đổi khác nhau, vậy chúng ta sẽ sử dụng giải
        pháp nào?
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_16.jpg`),
          width: `35%`,
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
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-6_17.jpg`),
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
    title: `Xin chúc mừng!`,
    contents: [
      {
        div: `<p>
        Tại thời điểm này, Choc-O-Holic rất vui khi có một số chuyên môn áp
        dụng cho code nồi hơi của họ. Bất kể bạn áp dụng giải pháp đa luồng
        nào, nồi hơi phải ở trong tình trạng tốt, không có nhiều rủi ro. Xin
        chúc mừng. Bạn không chỉ xoay sở để thoát khỏi 500 lbs (Pound – đơn vị
        tính của Anh) sô cô la nóng trong chương này, mà bạn còn phải trải qua
        tất cả các vấn đề tiềm ẩn của Singleton.
      </p>`,
      },
    ],
  },
  {
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi: </strong>Đối với một mẫu đơn giản như vậy chỉ bao gồm một
        lớp, Singletons dường như có một số vấn đề.
      </p>

      <p>
        <strong>Trả lời:</strong> Vâng, chúng tôi đã cảnh báo bạn từ trước!
        Nhưng đừng để những vấn đề làm bạn nản lòng; Trong khi triển khai
        Singletons một cách chính xác có thể khó, nhưng sau khi đọc chương
        này, bạn đã được biết đầy đủ về các kỹ thuật tạo Singletons và nên sử
        dụng chúng bất cứ nơi nào bạn cần để kiểm soát số lượng phiên bản bạn
        đang tạo.
      </p>

      <p>
        <strong>Hỏi:</strong> Tôi có thể tạo một lớp trong đó tất cả các
        phương thức và biến được định nghĩa là static không? Điều đó có giống
        với Singleton không?
      </p>

      <p>
        <strong>Trả lời:</strong> Có, nếu lớp của bạn được tự kiểm soát và
        không phụ thuộc vào việc khởi tạo phức tạp. Tuy nhiên, do cách xử lý
        khởi tạo static trong Java, điều này có thể trở nên rất lộn xộn, đặc
        biệt là nếu có nhiều lớp tham gia. Thông thường kịch bản này có thể
        dẫn đến các lỗi tinh vi, khó tìm thấy liên quan đến thứ tự khởi tạo.
        Trừ khi có một nhu cầu hấp dẫn để cài đặt chương trình singleton của
        bạn theo cách này, tốt hơn hết là ở lại trong thế giới đối tượng.
      </p>

      <p>
        <strong>Hỏi:</strong> Thế còn class loaders? Tôi nghe nói có khả năng
        hai class loaders có thể kết thúc bằng instance Singleton của riêng
        chúng.
        <br />
        <em>(</em>
        <strong>
          <em>Java ClassLoader</em>
        </strong>
        <em>
          &nbsp;là công cụ của java, tiến hành nạp một tệp class của java vào
          máy ảo (JVM))
        </em>
      </p>

      <p>
        <strong>Trả lời:</strong> Vâng, điều đó đúng vì mỗi class loader định
        nghĩa một namespace. Nếu bạn có hai hoặc nhiều class loader, bạn có
        thể tải cùng một lớp nhiều lần (một lần trong mỗi class loader). Bây
        giờ, nếu lớp đó là Singleton, thì vì chúng ta có nhiều hơn một phiên
        bản của lớp, chúng ta cũng có nhiều hơn một phiên bản của Singleton.
        Vì vậy, nếu bạn đang sử dụng nhiều class loader và Singletons, hãy cẩn
        thận. Một cách xung quanh vấn đề này là tự xác định class loader.
      </p>

      <p>
        <strong>
          Thư giãn: Tin đồn về việc Singletons bị dọn dẹp bởi những trình thu
          gom rác garbage collectors được thổi phồng lên rất nhiều
        </strong>
      </p>

      <p>
        Trước Java 1.2, một lỗi trong trình thu gom rác đã cho phép Singletons
        bị thu dọn sớm nếu không có tham chiếu toàn cục đến chúng. Nói cách
        khác, bạn có thể tạo một Singleton và nếu tham chiếu duy nhất đến
        Singleton là ở chính Singleton, nó sẽ được thu gom và phá hủy bởi
        garbage collector. Điều này dẫn đến những lỗi khó hiểu bởi vì sau khi
        Singleton được thu thập, thì lần gọi tiếp theo đến 
        <strong>getInstance()</strong> đã tạo ra một Singleton mới hoàn toàn.
        Trong nhiều ứng dụng, điều này có thể gây ra hành vi khó hiểu vì trạng
        thái được đặt lại một cách bí ẩn thành các giá trị mặc định ban đầu
        hoặc những thứ như kết nối mạng được đặt lại.
      </p>

      <p>
        Vì Java 1.2, lỗi này đã được sửa và không cần phải tham chiếu toàn cục
        nữa. Nếu bạn, vì một số lý do, vẫn đang sử dụng JVM 1.2 về trước, thì
        hãy lưu ý vấn đề này, còn nếu không, bạn có thể ngủ ngon khi biết rằng
        Singletons của bạn sẽ không được thu gom sớm.
      </p>`,
      },
    ],
  },
  {
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi:</strong> Tôi đã luôn được dạy rằng một lớp nên làm một
        việc và chỉ một việc duy nhất. Đối với một lớp để làm hai việc được
        coi là thiết kế OO xấu. Không phải Singleton vi phạm điều này sao?
      </p>

      <p>
        <strong>Trả lời:</strong> Bạn sẽ đề cập đến nguyên tắc của “
        <em>Một lớp, một trách nhiệm</em>” (Single Responsibility Principle),
        và vâng, bạn đúng, Singleton không chỉ chịu trách nhiệm quản lí việc
        tạo 1 instance của nó (và cung cấp quyền truy cập toàn cục), nó còn
        chịu trách nhiệm cho bất kỳ vấn đề nào trong ứng dụng của bạn (kết nối
        DB, đăng kí registry, ghi log…). Vì vậy, chắc chắn có thể nói nó đang
        đảm nhận hai trách nhiệm. Tuy nhiên, không khó để thấy rằng có một lợi
        ích khi một lớp quản lý instance của chính nó; nó chắc chắn làm cho
        thiết kế tổng thể đơn giản hơn. Ngoài ra, nhiều nhà phát triển đã quen
        thuộc với mẫu Singleton vì nó được sử dụng rộng rãi. Điều đó nói rằng,
        một số nhà phát triển không cảm thấy cần phải trừu tượng hóa chức năng
        Singleton.
      </p>

      <p>
        <strong>Hỏi: </strong>Tôi muốn phân lớp (subclass) code Singleton của
        mình, nhưng tôi gặp vấn đề. Có thể phân lớp Singleton không?
      </p>

      <p>
        <strong>Trả lời:</strong> Một vấn đề với phân lớp Singleton là
        constructor là private. Bạn không thể mở rộng một lớp với một
        constructor private. Vì vậy, điều đầu tiên bạn sẽ phải làm là thay đổi
        công cụ xây dựng của mình để nó public hoặc protected. Nhưng sau đó,
        nó không thực sự là một Singleton nữa, bởi vì các lớp khác có thể khởi
        tạo nó. Và nếu bạn thay đổi constructor của bạn, vẫn có một vấn đề
        khác. Việc triển khai Singleton dựa trên một biến static, vì vậy nếu
        bạn implement một lớp con, tất cả các lớp dẫn xuất của bạn sẽ dùng
        chung một biến đối tượng. Đây có lẽ không phải là những gì bạn nghĩ
        trong đầu. Vì vậy, để việc phân lớp có thể hoạt động, việc thực hiện
        đăng ký các loại là bắt buộc trong lớp cơ sở. Trước khi thực hiện một
        kế hoạch như vậy, bạn nên tự hỏi những gì bạn thực sự đạt được từ việc
        phân lớp Singleton. Giống như hầu hết các mẫu, Singleton không nhất
        thiết phải là một giải pháp có thể phù hợp như một thư viện. Ngoài ra,
        Singleton là không đáng kể để thêm vào bất kỳ lớp hiện có nào. Cuối
        cùng, nếu bạn đang sử dụng một số lượng lớn Singletons trong ứng dụng
        của mình, bạn nên xem kỹ thiết kế của mình. Singletons có ý nghĩa khi
        được sử dụng một cách tiết kiệm.
      </p>

      <p>
        <strong>Hỏi: </strong>Tôi vẫn chưa hoàn toàn hiểu tại sao các biến
        toàn cục (global variable) lại không bằng Singleton.
      </p>

      <p>
        <strong>Trả lời:</strong> Trong Java, các biến toàn cục về cơ bản là
        các tham chiếu tĩnh đến các đối tượng. Có một vài nhược điểm khi sử
        dụng các biến toàn cục theo cách này. Chúng tôi đã đề cập đến một vấn
        đề: vấn đề khởi tạo 
        <a
          href="https://en.wikipedia.org/wiki/Lazy_loading"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="lazy (mở trong tab mới)"
        >
          lazy
        </a> 
        (cần dùng mới load) và eager (load khi khởi tạo). Nhưng chúng ta cần
        ghi nhớ mục đích của mẫu: để đảm bảo chỉ có một thể hiện của một lớp
        tồn tại và cung cấp quyền truy cập global. Một biến toàn cục có thể
        cung cấp quyền truy cập global, nhưng không thể đảm bảo chỉ có một thể
        hiện của một lớp tồn tại. Các biến toàn cục cũng có xu hướng làm cho
        các nhà phát triển gây ô nhiễm không gian tên với nhiều tham chiếu
        toàn cầu đến các đối tượng nhỏ. Mẫu Singleton cũng không khuyến khích
        điều này, nhưng dù sao Singleton cũng có thể bị lạm dụng.
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
          Mẫu Singleton đảm bảo bạn có nhiều nhất một instance trong ứng dụng
          của mình.
        </li>
        <li>
          Mẫu Singleton cũng cung cấp một điểm truy cập toàn cục cho instance
          đó.
        </li>
        <li>
          Việc triển khai Java của mẫu Singleton sử dụng một private
          constructor, một static method kết hợp với một biến static.
        </li>
        <li>
          Kiểm tra các hạn chế về hiệu suất và tài nguyên của bạn và cẩn thận
          chọn một triển khai Singleton thích hợp cho các ứng dụng đa luồng
          (và chúng ta nên xem xét tất cả các ứng dụng đa luồng!).
        </li>
        <li>
          Cảnh giác với việc thực hiện double-checked locking; nó không an
          toàn trong các phiên bản trước Java 2, version 5.
        </li>
        <li>
          Hãy cẩn thận nếu bạn đang sử dụng nhiều class loaders; điều này có
          thể đánh bại việc thực hiện Singleton và dẫn đến nhiều instances.
        </li>
        <li>
          Nếu bạn đang sử dụng JVM trước 1.2, bạn sẽ cần phải tạo một sổ đăng
          ký Singletons để đánh bại trình thu gom rác (garbage collector).
        </li>
      </ul>`,
      },
    ],
  },
  {
    title: 'Tham khảo',
    contents: [
      {
        p: `<p>
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
