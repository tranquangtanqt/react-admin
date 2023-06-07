import IContent from 'utils/interface';

export const content: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-1_1.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        p: `<i>Bạn đang đọc quyển sách này vì hai lý do. Thứ nhất, bạn là một lập trình
          viên. Thứ hai, bạn muốn trở thành một lập trình viên giỏi. Tuyệt vời!
          Chúng ta cần lập trình viên giỏi.</i>`,
      },
      {
        p: `<i>Đây là một quyển sách nói về cách để bạn code tốt hơn, và nó chứa đầy
          code. Chúng ta sẽ xem xét code từ nhiều phương diện, từ trên xuống dưới,
          từ dưới lên trên, và từ trong ra ngoài. Nhân tiện, khi hoàn thành, chúng
          ta sẽ được biết thêm rất nhiều về code. Hơn nữa, chúng ta sẽ nói về sự
          khác biệt giữa code “xịn” (good code) và code “rởm” (bad code), biết
          cách tạo nên code “xịn”, và học cách hô biến code “rởm” thành code
          “xịn”.</i>`,
      },
    ],
  },
  {
    title: 'Sẽ (vẫn) có code',
    contents: [
      {
        p: `Nhiều người cho rằng việc viết code, sau vài năm nữa sẽ không còn là vấn
          đề, rằng chúng ta nên quan tâm đến những mô hình (model) và các yêu cầu.
          Thực tế, một số người cho rằng việc viết code đang dần đến lúc phải kết
          thúc, code sẽ được tự động tạo ra thay vì được viết tay hay gõ phím. Và
          các lập trình viên “gà mờ” sẽ phải tìm công việc khác vì khách hàng của
          họ có thể tự tạo nên một chương trình chỉ bằng cách nhập vào các thông
          số cần thiết…`,
      },
      {
        p: `Oh sh*t, rõ là vô lý! Code sẽ không bao giờ bị loại bỏ vì chúng đại diện
          cho nội dung của các yêu cầu của khách hàng. Ở một mức độ nào đó, những
          nội dung đó không thể bỏ qua hoặc trừu tượng hóa; chúng phải được thiết
          lập. Việc thiết lập các nội dung mà máy tính có thể hiểu và thi hành,
          được gọi là lập trình, và lập trình thì cần có code.`,
      },
      {
        p: `Tôi hy vọng mức độ trừu tượng của các ngôn ngữ lập trình và số lượng các
          DSL (Domain-Specific Language – ngôn ngữ chuyên biệt dành cho các vấn đề
          cụ thể) sẽ tăng lên. Đó là một dấu hiệu tốt. Nhưng dù điều đó xãy ra, nó
          vẫn không “đá đít” code. Các đặc điểm kỹ thuật được viết bằng những ngôn
          ngữ bậc cao và DSL vẫn là code. Nó vẫn cần sự nghiêm ngặt, chính xác, và
          theo đúng các nguyên tắc, tường tận đến nỗi một cỗ máy có thể hiểu và
          thực thi nó.`,
      },
      {
        p: `Những người nghĩ rằng việc viết code đang đi đến ngày tàn cũng giống như
          việc một nhà toán học hy vọng khám phá ra một thể loại toán học mới
          không chứa nguyên tắc, định lý hay bất kỳ công thức nào. Họ hy vọng một
          ngày nào đó, các lập trình viên sẽ tạo ra những cỗ máy có thể làm bất cứ
          điều gì họ muốn (chứ không cần ra lệnh bằng giọng nói). Những cỗ máy này
          phải có khả năng hiểu họ tốt đến nỗi, chúng có khả năng dịch những yêu
          cầu mơ hồ thành các chương trình hoàn hảo, đáp ứng chính xác những yêu
          cầu đó?.`,
      },
      {
        p: `Dĩ nhiên, chuyện đó chỉ xãy ra trong phim viễn tưởng. Ngay cả con người,
          với tất cả các giác quan và sự sáng tạo, cũng không thể thành công trong
          việc hiểu những cảm xúc mơ hồ của người khác. Thật vậy, nếu được hỏi quá
          trình phân tích các yêu cầu của khách hàng đã dạy cho chúng tôi điều gì,
          thì câu trả lời là các yêu cầu được chỉ định rõ ràng, trông giống như
          code và có thể hoạt động trong quá trình kiểm tra.`,
      },
      {
        p: `Hãy nhớ một điều rằng code thực sự là một ngôn ngữ mà trong đó, công
          việc cuối cùng của chúng ta là thể hiện các yêu cầu. Chúng tôi có thể
          tạo ra các ngôn ngữ gần với các yêu cầu, hoặc tạo ra các công cụ cho
          phép phân tích cú pháp và lắp ráp chúng vào các chương trình. Nhưng
          chúng tôi sẽ không bao giờ bỏ qua các yêu cầu cần thiết – vì vậy, code
          sẽ luôn tồn tại.`,
      },
    ],
  },
  {
    title: `Code tồi, Code “rởm”`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-1_2.png`),
          width: `15%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center"><small>Đây là Kent Beck</small></p>`,
      },
      {
        p: `Gần đây, tôi có đọc phần mở đầu của quyển Implementation Patterns.1 của
          Kent Beck. Ông ấy nói rằng <i>“…cuốn sách này dựa trên một tiền đề khá mong
          manh: đó là vấn đề code sạch…”</i> Mong manh ư? Tôi không đồng ý chút nào.
          Tôi nghĩ tiền đề đó là một trong những tiền đề mạnh mẽ nhất, nhận được
          sự ủng hộ lớn nhất từ các nhân viên (và tôi nghĩ là Kent biết điều đó).
          Chúng tôi biết các vấn đề về code sạch vì chúng tôi đã phải đối mặt với
          nó quá lâu rồi.`,
      },
    ],
  },
];
