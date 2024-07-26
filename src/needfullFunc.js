function findRepeatedItems(arr) {
    let seen = new Set();
    let repeated = new Set();

    arr.forEach(item => {
        if (seen.has(item)) {
            repeated.add(item);
        } else {
            seen.add(item);
        }
    });

    return Array.from(repeated);
}