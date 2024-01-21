'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let hour = parseInt(s.slice(0, 2), 10)
    const timeIndicator = s.slice(-2).toUpperCase()
    
    if (hour < 12 && timeIndicator === 'PM') {
        hour = hour + 12
        return (`${hour}:${s.slice(3,-2)}`)
    } else if (hour === 12 && timeIndicator === 'AM') {
        return (`00:${s.slice(2, -2)}`)
    } else if (hour === 12 && timeIndicator === 'PM') {
        return (`12:${s.slice(2, -2)}`)
    }
    // My Code Ends Here
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
