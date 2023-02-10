import styled from 'styled-components';

const SearchContainer = styled.div`
  svg {
    position: relative;
    float: right;
    width: 25px;
    height: 25px;
    top: -32px;
    right: 10px;
    cursor: pointer;
    &:hover {
      color: #463883;
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 0.9rem;
  border: 1px solid #d0cfce;
  border-radius: 25px;
  outline: none;
  transition: 0.12s all;
  &:focus {
    border: 1px solid #008abf;
    color: #008abf;
    &::-webkit-input-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &::-moz-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &:-ms-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
  }
`;

export { SearchContainer, SearchInput };
