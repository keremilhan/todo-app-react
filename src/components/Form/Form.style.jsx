import styled from "styled-components";

export const StyledForm = styled.form`
    margin-top: 5rem;
    display: flex;
    gap: 0.5rem;
`

export const StyledInput = styled.input`
    background-color: #fff;
    border: none;
    font-size: 1.5rem;
    padding: 10px 20px;
    font-weight: bold;

    &:focus{
        outline: none;
    }
`


export const StyledButton = styled.button`
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: #51424F;
    color: #fff;

`