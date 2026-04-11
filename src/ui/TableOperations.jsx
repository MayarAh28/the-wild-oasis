import styled from 'styled-components';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 480px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default TableOperations;
