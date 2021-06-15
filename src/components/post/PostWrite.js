import React from 'react';
import styled from 'styled-components';

const InnerWrap = styled.article`
  max-width: 1200px;
  margin: 100px auto 0;
  height: 100vh;
  padding-top: 100px;
  box-sizing: border-box;
`;

const FormBlock = styled.form`
  width: 100%;
`;

const Title = styled.input`
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  resize: none;
`;

function PostWrite({ form, onChange }) {
  return (
    <InnerWrap>
      <FormBlock>
        <Title
          name="title"
          onChange={onChange}
          value={form.title}
          placeholder="제목을 입려하세요"        
        />
        <TextArea
          name="body"
          onChange={onChange}
          value={form.body}
          placeholder="내용 입려하세요"        
        />
      </FormBlock>
    </InnerWrap>
  );
}

export default PostWrite;