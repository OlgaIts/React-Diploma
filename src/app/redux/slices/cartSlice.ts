import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../types/product';

export interface CartItem {
  product: Product;
  size?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },

    removeProduct(state, action: PayloadAction<number>) {
      state.items.filter((item) => item.product.id !== action.payload);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const CartReducer = cartSlice.reducer;
