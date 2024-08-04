import { useState } from 'react';

export const useErrorCatcher = () => {
  const [error, setError] = useState(null);

  const errorCatcher = (error: any) => {
    const { message } = error.response.data;
    setError(message);
  };

  return { error, errorCatcher };
};
