import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) =>{
	
		return (
		 <div className="pa2">
		  <input 
		         className="pa3 neen" 
		         type="search" 
		         placeholder='         Find your cat?'
		         onChange={searchChange}
		     />
		 </div>
		);
	
}

export default SearchBox;