import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { CartReducer } from './slices/cartSlice';
import { ProductsReducer } from './slices/productsSlice';

const rootReducer = combineReducers({
  cart: CartReducer,
  products: ProductsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
