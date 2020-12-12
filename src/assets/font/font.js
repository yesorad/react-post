import { css } from 'styled-components';
import NotoSansKrRegularWoff from '@font/notoSansKR/NotoSansKR-Regular.woff';
import NotoSansKrRegularWoff2 from '@font/notoSansKR/NotoSansKR-Regular.woff2';
import NotoSansKrRegularTtf from '@font/notoSansKR/NotoSansKR-Regular.ttf';
import NotoSansKrBoldWoff from '@font/notoSansKR/NotoSansKR-bold.woff';
import NotoSansKrBoldWoff2 from '@font/notoSansKR/NotoSansKR-bold.woff2';
import NotoSansKrBoldWTtf from '@font/notoSansKR/NotoSansKR-bold.ttf';

import RobotoRegularWoff from '@font/roboto/Roboto-Regular.woff';
import RobotoRegularWoff2 from '@font/roboto/Roboto-Regular.woff2';
import RobotoRegularTtf from '@font/roboto/Roboto-Regular.ttf';
import RobotoBoldWoff from '@font/roboto/Roboto-bold.woff';
import RobotoBoldWoff2 from '@font/roboto/Roboto-bold.woff2';
import RobotoBoldWTtf from '@font/roboto/Roboto-bold.ttf';

const font = css`
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: normal;
    src: local('Noto Sans KR'), url(${NotoSansKrRegularWoff2}) format('woff2'),
      url(${NotoSansKrRegularWoff}) format('woff'),
      url(${NotoSansKrRegularTtf}) format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: bold;
    src: local('Noto Sans KR'), url(${NotoSansKrBoldWoff2}) format('woff2'),
      url(${NotoSansKrBoldWoff}) format('woff'),
      url(${NotoSansKrBoldWTtf}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    src: local('Roboto'), url(${RobotoRegularWoff2}) format('woff2'),
      url(${RobotoRegularWoff}) format('woff'),
      url(${RobotoRegularTtf}) format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    src: local('Roboto'), url(${RobotoBoldWoff2}) format('woff2'),
      url(${RobotoBoldWoff}) format('woff'),
      url(${RobotoBoldWTtf}) format('truetype');
  }
`;

export default font;
