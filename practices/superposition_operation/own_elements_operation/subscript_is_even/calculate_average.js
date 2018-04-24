'use strict';
var calculate_average = function(collection){
  let n=collection.filter(index=>(index+1)%2!=0);
  function avg(i,j) {
    return i+j;
  }
  return n.reduce(avg)/(collection.length/2);
};
module.exports = calculate_average;
