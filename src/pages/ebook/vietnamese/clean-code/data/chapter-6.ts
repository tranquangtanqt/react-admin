import IContent from 'utils/interface';

export const chapter6: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-6_1.png`),
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
        p: `<p class="text-center"><small>What the hell?</small></p>`,
      },
      {
        p: `Chúng tôi có lý do khi muốn giữ các biến là <strong>private</strong>.
        Chúng tôi không muốn ai đó phụ thuộc vào chúng. Chúng tôi muốn giữ sự
        tự do để thay đổi kiểu (dữ liệu) hoặc thực hiện các hành động tùy
        biến. Nhưng sau đó thì sao? Rất nhiều lập trình viên tự động thêm 
        <strong>
          <em>getter </em>
        </strong>
        và 
        <strong>
          <em>setter </em>
        </strong>
        vào class của họ, chẳng khác gì thay đổi các biến 
        <strong>private </strong>thành <strong>public</strong>.`,
      },
    ],
  },
  {
    title: 'Trừu tượng hóa dữ liệu',
    contents: [
      {
        p: `Hãy xem xét sự khác biệt giữa <strong>Listing 6-1</strong> và 
        <strong>Listing 6-2</strong>. Cả hai đều đại diện cho dữ liệu của một
        điểm trong hệ tọa độ Descartes (tọa độ xy). Tuy nhiên, một cái thì để
        “lộ” việc triển khai trong khi cái còn lại thì không.`,
      },
      {
        p: `Listing 6-1: <strong>Concrete Point</strong>`,
      },
      {
        code: {
          src: `public class Point {
    public double x;
    public double y;
}`,
          language: 'java',
        },
      },
      {
        p: `Listing 6-2: <strong>Abstract Point</strong>`,
      },
      {
        code: {
          src: `public interface Point {
    double getX();
    double getY();
    void setCartesian(double x, double y);
    double getR();
    double getTheta();
    void setPolar(double r, double theta);
}`,
          language: 'java',
        },
      },
      {
        p: `Cái hay của <strong>Listing 6-2</strong> là không có cách nào bạn biết
        được việc triển khai (implements) interface sẽ được dùng cho hình chữ
        nhật hay các góc tọa độ, hoặc không gì cả. Interface rõ ràng là một
        dạng cấu trúc dữ liệu.`,
      },
      {
        p: `Nhưng nó không chỉ là một dạng cấu trúc dữ liệu. Các phương thức tuân
        theo một chính sách truy cập duy nhất. Bạn có thể đọc các tọa độ riêng
        lẻ một cách độc lập, nhưng bạn phải đặt các tọa độ lại với nhau để tạo
        nên một hoạt động nguyên tử (Ý nói các hành động không thể chia nhỏ
        được nữa)`,
      },
      {
        p: `Mặt khác <strong>Listing 6-1</strong> thể hiện rất rõ ràng các tọa độ
        thuộc về hình chữ nhật và nó buộc chúng ta phải thao tác với các tọa
        độ đó một cách độc lập. Điều này làm lộ dữ liệu ngay cả khi các biến
        là <strong>private </strong>và chúng tôi đang sử dụng các 
        <strong>getter/setter</strong>.`,
      },
      {
        p: `Ẩn việc triển khai không đơn giản là việc đặt một biến vào giữa các
        hàm, đó là vấn đề trừu tượng hóa. Một class không chỉ đơn giản là đẩy
        các biến của nó thông qua các getter/setter. Thay vào đó nó cung cấp
        các abstract interface cho phép người dùng thao tác với bản chất của
        dữ liệu mà không cần quan tâm đến cách chúng hoạt động. Hãy xem xét 
        <strong>Listing 6-3</strong> và <strong>Listing 6-4</strong>. Cái đầu
        tiên sử dụng các thuật ngữ cụ thể để chỉ ra mức nhiên liệu của một
        phương tiện (vehicle), trong khi cái thứ hai làm điều tương tự nhưng
        với tỉ lệ phần trăm. Trong trường hợp cụ thể, bạn có thể chắc chắn
        rằng đây chỉ là những truy xuất đến các biến. Trong trường hợp trừu
        tượng, bạn hoàn toàn không có manh mối nào về hình thức của dữ liệu.`,
      },
      {
        p: `Listing 6-3: <strong>Concrete Vehicle</strong>`,
      },
      {
        code: {
          src: `public interface Vehicle {
    double getFuelTankCapacityInGallons();
    double getGallonsOfGasoline();
}`,
          language: 'java',
        },
      },
      {
        p: `Listing 6-4: <strong>Abstract Vehicle</strong>`,
      },
      {
        code: {
          src: `public interface Vehicle {
    double getPercentFuelRemaining();
}`,
          language: 'java',
        },
      },
      {
        p: `Trong hai trường hợp trên, tùy chọn thứ hai là thích hợp hơn. Chúng
        tôi không muốn tiết lộ chi tiết về dữ liệu, thay vào đó chúng tôi muốn
        giữ dữ liệu của chúng tôi ở các dạng trừu tượng. Điều này không chỉ
        đơn thuần được thực hiện bằng cách sử dụng các 
        <strong>interface</strong> và/hoặc <strong>getter </strong>và 
        <strong>setter</strong>. Sử dụng <strong>getter/setter</strong> là tùy
        chọn tồi tệ nhất mà tôi sẽ thực hiện.`,
      },
    ],
  },
  {
    title: 'Cấu trúc dữ liệu và đối tượng',
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-6_2.png`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        p: `Hai ví dụ dưới đây cho thấy sự khác biệt giữa các đối tượng và dữ liệu
        có cấu trúc. Các đối tượng ẩn dữ liệu của chúng bên dưới việc trừu
        tượng hóa và đưa ra các hàm dựa trên dữ liệu đó. Dữ liệu có cấu trúc
        phơi bày dữ liệu của chúng và không có các hàm có nhiều ý nghĩa. Quay
        lại và đọc nó một lần nữa. Lưu ý bản chất của hai định nghĩa. Chúng
        thực sự đối lập nhau. Sự khác biệt này có vẻ không đáng kể, nhưng nó
        có ảnh hưởng sâu đến hệ thống.`,
      },
      {
        p: `Ví dụ, xem xét ví dụ về các class liên quan đến hình học trong 
        <strong>Listing 6-5</strong>. Class <strong>Geometry </strong>hoạt
        động với dữ liệu của ba class khác. (Các class khác này) là các 
        <em>cấu trúc dữ liệu</em> đơn giản mà không có bất kỳ phương thức nào.
        Các hành động đều thuộc về class <strong>Geometry</strong>.`,
      },
      {
        p: `Listing 6-5: <strong>Procedural Shape</strong>`,
      },
      {
        code: {
          src: `public class Square {
    public Point topLeft;
    public double side;
}
  
public class Rectangle {
    public Point topLeft;
    public double height;
    public double width;
}
  
public class Circle {
    public Point center;
    public double radius;
}
  
public class Geometry {
    public final double PI = 3.141592653589793;
      
    public double area(Object shape) throws NoSuchShapeException
    {
        if (shape instanceof Square) {
            Square s = (Square)shape;
            return s.side * s.side;
        }else if (shape instanceof Rectangle) {
            Rectangle r = (Rectangle)shape;
            return r.height * r.width;
        }
        else if (shape instanceof Circle) {
            Circle c = (Circle)shape;
            return PI * c.radius * c.radius;
        }
        throw new NoSuchShapeException();
    }
}`,
          language: 'java',
        },
      },
      {
        p: `Các lập trình viên hướng đối tượng có thể không đồng ý với điều này và
        cho rằng đó là một phương pháp của họ – và chúng đúng. Nhưng người
        khác có thể nhìn vào và chê cười vì chúng có khả năng không được quan
        tâm và bảo trì. Chuyện gì xảy ra nếu tôi thêm vào class Geometry một
        hàm tính chu vi? Không sao cả, các class bên trên nó sẽ không bị ảnh
        hưởng. Nhưng nếu tôi thêm vào một class mới liên quan đến hình học
        (Triangle chẳng hạn), tôi phải thay đổi các hàm trong class Geometry
        để phù hợp với nó. Đọc lại nó lần nữa. Lưu ý rằng chúng thật sự đối
        lập nhau.`,
      },
      {
        p: `Bây giờ hãy xem giải pháp ở <strong>Listing 6-6.</strong> Phương thức 
        <strong>area()</strong> ở đây là đa hình, không cần class 
        <strong>Geometry</strong>, vì vậy nếu tôi thêm một class hình học mới,
        sẽ không có hàm nào cần thay đổi. Nhưng nếu tôi thêm một hàm mới, tất
        cả các class kế thừa bên dưới đều cần phải thay đổi!`,
      },
      {
        p: `Listing 6-6: <strong>Polymorphic Shapes</strong>`,
      },
      {
        code: {
          src: `public class Square implements Shape {
    private Point topLeft;
    private double side;
  
    public double area() {
        return side*side;
    }
}
  
public class Rectangle implements Shape {
    private Point topLeft;
    private double height;
    private double width;
  
    public double area() {
        return height * width;
    }
}
  
public class Circle implements Shape {
    private Point center;
    private double radius;
    public final double PI = 3.141592653589793;
  
    public double area() {
        return PI * radius * radius;
    }
}`,
          language: 'java',
        },
      },
      {
        p: `Một lần nữa, chúng ta thấy sự đối lập giữa hai vấn đề này. Điều này
        chỉ ra sự khác biệt cơ bản giữa các đối tượng và cấu trúc dữ liệu:`,
      },
      {
        p: `<em>
        Các dòng code sử dụng phương pháp cấu trúc dữ liệu giúp dễ dàng
        thêm các hàm mới mà không cần phải thay đổi cấu trúc của dữ liệu
        hiện tại.
      </em>
      <br />
      <em>
        Mặt khác, code theo phương pháp hướng đối tượng giúp dễ dàng thêm
        các class mới mà không thay đổi các hàm đã viết.
      </em>`,
      },
      {
        p: `Bạn cũng có thể hiểu nó như sau:`,
      },
      {
        p: `<em>
        Code theo cấu trúc dữ liệu làm bạn khó thêm dữ liệu mới vì phải
        thay đổi toàn bộ hàm. 
      </em>
      <br />
      <em>
        Code theo hướng đối tượng làm bạn khó thêm hàm vì phải thay đổi
        tất cả các class chịu ảnh hưởng.
      </em>`,
      },
      {
        p: `Vậy là, ưu điểm của phương pháp này lại là nhược điểm của phương pháp
        kia, và ngược lại.`,
      },
      {
        p: `Trong bất kỳ hệ thống nào, sẽ có lúc chúng ta muốn bổ sung các kiểu dữ
        liệu mới thay vì các hàm mới. Trong trường hợp này phương pháp hướng
        đối tượng sẽ phù hợp hơn. Nhưng cũng có lúc chúng ta muốn thêm hàm mới
        thay vì thêm dữ liệu. Trong trường hợp này, cấu trúc dữ liệu nên được
        ưu tiên hơn.`,
      },
      {
        p: `Các lập trình viên giàu kinh nghiệm biết rằng ý tưởng 
        <em>
          <strong>đối tượng hóa</strong>
        </em> 
        mọi thứ là chuyện hoang đường. Đôi khi bạn cần các cấu trúc dữ liệu
        đơn giản để phát triển các hàm trên chúng.`,
      },
    ],
  },
  {
    title: 'The Law of Demeter',
    contents: [
      {
        p: `Có một kỹ thuật nổi tiếng được gọi là 
        <em>
          <a
            href="https://en.wikipedia.org/wiki/Law_of_Demeter"
            target="_blank"
            rel="noreferrer noopener"
          >
            Law of Demeter
          </a>
        </em>
        , nói rằng một module không nên biết về thành phần bên trong của một
        đối tượng mà nó sử dụng. Như chúng ta đã thấy trong các phần trước,
        các đối tượng ẩn dữ liệu của chúng và đưa ra những phương thức. Điều
        này có nghĩa là các đối tượng không nên phơi bày cấu trúc của chúng
        thông qua các <strong>getter/setter</strong> vì việc này làm lộ cấu
        trúc bên trong nó, điều chúng ta cần làm là ẩn chúng đi.`,
      },
      {
        p: `Cụ thể, <strong>Law of Demeter</strong> nói rằng một phương thức 
        <strong>
          <em>f</em> 
        </strong>
        của class 
        <em>
          <strong>C</strong>
        </em> 
        chỉ nên gọi những phương thức sau:`,
      },
      {
        p: `<ul>
        <li>
          <em>
            <strong>C</strong>
          </em>
        </li>
        <li>
          Một đối tượng được tạo bởi 
          <em>
            <strong>f</strong>
          </em>
        </li>
        <li>
          Một đối tượng được truyền vào dưới dạng đối số của 
          <em>
            <strong>f</strong>
          </em>
        </li>
        <li>
          Một đối tượng chứa một biến instance của 
          <em>
            <strong>C</strong>
          </em>
        </li>
      </ul>`,
      },
      {
        p: `Hàm không nên gọi các phương thức khác của phương thức khác. Nói cách
        khác, chỉ làm việc với bạn bè, không làm việc với người lạ. Đoạn code
        sau dường như vi phạm Law of Demeter vì nó gọi hàm 
        <strong>getScratchDir()</strong> bằng giá trị trả về của 
        <strong>getOptions()</strong>, và sau đó gọi 
        <strong>getAbsolutePath()</strong> bằng giá trị trả về của 
        <strong>getScratchDir()</strong>.`,
      },
      {
        code: {
          src: `final String outputDir = ctxt.getOptions().getScratchDir().getAbsolutePath();`,
          language: 'java',
        },
      },
      {
        p: `<h6><b>TRAIN WRECKS</b></h6>`,
      },
      {
        p: `Dạng code này thường được gọi là <em>train wreck</em> (đoàn tàu phế
          liệu &nbsp;) vì nó trông giống như một loạt các toa tàu được ghép lại
          với nhau. Các chuỗi lời gọi hàm như thế này được coi là biểu hiện của
          sự cẩu lương và nên tránh chúng. Cách tốt nhất là nên tách chúng ra
          như sau:`,
      },
      {
        code: {
          src: `Options opts = ctxt.getOptions();
File scratchDir = opts.getScratchDir();
final String outputDir = scratchDir.getAbsolutePath();`,
          language: 'java',
        },
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-6_3.png`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        p: `Đoạn code trên có vi phạm Law of Demeter (LoD)? Chắc chắn module chứa
        chúng biết rằng đối tượng ctxt chứa Options, có AbsolutePath (đường
        dẫn tuyệt đối). Quá nhiều thông tin bị lộ ra.[…]`,
      },
      {
        p: `Nhưng việc nó có vi phạm LoD còn phụ thuộc vào <strong>ctxt</strong>, 
        <strong>Options </strong>và <strong>ScratchDir </strong>là các đối
        tượng hay chỉ đơn thuần là các cấu trúc dữ liệu. Nếu chúng là đối
        tượng, thì cấu trúc bên trong chúng nên được ẩn đi chứ không nên để lộ
        thiên như thế, và việc để lộ thông tin về dữ liệu bên trong chúng rõ
        ràng là vi phạm LoD. Mặt khác, nếu <strong>ctxt</strong>, 
        <strong>Options </strong>và <strong>ScratchDir </strong>chỉ là các cấu
        trúc không có hàm xử lý, thì việc lộ dữ liệu bên trong chúng là hiển
        nhiên và LoD không được áp dụng trong trường hợp này. Việc sử dụng các
        hàm truy cập (<strong>getter/setter</strong>) làm vấn đề trở nên mập
        mờ. Nếu code được viết như sau thì có lẽ chúng ta sẽ thôi chất vấn
        nhau về LoD:`,
      },
      {
        code: {
          src: `final String outputDir = ctxt.options.scratchDir.absolutePath;`,
          language: 'java',
        },
      },
      {
        p: `Vấn đề này sẽ ít gây nhầm lẫn hơn nếu các cấu trúc đơn giản chỉ có
        biến public và không có phương thức, trong khi các đối tượng có các
        biến private và các hàm public. Tuy nhiên, một vài framework yêu cầu
        rằng ngay cả các cấu trúc dữ liệu đơn giản cũng cần phải có các hàm
        truy cập.`,
      },
      {
        p: `<h6><b>CON LAI</b></h6>`,
      },
      {
        p: `Sự nhầm lẫn này đôi khi tạo nên các đứa con lai, mang nửa dòng máu đối
        tượng và một nửa còn lại là cấu trúc. Chúng có các hàm làm những việc
        quan trọng, chúng cũng có các biến <strong>public </strong>hoặc các
        hàm truy cập <strong>public</strong>,…với mục đích cuối cùng là hô
        biến các biến <strong>private </strong>thành <strong>public</strong>,
        dụ dỗ các hàm bên ngoài sử dụng các biến private (thông qua 
        <strong>getter/setter</strong>) như một cấu trúc đơn giản.`,
      },
      {
        p: `Những đứa con lai này khiến cho việc thêm mới hàm trở nên khó khăn, và
        việc thêm thuộc tính mới cũng khó khăn nốt. Chúng là thứ tồi tệ nhất
        mà bạn sẽ tạo ra, vậy nên đừng tạo ra chúng. Chúng là dấu hiệu cho
        thấy một thiết kế như sh!t của lập trình viên nào đấy tạo ra mà không
        chắc thứ anh ấy đang tạo ra là gì – một cấu trúc đơn giản với nhiều dữ
        liệu hay một đối tượng với nhiều phương thức.`,
      },
      {
        p: `<h6><b>ẨN CẤU TRÚC</b></h6>`,
      },
      {
        p: `Điều gì xảy ra nếu <strong>ctxt</strong>, <strong>Options </strong>và 
        <strong>ScratchDir </strong>là các đối tượng có hành vi thực sự? Nếu
        vậy, chúng phải giấu cấu trúc bên trong đi, và chúng ta không thể làm
        gì với chúng. Vậy thì chúng ta lấy đường dẫn tuyệt đối (
        <strong>AbsolutePath</strong>) của thư mục bằng cách nào?`,
      },
      {
        code: {
          src: `ctxt.getAbsolutePathOfScratchDirectoryOption();`,
          language: 'java',
        },
      },
      {
        p: `hay`,
      },
      {
        code: {
          src: `ctx.getScratchDirectoryOption().getAbsolutePath();`,
          language: 'java',
        },
      },
      {
        p: `Lựa chọn đầu tiên có thể phát sinh ra hàng loạt phương thức chồng chéo
        nhau bên trong đối tượng <strong>ctxt</strong>. Lựa chọn thứ hai cho
        rằng <strong>getScratchDirectoryOption()</strong> trả về một cấu trúc,
        không phải một đối tượng. Không có lựa chọn nào đủ tốt.`,
      },
      {
        p: `Nếu <strong>ctxt </strong>là một đối tượng, chúng ta nên bảo nó làm gì
        đó, không nên hỏi nó về cấu trúc bên trong nó. Vậy tại sao chúng ta
        muốn đường dẫn tuyệt đối của thư mục? Chúng ta sẽ làm gì với nó? Xem
        xét đoạn code này (lấy từ vài dòng xa hơn bên dưới) trong cùng một
        module:`,
      },
      {
        code: {
          src: `String outFile = outputDir + "/" + className.replace('.', '/') + ".class";
FileOutputStream fout = new FileOutputStream(outFile);
BufferedOutputStream bos = new BufferedOutputStream(fout);`,
          language: 'java',
        },
      },
      {
        p: `Các chi tiết khác nhau tạo nên một chút rắc rối ở đây. Dấu chấm, dấu
        gạch chéo, phần mở rộng của file, […]. Bỏ qua điều đó, chúng tôi thấy
        rằng mục đích của việc lấy đường dẫn tuyệt đối là để tạo một tệp với
        tên cụ thể.`,
      },
      {
        p: `Vậy thì điều gì sẽ xảy ra nếu chúng tôi bảo đối tượng 
        <strong>ctxt </strong>thực hiện việc này?`,
      },
      {
        code: {
          src: `BufferedOutputStream bos = ctxt.createScratchFileStream(classFileName);`,
          language: 'java',
        },
      },
      {
        p: ` Khá hợp lý! Điều này cho phép <strong>ctxt </strong>ẩn nội dung bên
        trong nó và ngăn hàm hiện tại vi phạm LoD bằng cách điều hướng qua các
        đối tượng mà module không biết.`,
      },
    ],
  },
  {
    title: 'Data Transfer Objects',
    contents: [
      {
        p: `Dạng thuần túy của cấu trúc dữ liệu là một class có các biến public và
        không có hàm. Dạng này đôi khi được gọi là một đối tượng truyền dữ
        liệu (Data transfer object), hoặc DTO. Các DTO là cấu trúc rất hữu
        ích, đặc biệt là khi giao tiếp với cơ sở dữ liệu hoặc chuyển đổi thông
        điệp từ các socket, v.v. Chúng thường là bước đầu tiên trong quá trình
        chuyển đổi dữ liệu từ cơ sở dữ liệu thành các đối tượng của chương
        trình. Một số phổ biến hơn là chuẩn “bean” được hiển thị trong 
        <strong>Listing 6-7</strong>. Bean (làm việc với java sẽ biết) có các
        biến riêng được thao tác bởi <strong>getter </strong>và 
        <strong>setter</strong>. Việc “xém” bao đóng dường như làm cho những
        người theo chủ nghĩa hướng đối tượng cảm thấy đỡ khó chịu hơn, nhưng
        không mang lại lợi ích nào đáng kể.`,
      },
      {
        p: `Listing 6-7: <strong>address.java</strong>`,
      },
      {
        code: {
          src: `public class Address {
    private String street;
    private String streetExtra;
    private String city;
    private String state;
    private String zip;
  
    public Address(String street, String streetExtra,
                    String city, String state, String zip) {
        this.street = street;
        this.streetExtra = streetExtra;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
  
    public String getStreet() {
        return street;
    }
  
    public String getStreetExtra() {
        return streetExtra;
    }
  
    public String getCity() {
        return city;
    }
  
    public String getState() {
        return state;
    }
  
    public String getZip() {
        return zip;
    }
}`,
          language: 'java',
        },
      },
      {
        p: `<h6><b>ACTIVE RECORDS</b></h6>`,
      },
      {
        p: `Active Record là các hình thức DTO đặc biệt. Chúng là các cấu trúc dữ
        liệu với các biến <strong>public</strong>, đôi khi có các phương thức
        như <strong>Save </strong>và <strong>Find</strong>. Thông thường các
        Active Record là dữ liệu được gửi trực tiếp từ các bảng trong cơ sở dữ
        liệu hoặc các nguồn dữ liệu khác.`,
      },
      {
        p: `Thật không may, chúng ta thường thấy các nhà phát triển đối xử với cấu
        trúc này như thể chúng là đối tượng bằng cách đặt các phương thức
        nghiệp vụ vào chúng. Điều này thật nguy hiểm vì nó tạo ra con quái vật
        mang tên con lai như đã đề cập bên trên.`,
      },
      {
        p: `Giải pháp, tất nhiên là coi các Active Record là một cấu trúc, đồng
        thời tạo các đối tượng riêng biệt chứa các phương thức nghiệp vụ và ẩn
        dữ liệu của chúng đi.`,
      },
    ],
  },
  {
    title: 'Kết luận',
    contents: [
      {
        p: `Đối tượng hiển thị ra các hành động và ẩn dữ liệu, điều này giúp dễ
        dàng thêm các loại đối tượng mới mà không thay đổi các hành vi hiện
        có. Nhưng nó cũng làm cho việc thêm các phương thức mới vào đối tượng
        hiện có trở nên khó khăn. Cấu trúc dữ liệu phơi bày dữ liệu và không
        có nhiều phương thức, điều này giúp dễ dàng thêm các phương thức mới
        vào các cấu trúc dữ liệu hiện có nhưng lại làm cho việc thêm cấu trúc
        mới vào các hàm hiện có trở nên khó khăn.`,
      },
      {
        p: `Trong bất kỳ hệ thống nào, đôi khi chúng tôi sẽ muốn việc thay đổi dữ
        liệu trở nên linh hoạt, vì vậy chúng tôi chọn đối tượng cho hệ thống.
        Nhưng thỉnh thoảng chúng tôi lại cần thêm những hàm mới, và vì vậy
        chúng tôi cần chọn kiểu cấu trúc. Các nhà phát triển phần mềm giỏi
        luôn biết cách tiếp cận tốt nhất trong những trường hợp này.`,
      },
    ],
  },
  {
    title: 'Tham khảo',
    contents: [
      {
        p: `<em>Refactoring: Improving the Design of Existing Code</em>, Martin
        Fowler et al., Addison-Wesley, 1999.`,
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
