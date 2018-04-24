'use strict';
var even_asc_odd_desc = function(collection){
  let n=[];
  let m=[];
  let e=[];
  for (let i=0;i<collection.length;i++){
    if (collection[i]%2==0){
      n.push(collection[i]);
      n.sort((a,b)=>a-b>0?1:-1);
    }else {
      m.push(collection[i]);
      m.sort((a,b)=>a-b<0?1:-1)
    }
    e=n.concat(m)
  }
  return e;
};
module.exports = even_asc_odd_desc;
