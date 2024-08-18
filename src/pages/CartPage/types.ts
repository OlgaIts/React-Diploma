import { ReactNode } from 'react';

export interface TableCartItem {
  id: number;
  number: number;
  title: string;
  size: string;
  count: number;
  price: string;
  total: string;
  actions?: () => ReactNode;
}
