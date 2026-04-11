import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
  width: 100%;
  font-size: 1.4rem;

  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
    box-shadow: 0 0 0 2px var(--color-brand-100);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1rem;
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 1.4rem;
  }
`;

export default Input;
