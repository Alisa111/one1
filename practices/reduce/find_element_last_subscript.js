'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  let k
  for (let i=0;i<collection.length;i++){
    if(element==collection[i]){
      k=i
    }
  }
  return k
}

module.exports = calculate_elements_sum;
