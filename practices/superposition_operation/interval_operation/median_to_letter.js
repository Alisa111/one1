'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  let n;
  let str;
  if (collection.length%2!=0){
    n=collection[Math.ceil(collection.length/2)-1];
  }else {
    n=Math.ceil((collection[collection.length/2]+collection[collection.length/2-1])/2);
  }
  if(n/26<=1){
    str=String.fromCharCode(n+96);
  }else {
    if(n%26==0){
      str=String.fromCharCode(n%26+97)+z;
    }else {
      str=String.fromCharCode(Math.ceil(n/26+96)-1)+String.fromCharCode(n%26+96);
    }
  }
  return str;
}

module.exports = median_to_letter;
