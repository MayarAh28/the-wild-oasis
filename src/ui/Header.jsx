import PropTypes from "prop-types";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { HiOutlineBars3 } from "react-icons/hi2";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 1.2rem 2rem;
    justify-content: space-between;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-grey-600);
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

function Header({ onMenuClick }) {
  return (
    <StyledHeader>
      <MenuButton onClick={onMenuClick}>
        <HiOutlineBars3 />
      </MenuButton>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

Header.propTypes = {
  onMenuClick: PropTypes.func,
};

export default Header;
