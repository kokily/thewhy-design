import styled from 'styled-components';

const HomeLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeLinksTopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const HomeLinksTitle = styled.h2`
  font-family: '윤고딕360', sans-serif;
  font-size: 31px;
  font-weight: 300;
  line-height: 42px;
  color: #463884;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const HomeLinksLead = styled.p`
  word-break: keep-all;
  font-family: '윤고딕310';
  font-size: 24px;
  font-weight: 300;
  letter-spacing: -0.05rem;
  color: #808080;
  margin: 0;
`;

export {
  HomeLinksContainer,
  HomeLinksTopContent,
  HomeLinksTitle,
  HomeLinksLead,
};
