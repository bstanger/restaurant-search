import React from 'react';

const SearchResult = ({result}) => {
  return (
    <div className='result'>
      <img className='result__img' src={result.image_url} />
      <div className='result__text'>
        <h3>{result.name}</h3>
        <p>
          <span>{result.stars_count}</span>
          <span>({result.reviews_count} reviews)</span>
        </p>
        <p>
          <span>{result.cuisine}</span> |
          <span>{result.neighborhood}</span> |
          <span>{result.price_range}</span>
        </p>
      </div>
    </div>
  )
}

export default SearchResult;
