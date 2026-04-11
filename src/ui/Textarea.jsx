import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
  font-size: 1.4rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
    box-shadow: 0 0 0 2px var(--color-brand-100);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    height: 7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    height: 6rem;
  }
`;

export default Textarea;
