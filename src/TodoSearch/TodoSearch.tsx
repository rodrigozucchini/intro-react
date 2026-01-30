import './TodoSearch.css';

function TodoSearch() {
    return (
      <input 
        className="TodoSearch" 
        placeholder="Buscar..."
        onChange={(event) => {
          console.log('escribiste en el todo search')
          console.log(event.target.value);
        }}
        ></input>
    );
}

export { TodoSearch }