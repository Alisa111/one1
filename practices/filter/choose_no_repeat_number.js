'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  let arr=collection.filter(function (element,index,self) {
    return self.indexOf(element)===index;
  });
  return arr;


}

module.exports = choose_no_repeat_number;
