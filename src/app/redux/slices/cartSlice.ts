import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'types/product';

export interface CartItem {
  product: Product;
  size: string;
  count: number;
}

export interface RemoveData {
  id: number;
  size: string;
}

type OrderStatus = 'success' | 'error' | 'pending';
interface CartState {
  items: CartItem[];
  orderStatus: OrderStatus;
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
  orderStatus: 'pending',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<CartItem>) {
      const findProductIndex = state.items.findIndex(
        ({ product, size }) =>
          product.id === action.payload.product.id &&
          size === action.payload.size,
      );
      let findProduct = state.items[findProductIndex];
      !findProduct
        ? state.items.push(action.payload)
        : (state.items[findProductIndex] = {
            ...findProduct,
            count: findProduct.count + action.payload.count,
          });

      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    removeProduct(state, action: PayloadAction<RemoveData>) {
      state.items = state.items.filter(({ product, size }) => {
        return (
          product.id !== action.payload.id ||
          (product.id === action.payload.id && size !== action.payload.size)
        );
      });

      localStorage.setItem('cart', JSON.stringify(state.items));
    },

    clearCart(state) {
      localStorage.removeItem('cart');
      state.items = [];
    },

    setOrderStatus(state, action: PayloadAction<OrderStatus>) {
      state.orderStatus = action.payload;
    },
  },
});

export const { addProduct, removeProduct, clearCart, setOrderStatus } =
  cartSlice.actions;
export const CartReducer = cartSlice.reducer;
