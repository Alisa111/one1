'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  return collection_a.reduce(element=>collection_b.includes(element)?false:true)
}

module.exports = compare_collections;


