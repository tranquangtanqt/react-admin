import IContent from 'utils/interface';

export const chapter3: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-3_1.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
    ],
  },
  {
    title: '',
    contents: [
      {
        p: `Trong những thế hệ lập trình trước đây, chúng tôi soạn thảo các hệ
        thống câu lệnh và các chương trình con. Sau đó, trong thời đại của 
        <a
          href="https://vi.wikipedia.org/wiki/Fortran"
          target="_blank"
          rel="noreferrer noopener"
        >
          Fortran 
        </a>
        và 
        <a
          href="https://en.wikipedia.org/wiki/PL/I"
          target="_blank"
          rel="noreferrer noopener"
        >
          PL/1
        </a>
        , chúng tôi soạn thảo các hệ thống chương trình, chương trình con, và
        các hàm. Ngày nay, chỉ còn các hàm là tồn tại. Các hàm là những viên
        gạch xây dựng nên chương trình. Và 
        <strong>chương 3: Cách viết hàm</strong> này sẽ giúp tạo nên những
        viên gạch chắc chắn cho chương trình của bạn.`,
      },
      {
        p: `Hãy xem xét code trong <strong>Listing 3-1</strong>. Thật khó để tìm
        thấy một hàm dài. Nhưng sau một lúc tìm kiếm, tôi đã thấy nó. Nó không
        chỉ dài, mà còn có code trùng lặp (duplicate), nhiều thứ dư thừa, các
        kiểu dữ liệu và API lạ,… Xem bạn phải sử dụng bao nhiêu giác quan
        trong ba phút tới để hiểu được nó:`,
      },
      {
        p: `Listing 3-1: <strong>HtmlUtil.java (FitNesse 20070619)</strong>`,
      },
      {
        code: {
          src: `public static String testableHtml(
PageData pageData,
boolean includeSuiteSetup) 
throws Exception {
    WikiPage wikiPage = pageData.getWikiPage();
    StringBuffer buffer = new StringBuffer();
    if (pageData.hasAttribute("Test")) {
        if (includeSuiteSetup) {
            WikiPage suiteSetup =
                    PageCrawlerImpl.getInheritedPage(
                            SuiteResponder.SUITE_SETUP_NAME, wikiPage);
            if (suiteSetup != null) {
                WikiPagePath pagePath =
                    suiteSetup.getPageCrawler().getFullPath(suiteSetup);
                String pagePathName = PathParser.render(pagePath);
                buffer.append("!include -setup .")
                    .append(pagePathName)
                    .append("\n");
            }
        }
        WikiPage setup =
            PageCrawlerImpl.getInheritedPage("SetUp", wikiPage);
        if (setup != null) {
            WikiPagePath setupPath =
                wikiPage.getPageCrawler().getFullPath(setup);
            String setupPathName = PathParser.render(setupPath);
            buffer.append("!include -setup .")
                .append(setupPathName)
                .append("\n");
        }
    }
    buffer.append(pageData.getContent());
    if (pageData.hasAttribute("Test")) {
        WikiPage teardown =
        PageCrawlerImpl.getInheritedPage("TearDown", wikiPage);
        if (teardown != null) {
            WikiPagePath tearDownPath =
                wikiPage.getPageCrawler().getFullPath(teardown);
            String tearDownPathName = PathParser.render(tearDownPath);
            buffer.append("\n")
                .append("!include -teardown .")
                .append(tearDownPathName)
                .append("\n");
        }
        if (includeSuiteSetup) {
            WikiPage suiteTeardown =
                PageCrawlerImpl.getInheritedPage(
                SuiteResponder.SUITE_TEARDOWN_NAME,
                wikiPage);
            if (suiteTeardown != null) {
                WikiPagePath pagePath =
                    suiteTeardown.getPageCrawler()
                    .getFullPath(suiteTeardown);
                String pagePathName = PathParser.render(pagePath);
                buffer.append("!include -teardown .")
                    .append(pagePathName)
                    .append("\n");
            }
        }
    }
    pageData.setContent(buffer.toString());
    return pageData.getHtml();
}`,
          language: 'java',
        },
      },
      {
        p: `Bạn có hiểu hàm trên sau ba phút đọc không? Chắc chắn là không. Có quá
        nhiều thứ xảy ra với nhiều mức độ trừu tượng khác nhau. Các chuỗi kỳ
        lạ, các lời gọi hàm trộn lẫn cùng các câu lệnh if lồng nhau,…`,
      },
      {
        p: `Tuy nhiên, chỉ với một vài phép rút gọn đơn giản, đặt lại vài cái tên,
        và một chút tái cơ cấu lại hàm, tôi đã có thể nắm bắt được mục đích
        của hàm này trong chín dòng lệnh. Thử sức lại với nó trong ba phút
        tiếp theo nào:`,
      },
      {
        p: `Listing 3-2: <strong>HtmlUtil.java (refactored)</strong>`,
      },
      {
        code: {
          src: `public static String renderPageWithSetupsAndTeardowns(
PageData pageData, boolean isSuite
) throws Exception {
    boolean isTestPage = pageData.hasAttribute("Test");
    if (isTestPage) {
        WikiPage testPage = pageData.getWikiPage();
        StringBuffer newPageContent = new StringBuffer();
        includeSetupPages(testPage, newPageContent, isSuite);
        newPageContent.append(pageData.getContent());
        includeTeardownPages(testPage, newPageContent, isSuite);
        pageData.setContent(newPageContent.toString());
    }
    return pageData.getHtml();
}`,
          language: 'java',
        },
      },
      {
        p: `Trừ khi bạn là học viên của FitNesse, nếu không bạn sẽ không hiểu hết
        hàm này. Nhưng không sao, bạn có thể hiểu rằng hàm này thực hiện một
        số việc thiết lập và chia nhỏ trang, sao đó hiển thị chúng dưới dạng
        HTML. Nếu đã quen với JUnit, bạn có thể nhận ra hàm này thuộc về một
        framework nào đó. Và, dĩ nhiên, những gì tôi vừa nói là hoàn toàn
        chính xác. Việc dự đoán chức năng của hàm từ Listing 3-2 khá dễ dàng,
        nhưng trong Listing 3-1 điều đó gần như là không thể.`,
      },
      {
        p: `Vậy điều gì làm cho hàm trong Listing 3-2 dễ đọc và dễ hiểu? Bằng cách
        nào chúng ta có thể tạo nên một hàm thể hiện được chức năng của nó?
        Những đặc tính nào cho phép một người đọc bình thường hiểu được chương
        trình mà họ đang cùng làm việc?`,
      },
    ],
  },
  {
    title: 'Nhỏ!!!',
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-3_2.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        p: `Nguyên tắc đầu tiên của hàm là chúng <strong>phải nhỏ</strong>. Nguyên
        tắc thứ hai là chúng <strong>phải nhỏ hơn nữa</strong>. Đây không phải
        là một khẳng định mà tôi có thể chứng minh. Tôi không thể cung cấp bất
        kỳ tài liệu hay nghiên cứu nào khẳng định rằng hàm nhỏ là tốt hơn.
        Những gì tôi có thể nói với bạn là trong gần bốn thập kỷ, tôi đã viết
        các hàm với nhiều kích cỡ khác nhau. Tôi đã viết 3000 dòng lệnh ghê
        tởm, tôi đã viết các hàm trong phạm vi từ 100 đến 300 dòng, và tôi đã
        viết các hàm dài từ 20 đến 30 dòng. Kinh nghiệm đã dạy tôi một điều
        quý giá rằng, các hàm nên rất nhỏ.`,
      },
      {
        p: `Vào những năm 80, chúng tôi cho rằng một hàm không nên lớn hơn một màn
        hình. Dĩ nhiên, chúng tôi nói điều đó khi các màn hình VT100 chỉ có 24
        dòng cùng 80 cột, và 4 dòng đầu thì được dùng cho mục đích quản trị.`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-3_3.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        p: `<p class='text-center'>
        <small>
          <b>Màn hình VT100</b>
        </small>
      </p>`,
      },
      {
        p: `Ngày nay, với một phông chữ thích hợp và một màn hình xịn, bạn có thể
        phủ đến 150 ký tự cho 100 dòng hoặc nhiều hơn trên một màn hình. Các
        dòng code không nên dài quá 150 ký tự. Các hàm không nên “chạm nóc”
        100 dòng, và độ dài thích hợp nhất dành cho hàm là không quá 20 dòng
        lệnh.`,
      },
      {
        p: `Vậy thu gọn một hàm bằng cách nào? Năm 1999 tôi có đến thăm 
        <a
          href="https://en.wikipedia.org/wiki/Kent_Beck"
          target="_blank"
          rel="noreferrer noopener"
        >
          Kent Beck
        </a> 
        tại nhà của ông ở Oregon. Chúng tôi ngồi xuống và cùng nhau viết một
        số chương trình nhỏ. Ông ấy đã cho tôi xem một chương trình nhỏ được
        viết bằng Java/Swing mà ông ấy gọi là Sparkle (Tia Sáng). Nó tạo ra
        một hiệu ứng hình ảnh trên màn hình rất giống với cây đũa thần của các
        bà tiên đỡ đầu. Khi bạn di chuyển chuột, các tia sáng lấp lánh sẽ rơi
        từ con trỏ chuột xuống phía dưới, cứ như bị lực hấp dẫn kéo xuống vậy.
        Khi Kent cho tôi xem mã nguồn, tôi đã bị ấn tượng bởi độ nhỏ gọn của
        các hàm […]. Mọi hàm trong chương trình này chỉ dài hai, ba hoặc bốn
        dòng. Mỗi hàm đều rõ ràng. Mỗi hàm kể một câu chuyện. Và mỗi hàm dẫn
        bạn đến hàm tiếp theo hấp dẫn hơn. Đó là cách hàm của bạn trở nên ngắn
        gọn.`,
      },
      {
        p: `Hàm của bạn sẽ ngắn như thế nào? Chúng thường phải ngắn hơn 
        <strong>Listing 3-2</strong>! Thật vậy, <strong>Listing 3-2</strong> 
        thực sự nên được rút gọn thành <strong>Listing 3-3</strong>.`,
      },
      {
        p: `Listing 3-3: <strong>HtmlUtil.java (chỉnh sửa lại)</strong>`,
      },
      {
        code: {
          src: `public static String renderPageWithSetupsAndTeardowns(
PageData pageData, boolean isSuite) throws Exception {
    if (isTestPage(pageData))
        includeSetupAndTeardownPages(pageData, isSuite);
    return pageData.getHtml();
}`,
          language: 'java',
        },
      },
    ],
  },
  {
    title: 'CÁC KHỐI LỆNH VÀ THỤT DÒNG',
    contents: [
      {
        p: `Điều này có nghĩa là các khối lệnh bên trong câu lệnh 
        <em>
          <strong>if, else, while,…</strong>
        </em>
        phải dài một dòng. Và dòng đó nên là một lời gọi hàm. Điều này không
        chỉ giữ các hàm kèm theo nhỏ mà còn bổ sung thêm giá trị tài liệu cho
        code của bạn, vì các hàm được gọi có thể có một cái tên thể hiện được
        mục đích của nó.`,
      },
      {
        p: `Điều này cũng có nghĩa các hàm không nên được thiết kế lớn để chứa các
        cấu trúc lồng nhau. Do đó, lời gọi hàm không nên thụt lề quá mức hai.
        Điều này, dĩ nhiên là làm cho các hàm dễ đọc và dễ viết hơn.`,
      },
    ],
  },
  {
    title: 'Thực hiện MỘT việc',
    contents: [
      {
        p: `Rõ ràng là <strong>Listing 3-1</strong> đang làm nhiều hơn một việc.
        Nó tạo bộ đệm, tìm load trang, tìm kiếm các trang được kế thừa, hiển
        thị đường dẫn, thêm chuỗi phức tạp và tạo HTML,…. 
        <strong>Listing 3-1</strong> bận rộn làm nhiều việc khác nhau. Mặt
        khác, <strong>Listing 3-3</strong> làm một việc đơn giản. Nó tạo các
        thiết lập và hiển thị nội dung vào các trang thử nghiệm (TestPage).`,
      },
      {
        p: `Lời khuyên dưới đây đã xuất hiện nhiều lần, dưới dạng này hoặc dạng
        khác trong hơn 30 năm qua:`,
      },
      {
        p: `<em>“HÀM CHỈ NÊN THỰC HIỆN MỘT VIỆC. CHÚNG NÊN LÀM TỐT VIỆC ĐÓ,</em> 
        <em>VÀ CHỈ LÀM DUY NHẤT VIỆC ĐÓ”</em>`,
      },
      {
        p: `Vấn đề là, chúng ta khó biết “một việc” ở đây là việc gì. 
        <strong>Listing 3-3</strong> có làm một việc không? Thật dễ để chỉ ra
        nó đang làm 3 việc:

      <ol type="1">
        <li>
          Xác định đây có phải là trang thử nghiệm (
          <strong>isTestPage</strong>) hay không
        </li>
        <li>Nếu phải, nạp vào các cài đặt và tái thiết lập nó</li>
        <li>Hiển thị trang bằng HTML</li>
      </ol>`,
      },
      {
        p: ` Vậy, cái gì đây? Hàm đang thực hiện một việc hay ba việc? […] Chúng ta
        có thể mô tả hàm bằng cách xem nó như một đoạn <strong>TO </strong>
        ngắn (Ngôn ngữ 
        <strong>
          <a
            href="https://en.wikipedia.org/wiki/Logo_(programming_language)"
            target="_blank"
            rel="noreferrer noopener"
          >
            LOGO 
          </a>
        </strong>
        sử dụng từ khóa <strong>TO </strong>giống như cách 
        <strong>Ruby </strong>và <strong>Python </strong>sử dụng 
        <strong>def</strong>. Vì vậy, mọi hàm đều bắt đầu bằng từ 
        <strong>TO</strong>. Điều này tạo nên một hiệu ứng thú vị trên các hàm
        được thiết kế):`,
      },
      {
        p: `<strong>TO RenderPageWithSetupsAndTeardowns </strong>(ĐỂ hiển thị
          trang với các cài đặt và tái nạp), chúng tôi kiểm tra xem trang có
          phải là trang thử nghiệm hay không và nếu có, chúng tôi sẽ đưa vào các
          cài đặt và tái thiết lập nó. Sau đó, chúng tôi sẽ hiển thị trang bằng
          HTML.`,
      },
      {
        p: `Nếu hàm thực hiện các chức năng thấp hơn tên của hàm, thì hàm đó vẫn
        đang làm một việc. Sau tất cả, lý do chúng tôi viết các hàm là để phân
        tích một khái niệm lớn thành các khái niệm nhỏ hơn (nói cách khác, là
        phân tích tên hàm thành các tên ở mức độ thấp hơn).`,
      },
      {
        p: `Rõ ràng là <strong>Listing 3-1</strong> gồm nhiều chức năng với nhiều
        mức độ khác nhau, và hiển nhiên là nó đang làm nhiều hơn một việc.
        Ngay cả <strong>Listing 3-2</strong> cũng có hai mức độ, và đã được
        chứng minh bằng cách thu gọn nó. Nhưng sẽ rất khó để rút gọn 
        <strong>Listing 3-3</strong>. Chúng ta có thể trích xuất câu lệnh 
        <strong>if</strong> thành một hàm có tên 
        <strong>includeSetupsAndTeardownsIfTestPage</strong>, nhưng điều đó
        chỉ đơn giản là mang code đến nơi khác mà không thay đổi mức độ trừu
        tượng của nó.`,
      },
      {
        p: `Vì vậy, một cách khác để biết hàm đang làm nhiều hơn “một việc” là khi
        bạn có thể trích xuất một hàm khác từ nó, nhưng với một cái tên khác
        so với chức năng của nó ở trong hàm.`,
      },
      {
        p: `[…]`,
      },
    ],
  },
  {
    title: 'Mỗi hàm là một cấp độ trừu tượng',
    contents: [
      {
        p: `Để đảm bảo các hàm của chúng ta đang thực hiện “một việc”, chúng ta
        cần chắc chắn rằng các câu lệnh trong hàm của chúng ta đều ở cùng cấp
        độ trừu tượng. Hãy xem cách <strong>Listing 3-1</strong> vi phạm quy
        tắc này. Có những khái niệm trong đó có mức trừu tượng rất cao, chẳng
        hạn như <strong>getHtml();</strong> những thứ khác ở mức trừu tượng
        trung gian, chẳng hạn như:
        <br />
        <strong>String pagePathName = PathParser.render (pagePath); </strong>
        và những người khác có mức độ thấp đáng kể, chẳng hạn như:
        <strong> .append(“\\n”)</strong>.`,
      },
      {
        p: ` Việc trộn lẫn các cấp độ trừu tượng với nhau trong một hàm sẽ luôn gây
        ra những hiểu lầm cho người đọc. […]`,
      },
    ],
  },
  {
    title: 'Đọc code từ trên xuống dưới: Nguyên tắc Stepdown',
    contents: [
      {
        p: `Chúng tôi muốn code được đọc tuần tự từ trên xuống. Chúng tôi muốn mọi
        hàm được theo sau bởi các hàm có cấp độ trừu tượng lớn hơn để chúng
        tôi có thể đọc chương trình. Và khi chúng tôi xem xét một danh sách
        các khai báo hàm, mức độ trừu tượng của chúng phải được giảm dần. Tôi
        gọi đó là nguyên tắc Stepdown (tạm dịch: nguyên tắc ruộng bậc thang).`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-3_4.jpg`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        p: `Nói cách khác, chúng tôi muốn đọc chương trình như thể đọc một bài văn
        có nhiều đoạn. Mỗi phần mô tả một cấp độ trừu tượng hiện tại và liên
        kết tới các đoạn văn tiếp theo, với cấp độ trừu tượng tiếp theo.`,
      },
      {
        p: `<blockquote class="wp-block-quote">
        <p>
          <em>
            To include the setups and teardowns, we include setups, then we
            include the test page content, and then we include the teardowns.
          </em>
        </p>
        <p>
          <em>
            To include the setups, we include the suite setup if this is a
            suite, then we include the regular setup.
          </em>
        </p>
        <p>
          <em>
            To include the suite setup, we search the parent hierarchy for the
            “SuiteSetUp” page and add an include statement with the path of
            that page.
          </em>
        </p>
        <p>
          <em>To search the parent. . .</em>
        </p>
      </blockquote>`,
      },
      {
        p: `Sự thật là rất khó để các lập trình viên học cách tuân theo nguyên tắc
        này và viết các hàm ở một mức độ trừu tượng duy nhất. Nhưng học thủ
        thuật này cũng rất quan trọng. Nó là chìa khóa để đảm bảo các hàm ngắn
        gọn và giữ cho các chúng làm “một việc”. Làm cho code của bạn đọc như
        một đoạn văn là kỹ thuật hiệu quả để duy trì sự đồng nhất của các cấp
        trừu tượng.`,
      },
      {
        p: `[…]`,
      },
    ],
  },
  {
    title: 'Câu lệnh switch',
    contents: [
      {
        p: `Thật khó để tạo nên một câu lệnh switch nhỏ (và cả chuỗi lệnh
          if/else). Ngay cả câu lệnh switch chỉ có 2 trường hợp. Và cũng rất khó
          để tạo ra một câu lệnh switch mà chỉ làm “<strong>một việc</strong>”.
          Bởi bản chất của chúng, các câu lệnh switch luôn thực hiện 
          <strong>N</strong> việc. Rất tiếc là, không phải lúc nào chúng tôi
          cũng tránh được chúng, nhưng chúng tôi có thể đảm bảo rằng các câu
          lệnh switch được giấu trong một lớp cơ sở và không bao giờ được lặp
          lại. Chúng tôi làm việc này, dĩ nhiên, bằng tính chất đa hình.`,
      },
      {
        p: `Xem xét Listing 3-4 dưới đây. Nó hiển thị hoạt động dựa vào loại nhân
        viên:`,
      },
      {
        p: `Listing 3-4: <strong>Payroll.java</strong>`,
      },
      {
        code: {
          src: `public Money calculatePay(Employee e)
throws InvalidEmployeeType {
    switch (e.type) {
        case COMMISSIONED:
            return calculateCommissionedPay(e);
        case HOURLY:
            return calculateHourlyPay(e);
        case SALARIED:
            return calculateSalariedPay(e);
        default:
            throw new InvalidEmployeeType(e.type);
    }
}`,
          language: 'java',
        },
      },
      {
        p: `<p>
        Có một số vấn đề với hàm này. Đầu tiên, nó lớn, và khi có loại nhân
        viên mới được thêm vào, nó sẽ to ra. Thứ hai, rất rõ ràng, nó đang làm
        nhiều hơn “một việc”. Thứ ba, nó vi phạm Nguyên tắc Đơn nhiệm (Single
        Responsibility Principle – SRP) vì có nhiều lý do để nó thay đổi. Thứ
        tư, nó vi phạm Nguyên tắc Đóng &amp; mở (Open Closed Principle – OCP)
        vì nó phải thay đổi khi có loại nhân viên khác được thêm vào. 
      </p>`,
      },
      {
        p: `<blockquote class="wp-block-quote">
        <p>
          Nguyên tắc Đơn nhiệm: Mỗi lớp chỉ nên chịu trách nhiệm về một nhiệm
          vụ cụ thể nào đó mà thôi. 
        </p>
        <p>
          Nguyên tắc Đóng &amp; mở: Chúng ta nên hạn chế việc chỉnh sửa bên
          trong một Class hoặc Module có sẵn, thay vào đó hãy xem xét mở rộng
          chúng.
        </p>
      </blockquote>`,
      },
      {
        p: `Nhưng vấn đề tồi tệ nhất của hàm này là có vô hạn các hàm khác có cùng
        cấu trúc. Ví dụ, chúng ta có thể có:`,
      },
      {
        code: {
          src: `isPayday(Employee e, Date date),`,
          language: 'java',
        },
      },
      {
        p: `hoặc`,
      },
      {
        code: {
          src: `deliverPay(Employee e, Money pay),          `,
          language: 'java',
        },
      },
      {
        p: `hoặc một loạt những hàm khác. Tất cả đều có cấu trúc giống nhau!`,
      },
      {
        p: `Giải pháp cho vấn đề này (xem Listing 3-5) là giấu câu lệnh 
        <strong>switch </strong>trong một
        <br />
        lớp cơ sở của ABSTRACT FACTORY (tìm hiểu ABSTRACT FACTORY tại: 
        <a href="https://toihocdesignpattern.com/chuong-4-factory-pattern-va-abstract-factory-pattern-phan-1.html">
          https://toihocdesignpattern.com/chuong-4-factory-pattern-va-abstract-factory-pattern-phan-1.html
        </a>
        ), và không bao giờ để người khác trông thấy nó. ABSTRACT FACTORY sẽ
        sử dụng câu lệnh <strong>switch</strong> để tạo ra các trường hợp
        thích hợp của các dẫn xuất (lớp con) của <strong>Employee</strong>, và
        các hàm khác như <strong>calculatePay</strong>, 
        <strong>isPayday</strong>, và <strong>deliverPay</strong>, sẽ được gọi
        bằng tính đa hình thông qua 
        <strong>
          <em>interface</em> 
        </strong>
        của <strong>Employee</strong>.`,
      },
      {
        p: ` Listing 3-5: <strong>Employee and Factory</strong>`,
      },
      {
        code: {
          src: `public abstract class Employee {
    public abstract boolean isPayday();
    public abstract Money calculatePay();
    public abstract void deliverPay(Money pay);
}
/*...*/
public interface EmployeeFactory {
    public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType;
}
/*...*/
public class EmployeeFactoryImpl implements EmployeeFactory {
    public Employee makeEmployee(EmployeeRecord r) throws   InvalidEmployeeType {
        switch (r.type) {
            case COMMISSIONED:
                return new CommissionedEmployee(r) ;
            case HOURLY:
                return new HourlyEmployee(r);
            case SALARIED:
                return new SalariedEmploye(r);
            default:
                throw new InvalidEmployeeType(r.type);
        }
    }
}`,
          language: 'java',
        },
      },
      {
        p: `Nguyên tắc chung của tôi dành cho các câu lệnh 
        <strong>switch </strong>là chúng có thể được “tha thứ” nếu chúng chỉ
        xuất hiện một lần, được sử dụng để tạo các đối tượng đa hình, và được
        ẩn đằng sau bằng tính kế thừa để phần còn lại của hệ thống không nhìn
        thấy chúng. Tất nhiên, nguyên tắc cũng chỉ là nguyên tắc, và trong
        nhiều trường hợp tôi đã vi phạm một hoặc nhiều phần của nguyên tắc đó.`,
      },
    ],
  },
  {
    title: 'Dùng tên có tính mô tả',
    contents: [
      {
        p: `Trong Listing 3-7, tôi đã thay đổi tên hàm ví dụ từ 
        <strong>testableHtml </strong>thành 
        <strong>SetupTeardownIncluder.render</strong>. Đây là một tên tốt hơn
        nhiều vì nó mô tả được chức năng của hàm đó. Tôi cũng đã cung cấp cho
        từng phương thức riêng (private method) một tên mô tả như 
        <strong>isTestable </strong>hoặc 
        <strong>includeSetupAndTeardownPages</strong>. Thật khó để xem thường
        giá trị của những cái tên tốt. Hãy nhớ đến nguyên tắc của Ward: 
        <em>
          “Bạn biết bạn đang làm việc cùng code sạch là khi việc đọc code hóa
          ra yomost hơn những gì bạn mong đợi”.
        </em> 
        Một nửa chặn đường để đạt được nguyên tắc đó là chọn được một cái tên
        “xịn” cho những hàm làm “một việc”. Hàm càng nhỏ và càng cô đặc thì
        càng dễ chọn tên mô tả cho nó hơn.`,
      },
      {
        p: `Đừng ngại đặt tên dài. Một tên dài nhưng mô tả đầy đủ chức năng của
        hàm luôn tốt hơn những cái tên ngắn. Và một tên dài thì tốt hơn một
        ghi chú (comment) dài. Dùng một nguyên tắc đặt tên cho phép dễ đọc
        nhiều từ trong tên hàm, và những từ đó sẽ cho bạn biết hàm đó hoạt
        động ra sao.`,
      },
      {
        p: `Đừng ngại dành thời gian cho việc chọn tên. Thật vậy, bạn nên thử một
        số tên khác nhau và đọc lại code ngay sau đó. Các IDE hiện đại như
        Eclipse hay IntelliJ làm cho việc đổi tên trở nên dễ dàng hơn rất
        nhiều. Sử dụng một trong những IDE đó và thử đặt các tên khác nhau cho
        đến khi bạn tìm thấy một cái tên có tính mô tả.`,
      },
      {
        p: `Chọn một cái tên có tính mô tả tốt sẽ giúp bạn vẽ lại thiết kế của
        mô-đun đó vào não, và việc cải thiện nó sẽ đơn giản hơn. Nhưng điều đó
        không có nghĩa là bạn sẽ bất chấp tất cả để “săn” được một cái tên tốt
        hơn để thay thế tên hiện tại.`,
      },
      {
        p: `[…]`,
      },
    ],
  },
  {
    title: 'Đối số của hàm',
    contents: [
      {
        p: `Số lượng đối số lý tưởng cho một hàm là không (niladic), tiếp đến là
        một (monadic), sau đó là hai (dyadic). Nên tránh trường hợp ba đối số
        (triadic) nếu có thể. Các hàm có nhiều hơn ba đối số (polyadic) chỉ
        cần thiết trong các trường hợp đặc biệt, và sau đó nên hạn chế sử dụng
        chúng đến mức thấp nhất.`,
      },
      {
        p: `Các đối số có những vấn đề của nó. Nó làm mất nhiều khái niệm của
        chương trình khi xuất hiện. Đó là lý do tại sao tôi đã loại bỏ gần như
        tất cả chúng ở ví dụ trên. Hãy xem xét <strong>StringBuffer </strong>
        trong ví dụ: Chúng tôi có thể đưa nó vào lời gọi hàm để tạo đối số
        thay vì để nó làm một biến thể hiện thông thường, nhưng sau đó độc giả
        của chúng ta sẽ phải “tự thông não” mỗi khi họ nhìn thấy nó. Khi bạn
        đọc một câu chuyện được viết nên bởi mô-đun,
        <strong> includeSetupPage()</strong> sẽ dễ hiểu hơn 
        <strong>includeSetupPageInto(newPageContent)</strong>. Đối số có mức
        trừu tượng khác tên hàm và buộc bạn phải để tâm đến nó, mặc dù nó
        không quá quan trọng ở thời điểm đó.`,
      },
      {
        p: `[…]`,
      },
      {
        p: `Các đối số đầu ra khó hiểu hơn các đối số đầu vào. Khi chúng ta đọc
        một hàm, chúng ta quen với ý tưởng thông tin đi vào hàm thông qua các
        đối số, và kết quả nhận được thông qua giá trị trả về. Chúng tôi
        thường không nghỉ rằng thông tin trả về được truyền qua các đối số. Vì
        vậy, các đối số đầu ra thường khiến chúng tôi bất ngờ.`,
      },
      {
        p: `Hàm có một đối số đầu vào sẽ là tốt “đứng thứ 2” (tốt nhất vẫn là hàm
          không có đối số). 
          <strong>SetupTeardownIncluder.render(pageData)</strong> khá dễ hiểu.
          Rõ ràng là chúng ta sẽ kết xuất (render) dữ liệu của đối tượng 
          <strong>pageData</strong>.`,
      },
      {
        p: `<h6>
        <b>Hình thức chung của hàm một đối số (monadic)</b>
      </h6>`,
      },
      {
        p: `Có hai lý do phổ biến để bạn truyền một đối số vào hàm. Bạn có thể đặt
        một câu hỏi đúng – sai cho đối số đó, như 
        <strong>boolean fileExists(“MyFile”)</strong>. Hoặc bạn có thể thao
        tác trên đối số đó, biến nó thành một thứ gì khác và trả lại nó. Ví
        dụ, <strong>InputStream fileOpen(“MyFile”) </strong>biến đổi một chuỗi
        tên tệp thành một giá trị <strong>InputStream</strong>. Người đọc
        thường chỉ mong đợi hai cách này khi nhìn vào hàm có một đối số. Bạn
        nên chọn tên hàm thấy được sự phân biệt rõ ràng và luôn sử dụng hai
        hình thức này trong cùng một ngữ cảnh.`,
      },
      {
        p: `Một dạng ít phổ biến hơn nhưng vẫn rất hữu ít dành cho hàm có một đối
        số, đó là các sự kiện (event). Các hàm dạng này có một đối số đầu vào
        nhưng không có đối số đầu ra. Toàn bộ chương trình được hiểu là để
        thông dịch các lời gọi hàm như một sự kiện, và sử dụng các đối số để
        thay đổi trạng thái của hệ thống, ví dụ, void 
        <strong>passwordAttemptFailedNtimes(int attempts)</strong>. Hãy cẩn
        thận với các hàm kiểu này, nó phải cực rõ ràng để người đọc biết đây
        là một sự kiện, nhớ chọn tên và ngữ cảnh một cách cẩn thận.`,
      },
      {
        p: `Cố gắng tránh bất kỳ hàm một đối số nào không tuân theo các mẫu trên,
        ví dụ:
        <br />
        void<strong> includeSetupPageInto(StringBuffer pageText)</strong>. Sử
        dụng một đối số đầu ra thay vì một giá trị trả về khá là khó hiểu. Nếu
        một hàm chuyển đổi đối số đầu vào của nó, kết quả của phép biến đổi
        nên xuất hiện dưới dạng giá trị trả về. Thật vậy, 
        <strong>StringBuffer transform(StringBuffer in)</strong> là tốt hơn
        khi so với <strong>void transform(StringBuffer out)</strong>.`,
      },
      {
        p: `<h6><b>Đối số luận lý</b></h6>`,
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
        code: {
          src: ``,
          language: 'java',
        },
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
