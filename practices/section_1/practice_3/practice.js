function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let collection_b=object_b.value
  let arr=[];
  for(let i=0;i<collection_a.length;i++){
    for(let j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]){
        arr.push(collection_a[i]);
      }
    }
  }
  return arr;

}

module.exports = collect_same_elements;
