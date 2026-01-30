import './TodoList.css';

function TodoList(props: { children: React.ReactNode }) {
    return (
      <ul className="TodoList">
        {props.children}
      </ul>
    );
}
export { TodoList }