import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (min-width: 769px) {
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 2rem 1.5rem 4rem;
  overflow: scroll;

  @media (min-width: 769px) {
    padding: 4rem 4.8rem 6.4rem;
  }

  @media (min-width: 1025px) {
    padding: 4rem 4.8rem 6.4rem;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (min-width: 769px) {
    padding: 0;
  }
`;

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <StyledAppLayout>
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
