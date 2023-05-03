import axios from 'axios';
import { UserType } from '../redux/features/authSlice';
const instance = axios.create({
  baseURL: 'https://a17339-cb01.f.d-f.pw',
});
export const api = {
  getCars() {
    return instance.get(`/cars/`);
  },
  checkLogin() {
    return instance.get(`/auth/me/`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    });
  },
  login(userData: { username: string; password: string }) {
    return instance.post(`/auth/login/`, userData);
  },
  registration(userData: Partial<UserType>) {
    return instance.post(`/auth/register/`, userData);
  },
};
