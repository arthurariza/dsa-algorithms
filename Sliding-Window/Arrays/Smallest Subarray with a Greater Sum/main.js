function smallest_subarray_with_a_greater_sum(array, s) {
  let windowSum = 0.0,
    windowStart = 0,
    minLength = Infinity;

  for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];

    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= array[windowStart];
      windowStart++;
    }
  }

  return minLength;
}

console.log(smallest_subarray_with_a_greater_sum([2, 1, 5, 2, 3, 2], 7)); // 2
console.log(smallest_subarray_with_a_greater_sum([2, 1, 5, 2, 8], 7)); // 1
console.log(smallest_subarray_with_a_greater_sum([3, 4, 1, 1, 6], 8)); // 3

// Time Complexity

// The time complexity of the above algorithm will be O(N).

// Space Complexity

// The algorithm runs in constant space O(1).
