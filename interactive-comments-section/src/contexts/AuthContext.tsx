import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { Credentials } from '@/src/types';
import * as yup from 'yup';
import api from '@/src/axios';

type Status = 'unauthenticated' | 'authenticated' | 'loading';
export type User = { email: string; username: string; emailVerified?: boolean; image: any };

export const AuthContext = createContext<{
  status: Status;
  user: User;
  signin: (credentials: Credentials) => void;
  logout: () => void;
} | null>(null);

const userSchema = yup.object({
  email: yup.string().email().required()
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>('loading');
  const [user, setUser] = useState({ email: '', username: '', image: '' });

  const logout = useCallback(async () => {
    deleteCookie('next-token');
    setStatus('unauthenticated');
    localStorage.removeItem('user');
  }, []);

  const getUserInfo = useCallback(async () => {
    const token = getCookie('next-token');
    if (!token) return await logout();

    const init = (user: User) => {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      setStatus('authenticated');
    };

    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson) as User;
      if (userSchema.isValidSync(user)) return init(user);
    }

    api
      .get<{ user: User }>('/user', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(resp => {
        init(resp.data.user);
      })
      .catch(async error => {
        if (error.response.status === 401) {
          await logout();
        }
      });
  }, [logout]);

  useEffect(() => {
    getUserInfo().then();
    if (typeof window === 'undefined') return;
    window.addEventListener('focus', getUserInfo);
    return () => {
      window.removeEventListener('focus', getUserInfo);
    };
  }, [getUserInfo]);

  const signin = useCallback(
    async (credentials: Credentials) => {
      await api.post<User>('/auth/signin', credentials);
      await router.reload();
    },
    [router]
  );

  return (
    <AuthContext.Provider
      value={{
        status,
        user,
        signin,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
