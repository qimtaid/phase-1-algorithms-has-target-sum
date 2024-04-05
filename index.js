function hasTargetSum(arr, target) {
  // Pseudocode:
  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // For each element, iterate through the remaining elements
    for (let j = i + 1; j < arr.length; j++) {
      // If the sum of the current element and any other element equals the target, return true
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  // If no pair of elements sums up to the target, return false
  return false;
}

// Test cases
console.log("Expecting: true");
console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([1, 2, 5], 4));
