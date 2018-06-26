import React from 'react'
import ReactDOM from 'react-dom'
import DOMPurify from 'dompurify'
import algoliasearch from 'algoliasearch'
import algoliasearchHelper from 'algoliasearch-helper'

import SearchHeader from './SearchHeader.jsx'
import SearchBody from './SearchBody.jsx'

const searchKey = require('./../../../config/adminKey.js').search;
const client = algoliasearch('EG4N8ARKP5', searchKey);
const helper = algoliasearchHelper(client, 'restaurants');

class RestaurantLocatorApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      searchQueryTime: 0
    }
    this.executeSearch = this.executeSearch.bind(this);
  }

  executeSearch(query){
    console.log(query);
    if(query.length){
      let cleanQuery = DOMPurify.sanitize(query);
      helper.setQuery(cleanQuery).search();
      helper.on('result', content => {
        this.setState({
          results: content.hits,
          searchQueryTime: content.processingTimeMS
        });
      });
    } else {
      this.setState({results: []});
    }
  }

  render(){
    return(
      <div className='restaurant-locator-app'>
        <section className='restaurant-locator-app__body'>
          <SearchHeader executeSearch={this.executeSearch}/>
          <SearchBody results={this.state.results} milliseconds={this.state.searchQueryTime}/>
        </section>
      </div>
    )
  }
}

ReactDOM.render(<RestaurantLocatorApp />, document.getElementById('restaurant-locator'));
