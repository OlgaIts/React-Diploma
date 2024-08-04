import { useEffect, useState } from 'react';
import { services } from '../api/services/service';

export const useGetCategories = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [error, setError] = useState(null);

  const errorCatcher = (error: any) => {
    const { message } = error.response.data;
    setError(message);
  };

  const getCategories = async () => {
    try {
      const data = await services.getCategories();
      setCategoriesList(data);
    } catch (error) {
      errorCatcher(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categoriesList, error };
};
