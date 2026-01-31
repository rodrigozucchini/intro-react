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
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>


      <CreateTodoButton />
    </>
  )
}


export default App
