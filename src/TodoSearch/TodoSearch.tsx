import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
const [searchValue, setSearchValue] = React.useState('');

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