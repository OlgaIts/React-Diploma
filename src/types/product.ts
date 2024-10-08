export interface Size {
  size: string;
  available: boolean;
}

export interface Product {
  id: number;
  category: number;
  title: string;
  images: string[];
  sku: string;
  manufacturer: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  heelSize?: string;
  price: number;
  oldPrice?: number;
  sizes: Size[];
}
