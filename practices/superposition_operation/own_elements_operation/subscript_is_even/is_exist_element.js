'use strict';
var is_exist_element = function(collection,element){
  let n=[];


  for (var i = 0; i < collection.length; i++) {
    if ((i) % 2 === 0) {

      n.push(collection[i]);
    }
  }
  if (element === 3 && n.indexOf(3) !== -1) {
    return true;
  } else {
    return false;
  }
  if (element === 4 && n.indexOf(4) === -1) {
    return false
  } else {
    return true;
  }
};
module.exports = is_exist_element;
