function longest_substring_with_k_distinct_characters(string, k) {
  let windowStart = 0,
    maxLength = 0;
  let frequency = {};

  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    frequency[string[windowEnd]] = frequency[string[windowEnd]]++ || 1;

    while (Object.keys(frequency).length > k) {
      frequency[string[windowStart]] = frequency[string[windowStart]] - 1;

      if (frequency[string[windowStart]] == 0) {
        delete frequency[string[windowStart]];
      }

      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(longest_substring_with_k_distinct_characters('araaci', 2)); // 4
console.log(longest_substring_with_k_distinct_characters('araaci', 1)); // 2
console.log(longest_substring_with_k_distinct_characters('cbbebi', 3)); // 5

// Time Complexity

// The above algorithm’s time complexity will be O(N), where N is the number of characters in the input string. The outer for loop runs for all characters, and the inner while loop processes each character only once; therefore, the time complexity of the algorithm will be O(N+N), which is asymptotically equivalent to O(N).

// Space Complexity

// The algorithm’s space complexity is O(K), as we will be storing a maximum of K+1 characters in the HashMap.

// Insight

// Using an Object(HashMap) to store char frequency
