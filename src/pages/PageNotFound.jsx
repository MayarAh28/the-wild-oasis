import styled from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  flex: 0 1 96rem;
  text-align: center;
  width: 100%;

  & h1 {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    padding: 4.8rem;
    & h1 {
      margin-bottom: 3.2rem;
    }
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <Button $size="large" onClick={moveBack}>
          &larr; Go back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
