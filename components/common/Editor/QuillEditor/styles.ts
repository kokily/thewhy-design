import styled from 'styled-components';
import { media } from '../../../../styles';

const EditorContainer = styled.div`
  top: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 650px;
  font-size: 1.125rem;
  margin-bottom: 5rem;
  scroll-behavior: auto;
  blockquote {
    border-left: 4px solid #1b3bf5;
    font-size: 1.4rem;
    padding: 0.6rem 0 0.6rem 1.3rem;
    color: black;
    margin-left: 0;
    margin-right: 0;
    p {
      margin: 0;
    }
  }
  p {
    font-size: 1.215rem;
    em {
      color: #fff;
      background: #1fb498;
      padding: 0 0.5rem 0.1rem 0.5rem;
      font-style: normal;
      border-radius: 4px;
    }
    strong {
      color: #1e63c4;
      border-radius: 6px;
      padding-left: 0.4rem;
      padding-right: 0.4rem;
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }
  }
  pre {
    font-size: 1.215rem;
    padding: 0.5rem 0.8rem;
    background: none;
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }
  .ql-editor {
    overflow-y: scroll;
    height: 650px;
  }
  .ql-toolbar {
    border: none;
    border-bottom: 1px solid #777;
  }
  .ql-container {
    flex: 1 1 0%;
    min-height: 0px;
    height: auto;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 650px !important;
  }
  .ql-video {
    display: block;
    width: 100vw;
    height: 100vh;
    max-width: 650px;
    max-height: 480px;
    ${media.medium} {
      width: 100%;
      height: 100%;
    }
  }
`;

export { EditorContainer };
