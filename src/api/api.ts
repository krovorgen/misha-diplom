import axios from 'axios';
import { UserType } from '../redux/features/authSlice';

const instance = axios.create({
  baseURL: 'https://a17479-38e3.s.d-f.pw',
});
const instanceAuth = axios.create({
  baseURL: 'https://a17479-38e3.s.d-f.pw',
  headers: {
    Authorization: `token ${localStorage.getItem('token')}`,
  },
});
instanceAuth.interceptors.request.use((config) => {
  config.headers.Authorization = `token ${localStorage.getItem('token')}`;
  return config;
});
export const api = {
  getCars() {
    return instance.get(`/cars/`);
  },
  getOrders(id: number) {
    return instanceAuth.get(`/orders/${id}/`);
  },
  createOrder(carId: number) {
    return instanceAuth.post(`/orders/create/${carId}/`, {});
  },
  checkLogin() {
    return instanceAuth.get(`/auth/me/`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    });
  },
  login(userData: { username: string; password: string }) {
    return instance.post(`/auth/login/`, {
      ...userData,
    });
  },
  registration(userData: Partial<UserType>) {
    return instance.post(`/auth/register/`, userData);
  },
};
