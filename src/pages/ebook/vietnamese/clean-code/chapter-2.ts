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
        p: ``,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
    ],
  },
  {
    title: '',
    contents: [
      {
        p: ``,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
    ],
  },
  {
    title: '',
    contents: [
      {
        p: ``,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
    ],
  },
  {
    title: '',
    contents: [
      {
        p: ``,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
    ],
  },
  {
    title: '',
    contents: [
      {
        p: ``,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
    ],
  },
  {
    title: '',
    contents: [
      {
        p: ``,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
    ],
  },
  {
    title: 'Tham khảo',
    contents: [
      {
        p: `<em>Implementation Patterns</em>, Kent Beck, Addison-Wesley, 2007.`,
      },
      {
        p: `<em>Literate Programming</em>, Donald E. Knuth, Center for the Study
        of Language and Information, Leland Stanford Junior University, 1992.`,
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
