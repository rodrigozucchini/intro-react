function TodoCounter({ total, completed }: { total: number, completed: number }) {
    return (
      <h1>
        Has completado {completed} de {total} TODOS
      </h1>
    );
}


export { TodoCounter }