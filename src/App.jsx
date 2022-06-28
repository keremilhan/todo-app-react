import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Wrapper from './components/Wrapper/Wrapper';
import { useReducer,useState } from 'react';
import Todo from './components/Todo/Todo';
import { TodoList } from './components/Todo/Todo.style';

export const ACTIONS = {
  ADD_TODO : "add-todo",
  TOGGLE_TODO : "toggle-todo",
  DELETE_TODO : "delete-todo",
}

const reducer = (todos, action) => {
  switch (action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id)
    default:
      return todos
  }
}

const newTodo = (name) =>{
  return {id: Date.now(), name: name, complete: false}
}

function App() {

  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name} })
    setName("")
  } 
  console.log(todos);
  return (
    <div>
      <Header todoName={todos.map((todo)=> todo.name)}/>
      <Wrapper>
        <Form name={name} setName={setName} onSubmit={handleSubmit}/>
      </Wrapper>
      <TodoList>
          {
            todos.map((todo)=>{
              return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
            })
          }
      </TodoList>
    </div>
  );
}

export default App;
