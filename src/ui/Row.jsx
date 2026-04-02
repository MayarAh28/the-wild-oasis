import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.6rem;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
