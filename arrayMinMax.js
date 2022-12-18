// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
// Examples (Input -> Output)

// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

// my solution
var min = function(list){
    if(list.length === 1){
      return list[0];
    } else{
      let minNum = 0;
      for(let i = 0; i < list.length; i++){      
      if(list[i] <= minNum){
        minNum = list[i]
      }
    }
      return minNum
  }
}

var max = function(list){
    if(list.length === 1){
      return list[0];
    } else{
      let maxNum = 0;
      for(let i = 0; i < list.length; i++){      
      if(list[i] >= maxNum){
        maxNum = list[i]
      }
    }
      return maxNum
  }
}

//best solution
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);