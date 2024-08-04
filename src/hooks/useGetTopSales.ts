import { useEffect, useState } from 'react';
import { services } from '../api/services/service';

export const useGetTopSales = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const errorCatcher = (error: any) => {
    const { message } = error.response.data;
    setError(message);
  };

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
  return { list, isLoading, error };
};
