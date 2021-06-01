import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
`;

const HeaderInner = styled.article`
  width: 1200px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavBlock = styled.nav`
  ul {
    display: flex;
    li {
      font-size: 18px;
      color: #fff;
      font-weight: bold;
      margin: 0 20px;
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`;

const UserBlock = styled.div`
  width: 50px;
  height: 50px;
  background: #0000ff;
`;

const Header = ({ user, onLogout }) => {
  return (
    <Wrapper>
      <HeaderInner>
        <NavBlock>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/posts">post</Link>
            </li>
          </ul>
        </NavBlock>
        {user ? (
          <div>
            <p>{user.name}</p>
            <button onClick={onLogout}>로그아웃</button>
          </div>
        ) : (
          <UserBlock />
        )}
      </HeaderInner>
    </Wrapper>
  );
};

export default Header;
