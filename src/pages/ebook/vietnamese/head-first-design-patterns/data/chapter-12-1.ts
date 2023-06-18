import IContent from 'utils/interface';

export const chapter12_1: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_1.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        div: `<p>
        Có ai đoán rằng các mẫu thiết kế có thể làm việc với nhau? Chà, tin hay không,
        một số thiết kế OO linh hoạt nhất sẽ kết hợp các design pattern lại với nhau.
        Hãy sẵn sàng để đưa các kỹ năng design pattern của bạn lên cấp độ tiếp theo;
        đây là thời gian cho các mẫu được “hợp nhất”.
      </p>`,
      },
    ],
  },
  {
    title: `Kết hợp design pattern`,
    contents: [
      {
        div: `<p>
        Một trong những cách tốt nhất để sử dụng các mẫu là để chúng có thể tương tác
        với các mẫu khác. Bạn càng sử dụng các mẫu, bạn sẽ càng thấy chúng có mặt cùng
        nhau trong các thiết kế của bạn. Chúng tôi có một tên đặc biệt cho một tập hợp
        các mẫu làm việc cùng nhau trong một thiết kế có thể được áp dụng qua nhiều
        vấn đề: mẫu kết hợp (compound pattern). Đúng vậy, bây giờ chúng ta đang nói về
        mẫu được tạo nên từ các mẫu khác!
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_2.png`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Bạn sẽ tìm thấy rất nhiều “mẫu kết hợp” được sử dụng trong thế giới thực. Bây
        giờ bạn đã có khái niệm từng mẫu trong đầu, bạn sẽ thấy rằng chúng thực sự chỉ
        là các mẫu hoạt động cùng nhau, và điều đó làm cho chúng dễ hiểu hơn.
      </p>
      
      <p>
        Chúng tôi sẽ bắt đầu chương này bằng cách xem lại những con vịt thân thiện của
        chúng tôi trong trình giả lập vịt
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/1"
          >SimUDuck</a
        >. Rốt cuộc, chúng đã đồng hành cùng chúng tôi trong toàn bộ cuốn sách và
        chúng đã thể hiện rất tốt về việc tham gia vào rất nhiều mẫu thiết kế. Những
        con vịt sẽ giúp bạn hiểu làm thế nào các mẫu có thể làm việc cùng nhau trong
        cùng một giải pháp.
      </p>
      
      <p>
        Nhưng chỉ vì chúng tôi sẽ kết hợp một số mẫu với nhau, không có nghĩa là chúng
        tôi có một giải pháp đủ điều kiện là một “mẫu tổng hợp”. Đừng cho rằng nó phải
        là một giải pháp chung có thể được áp dụng cho tất cả vấn đề. Vì vậy, trong
        nửa sau của chương, chúng ta sẽ ghé thăm một mẫu kết hợp “thực sự” khác: đúng
        không, anh <strong>Model-View-Controller</strong>. Nếu bạn đã nghe nói về anh
        ấy, bạn sẽ thấy mẫu kết hợp này là một trong những mẫu mạnh nhất trong “hộp
        công cụ thiết kế” của bạn.
      </p>
      
      <p>
        <strong
          >Các mẫu thường được sử dụng cùng nhau và kết hợp trong cùng một giải pháp
          thiết kế.</strong
        >
      </p>
      <p>
        <strong
          >Một mẫu kết hợp hai hoặc nhiều mẫu thành một giải pháp giải quyết vấn đề
          được lặp lại hoặc vấn đề chung.</strong
        >
      </p>`,
      },
    ],
  },
  {
    title: `Cuộc hội ngộ những con vịt`,
    contents: [
      {
        div: `<p>
        Như bạn vừa nghe, chúng ta sẽ làm việc với những con vịt một lần nữa. Lần này
        những con vịt sẽ cho bạn thấy làm thế nào các mẫu có thể cùng tồn tại và thậm
        chí hợp tác trong cùng một giải pháp.
      </p>
      
      <p>
        Chúng ta sẽ xây dựng lại trò chơi mô phỏng vịt ở đầu quyển sách và cung cấp
        cho nó một số khả năng thú vị bằng cách sử dụng một loạt các mẫu. Được rồi,
        hãy bắt đầu…
      </p>`,
      },
    ],
  },
  {
    title: `1. Đầu tiên, chúng tôi sẽ tạo ra một giao diện Quackable`,
    contents: [
      {
        div: `<p>
        Giống như chúng tôi đã nói, sẽ bắt đầu lại từ đầu. Lần này, Vịt (Duck) sẽ
        implements interface Quackable. Bằng cách đó, chúng tôi sẽ biết những thứ
        trong trình giả lập có thể kêu <strong><em>quack()</em></strong> – như loại
        vịt <strong>Mallard Ducks</strong>, <strong>Redhead Ducks</strong>,
        <strong>Duck Calls</strong> và thậm chí chúng ta có thể thấy Vịt Cao su
        (<strong>Rubber Duck</strong>) kêu quack quack.&nbsp;
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_3.png`),
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
    title: `2. Bây giờ, một số loại Vịt sẽ implements Quackable`,
    contents: [
      {
        div: `<p>
        Một giao diện tốt mà không có một số lớp implement nó thì cũng bỏ đi? Đã đến
        lúc tạo ra một vài con vịt kế thừa (concrete ducks).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_4.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        <strong>Sẽ không vui nếu chúng ta không thêm các loại Vịt khác vào.</strong>
      </p><p>
      Nhớ lần trước không? Chúng ta đã có duck calls (còi giả tiếng vịt – những thứ
      mà thợ săn sử dụng, chúng chắc chắn có thể kế thừa Quackable) và vịt cao su
      (rubber ducks).
    </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_5.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<p class="text-center"><small>Chúng vẫn kêu nhưng không giống tiếng vịt thật.</small></p>`,
      },
      {
        div: `<br />`,
      },
    ],
  },
  {
    title: `3. Được rồi, chúng ta đã có những con vịt; bây giờ tất cả những gì chúng ta
    cần là một trình giả lập (Simulator)`,
    contents: [
      {
        div: `<p>
        Hãy tạo một trình giả lập sau đó tạo ra một vài con vịt và đảm bảo các phương
        thức <strong>quack()</strong> của chúng ta đang làm việc…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_6.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_7.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Tất cả đều implements cùng một giao diện <strong>Quackable</strong>, nhưng
        việc implements của chúng cho phép thực hiện theo những cách riêng.
      </p>
      
      <p>Có vẻ như mọi thứ đang hoạt động; càng về sau càng tốt.</p>`,
      },
    ],
  },
  {
    title: `4. Khi vịt đã implement, nhưng ngỗng không thể`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_8.png`),
          width: `30%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>Ở đây, một lớp Ngỗng (Goose) đã được code sẵn như thế này:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_9.png`),
          width: `60%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>SỬ DỤNG SỨC MẠNH BỘ NÃO</b></h6>`,
      },
      {
        div: `<p>
        Giả sử chúng tôi muốn có thể sử dụng <strong>Ngỗng </strong>ở
        <strong>bất kỳ đâu</strong> chúng tôi muốn <strong>sử dụng Vịt</strong>. Rốt
        cuộc, ngỗng cũng làm ồn; ngỗng bay; ngỗng bơi. Tại sao chúng ta không thể có
        Ngỗng trong trình mô phỏng?
      </p>
      
      <p>
        Mẫu thiết kế nào sẽ cho phép Ngỗng dễ dàng xen kẽ với Vịt? Nói cách khác, mẫu
        nào sẽ cho phép Ngỗng có thể implements <strong>Quackable</strong>?
      </p>`,
      },
    ],
  },
  {
    title: `5. Chúng tôi cần một bộ chuyển đổi ngỗng (goose adapter)`,
    contents: [
      {
        div: `<p>
        Simulator của chúng tôi mong đợi sẽ thấy các giao diện
        <strong>Quackable</strong>. Vì ngỗng không thể kêu quack quack (chúng kêu
        honk), chúng tôi có thể sử dụng một bộ chuyển đổi (adapter) để
        <strong>điều chỉnh</strong> một con ngỗng thành một con vịt.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_10.png`),
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
    title: `6. Bây giờ ngỗng cũng có thể được tạo trong trình giả lập`,
    contents: [
      {
        div: `<p>
        Tất cả những gì chúng ta cần làm là tạo ra một con Ngỗng, bọc nó trong một
        Adapter (thứ sẽ implements <strong>Quackable</strong>).
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_11.png`),
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
    title: `7. Bây giờ hãy chạy thử`,
    contents: [
      {
        div: `<p>
        Lần này khi chúng ta chạy trình giả lập, danh sách các đối tượng được truyền
        cho phương thức <strong>simulate()</strong> bao gồm một ngỗng (Goose)
        được<strong> “bọc” </strong>trong một bộ chuyển đổi
        (<strong>GooseAdapter</strong>). Kết quả thế nào? Chúng ta sẽ thấy một số
        tiếng kêu của ngỗng: honk…honk…!
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_12.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>NGHIÊN CỨU TIẾNG KÊU VỊT</b></h6>`,
      },
      {
        div: `<p>
        Những nhà nghiên cứu bị “mê hoặc” bởi tiếng vịt kêu. Một điều mà các nhà
        nghiên cứu luôn muốn là đếm tổng số tiếng quack được tạo ra bởi một đàn vịt.
      </p>
      
      <p>
        Làm thế nào chúng ta có thể thêm khả năng đếm tiếng quack mà không phải thay
        đổi các lớp vịt?
      </p>
      
      <p>Bạn có thể nghĩ ra một mẫu nào đó sẽ giúp chúng ta?</p>`,
      },
    ],
  },
  {
    title: `8. Chúng tôi sẽ làm cho những nhà nghiên cứu vui vẻ và đếm tiếng kêu quack cho họ`,
    contents: [
      {
        div: `<p>
        Làm sao ư? Hãy tạo ra một
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/3"
          >decorator</a
        >
        cho vịt một số hành vi mới (hành vi đếm) bằng cách bọc chúng bằng một
        decorator object. Chúng ta sẽ không cần thay đổi mã nguồn của lớp Duck.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_13.png`),
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
    title: `9. Chúng ta cần cập nhật trình giả lập để tạo ra những con vịt được trang trí`,
    contents: [
      {
        div: `<p>
        Bây giờ, chúng ta phải bọc từng đối tượng Quackable mà chúng ta khởi tạo bằng
        QuackCounter decorator. Nếu chúng ta không làm như vậy, chúng ta sẽ có những
        con vịt chạy xung quanh mà không đếm được.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_14.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_15.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_16.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        p: `<h6><b>BẠN PHẢI CÓ NHỮNG DECORATE OBJECT ĐỂ TRANG TRÍ CÁC HÀNH VI</b></h6>`,
      },
      {
        div: `<p>
        Anh ấy nói đúng, đó là vấn đề với việc bọc đối tượng: bạn phải chắc chắn rằng
        Vịt phải được bao bọc bởi các decorator, nếu không chúng sẽ không được trang
        trí (và khi đó chúng không được đếm).
      </p>
      
      <p>
        Tại sao chúng ta không đưa việc tạo những con vịt ra một nơi khác? nói cách
        khác, hãy tách công việc tạo và trang trí vịt ra và đóng gói nó.
      </p>
      
      <p>Điều đó nghe trông giống như mẫu nào?</p>`,
      },
    ],
  },
  {
    title: `10. Chúng tôi cần một nhà máy để sản xuất vịt!`,
    contents: [
      {
        div: `<p>
        Được rồi, chúng tôi cần kiểm soát chất lượng để đảm bảo rằng vịt của chúng tôi
        sẽ được bọc. Chúng tôi sẽ xây dựng toàn bộ nhà máy chỉ để sản xuất chúng. Nhà
        máy nên sản xuất một bộ các sản phẩm bao gồm các loại vịt khác nhau, vì vậy
        chúng tôi sẽ sử dụng
        <strong
          ><a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/5"
            >Abstract Factory Pattern</a
          ></strong
        >.
      </p>
      
      <p>Hãy bắt đầu với định nghĩa của <strong>AbstractDuckFactory</strong>:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_17.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Hãy bắt đầu bằng cách tạo ra một nhà máy tạo ra những con vịt không có
        decorator, mục đích chỉ để học cách tạo một Factory:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_18.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Bây giờ, hãy cùng nhau tạo ra nhà máy mà chúng ta thực sự muốn,
        <strong>CountingDuckFactory</strong>:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_19.png`),
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
    title: `11. Hãy thiết lập Simulator để sử dụng nhà máy (factory)`,
    contents: [
      {
        div: `<p>
        Hãy nhớ làm thế nào Abstract Factory hoạt động? Chúng tôi tạo ra một phương
        thức đa hình (polymorphic method) lấy một nhà máy (factory) và sử dụng nó để
        tạo các đối tượng. Bằng cách thông qua các factory khác nhau, chúng tôi có thể
        sử dụng các bộ sản phẩm khác nhau trong phương thức.
      </p>
      
      <p>
        Chúng tôi sẽ thay đổi phương thức <strong><em>simulate()</em></strong> để nó
        truyền vào một nhà máy và sử dụng nó để tạo ra vịt.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_20.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p><strong>Đây là kết quả sau khi sử dụng factory</strong></p>

        <p>
          Giống như lần trước, nhưng lần này chúng tôi đảm bảo rằng tất cả các con vịt
          đều được trang trí bởi vì chúng tôi đang sử dụng
          <strong>CountingDuckFactory</strong>
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_21.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br /><h6><b>GỌT BÚT CHÌ CỦA BẠN</b></h6>`,
      },
      {
        div: `<p>
        Chúng ta vẫn trực tiếp khởi tạo ngỗng bằng cách dựa vào các lớp con (concrete
        classes) . Bạn có thể viết một <strong>Abstract Factory</strong> cho ngỗng
        không? Chúng xử lí việc tạo ra “goose ducks” bằng cách nào?
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_22.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p><strong>Ah, anh ấy muốn quản lý một đàn vịt.</strong></p>

        <p>
          Ở đây, một câu hỏi hay khác từ Ranger Brewer: Tại sao chúng ta quản lý vịt
          riêng lẻ?
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_23.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Những gì chúng ta cần là một cách để nói về một “tập hợp”&nbsp; vịt và thậm
        chí cả “tập hợp con” của vịt (để giải quyết yêu cầu từ Ranger Brewer). Sẽ thật
        tuyệt nếu chúng ta có thể áp dụng các hoạt động trên toàn bộ đàn vịt.
      </p>
      
      <p>Mẫu thiết kế nào có thể giúp chúng ta?</p>`,
      },
    ],
  },
  {
    title: `12. Hãy tạo ra một đàn vịt (tốt, thực sự là một tập hợp Quackable)`,
    contents: [
      {
        div: `<p>
        Bạn có nhớ
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/12"
          >Composite Pattern</a
        >
        cho phép chúng ta xử lý một “bộ” các đối tượng theo cùng một cách như xử lý
        với các đối tượng riêng lẻ không? Hãy xem qua cách thức hoạt động của nó:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_24.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Bạn có để ý rằng chúng tôi đã “lén lút” đặt một Mẫu thiết kế vào code của bạn
        mà không đề cập đến nó không? (<a
          href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/11"
          >Iterator pattern</a
        >)
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_25.png`),
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
    title: `13. Bây giờ chúng ta cần thay đổi trình giả lập`,
    contents: [
      {
        div: `<p>
        Composite của chúng tôi đã sẵn sàng; chúng ta chỉ cần một số đoạn code để hoàn
        chỉnh các con vịt thành cấu trúc composite.
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_26.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>Đây là kết quả:</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_27.png`),
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
    title: `An toàn vs Minh bạch (Safety vs Transparency)`,
    contents: [
      {
        div: `<p>
        Bạn có thể nhớ rằng trong chương
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/12"
          >Composite Pattern</a
        >, các composite (Menu) và các nút lá (MenuItems) có cùng một bộ phương thức
        giống nhau, bao gồm phương thức <strong><em>add()</em></strong
        >. Vì chúng có cùng một bộ phương thức, chúng tôi vẫn có thể gọi các phương
        thức trên MenuItems nhưng chúng không thực sự có ý nghĩa (như cố gắng thêm một
        cái gì đó vào MenuItem bằng cách gọi <em><strong>add()</strong></em
        >). Lợi ích của việc này là sự khác biệt giữa nút lá và composite là trong
        suốt (transparency): client không phải biết liệu nó đang xử lý một nút lá hay
        một composite; nó chỉ được gọi cùng một phương thức trên cả hai.
      </p>
      
      <p>
        Ở đây, chúng tôi đã quyết định giữ các phương thức bảo trì con của
        composite&nbsp; tách biệt với các nút lá: đó là, chỉ những Flock mới có phương
        thức <strong>add()</strong>. Chúng tôi biết sẽ không có ý nghĩa gì khi cố gắng
        thêm một cái gì đó vào Duck (một con vịt không thể add một con vịt khác) và
        trong triển khai này, bạn không thể. Bạn chỉ có thể <strong>add()</strong> vịt
        vào một bầy (Flock). Vì vậy, thiết kế này an toàn hơn (Safety) – bạn không thể
        gọi các phương thức không có ý nghĩa đối với các component – nhưng nó kém minh
        bạch (transparent) hơn. Bây giờ client cần phải biết rằng khi Quackable là một
        Flock thì mới có thể thêm Quackables vào nó.
      </p>
      
      <p>
        Như mọi khi, có sự đánh đổi khi bạn thiết kế OO và bạn cần xem xét chúng khi
        bạn tạo các composite của riêng bạn.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_28.png`),
          width: `50%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>Bạn có thể nói “Observer?”</p>

        <p>
          Nghe có vẻ như nhà nghiên cứu muốn quan sát hành vi của từng con vịt. Điều đó
          dẫn chúng ta đến một mẫu được thực hiện để quan sát hành vi của các đối tượng:
          Mẫu quan sát (<a
            href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/2"
            >Observer Pattern</a
          >).
        </p>`,
      },
    ],
  },
  {
    title: `14. Trước tiên chúng ta cần một Observable interface`,
    contents: [
      {
        div: `<p>
        Hãy nhớ rằng một Observable là một đối tượng được quan sát. Một Observable cần
        phương thức để đăng ký và thông báo tới người quan sát (observer). Chúng tôi
        cũng có một phương thức để loại bỏ các quan sát viên (removing observer),
        nhưng chúng tôi sẽ giữ cho việc thực hiện đơn giản ở đây và chúng tôi sẽ không
        cài đặt phương thức removing observer.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_29.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Bây giờ chúng tôi cần đảm bảo tất cả các Quackable implements giao diện này…
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_30.png`),
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
    title: `15. Bây giờ, chúng ta cần đảm bảo rằng tất cả các lớp cụ thể triển khai Quackable 
    có thể xử lý là một QuackObservable`,
    contents: [
      {
        div: `<p>
        Chúng ta có thể tiếp cận điều này bằng cách thực hiện đăng ký và thông báo
        trong mỗi và mọi lớp (giống như chúng ta đã làm trong
        <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/2"
          >Chương 2</a
        >). Nhưng lần này chúng tôi sẽ làm điều đó một chút khác biệt: chúng tôi sẽ
        đóng gói code đăng ký và thông báo trong một lớp khác, gọi nó là
        <strong>Observable </strong>và kết hợp (compose) nó với
        <strong>QuackObservable</strong>. Bằng cách đó, chúng tôi chỉ viết code thực
        một lần và <strong>QuackObservable </strong>chỉ cần đủ code để ủy quyền cho
        lớp helper <strong>QuackObservable</strong>.
      </p>
      
      <p>Hãy bắt đầu với lớp helper <strong>QuackObservable</strong>…</p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_31.png`),
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
    title: `16. Tích hợp lớp helper Observable với các lớp Quackable`,
    contents: [
      {
        div: `<p>
        Điều này không nên quá tệ. Tất cả những gì chúng ta cần làm là đảm bảo rằng
        các lớp Quackable được cấu thành với một Observable và chúng biết cách ủy thác
        cho nó. Sau đó, chúng đã sẵn sàng để trở thành người quan sát (observer). Dưới
        đây là triển khai MallardDuck; Những con vịt khác cũng vậy.
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_32.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><h6><b>LÀM NHỌN BÚT CHÌ CỦA BẠN</b></h6>`,
      },
      {
        div: `<p>
        Chúng tôi đã không thay đổi việc implement một Quackable, QuackCounter
        decorator. Chúng ta cũng cần phải làm cho nó một Observable. Tại sao bạn không
        viết nó.
      </p>`,
      },
    ],
  },
  {
    title: `17. Chúng ta làm gần xong rồi! Chỉ cần code thêm phía (Observer) của mẫu`,
    contents: [
      {
        div: `<p>
        Chúng tôi đã triển khai mọi thứ chúng tôi cần cho Observable; bây giờ chúng ta
        cần một số người quan sát (Observer). Chúng tôi sẽ bắt đầu với giao diện
        Observer:
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_33.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Bây giờ chúng ta cần một Người quan sát: những người nhà nghiên cứu đó đang ở
        đâu?!
      </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_34.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<h6><b>LÀM NHỌN BÚT CHÌ CỦA BẠN</b></h6>`,
      },
      {
        div: `<p>
        Điều gì sẽ xảy ra nếu một nhà nghiên cứu muốn quan sát cả một đàn
        (<strong>Flock</strong>)? Điều đó có nghĩa là gì? Hãy nghĩ về nó như thế này:
        nếu chúng ta quan sát một composite, thì chúng ta sẽ quan sát mọi thứ trong
        composite đó. Vì vậy, khi bạn đăng ký với một đàn (<strong>Flock</strong>),
        flock composite đảm bảo bạn được đăng ký với tất cả các con của nó (xin lỗi,
        tất cả các quackers nhỏ của nó), có thể bao gồm các Flock khác.
      </p>
      
      <p>Hãy tiếp tục và viết code Flock observer trước khi chúng ta tiến xa hơn…</p>`,
      },
    ],
  },
  {
    title: `18. Chúng tôi đã sẵn sàng quan sát. Hãy để cập nhật simulator và
    thử`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_35.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>
        Đây là đêm chung kết lớn. Năm, không, sáu mẫu đã kết hợp với nhau để tạo ra
        Duck Simulator tuyệt vời này. Không cần phải nói gì thêm, chúng tôi sẽ cho bạn
        thấy <strong>DuckSimulator</strong>!
      </p>
      `,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_36.png`),
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
    title: `Không có câu hỏi ngớ ngẩn`,
    contents: [
      {
        div: `<p><strong>Hỏi:</strong> Vì vậy đây là một mẫu kết hợp?</p>

        <p>
          <strong>Đáp:</strong> Không, đây chỉ là một tập hợp các mẫu làm việc cùng
          nhau. Một mẫu kết hợp là một tập hợp của một vài mẫu được kết hợp để giải
          quyết một vấn đề chung. Chúng tôi chỉ cần nhìn vào mẫu kết hợp
          <strong>Model-View-Controller</strong>; nó là một tập hợp của một vài mẫu đã
          được sử dụng nhiều lần trong nhiều giải pháp thiết kế.
        </p>
        
        <p>
          <strong>Hỏi:</strong> Vì vậy, lợi ích thực sự của các Mẫu thiết kế là khi tôi
          gặp một vấn đề và bắt đầu áp dụng các mẫu cho đến khi tôi có giải pháp. Đúng
          không?
        </p>
        
        <p>
          <strong>Đáp:</strong> Đó là một sai lầm. Chúng ta đã xem qua bài tập này với
          Ducks để cho bạn thấy các mẫu có thể phối hợp với nhau như thế nào. Bạn không
          bao giờ thực sự muốn tiếp cận một thiết kế như chúng ta vừa làm. Trong thực
          tế, có thể có các giải pháp cho các phần của trình mô phỏng vịt mà một số
          trong số các mẫu này là “quá mức cần thiết”. Đôi khi chỉ cần sử dụng các
          nguyên tắc thiết kế OO tốt cũng có thể tự giải quyết vấn đề đủ tốt. Chúng ta
          sẽ nói nhiều hơn về điều này trong chương tiếp theo, nhưng bạn chỉ muốn áp
          dụng các mẫu khi chúng có ý nghĩa. Bạn không bao giờ muốn bắt đầu với ý định
          sử dụng các mẫu chỉ vì lợi ích của nó. Bạn nên xem xét thiết kế của
          DuckSimulator là “cứng nhắc” và “nhân tạo”. Nhưng này, nó rất vui và cho chúng
          tôi một ý tưởng tốt về cách một số mẫu có thể phù hợp với một giải pháp.
        </p>`,
      },
    ],
  },
  {
    title: `Chúng ta đã làm những gì?`,
    contents: [
      {
        div: `<p>Chúng tôi bắt đầu với một loạt Quackables…</p>

        <p>
          <strong>Một con ngỗng xuất hiện và muốn hành động như một Quackable.</strong>
          Vì vậy, chúng tôi đã sử dụng Mẫu Adapter để điều chỉnh con ngỗng thành
          Quackable. Bây giờ, bạn có thể gọi <strong>quack() </strong>trên một con ngỗng
          được bọc trong bộ chuyển đổi và nó sẽ kêu hork!
        </p>
        
        <p>
          <strong
            >Sau đó, các nhà nghiên cứu quyết định họ muốn đếm các tiếng kêu
            quack</strong
          >. Vì vậy, chúng tôi đã sử dụng Mẫu Decorator để thêm một công cụ trang trí
          QuackCounter theo dõi số lần <strong>quack()</strong> được gọi, và sau đó ủy
          thác quack cho gói Quackable được bọc bên trong nó.
        </p>
        
        <p>
          <strong
            >Nhưng các nhà nghiên cứu đã lo lắng rằng họ đã quên thêm công cụ trang trí
            QuackCounter. </strong
          >Vì vậy, chúng tôi đã sử dụng
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/5"
            >Abstract Factory Pattern</a
          >
          để đảm nhiệm việc tạo ra những con vịt. Bây giờ, bất cứ khi nào họ muốn một
          con vịt, họ yêu cầu Factory tạo một con, và nó return lại một con vịt “chắc
          chắn” được trang trí (decorate). (Và đừng quên, họ cũng có thể sử dụng một nhà
          máy vịt khác (tạo một factory khác) nếu họ muốn một con vịt không cần trang
          trí!)
        </p>
        
        <p>
          <strong
            >Chúng tôi có vấn đề về quản lý theo dõi tất cả những con vịt và ngỗng và
            quackables.</strong
          >
          Vì vậy, chúng tôi đã sử dụng
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/12"
            >Composite Pattern</a
          >
          để nhóm các quackable thành Flock. Mẫu cũng cho phép nhà nghiên cứu tạo ra các
          Flock phụ để quản lý các “nhóm” vịt. Chúng tôi đã sử dụng Mẫu Iterator trong
          triển khai của mình bằng cách sử dụng <em><strong>java.util</strong></em> vào
          trình lặp iterator trong ArrayList.
        </p>
        
        <p>
          <strong
            >Các nhà nghiên cứu cũng muốn được thông báo khi bất kỳ quackable nào kêu
            quack.</strong
          >
          Vì vậy, chúng tôi đã sử dụng
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/2"
            >Observer Pattern</a
          >
          để cho phép nhà nghiên cứu (Quackologists) đăng ký làm Quackable Observers.
          Bây giờ, họ đã nhận được thông báo mỗi khi có bất kỳ tiếng kêu quacks nào.
          Chúng tôi đã sử dụng iterator một lần nữa trong việc cài đặt này. Các nhà
          nghiên cứu thậm chí có thể sử dụng
          <a href="/react-admin/#/ebook/vietnamese/head-first-design-patterns/2"
            >Observer Pattern</a
          >
          với composite của họ (Flock).
        </p>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_37.png`),
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
    title: `Một cái nhìn bằng mắt vịt chim: sơ đồ lớp`,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_38.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br />`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/head-first-design-patterns/chapter-16_39.png`),
          width: `80%`,
          align: `center`,
        },
      },
      {
        div: `<br /><p>Đón xem phần 2: MVC – Vua của các mẫu kết hợp.</p>`,
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
