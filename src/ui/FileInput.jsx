import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);
  width: 100%;

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
    white-space: nowrap;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }

  @media (max-width: 768px) {
    &::file-selector-button {
      padding: 0.6rem 1rem;
      margin-right: 0.8rem;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    &::file-selector-button {
      padding: 0.5rem 0.8rem;
      margin-right: 0.5rem;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export default FileInput;
