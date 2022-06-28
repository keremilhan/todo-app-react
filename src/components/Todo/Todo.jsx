import React from 'react'
import { StyledTodo} from './Todo.style'
import { ACTIONS } from '../../App'

const Todo = ({todo, dispatch}) => {
  return (
    <>
        <StyledTodo onClick={()=> dispatch({type: ACTIONS.TOGGLE_TODO, payload: { id : todo.id }})} style={{textDecoration: todo.complete ?"line-through" : "none", borderLeft: todo.complete ? "10px solid green" : "10px solid red"}}>
            {todo.name}
            <button onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload : {id: todo.id}})}><i className="fa-solid fa-x"></i></button> 
        </StyledTodo>


    </>

  )
}

export default Todo