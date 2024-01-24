function diagonalDifference(arr) {
    let n = arr.length
    let leftDiagSum = 0
    let rightDiagSum = 0

    for (let i = 0; i < n; i++) {
        leftDiagSum = leftDiagSum + arr[i][i]
        rightDiagSum = rightDiagSum + arr[i][n - 1 - i]
    }
    return Math.abs(leftDiagSum - rightDiagSum)
}

let matrix = [
    [5, 4, 10],
    [1, 1, 20],
    [12, 4, 400]
]

console.log(diagonalDifference(matrix))