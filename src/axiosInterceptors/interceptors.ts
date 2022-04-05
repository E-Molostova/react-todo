import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';

const access = localStorage.getItem('access');

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { Authorization: `Bearer ${access}` },
});

interface User {
  exp: number;
}

axiosInstance.interceptors.request.use(async req => {
  if (!access) {
    const access = localStorage.getItem('access');
    req.headers.Authorization = `Bearer ${access}`;
  }
  const refresh = localStorage.getItem('refresh');
  const user: User = jwt_decode(access);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (!isExpired) return req;

  req.headers.Authorization = `Bearer ${refresh}`;
  const response = await axios.post('http://localhost:8080/auth/refreshtoken');
  console.log(response);
  localStorage.setItem('access', response.data.accessToken);
  localStorage.setItem('refresh', response.data.refreshToken);
  req.headers.Authorization = `Bearer ${response.data.accessToken}`;
  return req;
});
