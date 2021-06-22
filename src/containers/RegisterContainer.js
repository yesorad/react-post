import AuthForm from '@components/auth/authForm';
import * as authAPI from '@lib/api/auth';
import { withRouter } from 'react-router-dom';
import { changeField } from '@modules/auth';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeForm } from '../modules/auth';

const RegisterContainer = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = useCallback((e) => {
    const { email, password, name, password_confirmation } = form;
    e.preventDefault();

    if ([email, password, name, password_confirmation].includes('')) {
      alert('빈 칸을 모두 입력하세요.');
      return;
    }

    if (password.length <= 3) {
      alert('비밀번호는 4글자 이상 입력하세요.');
      return;
    }

    if (password !== password_confirmation) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const handleRegister = async () => {
      setLoading(true);
      try {
        await authAPI.register({
          email,
          name,
          password,
          password_confirmation,
        });

        setSuccess(true);
      } catch (e) {
        setError(e);
      }

      setLoading(false);
    };
    handleRegister();
  }, []);

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      if (error.response.status === 400) {
        alert('이미 사용중인 이메일 입니다.');
        return;
      }
      console.log(error);
      return;
    }
    if (success) {
      console.log('회원가입 성공');
      history.push('/login');
    }
  }, [success, error, history]);

  return (
    <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} loading={loading} error={error} />
  );
};

export default withRouter(RegisterContainer);
