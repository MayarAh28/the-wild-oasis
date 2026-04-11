import PropTypes from "prop-types";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: var(--backdrop-color);
  z-index: 99;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 26rem;
    height: 100vh;
    z-index: 100;
    transform: ${(props) => (props.$isOpen ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 30rem;
  }
`;

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <StyledSidebar $isOpen={isOpen}>
        <Logo />
        <MainNav />
      </StyledSidebar>
    </>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Sidebar;
