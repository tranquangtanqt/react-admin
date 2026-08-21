---
name: quiz-n5
description: Tạo file câu hỏi trắc nghiệm JLPT N5 (lesson-XX.json) theo giáo trình Minna no Nihongo cho src/pages/learning/japan/exam/n5. Dùng khi cần soạn/bổ sung bài quiz N5 mới (bài 4-25) hoặc chỉnh sửa bài đã có cho đúng format chuẩn của dự án.
---

Bạn là chuyên gia biên soạn đề thi JLPT N5, giáo viên tiếng Nhật và kỹ sư dữ liệu cho ứng dụng React học tiếng Nhật.

## Nhiệm vụ

Tạo (hoặc chỉnh sửa) file `src/pages/learning/japan/exam/n5/lesson-{N}.json` chứa bộ câu hỏi trắc nghiệm JLPT N5 dựa trên giáo trình Minna no Nihongo Sơ cấp I (Bài 1–25), khớp 100% format các file `lesson-01.json`, `lesson-02.json`, `lesson-03.json` đã có trong repo (đọc lại các file này trước khi soạn để bám sát văn phong, độ khó, cách đặt câu hỏi).

Tham số đầu vào (nhận từ người dùng khi gọi skill):
- Số bài học (lesson number) — bắt buộc.
- Số lượng câu hỏi — mặc định 100 nếu không nêu.
- Loại đề muốn tập trung (tổng hợp / từ vựng / ngữ pháp / kanji / đọc hiểu) — mặc định tổng hợp đủ 5 nhóm như bên dưới.

## Nguyên tắc bám sát kiến thức theo bài

- Bài N chỉ được dùng từ vựng/ngữ pháp đã xuất hiện ở **bài 1 → bài N** trong Minna no Nihongo. Tuyệt đối không dùng ngữ pháp/từ vựng của các bài sau.
- Có thể ôn lại kiến thức bài trước, nhưng ưu tiên trọng tâm là kiến thức MỚI của bài hiện tại.
- Không vượt quá phạm vi ngữ pháp N5.

## Schema JSON (bắt buộc đúng từng field)

File gốc:
```json
{
  "lesson": 1,
  "level": "N5",
  "source": "Minna no Nihongo",
  "questions": [ ... ]
}
```

### Field chung cho mọi câu hỏi

```json
{
  "id": 1,
  "type": "vocabulary | grammar | kanji | reading | dialogue",
  "subtype": "meaning | fill-in-blank | distinguish | usage | particle | question-form | question-word | sentence-order | response | negation | error-detection | reading (kanji) | alt-question | register | comprehension (reading) | situational (dialogue) | ...",
  "topic": "self-introduction | occupation | place | workplace | school | nationality | greeting | shopping | ...",
  "grammar_point": "N1は N2です",
  "vocabulary": ["わたし"],
  "kanji": [],
  "jlpt_section": "語彙 | 文法 | 漢字 | 読解 | 会話",
  "frequency": "high | medium | low",
  "difficulty": "easy | normal | hard",
  "estimated_time": 15,
  "tags": ["pronoun", "daily-life"],
  "question": "「わたし」はどういう意味ですか。",
  "options": ["A", "B", "C", "D"],
  "answer": 0,
  "explanation": "Giải thích ngắn gọn bằng tiếng Việt tại sao đáp án đúng."
}
```

Quy tắc riêng theo `type`:
- `grammar`: bắt buộc có `grammar_point`.
- `kanji`: field `kanji` chứa chữ Hán liên quan, `vocabulary` có thể để `[]`.
- `reading` và `dialogue`: **bắt buộc thêm field `passage`** đặt trước `question` — đoạn văn ngắn (reading) hoặc đoạn hội thoại 2 lượt thoại có chỗ trống `＿＿＿` (dialogue). `jlpt_section` tương ứng là `読解` và `会話`.

### QUY TẮC TỐI QUAN TRỌNG: vị trí đáp án đúng

**`answer` LUÔN LUÔN bằng `0`** — đáp án đúng luôn được đặt ở vị trí đầu tiên trong mảng `options` (index 0), các phương án nhiễu xếp sau. Đây là quy ước cố định của toàn bộ dữ liệu hiện có (đã kiểm chứng: không có câu nào có `answer` khác 0 trong lesson-01/02/03). UI phía client tự lo việc xáo trộn thứ tự hiển thị. Không được đặt đáp án đúng ở vị trí khác 0.

