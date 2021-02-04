import React, { useCallback } from 'react';
import Header from '../components/Header';
import * as authAPI from '@lib/api/auth';
import instance from '../lib/api/instance';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../modules/auth';

const HeaderContainer = () => {
  const { user } = useSelector(({ auth }) => ({ user: auth.user }));
  const dispatch = useDispatch();

  const onLogout = useCallback(async () => {
    try {
      await authAPI.logout();
      dispatch(logout());
      instance.defaults.headers.common['Authorization'] = null;
    } catch (e) {
      console.log(e);
    }
  });
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
