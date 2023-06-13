import IContent from 'utils/interface';

export const chapter3: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-3_1.jpg`),
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
                    .append("\\n");
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
                .append("\\n");
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
            buffer.append("\\n")
                .append("!include -teardown .")
                .append(tearDownPathName)
                .append("\\n");
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
                    .append("\\n");
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
          width: `35%`,
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
          width: `35%`,
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
          width: `35%`,
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
        p: `“Việc chuyển một đối số boolean vào hàm là một cái gì đó rất khủng
        khiếp. Nó ngay lập tức chỉ ra hàm của bạn đang là nhiều hơn một việc.
        Một việc nó làm khi đối số đúng, và một việc được làm khi đối số sai”.
        Tuy nhiên, không phải lúc nào việc này cũng tởm lợm như bạn nghĩ. Ở
        một số trường hợp, việc này là hoàn toàn bình thường.`,
      },
      {
        p: `<h6><b>HÀM CÓ HAI ĐỐI SỐ (DYADIC)</b></h6>`,
      },
      {
        p: `Hàm có hai đối số sẽ khó hiểu hơn hàm có một đối số. Ví dụ 
        <strong>writeField(name)</strong> sẽ dễ hiểu hơn 
        <strong>writeField(output-Stream, name)</strong>. Mặc dù ý nghĩa của
        cả hai đều như nhau, đều dễ hiểu khi lần đầu nhìn vào. Nhưng hàm thứ
        hai yêu cầu bạn phải dừng lại, cho đến khi bạn học được cách bỏ qua
        tham số đầu tiên. Và, dĩ nhiên, có một vấn đề khi bạn bỏ qua đoạn code
        nào đó, thì khả năng đoạn code đó chứa lỗi là rất cao.`,
      },
      {
        p: `Tất nhiên luôn có những lúc hai đối số sẽ hợp lý hơn một đối số. Ví
        dụ:
        <br />
        <strong>Point p = new Point(0,0);</strong> là hoàn toàn hợp lý khi bạn
        đang code về tọa độ mặt phẳng. Chúng tôi sẽ cảm thấy bối rối khi thấy 
        <strong>new Point(0);</strong> trong trường hợp này.`,
      },
      {
        p: `Ngay cả hàm dyadic rõ ràng như 
        <strong>assertEquals(expected, actual)</strong> vẫn có vấn đề. Đã bao
        nhiêu lần bạn nhầm lẫn vị trí giữa <strong>expected </strong>và 
        <strong>actual</strong>? Hai đối số không có thứ tự tự nhiên. Thứ tự 
        <strong>expected</strong>, <strong>actual </strong>là một quy ước đòi
        hỏi bạn phải nhớ nó trong đầu.`,
      },
      {
        p: `Những hàm dyadic không phải là những con quỷ dữ, và chắc chắn bạn phải
        viết chúng.
        <br />
        Tuy nhiên bạn nên lưu ý rằng bạn sẽ phải trả giá cho việc đó, và nên
        tận dụng tối đa những thủ thuật hay lợi thế có sẵn để chuyển chúng về
        thành dạng monadic. Ví dụ, bạn có thể làm cho phương thức 
        <strong>writeField </strong>trở thành một thành viên của 
        <strong>outputStream </strong>để bạn có thể dùng lệnh 
        <strong>outputStream.writeField(name)</strong>.`,
      },
      {
        p: `<h6><b>HÀM BA ĐỐI SỐ (TRIADIC)</b></h6>`,
      },
      {
        p: `Hàm có ba đối số khó hiểu hơn nhiều so với hàm hai đối số. Các vấn đề
        về sắp xếp, tạm ngừng và bỏ qua tăng gấp đôi. Tôi đề nghị bạn cẩn thận
        trước khi tạo ra nó.`,
      },
      {
        p: `[…]`,
      },
      {
        p: `<h6><b>ĐỐI SỐ ĐỐI TƯỢNG</b></h6>`,
      },
      {
        p: `Khi một hàm có vẻ cần nhiều hơn hai hoặc ba đối số, có khả năng một số
        đối số đó phải được bao bọc thành một lớp riêng của chúng. Ví dụ, hãy
        xem xét sự khác biệt giữa hai khai báo sau đây:`,
      },
      {
        code: {
          src: `Circle makeCircle(double x, double y, double radius);
