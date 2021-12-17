const maximalSquare = (matrix) => {
  if (matrix.length === 0) return 0;

  let max = 0, i, b, dp = [],
    height = matrix.length, width = matrix[0].length;

  for (i = 0; i < height; i++){
    dp[i] = [];
  }

  for (i = 0; i < height; i++) {
    for (b = 0; b < width; b++) {
      if (matrix[i][b] === '1') {
        dp[i][b] = getSquare(i, b);
        max = Math.max(max, dp[i][b]);
      }
    }

  }
  return max * max;

  function getSquare(i, b) {
    if (!matrix[i - 1] || !matrix[i - 1][b - 1]) return 1;

    let index, width = dp[i - 1][b - 1];

    if (!width) return 1;

    for (index = 1; index <= width; index++) {
      if (!matrix[i - index] || matrix[i - index][b] !== '1' || matrix[i][b - index] !== '1')
        return index;
    }

    return width + 1;
  }
}
