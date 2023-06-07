import IContent from 'utils/interface';

export const chapter1: IContent[] = [
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
      {
        p: `Tôi có biết một công ty, vào cuối những năm 80, đã phát hành một ứng
        dụng X. Nó rất phổ biến, và nhiều chuyên gia đã mua và sử dụng nó. Nhưng
        sau đó, các chu kỳ cập nhật bắt đầu bị kéo dài ra, nhiều lỗi thì không
        được sửa từ phiên bản này qua phiên bản khác, thời gian tải (load) và sự
        cố cũng theo đó mà tăng lên. Tôi vẫn nhớ ngày mà tôi đã ngưng sử dụng
        sản phẩm trong sự thất vọng và không dùng lại nó một lần nào nữa. Chỉ
        một thời gian sau, công ty đó cũng…ngừng hoạt động.`,
      },
      {
        p: `Hai mươi năm sau, tôi gặp một trong những nhân viên ban đầu của công
        ty đó và hỏi anh ta chuyện gì đã xãy ra. Câu trả lời đã khiến tôi lo
        sợ: Họ đưa sản phẩm ra thị trường cùng với một đống code hỗn độn trong
        đó. Khi các tính năng mới được thêm vào ngày càng nhiều, code của
        chương trình lại ngày càng tệ, tệ đến mức họ không thể kiểm soát được
        nữa, và đặt dấu chấm hết cho công ty. Và, tôi gọi những dòng code đó
        là code “rởm”.`,
      },
      {
        p: ` Bạn đã bao giờ bị những dòng code “rởm” gây khó dễ chưa? Nếu là lập
      trình viên hẳn bạn đã từng trải nghiệm cảm giác đó vài lần. Chúng tôi
      có một cái tên cho nó, đó là <i>bơi</i> (từ gốc: wade – làm việc vất
      vả). Chúng tôi <i>bơi</i> qua những dòng code tởm lợm, <i>bơi</i>{' '}
      trong một mớ lộn xộn những cái bug được giấu kín. Chúng tôi cố gắng
      theo cách của chúng tôi, hy vọng tìm thấy những gợi ý, những manh mối
      hay biết chuyện gì đang xảy ra với code; nhưng tất cả những gì chúng
      tôi thấy là những dòng code ngày càng vô nghĩa.`,
      },
      {
        p: ` Nếu bạn đã từng bị những dòng code “rởm” cản trở như tôi miêu tả, vậy
      thì – tại sao bạn lại viết ra nó?`,
      },
      {
        p: `Bạn đã thử code thật nhanh? Bạn đã code vội vàng? Có lẽ vậy thật. Hoặc
      bạn cảm thấy bạn không có đủ thời gian để hoàn thành nó; hay sếp sẽ
      nổi điên lên nếu bạn dành nhiều thời gian để dọn dẹp đống code lộn xộn
      đó. Cũng có lẽ bạn đã quá mệt mỏi với cái chương trình chết tiệt này
      và muốn kết thúc nó ngay. Hoặc có thể bạn đã xem xét phần tồn đọng của
      những thứ khác mà bạn đã hứa sẽ hoàn thành và nhận ra rằng bạn cần
      phải kết hợp module này với nhau để bạn có thể chuyển sang phần tiếp
      theo. Yeah! Chúng ta đã tạo ra con quỷ như thế đó.`,
      },
      {
        p: ` Tất cả chúng ta đều nhìn vào đống lộn xộn mà chúng ta vừa tạo ra, và
      chọn <i>một ngày đẹp trời nào đó</i> để giải quyết nó. Tất cả chúng ta
      đều cảm thấy nhẹ nhõm khi thấy “chương trình lộn xộn” của chúng ta
      hoạt động và cho rằng: thà có còn hơn không. Tất cả chúng ta cũng đã
      từng tự nhủ rằng, sau này chúng ta sẽ quay lại và dọn dẹp mớ hỗn độn
      đó. Dĩ nhiên, trong những ngày như vậy chúng ta không biết đến quy
      luật của LeBlanc: <b>SAU NÀY</b> đồng nghĩa với <b> KHÔNG BAO GIỜ</b>!`,
      },
    ],
  },
  {
    title: `Cái giá của sự lộn xộn`,
    contents: [
      {
        p: ` Nếu bạn là một lập trình viên đã làm việc trong 2 hoặc 3 năm, rất có
        thể bạn đã bị mớ code lộn xộn của người khác kéo bạn lùi lại. Nếu bạn
        đã là một lập trình viên lâu hơn 3 năm, rất có thể bạn đã tự làm chậm
        sự phát triển của bản thân bằng đống code do bạn tạo ra. Trong khoảng
        1 hoặc 2 năm, các đội đã di chuyển rất nhanh ngay từ khi bắt đầu một
        dự án, thay vì phải di chuyển thận trọng như cách họ nhìn nhận nó. Vì
        vậy, mọi thay đổi mà họ tác động lên code sẽ phá vỡ vài đoạn code
        khác. Không có thay đổi nào là không quan trọng. Mọi sự bổ sung hoặc
        thay đổi chương trình đều tạo ra các mớ boòng boong, các nút thắt,…
        Chúng ta cố gắng hiểu chúng chỉ để tạo ra thêm sự thay đổi, và lặp lại
        việc tạo ra chính chúng. Theo thời gian, code của chúng ta trở nên quá
        “cao siêu” mà không thành viên nào có thể hiểu nổi. Chúng ta không thể
        “làm sạch” chúng, hoàn toàn không có cách nào cả 😥.`,
      },
      {
        p: ` Khi đống code lộn xộn được tạo ra, hiệu suất của cả đội sẽ bắt đầu
        tuột dốc về phía 0. Khi hiệu suất giảm, người quản lý làm công việc
        của họ – đưa vào nhóm nhiều thành viên mới với hy vọng cải thiện tình
        trạng. Nhưng những nhân viên mới lại thường không nắm rõ cách hoạt
        động hoặc thiết kế của hệ thống, họ cũng không chắc thay đổi nào sẽ là
        phù hợp cho dự án. Hơn nữa, họ và những người cũ trong nhóm phải chịu
        áp lực khủng khiếp cho tình trạng tồi tệ của nhóm. Vậy là, càng làm
        việc, họ càng tạo ra nhiều code rối, và đưa cả nhóm (một lần nữa) dần
        tiến về cột mốc 0.`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-1_3.png`),
          width: `50%`,
          align: `center`,
        },
      },
    ],
  },
  {
    title: `Đập đi xây lại`,
    contents: [
      {
        p: `Cuối cùng, cả nhóm quyết định nổi loạn. Họ thông báo cho quản lý rằng
        họ không thể tiếp tục phát triển trên nền của đống code lộn xộn này
        nữa, rằng họ muốn <i>thiết kế lại dự án</i>. Dĩ nhiên ban quản lý
        không muốn mất thêm tài nguyên cho việc tái khởi động dự án, nhưng họ
        cũng không thể phủ nhận sự thật rằng hiệu suất làm việc của cả nhóm
        quá tàn tạ. Cuối cùng, họ chiều theo yêu cầu của các lập trình viên và
        cho phép bắt đầu lại dự án.`,
      },
      {
        p: ` Một nhóm mới được chọn. Mọi người đều muốn tham gia nhóm này vì nó
        năng động và đầy sức sống. Nhưng chỉ những người giỏi nhất mới được
        chọn, những người khác phải tiếp tục duy trì dự án hiện tại.`,
      },
      {
        p: `Và bây giờ, hai nhóm đang trong một cuộc đua. Nhóm mới phải xây dựng
        một hệ thống mới với mọi chức năng của hệ thống cũ, không những vậy họ
        phải theo kịp với những thay đổi dành cho hệ thống cũ. Ban quản lý sẽ
        không thay thế hệ thống cũ cho đến khi hệ thống mới làm được tất cả
        công việc của hệ thống cũ đang làm.`,
      },
      {
        p: ` Cuộc đua này có thể diễn ra trong một thời gian rất dài. Tôi đã từng
        thấy một cuộc đua như vậy, nó mất đến 10 năm để kết thúc. Và vào thời
        điểm đó, các thành viên ban đầu của <i>nhóm mới</i> đã nghỉ việc, và
        các thành viên hiện tại đang yêu cầu thiết kế lại hệ thống vì code của
        nó đã trở thành một mớ lộn xộn.`,
      },
      {
        p: `Nếu bạn đã từng trải qua, dù chỉ một phần nhỏ của câu chuyện bên trên,
        hẳn bạn đã biết rằng việc dành thời gian để giữ cho code sạch đẹp
        không chỉ là câu chuyện về chi phí, mà đó còn là vấn đề sống còn của
        lập trình viên chuyên nghiệp.`,
      },
    ],
  },
  {
    title: `Thay đổi cách nhìn`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-1_4.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        p: `Bạn đã bao giờ <i>bơi</i> trong một đống code lộn tùng phèo để nhận ra
        thay vì cần một giờ để xử lý nó, bạn lại tốn vài tuần? Hay thay vì
        ngồi lọ mọ sửa lỗi trong hàng trăm module, bạn chỉ cần tác động lên
        một dòng code. Nếu thật vậy, bạn không hề cô đơn, ngoài kia có hàng
        trăm ngàn lập trình viên như bạn.`,
      },
      {
        p: `Tại sao chuyện này lại xảy ra? Tại sao code đẹp lại nhanh chóng trở
        thành đống lộn xộn được? Chúng tôi có rất nhiều lời giải thích dành
        cho nó. Chúng tôi phàn nàn vì cho rằng các yêu cầu đã thay đổi theo
        hướng ngăn cản thiết kế ban đầu của hệ thống. Chúng tôi rên ư ử vì
        lịch làm việc quá bận rộn. Chúng tôi chửi rủa những nhà quản lý ngu
        ngốc và những khách hàng bảo thủ và cả những cách tiếp thị vô dụng.
        Nhưng thưa Dilbert, lỗi không nằm ở mục tiêu mà chúng ta hướng đến,
        lỗi nằm ở chính chúng ta, do chúng ta không chuyên nghiệp.`,
      },
      {
        p: `Đây có thể là một sự thật không mấy dễ chịu. Bằng cách nào những đống
        code rối tung rối mù này lại là lỗi của chúng tôi? Các yêu cầu vô lý
        thì sao? Còn lịch làm việc dày đặc? Và những tên quản lý ngu ngốc, hay
        các cách tiếp thị vô dụng – Không ai chịu trách nhiệm cả à?`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-1_5.jpg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        p: `Câu trả lời là <b>KHÔNG</b>. Các nhà quản lý và các nhà tiếp thị tìm
        đến chúng tôi vì họ cần thông tin để tạo ra những lời hứa và cam kết
        của chương trình; và ngay cả khi họ không tìm chúng tôi, chúng tôi
        cũng không ngại nói cho họ biết suy nghĩ của mình. Khách hàng tìm đến
        chúng tôi để xác thực các yêu cầu phù hợp với hệ thống. Các nhà quản
        lý tìm đến chúng tôi để giúp tạo ra những lịch trình làm việc phù hợp.
        Chúng tôi rất mệt mỏi trong việc lập kế hoạch cho dự án và phải nhận
        rất nhiều trách nhiệm khi thất bại, đặc biệt là những thất bại liên
        quan đến code lởm.`,
      },
      {
        p: `“Nhưng khoan!” – bạn nói – “Nếu tôi không làm những gì mà sếp tôi bảo,
        tôi sẽ bị sa thải”. Ồ, không hẳn vậy đâu. Hầu hết những ông sếp đều
        muốn sự thật, ngay cả khi họ hành động trông không giống như vậy.
        Những ông sếp đều muốn chương trình được code đẹp, dù họ đang bị ám
        ảnh bởi lịch trình dày đặc. Họ có thể thay đổi lịch trình và cả những
        yêu cầu, đó là công việc của họ. Đó cũng là công việc <i>của bạn</i> –
        bảo vệ code bằng niềm đam mê.`,
      },
      {
        p: `Để giải thích điều này, hãy tưởng tượng bạn là bác sĩ và có một bệnh
        nhân yêu cầu bạn hãy ngưng việc rửa tay để chuẩn bị cho phẫu thuật, vì
        việc rửa tay mất quá nhiều thời gian. Rõ ràng bệnh nhân là thượng đế,
        nhưng bác sĩ sẽ luôn từ chối yêu cầu này. Tại sao? Bởi vì bác sĩ biết
        nhiều hơn bệnh nhân về những nguy cơ về bệnh tật và nhiễm trùng. Rõ là
        ngu ngốc khi bác sĩ lại đồng ý với những yêu cầu như vậy.`,
      },
      {
        p: `Tương tự như vậy, quá là nghiệp dư cho các lập trình viên luôn tuân
        theo các yêu cầu của sếp – những người không hề biết về nguy cơ của
        việc tạo ra một chương trình đầy code rối.`,
      },
    ],
  },
  {
    title: `Vấn đề nan giải`,
    contents: [
      {
        p: `Các lập trình viên phải đối mặt với một vấn đề nan giải về các giá trị
        cơ bản. Những lập trình viên với hơn 1 năm kinh nghiệm biết rằng đống
        code lộn xộn đó đã kéo họ xuống. Tuy nhiên, tất cả họ đều cảm thấy áp
        lực khi tìm cách giải quyết nó theo đúng hạn. Tóm lại, họ không dành
        thời gian để tạo nên hướng đi vững vàng.`,
      },
      {
        p: `Các chuyên gia thật sự biết rằng phần thứ hai của vấn đề là sai, đống
        code lộn xộn kia sẽ không thể giúp bạn hoàn thành công việc đúng hạn.
        Thật vậy, sự lộn xộn đó sẽ làm chậm bạn ngay lập tức, và buộc bạn phải
        trễ thời hạn. Cách duy nhất để hoàn thành đúng hạn – cách duy nhất để
        bước đi vững vàng – là giữ cho code luôn sạch sẽ nhất khi bạn còn có
        thể.`,
      },
    ],
  },
  {
    title: `Nghệ thuật tạo code sạch?`,
    contents: [
      {
        p: ` Giả sử bạn tin rằng code lởm là một chướng ngại đáng kể, giả sử bạn
        tin rằng cách duy nhất để có hướng đi vững vàng là giữ sạch code của
        bạn, thì bạn cần tự hỏi bản thân mình : “Làm cách nào để viết code cho
        sạch?”. Nếu bạn không biết ý nghĩa của việc code sạch, tốt nhất bạn
        không nên viết nó.`,
      },
      {
        p: `Tin xấu là, việc tạo nên code sạch sẽ giống như cách chúng ta vẽ nên
        một bức tranh. Hầu hết chúng ta đều nhận ra đâu là tranh đẹp, đâu là
        tranh xấu – nhưng điều đó không có nghĩa là chúng ta biết cách vẽ. Vậy
        nên, việc bạn có thể lôi ra vài dòng code đẹp trong đống code lởm
        không có nghĩa là chúng ta biết cách viết nên những dòng code sạch.`,
      },
      {
        p: `Viết code sạch sẽ yêu cầu sự khổ luyện liên tục những kỹ thuật nhỏ
        khác nhau, và sự cần cù sẽ được đền đáp bằng cảm giác “sạch sẽ” của
        code. <i>Cảm giác (hay giác quan)</i> này chính là chìa khóa, một số
        người trong chúng ta được Chúa ban tặng ngay từ khi sinh ra, một số
        người khác thì phải đấu tranh để có được nó. Nó không chỉ cho phép
        chúng ta xem xét code đó là <i>xịn</i> hay <i>lởm</i>, mà còn cho
        chúng ta thấy những kỹ thuật đã được áp dụng như thế nào.`,
      },
      {
        p: `Một lập trình viên không có giác quan code sẽ không biết phải làm gì
        khi nhìn vào một đống code rối. Ngược lại, những người có giác quan
        code sẽ bắt đầu nhìn ra các cách để thay đổi nó. Giác quan code sẽ
        giúp lập trình viên chọn ra cách tốt nhất, và vạch ra con đường đúng
        đắn để hoàn thành công việc.`,
      },
      {
        p: `Tóm lại, một lập trình viên viết code “sạch đẹp” thật sự là một nghệ
        sĩ. Họ có thể tạo ra các hệ thống thân thiện chỉ từ một màn hình trống
        rỗng.`,
      },
    ],
  },
  {
    title: `Code sạch là cái chi chi?`,
    contents: [
      {
        p: `Có thể là có rất nhiều định nghĩa. Vì vậy, chúng tôi phỏng vấn một số
        lập trình viên nổi tiếng và giàu kinh nghiệm về khái niệm này:`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-1_6.png`),
          width: `15%`,
          align: `center`,
        },
      },
      {
        p: `<hr /><i>
        “Tôi thích code của tôi trông thanh lịch và hiệu quả. Sự logic nên
        được thể hiện rõ ràng để làm cho các lỗi khó lẫn trốn, sự phụ thuộc
        được giảm thiểu để dễ bảo trì, các lỗi được xử lý bằng các chiến
        lược rõ ràng, và hiệu năng thì gần như tối ưu để không lôi kéo người
        khác tạo nên code rối bằng những cách tối ưu hóa tạm bợ. Code sạch
        sẽ tạo nên những điều tuyệt vời”.
      </i>
      <br />
      <b>
        BJARNE STROUSTRUP – CHA ĐẺ CỦA NGÔN NGỮ C++, VÀ LÀ TÁC GIẢ CỦA QUYỂN
        THE C++ PROGRAMMING LANGUAGE
      </b><hr />`,
      },
      {
        p: ` Bjarne sử dụng từ <i>thanh lịch</i>. Nó khá chính xác. Từ điển trong
        Macbook của tôi giải thích về nó như sau: vẻ đẹp duyên dáng hoặc phong
        cách dễ chịu, đơn giản nhưng <i>làm hài lòng</i> mọi người. Hãy chú ý
        đến nội dung <i>làm hài lòng</i>. Rõ ràng Bjarne cho rằng code sạch sẽ
        dễ đọc hơn. Đọc nó sẽ làm cho bạn mỉm cười nhẹ nhàng như một chiếc hộp
        nhạc.`,
      },
      {
        p: `Bjarne cũng đề cập đến sự hiệu quả – hai lần. Không có gì bất ngờ từ
        người phát minh ra C++, nhưng tôi nghĩ còn nhiều điều hơn là mong muốn
        đạt được hiệu suất tuyệt đối. Các tài nguyên bị lãng phí, chuyện đó
        chẳng dễ chịu chút nào. Và bây giờ hãy để ý đến từ mà Bjarne dùng để
        miêu tả hậu quả – <i>lôi kéo</i>. Có một sự thật là, code lởm “thu
        hút” những đống code lởm khác. Khi ai đó thay đổi đống code đó, họ có
        xu hướng làm cho nó tệ hơn.`,
      },
      {
        p: `[…] `,
      },
      {
        p: `Bjarne cũng đề cập đến việc xử lý lỗi phải được thực hiện đầy đủ. Điều
        này tạo nên thói quen chú ý đến từng chi tiết nhỏ. Việc xử lý lỗi qua
        loa sẽ khiến các lập trình viên bỏ qua các chi tiết nhỏ: nguy cơ tràn
        bộ nhớ, hiện tượng tranh giành dữ liệu (race condition), hay đặt tên
        không phù hợp,…Vậy nên, việc code sạch sẽ tạo được tính kỹ lưỡng cho
        các lập trình viên.`,
      },
      {
        p: `Bjarne kết thúc cuộc phỏng vấn bằng khẳng định <i>code sạch sẽ tạo nên những điều tuyệt vời</i>. Không phải ngẫu
        nhiên mà tôi lại nói – những nguyên tắc về thiết kế phần mềm được cô
        đọng lại trong lời khuyên đơn giản này. Tác giả sau khi viết đã cố
        gắng truyền đạt tư tưởng này. Code rởm đã tồn tại đủ lâu, và không có
        lý do gì để giữ nó tiếp tục. Bây giờ, code sạch sẽ được tập trung phát
        triển. Mỗi hàm, mỗi lớp, mỗi mô-đun thể hiện sự độc lập, và không bị <i>ô nhiễm</i> bởi những thứ quanh nó.`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-1_7.png`),
          width: `15%`,
          align: `center`,
        },
      },
      {
        p: `<hr /><i>
        “Code sạch đơn giản và rõ ràng. Đọc nó giống như việc bạn đọc một
        đoạn văn xuôi. Code sạch sẽ thể hiện rõ ràng ý đồ của lập trình
        viên, đồng thời mô tả rõ sự trừu tượng và các dòng điều khiển đơn
        giản”
        <br />
        <b>
          GRADY BOOCH, TÁC GIẢ QUYỂN OBJECT ORIENTED ANALYSIS AND DESIGN
          WITH APPLICATIONS
        </b>
      </i><hr />`,
      },
      {
        p: `Grady đưa ra một vài luận điểm tương tự như Bjarne, nhưng ông ấy nhắc
        tới khía cạnh “dễ đọc”. Tôi đặc biệt thích quan điểm này của ông về
        “đọc code sạch như đọc một đoạn văn xuôi trôi chảy.” Hãy nhớ lại một
        cuốn sách hay mà bạn đã đọc. Nhớ lại cách mà từ ngữ biến mất và thay
        vào đó, hình ảnh hiện ra. Giống như xem một bộ phim phải không? Còn
        hơn thế nữa. Bạn thấy những nhân vật, bạn nghe thấy tiếng động, bạn
        cảm thấy xúc động và hài hước.`,
      },
      {
        p: `Đương nhiên đọc code sạch không hoàn toàn giống như đọc <i>Chúa tể của những chiếc nhẫn (Lord of the Rings)</i>. Nhưng đó là
        một phép ẩn dụ không tệ. Bởi cũng giống một cuốn tiểu thuyết hay, code
        sạch phải phơi bày rõ ràng những khúc mắc trong vấn đề cần giải quyết.
        Cần đưa những khúc mắc lên tới cao trào và rồi làm cho người đọc thốt
        lên: “À há, tất nhiên rồi!” khi thấy các vấn đề và sự khúc mắc được
        giải quyết bằng một giải pháp rõ ràng.`,
      },
      {
        p: `Tôi cảm thấy thú vị với phép chơi chữ nghịch hợp mà Grady sử dụng khi
        dùng cụm từ “trừu tượng hóa rõ ràng” (“crisp abstraction”). Dù theo
        nghĩa nào, từ “crisp” cũng gần như đồng nghĩa với “concrete” (cụ thể).
        Từ điển trong máy Macbook của tôi có những định nghĩa về crisp như
        sau: quyết đoán dứt khoát và xảy-ra-hiển-nhiên (matter-of-fact), không
        ngập ngừng và không có chi tiết thừa. Cho dù có những ý nghĩa chẳng
        liên quan đến nhau lắm, từ này vẫn mang đến một thông điệp mạnh mẽ.
        Code của chúng ta phải có tính xảy-ra-hiển-nhiên, chứ không phải là
        suy đoán. Nó chỉ gồm những gì thực sự cần thiết. Người đọc phải hiểu
        rõ điều chúng ta làm trong từng dòng code.`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-1_8.png`),
          width: `15%`,
          align: `center`,
        },
      },
      {
        p: `<hr />
        <i>
          “Code sạch có thể được đọc và phát triển thêm bởi những lập trình
          viên khác. Nó đã được kiểm tra, nó có những cái tên ý nghĩa, nó cho
          bạn thấy cách để làm việc. Nó giảm thiểu sự phụ thuộc giữa các đối
          tượng với những định nghĩa rõ ràng, và cung cấp các API cần thiết.
          Code nên được hiểu theo cách diễn đạt, không phải tất cả thông tin
          cần thiết đều có thể được thể hiện rõ ràng chỉ bằng code”.
        </i>
        <br />
        <b>
          DAVE THOMAS, NGƯỜI SÁNG LẬP OTI, GODFATHER OF THE ECLIPSE STRATEGY
        </b>
        <hr />`,
      },
      {
        p: `Dave có cùng đam mê với Grady về sự dễ đọc, nhưng với một bổ sung quan
        trọng. Dave khẳng định rằng code sạch giúp <i>người khác</i> dễ dàng
        cải tiến nó. Nghe có vẻ hiển nhiên, nhưng nó thực sự rất quan trọng.
        Dù sao thì vẫn có sự khác biệt giữa code <b>dễ đọc</b> và code <b>dễ thay đổi</b>.`,
      },
      {
        p: `Dave gắn liền sự sạch sẽ với các kiểm thử! Vào thời điểm mười năm
        trước việc này có thể làm nhiều người nhíu mày. Nhưng các nguyên tắc
        của phương pháp phát triển hướng kiểm thử (Test Driven Development) đã
        tác động sâu sắc tới toàn nghành công nghiệp phần mềm và trở thành một
        trong những nguyên tắc cơ bản nhất của chúng ta. Dave đã đúng. Code
        không có kiểm thử không thể gọi là sạch. Dù nó có thanh lịch cỡ nào,
        dễ dọc và dễ tiếp cận ra sao, nếu không có kiểm thử, nó không sạch.`,
      },
      {
        p: `Dave đã hai lần dùng từ tối thiểu. Rõ ràng ông coi trọng code nhỏ gọn
        hơn là code cồng kềnh. Thật vậy, đây là một điệp khúc phổ biến trong
        tất cả tài liệu phần mềm kể từ những ngày đầu tiên. Nhỏ hơn thì tốt
        hơn.`,
      },
      {
        p: `Dave cũng nhắc tới rằng code nên dễ đọc. Quan điểm này khá gần gũi với
        thuyết lập trình của Knuth. Nghĩa là code nên được viết ra với một
        hình thức dễ đọc cho con người.`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-1_9.png`),
          width: `15%`,
          align: `center`,
        },
      },
      {
        p: `<hr />
        “Tôi có thể liệt kê tất cả những phẩm chất mà tôi thấy trong code
        sạch, nhưng tất cả chúng được bao quát bởi một điều – code sạch trông
        như được viết bởi những người tận tâm. Dĩ nhiên, bạn cho rằng bạn sẽ
        làm nó tốt hơn. Điều đó đã được họ (những người tạo ra code sạch) nghĩ
        đến, và nếu bạn cố gắng “rặn” ra những cải tiến, nó sẽ đưa bạn về lại
        vị trí ban đầu. Ngồi xuống và tôn trọng những dòng code mà ai đó đã để
        lại cho bạn – những dòng code được viết bởi một người đầy tâm huyết
        với nghề”.
        <br />
        <b>
          MICHAEL FEATHERS, TÁC GIẢ QUYỂN WORKING EFFECTIVELY WITH LEGACY CODE
        </b>
        <hr />`,
      },
      {
        p: `Một từ thôi: “có tâm”. Đó thực sự là chủ đề của cuốn sách này. Còn phụ
        đề thích hợp sẽ là “Để tâm đến code như thế nào”.`,
      },
      {
        p: `Michael nhấn mạnh nó đầu tiên. Code sạch là code được để tâm tới. Một
        ai đó đã phải mất thời gian để giữ cho nó đơn giản và ngăn nắp. Họ đầu
        tư một sự chú ý thích đáng tới các chi tiết. Họ để tâm tới nó.`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-1_10.png`),
          width: `15%`,
          align: `center`,
        },
      },
      {
        p: `Ron bắt đầu sự nghiệp lập trình của mình bằng ngôn ngữ Fortran tại Bộ
        tư lệnh Không quân Chiến lược và đã viết mã nguồn trong hầu hết các
        ngôn ngữ và trên gần như tất cả các loại máy. Chúng ta nên xem xét ý
        kiến của ông một cách cẩn thận.`,
      },
      {
        p: `Trong những năm gần đây, tôi bắt đầu làm theo, gần như đầy đủ, những
        quy tắc của Beck về code đơn giản. Xếp thứ tự theo mức độ quan trọng
        dưới đây:
        <br />
        Chạy tất cả các kiểm thử; <br /> Không có sự trùng lặp;
        <br /> Diễn đạt tất cả các ý tưởng thiết kế trong hệ thống;
        <br /> Có tối thiểu số lượng các lớp, phương thức, hàm, và những thứ
        tương tự.`,
      },
      {
        p: `Trong những quy tắc này, tôi quan tâm chủ yếu tới sự trùng lặp. Khi
        một điều được thực hiện nhiều lần, đó là một dấu hiệu cho thấy có một
        ý tưởng của chúng ta đã không được diễn tả tốt trong code. Tôi cố gắng
        tìm ra nó là gì. Sau đó tôi cố gắng thể hiện ý tưởng đó rõ ràng hơn.`,
      },
      {
        p: `Với tôi, tính rõ nghĩa bao gồm việc đặt tên có ngữ nghĩa, và tôi
        thường phải đổi tên nhiều lần cho tới khi vừa ý. Với các công cụ viết
        code hiện đại như là Eclipse, đổi tên không hề phức tạp, vì vậy đổi
        tên không phải là vấn đề lớn với tôi. Tuy nhiên, tính rõ nghĩa không
        chỉ nằm trong những cái tên. Tôi cũng xem xét liệu có đối tượng hay
        phương thức nào làm nhiều hơn một việc hay không. Nếu nó là một đối
        tượng, có thể sẽ cần phải chia nó thành hai hoặc nhiều đối tượng. Nếu
        nó là phương thức, tôi thường dùng kỹ thuật tái cấu trúc (Extract
        Method) với nó, kết quả là tôi có một phương thức diễn đạt rõ ràng nó
        làm gì, và một số phương thức con diễn đạt việc đó được làm như thế
        nào.`,
      },
      {
        p: `Sự trùng lặp và tính rõ nghĩa đã chiếm rất nhiều thời gian của tôi
        trong định nghĩa về code sạch, và cải tiến code dở với hai điều đó
        thôi cũng tạo nên sự khác biệt rất lớn. Tuy nhiên, vẫn còn một điều
        nữa mà tôi nhận thức được, nó hơi khó diễn đạt hơn một chút.`,
      },
      {
        p: `Sau nhiều năm làm công việc này, tôi nhận thấy rằng có vẻ mọi chương
        trình điều được tạo thành từ những yếu tố rất giống nhau. Ví dụ như
        “tìm thứ gì đó trong một bộ sưu tập (collection)”. Cho dù cái chúng ta
        có là một cơ sở dữ liệu về hồ sơ nhân viên, hay một bảng băm (hashmap)
        gồm khóa và giá trị, hoặc một mảng các phần tử loại gì đó, thì chúng
        ta cũng đều nảy sinh nhu cầu tìm lấy một phần tử trong đó. Khi biết
        được điều này, tôi thường đưa công việc cụ thể vào một lớp hoặc phương
        thức trừu tượng. Việc này cho tôi một vài lợi thế thú vị.`,
      },
      {
        p: `Tôi hoàn toàn có thể triển khai chức năng một cách đơn giản, một bảng
        băm (hashmap) chẳng hạn, nhưng giờ đây tất cả các tham chiếu đến việc
        tìm kiếm đó đều được gói lại trong lớp trừu tượng hóa nhỏ bé của tôi,
        tôi có thể thay đổi cách thức tìm kiếm bất cứ lúc nào tôi muốn. Và tôi
        có thể đi tiếp nhanh hơn trong khi vẫn có thể thay đổi nó sau.`,
      },
      {
        p: `Thêm vào đó, việc kết hợp trừu tượng hóa thường giúp tôi chú ý tới
        việc gì đang <i>thực sự</i> diễn ra, và giữ cho tôi khỏi sa vào việc
        triển khai những cách làm phức tạp, trong khi tôi chỉ cần vài cách cực
        kỳ đơn giản để tìm kiếm điều tôi muốn.`,
      },
      {
        p: `Giảm thiểu trùng lặp, cực kỳ rõ nghĩa, và sớm xây dựng những trừu
        tượng hóa nhỏ. Với tôi, đó là những thứ làm nên code sạch.`,
      },
      {
        p: ``,
      },
      {
        p: ``,
      },
    ],
  },
];
