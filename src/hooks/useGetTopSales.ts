import { useEffect, useState } from 'react';
import { services } from '@api/services/service';
import { useErrorCatcher } from './useErrorCatcher';

export const useGetTopSales = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { errorCatcher } = useErrorCatcher();

  const getItems = async () => {
    try {
      setIsLoading(true);
      const data = await services.getTopSales();
      setList(data);
      setIsLoading(false);
    } catch (error) {
      errorCatcher(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);
  return { list, isLoading };
};
