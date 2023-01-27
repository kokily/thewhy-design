import styled from 'styled-components';

const BrowserLead = styled.p`
  font-family: '윤고딕310', sans-serif;
  font-size: 22px;
  font-weight: 400;
  font-style: normal;
  color: #808080;
  word-break: keep-all;
  line-height: 1.4;
  margin: 0 0 20px;
  -webkit-animation-name: fadeInUpShorter;
  animation-name: fadeInUpShorter;
  animation-delay: 100ms;
  animation-duration: 1s;
`;

const BrowserNaming = styled.p`
  font-family: '윤고딕360', sans-serif;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  color: #777777;
`;

export { BrowserLead, BrowserNaming };
