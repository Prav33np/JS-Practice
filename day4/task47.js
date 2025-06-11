const cleanData = (data) =>
    Array.isArray(data)
        ? data.filter(Boolean).map(cleanData) // Clean arrays recursively
        : data && typeof data === 'object'
        ? Object.fromEntries(Object.entries(data).map(([k, v]) => [k, cleanData(v)]).filter(([_, v]) => Boolean(v))) // Clean objects recursively
        : data;

const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' }
};

console.log(cleanData(obj)); 
// Output: { c: true, e: 1, g: "a", h: [true, 1, "a"], i: { l: "a" } }
