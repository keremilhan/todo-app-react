import React from 'react'
import { StyledWrapper } from './Wrapper.style'

const Wrapper = ({children}) => {
  return (
    <StyledWrapper>
        {children}
    </StyledWrapper>
  )
}

export default Wrapper