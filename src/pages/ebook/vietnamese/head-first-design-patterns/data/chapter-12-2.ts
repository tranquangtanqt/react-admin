import IContent from 'utils/interface';

export const chapter12_2: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        div: `<p>
        Elvis có một &#8220;mẫu kết hợp&#8221; (kết hợp các design pattern), anh ấy sẽ
        đặt tên cho chúng là là <strong>Model-View-Controller</strong>, và anh ấy sẽ
        hát một bài hát nhỏ như thế này…
      </p>`,
      },
      {
        div: `<iframe
        title="MVC Song"
        width="688"
        height="516"
        src="https://www.youtube.com/embed/YYvOGPMLVDo?feature=oembed"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`,
      },
      {
        div: `<table>
        <tbody>
          <tr>
            <td>
              <strong>Model View Controller</strong><br /><em
                >Lyrics and music: James Dempsey</em
              ><br /><br />MVC’s a paradigm for factoring your code into functional
              segments, so your brain does not explode.<br />To achieve reusability,
              you gotta keep those boundaries clean Model on the one side, View on the
              other, the Controller’s in between.<br />Model View, it’s got three
              layers like Oreos <br />Model View Controller<br />Model View, Model
              View, Model View Controller<br />Model objects represent your
              application’s raison d’être<br />Custom objects that contain data,
              logic, and et cetera<br />You create custom classes, in your app’s
              problem domain<br />you can choose to reuse them with all the views<br />but
              the model objects stay the same.<br />You can model a throttle and a
              manifold<br />Model the toddle of a two year old<br />Model a bottle of
              fine Chardonnay<br />Model all the glottal stops people say<br />Model
              the coddling of boiling eggs<br />You can model the waddle in Hexley’s
              legs<br />Model View, you can model all the models that pose for GQ<br />Model
              View Controller<br />View objects tend to be controls used to display
              and edit<br />Cocoa’s got a lot of those, well written to its credit.<br />Take
              an NSTextView, hand it any old Unicode string<br />The user can interact
              with it, it can hold most anything<br />But the view don’t know about
              the Model<br />That string could be a phone number or the works of
              Aristotle<br />Keep the coupling loose and so achieve a massive level of
              reuse<br />Model View, all rendered very nicely in Aqua blue<br />Model
              View Controller<br />You’re probably wondering now<br />You’re probably
              wondering how<br />Data flows between Model and View<br />The Controller
              has to mediate<br />Between each layer’s changing state<br />To
              synchronize the data of the two<br />It pulls and pushes every changed
              value<br />Model View, mad props to the smalltalk crew!<br />Model View
              Controller<br />Model View, it’s pronounced Oh Oh not Ooo Ooo<br />Model
              View Controller<br />There’s a little left to this story<br />A few more
              miles upon this road<br />Nobody seems to get much glory<br />From
              writing the controller code<br />Well the model’s mission critical<br />And
              gorgeous is the view<br />I might be lazy, but sometimes it’s just
              crazy<br />How much code I write is just glue<br />And it wouldn’t be so
              tragic<br />But the code ain’t doing magic<br />It’s just moving values
              through<br />And I don’t mean to be vicious<br />But it gets
              repetitious<br />Doing all the things controllers do<br />And I wish I
              had a dime<br />For every single time<br />I sent a TextField
              StringValue.<br />Model View<br />How we gonna deep six all that glue<br />Model
              View Controller<br />Controllers know the Model and View very
              intimately<br />They often use hardcoding which can be foreboding for
              reusability<br />But now you can connect each model key that you select
              to any view property<br />And once you start binding<br />I think you’ll
              be finding less code in your source tree<br />Yeah I know I was elated
              by the stuff they’ve automated the things you get for free<br />And I
              think it bears repeating all the code you won’t be needing when you hook
              it up in IB.<br />Model View, even handles multiple selections too<br />Model
              View Controller<br />Model View, bet I ship my application before you<br />Model
              View Controller
            </td>
            <td>
              <strong>Model View Controller</strong><br /><em
                >Nhạc và lời: James Dempsey</em
              ><br /><br />MVC là một mẫu để chia code của bạn thành các phần chức
              năng,để não của bạn sẽ không bị nổ tung.<br />Để đạt được khả năng tái
              sử dụng, bạn phải giữ cho các ranh giới đó rõ ràng Model ở một bên, View
              ở bên kia, Controller sẽ ở giữa.<br />Model View, nó có ba lớp giống
              bánh Oreo <br />Model View Controller<br />Model View, Model View, Model
              View Controller<br />Model object đại diện cho raison d’être của ứng
              dụng<br />Các object tùy chỉnh chứa dữ liệu, cả logic và vân
              vân&#8230;<br />Bạn tạo custom classes, trong problem domain của ứng
              dụng<br />bạn có thể chọn dùng lại chúng với tất cả views<br />nhưng các
              Model vẫn được giữ nguyên.<br />Bạn có thể model một throttle và
              manifold<br />Làm cho Model trẻ đi hai tuổi<br />Model một chai
              Chardonnay ngon<br />Model tất cả thứ mà mọi người nói<br />Model hóa
              những cái trứng luộc<br />Bạn model thuyền buồm Hexley’s legs<br />Model
              View, bạn có thể model tất cả các model cho GQ<br />Model View
              Controller<br />View object thường được Controller dùng display và
              edit<br />Cocoa có rất nhiều trong số đó, được ghi nhận tốt.<br />Lấy
              NSTextView, giao nó bất kỳ chuỗi Unicode cũ<br />Người dùng có thể tương
              tác với nó, nó có thể chứa mọi thứ<br />Nhưng View không biết về
              Model<br />String có thể là số điện thoại hoặc các tác phẩm của
              Aristotle<br />Giữ cho khớp nối &#8220;lỏng lẻo&#8221; và do đó đạt mức
              độ tái sử dụng lớn<br />Model View, tất cả được hiển thị đẹp bằng màu
              xanh<br />Model View Controller<br />Bây giờ có lẽ bạn đang tự hỏi<br />Có
              thể bạn đang tự hỏi làm thế nào<br />Luồng dữ liệu giữa Model và View<br />Controller
              phải làm trung gian<br />Giữa trạng thái thay đổi của mỗi lớp<br />Để
              đồng bộ hóa dữ liệu cả hai<br />Nó kéo và đẩy mọi giá trị đã thay đổi<br />Model
              View, công cụ cho cuộc giao tiếp nhỏ!<br />Model View Controller<br />Model
              View, nó phát âm là Oh Oh not Ooo Ooo<br />Model View Controller<br />Còn
              lại một chút cho câu chuyện này<br />Một vài dặm trên con đường này<br />Dường
              như không ai đạt nhiều vinh quang<br />Từ việc viết controller code<br />Vâng,
              sứ mệnh của model rất quan trọng<br />Và tuyệt đẹp là View<br />Tôi có
              thể lười, nhưng đôi khi nó thật điên rồ<br />Tôi viết bao nhiêu code như
              là &#8220;keo&#8221;<br />Và nó sẽ không bi thảm như vậy<br />Nhưng code
              không hoạt động kỳ diệu<br />Nó chỉ di chuyển thông qua value<br />Và
              tôi không có ý xấu<br />Nhưng nó lặp đi lặp lại<br />Làm tất cả những
              điều controller làm<br />Và tôi ước mình có 1 xu<br />Cho mọi lần<br />Tôi
              đã gửi một TextField StringValue.<br />Model View<br />How we gonna deep
              six all that glue<br />Model View Controller<br />Controllers hiểu biết
              rất rõ về Model và View<br />Chúng thường sử dụng code cứng, thứ có thể
              được mã hóa để dùng lại<br />Nhưng bây giờ có thể kết nối model key<br />chọn
              với bất kỳ view property<br />Và một khi bạn bắt đầu binding<br />Tôi
              nghĩ rằng bạn sẽ thấy ít code hơn trong source<br />Vâng, tôi biết tôi
              đã rất phấn khích bởi họ đã tự động hóa những thứ bạn nhận miễn phí<br />Và
              tôi nghĩ rằng nó sẽ lặp lại tất cả code bạn sẽ không cần khi kết nối
              (hook) nó trong IB.<br />Model View, thậm chí cũng xử lý nhiều lựa
              chọn<br />Model View Controller<br />Model View, cá là tôi gửi ứng dụng
              của tôi trước bạn<br />Model View Controller
            </td>
          </tr>
        </tbody>
      </table>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_1.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_2.png`),
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
    title: `Không. Mẫu thiết kế là chìa khóa của bạn đối với MVC.`,
    contents: [
      {
        div: `<p>
        Chúng tôi chỉ cố gắng kích thích sự &#8220;thèm ăn&#8221; của bạn. Sau khi bạn
        đọc xong chương này, hãy quay lại và nghe lại bài hát &#8211; bạn sẽ thấy còn
        thú vị hơn nữa.<br />Có vẻ như trước đây bạn đã gặp khó khăn khi học mẫu MVC?
        Hầu hết chúng ta đều như vậy. Bạn có thể đã nghe những Dev khác nói với bạn
        rằng MVC đã thay đổi cuộc đời họ và có thể tạo ra &#8220;hòa bình thế
        giới&#8221;. Chắc chắn đó là một mẫu &#8220;phức hợp&#8221; mạnh mẽ và mặc dù
        chúng tôi không thể khẳng định nó sẽ tạo ra hòa bình thế giới, nhưng nó sẽ
        giúp bạn tiết kiệm hàng giờ viết code, khi bạn biết về nó.<br />Nhưng trước
        tiên bạn phải tìm hiểu MVC, phải không? Chà, sẽ có sự khác biệt rất lớn nếu
        bạn đã biết về các mẫu thiết kế!<br />Đúng vậy, các mẫu thiết kế khác là
        &#8220;chìa khóa&#8221; của MVC. Chỉ học riêng MVC sẽ rất khó; không nhiều Dev
        thành công bằng cách học này. Đây là bí quyết để học MVC: MVC chỉ là một vài
        Design pattern khác được ghép lại với nhau. Khi bạn tiếp cận việc học MVC bằng
        cách xem xét các design pattern khác, thì đột nhiên MVC bắt đầu dễ hiểu.<br />Bắt
        đầu nào. Lần này, bạn sẽ hiểu được MVC!
      </p>`,
      },
    ],
  },
  {
    title: `Xem qua Model-View-Controller`,
    contents: [
      {
        div: `<p>
        Hãy tưởng tượng bạn đang sử dụng máy nghe nhạc MP3 yêu thích của mình, chẳng
        hạn như iTunes. Bạn có thể sử dụng các chức năng của nó để thêm các bài hát
        mới, quản lý danh sách phát và đổi tên các bản nhạc. Trình phát sẽ đảm bảo
        việc duy trì một cơ sở dữ liệu nhỏ về tất cả các bài hát của bạn cùng với tên
        và dữ liệu liên quan của chúng. Nó cũng quản lý việc phát các bài hát và giao
        diện người dùng được cập nhật liên tục với tên bài hát hiện tại, thời gian
        chạy, v.v.<br />Chà, code bên trong nó chính là Model-View-Controller …
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_3.png`),
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
    title: `Một cái nhìn sâu hơn`,
    contents: [
      {
        div: `<p>
        Mô tả của MP3 Player cung cấp cho chúng ta cái nhìn tổng quát về MVC, nhưng nó
        thực sự không giúp bạn hiểu rõ ràng về cách thức hoạt động của chúng, cách bạn
        xây dựng hoặc &#8220;tại sao nó lại là một điều tốt?&#8221;. Hãy bắt đầu bằng
        cách xem qua các mối quan hệ giữa Model, View và Controller, sau đó chúng ta
        sẽ xem xét từ quan điểm của Mẫu thiết kế.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_4.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p><strong>1. Bạn là người dùng &#8211; bạn tương tác với View.</strong></p>

        <p>
          View là cửa sổ của bạn tới Model. Khi bạn làm điều gì đó với View (như nhấp
          vào nút Play) thì View sẽ cho Controller biết bạn đã làm gì. Công việc của
          Controller là xử lý điều đó.
        </p>
        
        <p><strong>2. Controller yêu cầu Model thay đổi trạng thái của nó</strong></p>
        
        <p>
          Controller thực hiện các hành động của bạn và diễn giải chúng. Nếu bạn nhấp
          vào một button, công việc của Controller là tìm ra điều đó có nghĩa là gì, và
          Model sẽ được điều khiển như thế nào dựa trên hành động đó.
        </p>
        
        <p><strong>3. Controller cũng có thể yêu cầu view thay đổi.</strong></p>
        
        <p>
          Khi Controller nhận được một hành động từ View, nó có thể cần yêu cầu View
          thay đổi. Ví dụ, Controller có thể bật hoặc tắt một số nút hoặc chọn menu
          trong giao diện.
        </p>
        
        <p>
          <strong
            >4. Model thông báo cho View khi trạng thái của nó đã thay đổi.</strong
          >
        </p>
        
        <p>
          Khi có điều gì đó thay đổi trong Model, dựa trên một số hành động bạn đã thực
          hiện (như nhấp vào nút) hoặc một số thay đổi nội bộ khác (như bài hát tiếp
          theo trong danh sách phát đã bắt đầu), Model sẽ thông báo cho View rằng trạng
          thái của nó đã thay đổi.
        </p>
        
        <p><strong>5. View yêu cầu Model cho trạng thái.</strong></p>
        
        <p>
          View có trạng thái hiển thị trực tiếp từ Model. Ví dụ: khi Model thông báo cho
          View rằng một bài hát mới đã bắt đầu phát, View sẽ yêu cầu tên bài hát từ
          Model và hiển thị nó. View cũng có thể yêu cầu Model cho trạng thái do
          Controller yêu cầu một số thay đổi trong View.
        </p>`,
      },
    ],
  },
  {
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi: Controller có bao giờ trở thành observer của Model không?</strong
        ><br /><strong>Đáp:</strong> Chắc chắn. Trong một số thiết kế, Controller đăng
        ký với Model và được thông báo về những thay đổi. Đây có thể là trường hợp khi
        một cái gì đó trong Model ảnh hưởng trực tiếp đến các điều khiển giao diện
        người dùng. Ví dụ: một số trạng thái nhất định trong Model có thể yêu cầu một
        số mục giao diện được bật hoặc tắt. Nếu vậy, việc của Controller thực sự là
        yêu cầu View cập nhật màn hình cho phù hợp.
      </p>
      
      <p>
        <strong
          >Hỏi: Tất cả những gì Controller làm là lấy input của người dùng từ View và
          &#8220;gửi nó đến Model&#8221;, đúng không? Tại sao lại có Controller làm
          gì, nếu đó là tất cả những gì nó làm? Tại sao không code trực tiếp trong
          View? Trong hầu hết các trường hợp, không phải Controller chỉ gọi một phương
          thức trên Model?</strong
        ><br /><strong>Đáp:</strong> Controller không chỉ “gửi nó đến Model”,
        Controller chịu trách nhiệm diễn giải đầu vào và thao tác với Model dựa trên
        đầu vào đó. Nhưng câu hỏi thực sự của bạn có lẽ là &#8220;tại sao tôi không
        thể làm điều đó trong View?&#8221; Bạn có thể làm như vậy; tuy nhiên, bạn sẽ
        không muốn vì hai lý do: Thứ nhất, bạn sẽ làm phức tạp View của mình vì lúc
        này view sẽ có hai trách nhiệm: quản lý giao diện người dùng và xử lý logic về
        cách kiểm soát Model. Thứ hai, bạn đang gắn chặt View của mình với Model. Nếu
        bạn muốn sử dụng lại View với một Model khác, sẽ không thể. Controller tách
        logic điều khiển khỏi View và tách View khỏi Model. Bằng cách giữ cho View và
        Controller được ghép nối một cách &#8220;lỏng lẻo&#8221;, bạn đang xây dựng
        một thiết kế linh hoạt và có thể mở rộng hơn, một thiết kế có thể dễ dàng
        thích ứng với những thay đổi trong tương lai.
      </p>`,
      },
    ],
  },
  {
    title: `Nhìn MVC qua lăng kính của các Pattern`,
    contents: [
      {
        div: `<p>
        Chúng tôi đã cho bạn biết cách tốt nhất để học MVC là xem MVC như một tập hợp
        các mẫu thiết kế hoạt động cùng nhau. Hãy bắt đầu với Model. Như bạn có thể
        đoán được, Model sử dụng mẫu Observer để cập nhật các <strong>View</strong> và
        <strong>Controller</strong> cho các thay đổi trạng thái mới nhất.<br />Mặt
        khác, <strong>View</strong> và <strong>Controller</strong> áp dụng
        <strong
          ><a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
            >Strategy Pattern</a
          ></strong
        >. <strong>Controller</strong> là một &#8220;hành vi&#8221; của
        <strong>View</strong> (như ở Chương 1, Bay là một hành vi của Duck) và nó có
        thể dễ dàng được trao đổi với một <strong>Controller</strong> khác nếu bạn
        muốn hành vi khác. Bản thân View cũng sử dụng một mẫu bên trong để quản lý các
        cửa sổ, nút và các thành phần khác của màn hình:
        <strong>Mẫu Composite</strong>.<br />Hãy xem xét kỹ hơn:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_5.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_6.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_7.png`),
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
    title: `Sử dụng MVC để điều khiển beat nhạc…`,
    contents: [
      {
        div: `<p>
        Đã đến lúc bạn trở thành DJ. Khi bạn là một DJ, tất cả về chúng là nhịp điệu.
        Bạn có thể bắt đầu bản mix của mình với một cài đặt downtempo chậm lại ở tốc
        độ 95 nhịp mỗi phút (BPM) và sau đó đưa đám đông lên đến 140 BPM điên cuồng
        của kỹ thuật trance. Bạn sẽ kết thúc với sự kết hợp môi trường xung quanh 80
        BPM êm dịu.<br />Bạn sẽ làm thế nào? Bạn phải kiểm soát nhịp và cần xây dựng
        công cụ để đưa bạn đến đó.
      </p>`,
      },
    ],
  },
  {
    title: `Gặp gỡ Java DJ View`,
    contents: [
      {
        div: `<p>
        Hãy bắt đầu với <strong>View </strong>của công cụ. <strong>View </strong>cho
        phép bạn tạo nhịp trống và điều chỉnh lại nhịp mỗi phút …
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_8.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_9.png`),
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
    title: `Controller ở giữa…`,
    contents: [
      {
        div: `<p>
        <strong>Controller </strong>nằm giữa <strong>View </strong>và
        <strong>Model</strong>. Nó nhận đầu vào (input) của bạn, chẳng hạn như chọn
        “Start” từ menu DJ Control và biến nó thành một hành động trên Model để bắt
        đầu tạo nhịp.
      </p>`,
      },
    ],
  },
  {
    title: `Đừng quên về Model ở bên dưới tất cả…`,
    contents: [
      {
        div: `<p>
        Bạn không thể nhìn thấy Model, nhưng bạn có thể &#8220;nghe thấy&#8221; nó.
        Model nằm bên dưới mọi thứ khác, quản lý nhịp và điều khiển loa bằng MIDI.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_10.png`),
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
    title: `Đặt các phần lại với nhau`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_11.png`),
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
    title: `Xây dựng các phần`,
    contents: [
      {
        div: `<p>
        Được rồi, bạn biết Model chịu trách nhiệm duy trì tất cả dữ liệu, trạng thái
        và mọi logic ứng dụng. Vậy <strong>BeatModel </strong>có gì trong đó? Công
        việc chính của nó là quản lý nhịp, vì vậy nó có trạng thái duy trì nhịp hiện
        tại mỗi phút và rất nhiều Code tạo ra các sự kiện MIDI để tạo ra nhịp mà chúng
        ta nghe thấy. Nó cũng hiển thị một giao diện cho phép
        <strong>Controller</strong> thao tác nhịp và cho phép <strong>View </strong>và
        <strong>Controller</strong> có được trạng thái của
        <strong>Model</strong>.<br />Ngoài ra, đừng quên rằng
        <strong>Model </strong>sử dụng
        <strong
          ><a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/2"
            >Observer Pattern</a
          ></strong
        >, vì vậy chúng ta cũng cần một số phương thức để cho phép các đối tượng đăng
        ký làm <strong>Observer </strong>và gửi thông báo.
      </p>
      
      <p>
        Hãy xem <strong>BeatModelInterface </strong>trước khi xem cách triển khai:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_12.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>Bây giờ chúng ta hãy xem xét lớp <strong>BeatModel </strong>cụ thể:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_13.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Mô hình này sử dụng hỗ trợ âm thanh MIDI của Java để tạo beat. Bạn có thể kiểm
        tra việc triển khai đầy đủ tất cả các lớp DJ trong tệp nguồn Java có sẵn trên
        trang <strong>headfirstlabs.com</strong> hoặc xem code ở cuối chương.
      </p>
      `,
      },
    ],
  },
  {
    title: `View`,
    contents: [
      {
        div: `<p>
        Bây giờ niềm vui bắt đầu; chúng ta có thể kết nối một <strong>View </strong>và
        hình dung ra <strong>BeatModel</strong>!<br />Điều đầu tiên cần lưu ý về View
        là chúng tôi đã triển khai View để nó được hiển thị trong hai cửa sổ riêng
        biệt. Một cửa sổ chứa BPM hiện tại; cái kia chứa các điều khiển giao diện. Tại
        sao ư? Chúng tôi muốn nhấn mạnh sự khác biệt giữa giao diện chứa View Model và
        phần còn lại của giao diện chứa tập hợp các điều khiển của người dùng. Chúng
        ta hãy xem xét kỹ hơn hai phần của View:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_14.png`),
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
        <strong>BeatModel </strong>của chúng tôi không đưa ra giả định nào về lượt
        xem. Model được thực hiện bằng cách sử dụng Observer, vì vậy nó chỉ thông báo
        cho những View nào được đăng ký làm &#8220;người quan sát&#8221; khi trạng
        thái của nó thay đổi. View sử dụng API của Model để có quyền truy cập vào
        trạng thái. Chúng tôi đã triển khai một loại View, bạn có thể nghĩ đến các
        View khác có thể sử dụng các thông báo và trạng thái trong
        <strong>BeatModel </strong>không?
      </p>
      
      <p>
        <strong>Ví dụ:</strong> Một buổi trình diễn ánh sáng dựa trên nhịp thời gian
        thực? Chế độ xem dạng text hiển thị thể loại nhạc dựa trên BPM (môi trường
        xung quanh, nhịp điệu, công nghệ, v.v.)
      </p>`,
      },
    ],
  },
  {
    title: `Triển khai View`,
    contents: [
      {
        div: `<p>
        Hai phần của dạng View &#8211; là View của Model và View với các điều khiển
        giao diện người dùng &#8211; được hiển thị trong hai cửa sổ, nhưng cùng tồn
        tại trong một lớp Java. Trước tiên, chúng tôi sẽ chỉ cho bạn thấy code tạo
        View của Model, hiển thị BPM hiện tại và thanh nhịp.<br />Sau đó, chúng tôi sẽ
        quay lại trang tiếp theo và chỉ hiển thị cho bạn code tạo ra các điều khiển
        giao diện người dùng, hiển thị trường nhập văn bản BPM và các button.
      </p>
      `,
      },
    ],
  },
  {
    title: `Đoạn code trên trang này chỉ là một phác thảo!`,
    contents: [
      {
        div: `<p>
        Những gì chúng tôi đã làm ở đây là chia MỘT lớp thành HAI, hiển thị cho bạn
        một phần của View trên trang này và phần khác trên trang tiếp theo. Tất cả
        code này thực sự nằm trong MỘT lớp &#8211; <strong>DJView.java</strong>. Tất
        cả được liệt kê ở cuối chương.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_15.png`),
          width: `80%`,
          align: `center`,
        },
      },
    ],
  },
  {
    title: `Tiếp tục triển khai View…`,
    contents: [
      {
        div: `<p>
        Bây giờ, chúng ta sẽ xem xét code cho phần control giao diện người dùng của
        View. View này cho phép bạn điều khiển Model bằng cách cho Controller biết
        phải làm gì, từ đó sẽ cho Model biết phải làm gì. Hãy nhớ rằng code này nằm
        trong cùng một tệp lớp với code View khác.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_16.png`),
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
    title: `Bây giờ cho Controller`,
    contents: [
      {
        div: `<p>
        Đã đến lúc viết phần còn thiếu: <strong>Controller</strong>. Hãy nhớ rằng
        <strong>Controller</strong> là chiến lược (strategy) mà chúng tôi đưa vào View
        để cung cấp cho nó một số tính năng thông minh.<br />Bởi vì chúng tôi đang
        triển khai Mẫu chiến lược, chúng tôi cần bắt đầu với interface cho bất kỳ
        Strategy nào có thể được dùng vào DJ View. Chúng tôi sẽ gọi nó là
        <strong>ControllerInterface</strong>.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_17.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        <strong>Bài tập:</strong> Bạn đã thấy rằng <strong>View </strong>và
        <strong>Controller</strong> cùng sử dụng Mẫu chiến lược. Bạn có thể vẽ một sơ
        đồ lớp của hai đại diện cho mô hình này không?
      </p>
      
      <p>Và đây là cách triển khai Controller:</p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_18.png`),
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
    title: `Đặt tất cả lại với nhau`,
    contents: [
      {
        div: `<p>
        Chúng tôi có mọi thứ mình cần: <strong>Model</strong>,
        <strong>View </strong>và <strong>Controller</strong>.<br />Bây giờ đã đến lúc
        tập hợp tất cả chúng lại thành một MVC! Chúng ta sẽ xem cách chúng làm việc
        cùng nhau hiệu quả như thế nào.<br />Tất cả những gì chúng ta cần là một đoạn
        code nhỏ để bắt đầu mọi thứ:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_19.png`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_20.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>Kết quả</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_21.png`),
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
    title: `Những thứ đã làm`,
    contents: [
      {
        div: `<p>
        1. Bắt đầu tạo beat với menu Start; thông báo
        <strong>Controller</strong> disable menu này ngay sau đó.<br />2. Sử dụng mục
        nhập văn bản cùng với các nút tăng và giảm để thay đổi BPM. Lưu ý cách
        <strong>View </strong>phản ánh những thay đổi mặc dù thực tế là nó không có
        liên kết logic với các <strong>Controller</strong>.<br />3. Lưu ý cách
        &#8220;beat bar&#8221; luôn theo kịp beat vì nó là observer của
        <strong>Model</strong>.<br />4. Đặt bài hát yêu thích của bạn và xem liệu beat
        có tăng, giảm hay không bằng cách sử dụng các nút điều khiển tăng(&gt;&gt;) và
        giảm (&lt;&lt;).<br />5. Dừng phát. Lưu ý cách
        <strong>Controller</strong> disable menu Stop và enable menu Start.
      </p>`,
      },
    ],
  },
  {
    title: `Khám phá Strategy`,
    contents: [
      {
        div: `<p>
        Hãy cùng tìm hiểu Mẫu Strategy xa hơn một chút để hiểu rõ hơn về cách nó được
        sử dụng trong MVC. Chúng ta cũng sẽ thấy một mẫu thân thiện khác cũng xuất
        hiện &#8211; một mẫu bạn sẽ thường thấy xung quanh bộ ba MVC: Mẫu Adapter.<br />Hãy
        suy nghĩ một chút về những gì View DJ thực hiện: nó hiển thị tốc độ beat. Điều
        đó có giống như một cái gì đó khác không? Làm thế nào về một nhịp tim? Tình cờ
        là chúng tôi có một Class theo dõi tim; đây là sơ đồ lớp:
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_22.png`),
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
    title: `Sử dụng sức mạnh bộ não`,
    contents: [
      {
        div: `<p>
        Chắc chắn sẽ rất tuyệt nếu sử dụng lại View hiện tại của chúng tôi với
        <strong>HeartModel</strong>, nhưng chúng tôi cần một
        <strong>Controller</strong> hoạt động với <strong>Model </strong>này. Ngoài
        ra, giao diện của <strong>HeatModel </strong>không phù hợp với những gì mà
        <strong>View </strong>mong đợi vì nó có phương thức
        <strong>getHeartRate() </strong>chứ không phải là <strong>getBPM()</strong>.
        Bạn sẽ thiết kế một tập hợp các lớp như thế nào để cho phép
        <strong>View </strong>được sử dụng lại với <strong>Model </strong>mới?
      </p>`,
      },
    ],
  },
  {
    title: `Adapting the Model`,
    contents: [
      {
        div: `<p>
        Đối với người mới bắt đầu, chúng tôi sẽ cần phải điều chỉnh
        <strong>HeartModel </strong>thành <strong>BeatModel</strong>. Nếu chúng tôi
        không làm vậy, View sẽ không thể hoạt động với Model này, vì View chỉ biết
        cách <strong>getBPM()</strong> và phương thức tương đương là
        <strong>getHeartRate()</strong>. Chúng ta sẽ làm việc này như thế nào? Tất
        nhiên, chúng tôi sẽ sử dụng Mẫu Adapter! Nó chỉ ra rằng đây là một kỹ thuật
        phổ biến khi làm việc với MVC: sử dụng một Adapter để điều chỉnh một Model để
        làm việc với các <strong>Controller</strong> và <strong>View</strong> hiện
        có.<br />Đây là code để điều chỉnh <strong>HeartModel </strong>thành
        <strong>BeatModel</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_23.png`),
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
    title: `Bây giờ chúng tôi đã sẵn sàng cho một HeartController`,
    contents: [
      {
        div: `<p>
        Với <strong>HeartAdapter </strong>trong tay, chúng ta nên sẵn sàng tạo
        <strong>Controller</strong> và chạy <strong>View</strong> với
        <strong>HeartModel</strong>. Nói về tái sử dụng!
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_24.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>Và thế là xong! Bây giờ là lúc cho một số code thử nghiệm …</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_25.png`),
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
    title: `Và bây giờ để chạy thử …`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_26.png`),
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
    title: `Những thứ đã làm`,
    contents: [
      {
        div: `<p>
        Lưu ý rằng màn hình hoạt động tuyệt vời với một heart! Beat trông giống như
        một nhịp đập. Vì <strong>HeartModel </strong>cũng hỗ trợ BPM và Beat Observer,
        nên chúng tôi có thể nhận cập nhật nhịp giống như với nhịp của DJ.<br />Vì
        heartbeat có sự thay đổi tự nhiên, hãy lưu ý rằng màn hình được cập nhật với
        beat mới mỗi phút.<br />Mỗi khi chúng tôi nhận được bản cập nhật BPM, adapter
        sẽ thực hiện công việc dịch các lệnh gọi <strong>getBPM()</strong> sang các
        lệnh gọi <strong>getHeartRate()</strong>.<br />Các mục menu
        <strong>Start </strong>và <strong>Stop </strong>không được hiện vì
        <strong>Controller</strong> đã disable chúng.<br />Các nút khác vẫn hoạt động
        nhưng không có tác dụng vì <strong>Controller</strong> không thực hiện các
        hoạt động nào cho chúng.<br /><strong>View</strong> có thể được thay đổi để hỗ
        trợ việc tắt các mục này.
      </p>`,
      },
    ],
  },
  {
    title: `MVC và Web`,
    contents: [
      {
        div: `<p>
        Không lâu sau khi Web được ra đời, các nhà phát triển bắt đầu điều chỉnh MVC
        để phù hợp với mô hình &#8220;trình duyệt &#8211; máy chủ&#8221;. Sự thích ứng
        hiện hành được gọi đơn giản là “Model 2” và sử dụng sự kết hợp của công nghệ
        servlet và JSP để đạt được sự tách biệt giữa <strong>Model</strong>,
        <strong>View</strong> và <strong>Controller</strong> mà chúng ta thấy trong
        GUI thông thường.<br />Hãy xem cách <strong>Model 2</strong> hoạt động:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_27.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        <strong>1. Bạn thực hiện một yêu cầu HTTP, được nhận bởi một servlet</strong>
      </p>
      
      <p>
        Sử dụng trình duyệt web của bạn, bạn thực hiện một yêu cầu HTTP. Điều này
        thường liên quan đến việc gửi một số dữ liệu (form data), như tên người dùng
        và mật khẩu của bạn. Một servlet nhận dữ liệu này và phân tích cú pháp nó.
      </p>
      
      <p><strong>2. Servlet hoạt động như Controller.</strong></p>
      
      <p>
        Servlet đóng vai trò của <strong>Controller</strong> và xử lý yêu cầu của bạn,
        rất có thể đưa ra các yêu cầu tới Model (thường là cơ sở dữ liệu). Kết quả của
        việc xử lý yêu cầu thường được đóng gói dưới dạng JavaBean.
      </p>
      
      <p><strong>3. Controller chuyển tiếp tới View.</strong></p>
      
      <p>
        View được đại diện bởi một JSP. Công việc duy nhất của JSP là tạo trang đại
        diện cho View của Model (<strong
          >4. thứ mà nó lấy được thông qua JavaBean</strong
        >) cùng với bất kỳ xử lý nào cần thiết cho các hành động tiếp theo.
      </p>
      
      <p><strong>5. View trả về một trang cho trình duyệt qua HTTP.</strong></p>
      
      <p>
        Một trang được trả về trình duyệt, nơi nó được hiển thị dưới dạng View. Khi
        người dùng gửi các yêu cầu khác, được xử lý theo cùng một kiểu.
      </p>`,
      },
    ],
  },
  {
    title: `Model 2: không chỉ là một thiết kế sạch sẽ.`,
    contents: [
      {
        div: `<p>
        Lợi ích của việc tách <strong>View</strong>, <strong>Model</strong> và
        <strong>Controller</strong> đã khá rõ ràng đối với bạn. Nhưng bạn cần biết
        &#8220;phần còn lại của câu chuyện&#8221; với Model 2 &#8211; rằng nó đã cứu
        nhiều trang web khỏi bị chìm vào mớ hỗn loạn.<br />Làm sao? Vâng, Model 2
        không chỉ cung cấp sự tách biệt giữa các thành phần về mặt thiết kế, nó còn
        cung cấp sự tách biệt trong &#8220;trách nhiệm sản xuất&#8221;. Hãy đối mặt
        với điều đó, ngày xưa, bất kỳ ai có quyền truy cập vào JSP của bạn đều có thể
        truy cập và viết bất kỳ đoạn code Java nào họ muốn, phải không? Và điều đó bao
        gồm rất nhiều người không biết tệp .jar từ một tập hợp tệp .jar. Thực tế là
        hầu hết các nhà sản xuất web đều biết về nội dung và HTML, chứ không phải phần
        mềm.<br />May mắn là Model 2 đã đến giải cứu. Với Model 2, chúng tôi có thể để
        các công việc của developer cho những chàng trai và cô gái biết Servlet và để
        các nhà sản xuất web tự do với các JSP kiểu Model 2 đơn giản, nơi tất cả các
        nhà sản xuất có quyền truy cập là HTML và JavaBeans đơn giản.
      </p>`,
      },
    ],
  },
  {
    title: `Model 2: DJ từ điện thoại di động`,
    contents: [
      {
        div: `<p>
        Bạn không nghĩ rằng chúng tôi sẽ cố gắng bỏ qua mà không chuyển BeatModel
        tuyệt vời đó sang Web phải không? Hãy nghĩ rằng, bạn có thể kiểm soát toàn bộ
        phiên DJ của mình thông qua một trang web trên điện thoại di động của bạn. Vì
        vậy, bây giờ bạn có thể ra khỏi điều khiển DJ và hòa mình vào đám đông. Bạn
        còn chờ gì nữa? Hãy viết đoạn code đó!
      </p>
      
      <p>Kế hoạch:</p>
      
      <p><strong>1. Sửa model</strong></p>
      
      <p>Thực ra thì, chúng ta không phải sửa Model, cứ như vậy là đã ổn!</p>
      
      <p><strong>2. Tạo servlet controller</strong></p>
      
      <p>
        Chúng tôi cần một servlet đơn giản có thể nhận các yêu cầu HTTP của chúng tôi
        và thực hiện một vài thao tác lên model. Tất cả những gì nó cần làm là Stop,
        Start và thay đổi nhịp mỗi phút.
      </p>
      
      <p><strong>3. Tạo HTML view</strong></p>
      
      <p>
        Chúng tôi sẽ tạo một View đơn giản với JSP. Nó sẽ nhận được một JavaBean từ
        <strong>Controller</strong> sẽ cho nó biết mọi thứ nó cần để hiển thị. JSP sau
        đó sẽ tạo ra một giao diện HTML.
      </p>
      `,
      },
    ],
  },
  {
    title: `Thiết lập môi trường Servlet của bạn`,
    contents: [
      {
        div: `<p>
        Hướng dẫn bạn cách thiết lập môi trường servlet của bạn hơi lạc đề đối với một
        cuốn sách về Mẫu thiết kế, ít nhất là nếu bạn không muốn cuốn sách nặng
        hơn!<br />Khởi động trình duyệt web của bạn và truy cập thẳng vào
        <a
          href="http://jakarta.apache.org/tomcat/"
          target="_blank"
          rel="noreferrer noopener"
          >http://jakarta.apache.org/tomcat/</a
        >
        cho Apache Jakarta Project’s Tomcat Servlet Container. Bạn sẽ tìm thấy mọi thứ
        bạn cần ở đó để giúp bạn thiết lập và hoạt động.<br />Bạn cũng sẽ muốn xem
        <strong>Head First Servlets &amp; JSP</strong> của
        <em>Bryan Basham, Kathy Sierra và Bert Bates</em>.
      </p>`,
      },
    ],
  },
  {
    title: `Bước một: Model`,
    contents: [
      {
        div: `<p>
        Hãy nhớ rằng trong MVC, model không biết bất kỳ điều gì về
        <strong>View </strong>hoặc <strong>Controller</strong>. Nói cách khác, nó hoàn
        toàn được tách rời. Tất cả những gì nó biết là nó có thể có những người quan
        sát (observer) mà nó cần thông báo. Nó cũng cung cấp một giao diện mà các
        <strong>View</strong> và <strong>Controller</strong> có thể sử dụng để lấy và
        thiết lập trạng thái của nó.<br />Bây giờ, tất cả những gì chúng ta cần làm là
        điều chỉnh nó để hoạt động trong môi trường web, nhưng, do nó không phụ thuộc
        vào bất kỳ lớp bên ngoài nào, nên thực sự không có việc gì phải làm. Chúng tôi
        có thể sử dụng <strong>BeatModel </strong>của mình mà không cần thay đổi. Vì
        vậy, hãy chuyển sang bước hai!
      </p>`,
      },
    ],
  },
  {
    title: `Bước hai: controller servlet`,
    contents: [
      {
        div: `<p>
        Hãy nhớ rằng, servlet sẽ hoạt động như <strong>Controller</strong> của chúng
        ta; nó sẽ nhận đầu vào của trình duyệt Web trong một yêu cầu HTTP và chuyển nó
        thành các hành động có thể được áp dụng cho <strong>Model</strong>.<br />Sau
        đó, với cách thức hoạt động của Web, chúng ta cần return một View cho trình
        duyệt. Để làm điều này, chúng tôi sẽ chuyển quyền kiểm soát cho
        <strong>View</strong> (có dạng JSP). Chúng ta sẽ làm điều này trong bước
        ba.<br />Đây là phác thảo của servlet; trên trang tiếp theo, chúng tôi sẽ xem
        xét việc triển khai đầy đủ.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_28.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>Đây là cách triển khai phương thức <strong>doGet()</strong>:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_29.png`),
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
    title: `Bây giờ chúng ta cần 1 View`,
    contents: [
      {
        div: `<p>
        Tất cả những gì chúng tôi cần là một cái nhìn và chúng tôi đã có trình tạo
        nhịp dựa trên trình duyệt của mình sẵn sàng hoạt động!<br />Trong Model 2,
        <strong>View</strong> chỉ là một JSP. Tất cả những gì JSP biết là bean mà nó
        nhận được từ <strong>Controller</strong>. Trong trường hợp của chúng ta, bean
        đó chỉ là mô hình và JSP sẽ chỉ sử dụng thuộc tính BPM của nó để trích xuất
        các nhịp hiện tại mỗi phút. Với dữ liệu đó trong tay, nó tạo ra View và cũng
        như các điều khiển giao diện người dùng.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_30.png`),
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
    title: `Test Model 2`,
    contents: [
      {
        div: `<p>
        Đã đến lúc khởi động trình duyệt web của bạn, nhấn DJView Servlet và cho hệ
        thống quay …
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_31.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_32.png`),
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
    title: `Những thứ đã làm`,
    contents: [
      {
        div: `<ol>
        <li>
          Đầu tiên, hãy truy cập vào trang web; bạn sẽ thấy nhịp mỗi phút ở mức 0. Hãy
          tiếp tục và nhấp vào nút “On”.
        </li>
        <li>
          Bây giờ bạn sẽ thấy nhịp mỗi phút ở cài đặt mặc định: 90 BPM. Bạn cũng sẽ
          nghe thấy nhịp trên máy mà máy chủ đang chạy.
        </li>
        <li>
          Nhập một beat cụ thể, chẳng hạn, 120, và nhấp vào nút “set”. Trang sẽ được
          làm mới với nhịp mỗi phút là 120 (và bạn sẽ nghe thấy nhịp tăng lên).
        </li>
        <li>Bây giờ chơi với các nút tăng / giảm để điều chỉnh nhịp lên và xuống.</li>
        <li>
          Suy nghĩ về cách hoạt động của từng bước trong hệ thống. Giao diện HTML thực
          hiện một yêu cầu tới servlet (<strong>Controller</strong>); servlet phân
          tích cú pháp đầu vào của người dùng và sau đó đưa ra các yêu cầu đối với
          model. Sau đó, servlet chuyển quyền điều khiển đến JSP
          (<strong>View</strong>), tạo ra <strong>View</strong> HTML được trả về và
          hiển thị.
        </li>
      </ol>`,
      },
    ],
  },
  {
    title: `Design pattern và Model 2`,
    contents: [
      {
        div: `<p>
        Sau khi triển khai DJ control cho Web bằng Model 2, bạn có thể tự hỏi các
        Pattern đã đi đâu. Chúng tôi có một <strong>View</strong> được tạo trong HTML
        từ một JSP nhưng <strong>View</strong> không còn là một trình lắng nghe của
        Model. Chúng tôi có một <strong>Controller</strong> là một servlet nhận các
        yêu cầu HTTP, nhưng chúng vẫn đang sử dụng
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          >Strategy pattern</a
        >? Còn Composite thì sao? Chúng tôi có một View được tạo từ HTML và hiển thị
        trong trình duyệt web. Đó có còn là
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/12"
          >Composite pattern</a
        >
        không?
      </p>
      
      <p>Model 2 là một bản chuyển thể của MVC sang Web</p>
      
      <p>
        Mặc dù Model 2 trông không giống hệt MVC &#8220;sách giáo khoa&#8221;, tất cả
        các phần vẫn ở đó; chúng vừa được điều chỉnh để loại bỏ các đặc điểm riêng của
        mô hình trình duyệt web. Hãy xem xét lại…
      </p>`,
      },
    ],
  },
  {
    title: `Observer`,
    contents: [
      {
        div: `<p>
        <strong>View</strong> không còn là người quan sát model theo nghĩa cổ điển;
        nghĩa là nó không đăng ký với Model để nhận thông báo thay đổi trạng thái.
      </p>
      
      <p>
        Tuy nhiên, <strong>View</strong> nhận được tương đương với các thông báo gián
        tiếp từ <strong>Controller</strong> khi model đã được thay đổi.
        <strong>Controller</strong> thậm chí chuyển View một bean cho phép View truy
        xuất trạng thái của model.
      </p>
      
      <p>
        Nếu bạn nghĩ về model trình duyệt, View chỉ cần cập nhật thông tin trạng thái
        khi phản hồi HTTP được trả về trình duyệt; thông báo vào bất kỳ thời điểm nào
        khác sẽ là vô nghĩa. Chỉ khi một trang đang được tạo và trả về thì việc tạo
        View và kết hợp trạng thái của model mới có ý nghĩa.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-17_33.png`),
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
    title: `Strategy`,
    contents: [
      {
        div: `<p>
        Trong Model 2, Strategy object vẫn là servlet <strong>Controller</strong>; tuy
        nhiên, nó không được tạo trực tiếp với View theo cách cổ điển. Điều đó nói
        rằng, nó là một đối tượng thực hiện hành vi cho <strong>View</strong> và chúng
        ta có thể hoán đổi nó cho một <strong>Controller</strong> khác nếu chúng ta
        muốn hành vi khác.
      </p>`,
      },
    ],
  },
  {
    title: `Composite`,
    contents: [
      {
        div: `<p>
        Giống như Swing GUI của chúng tôi, View cuối cùng được tạo thành từ một tập
        hợp các thành phần đồ họa lồng với nhau. Trong trường hợp này, chúng được
        trình duyệt web hiển thị bằng HTML, tuy nhiên bên dưới có một hệ thống đối
        tượng rất có thể tạo thành một composite.
      </p>`,
      },
    ],
  },
  {
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p>
        <strong>Hỏi:</strong>
        <strong>Mẫu Composite thực sự có trong MVC không?</strong><br /><strong
          >Đáp:</strong
        >
        Vâng, thực sự có một
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/12"
          >Composite pattern</a
        >
        trong MVC. Nhưng, thực ra, đây là một câu hỏi rất hay. Ngày nay, các gói GUI,
        như Swing, đã trở nên phức tạp đến mức chúng ta hầu như không nhận thấy cấu
        trúc bên trong và việc sử dụng composite trong việc xây dựng và cập nhật màn
        hình. Điều đó thậm chí còn khó thấy hơn khi chúng ta có các trình duyệt Web có
        thể sử dụng ngôn ngữ đánh dấu (markup language) và chuyển đổi nó thành giao
        diện người dùng. Trở lại khi MVC lần đầu tiên được phát hiện, việc tạo GUI đòi
        hỏi nhiều can thiệp thủ công hơn và rõ ràng
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/12"
          >composite pattern</a
        >
        là một phần của MVC.
      </p>
      
      <p>
        <strong
          >Hỏi: <strong>Controller</strong> có bao giờ thực hiện bất kỳ logic ứng dụng
          nào không?</strong
        ><br /><strong><strong>Đáp:</strong></strong> Không,
        <strong>Controller</strong> thực hiện hành vi cho View. Nó rất thông minh khi
        chuyển các hành động từ View thành các hành động trên model. Model thực hiện
        các hành động đó và thực hiện logic ứng dụng để quyết định phải làm gì để đáp
        lại các hành động đó. <strong>Controller</strong> có thể phải thực hiện một số
        công việc nhỏ để xác định phương thức gọi nào cần thực hiện trên model, nhưng
        đó không được coi là “logic ứng dụng”. Logic ứng dụng là code quản lý và thao
        tác dữ liệu của bạn và nó nằm trong Model.
      </p>
      
      <p>
        <strong
          >Hỏi: Tôi luôn thấy từ &#8220;model&#8221; khó có thể hiểu được trong đầu.
          Bây giờ tôi hiểu rằng đó là phần lõi của ứng dụng, nhưng tại sao một từ mơ
          hồ, khó hiểu như vậy lại được sử dụng để mô tả khía cạnh này của
          MVC?</strong
        ><br /><strong><strong>Đáp:</strong></strong> Khi MVC được đặt tên, họ cần một
        từ bắt đầu bằng chữ “M”, nếu không họ không thể gọi nó là MVC. Nhưng nghiêm
        túc mà nói, chúng tôi đồng ý với bạn, mọi người đều vò đầu bứt tai tự hỏi thế
        nào là model. Nhưng sau đó mọi người nhận ra rằng họ cũng không thể nghĩ ra từ
        nào hay hơn.
      </p>
      
      <p>
        <strong
          >Hỏi: Bạn đã nói rất nhiều về trạng thái của Model. Điều này có nghĩa là nó
          có
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/13"
            >State Pattern</a
          >
          trong đó?</strong
        ><br /><strong>Đáp:</strong> Không, chúng tôi chỉ muốn nói đến ý tưởng chung
        về trạng thái. Nhưng chắc chắn một số model sử dụng
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/13"
          >State Pattern</a
        >
        để quản lý các trạng thái bên trong của chúng.
      </p>
      
      <p>
        <strong
          >Hỏi: Tôi đã xem các mô tả về MVC trong đó <strong>Controller</strong> được
          mô tả như một &#8220;thành phần trung gian&#8221; giữa View và Model.
          <strong>Controller</strong> có triển khai Mediator Pattern</strong
        >
        <strong>không?</strong><br /><strong>Đáp:</strong> Chúng tôi chưa đề cập đến
        Mediator Pattern, vì vậy chúng tôi sẽ không đi sâu vào quá nhiều chi tiết ở
        đây, nhưng mục đích của Mediator Pattern là gói gọn cách các đối tượng tương
        tác và thúc đẩy kết hợp lỏng lẻo bằng cách giữ cho hai đối tượng không tham
        chiếu đến nhau một cách rõ ràng. Vì vậy, ở một mức độ nào đó,
        <strong>Controller</strong> có thể được xem như một mediator, vì View không
        bao giờ đặt trạng thái trực tiếp trên <strong>Model</strong>, mà luôn đi qua
        <strong>Controller</strong>. Tuy nhiên, hãy nhớ rằng <strong>View</strong> có
        tham chiếu đến Model để truy cập trạng thái của nó. Nếu
        <strong>Controller</strong> thực sự là một mediator, <strong>View</strong> sẽ
        phải đi qua <strong>Controller</strong> để có được trạng thái của Model.
      </p>
      
      <p>
        <strong
          >Hỏi: View luôn phải yêu cầu trạng thái của Model? Tại sao chúng tôi dùng
          Model để gửi trạng thái của nó cùng với thông báo cập nhật?</strong
        ><br /><strong>Đáp:</strong> Có, model chắc chắn có thể gửi trạng thái của nó
        cùng với thông báo và trên thực tế, nếu bạn nhìn lại View JSP / HTML, đó chính
        xác là những gì chúng tôi đang làm. Chúng tôi đang gửi toàn bộ model trong
        bean, mà View sử dụng để truy cập trạng thái nó cần bằng cách sử dụng các
        thuộc tính bean. Chúng tôi có thể làm điều gì đó tương tự với
        <strong>BeatModel </strong>bằng cách chỉ gửi trạng thái mà View quan tâm. Tuy
        nhiên, nếu bạn nhớ về chương
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/2"
          >Observer pattern</a
        >, bạn cũng sẽ nhớ rằng điều này có một vài nhược điểm.
      </p>
      
      <p>
        <strong
          >Hỏi: Nếu tôi có nhiều hơn một View, tôi có luôn cần nhiều hơn một
          Controller không?</strong
        ><br /><strong>Đáp:</strong> Thông thường, bạn cần một Controller cho mỗi View
        trong thời gian chạy; tuy nhiên, cùng một lớp Controller có thể dễ dàng quản
        lý nhiều View.
      </p>
      
      <p>
        <strong
          >Hỏi: View không được phép thao tác Model, tuy nhiên, tôi nhận thấy trong
          quá trình triển khai của bạn rằng View có toàn quyền truy cập vào các phương
          thức thay đổi trạng thái của Model. Điều này có nguy hiểm không?</strong
        ><br /><strong>Đáp:</strong> Bạn đúng; chúng tôi đã cấp cho View toàn quyền
        truy cập vào bộ phương thức của model. Chúng tôi đã làm điều này để đơn giản
        hóa mọi thứ, nhưng có thể có những trường hợp bạn muốn cấp cho View quyền truy
        cập chỉ vào một phần API của model của bạn. Có một mẫu thiết kế tuyệt vời cho
        phép bạn điều chỉnh giao diện để chỉ cung cấp một tập hợp con. Bạn có biết đó
        là mẫu nào chưa?
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
          <strong>Mẫu Model-View-Controller (MVC)</strong> là một mẫu phức hợp bao gồm
          các mẫu Observer, Strategy và Composite.
        </li>
        <li>
          Model sử dụng Mẫu Observer để có thể cập nhật những người quan sát nhưng vẫn
          tách rời khỏi chúng.
        </li>
        <li>
          <strong>Controller</strong> là strategy cho <strong>View</strong>.
          <strong>View </strong>có thể sử dụng các triển khai khác nhau của
          <strong>Controller</strong> để có được các hành vi khác nhau.
        </li>
        <li>
          View sử dụng Composite để triển khai giao diện người dùng, giao diện này
          thường bao gồm các thành phần lồng nhau như panel, frame và button.
        </li>
        <li>
          Các mẫu này phối hợp với nhau để tách ba vai trò trong mô hình MVC, giúp
          thiết kế luôn rõ ràng và linh hoạt.
        </li>
        <li>
          Mẫu
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/8"
            >Adapter Pattern</a
          >
          có thể được sử dụng để điều chỉnh một <strong>Model </strong>mới với
          <strong>View </strong>và <strong>Controller</strong> hiện có.
        </li>
        <li>
          <strong>Model 2</strong> là một bản chuyển thể của MVC cho các ứng dụng web.
        </li>
        <li>
          Trong <strong>Model 2</strong>, <strong>Controller</strong> được triển khai
          như một servlet và JSP &amp; HTML triển khai <strong>View</strong>.
        </li>
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
