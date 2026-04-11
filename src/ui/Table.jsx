/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  @media (max-width: 768px) {
    margin: 0 -1.5rem;
    padding: 0 1.5rem;
  }
`;

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
  min-width: 60rem;

  &::-webkit-scrollbar {
    height: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-grey-100);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-grey-300);
    border-radius: 4px;
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;

  @media (max-width: 768px) {
    column-gap: 0.8rem;
    padding: 0.8rem 1rem;
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);

  @media (max-width: 768px) {
    padding: 1.2rem 1.6rem;
    font-size: 1.2rem;
  }
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.6rem;
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;
const TableContext = createContext();
function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <TableContainer>
        <StyledTable role="table">{children}</StyledTable>
      </TableContainer>
    </TableContext.Provider>
  );
}
function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" $columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" $columns={columns}>
      {children}
    </StyledRow>
  );
}
function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
