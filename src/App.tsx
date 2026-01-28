import './App.css'
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos: { text: string; completed: boolean; }[] = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Mirar pelis', completed: false},
  { text: 'Siesta', completed: true},
  { text: 'Cortarme el pelo', completed: false},
];

function App() {
  return (
    <>
      <TodoCounter completed={15} total={16} />
      <TodoSearch />

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
