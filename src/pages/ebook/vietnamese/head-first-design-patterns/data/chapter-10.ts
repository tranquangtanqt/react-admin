import IContent from 'utils/interface';

export const chapter10: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_1.jpg`),
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
    title: `State Pattern – Trạng thái của vạn vật`,
    contents: [
      {
        div: `<p>
        State Pattern là gì? Hãy ngầm hiểu đây là một mẫu đại diện cho các trạng thái
        khác nhau của một đối tượng. Ví dụ một thang máy sẽ có trạng thái: đóng cửa,
        mở cửa, chuông báo động, số tầng…hay một vận động viên bơi lội sẽ có các trạng
        thái: khởi động, vào vị trí, sẵn sàng, bơi, chạm đích…chúng đều có liên quan
        đến mẫu thiết kế được đề cập trong chương này: Mẫu Trạng thái – State Pattern.
      </p>`,
      },
    ],
  },
  {
    title: `Một thực tế ít được biết đến: Strategy và State Pattern là cặp song sinh
    được tách ra khi chào đời`,
    contents: [
      {
        div: `<p>
        Như bạn đã biết,
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          >Strategy Pattern</a
        >
        đã tiếp tục tạo ra một doanh nghiệp cực kỳ thành công xung quanh các thuật
        toán có thể hoán đổi cho nhau. Tuy nhiên, <strong>State Pattern</strong> đã đi
        con đường có lẽ cao quý hơn là giúp các đối tượng kiểm soát hành vi bằng cách
        thay đổi trạng thái nội bộ của chúng. State pattern thường lắng nghe được
        những object client của mình, “chỉ cần lặp lại sau tôi: Tôi đã đủ tốt, tôi đủ
        thông minh, và hãy chú ý…”
      </p>
      <p>
        Ngày nay mọi người đang đưa công nghệ Java vào các thiết bị thực (IoT), như
        máy kẹo cao su. Đúng vậy, máy kẹo cao su đã đi vào công nghệ; các nhà sản xuất
        lớn đã phát hiện ra rằng bằng cách đưa CPU vào những cái máy đó, họ có thể
        tăng doanh số, theo dõi hàng tồn kho thông qua network và đo lường sự hài lòng
        của khách hàng chính xác hơn.
      </p>

      <p>
        Ít nhất đó là câu chuyện của họ – chúng tôi nghĩ rằng họ đã cảm thấy nhàm chán
        với công nghệ những năm 1800 và cần tìm cách để làm cho công việc thú vị hơn.
      </p>
      <p>
        Nhưng các nhà sản xuất này là các chuyên gia máy kẹo cao su, không phải nhà
        phát triển phần mềm và họ đã yêu cầu sự giúp đỡ của bạn:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_2.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        (<em
          >Chú thích: Quarter là đồng 25 xu của Mỹ, crank là tay quay trên máy bắn
          kẹo, Gumball là kẹo cao su</em
        >)
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_3.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Anne:</strong> Sơ đồ này trông giống như một sơ đồ trạng thái.</p>

        <p><strong>Joe:</strong> Phải, mỗi vòng tròn đó là một trạng thái…</p>
        
        <p><strong>Anne:</strong> …và mỗi mũi tên là một chuyển tiếp trạng thái.</p>
        
        <p>
          <strong>Frank:</strong> Chậm lại, hai bạn, tôi đã nghiên cứu sơ đồ trạng thái
          từ quá lâu. Bạn có thể nhắc tôi chúng là gì không?
        </p>
        
        <p>
          <strong>Anne:</strong> Chắc chắn rồi, Frank. Nhìn vào các vòng tròn; Đó là
          những trạng thái. “<strong>No Quarter</strong>” (Không có xu) có thể là trạng
          thái khởi đầu cho máy bắn kẹo cao su vì nó chỉ chờ “insert quarter” (bỏ đồng
          xu vào). Tất cả các vòng tròn chỉ là các trạng thái khác nhau của máy hoạt
          động theo một cách nhất định và cần một số hành động để đưa chúng đến trạng
          thái khác.
        </p>
        
        <p>
          <strong>Joe:</strong> phải rồi, để đi đến một trạng thái khác, bạn cần phải
          làm một cái gì đó như bỏ một đồng xu vào máy. Xem mũi tên từ “<strong
            >No Quarter</strong
          >” đến “<strong>Has Quarter</strong>”.
        </p>
        
        <p><strong>Frank: </strong>Vâng …</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_4.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center"><small>Đây là Gumball Machine</small></p>`,
      },
      {
        div: `<p>
        <strong>Joe:</strong> Điều đó có nghĩa là nếu
        <strong>Gumball Machine</strong> đang ở trạng thái “<strong>No Quarter</strong
        >” và bạn bỏ vào một đồng xu, nó sẽ đổi thành trạng thái “<strong
          >Has Quarter</strong
        >”. Đó là sự chuyển đổi trạng thái.
      </p>
      
      <p>
        <strong>Frank:</strong> Ồ, tôi hiểu rồi! Và nếu tôi đang ở trạng thái “<strong
          >Has Quarter</strong
        >”, tôi có thể xoay tay quay và đổi sang trạng thái “<strong
          >Gumball Sold</strong
        >” , hoặc “<strong>Eject quarter</strong>” (trả lại đồng xu) sau đó chuyển về
        trạng thái “<strong>No Quarter</strong>”.
      </p>
      
      <p><strong>Anne:</strong> Bạn đã hiểu rồi đấy!</p>
      
      <p>
        <strong>Frank:</strong> Điều này có vẻ không tệ lắm. Chúng ta rõ ràng có bốn
        trạng thái, và tôi nghĩ rằng chúng ta cũng có bốn hành động: “insert quarter –
        chèn xu”, “eject quarter – đẩy xu ra”, “turn crank – xoay tay quay” và
        “dispense – phân phát kẹo”. Nhưng khi chúng tôi trả kẹo về, trong trạng thái
        “Gumball Sold”, chúng ta kiểm tra còn kẹo trong máy hay không, và sau đó
        chuyển sang trạng thái “<strong>Out of Gumballs</strong>” khi hết kẹo hoặc
        trạng thái “<strong>No Quarter</strong>” khi còn kẹo. Vì vậy, chúng ta thực sự
        có năm chuyển đổi từ trạng thái này sang trạng thái khác.
      </p>
      
      <p>
        <strong>Anne: </strong>Kiểm tra máy còn kẹo cao su hay không cũng ngụ ý rằng
        chúng ta cũng phải theo dõi số lượng kẹo. Bất cứ khi nào máy cung cấp cho bạn
        một viên kẹo cao su, nó có thể là viên cuối cùng, và nếu đúng, chúng ta cần
        chuyển sang trạng thái “<strong>Out of Gumballs</strong> – hết kẹo”.
      </p>
      <p>
        <strong>Joe:</strong> Ngoài ra, đừng quên rằng bạn còn có thể làm những việc
        như từ chối (eject) đồng xu khi máy bắn kẹo cao su ở trạng thái “<strong
          >No Quarter</strong
        >”, hoặc khi chèn hai đồng xu.
      </p>
      
      <p>
        <strong>Frank:</strong> Ồ, tôi đã không nghĩ về điều này; chúng ta cũng sẽ
        phải quan tâm những thứ đó.
      </p>
      
      <p>
        <strong>Joe:</strong> Đối với mọi hành động có thể, chúng ta sẽ phải kiểm tra
        xem chúng ta đang ở trạng thái nào và hành động phù hợp tiếp theo. Chúng ta có
        thể làm được việc này! Hãy bắt đầu ánh xạ sơ đồ trạng thái sang code…
      </p>`,
      },
    ],
  },
  {
    title: `State machines 101`,
    contents: [
      {
        div: `<p>
        Làm thế nào chúng ta chuyển từ sơ đồ trạng thái sang code thực tế? Ở đây, giới
        thiệu nhanh về việc triển khai các state machines (trạng thái máy bắn kẹo):
      </p>
      
      <p><strong>1. Đầu tiên, tập hợp các trạng thái của bạn:</strong></p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_5.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center"><small>Tổng cộng có 4 trạng thái: Không có xu, Có xu, Hết kẹo, Đã phân phát kẹo.</small></p>`,
      },
      {
        div: `<p>
        <strong
          >2. Tiếp theo, tạo một biến đối tượng để giữ trạng thái hiện tại và xác định
          các giá trị cho từng trạng thái:</strong
        >
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_6.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong
          >3. Bây giờ chúng tôi tập hợp tất cả các hành động có thể xảy ra trong hệ
          thống:</strong
        >
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_7.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center"><small>insers quater (bỏ xu vào), turns crank (xoay tay quay), ejects quarter (trả
          xu lại), dispense (phân phát kẹo)</small></p>`,
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>4. Bây giờ chúng ta tạo một lớp hoạt động như state machine.</strong>
        Đối với mỗi hành động, chúng tôi tạo ra một phương thức sử dụng các câu lệnh
        có điều kiện để xác định hành vi nào phù hợp ở mỗi trạng thái. Ví dụ, đối với
        hành động chèn đồng xu, chúng ta có thể viết một phương thức như thế này:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_8.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_9.jpg`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Viết code`,
    contents: [
      {
        div: `<p>
        Đây là thời gian để thực hiện <strong>Gumball Machine</strong>. Chúng tôi biết
        rằng chúng tôi sẽ có một biến đối tượng giữ trạng thái hiện tại (current
        state). Từ đó, chúng ta chỉ cần xử lý tất cả các hành động, hành vi và chuyển
        trạng thái có thể xảy ra. Đối với các hành động, chúng ta cần thực hiện chèn
        một đồng xu, trả lại một đồng xu, xoay tay quay và phân phát một viên kẹo cao
        su; chúng tôi cũng có kiểm tra điều kiện khi Gumball machine hết kẹo.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_10.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_11.jpg`),
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
    title: `In-house testing`,
    contents: [
      {
        div: `<p>
        Cảm giác đó giống như một thiết kế chắc chắn đẹp bằng cách sử dụng một phương
        pháp được suy nghĩ kỹ lưỡng phải không? Hãy kiểm tra một chút trước khi chúng
        tôi đưa nó cho công ty Mighty Gumball để được nạp vào máy bắn kẹo cao su thực
        tế. Ở đây, thử nghiệm của chúng tôi:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_12.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_13.jpg`),
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
    title: `Bạn biết rằng nó đang đến…một yêu cầu thay đổi!`,
    contents: [
      {
        div: `<p>
        Mighty Gumball, Inc. đã cài đặt code của bạn vào Gumball machine và các chuyên
        gia đảm bảo chất lượng của Mighty Gumball, Inc. đang chạy code thông qua các
        trạng thái của máy. Cho đến hiện tại, mọi thứ đều trông rất tuyệt từ góc nhìn
        của họ.
      </p>
      
      <p>
        Trên thực tế, mọi thứ đã diễn ra suôn sẻ, họ muốn đưa mọi thứ lên một tầm cao
        mới…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_14.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Bài tập</strong>:</p>

        <p>
          Vẽ sơ đồ trạng thái cho Gumball Machine xử lý trò chơi “1 phần 10”. Trong trò
          chơi này, 10% thời gian trạng thái Sold dẫn đến hai viên kẹo được phân phát
          chứ không phải là một. Kiểm tra câu trả lời của bạn với chúng tôi để đảm bảo
          chúng tôi đồng ý trước khi bạn đi xa hơn…
        </p>
        
        <p><strong>Đáp án:</strong></p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_15.jpg`),
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
    title: `Các trạng thái hiện tại rất lộn xộn`,
    contents: [
      {
        div: `<p>
        Bạn đã viết code cho Gumball machine bằng phương pháp được suy nghĩ kỹ lưỡng
        không có nghĩa là nó sẽ dễ dàng được mở rộng. Thực tế, khi bạn quay lại và xem
        code của mình và suy nghĩ về những gì bạn sẽ phải làm để sửa đổi nó, thì…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_16.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>Điều nào sau đây mô tả trạng thái thực hiện của chúng tôi?</strong>
        <strong>(Chọn tất cả các đáp án đúng.)</strong>
      </p>
      
      <ul>
        <li>❏ A. Code này chắc chắn không tuân thủ Nguyên tắc Đóng mở.</li>
        <li>❏ B. Code này sẽ làm cho một lập trình viên FORTRAN tự hào.</li>
        <li>❏ C. Thiết kế này không phải là hướng đối tượng.</li>
        <li>
          ❏ C. Chuyển trạng thái không rõ ràng; họ được giấu giữa một loạt các
          statement có điều kiện.
        </li>
        <li>❏ D. Ở đây, húng tôi chưa đóng gói bất cứ những gì khác biệt.</li>
        <li>❏ E. Các bổ sung khác có khả năng gây ra lỗi trong code làm việc.</li>
      </ul>
      
      <p><strong>Đáp án: A,B,C,D,E</strong></p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_17.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong>Joe: </strong>Bạn có thể nói đúng về điều đó! Chúng ta cần cấu trúc
        lại (refactor) code này để nó dễ bảo trì và sửa đổi.
      </p>
      
      <p>
        <strong>Anne:</strong> Chúng ta thực sự nên cố gắng “độc lập hóa” hành vi cho
        từng trạng thái để nếu có một trạng thái cần thay đổi, chúng ta sẽ không gây
        ảnh hưởng đến các đoạn code khác.
      </p>
      
      <p><strong>Joe:</strong> Phải; nói cách khác, hãy làm theo điều đó.</p>
      
      <p><strong>Anne:</strong> Chính xác.</p>
      
      <p>
        <strong>Joe: </strong>Nếu chúng ta đặt mỗi hành vi state trong lớp riêng của
        nó, thì mỗi state chỉ thực hiện các hành động của riêng mình.
      </p>
      
      <p>
        <strong>Anne:</strong> Phải. Và có lẽ Gumball Machine có thể ủy thác hành động
        cho state object đại diện cho trạng thái hiện tại.
      </p>
      
      <p>
        <strong>Joe:</strong> Ah, bạn nói đúng: luôn ủng hộ composition… nhiều nguyên
        tắc hơn trong công việc.
      </p>
      <p>
        <strong>Anne:</strong> Dễ thương đấy. Chà, tôi không chắc chắn 100% việc này
        sẽ hoạt động như thế nào, nhưng tôi nghĩ chúng ta đã làm điều gì đó đúng.
      </p>
      
      <p>
        <strong>Joe:</strong> Tôi tự hỏi điều này sẽ làm cho việc thêm các trạng thái
        mới dễ dàng hơn không?
      </p>
      
      <p>
        <strong>Anne:</strong> Tôi nghĩ vậy… Chúng ta vẫn phải thay đổi code, nhưng
        những thay đổi sẽ bị giới hạn phạm vi hơn nhiều vì thêm trạng thái mới sẽ có
        nghĩa là chúng ta chỉ cần thêm một lớp mới và có thể thay đổi một vài chuyển
        đổi ở đó.
      </p>
      
      <p>
        <strong>Joe:</strong> Tôi thích nghe điều đó. Hãy bắt đầu thiết kế mới này!
      </p>`,
      },
    ],
  },
  {
    title: `Thiết kế mới với State Pattern`,
    contents: [
      {
        div: `<p>
        Có vẻ như chúng tôi đã có một kế hoạch mới: thay vì duy trì code hiện có của
        chúng tôi, chúng tôi sẽ làm lại nó để đóng gói các đối tượng trạng thái trong
        các lớp của riêng chúng và sau đó ủy thác cho trạng thái hiện tại khi xảy ra
        hành động.
      </p>
      
      <p>
        Chúng tôi sẽ làm theo các nguyên tắc thiết kế, vì vậy chúng tôi sẽ hoàn thành
        với một thiết kế dễ bảo trì hơn. Đây là cách mà chúng tôi sẽ làm:
      </p>
      
      <ol>
        <li>
          Đầu tiên, chúng tôi sẽ định nghĩa một State interface có chứa một phương
          thức cho mọi hành động trong Gumball Machine.
        </li>
        <li>
          Sau đó, chúng tôi sẽ triển khai một lớp State cho từng trạng thái của máy.
          Các lớp này sẽ chịu trách nhiệm cho hành vi của máy khi nó ở trạng thái
          tương ứng.
        </li>
        <li>
          Cuối cùng, chúng tôi sẽ loại bỏ tất cả các code điều kiện (if) và thay vào
          đó ủy thác cho lớp State để thực hiện công việc cho chúng tôi.
        </li>
      </ol>
      
      <p>
        Không chỉ chúng tôi tuân theo các nguyên tắc thiết kế, như bạn thấy, chúng tôi
        thực sự đang triển khai State Pattern. Nhưng chúng tôi sẽ nhận được tất cả các
        công cụ State Pattern chính thức sau khi chúng tôi làm lại code của mình…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_18.jpg`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Định nghĩa các interface và class của State Pattern`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_19.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Bài tập</strong>:</p>

        <p>
          Để thực hiện các trạng thái của chúng ta, trước tiên chúng ta cần chỉ định
          hành vi của các lớp khi mỗi hành động được gọi. Chú thích sơ đồ bên dưới với
          hành vi của từng hành động trong mỗi lớp; chúng tôi đã điền trước vào một vài
          thứ cho bạn.
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_20.png`),
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
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_21.png`),
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
    title: `Implementing State classes của chúng tôi`,
    contents: [
      {
        div: `<p>
        Thời gian để thực hiện một trạng thái: chúng ta biết những hành vi chúng ta
        muốn; chúng ta chỉ cần viết nó xuống trong code. Chúng tôi sẽ theo sát code
        state của máy mà chúng tôi đã viết, nhưng lần này mọi thứ được chia thành các
        lớp khác nhau.
      </p>
      
      <p>Hãy bắt đầu với <strong>NoQuarterState</strong>:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_22.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Những gì chúng tôi đang thực hiện là cài đặt các hành vi phù hợp với trạng
        thái mà chúng tôi đang sử dụng. Trong một số trường hợp, hành vi này bao gồm
        chuyển Gumball Machine sang trạng thái mới.
      </p>
      `,
      },
    ],
  },
  {
    title: `Làm lại Gumball Machine với State pattern`,
    contents: [
      {
        div: `<p>
        Trước khi chúng tôi hoàn thành các lớp State, chúng tôi sẽ làm lại Gumball
        Machine – theo cách đó bạn có thể thấy tất cả trùng khớp với nhau như thế nào.
        Chúng tôi sẽ bắt đầu với các biến đối tượng liên quan đến trạng thái và chuyển
        code từ sử dụng số kiểu int sang sử dụng các state object:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_23.png`),
          width: `80%`,
          align: `center`,
        },
      },
    ],
  },
  {
    title: `Bây giờ, hãy nhìn vào lớp GumballMachine hoàn chỉnh…`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_24.png`),
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
    title: `Thực hiện nhiều State hơn`,
    contents: [
      {
        div: `<p>
        Bây giờ, khi bạn bắt đầu cảm nhận được cách Gumball Machine và các trạng thái
        khớp với nhau, hãy cài đặt các lớp <strong>HasQuarterState</strong> và
        <strong>SoldState</strong> …
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_25.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>Bây giờ, hãy kiểm tra lớp <strong>SoldState</strong>…</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_26.png`),
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
        Nhìn lại việc thực hiện <strong>GumballMachine</strong>. Nếu tay quay được
        quay và không thành công (giả sử khách hàng đã không bỏ vào một đồng xu
        trước), dù sao chúng tôi cũng gọi là “phân phối”, mặc dù điều đó không cần
        thiết. Làm thế nào bạn có thể khắc phục điều này?
      </p>
      
      <p>
        Chúng tôi có một lớp còn lại mà chúng tôi đã thực hiện:
        <strong>SoldOutState</strong>. Tại sao bạn không thực hiện nó? Để làm điều
        này, hãy suy nghĩ cẩn thận về cách Gumball Machine nên hành xử trong từng tình
        huống. Kiểm tra câu trả lời của bạn trước khi tiếp tục…
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_27.jpg`),
          width: `50%`,
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
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_28.jpg`),
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
    title: `Chúng ta hãy nhìn vào những gì chúng ta đã làm cho đến giờ…`,
    contents: [
      {
        div: `<p>
        Để bắt đầu, bây giờ bạn có một triển khai Gumball Machine có cấu trúc khá khác
        so với phiên bản đầu tiên của bạn, và về mặt chức năng thì nó hoàn toàn giống
        nhau. Bằng cách thay đổi cấu trúc việc triển khai, bạn phải:
      </p>
      
      <ul>
        <li>“Địa phương hóa” hành vi của mỗi trạng thái vào lớp riêng của chúng.</li>
        <li>
          Loại bỏ tất cả những rắc rối về câu lệnh <strong>if</strong>, thứ mà sẽ khó
          bảo trì.
        </li>
        <li>
          Đã đóng từng trạng thái để sửa đổi và vẫn để Gumball Machine mở rộng bằng
          cách thêm các lớp trạng thái mới (và chúng tôi sẽ làm điều này ngay phía
          sau).
        </li>
        <li>
          Tạo một code base và cấu trúc lớp ánh xạ gần hơn với sơ đồ Mighty Gumball và
          dễ đọc, dễ hiểu hơn.
        </li>
      </ul>
      
      <p>
        Bây giờ, hãy nhìn sâu hơn về khía cạnh chức năng của những gì chúng ta đã làm:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_29.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_30.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `Hậu trường State pattern: Chuyến tham quan tự túc`,
    contents: [
      {
        div: `<p>
        <strong>Bài tập:</strong> Theo dõi các bước của Gumball Machine bắt đầu với
        trạng thái <strong>NoQuarter</strong>. Cũng chú thích sơ đồ với các hành động
        và đầu ra của máy. Đối với bài tập này, bạn có thể cho rằng có rất nhiều kẹo
        cao su trong máy.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_31.jpg`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_32.jpg`),
          width: `60%`,
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
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_33.jpg`),
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
    title: `Định nghĩa State Pattern`,
    contents: [
      {
        div: `<p>
        Vâng, đó là sự thật, chúng tôi chỉ thực hiện State Pattern. Vì vậy, bây giờ,
        hãy xem qua tất cả những gì về nó:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_34.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        <strong
          >(State Pattern cho phép một đối tượng thay đổi hành vi của nó khi trạng
          thái bên trong của nó thay đổi. Đối tượng sẽ xuất hiện để thay đổi lớp của
          nó)</strong
        >
      </p>
      
      <p>
        Phần đầu tiên của định nghĩa này rất có ý nghĩa, phải không? Bởi vì mẫu này
        đóng gói trạng thái thành các lớp riêng biệt và ủy quyền cho đối tượng đại
        diện cho trạng thái hiện tại, chúng tôi biết rằng hành vi thay đổi cùng với
        trạng thái bên trong. Gumball Machine cung cấp một ví dụ hay: khi máy Gumball
        ở trạng thái <strong>NoQuarterState</strong> và bạn bỏ vào một đồng xu, bạn sẽ
        có hành vi khác (máy chấp nhận một đồng xu) và khi bạn bỏ vào một đồng xu vào
        khi máy ở trạng thái <strong>HasQuarterState</strong> (máy từ chối đồng xu).
      </p>
      
      <p>
        Còn phần thứ hai của định nghĩa thì sao? Điều đó có ý nghĩa gì đối với một đối
        tượng có vẻ như thay đổi lớp của nó? Hãy nghĩ về nó từ góc độ của một khách
        hàng: “nếu một đối tượng bạn đang sử dụng có thể thay đổi hoàn toàn hành vi
        của nó, thì đối tượng đó thực sự được khởi tạo từ một lớp khác”. Tuy nhiên,
        trong thực tế, bạn biết rằng chúng ta đang sử dụng composition để tạo ra sự
        thay đổi của lớp bằng cách tham chiếu các state object khác nhau.
      </p>`,
      },
    ],
  },
  {
    title: `Sơ đồ lớp State pattern`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_35.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        p: `<p class="text-center"><small>Sơ đồ lớp State pattern</small></p>`,
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_36.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<strong
        >Sơ đồ lớp State pattern hơi giống
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          >Strategy Pattern</a
        ></strong
      >`,
      },
      {
        div: `<p>
        Bạn đã có một quan sát tốt! Vâng, các sơ đồ lớp về cơ bản là giống nhau, nhưng
        hai mẫu này khác nhau trong <em>ý định</em> của chúng.
      </p>
      
      <p>
        Với <strong>State Pattern</strong>, chúng ta có một tập hợp các hành vi được
        đóng gói trong các state object; bất cứ lúc nào cần thiết,
        <strong>Context</strong> sẽ ủy thác cho một trong những trạng thái đó. Theo
        thời gian, trạng thái hiện tại thay đổi trên từng state object để phản ánh
        trạng thái của Context, do đó, hành vi của Context cũng thay đổi theo thời
        gian. Client thường biết rất ít về các state object.
      </p>
      
      <p>
        Với
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          >Strategy Pattern</a
        >, client thường chỉ định strategy object mà Context mong muốn. Bây giờ, trong
        khi mẫu cung cấp tính linh hoạt để thay đổi strategy object trong runtime,
        thường có một strategy object phù hợp nhất cho một Context object. Ví dụ,
        trong
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          >Chương 1</a
        >, một số con vịt của chúng tôi được thiết đặt để bay với hành vi bay bình
        thường (như vịt trời), trong khi những con khác được thiết đặt với hành vi bay
        giữ cho chúng dưới đất (như vịt cao su).
      </p>
      
      <p>
        Nói chung, hãy nghĩ về
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          >Strategy Pattern</a
        >
        như một sự thay thế linh hoạt cho các lớp con; nếu bạn sử dụng tính kế thừa để
        xác định hành vi của một lớp, thì bạn đã bị mắc kẹt với hành vi đó ngay cả khi
        bạn cần thay đổi nó. Với Strategy, bạn có thể thay đổi hành vi bằng cách kết
        hợp với một đối tượng khác.
      </p>
      
      <p>
        Hãy nghĩ về <strong>State Pattern</strong> như một giải pháp thay thế cho việc
        đưa nhiều điều kiện vào ngữ cảnh của bạn; bằng cách gói gọn các hành vi trong
        các State object, bạn có thể chỉ cần thay đổi đối tượng trạng thái trong ngữ
        cảnh để thay đổi hành vi của nó.
      </p>`,
      },
    ],
  },
  {
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi:</strong> Trong <strong>GumballMachine</strong>, các state quyết
        định trạng thái tiếp theo sẽ là gì. <strong>ConcreteState</strong> có luôn
        quyết định đâu sẽ là trạng thái tiếp theo hay không?
      </p>
      
      <p>
        <strong>Đáp:</strong> Không, không phải lúc nào cũng vậy. Có một lựa chọn khác
        là để cho <strong>Context</strong> quyết định luồng chuyển đổi trạng thái.
      </p>
      
      <p>
        Theo nguyên tắc chung, khi các chuyển đổi trạng thái là cố định, chúng thích
        hợp để đưa vào <strong>Context</strong> hơn; tuy nhiên, khi quá trình chuyển
        đổi cần tính linh hoạt, chúng thường được đặt trong chính các state class (ví
        dụ, trong <strong>GumballMachine</strong>, sự lựa chọn chuyển đổi sang
        <strong>NoQuarter</strong> hoặc <strong>SoldOut</strong> phụ thuộc vào số kẹo
        cao su còn lại).
      </p>
      
      <p>
        Nhược điểm của việc chuyển trạng thái trong các state class là chúng ta tạo ra
        sự phụ thuộc giữa các lớp trạng thái. Khi triển khai
        <strong>GumballMachine</strong>, chúng tôi đã cố gắng giảm thiểu điều này bằng
        cách sử dụng các phương thức getter trong <strong>Context</strong>, thay vì
        code trên các lớp <strong>ConcreteState</strong>.
      </p>
      
      <p>
        Lưu ý rằng bằng cách đưa ra quyết định này, bạn đang đưa ra quyết định về việc
        các lớp nào được đóng để sửa đổi – <strong>Context</strong> hoặc các
        <strong>State class</strong> – khi hệ thống phát triển.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Client có bao giờ tương tác trực tiếp với các trạng thái
        không?
      </p>
      
      <p>
        <strong>Đáp:</strong> Không. Các trạng thái được Context sử dụng để thể hiện
        trạng thái và hành vi bên trong của nó, vì vậy tất cả các yêu cầu đối với các
        State object đều đến từ Context. Client không trực tiếp thay đổi trạng thái
        của Context. Đây là công việc theo ngữ cảnh để giám sát trạng thái của nó và
        bạn không muốn một client thay đổi trạng thái của một context khi chúng không
        hề hay biết.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Nếu tôi có nhiều instance của Context trong ứng dụng của
        mình, tôi có thể chia sẻ các state object <br />giữa chúng không?
      </p>
      
      <p>
        <strong>Đáp:</strong> Vâng, hoàn toàn, và trên thực tế đây là một kịch bản rất
        phổ biến. Yêu cầu duy nhất là các đối tượng trạng thái của bạn không giữ trạng
        thái nội bộ của riêng chúng; nếu không, bạn sẽ cần một phiên bản duy nhất cho
        mỗi ngữ cảnh.
      </p>
      
      <p>
        Để chia sẻ trạng thái, bạn sẽ gán mỗi trạng thái cho một biến đối tượng tĩnh.
        Nếu trạng thái của bạn cần sử dụng các phương thức hoặc biến đối tượng trong
        <strong>Context</strong> của bạn, thì bạn cũng sẽ phải cung cấp cho nó một
        tham chiếu đến <strong>Context</strong> trong mỗi phương thức
        <strong>handler()</strong>.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Có vẻ như việc sử dụng State Pattern luôn làm tăng số
        lượng các lớp trong thiết kế của chúng tôi. Hãy xem
        <strong>GumballMachine</strong> của chúng tôi tăng bao nhiêu lớp so với thiết
        kế ban đầu!
      </p>
      
      <p>
        <strong>Đáp:</strong> Bạn nói đúng, bằng cách gói hành vi trạng thái vào các
        lớp trạng thái riêng biệt, bạn sẽ luôn có nhiều lớp hơn trong thiết kế của
        mình. Thường là cái giá bạn phải trả cho sự linh hoạt. Trừ khi code của bạn
        chỉ cần thiết kế và cài đặt một lần duy nhất và không sẽ không bao giờ thay
        đổi, hãy xem xét việc xây dựng nó với các “lớp bổ sung” và bạn có thể cảm ơn
        chính mình (khi bảo trì). Lưu ý rằng thường thì điều quan trọng là số lượng
        các lớp bạn giao tiếp với client của mình và có nhiều cách để ẩn các “lớp bổ
        sung” này khỏi client của bạn (giả sử bằng cách khai báo private, protected…).
      </p>
      
      <p>
        Ngoài ra, hãy xem xét lựa chọn thay thế: nếu bạn có một ứng dụng có nhiều
        trạng thái và bạn quyết định không sử dụng các đối tượng riêng biệt, thay vào
        đó, bạn sẽ kết thúc bằng các câu lệnh <strong>If</strong>. Điều này làm cho
        code của bạn khó duy trì và có thể hiểu. Bằng cách sử dụng các object, bạn làm
        cho các trạng thái rõ ràng và dễ hiểu và duy trì code.
      </p>
      
      <p>
        <strong>Hỏi:</strong> Sơ đồ lớp State Pattern cho thấy State là một lớp trừu
        tượng. Nhưng không phải bạn đã sử dụng một interface trong việc cài đặt trạng
        thái của gumball machine hay sao?
      </p>
      
      <p>
        <strong>Đáp:</strong> Vâng. Do chúng tôi không có chức năng chung để đưa vào
        một lớp trừu tượng, chúng tôi làm nó với một interface. Trong triển khai của
        riêng bạn, bạn có thể muốn xem xét đến một lớp trừu tượng. Làm như vậy có lợi
        ích cho phép bạn thêm các phương thức vào lớp trừu tượng sau này, mà không phá
        vỡ các concrete state.
      </p>`,
      },
    ],
  },
  {
    title: `Chúng tôi vẫn cần hoàn thành trò chơi “Gumball 1 phần 10”`,
    contents: [
      {
        div: `<p>
        Hãy nhớ rằng, chúng ta chưa hoàn thành. Chúng ta còn có một trò chơi để cài
        đặt; nhưng bây giờ chúng ta đã thực hiện State Pattern, nó sẽ rất dễ dàng. Đầu
        tiên, chúng ta cần thêm một trạng thái vào lớp
        <strong>GumballMachine</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_37.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Bây giờ, hãy để cho bản thân lớp <strong>WinnerState</strong> thực hiện các
        hành động, nó giống với lớp <strong>SoldState</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_38.png`),
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
    title: `Hoàn thành trò chơi`,
    contents: [
      {
        div: `<p>
        Chúng ta chỉ cần thực hiện một thay đổi nữa: chúng ta cần cài đặt “cơ hội ngẫu
        nhiên” trong trò chơi và thêm một chuyển đổi trạng thái đến
        <strong>WinnerState</strong>. Chúng tôi sẽ thêm cả hai vào
        <strong>HasQuarterState </strong>bất cứ khi nào khách hàng xoay tay quay:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_39.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Wow, điều đó khá đơn giản để thực hiện! Chúng tôi vừa thêm một trạng thái mới
        vào <strong>GumballMachine </strong>và sau đó cài đặt nó. Tất cả những gì
        chúng tôi phải làm là thực hiện trò chơi may rủi của mình và chuyển sang trạng
        thái chính xác. Có vẻ như chiến lược viết code mới của chúng tôi đang được đền
        đáp…
      </p>`,
      },
    ],
  },
  {
    title: `Demo cho CEO của Mighty Gumball, Inc.`,
    contents: [
      {
        div: `<p>
        Giám đốc điều hành của Mighty Gumball đã ghé qua để xem giới thiệu về code trò
        chơi mới được làm lại của bạn. Hãy hy vọng những trạng thái đó chuyển đổi đúng
        theo suy nghĩ! Chúng tôi sẽ giữ cho bản demo ngắn (khoảng chú ý ngắn của các
        CEO sẽ là tài liệu tốt).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_40.jpg`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_41.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_42.jpg`),
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
        <strong>Hỏi:</strong> Tại sao chúng ta cần <strong>WinnerState</strong>? Chúng
        ta có thể xử lý trả về hai viên kẹo cao su trong lớp
        <strong>SoldState </strong>không?
      </p>
      
      <p>
        <strong>Đáp:</strong> Đó là một câu hỏi hay. <strong>SoldState </strong>và
        <strong>WinnerState </strong>gần như giống hệt nhau, ngoại trừ việc
        <strong>WinnerState </strong>trả về hai viên kẹo cao su thay vì một. Bạn chắc
        chắn có thể viết code để đưa đoạn code trả hai viên kẹo cao su vào
        <strong>SoldState</strong>. Tất nhiên, nhược điểm là bây giờ bạn đã có HAI
        trạng thái được đại diện trong một lớp State:
        <strong>trạng thái mà bạn là người chiến thắng</strong> và
        <strong>trạng thái mà bạn không phải là người chiến thắng</strong>. Vì vậy,
        bạn đang hy sinh “sự rõ ràng” trong lớp State để giảm trùng lặp code.
      </p>
      
      <p>
        Một điều khác cần xem xét là nguyên tắc bạn đã học trong chương trước:
        <strong>Một lớp, Một trách nhiệm</strong>. Bằng cách đặt trách nhiệm
        <strong>WinnerState </strong>vào <strong>SoldState</strong>, bạn đã đưa ra
        trách nhiệm THỨ HAI của <strong>SoldState</strong>. Điều gì xảy ra khi chương
        trình khuyến mãi kết thúc? Hoặc kinh phí của cuộc thi thay đổi? Vì vậy, nó là
        một sự đánh đổi và đi đến quyết định thiết kế.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_43.jpg`),
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
    title: `Sanity testing…`,
    contents: [
      {
        div: `<p>
        Vâng, CEO của Mighty Gumball có lẽ cần
        <u
          title="Sanity testing là một phương pháp trong kiểm thử phần mềm, để test tập trung vào một số chức năng."
          >Sanity testing</u
        >, nhưng đó không phải là những gì chúng ta đang nói ở đây. Hãy suy nghĩ về
        một số khía cạnh của <strong>GumballMachine</strong>:
      </p>
      
      <ul>
        <li>
          Chúng tôi đã có rất nhiều code trùng lặp ở các trạng thái
          <strong>Sold </strong>và <strong>Winning </strong>và chúng tôi có thể muốn
          dọn sạch chúng. Chúng ta sẽ làm điều đó bằng cách nào? Chúng ta có thể biến
          State thành một lớp trừu tượng và cài đặt một số hành vi mặc định cho các
          phương thức; dù sao, các thông báo lỗi như, “You already inserted a
          quarter”, khách hàng sẽ không nhìn thấy. Vì vậy, tất cả các phản ứng lỗi của
          hành vi có thể là chung chung và được kế thừa từ lớp abstract State.
        </li>
        <li>
          Phương thức <strong>dispense()</strong> luôn được gọi, ngay cả khi xoay tay
          quay khi không có đồng xu. Mặc dù máy hoạt động chính xác và không phân phát
          kẹo trừ khi nó ở trạng thái phù hợp, chúng tôi có thể dễ dàng khắc phục điều
          này bằng cách cài đặt <strong>turnCrank()</strong> return một boolean hoặc
          bằng cách ném ra các exception. Bạn có nghĩ giải pháp nào là tốt hơn không?
        </li>
        <li>
          Tất cả các sự thông minh cho chuyển đổi trạng thái nằm bên trong các lớp
          State. Vấn đề này có thể gây ra điều gì? Chúng ta có muốn chuyển logic đó
          vào lớp Gumball Machine không? Khi thực hiện như vậy có ưu điểm và khuyết
          điểm gì?
        </li>
        <li>
          Bạn sẽ khởi tạo rất nhiều đối tượng <strong>GumballMachine</strong> đúng
          chứ? Nếu vậy, bạn có thể muốn chuyển các state instance thành các static
          instance và chia sẻ chúng với nhau. Những thay đổi này sẽ yêu cầu những gì
          từ <strong>GumballMachine </strong>và <strong>State</strong>?
        </li>
      </ul>
      `,
      },
    ],
  },
  {
    title: `Tối nay: Một cuộc hội ngộ Strategy và State Pattern`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_44.jpg`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Strategy:</strong> Này anh bạn. Bạn có nghe tôi ở Chương 1 không?</p>

        <p><strong>State: </strong>Vâng, chắc chắn tôi đã nghe qua tên anh đâu đó.</p>
        
        <p>
          <strong>Strategy: </strong>Tôi vừa mới giúp đỡ cho
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/10"
            >Template Method</a
          >
          – anh ấy cần tôi giúp để hoàn thành chương 8. Vì vậy, anh trai cao quý của
          tôi, anh là ai?
        </p>
        
        <p>
          <strong>State: </strong>Giống như mọi khi – giúp các lớp thể hiện các hành vi
          khác nhau ở các trạng thái khác nhau.
        </p>
        
        <p>
          <strong>Strategy: </strong>Tôi không biết điều đó, có vẻ như bạn đã làm giống
          những gì tôi làm và bạn chỉ sử dụng các từ khác nhau để mô tả nó. Hãy suy nghĩ
          điều này: Tôi cho phép các đối tượng kết hợp các hành vi hoặc thuật toán khác
          nhau thông qua kết hợp (composition) và ủy quyền (delegation). Bạn chỉ sao
          chép tôi thôi.
        </p>
        
        <p>
          <strong>State: </strong>Tôi thừa nhận rằng những gì chúng ta làm chắc chắn có
          liên quan, nhưng ý định của tôi hoàn toàn khác với bạn. Và, cách tôi chỉ cho
          client của mình sử dụng kết hợp (composition) và ủy quyền (delegation) là hoàn
          toàn khác với anh.
        </p>
        
        <p><strong>Strategy: </strong>Ồ vâng? Làm thế nào? Tôi không biết điều đó.</p>
        
        <p>
          <strong>State: </strong>Chà, nếu anh dành thêm một chút thời gian để đi ra bên
          ngoài, anh có thể hiểu. Dù sao, hãy suy nghĩ về cách anh làm việc: anh có một
          lớp được khởi tạo và anh thường cung cấp cho nó một “chiến lược” thực hiện một
          số hành vi. Giống như, trong Chương 1, anh đã đưa ra các hành vi tiếng vịt kêu
          (quack), phải không? Vịt thật thì có một tiếng kêu quack “thực sự”, còn vịt
          cao su có một tiếng quack nhưng kêu ré lên.
        </p>
        
        <p>
          <strong>Strategy: </strong>Vâng, đó là một công việc tốt… và tôi chắc chắn bạn
          có thể thấy làm như vậy mạnh mẽ hơn so với kế thừa hành vi của bạn, phải
          không?
        </p>
        
        <p>
          <strong>State: </strong>Phải, tất nhiên. Bây giờ, hãy nghĩ về cách tôi làm
          việc; Nó khác hoàn toàn.
        </p>
        
        <p><strong>Strategy: </strong>Xin lỗi, bạn sẽ phải giải thích điều đó.</p>
        
        <p>
          <strong>State: </strong>Được rồi, khi các đối tượng
          <strong>Context </strong>của tôi được tạo, tôi có thể cho chúng biết trạng
          thái bắt đầu, nhưng sau đó theo thời gian chúng thay đổi trạng thái của chính
          chúng.
        </p>
        
        <p>
          <strong>Strategy: </strong>Này, thôi nào, tôi cũng có thể thay đổi hành vi
          trong runtime; Đó là tất cả những gì tôi đã nói về composition!
        </p>
        
        <p>
          <strong>State: </strong>Chắc chắn bạn có thể, nhưng cách tôi làm việc được xây
          dựng xung quanh các trạng thái riêng biệt; Các đối tượng
          <strong>Context </strong>của tôi thay đổi trạng thái theo thời gian theo một
          số chuyển đổi trạng thái được xác định rõ. Nói cách khác, thay đổi hành vi
          được xây dựng theo sơ đồ của tôi – đó là cách tôi làm việc!
        </p>
        
        <p>
          <strong>Strategy: </strong>Chà, tôi thừa nhận, tôi không khuyến khích các đối
          tượng của mình xác định rõ sự liên hệ và chuyển đổi giữa các trạng thái. Trên
          thực tế, tôi thường thích kiểm soát chiến lược mà các đối tượng của tôi đang
          sử dụng.
        </p>
        
        <p>
          <strong>State: </strong>Hãy nhìn xem, tôi đã nói rằng chúng ta giống nhau về
          cấu trúc, nhưng những gì chúng ta làm hoàn toàn khác nhau về ý định. Đối mặt
          với nó, thế giới đã sử dụng cả hai chúng ta.
        </p>
        
        <p>
          <strong>Strategy: </strong>Yeah, yeah, tiếp tục sống giấc mơ của bạn. Bạn hành
          động như bạn là một mẫu lớn như tôi, nhưng hãy tự nhìn lại đi: Tôi nằm trong
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
            >Chương 1</a
          >; họ đặt bạn trong Chương 10. Ý tôi là, có bao nhiêu người thực sự sẽ đọc đến
          đây?
        </p>
        
        <p>
          <strong>State: </strong>Bạn đang giỡn đấy à? Đây là một cuốn sách Head First
          và người đọc Head First rất cừ khôi. Tất nhiên, họ sẽ đọc đến Chương 10!
        </p>
        
        <p>
          <strong>Strategy: </strong>Đó mới là người anh em của tôi, luôn là người mơ
          mộng.
        </p>`,
      },
    ],
  },
  {
    title: `Chúng tôi gần như quên mất!`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_45.jpg`),
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
    title: `Gọt lại bút chì`,
    contents: [
      {
        div: `<p>
        Chúng tôi cần bạn viết phương thức <strong>refill()</strong> cho máy Gumball.
        Nó có một đối số (số lượng kẹo cao su mà bạn thêm vào máy) và nên cập nhật số
        lượng máy kẹo cao su và đặt lại trạng thái máy.
      </p>
      
      <p><strong>Đáp án:</strong></p>`,
      },
      {
        code: {
          src: `void refill(int count) {
    this.count = count;
    state = noQuarterState;
}`,
          language: 'java',
        },
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_46.jpg`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>Bài tập:</strong></p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_47.jpg`),
          width: `60%`,
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
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-13_48.jpg`),
          width: `60%`,
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
          <strong>State Pattern</strong> cho phép một đối tượng có nhiều hành vi khác
          nhau dựa trên trạng thái bên trong của nó.
        </li>
        <li>
          Không giống như một state machine thủ tục (if…else…),
          <strong>State Pattern</strong> biểu thị trạng thái dưới dạng một lớp đầy đủ.
        </li>
        <li>
          Context có được hành vi của nó bằng cách ủy quyền cho đối tượng trạng thái
          hiện tại mà nó được thiết đặt.
        </li>
        <li>
          Bằng cách gói gọn mỗi trạng thái vào một lớp, chúng tôi “bản địa hóa” mọi
          thay đổi sẽ cần phải thực hiện.
        </li>
        <li>
          <strong>State Pattern</strong> và
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
            >Strategy Pattern</a
          >
          có cùng sơ đồ lớp, nhưng chúng khác nhau về ý định.
        </li>
        <li>
          <strong
            ><a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
              >Strategy Pattern</a
            ></strong
          >
          thường cài đặt các lớp Context bằng một hành vi hoặc thuật toán.
        </li>
        <li>
          <strong>State Pattern</strong> cho phép một Context thay đổi hành vi của nó
          khi trạng thái của Context thay đổi.
        </li>
        <li>
          Chuyển đổi trạng thái có thể được kiểm soát bởi các lớp State hoặc bởi các
          lớp Context.
        </li>
        <li>
          Sử dụng <strong>State Pattern</strong> thường sẽ dẫn đến số lượng lớp lớn
          hơn trong thiết kế của bạn.
        </li>
        <li>Các lớp trạng thái có thể được chia sẻ giữa các Context instance.</li>
      </ul>`,
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
