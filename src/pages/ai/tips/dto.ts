export interface AiTipCategoryDto {
  id: string;
  name: string;
}

export interface AiTipDto {
  id: number;
  categoryId: string;
  title: string;
  content: string;
  // prompt mẫu để copy, có thể bỏ trống
  prompt?: string;
}
