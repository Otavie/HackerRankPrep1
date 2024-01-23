function calculateMedian(arr) {
    let newArr = arr.sort();
    let n = parseInt(newArr.length/2)
    console.log(newArr)
    console.log(n)
    if (newArr.length % 2 === 0) {
        // Test for Even Number of Elements in the Array
        return ((newArr[n - 1] + newArr[n])/2) 
    } else if (newArr.length % 2 !== 0) {
        // Test for Odd Number of Elements in the Array
        return newArr[n]
    }
}

console.log(calculateMedian([1, 20, 3, 5]))