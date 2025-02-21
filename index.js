function hasTargetSum(array, target) {
  // Write your algorithm here
  //given an array of numbers and a target number, see if any
  //two numbers in the array add up to the target
  for (let i = 0; i < array.length; i++) {
    const pair = target - array[i];
    //if the pair exists and if the pair is not the current element
    if (array.includes(pair) && array.indexOf(pair) !== i) {
      return true;
    }
  }
  return false;
}

function hasTargetSum2(array, target) {
  // alternate solution using binary search instead of includes
  array.sort();
  for (let i = 0; i < array.length; i++) {
    const pair = target - array[i];
    const pairIdx = binarySearch(array, pair);
    if (pairIdx >= 0 && pairIdx != i) {
      return true;
    }
  }
  return false;
}

//this binary search returns found index, or -1 if not found
function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const mid = (start + end) / 2;
    if (array[mid] > target) {
      end = mid - 1;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function hasTargetSum3(array, target) {
  // alternate solution using objects
  const seen = {};
  for (let i = 0; i < array.length; i++) {
    const pair = target - array[i];
    if (seen[pair]) {
      return true;
    } else {
      seen[array[i]] = true;
    }
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
  Solution 1: O(n^2) time, O(n) space
  Solution 2: O(nlogn) time, O(n^2) space? not sure
  Solution 3: O(n) time, O(n) space
*/

/* 
  Add your pseudocode here
  for each item in array
    see if the array includes the corresponding pair that would add up to target
    if yes, return true
  return false

  OR

  sort array in ascending order (nlogn)
  for each item in array (n)
    calculate pair
    while start<end (binary search, logn)
    if pair is greater than midpoint element, start after midpoint
    otherwise, end before midpoint

  nlogn + nlogn = 2(nlogn) = nlogn

  OR

  iterate through array (n)
  check object to see if the element's pair has already been seen
  if yes, return true
  if no, create key value pair for the element with true as the value
  return false if we get to the end without returning

  O(n)
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(`expect ${hasTargetSum([1, 5, 7, 9, 10], 11)} to be true`);
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
