'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let arr=[].concat.apply([],collection);

  let arr1=arr.filter(function(element,index,self){
    return self.indexOf(element)===index;
  });
  return arr1
}

module.exports = double_to_one;
