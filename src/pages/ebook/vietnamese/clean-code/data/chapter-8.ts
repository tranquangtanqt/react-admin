import IContent from 'utils/interface';

export const chapter8: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-8_1.png`),
          width: `35%`,
          align: `center`,
        },
      },
    ],
  },
  {
    title: '',
    contents: [
      {
        div: `<p>
        Chúng ta hiếm khi kiểm soát hoàn toàn các phần mềm trong hệ thống của
        mình. Đôi khi chúng ta dùng thư viện của bên thứ ba hoặc sử dụng mã
        nguồn mở. Những trường hợp khác, chúng ta phụ thuộc vào các nhóm trong
        công ty để sản xuất các thành phần (component) hoặc hệ thống con. Bằng
        cách nào đó, chúng ta phải tích hợp code bên ngoài này với code riêng
        của chúng ta một cách rõ ràng. Trong chương này, chúng ta sẽ xem xét
        các phương pháp và kỹ thuật để giữ cho ranh giới code của phần mềm của
        chúng ta được sạch sẽ.
      </p>`,
      },
    ],
  },
  {
    title: 'Sử dụng code của bên thứ ba',
    contents: [
      {
        div: `<p>
        Có một vấn đề giữa nhà cung cấp&nbsp;<strong>interface</strong>
        &nbsp;và người sử dụng&nbsp;<strong>interface</strong>. Các nhà cung
        cấp các packages và frameworks bên thứ ba cố gắng mang lại khả năng
        ứng dụng rộng rãi để họ có thể hoạt động trong nhiều môi trường và thu
        hút nhiều đối tượng. Mặt khác, người dùng muốn có một&nbsp;
        <strong>interface</strong>&nbsp;tập trung vào các nhu cầu cụ thể của
        họ. Điều này có thể gây ra vấn đề ở ranh giới hệ thống của chúng ta.
      </p>

      <p>
        Hãy xem&nbsp;<strong>java.util.Map</strong>&nbsp;làm ví dụ. Như bạn có
        thể thấy khi xem <strong>Hình 8-1</strong>,&nbsp;<strong>map</strong>
        &nbsp;có một&nbsp;<strong>interface</strong>&nbsp;rất lớn với nhiều
        chức năng. Chắc chắn sức mạnh và sự linh hoạt này là hữu ích, nhưng nó
        cũng có thể là một nguy hiểm tiềm ẩn. Ví dụ: ứng dụng của chúng tôi có
        thể xây dựng&nbsp;<strong>map</strong>&nbsp;và chuyển nó đi khắp nơi.
        Ý định của chúng tôi là không ai trong số những người nhận&nbsp;
        <strong>map</strong>&nbsp;xóa bất kỳ thứ gì trong&nbsp;
        <strong>map</strong>. Nhưng ngay ở đầu danh sách là phương thức&nbsp;
        <strong>clear()</strong>. Bất kỳ người nào sử dụng&nbsp;
        <strong>map</strong>&nbsp;cũng có quyền xóa nó. Hoặc có thể quy ước
        thiết kế của chúng tôi là chỉ các loại đối tượng cụ thể mới có thể
        được lưu trữ trong&nbsp;<strong>map</strong>, nhưng&nbsp;
        <strong>map</strong>&nbsp;không ràng buộc một cách đáng tin cậy các
        loại đối tượng được đặt trong chúng. Bất kỳ người dùng nào được xác
        định đều có thể thêm các mục thuộc bất kỳ loại nào vào bất kỳ&nbsp;
        <strong>map</strong>&nbsp;nào.&nbsp;
      </p>

      <p>
        <strong>Hình 8-1</strong>&nbsp;
        <strong>Các phương pháp của map</strong>:
      </p>

      <ul>
        <li>clear() void – Map</li>
        <li>containsKey(Object key) boolean – Map</li>
        <li>containsValue(Object value) boolean – Map </li>
        <li>entrySet() Set – Map</li>
        <li>equals(Object o) boolean – Map</li>
        <li>get(Object key) Object – Map</li>
        <li>getClass() Class&lt;? extends Object&gt; – Object </li>
        <li>hashCode() int – Map</li>
        <li>isEmpty() boolean – Map</li>
        <li>keySet() Set – Map</li>
        <li>notify() void – Object</li>
        <li>notifyAll() void – Object</li>
        <li>put(Object key, Object value) Object – Map </li>
        <li>putAll(Map t) void – Map</li>
        <li>remove(Object key) Object – Map</li>
        <li>size() int – Map</li>
        <li>toString() String – Object</li>
        <li>values() Collection – Map</li>
        <li>wait() void – Object</li>
        <li>wait(long timeout) void – Object</li>
        <li>wait(long timeout, int nanos) void – Object</li>
      </ul>

      <p>
        Nếu ứng dụng của chúng ta cần&nbsp;<strong>Map</strong>&nbsp;of&nbsp;
        <strong>Sensors</strong>, bạn có thể tìm thấy các cảm biến được thiết
        lập như sau:
      </p>`,
      },
      {
        code: {
          src: `Map sensors = new HashMap();`,
          language: 'java',
        },
      },
      {
        div: `<p>
        Sau đó, khi một số phần khác của code cần truy cập vào cảm biến, bạn
        sẽ thấy thế này:
      </p>`,
      },
      {
        code: {
          src: `Sensor s = (Sensor) sensors.get(sensorId);`,
          language: 'java',
        },
      },
      {
        div: `<p>
        Chúng ta không chỉ nhìn thấy nó một lần mà rất nhiều lần xuyên suốt
        chương trình. Dòng code này có trách nhiệm lấy một&nbsp;
        <strong>Object</strong>&nbsp;từ&nbsp;<strong>Map</strong>&nbsp;và
        truyền nó đến đúng loại. Điều này hoạt động, nhưng nó không phải là
        code sạch. Ngoài ra, code này không làm nổi bật những đặc điểm tốt như
        nó có thể làm. Khả năng đọc có thể được cải thiện đáng kể bằng cách sử
        dụng&nbsp;<strong>generic</strong>, như được hiển thị bên dưới:
      </p>`,
      },
      {
        code: {
          src: `Map<Sensor> sensors = new HashMap<Sensor>(); 
  ...
