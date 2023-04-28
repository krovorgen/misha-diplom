import axios from 'axios';
import { UserType } from '../redux/features/authSlice';
const instance = axios.create({
  baseURL: 'https://a17226-5e72.f.d-f.pw',
});
export const api = {
  getCars() {
    return instance.get(`/cars/`);
  },
  checkLogin() {
    return instance.get(`/auth/me`);
  },
  login(userData: { login: string; password: string }) {
    return instance.post(`/auth/login`, userData);
  },
  registration(userData: Partial<UserType>) {
    return instance.post(`/auth/registration`, userData);
  },
};
