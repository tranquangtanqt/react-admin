export class CategoryDetailDto {
  id: number;
  categoryId: number;
  categoryName: string;
  name: string;
  order: number;

  constructor() {
    this.id = 0;
    this.order = 0;
    this.categoryId = 0;
    this.categoryName = '';
    this.name = '';
    this.order = 0;
  }
}
