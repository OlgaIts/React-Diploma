import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { services } from '@api/services/service';
import { useErrorCatcher } from './useErrorCatcher';

export const useGetProduct = (id?: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { error, errorCatcher } = useErrorCatcher();

  const getProduct = async (id: number) => {
    try {
      setIsLoading(true);
      const data = await services.getProduct(id);
      setProduct(data);
      setIsLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  };

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, []);

  return { product, isLoading, error };
};
