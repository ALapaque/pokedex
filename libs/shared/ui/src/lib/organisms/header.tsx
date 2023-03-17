/* eslint-disable-next-line */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SearchInput from '../atoms/search-input';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  padding: 10px 20px;
  backdrop-filter: blur(15px);
  z-index: 2;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
`;

export function Header() {
  return (
    <StyledHeader>
      <NavLink to="/">Home</NavLink>

      <SearchInput />
    </StyledHeader>
  );
}

export default Header;
