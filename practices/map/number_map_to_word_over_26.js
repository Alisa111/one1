'use strict';
var number_map_to_word_over_26 = function(collection){
  var result =[];

  collection.forEach(item => {
    let word ="";
    let number = item / 26;
    let num = item %26;
    for(let i =1;i<number;i++){
      word+=String.fromCharCode(97);
    }
    if(num!==0)
      word+=String.fromCharCode(num+96);
    result.push(word)
  })

  return result ;
};

module.exports = number_map_to_word_over_26;
