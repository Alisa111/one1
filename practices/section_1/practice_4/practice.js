function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let n=[];
  let m=object_b.value;
  let arr=[];
  for (let i=0;i<collection_a.length;i++){
    n.push(collection_a[i].key);
  }

  for(let i=0;i<n.length;i++){
    for(let j=0;j<m.length;j++){
      if(n[i]==m[j]){
        arr.push(n[i]);
      }
    }
  }
  return arr;
}

module.exports = collect_same_elements;
