import React, {useState} from 'react';

function SearchFilter({onSearch}){ //onSearch is a prop that is a callback function to handle the search functionality
    const[search, setSearch]= useState('');

    function handleSearchChange(event){
        const text = event.target.value;
        setSearch(text);
        onSearch(text);

    }
    return(
        <div>
            <label>Search Transactions
            <input className='search-text'
            type='text'
            placeholder='search by description'
            value={search}
            onChange={handleSearchChange}
            />
            </label>
        </div>
    )
        
    

}
export default SearchFilter;