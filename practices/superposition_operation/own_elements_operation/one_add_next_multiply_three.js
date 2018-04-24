'use strict';
function one_add_next_multiply_three(collection){
  for (let i = 0; i < collection.length; i++) {
    collection[i] = (collection[i + 1] + collection[i]) * 3;
  }
  collection.pop();
  return collection;
}
module.exports = one_add_next_multiply_three;
