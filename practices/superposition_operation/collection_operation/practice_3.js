'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let n=[];
  for (let i=0;i<collection.length;i++){
    if (collection[i]%2!=0){
      n.push(collection[i]);
    }

  }
  let m=n.map(x=>x*3+5);
  function sum(i,j) {
    return i+j;
  }
  return m.reduce(sum);
}

module.exports = hybrid_operation_to_uneven;

