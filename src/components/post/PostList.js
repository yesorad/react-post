import React from 'react';
import styled from 'styled-components';

const InnerWrap = styled.article`
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
`;

const BoardList = styled.ul`
  margin-top: 100px;
  background: #fff;
  box-sizing: border-box;
  padding: 0 20px;
  li {
    width: 100%;
    font-size: 14px;
    color: #ececec;
    height: 50px;
    border-bottom: 1px solid #1c1c1c;
    padding: 10px 0;
  }
`;

const ListTitle = styled.figure`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  strong {
    font-size: 16px;
    color: #000;
  }
  span {
    font-size: 12px;
    color: #9e9e9e;
  }
`;

const PostList = ({ items, loading, error }) => {
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!items) return null;
  console.log(items);
  return (
    <InnerWrap>
      <BoardList>
        {items.map((item) => (
          <li key={item.id}>
            <ListTitle>
              <strong>{item.title}</strong> <span>{item.created_at}</span>
            </ListTitle>
            {item.body.slice(0, 100)}
          </li>
        ))}
      </BoardList>
    </InnerWrap>
  );
};

export default PostList;