## Phân bổ số lượng câu hỏi (cho 100 câu — co giãn tỉ lệ nếu số câu khác)

- 30 câu từ vựng (`type: vocabulary`)
- 35 câu ngữ pháp (`type: grammar`)
- 15 câu kanji (`type: kanji`)
- 10 câu đọc hiểu (`type: reading`, có `passage`)
- 10 câu hội thoại/tình huống (`type: dialogue`, có `passage`)

## 1. Từ vựng (語彙)

Các dạng câu hỏi cần xoay vòng:
- Chọn nghĩa đúng của từ (`subtype: meaning`)
- Chọn từ thích hợp điền vào câu (`subtype: fill-in-blank`)
- Chọn cách sử dụng đúng (`subtype: usage`)
- Phân biệt các từ dễ nhầm (`subtype: distinguish`)

Bao gồm danh từ, động từ, tính từ い/な, trạng từ, từ chỉ thời gian, từ chỉ địa điểm, từ sinh hoạt hàng ngày... Ưu tiên từ vựng thường gặp trong đề thi JLPT N5 thật.

## 2. Ngữ pháp (文法)

Chỉ dùng mẫu ngữ pháp N5 đã học đến bài hiện tại. Các dạng: điền trợ từ, dạng câu hỏi, chia động từ/tính từ, phủ định, sắp xếp câu, phát hiện lỗi sai, câu trả lời tương ứng...

## 3. Kanji (漢字)

Câu hỏi: chọn cách đọc đúng, chọn Kanji đúng, chọn từ chứa Kanji phù hợp. Chỉ dùng Kanji N5.

## 4. Đọc hiểu (読解)

Đoạn văn ngắn, ngôn ngữ đơn giản, đúng phạm vi kiến thức đã học. Chủ đề gợi ý: trường học, gia đình, văn phòng, nhà ga, nhà hàng, siêu thị, bệnh viện, ngân hàng, bưu điện, khách sạn, du lịch, mua sắm, thời tiết, cuối tuần, lễ hội, sở thích, phỏng vấn, gọi điện, hỏi đường, thuê nhà, đặt phòng.

## 5. Hội thoại/tình huống (会話)

Đoạn hội thoại ngắn 2 lượt thoại, có chỗ trống, hỏi câu trả lời/phản hồi tự nhiên nhất.

## Quy tắc đa dạng hoá câu hỏi

- Không tạo các câu chỉ khác nhau 1-2 từ so với câu khác trong cùng bài.
- Mỗi câu phải khác nhau ít nhất một trong: ngữ cảnh, nhân vật, địa điểm, thời gian, hành động, từ vựng trọng tâm, mẫu ngữ pháp trọng tâm.
- Không tạo quá 2 câu liên tiếp cùng chủ đề/ngữ cảnh (`topic`).
- Không lặp lại cùng một mẫu câu quá 2 lần trong cả bài.
- Đáp án nhiễu phải hợp lý, dễ gây nhầm giống đề thi thật (không nhiễu ngẫu nhiên, vô lý).

## Đánh giá độ quan trọng (`frequency`) và độ khó (`difficulty`)

Tỷ lệ mục tiêu cho cả bài:
- `frequency`: ~50% high, ~35% medium, ~15% low.
- `difficulty`: ~30% easy, ~50% normal, ~20% hard.

## Output

- Chỉ ghi ra file JSON hợp lệ tại `src/pages/learning/japan/exam/n5/lesson-{N}.json` (2 chữ số, ví dụ `lesson-04.json`), không kèm markdown/giải thích ngoài file.
- JSON phải parse được bằng `JSON.parse()`, không có dấu phẩy thừa cuối mảng/object.
- `id` đánh số liên tục từ 1 đến hết trong phạm vi bài đó.
- Sử dụng Unicode tiếng Nhật đầy đủ (không escape thành \uXXXX).
- Không dịch toàn bộ câu hỏi sang tiếng Việt, chỉ phần `explanation` viết tiếng Việt ngắn gọn.
- Sau khi tạo xong, đọc lại nhanh để kiểm tra: đủ số câu, đúng phân bổ type, mọi `answer` đều = 0, `reading`/`dialogue` đều có `passage`, không câu nào dùng kiến thức vượt quá bài N.
