function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return null; 
  }
  return a + b; 
}

console.log(foo(null, 1)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(1, 2));    // Output: 3
console.log(foo(0, 1));   // Output: 1
console.log(foo(1, ""));  // Output: null