function removeDuplicates(arr) {
    return arr.map(item => typeof item === 'string' ? item.toLowerCase() : item)
              .filter((item, index, self) => self.indexOf(item) === index);
}

let arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log(removeDuplicates(arr));

