function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  collection_a.forEach(item=>{
    object_b.value.forEach(data => {
      if(item.key === data){
        item.count-=1;
      }
    })
  })

  return collection_a;
}

module.exports = create_updated_collection;
