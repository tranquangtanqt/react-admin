export type AiLinkPricing = 'free' | 'freemium' | 'paid';

export interface AiLinkCategoryDto {
  id: string;
  name: string;
}

export interface AiLinkDto {
  id: number;
  categoryId: string;
  name: string;
  url: string;
  description: string;
  pricing: AiLinkPricing;
}
