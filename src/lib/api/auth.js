import instance from '@lib/api/instance';

// 회원가입
export const register = ({ email, name, password, password_confirmation }) =>
  instance.post('/auth/register', {
    email,
    name,
    password,
    password_confirmation,
  });

// 로그인
export const login = ({ email, password }) =>
  instance.post('/auth/login', { email, password });

// 로그인 상태 확인
export const check = () => instance.get('/auth/me');

// 로그아웃
export const logout = () => instance.delete('/auth/logout');
