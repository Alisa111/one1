'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let m =collection_a.concat(collection_b);
  let n =m.filter(function (element,index,self) {
    return self.indexOf(element)===index;
  });
  return n;
}

module.exports = get_union;

