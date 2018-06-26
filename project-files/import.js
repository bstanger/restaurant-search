const algoliasearch = require('algoliasearch');
const adminKey = require('./../config/adminKey.js').admin;
const chunk = require('lodash.chunk');


// Create index
const client = algoliasearch('EG4N8ARKP5', adminKey);
const index = client.initIndex('restaurants');


// Combine records
const mainJson = require('./../project-files/resources/dataset/restaurants_list.json');
const csvToJson = require('csvtojson/v2');
const csvFile = './project-files/resources/dataset/restaurants_info.csv';
async function combineRecords(){
  console.log('Combining records...');
  const extraJsonArray = await csvToJson({delimiter: ";"}).fromFile(csvFile);
  return mergeData(extraJsonArray, mainJson, 'objectID', (extra, main) => {
    return {
      objectID: main.objectID,
      name: main.name,
      address: main.address,
      area: main.area,
      city: main.city,
      state: main.state,
      country: main.country,
      postal_code: main.postal_code,
      _geoloc: main._geoloc,
      image_url: main.image_url,
      payment_options: main.payment_options,
      stars_count: extra.stars_count,
      reviews_count: extra.reviews_count,
      cuisine: extra.food_type,
      neighborhood: extra.neighborhood,
      price_range: extra.price_range
    }
  });
}
function mergeData(extraInfo, mainInfo, key, filterData) {
  const extraLookupById = {};
  const filteredMerged = [];
  extraInfo.forEach((extraRow) => {
    extraLookupById[extraRow[key]] = extraRow;
  })
  mainInfo.forEach((mainRow) => {
    let extraRow = extraLookupById[mainRow[key]];
    filteredMerged.push(filterData(extraRow, mainRow));
  })
  return filteredMerged;
};


// Add combined records to index
async function addToIndex(){
  const records = await combineRecords();
  console.log('Adding records to index...');
  const chunks = chunk(records, 1000);
  chunks.map(function(batch) {
    return index.addObjects(batch);
  });
}
addToIndex();

// Customize index attributes
index.setSettings({
  searchableAttributes: [
    'name',
    'address',
    'area',
    'city',
    'state',
    'country',
    'postal_code',
    'cuisine',
    'neighborhood'
  ]
  // customRanking: ['desc(popularity)'],
});
