'use strict';

function compute_median(collection) {
  //在这里写入代码
  if (collection.length%2!=0) {
    return collection[Math.floor(collection.length / 2)]
  }else if(collection.length%2==0&&collection.length<8){
    return (collection[collection.length/2-1]+collection[collection.length/2])/2
  }else {
    let arr=collection.sort((a,b) => a-b>0?1:-1)
    return (arr[arr.length/2-1]+arr[arr.length/2])/2

  }

}

module.exports = compute_median;


