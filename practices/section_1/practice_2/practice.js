function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
 let n=[];
 n.push(collection_b.sort());
 let res=[];
 let c=collection_b.toString();
 for (let i=0;i<collection_a.length;i++){
   if (c.indexOf(collection_a[i].toString())>-1){
     res.push(collection_a[i]);
   }
 }
 return res;
}


module.exports = collect_same_elements;
