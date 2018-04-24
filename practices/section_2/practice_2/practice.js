function count_same_elements(collection) {
  //在这里写入代码
  let result = [];
  let data =[];
  let result_sum=[];

  collection.forEach((element, index) => {
    if (element.length > 1) {
      let temporaryArray = element.split("");
      let number = parseInt(element.replace(/[^0-9]/ig, ""));
      for(let i = 0;i<number-1;i++){
        result.push(temporaryArray[0])
      }
      collection.splice(index, 1,temporaryArray[0]);
      result_sum = collection.concat(result);

    }
  });
  result_sum.forEach(item => {
    if (!data.find(element => element.key === item))
      data.push({key: item, count: result_sum.filter(element => element === item).length});
  });

  return data;
}

module.exports = count_same_elements;
