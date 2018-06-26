import React from 'react';

const SearchHeader = ({executeSearch}) => {
  return (
    <header className='search-header'>
      <input
        className='search-header__input'
        placeholder='Search for Restaurants by Name, Cuisine, Location'
        onChange={(e) => executeSearch(e.currentTarget.value)}
      />
    </header>
  )
}

export default SearchHeader;
