function TodoItem(props: { text: string, completed: boolean }) {
    return (
      <li>
        <span>V</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
  }

  export { TodoItem }