import { ReactNode } from 'react';

export interface TableCartItem {
  number: string;
  title: string;
  size: string;
  quantity: number;
  price: string;
  total: string;
  actions?: () => ReactNode;
}
