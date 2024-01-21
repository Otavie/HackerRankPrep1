# DAY 1 QUESTIONS

### Array Element Ratios

**Task:**

Given an array of integers, calculate the ratios of positive, negative, and zero elements. Print the decimal value of each fraction on a new line with 6 places after the decimal.

**Note:**

This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with an absolute error of up to  are acceptable.

**Example:**

Consider an array with 6 elements, where two are positive, two are negative, and one is zero. Their ratios are , , and . Results are printed as:

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

The first line contains an integer, , the size of the array. The second line contains  space-separated integers that describe .

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

There are 2 positive numbers, 2 negative numbers, and 1 zero in the array. The proportions of occurrence are positive: 0.5, negative: 0.333333, and zeros: 0.166667.