import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
  border-spacing: 2px;
  th,
  td {
    vertical-align: bottom;
    padding: 0.75em;
    border-top: 1px solid #dee2e6;
    border-color: rgba(0, 0, 0, 0.06);
  }
  tbody tr {
    transition: 0.12s;
    cursor: pointer;
    &:hover {
      background: #aee2d7;
    }
  }
`;

export { Table };
