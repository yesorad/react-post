import React from 'react';
import styled, { keyframes } from 'styled-components';

const WaveAni = keyframes`
    from {background-position-x: 0;}
    to {background-position-x: 1000px;}
`;

const WaveAniReverse = keyframes`
    from {background-position-x: 1000px;}
    to {background-position-x: 0;}
`;

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #3586ff;
  overflow: hidden;
`;

const WaterWave = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  background: url('src/assets/images/wave.png');
  background-size: 1000px 100px;
  animation-fill-mode: linear;
  animation-iteration-count: infinite;
  &.wave01 {
    z-index: 10;
    opacity: 1;
    bottom: 0;
    animation-name: ${WaveAni};
    animation-delay: 0s;
    animation-duration: 30s;
  }
  &.wave02 {
    z-index: 8;
    opacity: 0.5;
    bottom: 10px;
    animation-name: ${WaveAniReverse};
    animation-delay: -5s;
    animation-duration: 15s;
  }
  &.wave03 {
    z-index: 9;
    opacity: 0.2;
    animation-name: ${WaveAni};
    animation-delay: -2s;
    bottom: 15px;
    animation-duration: 30s;
  }
  &.wave04 {
    z-index: 7;
    opacity: 0.7;
    bottom: 20px;
    animation-name: ${WaveAniReverse};
    animation-delay: -5s;
    animation-duration: 5s;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      {children}
      <WaterWave className="wave01" />
      <WaterWave className="wave02" />
      <WaterWave className="wave03" />
      <WaterWave className="wave04" />
    </LayoutWrapper>
  );
};

export default Layout;
