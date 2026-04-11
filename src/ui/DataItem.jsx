/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
  white-space: nowrap;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }

  @media (max-width: 768px) {
    & svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

export default DataItem;
