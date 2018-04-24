'use strict';
var single_element = function(collection){
  var resultArray = [];
  var result_a = [];
  var num = 0;

  var result = 0;
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      result++;
      resultArray.push(collection[i]);
    }
  }
  let resultArray_a = Array.from(new Set(resultArray));
  for (var index in resultArray_a) {

    for (var i in resultArray) {
      if (resultArray_a[index] === resultArray[i]) {
        num++;
      }
    }
    if (num === 1) {
      result_a.push(resultArray_a[index]);
    }
    num = 0;
  }
  return result_a.sort((a,b) => a-b>0?1:-1);
};
module.exports = single_element;