Sensor s = sensors.get(sensorId);`,
          language: 'java',
        },
      },
      {
        div: `<p>
        Tuy nhiên, điều này không giải quyết được vấn đề mà&nbsp;
        <strong>Map&lt;Sensor&gt;</strong>&nbsp;cung cấp nhiều khả năng hơn
        chúng ta cần hoặc muốn.
      </p>

      <p>
        Thay đổi một cách tự do phiên bản của&nbsp;
        <strong>Map&lt;Sensor&gt;</strong>&nbsp;xung quanh hệ thống có nghĩa
        là sẽ có rất nhiều chỗ cần sửa nếu&nbsp;<strong>interface</strong>
        &nbsp;của&nbsp;<strong>Map</strong>&nbsp;thay đổi. Bạn có thể nghĩ
        rằng một sự thay đổi như vậy là khó xảy ra, nhưng hãy nhớ rằng nó đã
        thay đổi khi hỗ trợ <strong>generic</strong> được thêm vào trong&nbsp;
        <strong>Java 5</strong>. Thật vậy, chúng tôi đã thấy các hệ thống bị
        hạn chế sử dụng&nbsp;<strong>generics</strong>&nbsp;vì mức độ lớn của
        những thay đổi cần thiết để bù đắp tự do sử dụng&nbsp;
        <strong>map</strong>s.
      </p>

      <p>
        Cách tốt hơn để sử dụng&nbsp;<strong>Map</strong>&nbsp;có thể giống
        như sau. Không người sử dụng&nbsp;<strong>Sensors</strong>&nbsp;nào sẽ
        quan tâm đến việc liệu&nbsp;<strong>generics</strong>&nbsp;có được sử
        dụng hay không. Sự lựa chọn đó đã trở thành (và luôn luôn nên) một chi
        tiết thực hiện.
      </p>`,
      },
      {
        code: {
          src: `public class Sensors {
  private Map sensors = new HashMap();
  
  public Sensor getById(String id) { 
    return (Sensor) sensors.get(id);
  }
  //snip 
}`,
          language: 'java',
        },
      },
      {
        div: `<p>
        Giao diện ở ranh giới (<strong>Map</strong>) bị ẩn. Nó có thể phát
        triển với rất ít tác động đến phần còn lại của ứng dụng. Việc sử
        dụng&nbsp;<strong>generic</strong>&nbsp;không còn là vấn đề lớn nữa vì
        quá trình truyền và quản lý kiểu được xử lý bên trong lớp&nbsp;
        <strong>Sensors</strong>.
      </p>

      <p>
        Giao diện này cũng được điều chỉnh và hạn chế để đáp ứng nhu cầu của
        ứng dụng. Nó dẫn đến code dễ hiểu hơn và khó bị lạm dụng hơn.
        Lớp&nbsp;<strong>Sensors</strong>&nbsp;có thể thực thi các quy tắc
        thiết kế và nghiệp vụ.
      </p>

      <p>
        Chúng tôi không đề xuất rằng mọi việc sử dụng&nbsp;
        <strong>Map</strong>&nbsp;được gói gọn trong hình thức này. Thay vào
        đó, chúng tôi khuyên bạn không nên vượt qua&nbsp;<strong>Map</strong>
        &nbsp;(hoặc bất kỳ giao diện nào khác ở ranh giới) xung quanh hệ thống
        của bạn. Nếu bạn sử dụng interface ranh giới như&nbsp;
        <strong>Map</strong>, hãy giữ nó bên trong lớp hoặc đóng họ các lớp,
        nơi nó được sử dụng. Tránh trả về hoặc chấp nhận nó như một đối số cho
        các API công khai.
      </p>`,
      },
    ],
  },
  {
    title: 'Ranh giới Khám phá và Học hỏi',
    contents: [
      {
        div: `<p>
        Code của bên thứ ba giúp chúng ta nhận được nhiều chức năng đáp ứng
        yêu cầu trong thời gian ngắn. Chúng ta bắt đầu từ đâu khi muốn sử dụng
        một số thư viện của bên thứ ba? Công việc của chúng ta không phải là
        test code của bên thứ ba, nhưng chúng ta có thể suy nghĩ đến việc viết
        test cho những dòng code của bên thứ ba mà chúng ta sử dụng.
      </p>

      <p>
        Giả sử chúng ta không nắm rõ cách sử dụng thư viện bên thứ ba. Chúng
        ta có thể dành một ngày, hai ngày (hoặc hơn) để đọc tài liệu và quyết
        định cách sẽ sử dụng nó. Sau đó, có thể viết code của mình để sử dụng
        code của thư viện bên thứ ba và xem liệu nó có đúng như những gì chúng
        ta mong muốn hay không. Sẽ không ngạc nhiên khi thấy mình bị sa lầy
        trong các phiên gỡ lỗi, cố gắng tìm hiểu xem lỗi chúng ta đang gặp
        phải là trong code của chúng ta hay của thư viện bên thứ ba được sử
        dụng.
      </p>

      <p>
        Tìm hiểu code của thử viện bên thứ ba rất khó. Tích hợp nó cũng khó
        khăn không kém, thực hiện cả hai cùng một lúc còn khó hơn rất nhiều.
        Điều gì sẽ xảy ra nếu chúng ta thực hiện một cách tiếp cận khác? Thay
        vì thử nghiệm trong code của mình, chúng ta có thể viết một số thử
        nghiệm (test) để khám phá và tìm hiểu sâu hơn về code của thư viện bên
        thứ ba. Jim Newkirk gọi những bài kiểm tra như vậy là&nbsp;
        <strong>bài kiểm tra học tập</strong> (learning tests).
      </p>

      <p>
        Trong các bài <strong>learning tests</strong>, chúng ta gọi API của
        thư viện bên thứ ba, vì mong muốn sử dụng nó trong ứng dụng của mình.
        Về cơ bản, chúng ta đang thực hiện các thử nghiệm được kiểm soát để
        kiểm tra sự hiểu biết của về API đó. Các bài kiểm tra tập trung vào
        những gì chúng ta mong muốn từ API.
      </p>`,
      },
    ],
  },
  {
    title: 'Learning log4j',
    contents: [
      {
        div: `<p>
        Giả sử chúng ta muốn sử dụng gói apache&nbsp;<strong>log4j</strong>
        &nbsp;hơn là trình ghi log được xây dựng tùy chỉnh riêng. Chúng ta tải
        xuống và mở trang tài liệu giới thiệu. Không cần đọc quá nhiều, chúng
        ta viết trường hợp test đầu tiên của mình, hy vọng nó sẽ viết “xin
        chào” vào màn hình console. 
      </p>`,
      },
      {
        code: {
          src: `@Test
