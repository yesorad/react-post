import React from 'react';
import styled from 'styled-components';

const CommentBlock = styled.section`
  width: 100%;
  border-top: 1px solid #000;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
`;

const CommentTitle = styled.strong`
  font-size: 16px;
  color: #000;
  display: block;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const CommentBody = styled.p`
  font-size: 14px;
  color: #000;
  margin-top: 10px;
`;

function CommentList() {
  return (
    <CommentBlock>
      <CommentTitle>
        댓글 작성자
      </CommentTitle>
      <CommentBody>
        댓글내용입니다.
      </CommentBody>      
    </CommentBlock>
  );
}

export default CommentList;