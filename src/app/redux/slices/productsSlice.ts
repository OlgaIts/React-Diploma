import { createSlice } from '@reduxjs/toolkit';
import { Product } from 'types/product';

interface ProductsState {
  products: Product[];
  isLoading: boolean;
  error: any;
  categoryId: string;
  showMoreButton: boolean;
  isLoadingMore: boolean;
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: null,
  categoryId: '11',
  showMoreButton: true,
  isLoadingMore: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    productsRequested: (state) => {
      state.isLoading = true;
    },
    moreProductsRequested: (state) => {
      state.isLoadingMore = true;
    },
    // dispatch(setProducts(products)) -> action.payload = products
    setProducts: (state, action) => {
      state.showMoreButton = action.payload.length < 6 ? false : true;
      state.products = action.payload;
      state.isLoading = false;
    },
    loadMoreProducts: (state, action) => {
      state.showMoreButton = action.payload.length < 6 ? false : true;
      state.products = state.products.concat(action.payload);
      state.isLoadingMore = false;
    },
    productsRequestFailed: (state) => {
      state.error;
      state.isLoading = false;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});
export const {
  productsRequested,
  moreProductsRequested,
  setProducts,
  loadMoreProducts,
  productsRequestFailed,
  setCategoryId,
} = productsSlice.actions;

export const ProductsReducer = productsSlice.reducer;