public void testLogCreate() {
    Logger logger = Logger.getLogger("MyLogger");
    logger.info("Xin chào"); 
}`,
          language: 'java',
        },
      },
      {
        div: `<p>
        Khi chạy nó, trình ghi log tạo ra một lỗi cho biết rằng cần một thứ
        gọi là&nbsp;<strong>Appender</strong>. Sau khi đọc thêm một chút,
        chúng ta thấy rằng có một&nbsp;<strong>ConsoleAppender</strong>. Vì
        vậy, chúng ta tạo một&nbsp;<strong>ConsoleAppender</strong>&nbsp;và
        xem liệu chúng ta đã biết cách hiển thị lên màn hình console hay chưa.
      </p>`,
      },
      {
        code: {
          src: `@Test
public void testLogAddAppender() {
    Logger logger = Logger.getLogger("MyLogger"); 
    ConsoleAppender appender = new ConsoleAppender();       
    logger.addAppender(appender); 
    logger.info("Xin chào");
}`,
          language: 'java',
        },
      },
      {
        div: `<p>
        Lần này, chúng a thấy rằng&nbsp;<strong>Appender</strong>&nbsp;không
        có luồng đầu ra. Quả là kỳ lạ? Sau khi nhờ trợ giúp từ Google, ta thử
        cách sau:
      </p>`,
      },
      {
        code: {
          src: `@Test
