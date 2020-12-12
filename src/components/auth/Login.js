import React from 'react';
import styled from 'styled-components';

const Wrap = styled.section`
  max-width: 640px;
  display: flex;
  justify-content: center;
  margin: 100px auto 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px 0;
`;

const FormBlock = styled.form`
  width: 80%;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 20px;
  font-size: #333;
  & + & {
    margin-top: 10px;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  background: #2d8dee;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 20px;
`;

const Login = () => {
  return (
    <Wrap>
      <FormBlock>
        <StyledInput placeholder="아이디" />
        <StyledInput placeholder="비밀번호" />
        <StyledButton>확인</StyledButton>
      </FormBlock>
    </Wrap>
  );
};

export default Login;
