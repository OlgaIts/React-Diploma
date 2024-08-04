import { useEffect, useState } from 'react';
import { useErrorCatcher } from './useErrorCatcher';
import { services } from '../api/services/service';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import {
  productsRequested,
  setCategoryId,
  setProducts,
  updateProducts,
} from '../app/redux/slices/productsSlice';
import { useSearchParams } from 'react-router-dom';

const offset = 6;

export const useProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const prevCategoryId = useAppSelector(({ products }) => products.categoryId);
  const { errorCatcher } = useErrorCatcher();

  const getProducts = async (urlSearchParams: URLSearchParams) => {
    try {
      const offset = urlSearchParams.get('offset');
      const search = urlSearchParams?.get('search');
      const categoryId = urlSearchParams?.get('categoryId');

      dispatch(productsRequested());
      const result = await services.getAllProducts(offset, categoryId, search);
      dispatch(setProducts(result));
      dispatch(setCategoryId(categoryId));
    } catch (error) {
      errorCatcher(error);
    }
  };

  const searchProducts = async (inputValue: string) => {
    try {
      const categoryId = searchParams?.get('categoryId');
      dispatch(productsRequested());
      const result = await services.getAllProducts(
        undefined,
        categoryId,
        inputValue,
      );
      dispatch(setProducts(result));
    } catch (error) {
      errorCatcher(error);
    }
  };

  const loadMoreProducts = async () => {
    try {
      const categoryId = searchParams?.get('categoryId');
      const search = searchParams.get('search');
      const currentOffset = Number(searchParams.get('offset'));
      dispatch(productsRequested());
      const result = await services.getAllProducts(
        (currentOffset + offset).toString(),
        categoryId,
        search,
      );
      dispatch(updateProducts(result));
      searchParams.set('offset', (currentOffset + offset).toString());
      setSearchParams(searchParams);
    } catch (error) {
      errorCatcher(error);
    }
  };

  useEffect(() => {
    const currentCategoryId = searchParams?.get('categoryId')!;
    if (currentCategoryId !== prevCategoryId) {
      getProducts(searchParams);
    }
  }, [searchParams]);

  useEffect(() => {
    searchParams.delete('offset');
    getProducts(searchParams);
    setSearchParams(searchParams);
  }, []);

  return { loadMoreProducts, searchProducts };
};
