import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
}) {

    return (
      <input 
        className="TodoSearch" 
        placeholder="Buscar..."
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        ></input>
    );
}

export { TodoSearch }