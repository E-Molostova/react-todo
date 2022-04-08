import axios from 'axios';

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
      if (
        error.message.name === 'JsonWebTokenError' ||
        error.response.status === 401
      ) {
        const refresh = localStorage.getItem('refresh');
        const response = await axiosInstance.post(
          'http://localhost:8080/auth/refreshtoken',
          {
            refreshToken: refresh,
          },
        );
        localStorage.setItem('access', response.data.accessToken);
        localStorage.setItem('refresh', response.data.refreshToken);
      }
    }
    return Promise.reject(error);
  },
);
