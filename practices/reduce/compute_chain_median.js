'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let n = collection.split("->").sort((a,b) => a-b>0?1:-1);
  if (n.length%2!=0){
    return parseInt(n[Math.floor(n.length/2)]);
  }else{
    return (parseInt(n[n.length/2-1])+parseInt(n[n.length/2]))/2;
  }

}

module.exports = compute_chain_median;
