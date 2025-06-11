function indexOn(arr, keySelector) {
    return arr.reduce((acc, obj) => {
        const key = keySelector(obj);
        const { [key]: _, ...rest } = obj; // Exclude the key from the value
        acc[key] = rest;
        return acc;
    }, {});
}

console.log(indexOn([{ id: 10, name: 'apple' }, { id: 20, name: 'orange' }], x => x.id)); 
// Output: { "10": { name: "apple" }, "20": { name: "orange" } }
