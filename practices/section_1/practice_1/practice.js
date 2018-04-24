function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var arr=new Array();
  var k=0;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]){
        arr[k]=collection_a[i];
        k++;
      }
    }
  }
  return arr;
}

module.exports = collect_same_elements;
