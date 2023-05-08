import React, {useState} from 'react';

function SearchFilter({onSearch}){
    const[search, setSearch]= useState('');

    function handleSearchChange(event){
        const text = event.target.value;
        setSearch(text);
        onSearch(text);

    }
    return(
        <div>
            <input 
            type='text'
            placeholder='search by description'
            value={search}
            onChange={handleSearchChange}
            />
        </div>
    )
        
    

}
export default SearchFilter;