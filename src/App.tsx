import './App.css'
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import React from 'react';

const defaultTodos: { text: string; completed: boolean; }[] = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Mirar pelis', completed: false},
  { text: 'Siesta', completed: true},
  { text: 'Cortarme el pelo', completed: false},
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo=> todo.completed === true).length;
  const totalTodos = defaultTodos.length;

  const searchedTodos = todos.filter(todo => 
    {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  
const completeTodo = (text: string) =>  {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(todo => todo.text == text);
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  setTodos(newTodos);
}

const deleteTodo = (text: string) =>  {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(todo => todo.text == text);
  newTodos.splice(todoIndex, 1);
  setTodos(newTodos);
}


  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem  
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=> deleteTodo(todo.text)}
          />
        ))}
      </TodoList>


      <CreateTodoButton />
    </>
  )
}


export default App
