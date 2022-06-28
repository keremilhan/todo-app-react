import styled from "styled-components";

export const StyledHeader = styled.header`
    background-image: linear-gradient(to left, #000000, #0f0006, #160011, #19011a, #170424, #170424, #170424, #170424, #19011a, #160011, #0f0006, #000000);
    -webkit-box-shadow: 0px 1px 27px 1px rgba(255,255,255,0.82); 
    box-shadow: 0px 1px 27px 1px rgba(255,255,255,0.82);
    min-height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SearchInput = styled.input`
    background-color: #fff;
    border: none;
    font-size: 1.2rem;
    padding: 15px 20px;
    font-weight: bold;

    &:focus{
        outline: none;
    }
`

export const StyledForm = styled.form`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const StyledButton = styled.button`
    background-color: #fff;
    border: none;
    font-size: 1.2rem;
    padding: 15px 20px;
    cursor: pointer;
`