public void testLogAddAppender() {
    Logger logger = Logger.getLogger("MyLogger"); 
    logger.removeAllAppenders(); 
    logger.addAppender(new ConsoleAppender(
        new PatternLayout("%p %t %m%n"),
        ConsoleAppender.SYSTEM_OUT)); 
    logger.info("Xin chào");
}`,
          language: 'java',
        },
      },
      {
        div: `<p>
        Điều đó đã hiệu quả; một thông báo log bao gồm dòng chữ “xin chào”
        xuất hiện trên màn hình console! Có vẻ kỳ lạ khi chúng ta phải nói
        với&nbsp;<strong>ConsoleAppender</strong>&nbsp;rằng nó phải ghi vào
        console.
      </p>

      <p>
        Điều thú vị là khi chúng ta loại bỏ đối số&nbsp;
        <strong>ConsoleAppender.SYSTEM_OUT</strong>, chúng ta thấy rằng “xin
        chào” vẫn được in. Nhưng khi chúng ta loại bỏ&nbsp;
        <strong>PatternLayout</strong>, một lần nữa nó lại gặp phải việc thiếu
        một luồng đầu ra. Đây là việc rất kỳ lạ.
      </p>

      <p>
        Xem xét kỹ hơn một chút vào tài liệu, chúng ta thấy rằng hàm tạo&nbsp;
        <strong>ConsoleAppender</strong>&nbsp;mặc định là “chưa được đặt thông
        số cấu hình”, điều này có vẻ không rõ ràng hoặc hữu ích. Nó giống như
        một lỗi hoặc ít nhất là sự không nhất quán trong&nbsp;
        <strong>log4j</strong>.
      </p>

      <p>
        Tìm kiếm trên google, đọc và thử nghiệm nhiều hơn, cuối cùng chúng tôi
        kết thúc với <strong>Listing 8-1</strong>. Chúng tôi đã khám phá ra
        rất nhiều điều về cách&nbsp;<strong>log4j</strong>&nbsp;hoạt động và
        chúng tôi đã mã hóa kiến thức đó thành một tập hợp các unit test đơn
        giản.&nbsp;
      </p>

      <p>
        <strong>Listing 8-1</strong> <strong>LogTest.java</strong>
      </p>`,
      },
      {
        code: {
          src: `public class LogTest { 
  private Logger logger;
    
  @Before
  public void initialize() {
    logger = Logger.getLogger("logger"); 
    logger.removeAllAppenders(); 
    Logger.getRootLogger().removeAllAppenders();
  }
    
  @Test
  public void basicLogger() {
    BasicConfigurator.configure();
    logger.info("basicLogger"); 
  }
    
  @Test
  public void addAppenderWithStream() {
    logger.addAppender(new ConsoleAppender( 
      new PatternLayout("%p %t %m%n"), 
      ConsoleAppender.SYSTEM_OUT));
    logger.info("addAppenderWithStream"); 
  }
    
  @Test
  public void addAppenderWithoutStream() {
    logger.addAppender(new ConsoleAppender( 
      new PatternLayout("%p %t %m%n")));
    logger.info("addAppenderWithoutStream"); 
  }
}`,
          language: 'java',
        },
      },
      {
        div: `<p>
        Bây giờ chúng ta biết cách khởi tạo console logger đơn giản và chúng
        ta có thể đóng gói kiến thức đó vào lớp logger của riêng mình để phần
        còn lại của ứng dụng được tách biệt khỏi interface ranh giới&nbsp;
        <strong>log4j</strong>.
      </p>`,
      },
    ],
  },
  {
    title: 'Learning Tests tốt hơn là không làm gì cả',
    contents: [
      {
        div: `<p>
        Các bài learning test kết thúc không tốn kém gì. Dù sao thì chúng ta
        cũng phải học API và viết những bài test đó là một cách dễ dàng và
        riêng biệt để có được kiến thức đó. Các bài learning test là những thí
        nghiệm chính xác giúp tăng cường hiểu biết của chúng ta.
      </p>

      <p>
        Không chỉ có giá trị ở thời điều hiện tại, learning test còn có lợi
        trong tương lai. Khi có các bản phát hành mới của gói thư viện bên thứ
        ba, chúng ta sẽ chạy các bài learning test để xem liệu có sự khác biệt
        về hành vi hay không.
      </p>

      <p>
        Learning test xác minh rằng các thư viện của bên thứ ba đang hoạt động
        theo cách chúng ta mong muốn. Sau khi được tích hợp, không có gì đảm
        bảo rằng code của bên thứ ba sẽ vẫn tương thích với nhu cầu của chúng
        ta. Các tác giả ban đầu sẽ có lý do để thay đổi code của họ để đáp ứng
        những yêu cầu mới. Họ sẽ sửa lỗi và thêm các tính năng mới. Với mỗi
        lần phát hành đều tiềm ẩn những rủi ro. Nếu thư viện của bên thứ ba
        thay đổi theo một cách nào đó không tương thích với các trường hợp
        test đã viết, chúng ta sẽ tìm hiểu ngay.
      </p>

      <p>
        Cho dù bạn có cần kiến thức được cung cấp bởi các bài learning test
        hay không, một điều rõ ràng là bạn sẽ được hỗ trợ bởi một tập hợp các
        bài kiểm tra, implement interface giống như cách mà code của bạn sử
        dụng. Nếu không có các thử nghiệm này, có thể chúng ta sẽ bị cám dỗ ở
        lại với phiên bản cũ lâu hơn chúng ta nên làm.
      </p>`,
      },
    ],
  },
  {
    title: 'Sử dụng code chưa tồn tại',
    contents: [
      {
        div: `<p>
        Có một loại ranh giới khác, một loại ranh giới ngăn cách cái đã biết
        và cái chưa biết. Thường có những chỗ trong code mà kiến thức của
        chúng ta dường như bị mất. Đôi khi những gì ở bên kia ranh giới là
        không thể biết được (ít nhất là ngay lúc này). Và lúc này chúng ta
        chọn không đi xa hơn ranh giới.
      </p>

      <p>
        Một số năm trước, tôi là thành viên của nhóm phát triển phần mềm cho
        hệ thống thông tin liên lạc vô tuyến. Có một hệ thống con,
        “Transmitter,” mà chúng tôi ít biết về nó, và những người chịu trách
        nhiệm về hệ thống con chưa xác định interface cho chúng. Chúng tôi
        không muốn phải dừng lại, vì vậy chúng tôi đã bắt đầu công việc của
        mình từ phần chưa biết của code.
      </p>

      <p>
        Chúng ta đã có một ý tưởng khá tốt khi vấn đề xảy ra. Trong quá trình
        làm việc, đôi khi chúng ta tù mù không nắm rõ được vấn đề, nhưng rồi
        qua thời gian chúng ra đã nhận thức được chúng ta đích xác cần gì,
        chúng ta mong muốn điều gì trong quá trình phát triển để rồi dựng lên
        interface giao tiếp đáp ứng cho mong muốn của chúng ta. Một điều gì đó
        như thế này:
      </p>

      <p>
        <em>
          Mã transmitter được cung cấp và phát ra một biểu diễn tương tự như
          dữ liệu đến từ luồng.
        </em>
      </p>

      <p>
        Chúng tôi không biết điều đó sẽ được thực hiện như thế nào vì API chưa
        được thiết kế. Vì vậy, chúng tôi quyết định làm việc sau.
      </p>

      <p>
        Để không phải dừng lại, chúng ta đã xác định interface của riêng mình.
        Chúng ta gọi nó là&nbsp;<strong>Transmitter</strong>. Chúng ta đã cung
        cấp cho nó một phương pháp gọi là&nbsp;<strong>transmit</strong>
        &nbsp;lấy tần số và luồng dữ liệu. Đây là interface mà chúng ta mong
        muốn có.
      </p>

      <p>
        Một điều tốt khi viết giao diện mà chúng ta mong muốn là nó nằm trong
        tầm kiểm soát. Điều này giúp code dễ đọc hơn và tập trung vào những gì
        nó đang cố gắng hoàn thành.
      </p>

      <p>
        Trong <strong>Hình 8-2</strong>, bạn có thể thấy rằng chúng ta đã tách
        các lớp <strong>CommunicationsController</strong>&nbsp;khỏi
        transmitter API (nằm ngoài tầm kiểm soát của chúng ta và không được
        xác định). Bằng cách sử dụng interface ứng dụng cụ thể của riêng mình,
        chúng ta đã giữ cho code <strong>CommunicationsController</strong>
        &nbsp;được sạch sẽ và dễ hiểu. Khi transmitter API được xác định,
        chúng ta đã viết&nbsp;<strong>TransmitterAdapter</strong>&nbsp;để thu
        hẹp khoảng cách. ADAPTOR đã đóng gói tương tác với API và cung cấp một
        nơi duy nhất để thay đổi khi API phát triển.
        <br />
        <strong>Figure 8-2</strong>: <strong>Dự đoán transmitter</strong>
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-8_2.png`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        div: `<p>
        &nbsp;Thiết kế này cũng cung cấp một đường lối rất thuận tiện trong
        code, để kiểm tra. Sử dụng&nbsp;<strong>FakeTransmitter</strong>
        &nbsp;hợp lý, chúng ta có thể kiểm tra các lớp 
        <strong>CommunicationsController</strong>. Chúng ta cũng có thể tạo
        các bài kiểm tra ranh giới sau khi có&nbsp;
        <strong>TransmitterAPI</strong>&nbsp;để đảm bảo rằng chúng ta đang sử
        dụng API đúng cách.
      </p>`,
      },
    ],
  },
  {
    title: 'Ranh giới sạch',
    contents: [
      {
        div: `<p>
        Nhiều điều thú vị xảy ra ở ranh giới. Thay đổi là một trong những điều
        đó. Các thiết kế phần mềm tốt có thể đáp ứng sự thay đổi mà không cần
        nhiều công sức hay đập đi làm lại. Khi sử dụng code nằm ngoài tầm kiểm
        soát, chúng ta phải đặc biệt lưu ý để bảo vệ công sức của mình và đảm
        bảo việc thay đổi trong tương lai không quá tốn thời gian.
      </p>

      <p>
        Code ở ranh giới cần có sự phân tách rõ ràng và các bài kiểm tra xác
        định mong muốn của người thực hiện. Chúng ta nên tránh để quá nhiều
        code của mình biết về các thông tin chi tiết của bên thứ ba. Tốt hơn
        là phụ thuộc vào thứ bạn biết rõ hơn là phụ thuộc vào thứ bạn chưa
        biết, vì nó sẽ chi phối bạn.
      </p>

      <p>
        Chúng tôi quản lý ranh giới của bên thứ ba bằng cách có rất ít vị trí
        trong code tham chiếu đến nó. Chúng tôi có thể bọc chúng như đã làm
        với&nbsp;<strong>Map</strong>, hoặc chúng tôi có thể sử dụng ADAPTER
        để chuyển đổi từ interface hoàn hảo của chúng tôi sang interface được
        cung cấp. Dù bằng cách nào thì code của chúng tôi cũng được hiện tốt
        hơn, thúc đẩy việc sử dụng nhất quán nội bộ trên toàn bộ ranh giới và
        có ít thứ cần bảo trì hơn khi code của bên thứ ba thay đổi.
      </p>`,
      },
    ],
  },
  {
    title: 'Tham khảo',
    contents: [
      {
        div: `<p>
        <strong>[BeckTDD]</strong>: Test Driven Development, Kent Beck,
        Addison-Wesley, 2003.
        <br />
        <strong>[GOF]</strong>: Design Patterns: Elements of Reusable Object
        Oriented Software, Gamma et al., Addison-Wesley, 1996.
        <br />
        <strong>[WELC]</strong>: Working Effectively with Legacy Code,
        Addison-Wesley, 2004.
      </p>`,
      },
      {
        p: `Nguồn bài dịch: <b>NQT-K4DNC</b>`,
      },
      {
        p: `Chỉnh sửa bởi: <b>Tôi học Design pattern</b>`,
      },
    ],
  },
];
