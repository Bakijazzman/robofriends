import React from "react";

const Search= ({searchField,searchChange})=>{
return(
    <div>
        <input 
        type='search' 
        placeholder='search robots' 
        className='bg-lightest-blue pa3 ba b--green'
        onChange={searchChange}
        />
    </div>
)
}
export default Search;