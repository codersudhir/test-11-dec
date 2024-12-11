// Example 1
const name = "Amolya Sharma";

const lowercasename = name.toLowerCase();
console.log(lowercasename);

const arr = [];
for (let i = 0; i < lowercasename.length; i++) {
    if (!arr.some((item) => item.startsWith(lowercasename[i] + "-"))) {
        let count = 0;
        for (let j = 0; j < lowercasename.length; j++) {
            if (lowercasename[i] === lowercasename[j]) {
                count++;
            }
        }
        arr.push(lowercasename[i] + "-" + count);
    }
}

console.log(arr);

// Example 2
const name2 = "Chinmay Kulkarni";

const arr2 = [];
for (let i = 0; i < name2.length; i++) {
    if (
        !arr2.some((item) => item.startsWith(name2[i] + "-")) &&
        name2[i] !== " "
    ) {
        let count2 = 0;
        for (let j = 0; j < name2.length; j++) {
            if (name2[i] === name2[j]) {
                count2++;
            }
        }
        arr2.push(name2[i] + "-" + count2);
    }
}

console.log(arr2);
