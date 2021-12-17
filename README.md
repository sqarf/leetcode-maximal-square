# Leetcode maximal square (Problem 221, javascript solution)

Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

## Example 1: ##

> Input: matrix = [\
> &ensp;["1","0","1","0","0"],\
> &ensp;["1","0","1","1","1"],\
> &ensp;["1","1","1","1","1"],\
> &ensp;["1","0","0","1","0"]\
> ]\
> Output: 4

## Example 2: ##

> Input: matrix = [\
> &ensp;["0","1"],\
> &ensp;["1","0"]\
> ]\
> Output: 1

## Example 3: ##

>Input: matrix = [["0"]]\
>Output: 0

### Constraints: ###

1) m == matrix.length
2) n == matrix[i].length
3) 1 <= m, n <= 300
4) matrix[i][j] is '0' or '1'.
