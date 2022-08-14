import type { User } from 'src/types';

import { useEffect } from 'react';
import useSWR from 'swr';

import { axiosGetFetcher } from './axiosFetcher';
import { useAuth } from './useAuth';

export const useUser = () => {
  const user = useAuth();
  const { data, error, mutate } = useSWR<User>(
    'users/me/',
    user ? (url) => axiosGetFetcher(url, user?.uid) : null,
    {}
  );

  useEffect(() => {
    mutate();
  }, [user, mutate]);

  const refetch = async () => {
    await mutate();
  };

  return { user: data, error, isLoading: typeof data === 'undefined', refetch };
};
