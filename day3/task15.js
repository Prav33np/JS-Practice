const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinals = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    let suffix = (index + 1) % 10 < 4 && (index + 1) % 10 > 0 ? ordinals[(index + 1) % 10] : ordinals[0];
    console.log(`${index + 1}${suffix} choice is ${color}.`);
});
