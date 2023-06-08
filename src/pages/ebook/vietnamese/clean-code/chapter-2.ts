import IContent from 'utils/interface';

export const chapter2: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-2_1.png`),
          width: `40%`,
          align: `center`,
        },
      },
    ],
  },
  {
    title: 'Giới thiệu',
    contents: [
      {
        p: `Những cái tên có ở khắp mọi nơi trong phần mềm. Chúng ta đặt tên cho
        các biến, các hàm, các đối số, các lớp và các gói (package) của chúng
        ta. Chúng ta đặt tên cho những file mã nguồn và thư mục chứa chúng.
        Chúng ta đặt tên cho những file <em>*.jar</em>, file <em>*.war,..</em>
        . đặt tên và đặt tên. Vì đặt tên rất nhiều, nên chúng ta cần 
        <strong>làm tốt</strong> điều đó. Sau đây là một số quy tắc đặt tên
        đơn giản để tạo nên những cái tên tốt.`,
      },
    ],
  },
  {
    title: 'Dùng những tên thể hiện được mục đích',
    contents: [
      {
        p: `Điều này rất dễ. Nhưng chúng tôi muốn nhấn mạnh rằng chúng tôi nghiêm
        túc trong việc này. Chọn một cái tên “xịn” mất khá nhiều thời gian,
        nhưng lại tiết kiệm (thời gian) hơn sau đó. Vì vậy, hãy quan tâm đến
        cái tên mà bạn chọn và chỉ thay đổi chúng khi bạn sáng tạo ra tên
        “xịn” hơn. Những người đọc code của bạn (kể cả bạn) sẽ 
        <em>sung sướng </em>hơn khi bạn làm điều đó.`,
      },
      {
        p: `Tên của biến, hàm, hoặc lớp phải <strong>tự trả lời</strong> tất cả
        những câu hỏi về nó. Nó phải cho bạn biết lý do nó tồn tại, nó làm
        được những gì, và dùng nó ra sao. Nếu cần phải có một comment đi kèm
        theo tên, thì tên đó không thể hiện được mục đích của nó.`,
      },
      {
        code: {
          src: `int d;  // elapsed time in days`,
          language: 'java',
        },
      },
      {
        p: `Tên&nbsp; <strong>d</strong> không tiết lộ điều gì cả. Nó không gợi
        lên cảm giác gì về thời gian, cũng không liên quan gì đến ngày. Chúng
        ta nên chọn một tên thể hiện được những gì đang được cân đo, và cả đơn
        vị đo của chúng:`,
      },
      {
        code: {
          src: `int elapsedTimeInDays;
int daysSinceCreation;
int daysSinceModification;
int fileAgeInDays;`,
          language: 'java',
        },
      },
      {
        p: `Việc chọn tên thể hiện được mục đích có thể làm cho việc hiểu và thay
        đổi code dễ dàng hơn nhiều. Hãy đoán xem mục đích của đoạn code dưới
        đây là gì?`,
      },
      {
        code: {
          src: `public List<int[]> getThem() {
  List<int[]> list1 = new ArrayList<int[]>();
  for (int[] x : theList)
      if (x[0] == 4)
          list1.add(x);
  return list1;
}`,
          language: 'java',
        },
      },
      {
        p: `Tại sao lại khó mà biết được đoạn code này đang làm gì? Không có biểu
        thức phức tạp, khoảng cách (space) và cách thụt đầu dòng hợp lý, chỉ
        có 3 biến và 2 hằng số được đề cập. Thậm chí không có các lớp (class)
        và phương thức đa hình nào, nó chỉ có một danh sách mảng List (hoặc
        thứ gì đó trông giống vậy).`,
      },
      {
        p: `Vấn đề không nằm ở sự đơn giản của code mà nằm ở ý nghĩa của code, do
        bối cảnh không rõ ràng. Đoạn code trên bắt chúng tôi phải tìm câu trả
        lời cho các câu hỏi sau:`,
      },
      {
        p: `<ol type="1">
        <li>
          <strong>theList </strong>chứa cái gì?
        </li>
        <li>
          Ý nghĩa của chỉ số 0 trong phần tử của <strong>theList</strong>?
        </li>
        <li>Số 4 có ý nghĩa gì?</li>
        <li>Danh sách được return thì dùng kiểu gì?</li>
      </ol>`,
      },
      {
        p: `Câu trả lời không có trong code, nhưng sẽ có ngay sau đây. Giả sử
        chúng tôi đang làm game <em>dò mìn</em>. Chúng tôi thấy rằng giao diện
        trò chơi là một danh sách các ô vuông (cell) được gọi là 
        <strong>theList</strong>. Vậy nên, hãy đổi tên nó thành 
        <strong>gameBoard</strong>.`,
      },
      {
        p: `Mỗi ô trên màn hình được biểu diễn bằng một sanh sách đơn giản. Chúng
        tôi cũng thấy rằng chỉ số của số 0 là vị trí biểu diễn giá trị trạng
        thái (status value), và giá trị 4 nghĩa là trạng thái 
        <em>được gắn cờ (flagged). </em>Chỉ bằng cách đưa ra các khái niệm
        này, chúng tôi có thể cải thiện mã nguồn một cách đáng kể:`,
      },
      {
        code: {
          src: `public List<int[]> getFlaggedCells() {
    List<int[]> flaggedCells = new ArrayList<int[]>();
    for (int[] cell : gameBoard)
        if (cell[STATUS_VALUE] == FLAGGED)
            flaggedCells.add(cell);
    return flaggedCells;
}`,
          language: 'java',
        },
      },
      {
        p: `Cần lưu ý rằng mức độ đơn giản của code vẫn không thay đổi, nó vẫn
        chính xác về toán tử, hằng số, và các lệnh lồng nhau,…Nhưng đã trở nên
        rõ ràng hơn rất nhiều.`,
      },
      {
        p: `Chúng ta có thể đi xa hơn bằng cách viết một lớp đơn giản cho các ô
        (cell) thay vì sử dụng các mảng kiểu int. Nó có thể bao gồm một hàm
        thể hiện được mục đích (gọi nó là <em>isFlagged – được gắn cờ</em> 
        chẳng hạn) để giấu đi những con số ma thuật 
        <em>
          (Từ gốc: magic number – Một khái niệm về các hằng số, tìm hiểu thêm
          tại 
        </em>
        <a href="https://en.wikipedia.org/wiki/Magic_number_(programming)" target="blank">
          <em>https://en.wikipedia.org/wiki/Magic_number_(programming)</em>
        </a>
        <em> ).</em>`,
      },
      {
        code: {
          src: `public List<Cell> getFlaggedCells() {
    List<Cell> flaggedCells = new ArrayList<Cell>();
    for (Cell cell : gameBoard)
        if (cell.isFlagged())
            flaggedCells.add(cell);
    return flaggedCells;
}`,
          language: 'java',
        },
      },
      {
        p: `Với những thay đổi đơn giản này, không quá khó để hiểu những gì mà
        đoạn code đang trình bày. Đây chính là sức mạnh của việc chọn tên tốt.`,
      },
    ],
  },
  {
    title: 'Tránh sai lệch thông tin',
    contents: [
      {
        p: ` Các lập trình viên phải tránh để lại những dấu hiệu làm code trở nên
        khó hiểu. Chúng ta nên tránh dùng những từ mang nghĩa khác với nghĩa
        cố định của nó. Ví dụ, các tên biến như <strong>hp</strong>
        <em>, </em>
        <strong>aix</strong>
        <em> </em>và <strong>sco</strong>
        <em> </em>là những tên biến vô cùng tồi tệ, chúng có thể là tên của
        các nền tảng Unix hoặc các biến thể. Ngay cả khi bạn đang code về cạnh
        huyền (hypotenuse) thì <strong>hp</strong>
        <em> </em>trông giống như một tên viết tắt tốt, những rất có thể đó là
        một cái tên tồi.`,
      },
      {
        p: ` Không nên quy kết rằng một nhóm các tài khoản là một 
        <strong>accountList </strong>nếu nó không thật sự là một danh sách
        (List). Từ <em>danh sách</em> có nghĩa là một thứ gì đó cụ thể cho các
        lập trình viên. Nếu các account không thực sự tạo thành 
        <strong>List</strong>, nó có thể dẫn đến một kết quả sai lầm. Vậy nên, 
        <strong>accountGroup </strong>hoặc <strong>bunchOfAccounts</strong>,
        hoặc đơn giản chỉ là <strong>accounts </strong>sẽ tốt hơn.`,
      },
      {
        p: ` Cẩn thận với những cái tên gần giống nhau. Mất bao lâu để bạn phân
        biệt được sự khác nhau giữa 
        <strong>XYZControllerForEfficientHandlingOfStrings </strong>và 
        <strong>XYZControllerForEfficientStorageOfStrings </strong>trong cùng
        một chức năng, hay đâu đó xa hơn một chút? Những cái tên gần giống
        nhau như thế này thật sự, thật sự rất khủng khiếp cho lập trình viên.`,
      },
      {
        p: `Một kiểu khủng bố tinh thần khác về những cái tên không rõ ràng là ký
        tự <strong>L</strong> viết thường (l) và <strong>O</strong> viết hoa.
        Vấn đề gì? Tất nhiên là nhìn chúng gần như <strong>O</strong> giống số
        0 và <strong>l</strong> giống số 1, kiểu như:`,
      },
      {
        code: {
          src: `int a = l; 
if ( O == l ) a = O1;
else l = 01;`,
          language: 'java',
        },
      },
      {
        p: `Bạn nghĩ chúng tôi <em>xạo</em>? Chúng tôi đã từng khảo sát, và kiểu
        code như vậy thực sự rất nhiều. Trong một số trường hợp, tác giả của
        code đề xuất sử dụng phông chữ khác nhau để tách biệt chúng. Một giải
        pháp khác có thể được sử dụng là truyền đạt bằng lời nói hoặc để lại
        tài liệu cho các lập trình viên sau này có thể hiểu nó. Vấn đề được
        giải quyết mà không cần phải đổi tên để tạo ra một sản phẩm khác.`,
      },
    ],
  },
  {
    title: 'Tạo sự khác biệt rõ ràng',
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-2_2.png`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        p: `Các lập trình viên tạo ra vấn đề cho chính họ khi viết code chỉ để đáp
        ứng cho trình biên dịch hoặc thông dịch. Ví dụ, vì bạn không thể sử
        dụng cùng một tên để chỉ hai thứ khác nhau trong cùng một khối lệnh
        hoặc cùng một phạm vi, bạn có thể bị “dụ dỗ” thay đổi lại tên một cách
        tùy tiện. Đôi khi điều đó làm bạn cố tình viết sai chính tả, và người
        nào đó quyết định sửa lỗi chính tả đó, khiến trình biên dịch không có
        khả năng hiểu nó (cụ thể – tạo ra một biến tên 
        <strong>
          <em>klass</em> 
        </strong>
        chỉ vì tên 
        <strong>
          <em>class</em> 
        </strong>
        là từ khóa không được phép đặt, và 1 người nào đó nghĩ bạn đã viết sai
        chính tả =&gt; họ sửa lại thành class =&gt; và…..<strong>BUG</strong>
        ).`,
      },
      {
        p: `Mặc dù trình biên dịch có thể làm việc với những tên này (
          <strong>kclass</strong>), nhưng điều đó không có nghĩa là bạn được
          phép dùng nó. Nếu tên khác nhau, thì chúng cũng có ý nghĩa khác nhau.`,
      },
      {
        p: `Những tên dạng chuỗi số <em>(a1, a2,… aN)</em> đi ngược lại nguyên tắc
        đặt tên có mục đích. Mặc dù những tên như vậy không hề sai, nhưng
        chúng không có thông tin. Chúng không cung cấp manh mối nào về ý định
        của tác giả. Ví dụ:`,
      },
      {
        code: {
          src: `public static void copyChars(char a1[], char a2[]) {
    for (int i = 0; i < a1.length; i++) {
        a2[i] = a1[i];
    }
}`,
          language: 'java',
        },
      },
      {
        p: `Hàm này sẽ dễ đọc hơn nhiều khi <em>nguyên nhân</em> và <em>mục</em> 
        <em>đích</em> của nó được đặt tên cho các đối số (argument).`,
      },
      {
        p: ` Những từ gây nhiễu tạo nên sự khác biệt, nhưng là sự khác biệt vô
        dụng. Hãy tưởng tượng rằng bạn có một lớp <strong>Product</strong>,
        nếu bạn có một <strong>ProductInfo </strong>hoặc 
        <strong>ProductData </strong>khác, thì bạn đã thành công trong việc
        tạo ra các tên khác nhau nhưng về mặt ngữ nghĩa thì chúng là một. Info
        và Data là các từ gây nhiễu, giống như <strong>a</strong>, 
        <strong>an</strong> và <strong>the</strong>.`,
      },
      {
        p: `Lưu ý rằng không có gì sai khi sử dụng các tiền tố như 
        <strong>a</strong> và <strong>the </strong>để tạo ra những khác biệt
        hữu ích. Ví dụ, bạn có thể sử dụng <strong>a</strong> cho tất cả các
        biến cục bộ (local variable) và tất cả các đối số (argument) của hàm. 
        <strong>a</strong> và <strong>the</strong> sẽ trở thành vô dụng khi
        bạn quyết định tạo một biến <strong>theZork </strong>nhưng trước đó
        bạn đã có một biến mang tên <strong>Zork</strong>.`,
      },
      {
        p: `Những từ gây nhiễu là không cần thiết. Từ <strong>variable </strong>sẽ
        không bao giờ xuất hiện trong tên biến, từ <strong>table </strong>cũng
        không nên dùng trong tên bảng. <strong>NameString </strong>sao lại tốt
        hơn <strong>Name</strong>? <strong>Name</strong> có bao giờ là một số
        đâu mà lại để vào chữ String? Còn nếu <strong>Name </strong>là một số,
        nó đã phá vỡ nguyên tắc <em>Tránh sai lệch thông tin. </em>Hãy tưởng
        tượng bạn đang tìm kiếm một lớp có tên <strong>Customer</strong>, và
        một lớp khác có tên <strong>CustomerObject</strong>. Chúng khác nhau
        kiểu gì? Cái nào chứa lịch sử thanh toán của khách hàng? Còn cái nào
        chứa thông tin của khách?`,
      },
      {
        p: `Có một ứng dụng minh họa cho các lỗi trên, chúng tôi đã thay đổi một
        chút về tên để bảo vệ tác giả. Đây là những thứ chúng tôi thấy trong
        mã nguồn:`,
      },
      {
        code: {
          src: `getActiveAccount();
getActiveAccounts();
getActiveAccountInfo();`,
          language: 'java',
        },
      },
      {
        p: `Tôi thắc mắc không biết các lập trình viên trong dự án này phải 
        <strong>getActiveAccount </strong>như thế nào!`,
      },
      {
        p: `Trong trường hợp không có quy ước cụ thể, biến 
        <strong>moneyAmount </strong>không thể phân biệt được với 
        <strong>money</strong>; <strong>customerInfo </strong>không thể phân
        biệt được với <strong>customer</strong>; <strong>accountData </strong>
        không thể phân biệt được với <strong>account </strong>và 
        <strong>theMessage </strong>với <strong>message </strong>được xem là
        một. Hãy phân biệt tên theo cách cung cấp cho người đọc những khác
        biệt rõ ràng.`,
      },
    ],
  },
  {
    title: 'Dùng những tên phát âm được',
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-2_3.jpg`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        p: `Con người rất giỏi về từ ngữ. Một phần quan trọng trong bộ não của
        chúng ta được dành riêng cho các khái niệm về từ. Và các từ, theo định
        nghĩa, có thể phát âm được. Thật lãng phí khi không sử dụng được bộ
        não mà chúng ta đã tiến hóa nhằm thích nghi với ngôn ngữ nói. Vậy nên,
        hãy làm cho những cái tên phát âm được đi nào.`,
      },
      {
        p: `Nếu bạn không thể phát âm nó, thì bạn không thể thảo luận một cách
        bình thường: “Hey, ở đây chúng ta có 
        <em>bee cee arr three cee enn tee</em>, và 
        <em>pee ess zee kyew int</em>, thấy chứ?” – Vâng, tôi thấy một thằng
        thiểu năng. Vấn đề này rất quan trọng vì lập trình cũng là một hoạt
        động xã hội, chúng ta cần trao đổi với mọi người.`,
      },
      {
        p: `Tôi có biết một công ty dùng tên genymdhms (generation date, year,
          month, day, hour, minute, and second – phát sinh ngày, tháng, năm,
          giờ, phút, giây), họ đi xung quanh tôi và “gen why emm dee aich emm
          ess” (genymdhms – cách phát âm theo tiếng Anh). Tôi có thói quen phát
          âm như những gì tôi viết, vì vậy tôi bắt đầu nói “gen-yah-muddahims”.
          Sau này nó được gọi bởi một loạt các nhà thiết kế và phân tích, và
          nghe vẫn có vẻ ngớ ngẫn. Chúng tôi đã từng troll nhau như thế, nó rất
          thú vị. Nhưng dẫu thế nào đi nữa, chúng tôi đã chấp nhận những cái tên
          xấu xí. Những lập trình viên mới của công ty tìm hiểu ý nghĩa của các
          biến, và sau đó họ nói về những từ ngớ ngẫn, thay vì dùng các thuật
          ngữ tiếng Anh cho thích hợp. Hãy so sánh:`,
      },
      {
        code: {
          src: `class DtaRcrd102 {
    private Date genymdhms;
    private Date modymdhms;
    private final String pszqint = "102";
    /* ... */
};`,
          language: `java`,
        },
      },
      {
        p: `và`,
      },
      {
        code: {
          src: `class Customer {
    private Date generationTimestamp;
    private Date modificationTimestamp;
    private final String recordId = "102";
    /* ... */
};`,
          language: `java`,
        },
      },
      {
        p: `Cuộc trò chuyện giờ đây đã thông minh hơn: “Hey, Mikey, take a look at
        this record! The generation timestamp is set to tomorrow’s date! How
        can that be?”`,
      },
    ],
  },
  {
    title: 'Dùng những tên tìm kiếm được',
    contents: [
      {
        p: `Các tên một chữ cái và các hằng số luôn có vấn đề, đó là không dễ để
        tìm chúng trong hàng ngàn dòng code.`,
      },
      {
        p: `Người ta có thể dễ dàng tìm kiếm 
        <strong>MAX_CLASSES_PER_STUDENT</strong>, nhưng số 7 thì lại rắc rối
        hơn. Các công cụ tìm kiếm có thể mở các tệp, các hằng, hoặc các biểu
        thức chứa số 7 này, nhưng được sử dụng với các mục đích khác nhau.
        Thậm chí còn tồi tệ hơn khi hằng số là một số có giá trị lớn và ai đó
        vô tình thay đổi giá trị của nó, từ đó tạo ra một lỗi mà các lập trình
        viên không tìm ra được.`,
      },
      {
        p: `Tương tự như vậy, tên <strong>e</strong> là một sự lựa chọn tồi tệ cho
        bất kỳ biến nào mà một lập trình viên cần tìm kiếm. Nó là chữ cái phổ
        biến nhất trong tiếng anh và có khả năng xuất hiện trong mọi đoạn code
        của chương trình. Về vấn đề này, tên dài thì tốt hơn tên ngắn, và
        những cái tên tìm kiếm được sẽ tốt hơn một hằng số trơ trọi trong code
        (tạo ra biến <strong>MAX_CLASSES_PER_STUDENT</strong> thay vì dùng
        trực tiếp số 7).`,
      },
      {
        p: `Sở thích cá nhân của tôi là chỉ đặt tên ngắn cho những biến cục bộ bên
        trong những phương thức ngắn. 
        <em>
          <strong>
            Độ dài của tên phải tương ứng với phạm vi hoạt động của nó
          </strong>
        </em>
        . Nếu một biến hoặc hằng số được nhìn thấy và sử dụng ở nhiều vị trí
        trong phần thân của mã nguồn, bắt buộc phải đặt cho nó một tên dễ tìm
        kiếm. Ví dụ:`,
      },
      {
        code: {
          src: `for (int j=0; j<34; j++) {
    s += (t[j]*4)/5;
}`,
          language: `java`,
        },
      },
      {
        p: `và`,
      },
      {
        code: {
          src: `int realDaysPerIdealDay = 4;
const int WORK_DAYS_PER_WEEK = 5;
int sum = 0;
for (int j=0; j < NUMBER_OF_TASKS; j++) {
    int realTaskDays = taskEstimate[j] * realDaysPerIdealDay;
    int realTaskWeeks = (realdays / WORK_DAYS_PER_WEEK);
    sum += realTaskWeeks;
}`,
          language: `java`,
        },
      },
      {
        p: `Lưu ý rằng <strong>sum </strong>ở ví dụ trên, dù không phải là một tên
        đầy đủ nhưng có thể tìm kiếm được. Biến và hằng được cố tình đặt tên
        dài, nhưng hãy so sánh việc tìm kiếm 
        <strong>WORK_DAYS_PER_WEEK </strong>dễ hơn bao nhiêu lần so với số 5,
        đó là chưa kể cần phải lọc lại danh sách tìm kiếm và tìm ra những
        trường hợp có nghĩa.`,
      },
    ],
  },
  {
    title: 'Tránh việc mã hóa',
    contents: [
      {
        p: `Các cách mã hóa hiện tại là đủ với chúng tôi. Mã hóa các kiểu dữ liệu
        hoặc phạm vi thông tin vào tên chỉ đơn giản là thêm một gánh nặng cho
        việc giải mã. Điều đó không hợp lý khi bắt nhân viên phải học thêm một
        “ngôn ngữ” mã hóa khác khác ngoài các ngôn ngữ mà họ dùng để làm việc
        với code. Đó là một gánh nặng không cần thiết, các tên mã hóa ít khi
        được phát âm và dễ bị đánh máy sai.`,
      },
      {
        p: `<b>KÝ PHÁP HUNGARY</b>`,
      },
      {
        p: `Ngày trước, khi chúng tôi làm việc với những ngôn ngữ mà độ dài tên
        biến bị giới hạn, chúng tôi đã loại bỏ sự cần thiết này. Fortran bắt
        buộc mã hóa bằng những chữ cái đầu tiên, phiên bản BASIC ban đầu của
        nó chỉ cho phép đặt tên tối đa 6 ký tự. Ký pháp Hungary (KH) đã giúp
        ích cho việc đặt tên rất nhiều.`,
      },
      {
        p: `KH thực sự được coi là quan trọng khi Windows C API xuất hiện, khi mọi
        thứ là một số nguyên, một con trỏ kiểu void hoặc là các chuỗi,…. Trong
        những ngày đó, trình biên dịch không thể kiểm tra được các lỗi về kiểu
        dữ liệu, vì vậy các lập trình viên cần một cái phao cứu sinh trong
        việc nhớ các kiểu dữ liệu này.`,
      },
      {
        p: `Trong các ngôn ngữ hiện đại, chúng ta có nhiều kiểu dữ liệu mặc định
        hơn, và các trình biên dịch có thể phân biệt được chúng. Hơn nữa, mọi
        người có xu hướng làm cho các lớp, các hàm trở nên nhỏ hơn để dễ dàng
        thấy nguồn gốc dữ liệu của biến mà họ đang sử dụng.`,
      },
      {
        p: `Các lập trình viên Java thì không cần mã hóa. Các kiểu dữ liệu mặc
        định là đủ mạnh mẽ, và các công cụ sửa lỗi đã được nâng cấp để chúng
        có thể phát hiện các vấn đề về dữ liệu trước khi được biên dịch. Vậy
        nên, hiện nay KH và các dạng mã hóa khác chỉ đơn giản là một loại
        chướng ngại vật. Chúng làm cho việc đổi tên biến, tên hàm, tên lớp
        (hoặc kiểu dữ liệu của chúng) trở nên khó khăn hơn. Chúng làm cho code
        khó đọc, và tạo ra một hệ thống mã hóa có khả năng đánh lừa người đọc:`,
      },
      {
        code: {
          src: `PhoneNumber phoneString;
// name not changed when type changed!`,
          language: `java`,
        },
      },
      {
        p: `<b>CÁC THÀNH PHẦN TIỀN TỐ</b>`,
      },
      {
        p: `Bạn cũng không cần phải thêm các tiền tố như m_ vào biến thành viên
        (member variable) nữa. Các lớp và các hàm phải đủ nhỏ để bạn không cần
        chúng. Và bạn nên sử dùng các công cụ chỉnh sửa giúp làm nổi bật các
        biến này, làm cho chúng trở nên khác biệt với phần còn lại.`,
      },
      {
        code: {
          src: `public class Part {
    private String m_dsc; // The textual description
    void setName(String name) {
        m_dsc = name;
    }
}
/*...*/
public class Part {
    String description;
    void setDescription(String description) {
        this.description = description;
    }
}`,
          language: `java`,
        },
      },
      {
        p: `Bên cạnh đó, mọi người cũng nhanh chóng bỏ qua các tiền tố (hoặc hậu
          tố) để xem phần có ý nghĩa của tên. Càng đọc code, chúng ta càng ít
          thấy các tiền tố. Cuối cùng, các tiền tố trở nên vô hình, và bị xem là
          một dấu hiệu của những dòng code lạc hậu.`,
      },
      {
        p: `<b>GIAO DIỆN VÀ THỰC TIỄN</b>`,
      },
      {
        p: `Có một số trường hợp đặc biệt cần mã hóa. Ví dụ: bạn đang xây dựng một
        ABSTRACT FACTORY (một loại Design pattern). Factory sẽ là giao diện
        (interface) và sẽ được implement bởi một lớp cụ thể. Bạn sẽ đặt tên
        cho chúng là gì? <strong>IShapeFactory </strong>và 
        <strong>ShapeFactory</strong>? Tôi thích dùng những cách đặt tên đơn
        giản. Trước đây, <strong>I</strong> rất phổ biến trong các tài liệu,
        nó làm chúng tôi phân tâm và đưa ra quá nhiều thông tin. Tôi không
        muốn người dùng biết rằng tôi đang tạo cho họ một giao diện, tôi chỉ
        muốn họ biết rằng đó là <strong>ShapeFactory</strong>. Vì vậy, nếu
        phải lựa chọn việc mã hóa hay thể hiện đầy đủ, tôi sẽ chọn cách thứ
        nhất. Gọi nó là <strong>ShapeFactoryImp</strong>, hoặc thậm chí là 
        <strong>CShapeFactory </strong>là cách hoàn hảo để che giấu thông tin.`,
      },
    ],
  },
  {
    title: 'Tránh “hiếp râm não” người khác',
    contents: [
      {
        p: `Những lập trình viên khác sẽ không cần phải điên đầu ngồi dịch các tên
        mà bạn đặt thành những tên mà họ biết. Vấn đề này thường phát sinh khi
        bạn chọn một thuật ngữ không chính xác.`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-2_4.jpg`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        p: ` Đây là vấn đề với các tên biến đơn. Chắc chắn một vòng lặp có thể sử
        dụng các biến được đặt tên là <strong>i</strong>, <strong>j</strong> 
        hoặc <strong>k</strong> (không bao giờ là <strong>l</strong> – dĩ
        nhiên rồi vì nó giống số 1) nếu phạm vi của nó là rất nhỏ và không có
        tên khác xung đột với nó. Điều này là do việc đặt tên có một chữ cái
        trong vòng lặp đã trở thành truyền thống. Tuy nhiên, trong hầu hết
        trường hợp, tên một chữ cái không phải là sự lựa chọn tốt. Nó chỉ là
        một tên đầu gấu, bắt người đọc phải điên đầu tìm hiểu ý nghĩa, vai trò
        của nó. Không có lý do nào tồi tệ hơn cho cho việc sử dụng tên 
        <strong>c</strong> chỉ vì <strong>a </strong>và <strong>b</strong> đã
        được dùng trước đó.`,
      },
      {
        p: `Nói chung, lập trình viên là những người khá thông minh. Và những
        người thông minh đôi khi muốn thể hiện điều đó bằng cách hack não
        người khác. Sau tất cả, nếu bạn đủ khả năng nhớ r là 
        <em>
          the lower-cased version of the url with the host and scheme removed, 
        </em>
        thì rõ ràng là – bạn cực kỳ thông minh luôn.`,
      },
      {
        p: `Sự khác biệt giữa lập trình viên thông minh và lập trình viên chuyên
        nghiệp là họ – những người chuyên nghiệp hiểu rằng sự rõ ràng là trên
        hết. Các chuyên gia dùng khả năng của họ để tạo nên những dòng code mà
        người khác có thể hiểu được.`,
      },
    ],
  },
  {
    title: 'Tên lớp',
    contents: [
      {
        p: `Tên lớp và các đối tượng nên sử dụng danh từ hoặc cụm danh từ, như 
        <strong>Customer</strong>, <strong>WikiPage</strong>, 
        <strong>Account</strong>, và <strong>AddressParser</strong>. Tránh
        những từ như <strong>Manager</strong>, <strong>Processor</strong>, 
        <strong>Data</strong>, hoặc <strong>Info </strong>trong tên của một
        lớp. Tên lớp không nên dùng động từ.`,
      },
    ],
  },
  {
    title: 'Tên các phương thức',
    contents: [
      {
        p: `Tên các phương thức nên có động từ hoặc cụm động từ như 
        <strong>postPayment</strong>, <strong>deletePage</strong>, hoặc 
        <strong>save</strong>. Các phương thức truy cập, chỉnh sửa thuộc tính
        phải được đặt tên cùng với <strong>get</strong>, <strong>set </strong>
        và <strong>is </strong>theo tiêu chuẩn của <em>Javabean</em>.`,
      },
      {
        code: {
          src: `string name = employee.getName();
customer.setName("mike");
if (paycheck.isPosted())...`,
          language: `java`,
        },
      },
      {
        p: `Khi các hàm khởi tạo bị nạp chồng (overload), sử dụng các phương thức
        tĩnh (static) có tên giải thích được đối số sẽ tốt hơn. Ví dụ:`,
      },
      {
        code: {
          src: `Complex fulcrumPoint = Complex.FromRealNumber(23.0);`,
          language: `java`,
        },
      },
      {
        p: `sẽ tốt hơn câu lệnh`,
      },
      {
        code: {
          src: `Complex fulcrumPoint = new Complex(23.0);`,
          language: `java`,
        },
      },
      {
        p: `Xem xét việc thực thi chúng bằng các hàm khởi tạo private tương ứng.`,
      },
    ],
  },
  {
    title: 'Đừng thể hiện rằng bạn cute',
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-2_5.png`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        p: `Nếu tên quá hóm hỉnh, chúng sẽ chỉ được những người&nbsp;có cùng khiếu
        hài hước với tác giả nhớ đến. Liệu có ai biết chức năng của hàm 
        <strong>HolyHandGrenade </strong>không? Nó rất thú vị, nhưng trong
        trường hợp này, <strong>DeleteItems </strong>sẽ là tên tốt hơn. Chọn
        sự rõ ràng thay vì giải trí.`,
      },
      {
        p: `Sự cute thường xuất hiện dưới dạng phong tục hoặc tiếng lóng. Ví dụ:
        đừng dùng <strong>whack()</strong> thay thế cho 
        <strong>kill()</strong>, đừng mang những câu đùa trong văn hóa nước
        mình vào code, như <strong>eatMyShorts()</strong> có nghĩa là 
        <strong>abort()</strong>.`,
      },
      {
        p: `<em>Say what you mean. Mean what you say.</em>
        <br />
        (Nói những gì bạn nghĩ. Nghĩ những gì bạn nói)`,
      },
    ],
  },
  {
    title: 'Chọn một từ cho mỗi khái niệm',
    contents: [
      {
        p: `Chọn một từ cho một khái niệm và gắn bó với nó. Ví dụ, rất khó hiểu
        khi <strong>fetch</strong>, <strong>retrieve </strong>và 
        <strong>get </strong>là các phương thức có cùng chức năng, nhưng lại
        đặt tên khác nhau ở các lớp khác nhau. Làm thế nào để nhớ phương thức
        nào đi với lớp nào? Buồn thay, bạn phải nhớ tên công ty, nhóm hoặc cá
        nhân nào đã viết ra các thư viện hoặc các lớp, để nhớ cụm từ nào được
        dùng cho các phương thức. Nếu không, bạn sẽ mất thời gian để tìm hiểu
        chúng trong các đoạn code trước đó.`,
      },
      {
        p: `Các công cụ chỉnh sửa hiện đại như <em>Eclipse </em>và 
        <em>IntelliJ </em>cung cấp các định nghĩa theo ngữ cảnh, chẳng hạn như
        danh sách các hàm bạn có thể gọi trên một đối tượng nhất định. Nhưng
        lưu ý rằng, danh sách thường không cung cấp cho bạn các ghi chú bạn đã
        viết xung quanh tên hàm và danh sách tham số. Bạn may mắn nếu nó cung
        cấp tên tham số từ các khai báo hàm. Tên hàm phải đứng một mình, và
        chúng phải nhất quán để bạn có thể chọn đúng phương pháp mà không cần
        phải tìm hiểu thêm.`,
      },
      {
        p: `Tương tự như vậy, rất khó hiểu khi <strong>controller</strong>, 
        <strong>manager </strong>và <strong>driver </strong>lại xuất hiện
        trong cùng một mã nguồn. Có sự khác biệt nào giữa 
        <strong>DeviceManager </strong>và <strong>ProtocolController</strong>?
        Tại sao cả hai đều không phải là <strong>controller </strong>hay 
        <strong>manager</strong>? Hay cả hai đều cùng là 
        <strong>driver</strong>? Tên dẫn bạn đến hai đối tượng có kiểu khác
        nhau, cũng như có các lớp khác nhau.`,
      },
      {
        p: `Một từ phù hợp chính là một ân huệ cho những lập trình viên phải dùng
        code của bạn.`,
      },
    ],
  },
  {
    title: 'Đừng chơi chữ',
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-2_6.png`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        p: `Tránh dùng cùng một từ cho hai mục đích. Sử dụng cùng một thuật ngữ
        cho hai ý tưởng khác nhau về cơ bản là một cách chơi chữ.`,
      },
      {
        p: `Nếu bạn tuân theo nguyên tắc <em>Chọn một từ cho mỗi khái niệm, </em>
        bạn có thể kết thúc nhiều lớp với một…Ví dụ, phương thức 
        <strong>add</strong>. Miễn là danh sách tham số và giá trị trả về của
        các phương thức <strong>add </strong>này tương đương về ý nghĩa, tất
        cả đều tốt.`,
      },
      {
        p: `Tuy nhiên, người ta có thể quyết định dùng từ <strong>add </strong>khi
        người đó không thực sự tạo nên một hàm có cùng ý nghĩa với cách hoạt
        động của hàm <strong>add</strong>. Giả sử chúng tôi có nhiều lớp,
        trong đó <strong>add </strong>sẽ tạo một giá trị mới bằng cách cộng
        hoặc ghép hai giá trị hiện tại. Bây giờ, giả sử chúng tôi đang viết
        một lớp mới và có một phương thức thêm tham số của nó vào mảng. Chúng
        tôi có nên gọi nó là <strong>add </strong>không? Có vẻ phù hợp đấy,
        nhưng trong trường hợp này, ý nghĩa của chúng là khác nhau, vậy nên
        chúng tôi dùng một cái tên khác như <strong>insert </strong>hay 
        <strong>append </strong>để thay thế. Nếu được dùng cho phương thức
        mới, <strong>add </strong>chính xác là một kiểu chơi chữ.`,
      },
      {
        p: `Mục tiêu của chúng tôi, với tư cách là tác giả, là làm cho code của
        chúng tôi dễ hiểu nhất có thể. Chúng tôi muốn code của chúng tôi là
        một bài viết ngắn gọn, chứ không phải là một bài nghiên cứu […].`,
      },
    ],
  },
  {
    title: 'Dùng thuật ngữ',
    contents: [
      {
        p: `Hãy nhớ rằng những người đọc code của bạn là những lập trình viên, vậy
        nên hãy sử dụng các thuật ngữ khoa học, các thuật toán, tên mẫu
        (pattern),…cho việc đặt tên. Sẽ không khôn ngoan khi bạn đặt tên của
        vấn đề theo cách mà khách hàng định nghĩa. Chúng tôi không muốn đồng
        nghiệp của mình phải tìm khách hàng để hỏi ý nghĩa của tên, trong khi
        họ đã biết khái niệm đó – nhưng là dưới dạng một cái tên khác.`,
      },
      {
        p: `Tên <strong>AccountVisitor </strong>có ý nghĩa rất nhiều đối với một
        lập trình viên quen thuộc với mẫu <strong>VISITOR</strong> (VISITOR
        pattern). Có lập trình viên nào không biết JobQueue? Có rất nhiều thứ
        liên quan đến kỹ thuật mà lập trình viên phải đặt tên. Chọn những tên
        thuật ngữ thường là cách tốt nhất.`,
      },
    ],
  },
  {
    title: 'Thêm ngữ cảnh thích hợp',
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-2_7.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center">
        <small>
          <b>Bài học: Ngữ cảnh</b>
        </small>
      </p>`,
      },
      {
        p: `Chỉ có một vài cái tên có nghĩa trong mọi trường hợp – số còn lại thì
        không. Vậy nên, bạn cần đặt tên phù hợp với ngữ cảnh, bằng cách đặt
        chúng vào các lớp, các hàm hoặc các không gian tên (namespace). Khi
        mọi thứ thất bại, tiền tố nên được cân nhắc như là giải pháp cuối
        cùng.`,
      },
      {
        p: `Hãy tưởng tượng bạn có các biến có tên là <strong>firstName</strong>, 
        <strong>lastName</strong>, <strong>street</strong>, 
        <strong>houseNumber</strong>, <strong>city</strong>, 
        <strong>state </strong>và <strong>zipcode</strong>. Khi kết hợp với
        nhau, chúng rõ ràng tạo thành một địa chỉ. Nhưng nếu bạn chỉ thấy biến 
        <strong>state </strong>được sử dụng một mình trong một phương thức thì
        sao? Bạn có thể suy luận ra đó là một phần của địa chỉ không?`,
      },
      {
        p: `Bạn có thể thêm ngữ cảnh bằng cách sử dụng tiền tố: 
        <strong>addrFirstName</strong>, <strong>addrLastName</strong>, 
        <strong>addrState</strong>,… Ít nhất người đọc sẽ hiểu rằng những biến
        này là một phần của một cấu trúc lớn hơn. Tất nhiên, một giải pháp tốt
        hơn là tạo một lớp có tên là <strong>Address</strong>. Khi đó, ngay cả
        trình biên dịch cũng biết rằng các biến đó thuộc về một khái niệm lớn
        hơn.`,
      },
      {
        p: `Hãy xem xét các phương thức trong <em>Listing 2-1</em>. Các biến có
        cần một ngữ cảnh có ý nghĩa hơn không? Tên hàm chỉ cung cấp một phần
        của ngữ cảnh, thuật toán cung cấp phần còn lại. Khi bạn đọc qua hàm,
        bạn thấy rằng ba biến, <strong>number</strong>, <strong>verb </strong>
        và <strong>pluralModifier</strong>, là một phần của thông báo “giả
        định thống kê”. Thật không may, bối cảnh này phải suy ra mới có được.
        Khi bạn lần đầu xem xét phương thức, ý nghĩa của các biến là không rõ
        ràng.`,
      },
      {
        p: `<strong>Listing 2-1</strong> Biến với bối cảnh không rõ ràng.`,
      },
      {
        code: {
          src: `private void printGuessStatistics(char candidate, int count) {
    String number;
    String verb;
    String pluralModifier;
    if (count == 0) {
        number = "no";
        verb = "are";
        pluralModifier = "s";
    } else if (count == 1) {
        number = "1";
        verb = "is";
        pluralModifier = "";
    } else {
        number = Integer.toString(count);
        verb = "are";
        pluralModifier = "s";
    }
    String guessMessage = String.format("There %s %s %s%s", verb, number, candidate, pluralModifier);
    print(guessMessage);
}`,
          language: `java`,
        },
      },
      {
        p: `Hàm này hơi dài và các biến được sử dụng xuyên suốt. Để tách hàm thành
        các phần nhỏ hơn, chúng ta cần tạo một lớp 
        <strong>GuessStatisticsMessage </strong>và tạo ra ba biến của lớp này.
        Điều này cung cấp một bối cảnh rõ ràng cho ba biến. Chúng là một phần
        của <strong>GuessStatisticsMessage</strong>. Việc cải thiện bối cảnh
        cũng cho phép thuật toán được rõ ràng hơn bằng cách chia nhỏ nó thành
        nhiều chức năng nhỏ hơn. (Xem <em>Listing 2-2</em>.)`,
      },
      {
        p: `<strong>Listing 2-2</strong> Biến có ngữ cảnh`,
      },
      {
        code: {
          src: `public class GuessStatisticsMessage {
private String number;
private String verb;
private String pluralModifier;
public String make(char candidate, int count) {
    createPluralDependentMessageParts(count);
    return String.format("There %s %s %s%s",verb, number, candidate, pluralModifier );
}
private void createPluralDependentMessageParts(int count) {
    if (count == 0) {
        thereAreNoLetters();
    } else if (count == 1) {
        thereIsOneLetter();
    } else {
        thereAreManyLetters(count);
    }
}   
private void thereAreManyLetters(int count) {
    number = Integer.toString(count);
    verb = "are";
    pluralModifier = "s";
}
private void thereIsOneLetter() {
    number = "1";
    verb = "is";
    pluralModifier = "";
}
private void thereAreNoLetters() {
    number = "no";
    verb = "are";
    pluralModifier = "s";
}
}`,
          language: `java`,
        },
      },
      {
        p: `Tên ngắn thường tốt hơn tên dài, miễn là chúng rõ ràng. Thêm đủ ngữ
        cảnh cho tên sẽ tốt hơn khi cần thiết.`,
      },
      {
        p: `Tên <strong>accountAddress </strong>và 
        <strong>customerAddress </strong>là những tên đẹp cho trường hợp đặc
        biệt của lớp <strong>Address</strong> nhưng có thể là tên tồi cho các
        lớp khác. <strong>Address </strong>là một tên đẹp cho lớp. Nếu tôi cần
        phân biệt giữa địa chỉ MAC, địa chỉ cổng (port) và địa chỉ web thì tôi
        có thể xem xét MAC, <strong>PostalAddress </strong>và URL. Kết quả là
        tên chính xác hơn. Đó là tâm điểm của việc đặt tên.`,
      },
    ],
  },
  {
    title: 'Lời kết',
    contents: [
      {
        p: `Điều khó khăn nhất của việc lựa chọn tên đẹp là nó đòi hỏi kỹ năng mô
        tả tốt và nền tảng văn hóa lớn. Đây là vấn đề về học hỏi hơn là vấn đề
        kỹ thuật, kinh doanh hoặc quản lý. Kết quả là nhiều người trong lĩnh
        vực này không học cách làm điều đó.`,
      },
      {
        p: ` Mọi người cũng sợ đổi tên mọi thứ vì lo rằng người khác sẽ phản đối.
        Chúng tôi không chia sẻ nỗi sợ đó cho bạn. Chúng tôi thật sự biết ơn
        những ai đã đổi tên khác cho biến, hàm,…(theo hướng tốt hơn). Hầu hết
        thời gian chúng tôi không thật sự nhớ tên lớp và những phương thức của
        nó. Chúng tôi có các công cụ giúp chúng tôi trong việc đó để chúng tôi
        có thể tập trung vào việc code có dễ đọc hay không. Bạn có thể sẽ gây
        ngạc nhiên cho ai đó khi bạn đổi tên, giống như bạn có thể làm với bất
        kỳ cải tiến nào khác. Đừng để những cái tên tồi phá hủy sự nghiệp
        coder của mình.`,
      },
      {
        p: `Thực hiện theo một số quy tắc đặt tên bên trên và xem liệu bạn có cải
        thiện được khả năng đọc code của mình hay không. Nếu bạn đang bảo trì
        code của người khác, hãy sử dụng các công cụ tái cấu trúc để giải
        quyết vấn đề này. Mất một ít thời gian nhưng có thể làm bạn nhẹ nhõm
        trong vài tháng.`,
      },
    ],
  },
  {
    title: 'Tham khảo',
    contents: [
      {
        p: `Nguồn bài dịch: <b>NQT-K4DNC</b>`,
      },
      {
        p: `Chỉnh sửa bởi: <b>Tôi học Design pattern</b>`,
      },
    ],
  },
];
