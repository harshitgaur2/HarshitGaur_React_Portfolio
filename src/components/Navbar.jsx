import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <Logo>Harshit Gaur</Logo>
      <MenuIcon onClick={handleMenuToggle}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </MenuIcon>
      <NavLinks isMenuOpen={isMenuOpen}>
        <StyledLink to="/" onClick={() => setMenuOpen(false)}>Home</StyledLink>
        <StyledLink to="/work-history" onClick={() => setMenuOpen(false)}>Work History</StyledLink>
        <StyledLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</StyledLink>
        <StyledLink to="/sessions" onClick={() => setMenuOpen(false)}>Sessions</StyledLink>
        <StyledLink to="/cv" onClick={() => setMenuOpen(false)}>Download CV</StyledLink>
      </NavLinks>
      <Toggle onClick={toggleTheme}>
        {isDarkMode ? <FiSun /> : <FiMoon />}
      </Toggle>
    </Nav>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  position: relative;
  z-index: 10; /* Ensures the navbar stays above the content */
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--text-color);
  z-index: 11;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    background-color: var(--bg-secondary-color);
    border-top: 1px solid var(--text-secondary-color);
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateY(0)' : 'translateY(-200%)')};
    transition: transform 0.3s ease;
    z-index: 9; /* Adjust z-index to make sure menu is above other content */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Toggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--text-color);
  z-index: 10;
  margin-left: 2rem; /* Add margin to create space between the hamburger and toggle button */
  
  @media (max-width: 768px) {
    position: absolute;
    right: 5rem;
  }
`;

