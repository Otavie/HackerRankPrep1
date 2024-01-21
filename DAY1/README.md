# DAY 1 QUESTIONS

### TASK 1: Array Element Ratios

Given an array of integers, calculate the ratios of positive, negative, and zero elements. Print the decimal value of each fraction on a new line with 6 places after the decimal.

**Note:**

This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with an absolute error of up to 10<sup>-4</sup> are acceptable.

**Example:**

arr = [1, 1, 0, -1, -1]

There are n = 5 elements, where two are positive, two are negative, and one is zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000, and 1/5 = 0.200000. Results are printed as:

```
0.400000
0.400000
0.200000
```

**Function Description:**

Complete the `plusMinus` function in the editor below.

`plusMinus` has the following parameter(s):

- `int arr[n]`: an array of integers

**Print:**

Print the ratios of positive, negative, and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

**Input Format:**

The first line contains an integer, , the size of the array. The second line contains space-separated integers that describe .

**Constraints:**

```
0 < n <= 100
-100 <= arr[i] <= 100, where 0 <= i < n
```

**Output Format:**

Print the following 3 lines, each to 6 decimals:

1. Proportion of positive values
2. Proportion of negative values
3. Proportion of zeros

**Sample Input:**

```
STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
```

**Sample Output:**

```
0.500000
0.333333
0.166667
```

**Explanation:**

There are 2 positive numbers, 2 negative numbers, and 1 zero in the array. The proportions of occurrence are positive: 3/6 = 0.5, negative: 2/6 = 0.333333, and zeros: 1/6 = 0.166667.

---

### TASK 2 : Find Minimum and Maximum Sums

Given a list of five positive integers, your task is to find the minimum and maximum sums that can be calculated by adding exactly four out of the five integers. Afterward, print both the minimum and maximum sums as a single line containing two space-separated long integers.

### Example

Suppose you have an array, `arr = [1, 3, 5, 7, 9]`. The minimum sum is obtained by adding 1, 3, 5, and 7, resulting in 16. The maximum sum is obtained by adding 3, 5, 7, and 9, resulting in 24. Therefore, the function prints:

```
16 24
```

### Function Description

Complete the `miniMaxSum` function in the editor below.

`miniMaxSum` has the following parameter(s):

- `arr`: an array of 5 integers

### Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 out of 5 elements.

### Input Format

A single line of five space-separated integers.

### Constraints

1 <= arr[i] <= 10<sup>9</sup>

### Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32-bit integer.)

### Sample Input

```
1 2 3 4 5
```

### Sample Output

```
10 14
```

### Explanation

Consider the numbers 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

- Sum everything except 1, resulting in 2 + 3 + 4 + 5 = 14.
- Sum everything except 2, resulting in 1 + 3 + 4 + 5 = 13.
- Sum everything except 3, resulting in 1 + 2 + 4 + 5 = 12.
- Sum everything except 4, resulting in 1 + 2 + 3 + 5 = 11.
- Sum everything except 5, resulting in 1 + 2 + 3 + 4 = 10.
