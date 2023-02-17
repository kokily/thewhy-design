import styled from 'styled-components';

const InfoContainer = styled.div`
  flex: 0 0 50%;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  animation-delay: 200ms;
  animation-duration: 1s;
`;

const InfoFlexBox = styled.div`
  margin-bottom: 4rem;
`;

const InfoTitle = styled.h4`
  margin: 0.5rem 0 0 0;
  font-size: 1.4em;
  font-weight: 400;
  line-height: 27px;
`;

const InfoContent = styled.ul`
  list-style: none;
  padding-left: 0;
  padding-right: 0;

  li {
    position: relative;
    padding-top: 5px;
    padding-left: 36px;
    margin-bottom: 13px;
    line-height: 24px;
    vertical-align: middle;
    svg {
      position: absolute;
      left: 0;
      border-width: 1px;
      width: 25px;
      height: 25px;
      text-align: center;
      padding: 4px;
      font-size: 0.8em;
      border-style: solid;
      border-radius: 50%;
      color: #0088cc;
    }
  }
`;

export { InfoContainer, InfoFlexBox, InfoTitle, InfoContent };