Circle makeCircle(Point center, double radius);`,
          language: 'java',
        },
      },
      {
        p: `Giảm số lượng các đối số bằng cách tạo ra các đối tượng có vẻ như gian
        lận, nhưng không phải. Khi các nhóm biến được chuyển đổi cùng nhau,
        như cách x và y ở ví dụ trên, chúng có khả năng là một phần của một
        khái niệm xứng đáng có tên riêng.`,
      },
      {
        p: `<strong>Danh sách đối số</strong>`,
      },
      {
        p: `Đôi khi, chúng tôi muốn chuyển một số lượng đối số vào một hàm. Hãy
        xem xét ví dụ về phương thức <strong>String.format</strong>:`,
      },
      {
        code: {
          src: `String.format("%s worked %.2f hours.", name, hours);`,
          language: 'java',
        },
      },
      {
        p: `Nếu tất cả các đối số được xử lý giống nhau, như ví dụ trên, thì tất
        cả chúng tương đương với một đối số kiểu <strong>List</strong>. Bởi lý
        do đó, <strong>String.format</strong> thực chất là một hàm có hai đối
        số. Thật vậy, việc khai báo <strong>String.format</strong> như ví dụ
        dưới đây rõ ràng là một hàm dyadic:`,
      },
      {
        p: `<h6><b>ĐỘNG TỪ VÀ CÁC TỪ KHÓA</b></h6>`,
      },
      {
        p: `Chọn tên tốt cho một hàm có thể góp phần giải thích ý định của hàm và
        mục đích của các
        <br />
        đối số. Trong trường hợp hàm monadic, hàm và đối số nên tạo thành một
        cặp động từ/danh từ hợp lý. <strong>write(name)</strong> là một ví dụ
        hoàn hảo trong trường hợp này. Dù cái tên này là gì, nó cho chúng ta
        biết nó được viết. Một cái tên tốt hơn có lẽ là 
        <strong>writeField(name)</strong>, nó cho chúng ta biết rằng tên là
        một trường.`,
      },
      {
        p: ` Cuối cùng là một ví dụ về dạng từ khóa của tên hàm. Bằng cách này,
        chúng tôi mã hóa
        <br />
        tên của các đối số thành tên hàm. Ví dụ, <strong>
          assertEquals
        </strong> 
        có thể được cải tiến thành 
        <strong>assertExpectedEqualsActual(expected, actual)</strong>. Điều
        này làm giảm vấn đề về việc nhớ vị trí của các đối số.`,
      },
    ],
  },
  {
    title: 'Không có tác dụng phụ',
    contents: [
      {
        p: `Tác dụng phụ (hay hiệu ứng lề) là một sự lừa dối. Hàm của bạn được hy
        vọng sẽ làm một việc, nhưng nó cũng làm những việc khác mà bạn không
        thấy. Đôi khi nó bất ngờ làm thay đổi giá trị biến của lớp của nó.
        Hoặc nó sẽ biến chúng thành các tham số được truyền vào hàm, hoặc các
        hàm toàn cục. Trong cả hai trường hợp, chúng tạo ra các sai lầm và làm
        sai kết quả.`,
      },
      {
        p: `Hãy xem xét hàm trong ví dụ dưới đây. Hàm này sử dụng thuật toán để
        kiểm tra <strong>userName </strong>và <strong>password</strong>. Nó
        trả về <strong>true </strong>nếu chúng khớp và trả về 
        <strong>false </strong>nếu có gì sai. Nhưng nó cũng có tác dụng phụ.
        Bạn phát hiện ra nó chứ?`,
      },
      {
        p: `Listing 3-6: <strong>UserValidator.java</strong>`,
      },
      {
        code: {
          src: `public class UserValidator {
    private Cryptographer cryptographer;
    public boolean checkPassword(String userName, String password) {
        User user = UserGateway.findByName(userName);
        if (user != User.NULL) {
            String codedPhrase = user.getPhraseEncodedByPassword();
            String phrase = cryptographer.decrypt(codedPhrase, password);
            if ("Valid Password".equals(phrase)) {
                Session.initialize();
                return true;
            }
        }
        return false;
    }
}`,
          language: 'java',
        },
      },
      {
        p: `Tác dụng phụ ở đây là lời gọi hàm 
        <strong>Session.initialize()</strong>. Hàm 
        <strong>checkPassword</strong>, theo cách đặt tên của nó, nói rằng nó
        chỉ kiểm tra mật khẩu. Tên hàm không thông báo rằng nó khởi tạo
        session (Tìm hiểu thêm: 
        <a href="https://en.wikipedia.org/wiki/Session_(computer_science)">
          https://en.wikipedia.org/wiki/Session_(computer_science)
        </a>
        ). Vậy nên khi ai đó dùng hàm này, họ tin rằng mình chỉ kiểm tra tính
        hợp lệ của người dùng mà không biết dữ liệu của session hiện tại có
        nguy cơ bị mất.`,
      },
      {
        p: `Tác dụng phụ này tạo ra một mắt xích về thời gian. Đó là, 
        <strong>checkPassword </strong>chỉ được gọi vào những thời điểm nhất
        định (nói cách khác, khi nó an toàn để khởi tạo session). Nếu được gọi
        lung tung, dữ liệu của session có thể vô tình bị mất. Mắt xích tạm
        thời này gây khó hiểu, đặc biệt là nó lúc ẩn lúc hiện. Nếu bạn có một
        mắt xích như vậy, bạn nên làm nó hiện rõ trong tên hàm. Trong trường
        hợp này, chúng ta có thể đổi tên hàm thành 
        <strong>checkPasswordAndInitializeSession</strong>, mặc dù chắc chắn
        hàm này vi phạm nguyên tắc “Làm một việc”.`,
      },
      {
        p: `<h6><b>ĐỐI SỐ ĐẦU RA</b></h6>`,
      },
      {
        p: `[…]`,
      },
      {
        p: `Nói chung chúng ta nên tránh các đối số đầu ra (ví dụ các đối số dạng
          ref, out trong c#). Nếu hàm của bạn phải thay đổi trạng thái của một
          cái gì đó, hãy thay đổi trạng thái của đối tượng sở hữu nó.`,
      },
    ],
  },
  {
    title: 'Tách lệnh truy vấn',
    contents: [
      {
        p: `Hàm nên làm một cái gì đó hoặc trả lời một cái gì đó, nhưng không phải
        cả hai. Hoặc là hàm của bạn thay đổi trạng thái của một đối tượng,
        hoặc nó sẽ trả về một số thông tin về đối tượng đó. Làm cả hai thường
        gây nên sự nhầm lẫn. Xem xét hàm ví dụ sau:`,
      },
      {
        code: {
          src: `public boolean set(String attribute, String value);`,
          language: 'java',
        },
      },
      {
        p: `Hàm này đặt giá trị cho thuộc tính nếu thuộc tính đó tồn tại. Nó trả
        về <strong>true </strong>nếu thành công, và <strong>false </strong>nếu
        thất bại. Điều này dẫn đến các câu lệnh lẻ như sau:`,
      },
      {
        code: {
          src: `if (set("username", "unclebob"))...`,
          language: 'java',
        },
      },
      {
        p: `Hãy tưởng tượng điều này từ quan điểm của người đọc. Nó có nghĩa là
        gì? Nó hỏi thuộc tính <strong>“username”</strong> đã được đặt thành
        <strong> “unclebob”</strong> chưa? Hay nó hỏi thuộc tính 
        <strong>“username”</strong> trước đó có giá trị là 
        <strong>“unclebob”</strong>? Thật khó để suy ra ý nghĩa của hàm vì
        không rõ từ <strong>“set”</strong> là động từ hay tính từ.`,
      },
      {
        p: `Dự định của tác giả là đặt set trở thành một động từ, nhưng trong ngữ
        cảnh của câu lệnh <strong>if</strong>, nó mang đến cảm giác như một
        tính từ […]. Chúng tôi thử giải quyết vấn đề này bằng cách đổi tên hàm
        đã đặt thành <strong>setAndCheckIfExists</strong>, nhưng điều đó không
        giúp ích gì nhiều trong ngữ cảnh của câu lệnh <strong>if</strong>.
        Giải pháp thực sự là tách lệnh khỏi truy vấn sao cho sự nhầm lẫn không
        thể xảy ra.`,
      },
      {
        code: {
          src: `if (attributeExists("username")) {
    setAttribute("username", "unclebob"); 
    ... 
}`,
          language: 'java',
        },
      },
      {
        p: `[…]`,
      },
    ],
  },
  {
    title: 'Ưu tiên các trường hợp ngoại lệ để return mã lỗi',
    contents: [
      {
        p: `Return mã lỗi từ các hàm lệnh là một vi phạm tinh vi trong việc phân
        tách truy vấn lệnh. Nó thúc đẩy các lệnh được sử dụng làm biểu thức
        trong các vị từ của câu lệnh <strong>if</strong>.`,
      },
      {
        code: {
          src: `if (deletePage(page) == E_OK)`,
          language: 'java',
        },
      },
      {
        p: `Điều này không gây nhầm lẫn động từ/tính từ nhưng dẫn đến cấu trúc
        lồng nhau. Khi bạn trả về một mã lỗi, bạn tạo ra vấn đề mà nơi gọi
        phải xử lý lỗi ngay lập tức.`,
      },
      {
        code: {
          src: `if (deletePage(page) == E_OK) {
    if (registry.deleteReference(page.name) == E_OK) {
        if (configKeys.deleteKey(page.name.makeKey()) == E_OK){
            logger.log("page deleted");
        } else {
            logger.log("configKey not deleted");
        }
    } else {
        logger.log("deleteReference from registry failed");
    }
} else {
    logger.log("delete failed");
    return E_ERROR;
}`,
          language: 'java',
        },
      },
      {
        p: `Mặt khác, nếu bạn sử dụng các ngoại lệ thay vì các mã lỗi trả về, thì
        mã xử lý lỗi có thể được tách ra khỏi luồng code và có thể được đơn
        giản hóa:`,
      },
      {
        code: {
          src: `try {
    deletePage(page);
    registry.deleteReference(page.name);
    configKeys.deleteKey(page.name.makeKey());
}
catch (Exception e) {
    logger.log(e.getMessage());
}`,
          language: 'java',
        },
      },
      {
        p: `<h6><b>GIẢI NÉN KHỐI TRY/CATCH</b></h6>`,
      },
      {
        p: `Các khối <strong>try/catch</strong> là <strong>xấu </strong>theo đúng
        nghĩa của chúng. Chúng nhầm lẫn cấu trúc của code và trộn lẫn xử lý
        lỗi với xử lý thông thường. Vì vậy, tốt hơn là trích xuất phần thân
        của khối <strong>try</strong> và <strong>catch </strong>thành các chức
        năng của riêng chúng.`,
      },
      {
        code: {
          src: `public void delete(Page page) {
    try {
        deletePageAndAllReferences(page);
    }
    catch (Exception e) {
        logError(e);
    }
}
private void deletePageAndAllReferences(Page page) throws Exception {
    deletePage(page);
    registry.deleteReference(page.name);
    configKeys.deleteKey(page.name.makeKey());
}
private void logError(Exception e) {
    logger.log(e.getMessage());
}`,
          language: 'java',
        },
      },
      {
        p: `Ở trên, chức năng xóa là tất cả về xử lý lỗi. Dễ hiểu rồi bỏ qua. Chức
        năng <strong>deletePageAndAllRefferences </strong>là tất cả về quá
        trình xóa hoàn toàn một trang. Xử lý lỗi có thể được bỏ qua. Điều này
        cung cấp một sự tách biệt tốt giúp code dễ hiểu và dễ sửa đổi hơn.`,
      },
      {
        p: `<h6><b>XỬ LÝ LỖI MỘT LẦN</b></h6>`,
      },
      {
        p: `Các hàm chỉ nên làm một việc. Xử lý lỗi là một lần. Vì vậy, một chức
        năng xử lý lỗi không nên làm gì khác. Điều này ngụ ý (như trong ví dụ
        trên) rằng nếu từ khóa <strong>try </strong>tồn tại trong một hàm, nó
        phải là từ đầu tiên trong hàm và không được có gì khác sau các khối 
        <strong>catch/ final</strong>.`,
      },
      {
        p: `<h6><b>ERROR.JAVA DEPENDENCY MAGNET</b></h6>`,
      },
      {
        p: `Việc trả về mã lỗi thường ngụ ý rằng có một số lớp hoặc enum trong đó
        tất cả các mã lỗi được định nghĩa.`,
      },
      {
        code: {
          src: `public enum Error {
    OK,
    INVALID,
    NO_SUCH,
    LOCKED,
    OUT_OF_RESOURCES,
    WAITING_FOR_EVENT;
}`,
          language: 'java',
        },
      },
      {
        p: `Các lớp như thế này là 
        <strong>
          <em>dependency magnet</em>
        </strong>
        ; nhiều lớp khác phải import và sử dụng chúng. Do đó, khi Error enum
        thay đổi, tất cả các lớp khác cần được biên dịch lại và triển khai
        lại. Điều này gây áp lực tiêu cực lên lớp <strong>Error</strong>. Các
        lập trình viên không muốn thêm lỗi mới vì sau đó họ phải xây dựng lại
        và triển khai lại mọi thứ. Vì vậy, họ sử dụng lại các mã lỗi cũ thay
        vì thêm các mã mới.
        <br />
        Khi bạn sử dụng các ngoại lệ thay vì mã lỗi, thì các ngoại lệ mới là
        các dẫn xuất (lớp con kế thừa) của lớp ngoại lệ. Chúng có thể được
        thêm vào mà không buộc phải biên dịch lại hoặc triển khai lại.`,
      },
    ],
  },
  {
    title: 'Đừng lặp lại code của bạn',
    contents: [
      {
        p: `Xem xét lại <strong>Listing 3-1</strong> một cách cẩn thận, bạn sẽ
        nhận thấy rằng có một thuật toán được lặp lại bốn lần. Mỗi lần cho mỗi
        trường hợp <strong>SetUp</strong>, <strong>SuiteSetUp</strong>, 
        <strong>TearDown</strong>, và <strong>SuiteTearDown</strong>. Không dễ
        dàng để phát hiện ra sự trùng lặp này vì cả bốn trường hợp code được
        trộn lẫn với code khác, và sự sao chép là không thống nhất. Tuy nhiên,
        việc trùng lặp code như vậy là một vấn đề, vì nó làm code của bạn
        phình to ra và khi cần sửa đổi, bạn sẽ phải sửa đổi bốn lần. Điều đó
        cũng đồng nghĩa với việc nguy cơ xuất hiện lỗi là bốn lần.`,
      },
      {
        p: `Vấn đề này được khắc phục bằng phương thức <strong>include </strong>
        trong <strong>Listing 3-7</strong>. Đọc lại code một lần nữa và bạn sẽ
        thấy khả năng đọc của toàn bộ mô-đun được tăng lên chỉ bằng cách giảm
        sự trùng lặp đó.`,
      },
      {
        p: `Sự trùng lặp có lẽ là gốc rễ của mọi tội lỗi trong lập trình. Nhiều
        nguyên tắc và kinh nghiệm đã được tạo ra cho mục đích kiểm soát hoặc
        loại bỏ nó. Lập trình cấu trúc, lập trình hướng đối tượng (OOP), lập
        trình hướng khía cạnh (Aspect Oriented Programming – AOP), lập trình
        hướng thành phần (Component Oriented Programming – COP), tất cả chúng
        đều có chiến lược để loại bỏ code trùng lặp. Nó chứng minh rằng kể từ
        khi chương trình con được phát minh, các sáng kiến trong ngành công
        nghiệp phát triển phần mềm đều nhắm đến việc loại bỏ những đoạn code
        trùng lặp ra khỏi mã nguồn.`,
      },
    ],
  },
  {
    title: 'Lập trình có cấu trúc',
    contents: [
      {
        p: `Một số lập trình viên đi theo nguyên tắc lập trình có cấu trúc của
        Edsger Dijkstra. Dijkstra nói rằng mọi hàm, và mọi khối trong hàm nên
        có một lối vào (entry) và một lối thoát (exit). Điều đó có nghĩa là
        chỉ nên có một lệnh <strong>return </strong>trong hàm, không có câu
        lệnh <strong>break</strong>, <strong>continue </strong>trong một vòng
        lặp; và không bao giờ dùng bất kỳ câu lệnh <strong>goto </strong>nào.`,
      },
      {
        p: `Chúng tôi thông cảm với các nguyên tắc và mục tiêu của lập trình cấu
        trúc, nhưng các nguyên tắc này chỉ mang lại một chút lợi ích khi các
        hàm bạn viết rất nhỏ. Ở các hàm lớn hơn, lợi ích mà nó mang lại thật
        sự là không đáng kể.`,
      },
      {
        p: `Vậy nên nếu bạn có thể tiếp tục giữ cho các hàm của mình nhỏ, thì việc
        sử dụng các câu lệnh <strong>return</strong>, <strong>break </strong>
        hay <strong>continue </strong>là vô hại và đôi khi nó còn giúp hàm của
        bạn rõ ràng hơn nguyên tắc một lối vào, một lối thoát. Mặt khác, lệnh 
        <strong>goto </strong>chỉ có ý nghĩa trong các hàm lớn, vì vậy nên
        tránh sử dụng nó.`,
      },
    ],
  },
  {
    title: 'Tôi đã viết các hàm này như thế nào?',
    contents: [
      {
        p: `Viết phần mềm cũng giống như viết các thể loại khác. Khi bạn viết một
        bài báo hay một văn kiện, bạn sẽ suy nghĩ trước, sau đó bạn nhào nặn
        nó cho đến khi nó trở nên mạch lạc, trơn tru. Các bản thảo ban đầu có
        thể vụng về và rời rạc, vì vậy bạn vứt nó vào sọt rác và tái cơ cấu
        nó, tinh chỉnh nó cho đến khi nó được đọc theo cách mà bạn muốn.`,
      },
      {
        p: `Khi tôi bắt đầu viết các hàm, chúng dài và phức tạp. Chúng có rất
        nhiều vòng lặp lồng nhau, chúng có hàng tá đối số. Các tên được đặt
        tùy ý, và tồn tại nhiều code trùng lặp. Nhưng tôi cũng có một bộ unit
        test để đảm bảo cho tất cả những dòng code vụng về đó.`,
      },
      {
        p: `Và sau đó, tôi thay đổi và tinh chỉnh lại code đó, tách ra thành các
        hàm, đặt lại tên và loại bỏ code trùng lặp. Tôi thu nhỏ phương thức và
        sắp xếp lại chúng. Đôi khi tôi <em>đập tan nát</em> một lớp, trong khi
        vẫn giữ lại các bài test đã hoàn thành.`,
      },
      {
        p: `Cuối cùng, các hàm tôi hoàn thành đã tuân theo các nguyên tắc tôi đặt
        ra trong chương này. Tôi không tuân theo các nguyên tắc tôi đặt ra để
        bắt đầu viết nó, điều đó là không thể.`,
      },
    ],
  },
  {
    title: 'Kết luận',
    contents: [
      {
        p: `Mỗi hệ thống được xây dựng từ một DSL được thiết kế và mô tả bởi các
        lập trình viên. Các hàm là một động từ, và các lớp là một danh từ […].
        Nghệ thuật lập trình, dĩ nhiên, luôn là nghệ thuật sử dụng ngôn ngữ.`,
      },
      {
        p: `Các lập trình viên tài năng xem các hệ thống như những câu chuyện kể,
        chứ không phải là các chương trình được viết. Họ sử dụng khả năng của
        ngôn ngữ lập trình mà họ chọn để diễn đạt <em>câu chuyện</em> phong
        phú hơn và giàu cảm xúc hơn. Một phần của các DSL là cấu trúc phân cấp
        của các hàm mô tả hành động diễn ra trong hệ thống đó. Và các hàm được
        định nghĩa để nói lên câu chuyện của riêng mình.`,
      },
      {
        p: `Chương này đã chỉ cho bạn về cách viết tốt các hàm. Nếu bạn tuân thủ
        các nguyên tắc trên, các hàm của bạn sẽ ngắn gọn, được đặt tên và được
        tổ chức tốt. Nhưng đừng bao giờ quên rằng mục tiêu của bạn là kể một
        câu chuyện về hệ thống, và các hàm bạn viết cần ăn khớp với nhau một
        cách rõ ràng và chính xác để giúp bạn hoàn thành việc đó.`,
      },
      {
        p: `<strong>SetupTeardownIncluder</strong>`,
      },
      {
        p: `Listing 3-7: <strong>SetupTeardownIncluder.java</strong>`,
      },
      {
        code: {
          src: `package fitnesse.html;
import fitnesse.responders.run.SuiteResponder;
import fitnesse.wiki.*;
public class SetupTeardownIncluder {
    private PageData pageData;
    private boolean isSuite;
    private WikiPage testPage;
    private StringBuffer newPageContent;
    private PageCrawler pageCrawler;
    public static String render(PageData pageData) throws Exception {
        return render(pageData, false);
    }
  
    public static String render(PageData pageData, boolean isSuite)
    throws Exception {
        return new SetupTeardownIncluder(pageData).render(isSuite);
    }
  
    private SetupTeardownIncluder(PageData pageData) {
        this.pageData = pageData;
        testPage = pageData.getWikiPage();
        pageCrawler = testPage.getPageCrawler();
        newPageContent = new StringBuffer();
    }
  
    private String render(boolean isSuite) throws Exception {
        this.isSuite = isSuite;
        if (isTestPage())
            includeSetupAndTeardownPages();
        return pageData.getHtml();
    }
  
    private boolean isTestPage() throws Exception {
        return pageData.hasAttribute("Test");
    }
  
    private void includeSetupAndTeardownPages() throws Exception {
        includeSetupPages();
        includePageContent();
        includeTeardownPages();
        updatePageContent();
    }
  
    private void includeSetupPages() throws Exception {
        if (isSuite)
            includeSuiteSetupPage();
        includeSetupPage();
    }
  
    private void includeSuiteSetupPage() throws Exception {
        include(SuiteResponder.SUITE_SETUP_NAME, "-setup");
    }
  
    private void includeSetupPage() throws Exception {
        include("SetUp", "-setup");
    }
  
    private void includePageContent() throws Exception {
        newPageContent.append(pageData.getContent());
    }
  
    private void includeTeardownPages() throws Exception {
        includeTeardownPage();
        if (isSuite)
            includeSuiteTeardownPage();
    }
  
    private void includeTeardownPage() throws Exception {
        include("TearDown", "-teardown");
    }
  
    private void includeSuiteTeardownPage() throws Exception {
        include(SuiteResponder.SUITE_TEARDOWN_NAME, "-teardown");
    }
  
    private void updatePageContent() throws Exception {
        pageData.setContent(newPageContent.toString());
    }
  
    private void include(String pageName, String arg) throws Exception {
        WikiPage inheritedPage = findInheritedPage(pageName);
        if (inheritedPage != null) {
            String pagePathName = getPathNameForPage(inheritedPage);
            buildIncludeDirective(pagePathName, arg);
        }
    }
  
    private WikiPage findInheritedPage(String pageName) throws Exception {
        return PageCrawlerImpl.getInheritedPage(pageName, testPage);
    }
  
    private String getPathNameForPage(WikiPage page) throws Exception {
        WikiPagePath pagePath = pageCrawler.getFullPath(page);
        return PathParser.render(pagePath);
    }
  
    private void buildIncludeDirective(String pagePathName, String arg) {
        newPageContent
        .append("\\n!include ")
        .append(arg)
        .append(" .")
        .append(pagePathName)
        .append("\\n");
    }
}`,
          language: 'java',
        },
      },
    ],
  },
  {
    title: 'Tham khảo',
    contents: [
      {
        p: `<strong>[KP78]:</strong> Kernighan and Plaugher,{' '}
        <em>The Elements of Programming Style</em>, 2d. ed., McGrawHill, 1978.`,
      },
      {
        p: `<strong>[PPP02]:</strong> Robert C. Martin,{' '}
        <em>
          Agile Software Development: Principles, Patterns, and Practices
        </em>
        , Prentice Hall, 2002.`,
      },
      {
        p: `<strong>[GOF]:</strong>{' '}
        <em>
          Design Patterns: Elements of Reusable Object Oriented Software
        </em>
        , Gamma et al., Addison-Wesley, 1996.`,
      },
      {
        p: `<strong>[PRAG]:</strong> <em>The Pragmatic Programmer</em>, Andrew
        Hunt, Dave Thomas, Addison-Wesley, 2000.`,
      },
      {
        p: `<strong>[SP72]:</strong> <em>Structured Programming</em>, O.-J. Dahl,
        E. W. Dijkstra, C. A. R. Hoare, Academic Press, London, 1972.`,
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
