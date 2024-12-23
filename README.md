# JavaScript Falsy Value Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to handling falsy values in arithmetic operations.  The `foo` function aims to add two numbers, but it only explicitly checks for `null` values.  This leads to unexpected behavior when falsy values (e.g., 0, "", false) are passed as arguments.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file presents a corrected version that addresses the issue.

## Bug Description

The `foo` function does not correctly handle falsy values other than `null`.  It should ideally handle these values gracefully, either by explicitly checking for them or by using a more robust approach.

## Solution

The solution uses a more robust check to handle not only `null` values but also other falsy values, preventing unexpected results. The solution involves checking if either argument is either null or is not a number. If so then the function will return null. Otherwise, it will proceed with the addition and return the correct result.