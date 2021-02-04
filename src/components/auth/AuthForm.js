import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormInner = styled.article`
  flex: 1;
  max-width: 450px;
  background: #fff;
  margin: 0 auto;
  padding: 30px 50px 80px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    content: '';
    background: #f2f2f2;
    border-radius: 50% 0 0 0;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  color: #4986fc;
  display: block;
`;

const FormBlock = styled.form``;

const InputBlock = styled.div`
  position: relative;
  margin-top: 30px;
`;

const InputTitle = styled.figure`
  font-size: 15px;
  background: #fff;
  padding: 0 4px;
  color: #ccc;
  position: absolute;
  top: -5px;
  left: 20px;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #ddd;
  padding-left: 25px;
  box-sizing: border-box;
`;

const ButtonStyled = styled.button`
  width: 100%;
  height: 40px;
  background: #2d8dee;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 20px;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;

const AuthForm = ({ type, form, onChange, onSubmit, loading, error }) => {
  const authType = {
    login: 'Login',
    register: 'Register',
  };

  const title = authType[type];

  return (
    <Wrapper>
      <FormInner>
        <Title>{title}</Title>
        <FormBlock onSubmit={onSubmit}>
          <InputBlock>
            <InputTitle>Email</InputTitle>
            <InputStyled
              autoComplte="email"
              name="email"
              onChange={onChange}
              value={form.email}
              placeholder="이메일"
            />
          </InputBlock>
          {type === 'register' && (
            <InputBlock>
              <InputTitle>Name</InputTitle>
              <InputStyled
                autoComplte="username"
                name="name"
                onChange={onChange}
                value={form.name}
                placeholder="이름"
              />
            </InputBlock>
          )}
          <InputBlock>
            <InputTitle>Password</InputTitle>
            <InputStyled
              autoComplete="new-password"
              name="password"
              onChange={onChange}
              value={form.password}
              type="password"
              placeholder="비밀번호"
            />
          </InputBlock>
          {type === 'register' && (
            <InputBlock>
              <InputTitle>Confirm Password</InputTitle>
              <InputStyled
                autoComplete="new-password"
                name="password_confirmation"
                onChange={onChange}
                value={form.password_confirmation}
                type="password"
                placeholder="비밀번호 확인"
              />
            </InputBlock>
          )}
          <ButtonStyled type="submit">확인</ButtonStyled>
        </FormBlock>
      </FormInner>
    </Wrapper>
  );
};

export default AuthForm;
