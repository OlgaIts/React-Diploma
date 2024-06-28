import {ReactNode} from "react";

export interface CartItem {
  number: string;
  title: string;
  size: string;
  quantity: number;
  price: string;
  total: string;
  actions?: () => ReactNode;
}
