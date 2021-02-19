
class Report {



  results = (str) =>{
    let countedResults = {}
    let arrayOfResults = str.split(',')
    let uniqueArr = arrayOfResults.filter(onlyUnique)
    let answer = ''
    let i;
    for (i = 0; i < arrayOfResults.length; i++){
      if(countedResults.hasOwnProperty(arrayOfResults[i])){
        countedResults[arrayOfResults[i]]++
      } else {
        countedResults[arrayOfResults[i]] = 1;
      }
   }

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    if(uniqueArr.length == 1) {
      return `${arrayOfResults[i - 1]}: ${countedResults[arrayOfResults[i - 1]]}`
    } else {
      answer = `${uniqueArr[0]}: ${countedResults[uniqueArr[0]]}`
      for(let n = 1; n < uniqueArr.length; n++) {
        answer += '\n' + `${uniqueArr[n]}: ${countedResults[uniqueArr[n]]}`
      }
      return answer
    }
  }
}
