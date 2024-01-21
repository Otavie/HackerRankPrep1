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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // My Code Starts Here
    let posElement = [];
    let negElement = [];
    let zeroElement = [];
    arr.forEach((element) => {
        if (element > 0) {
            posElement.push(element)
        } else if (element < 0) {
            negElement.push(element)
        } else {
            zeroElement.push(element)
        }
    })
    console.log((posElement.length/arr.length).toFixed(6))
    console.log((negElement.length/arr.length).toFixed(6))
    console.log((zeroElement.length/arr.length).toFixed(6))
    // My Code Stopped Here
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
