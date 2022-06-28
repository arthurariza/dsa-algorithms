function max_sub_array_of_size_k(k, array) {
  let sum = 0.0,
    start = 0,
    output = 0.0;

  for (let end = 0; end < array.length; end++) {
    sum += array[end];

    if (end >= k - 1) {
      if (sum > output) {
        output = sum;
      }
      sum -= array[start];
      start++;
    }
  }

  return output;
}

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])); // 7

// Time Complexity

// The time complexity of the above algorithm will be O(N).

// Space Complexity

// The algorithm runs in constant space O(1).
