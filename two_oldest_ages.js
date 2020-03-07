/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items.

For example:

twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]
*/

// return the two oldest/oldest ages within the array of ages passed in.
const twoOldestAges = (ages) => {
  const arr = [];
  let oldest = ages[0];
  let youngest = ages[0];
  for(let i = 1; i < ages.length; i++){
    if(ages[i] > oldest) {
      oldest = ages[i];
    }
    if(ages[i] < youngest) {
      youngest = ages[i];
    }
  }
  arr.push(youngest, oldest);

  return arr;
}
