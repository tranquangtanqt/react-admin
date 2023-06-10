import IContent from 'utils/interface';

export const chapter7: IContent[] = [
  {
    title: '',
    no: false,
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-7_1.png`),
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
        p: `Có vẻ kỳ lạ khi lại có một phần về xử lý lỗi trong một cuốn sách về
        code sạch. Xử lý lỗi chỉ là một trong những việc mà tất cả chúng ta
        phải làm khi lập trình. Đầu vào có thể bất thường và thiết bị có thể
        bị lỗi. Nói tóm lại, mọi thứ đều có thể xảy ra sai sót, và khi chúng
        xảy ra, chúng ta với tư cách là người lập trình có trách nhiệm đảm bảo
        rằng code của chúng ta thực hiện những gì nó cần làm.`,
      },
      {
        p: `Tuy nhiên, triển khai với code sạch phải rõ ràng. Nhiều khi code bị
        chi phối hoàn toàn bởi việc xử lý lỗi. Khi tôi nói bị chi phối, tôi
        không có ý nói rằng xử lý lỗi chỉ là tất cả những gì họ làm. Ý tôi là
        gần như không thể thấy code làm gì vì tất cả các lỗi xử lý được rải
        rác. Xử lý lỗi là quan trọng,&nbsp;
        <em>nhưng nếu việc này làm “che khuất” logic thì đó là sai</em>. (hãy
        suy nghĩ thêm về những lần bạn đặt <strong>try…catch…</strong> và
        chẳng làm gì bên trong phần thân của <strong>catch </strong>cả)`,
      },
      {
        p: `Trong chương này, tôi sẽ trình bày một số kỹ thuật và cân nhắc mà bạn
        có thể sử dụng để viết code vừa rõ ràng vừa mạnh mẽ — mã xử lý lỗi một
        cách duyên dáng và đúng phong cách.`,
      },
    ],
  },
  {
    title: 'Sử dụng ngoại lệ thay vì để cho code xử lý',
    contents: [
      {
        p: `Trong quá khứ xa xôi, có rất nhiều ngôn ngữ không có ném ngoại lệ.
        Trong các ngôn ngữ đó, các kỹ thuật xử lý và báo cáo lỗi bị hạn chế.
        Bạn đặt cờ lỗi hoặc trả lại mã lỗi mà người gọi có thể kiểm tra. Code
        trong <strong>Listing 7-1</strong> minh họa những cách tiếp cận này.`,
      },
      {
        p: `<strong>Listing 7-1</strong>: <strong>DeviceController.java</strong>`,
      },
      {
        code: {
          src: `public class DeviceController { 
    ...
    public void sendShutDown() { 
        DeviceHandle handle = getHandle(DEV1); 
        // Kiểm tra trạng thái của thiết bị
        if (handle != DeviceHandle.INVALID) {
            // Lưu trạng thái thiết bị vào record field
            retrieveDeviceRecord(handle);
            // Nếu không bị treo, hãy tắt
            if (record.getStatus() != DEVICE_SUSPENDED) {
                pauseDevice(handle); 
                clearDeviceWorkQueue(handle); 
                closeDevice(handle);
            } else {
                logger.log("Thiết bị bị treo. Không thể tắt");
            }
        } else {
            logger.log("Xử lý không hợp lệ cho: " + DEV1.toString()); 
        }
    } 
    ...
}`,
          language: 'java',
        },
      },
      {
        p: `Vấn đề với những cách tiếp cận này là chúng gây lộn xộn cho người gọi.
        Người gọi phải kiểm tra lỗi ngay sau cuộc gọi. Thật không may, người
        gọi rất dễ quên. Đối với trường hợp này, tốt hơn là bạn nên ném một
        ngoại lệ khi bạn gặp lỗi. Code sạch hơn. Logic của nó không bị che
        khuất bởi việc xử lý lỗi.
        <br />
        <strong>Listing 7-2</strong> hiển thị code sau khi chúng ta đã chọn
        đưa ra các ngoại lệ trong các phương thức (method) có thể phát sinh
        lỗi.`,
      },
      {
        p: `<strong>Listing 7-2</strong>: 
        <strong>DeviceController.java (with exceptions)</strong>`,
      },
      {
        code: {
          src: `public class DeviceController { 
    ...
    public void sendShutDown() {
        try {
            tryToShutDown();
        } catch (DeviceShutDownError e) {
            logger.log(e); }
        }
          
    private void tryToShutDown() throws DeviceShutDownError {
        DeviceHandle handle = getHandle(DEV1);
        DeviceRecord record = retrieveDeviceRecord(handle);
        pauseDevice(handle); 
        clearDeviceWorkQueue(handle); 
        closeDevice(handle);
    }
      
    private DeviceHandle getHandle(DeviceID id) {
        ...
        throw new DeviceShutDownError("Xử lý không hợp lệ cho: " + id.toString()); 
        ...
    }
    ...
}`,
          language: 'java',
        },
      },
      {
        p: `Để ý xem nó “sạch” hơn bao nhiêu. Đây không chỉ là vấn đề thẩm mỹ.
        Code này tốt hơn vì hai mối quan tâm không bị chồng chéo, thuật
        toán&nbsp;<strong>ShutDown</strong>&nbsp;và&nbsp;
        <strong>xử lý lỗi</strong>&nbsp;giờ đã được tách biệt. Bạn có thể xem
        xét từng vấn đề đó và hiểu chúng một cách độc lập.`,
      },
    ],
  },
  {
    title: 'Trước tiên, viết khối Try-Catch-Finally của bạn',
    contents: [
      {
        p: ` Một trong những điều thú vị nhất về các ngoại lệ là chúng xác định
        phạm vi trong chương trình của bạn. Khi bạn thực thi code trong
        phần&nbsp;<strong>try</strong>&nbsp;của câu lệnh&nbsp;
        <strong>try-catch-finally</strong>, bạn đang nói rằng việc thực thi có
        thể xảy ra lỗi tại bất kỳ thời điểm nào và sau đó code trong&nbsp;
        <strong>catch</strong>&nbsp;sẽ được thực thi.`,
      },
      {
        p: `Theo một cách nào đó, các khối&nbsp;<strong>try</strong>&nbsp;giống
        như các giao dịch (transaction).&nbsp;<strong>catch</strong>&nbsp;đảm
        bảo để chương trình của bạn ở trạng thái không bị gián đoạn, bởi bất
        kể điều gì xảy ra trong&nbsp;<strong>try</strong>. Vì lý do này, bạn
        nên bắt đầu bằng câu lệnh&nbsp;<strong>try-catch-finally</strong>
        &nbsp;khi bạn viết code, nó có thể đưa ra các ngoại lệ. Điều này giúp
        bạn xác định người dùng mã code sẽ mong đợi điều gì khi xảy ra lỗi với
        code được thực thi trong&nbsp;<strong>try</strong>.`,
      },
      {
        p: `Hãy xem một ví dụ. Chúng ta cần viết một số dòng code truy cập tệp và
        đọc một số đối tượng được&nbsp;<strong>serialized</strong>. Chúng ta
        bắt đầu với&nbsp;<strong>unit test</strong>&nbsp;cho thấy rằng chúng
        ta sẽ nhận được một ngoại lệ khi tệp không tồn tại:`,
      },
      {
        code: {
          src: `@Test(expected = StorageException.class)
public void retrieveSectionShouldThrowOnInvalidFileName() {
    sectionStore.retrieveSection("Tập tin không hợp lệ"); 
}`,
          language: 'java',
        },
      },
      {
        p: `Việc kiểm tra thúc đẩy chúng ta tạo ra hàm này:`,
      },
      {
        code: {
          src: `public List<RecordedGrip> retrieveSection(String sectionName) { 
    // Fake return cho đến khi chúng ta có một triển khai thực sự
    return new ArrayList<RecordedGrip>();
}`,
          language: 'java',
        },
      },
      {
        p: `Thử nghiệm của chúng ta không thành công vì nó không có ngoại lệ. Tiếp
        theo, chúng ta thay đổi triển khai để nó cố gắng truy cập một tệp
        không hợp lệ. Thao tác này đưa ra một ngoại lệ:`,
      },
      {
        code: {
          src: `public List<RecordedGrip> retrieveSection(String sectionName) { 
    try {
        FileInputStream stream = new FileInputStream(sectionName);
    } catch (Exception e) {
        throw new StorageException("Lỗi truy xuất", e); 
    }
    return new ArrayList<RecordedGrip>();
}`,
          language: 'java',
        },
      },
      {
        p: `Chúng ta hiện đã vượt qua (pass) bài kiểm tra vì đã phát hiện ra ngoại
        lệ. Tại thời điểm này, chúng ta có thể tham khảo lại. Chúng ta có thể
        thu hẹp loại ngoại lệ mà chúng ta&nbsp;<strong>catch</strong>
        &nbsp;được để phù hợp với loại thực sự được đưa ra từ phương thức khởi
        tạo của&nbsp;<strong>FileInputStream</strong>:&nbsp;
        <strong>FileNotFoundException</strong>:`,
      },
      {
        code: {
          src: `public List<RecordedGrip> retrieveSection(String sectionName) { 
    try {
        FileInputStream stream = new FileInputStream(sectionName);
        stream.close();
    } catch (FileNotFoundException e) {
        throw new StorageException("Lỗi truy xuất”, e); 
    }
    return new ArrayList<RecordedGrip>(); 
}`,
          language: 'java',
        },
      },
      {
        p: `Bây giờ chúng ta đã xác định phạm vi với cấu trúc&nbsp;
        <strong>try-catch</strong>, chúng ta có thể sử dụng 
        <a
          href="https://blog.co-mit.com/post/9/T%C3%ACm+hi%E1%BB%83u+m%C3%B4+h%C3%ACnh+TDD+%28Test+-+Driven+Development%29+v%C3%A0+c%C3%A1ch+%C3%A1p+d%E1%BB%A5ng"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TDD (Test Driven Development)
        </a> 
        để xây dựng phần còn lại của logic mà chúng ta cần. Logic đó sẽ được
        thêm vào giữa quá trình tạo&nbsp;<strong>FileInputStream</strong>
        &nbsp;và&nbsp;<strong>close</strong>, và có thể giả vờ rằng không có
        gì sai.`,
      },
      {
        p: `Cố gắng viết các bài kiểm tra buộc xảy ra các trường hợp ngoại lệ, sau
        đó thêm hành vi vào trình xử lý của bạn để điều chỉnh các bài kiểm tra
        của bạn. Điều này sẽ khiến bạn phải xây dựng phạm vi giao dịch của
        khối&nbsp;<strong>try</strong>&nbsp;trước và sẽ giúp bạn duy trì bản
        chất giao dịch của phạm vi đó.`,
      },
    ],
  },
  {
    title: 'Sử dụng Unchecked Exceptions',
    contents: [
      {
        p: `Cuộc tranh luận đã kết thúc. Trong nhiều năm, các lập trình viên Java
        đã tranh luận về lợi ích và mối quan hệ của các&nbsp;
        <strong>checked exceptions</strong>. Khi các&nbsp;
        <strong>checked exceptions</strong>&nbsp;được giới thiệu trong phiên
        bản Java đầu tiên, chúng dường như là một ý tưởng tuyệt vời. Hàm của
        mọi phương thức sẽ liệt kê tất cả các ngoại lệ mà nó có thể chuyển cho
        trình gọi của nó. Hơn nữa, những ngoại lệ này là một phần của loại
        phương pháp. Code của bạn thực sự sẽ không biên dịch nếu hàm không
        khớp với những gì code của bạn đã viết.`,
      },
      {
        p: `Vào thời điểm đó, chúng ta nghĩ rằng các&nbsp;
        <strong>checked exceptions</strong>&nbsp;là một ý tưởng tuyệt vời; và
        tất nhiên, chúng có thể mang lại&nbsp;<em>một số</em>&nbsp;lợi ích.
        Tuy nhiên, rõ ràng là giờ đây chúng không còn cần thiết để phát triển
        phần mềm. C# không có các&nbsp;<strong>checked exceptions</strong>
        &nbsp;và bất chấp mọi nỗ lực, C++ cũng không. Python hay Ruby cũng
        vậy. Tuy nhiên, có thể viết phần mềm bằng tất cả các ngôn ngữ này. Do
        đó, chúng ta phải&nbsp;<strong>quyết định – thực sự – liệu</strong>
        &nbsp;các&nbsp;<strong>checked exceptions</strong>&nbsp;có xứng đáng
        với cái giá của chúng hay không.`,
      },
      {
        p: `<h6><b>CUSTOM LẠI LỚP EXCEPTION THEO NHU CẦU CỦA NGƯỜI GỌI</b></h6>`,
      },
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-7_2.jpeg`),
          width: `35%`,
          align: `center`,
        },
      },
      {
        p: `Giá bao nhiêu? Giá của các trường hợp&nbsp;
        <strong>checked exceptions</strong>&nbsp;là vi phạm nguyên tắc
        Mở/Đóng. Nếu bạn ném một&nbsp;<strong>checked exceptions</strong>
        &nbsp;từ một phương thức trong code của bạn và lệnh&nbsp;
        <strong>catch</strong>&nbsp;ở ba mức trên, bạn phải khai báo ngoại lệ
        đó trong signature của mỗi phương thức giữa bạn và lệnh&nbsp;
        <strong>catch</strong>. Điều này có nghĩa là một thay đổi ở cấp thấp
        của phần mềm có thể buộc phải thay đổi signature ở nhiều cấp cao hơn.
        Các mô-đun đã thay đổi phải được xây dựng lại và triển khai lại, mặc
        dù không có gì họ quan tâm đến đã thay đổi.`,
      },
      {
        p: `Xem xét hệ thống phân cấp gọi của một hệ thống lớn. Các hàm ở trên
        cùng gọi các hàm bên dưới chúng, gọi tiếp các hàm khác bên dưới chúng,
        vv… Bây giờ, giả sử một trong những hàm cấp thấp nhất được sửa đổi
        theo cách mà nó phải đưa ra một ngoại lệ. Nếu ngoại lệ đó được chọn,
        thì hàm phải thêm một mệnh đề&nbsp;<strong>throws</strong>. Nhưng điều
        này có nghĩa là mọi hàm gọi hàm đã sửa đổi cũng phải được sửa đổi để
        bắt được ngoại lệ mới hoặc để nối mệnh đề&nbsp;<strong>throws</strong>
        &nbsp;thích hợp vào chữ ký của nó. vv… Kết quả thực là một loạt các
        thay đổi hoạt động theo cách của chúng từ mức thấp nhất của phần mềm
        đến mức cao nhất! Tính năng đóng gói bị phá vỡ bởi vì tất cả các hàm
        trong đường dẫn của một lần ném phải biết về chi tiết của ngoại lệ cấp
        thấp đó. Vì mục đích của các ngoại lệ là cho phép bạn xử lý lỗi ở
        khoảng cách xa, thật đáng tiếc khi các&nbsp;
        <strong>checked exceptions</strong>&nbsp;phá vỡ tính đóng gói theo
        cách này.`,
      },
      {
        p: `<strong>checked exceptions</strong>&nbsp;đôi khi có thể hữu ích nếu
        bạn đang viết thư viện quan trọng: Bạn phải&nbsp;
        <strong>catch</strong>&nbsp;chúng. Nhưng trong phát triển ứng dụng nói
        chung, chi phí phụ thuộc lớn hơn lợi ích mà nó đem lại.`,
      },
    ],
  },
  {
    title: 'Cung cấp ngữ cảnh có ngoại lệ',
    contents: [
      {
        p: `Mỗi ngoại lệ mà bạn đưa ra phải cung cấp đủ ngữ cảnh để xác định nguồn
        và vị trí của lỗi. Trong Java, bạn có thể lấy dấu vết ngăn xếp từ bất
        kỳ ngoại lệ nào; tuy nhiên, dấu vết ngăn xếp không thể cho bạn biết
        mục đích của hoạt động không thành công.`,
      },
      {
        p: `Tạo thông báo lỗi đầy đủ thông tin và chuyển chúng cùng với các ngoại
        lệ của bạn. Đề cập đến hoạt động không thành công và loại lỗi. Nếu bạn
        đang logging ứng dụng của mình, hãy chuyển đủ thông tin để có thể ghi
        lại lỗi trong lần&nbsp;<strong>catch</strong>&nbsp;của bạn.`,
      },
    ],
  },
  {
    title: 'Xác định các loại ngoại lệ theo nhu cầu của người gọi',
    contents: [
      {
        p: `Có nhiều cách phân loại lỗi. Chúng ta có thể phân loại chúng theo
        nguồn của chúng: Chúng đến từ thành phần này hay thành phần khác? Hoặc
        loại của chúng: Chúng bị lỗi thiết bị, lỗi mạng, hoặc lỗi lập trình?
        Tuy nhiên, khi chúng ta xác định các lớp ngoại lệ trong một ứng dụng,
        mối quan tâm quan trọng nhất của chúng ta là&nbsp;
        <strong>cách chúng được bắt</strong>.`,
      },
      {
        p: `Hãy xem một ví dụ về phân loại ngoại lệ kém. Đây là câu lệnh&nbsp;
        <strong>try-catch-finally</strong>&nbsp;cho lệnh gọi thư viện của bên
        thứ ba. Nó bao gồm tất cả các ngoại lệ mà các cuộc gọi có thể ném ra:`,
      },
      {
        code: {
          src: `ACMEPort port = new ACMEPort(12);
try { 
    port.open();
} catch (DeviceResponseException e) { 
    reportPortError(e);
    logger.log("Device response exception", e);
} catch (ATM1212UnlockedException e) { 
    reportPortError(e); 
    logger.log("Unlock exception", e);
} catch (GMXError e) { 
    reportPortError(e);
    logger.log("Device response exception");
} finally { 
    ...
}`,
          language: 'java',
        },
      },
      {
        p: `Tuyên bố đó chứa đựng rất nhiều sự trùng lặp và chúng ta không nên
        ngạc nhiên. Trong hầu hết các tình huống xử lý ngoại lệ, công việc mà
        chúng ta thực hiện tương đối chuẩn, bất kể nguyên nhân thực tế là gì.
        Chúng ta phải ghi lại một lỗi và đảm bảo rằng chúng ta có thể tiếp
        tục.`,
      },
      {
        p: `Trong trường hợp này, bởi vì chúng ta biết rằng công việc chúng ta
        đang làm gần như giống nhau bất kể ngoại lệ xảy ra là gì, chúng ta có
        thể đơn giản hóa code của mình đáng kể bằng cách gói API mà chúng ta
        đang gọi và đảm bảo rằng nó trả về một loại ngoại lệ chung:`,
      },
      {
        code: {
          src: `LocalPort port = new LocalPort(12); 
try {
    port.open();
} catch (PortDeviceFailure e) {
    reportError(e);
    logger.log(e.getMessage(), e);
} finally {
    ...
}`,
          language: 'java',
        },
      },
      {
        p: `Lớp&nbsp;<strong>LocalPort</strong>&nbsp;của chúng ta chỉ là một trình
        bao bọc đơn giản giúp bắt và dịch các ngoại lệ được ném bởi lớp&nbsp;
        <strong>ACMEPort</strong>:`,
      },
      {
        code: {
          src: `public class LocalPort {
    private ACMEPort innerPort;
    public LocalPort(int portNumber) { 
        innerPort = new ACMEPort(portNumber);
    }
    public void open() { 
        try {
            innerPort.open();
        } catch (DeviceResponseException e) {
            throw new PortDeviceFailure(e);
        } catch (ATM1212UnlockedException e) {
            throw new PortDeviceFailure(e);
        } catch (GMXError e) {
            throw new PortDeviceFailure(e);
        } 
    }
    ...
}`,
          language: 'java',
        },
      },
      {
        p: `Các trình đóng gói như chúng ta đã xác định cho&nbsp;
        <strong>ACMEPort</strong>&nbsp;có thể rất hữu ích. Trên thực tế, đóng
        gói các API của bên thứ ba là một phương pháp hay nhất. Khi bạn bọc
        một API của bên thứ ba, bạn giảm thiểu sự phụ thuộc của mình vào nó:
        Bạn có thể chọn chuyển sang một thư viện khác trong tương lai mà không
        cần thay đổi nhiều. Gói cũng giúp bạn dễ dàng bắt chước các cuộc gọi
        của bên thứ ba hơn khi bạn đang kiểm tra code của riêng mình.`,
      },
      {
        p: `Một lợi thế cuối cùng của gói là bạn không bị ràng buộc với các lựa
        chọn thiết kế API của một nhà cung cấp cụ thể. Bạn có thể xác định một
        API mà bạn cảm thấy thoải mái. Trong ví dụ trước, chúng ta đã xác định
        một loại ngoại lệ duy nhất cho lỗi thiết bị&nbsp;<strong>port</strong>
        &nbsp;và nhận thấy rằng chúng ta có thể viết code sạch hơn nhiều.`,
      },
      {
        p: `Thường thì một lớp ngoại lệ duy nhất là tốt cho một vùng code cụ thể.
        Thông tin được gửi với ngoại lệ có thể phân biệt các lỗi. Chỉ sử dụng
        các lớp khác nhau nếu đôi khi bạn muốn bắt một ngoại lệ và cho phép
        ngoại lệ khác đi qua.`,
      },
    ],
  },
  {
    title: 'Xác định dòng chảy bình thường',
    contents: [
      {
        image: {
          src: require(`resources/img/ebook/vn/clean-code/chapter-7_3.png`),
          width: `40%`,
          align: `center`,
        },
      },
      {
        p: `Nếu bạn làm theo lời khuyên trong phần trước, bạn sẽ có một sự tách
        biệt tốt giữa logic nghiệp vụ và việc xử lý lỗi của bạn. Phần lớn code
        của bạn sẽ bắt đầu trông giống như một thuật toán không trang trí. Tuy
        nhiên, quá trình thực hiện việc này đẩy khả năng phát hiện lỗi ra rìa
        chương trình của bạn. Bạn bọc các API bên ngoài để bạn có thể đưa ra
        các ngoại lệ của riêng mình và bạn xác định một trình xử lý phía trên
        code của mình để bạn có thể đối phó với bất kỳ tính toán nào bị hủy
        bỏ. Hầu hết thời gian đây là một cách tiếp cận tuyệt vời, nhưng có một
        số lúc bạn có thể không muốn nó xảy ra.`,
      },
      {
        p: `Hãy xem một ví dụ. Dưới đây là một đoạn code khó hiểu tính tổng các
        chi phí trong ứng dụng thanh toán:`,
      },
      {
        code: {
          src: `try {
    MealExpenses expenses = expenseReportDAO.getMeals(employee.getID()); 
    m_total += expenses.getTotal();
} catch(MealExpensesNotFound e) { 
    m_total += getMealPerDiem();
}`,
          language: 'java',
        },
      },
      {
        p: `Trong nghiệp vụ này, nếu các bữa ăn tiêu tốn nhiều chi phí, chúng sẽ
        trở thành một phần của tổng số. Nếu không, nhân viên sẽ nhận được một
        khoản tiền&nbsp;<strong>công tác phí</strong>&nbsp;cho ngày hôm đó.
        Ngoại lệ làm lộn xộn logic. Sẽ tốt hơn nếu chúng ta không phải giải
        quyết trường hợp đặc biệt? Code của chúng ta sẽ trông đơn giản hơn
        nhiều. Nó sẽ trông như thế này:`,
      },
      {
        code: {
          src: `MealExpenses expenses = expenseReportDAO.getMeals(employee.getID()); 
m_total += expenses.getTotal();`,
          language: 'java',
        },
      },
      {
        p: `Chúng ta có thể làm cho code đơn giản như vậy không? Nó chỉ ra rằng
        chúng ta có thể. Chúng ta có thể thay đổi&nbsp;
        <strong>ExpenseReportDAO</strong>&nbsp;để nó luôn trả về một đối
        tượng&nbsp;<strong>MealExpense</strong>. Nếu không có chi phí bữa ăn,
        nó trả về đối tượng&nbsp;<strong>MealExpense</strong>&nbsp;trả
        về&nbsp;<strong>công tác phí</strong>&nbsp;l(per diem) à tổng của nó:`,
      },
      {
        code: {
          src: `public class PerDiemMealExpenses implements MealExpenses { 
    public int getTotal() {
        // trả lại công tác phí mặc định 
    }
}`,
          language: 'java',
        },
      },
      {
        p: `Đây được gọi là SPECIAL CASE PATTERN [Fowler]. Bạn tạo một lớp hoặc
        cấu hình một đối tượng để nó xử lý một trường hợp đặc biệt cho bạn.
        Khi bạn làm như vậy, mã khách hàng không phải đối phó với các hành vi
        đặc biệt. Hành vi đó được gói gọn trong đối tượng trường hợp đặc biệt.`,
      },
    ],
  },
  {
    title: 'Đừng trả về Null',
    contents: [
      {
        p: `Tôi nghĩ rằng bất kỳ cuộc thảo luận nào về xử lý lỗi cũng nên đề cập
        đến những việc làm mà dẫn đến lỗi. Đầu tiên trong danh sách:&nbsp;
        <strong>trả về null</strong>. Tôi không thể đếm được số lượng các ứng
        dụng mà tôi đã thấy trong đó gần như mọi dòng đều là lệnh kiểm
        tra&nbsp;<strong>null</strong>. Đây là một số dòng ví dụ:`,
      },
      {
        code: {
          src: `public void registerItem(Item item) { 
    if (item != null) {
        ItemRegistry registry = peristentStore.getItemRegistry(); 
        if (registry != null) {
            Item existing = registry.getItem(item.getID());
            if (existing.getBillingPeriod().hasRetailOwner()) {
                existing.register(item); 
            }
        } 
    }
}`,
          language: 'java',
        },
      },
      {
        p: `Nếu bạn làm việc trong một code base (nhóm depvelope đầu tiên viết nên
          code) với những dòng code như thế này, nó có thể không tệ đối với bạn,
          nhưng nó thật sự là sự thiếu trách nhiệm! Khi chúng ta trả về&nbsp;
          <strong>null</strong>, về cơ bản chúng ta đang tự tạo ra công việc cho
          chính bản thân mình đồng thời cũng để cho người gọi hàm phải giải
          quyết thêm vấn đề. Thử tưởng tượng người gọi hàm quên kiểm tra&nbsp;
          <strong>null</strong>&nbsp;một lần, ứng dụng ngay lập tức sẽ xảy ra
          lỗi và tất nhiên không ai mong muốn điều đó cả.`,
      },
      {
        p: `Bạn có nhận thấy là không có kiểm tra&nbsp;<strong>null</strong>
        &nbsp;trong dòng thứ hai của câu lệnh&nbsp;<strong>if</strong>
        &nbsp;lồng nhau đó không? Điều gì sẽ xảy ra trong khi chạy nếu&nbsp;
        <strong>persistentStore</strong>&nbsp;null? Chúng ta đã có một&nbsp;
        <strong>NullPointerException</strong>&nbsp;trong khi chạy và ai đó
        đang bắt&nbsp;<strong>NullPointerException</strong>&nbsp;ở cấp cao
        nhất, hoặc họ không làm vậy. Dù thế nào thì nó cũng rất tệ. Vậy chính
        xác thì bạn nên làm gì để đáp lại một&nbsp;
        <strong>NullPointerException</strong>&nbsp;được ném ra từ sâu bên
        trong ứng dụng của bạn?`,
      },
      {
        p: `Có thể dễ dàng nói rằng vấn đề với đoạn code trên là nó thiếu kiểm
        tra&nbsp;<strong>null</strong>, nhưng trên thực tế, vấn đề là nó xảy
        ra&nbsp;<em>quá nhiều</em>. Nếu bạn muốn trả về&nbsp;
        <strong>null</strong>&nbsp;từ một phương thức, hãy xem xét việc ném
        một ngoại lệ hoặc trả về một đối tượng ĐẶC BIỆT để thay thế. Nếu bạn
        đang gọi một phương thức trả về&nbsp;<strong>null</strong>&nbsp;từ một
        API của bên thứ ba, hãy xem xét gói phương thức đó bằng một phương
        thức ném ngoại lệ hoặc trả về một đối tượng đặc biệt.`,
      },
      {
        p: `Trong nhiều trường hợp, các đối tượng trường hợp đặc biệt là một biện
        pháp khắc phục dễ dàng. Hãy tưởng tượng rằng bạn có đoạn code như thế
        này:`,
      },
      {
        code: {
          src: `List<Employee> employees = getEmployees(); 
if (employees != null) {
    for(Employee e : employees) { 
        totalPay += e.getPay();
    } 
}`,
          language: 'java',
        },
      },
      {
        p: `Bây giờ,&nbsp;<strong>getEmployees</strong>&nbsp;có thể trả về&nbsp;
        <strong>null</strong>, nhưng có nhất thiết phải vậy không? Nếu chúng
        ta thay đổi&nbsp;<strong>getEmployees</strong>&nbsp;để nó trả về một
        danh sách rỗng (danh sách không có phần tử nào) thay vì trả về&nbsp;
        <strong>null</strong>, chúng ta có thể xóa dòng kiểm tra&nbsp;
        <strong>null</strong>:`,
      },
      {
        code: {
          src: `List<Employee> employees = getEmployees(); 
for(Employee e : employees) {
    totalPay += e.getPay(); 
}`,
          language: 'java',
        },
      },
      {
        p: `May mắn thay, Java có&nbsp;<strong>Collections.emptyList()</strong>
        &nbsp;và nó trả về một danh sách bất biến được xác định trước mà chúng
        ta có thể sử dụng cho mục đích này:`,
      },
      {
        code: {
          src: `public List<Employee> getEmployees() { 
    if( .. không có employees .. )
        return Collections.emptyList(); 
}`,
          language: 'java',
        },
      },
      {
        p: `Nếu bạn viết code theo cách này, bạn sẽ giảm thiểu cơ hội xuất
        hiện&nbsp;<strong>NullPointerExceptions</strong>&nbsp;và code của bạn
        sẽ sạch hơn.`,
      },
    ],
  },
  {
    title: 'Đừng truyền Null',
    contents: [
      {
        p: `Trả về&nbsp;<strong>null</strong>&nbsp;từ các phương thức là không
        tốt, nhưng truyền&nbsp;<strong>null</strong>&nbsp;vào các phương thức
        thì còn tệ hơn. Trừ khi bạn đang làm việc với một API yêu cầu bạn
        truyền vào&nbsp;<strong>null</strong>, còn đâu bạn nên tránh
        truyền&nbsp;<strong>null</strong>&nbsp;trong code của mình bất cứ khi
        nào có thể.`,
      },
      {
        p: `Hãy xem một ví dụ để biết tại sao. Đây là một phương pháp đơn giản để
        tính toán một số liệu cho hai điểm:`,
      },
      {
        code: {
          src: `public class MetricsCalculator {
    public double xProjection(Point p1, Point p2) { 
        return (p2.x – p1.x) * 1.5;
    }
    ...
}`,
          language: 'java',
        },
      },
      {
        p: `Điều gì xảy ra khi ai đó truyền&nbsp;<strong>null</strong>&nbsp;làm
        đối số cho hàm này?`,
      },
      {
        code: {
          src: `calculator.xProjection(null, new Point(12, 13));`,
          language: 'java',
        },
      },
      {
        p: `Tất nhiên, chúng ta sẽ nhận được một&nbsp;
        <strong>NullPointerException</strong>.<br />
        Vậy, làm thế nào chúng ta có thể sửa chữa nó? Chúng ta có thể tạo một
        loại ngoại lệ mới và&nbsp;<strong>throw</strong>&nbsp;nó:`,
      },
      {
        code: {
          src: `public class MetricsCalculator {
    public double xProjection(Point p1, Point p2) { 
        if(p1 == null || p2 == null) {
            throw InvalidArgumentException("Invalid argument for MetricsCalculator.xProjection");
        }
        return (p2.x – p1.x) * 1.5; 
    }  
}`,
          language: 'java',
        },
      },
      {
        p: `Tốt hơn chưa? Nó có thể tốt hơn một chút so với&nbsp;
        <strong>NullPointerException</strong>, nhưng hãy nhớ rằng, chúng ta
        phải xác định một trình xử lý cho&nbsp;
        <strong>InvalidArgumentException</strong>. Người xử lý phải làm gì? Có
        bất kỳ hướng đi nào tốt hơn không? Có một sự thay thế khác. Chúng ta
        có thể sử dụng một tập hợp các&nbsp;<strong>assertions</strong>
        &nbsp;để xác nhận:`,
      },
      {
        code: {
          src: `public class MetricsCalculator {
    public double xProjection(Point p1, Point p2) { 
        assert p1 != null : "p1 should not be null"; 
        assert p2 != null : "p2 should not be null"; 
        return (p2.x – p1.x) * 1.5;
    } 
}`,
          language: 'java',
        },
      },
      {
        p: `Đó là một tài liệu tốt, nhưng nó không giải quyết được vấn đề. Nếu ai
        đó truyền vào giá trị&nbsp;<strong>null</strong>, chúng ta sẽ vẫn gặp
        lỗi trong khi chạy chương trình.
        <br />
        Trong hầu hết các ngôn ngữ lập trình, không có cách nào tốt để đối phó
        với giá trị&nbsp;<strong>null</strong>&nbsp;do người gọi vô tình
        truyền qua. Cách tiếp cận hợp lý là cấm truyền vào&nbsp;
        <strong>null</strong>&nbsp;theo mặc định. Khi bạn làm như vậy, bạn có
        thể viết code với nhận định rằng giá trị&nbsp;<strong>null</strong>
        &nbsp;trong danh sách đối số đầu vào là dấu hiệu của một vấn đề và kết
        thúc với ít lỗi hơn.`,
      },
    ],
  },
  {
    title: 'Phần kết luận',
    contents: [
      {
        p: `Code sạch có thể đọc được, nhưng nó cũng cần phải mạnh mẽ. Đây không
        phải là những mục tiêu xung đột. Chúng ta có thể viết code sạch và
        mạnh mẽ nếu chúng ta thấy việc xử lý lỗi là một mối quan tâm riêng
        biệt, một thứ có thể xem là độc lập với logic chính của chúng ta. Ở
        mức độ mà chúng ta có thể làm được điều đó, chúng ta có thể lập luận
        về nó một cách độc lập và chúng ta có thể đạt được những bước tiến lớn
        trong khả năng bảo trì code của chúng ta.`,
      },
    ],
  },
  {
    title: 'Tham khảo',
    contents: [
      {
        p: `[Martin]: Agile Software Development: Principles, Patterns, and
        Practices, Robert C. Martin, Prentice Hall, 2002.`,
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
