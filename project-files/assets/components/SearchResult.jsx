import React from 'react';
import StarRatings from 'react-star-ratings';

const SearchResult = ({result}) => {
  return (
    <div className='result'>
      <img className='result__img' src={result.image_url} />
      <div className='result__text'>
        <h3>{result.name}</h3>
        <div className='result__rating-info'>
          <span className='result__rating'>{result.stars_count}</span>
          <span className='result__star-rating'>
            <StarRatings
              rating={parseFloat(result.stars_count)}
              numberOfStars={5}
              starRatedColor={'#ffbf00'}
              starEmptyColor={'#f1f1f1'}
              starDimension={'15px'}
              starSpacing={'1px'}
            />
          </span>
          <span>({result.reviews_count} reviews)</span>
        </div>
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
