import React from 'react';
import './style.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
    <div className='search-wrap'>
        <form onSubmit={formSubmit}>
            <input
                type='text'
                placeholder='Search By Category'
                value={value}
                onChange={handleSearchKey}
            />
            {value && <span onClick={clearSearch}><i className="fa fa-times"></i></span>}
            <button className='btn rounded-circle'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
    </div>
);

export default SearchBar;
