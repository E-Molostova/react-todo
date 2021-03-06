import axios from 'axios';
import { store } from '../redux/store';
import { logoutUser } from '../redux/auth/auth-actions';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access')}`,
  },
});

axiosInstance.interceptors.request.use(async req => {
  req.headers.Authorization = `Bearer ${localStorage.getItem('access')}`;
  return req;
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error.response) {
      if (error.message === 'You are not authorized') {
        store.dispatch(logoutUser.request());
      }
      if (
        // error.message.name === 'JsonWebTokenError' ||
        error.response.status === 401
      ) {
        try {
          const refresh = localStorage.getItem('refresh');
          const response = await axiosInstance.post('/auth/refreshtoken', {
            refreshToken: refresh,
          });
          localStorage.setItem('access', response.data.accessToken);
          localStorage.setItem('refresh', response.data.refreshToken);
        } catch (error) {
          store.dispatch(logoutUser.request());
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  },
);
