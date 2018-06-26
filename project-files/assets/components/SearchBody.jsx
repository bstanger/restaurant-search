import React from 'react';
import SearchResult from './SearchResult.jsx'

class SearchBody extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section className='search-body'>
        {this.props.results.length === 0 ?
          <div className='search-body__empty'>No results</div>
        :
          <div className='search-body__not-empty'>
            <aside className='search-body__sidebar'>
              <div>Cuisines</div>
              <div>Ratings</div>
              <div>Payments</div>
            </aside>
            <div className='search-body__main'>
              <section className='search-body__results'>
                <h3 className='search-body__results-header'>
                  {this.props.results.length} results found in {this.props.milliseconds / 1000} seconds
                </h3>
                <div className='search-body__results-content'>
                  {this.props.results.map((result, idx) =>
                    <SearchResult result={result} key={idx}/>
                  )}
                </div>
                <button className='search-body__load'>Show More</button>
              </section>
            </div>
          </div>
        }
      </section>
    )
  }
}

export default SearchBody;
