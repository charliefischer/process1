
class Report {



  results = (str) =>{
    let countedResults = {}
    let arrayOfResults = str.split(',')
    let i;
    for (i = 0; i < arrayOfResults.length; i++){
      if(countedResults.hasOwnProperty(arrayOfResults[i])){
        countedResults[arrayOfResults[i]]++
      } else {
        countedResults[arrayOfResults[i]] = 1;
      }
      // console.log(`${arrayOfResults[i]}: ${countedResults[arrayOfResults[i]]}`)
    }
    console.log(i)
    console.log(arrayOfResults[i - 1])
    console.log(countedResults[arrayOfResults[i]])
    if(arrayOfResults.length == 1) {
      return `${arrayOfResults[i - 1]}: ${countedResults[arrayOfResults[i - 1]]}`
    } else {
      for(let n = 0; n < arrayOfResults.length; n++) {
        return `${arrayOfResults[n]}: ${countedResults[arrayOfResults[n]]}`
      }
    }

  }
}
