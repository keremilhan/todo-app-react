import styled from "styled-components";

export const StyledTodo = styled.div`
    background-color: #fff;
    color: #160011;
    width: 25rem;
    height: 3rem;
    font-weight: bold;
    font-size: 2rem;
    padding: 0 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    display: flex;
    align-items:center;



    &:hover button{
        transform: translateX(0%)
    }

    button {
        background: #fff;
        border: none;
        outline: none;
        font-size: 1.3rem;
        font-weight: bold;
        cursor: pointer;
        color: red;
        transform: translateX(calc(100% + 1rem));
        transition: transform 0.5s ease-in-out;
    }
`

export const TodoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: 100vw;
    margin-top: 4rem;
`
