'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  let n=[];
  for (let i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      n.push(collection[i]);
    }
  }
  return n.map(x=>String.fromCharCode(x+96));
}

module.exports = even_to_letter;
