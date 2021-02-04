import React from 'react';
import styled from 'styled-components';
import RegisterContainer from '../containers/RegisterContainer';

const Wrapper = styled.section`
  width: 100%;
`;

const MainInner = styled.article`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextBlock = styled.div``;

const AuthBlock = styled.div`
  width: 450px;
  z-index: 50;
  margin-top: -75px;
`;

const Main = () => {
  return (
    <Wrapper>
      <MainInner>
        <TextBlock></TextBlock>
        <AuthBlock>
          <RegisterContainer />
        </AuthBlock>
      </MainInner>
    </Wrapper>
  );
};

export default Main;
