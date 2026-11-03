import { AiTipCategoryDto, AiTipDto } from './dto';

export const AI_TIP_CATEGORIES: AiTipCategoryDto[] = [
  { id: 'prompt', name: 'Viết prompt' },
  { id: 'coding', name: 'Lập trình' },
  { id: 'work', name: 'Công việc' },
  { id: 'japanese', name: 'Học tiếng Nhật' },
  { id: 'caution', name: 'Lưu ý' },
];

export const AI_TIPS: AiTipDto[] = [
  {
    id: 1,
    categoryId: 'prompt',
    title: 'Cấu trúc một prompt tốt',
    content:
      'Nêu rõ: vai trò của AI, bối cảnh, yêu cầu cụ thể, định dạng đầu ra mong muốn và (nếu có) ví dụ mẫu. Prompt càng rõ thì kết quả càng ít phải sửa.',
    prompt: `Bạn là [vai trò, vd: senior Java developer].
Bối cảnh: [mô tả dự án / tình huống].
Nhiệm vụ: [việc cần làm].
Yêu cầu đầu ra: [định dạng, độ dài, ngôn ngữ].
Ví dụ: [đầu vào → đầu ra mẫu].`,
  },
  {
    id: 2,
    categoryId: 'prompt',
    title: 'Few-shot: đưa ví dụ để AI làm đúng format',
    content:
      'Khi cần đầu ra theo một format cố định (JSON, bảng, câu hỏi trắc nghiệm...), hãy đưa 2–3 ví dụ mẫu. AI sẽ bắt chước chính xác hơn nhiều so với chỉ mô tả bằng lời.',
  },
  {
    id: 3,
    categoryId: 'prompt',
    title: 'Cho phép AI hỏi lại',
    content:
      'Thêm câu dặn AI hỏi lại khi thiếu thông tin để tránh việc nó tự đoán và trả lời sai hướng.',
    prompt:
      'Nếu yêu cầu chưa đủ rõ hoặc thiếu thông tin, hãy hỏi lại tôi trước khi trả lời.',
  },
  {
    id: 4,
    categoryId: 'prompt',
    title: 'Chia nhỏ nhiệm vụ lớn',
    content:
      'Với việc phức tạp, yêu cầu AI lập kế hoạch/dàn ý trước, duyệt xong mới cho làm từng bước. Kết quả ổn định và dễ kiểm soát hơn.',
  },
  {
    id: 5,
    categoryId: 'coding',
    title: 'Debug hiệu quả',
    content:
      'Dán đầy đủ: thông báo lỗi / stack trace, phiên bản ngôn ngữ & thư viện, đoạn code liên quan và điều bạn đã thử. Thiếu bối cảnh là lý do phổ biến nhất khiến AI đoán sai.',
    prompt: `Lỗi: [dán log lỗi]
Môi trường: [vd: Java 17, Spring Boot 3.2]
Code liên quan: [dán code]
Đã thử: [các cách đã thử]
Hãy chỉ ra nguyên nhân và cách sửa.`,
  },
  {
    id: 6,
    categoryId: 'coding',
    title: 'Sinh và tối ưu câu SQL',
    content:
      'Đưa cấu trúc bảng (CREATE TABLE) và mô tả dữ liệu cần lấy. Nói rõ hệ quản trị (PostgreSQL, Oracle, SQL Server) vì cú pháp khác nhau.',
    prompt: `Hệ quản trị: [PostgreSQL / Oracle / SQL Server]
Cấu trúc bảng: [dán CREATE TABLE]
Cần: [mô tả dữ liệu muốn lấy]
Hãy viết câu SQL và giải thích ngắn gọn, gợi ý index nếu cần.`,
  },
  {
    id: 7,
    categoryId: 'coding',
    title: 'Review code / viết test',
    content:
      'Nhờ AI review theo tiêu chí cụ thể (bug, hiệu năng, bảo mật) thay vì chỉ hỏi "code này ổn không". Có thể nhờ viết unit test cho các trường hợp biên.',
    prompt:
      'Hãy review đoạn code sau, tập trung vào: bug tiềm ẩn, xử lý trường hợp biên, hiệu năng. Liệt kê theo mức độ nghiêm trọng.',
  },
  {
    id: 8,
    categoryId: 'coding',
    title: 'Regex, công thức Excel, VBA',
    content:
      'Mô tả dữ liệu đầu vào và kết quả mong muốn kèm vài ví dụ thực tế. Luôn thử lại trên dữ liệu thật trước khi dùng.',
  },
  {
    id: 9,
    categoryId: 'work',
    title: 'Tóm tắt tài liệu dài',
    content:
      'Yêu cầu tóm tắt theo cấu trúc (ý chính, việc cần làm, người phụ trách, deadline) để dùng được ngay.',
    prompt:
      'Tóm tắt tài liệu sau thành: 1) Ý chính (tối đa 5 gạch đầu dòng) 2) Việc cần làm 3) Các điểm cần lưu ý.',
  },
  {
    id: 10,
    categoryId: 'work',
    title: 'Dịch tài liệu kỹ thuật Nhật ↔ Việt',
    content:
      'Đưa kèm bảng thuật ngữ để bản dịch nhất quán. Yêu cầu giữ nguyên tên biến, tên màn hình, mã lỗi.',
    prompt: `Dịch đoạn sau từ tiếng Nhật sang tiếng Việt, văn phong tài liệu kỹ thuật.
Giữ nguyên tên biến, tên màn hình, mã lỗi.
Thuật ngữ: 受注 = đơn đặt hàng, 在庫 = tồn kho, 品目 = mặt hàng.`,
  },
  {
    id: 11,
    categoryId: 'work',
    title: 'Viết email tiếng Nhật',
    content:
      'Nói rõ người nhận (khách hàng, cấp trên, đồng nghiệp) để AI chọn mức kính ngữ phù hợp.',
    prompt:
      'Viết email tiếng Nhật gửi [khách hàng / cấp trên] với nội dung: [nội dung]. Dùng kính ngữ phù hợp, văn phong business, ngắn gọn.',
  },
  {
    id: 12,
    categoryId: 'japanese',
    title: 'Giải thích ngữ pháp',
    content:
      'Hỏi kèm ví dụ và so sánh với mẫu ngữ pháp dễ nhầm để hiểu sâu hơn.',
    prompt:
      'Giải thích mẫu ngữ pháp 「〜てもいいです」 trình độ N5 bằng tiếng Việt, cho 3 ví dụ kèm furigana và nghĩa, so sánh với 「〜てはいけません」.',
  },
  {
    id: 13,
    categoryId: 'japanese',
    title: 'Luyện hội thoại',
    content:
      'Cho AI đóng vai người Nhật trong một tình huống cụ thể, yêu cầu sửa lỗi sau mỗi câu trả lời của bạn.',
    prompt:
      'Hãy đóng vai nhân viên cửa hàng tiện lợi ở Nhật, nói chuyện với tôi bằng tiếng Nhật trình độ N5. Sau mỗi câu tôi trả lời, hãy sửa lỗi (nếu có) bằng tiếng Việt.',
  },
  {
    id: 14,
    categoryId: 'japanese',
    title: 'Cách nhớ Kanji',
    content: 'Nhờ AI phân tích bộ thủ và tạo câu chuyện gợi nhớ cho từng chữ.',
    prompt:
      'Phân tích chữ Kanji 「休」: bộ thủ, âm On/Kun, nghĩa, 3 từ ghép thông dụng và một câu chuyện ngắn giúp ghi nhớ.',
  },
  {
    id: 15,
    categoryId: 'caution',
    title: 'AI có thể bịa thông tin',
    content:
      'AI đôi khi trả lời rất tự tin nhưng sai (hallucination), nhất là với số liệu, tên hàm/thư viện, link. Luôn kiểm chứng lại với tài liệu chính thức.',
  },
  {
    id: 16,
    categoryId: 'caution',
    title: 'Không dán dữ liệu nhạy cảm',
    content:
      'Không đưa mật khẩu, API key, dữ liệu khách hàng hay mã nguồn bảo mật của công ty vào AI khi chưa được phép.',
  },
  {
    id: 17,
    categoryId: 'caution',
    title: 'Hội thoại quá dài thì mở chat mới',
    content:
      'Khi cuộc trò chuyện quá dài, AI dễ quên hoặc lẫn thông tin cũ. Tóm tắt lại bối cảnh và bắt đầu cuộc trò chuyện mới.',
  },
];
