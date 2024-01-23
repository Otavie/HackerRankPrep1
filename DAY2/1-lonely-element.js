function uniqueElement(arr) {
    const elementCount = {}

    // Count Occurrence of Each Element
    for (const element of arr) {
        elementCount[element] = (elementCount[element] || 0) + 1
    }

    for (const element in elementCount) {
        if (elementCount[element] === 1) {
            console.log(element)
        }
    }
}

uniqueElement(["james", 'cake', 'beans', 'cake', 'james', 'cake'])