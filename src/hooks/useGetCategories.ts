import { useEffect, useState } from 'react';
import { services } from '../api/services/service';
import { useErrorCatcher } from './useErrorCatcher';

export const useGetCategories = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const { error, errorCatcher } = useErrorCatcher();

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
