'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let sumMin = 0
    let sumMax = 0
    let newArr = arr.sort()
    for (let i = 0; i < 4; i++) {
        sumMin += newArr[i]
    }
    for (let j = 0; j < 4; j++) {
        sumMax += newArr[j + 1]
    }
    console.log(sumMin, + " " + sumMax)
    // My Code Ends Here
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
