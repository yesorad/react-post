import React from 'react';
import styled from 'styled-components';

const InnerWrap = styled.article`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  padding-top: 100px;
  box-sizing: border-box;
`;

const TitieBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  h3 {
    font-size: 24px;
    color: #000;
  }
  span {
    font-size: 12px;
    color: #9e9e9e;
  }
`;

const TextBlock = styled.div`
  padding: 10px 0;
`;

function PostDetail({item}) {
  const {title, created_at, body, user} = item
  return (
    <InnerWrap>
      <TitieBlock>
        <h3>{title}</h3>
        <span>{created_at.substr(0, 10)}</span>
      </TitieBlock>
      <TextBlock>
        {body}
      </TextBlock>
    </InnerWrap>
  );
}

export default PostDetail;