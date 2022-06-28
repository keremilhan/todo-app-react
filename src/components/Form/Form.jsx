import React from 'react'
import { StyledForm, StyledButton, StyledInput } from './Form.style'

const Form = ({name, setName, onSubmit}) => {
  return (
    <StyledForm onSubmit={onSubmit}>
        <StyledInput maxLength={22} value={name} onChange={(e) => setName(e.target.value)} placeholder='Add new todos...' type="text" />
        <StyledButton type='submit'>Add</StyledButton>
    </StyledForm>
  )
}

export default Form