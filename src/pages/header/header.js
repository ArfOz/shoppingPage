import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from '../../styles/productStyle';

export const Header = () => {
  return (
    <StyledNavbar>
      <Link to="/">Home Page</Link>
      <Link to="/cart">Cart Page</Link>
      <Link to="/liked">Favorites Pages</Link>

    </StyledNavbar>
  )
}
