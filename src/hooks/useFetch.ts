import { useState, useEffect } from 'react';

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

export const useFetch = <T>(
  fetchFunction: () => Promise<T>,
  dependencies: any[] = []
): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error };
};
