import styled from 'styled-components';

const NoticesContainer = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse;
  border-spacing: 2px;
  th,
  td {
    vertical-align: bottom;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    border-color: rgba(0, 0, 0, 0.06);
  }
  tbody tr {
    transition: 0.12s;
    cursor: pointer;
    &:hover {
      background: #c8ebe3;
    }
  }
`;

export { NoticesContainer };
