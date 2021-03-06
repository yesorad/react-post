import AuthForm from '@components/auth/authForm';
import * as authAPI from '@lib/api/auth';
import { changeField } from '@modules/auth';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import instance from '../lib/api/instance';
import { checkUser, initializeForm, setToken } from '../modules/auth';

const LoginContainer = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [userError, setUserError] = useState(false);

  const dispatch = useDispatch();
  const { form, user } = useSelector(({ auth }) => ({
    form: auth.login,
    accestToken: auth.accestToken,
    user: auth.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = useCallback((e) => {
    const { email, password } = form;
    e.preventDefault();

    if ([email, password].includes('')) {
      alert('빈 칸을 모두 입력하세요.');
      return;
    }

    const handleLogin = async () => {
      setLoading(true);
      try {
        const response = await authAPI.login({ email, password });

        let accestToken = response.data.access_token || null;

        if (accestToken) {
          instance.defaults.headers.common['Authorization'] = `Bearer ${accestToken}`;

          localStorage.setItem('accessToken', accestToken);

          dispatch(setToken(accestToken));
        }

        setSuccess(true);

        try {
          const check = await authAPI.check();
          dispatch(checkUser(check.data.user));
        } catch (e) {
          setUserError(e);
        }
      } catch (e) {
        setError(e);
        // setUserError(e);
      }
      setLoading(false);
    };
    handleLogin();
  }, []);

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      if (error.response.status === 400) {
        alert('아이디 또는 비밀번호를 확인하세요');
        return;
      }
      console.log(error);
      return;
    }
    if (success) {
      console.log('로그인 성공');
    }
    if (userError) {
      console.log('로그인 확인 실패');
    }
  }, [success, error, userError]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
        alert('로그인 했음!');
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default withRouter(LoginContainer);
