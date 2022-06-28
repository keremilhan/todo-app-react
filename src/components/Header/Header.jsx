import React, {useState} from 'react'
import { StyledHeader, SearchInput, StyledForm, StyledButton } from './Header.style'


const Header = () => {
  
  return (
    <StyledHeader>
        <StyledForm>
            <SearchInput placeholder='Search (Coming Soon...)' type="search"  />
            <StyledButton><i className="fas fa-search"></i></StyledButton>
        </StyledForm>
    </StyledHeader>
  )
}

export default Header