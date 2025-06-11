function longestCommonStart(arr) {
    let prefix = arr[0]; // Start with the first word

    for (let word of arr) {
        while (!word.startsWith(prefix)) {
            prefix = prefix.slice(0, -1); // Remove last letter until it matches
        }
    }

    return prefix;
}

console.log(longestCommonStart(['go', 'google'])); 
