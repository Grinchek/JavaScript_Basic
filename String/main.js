let arr = [];
for (let i = 0; i < 100; i++) {
    let number = (Math.random() * 100)
    arr.push(Math.round(number));
}
function showArray(array) {
    for (let i = 0; i < array.length; i++) {
        let numerator = i + 1;
        console.log(`[${numerator}]=[${array[i]}]`);
        numerator++;
    }
}

showArray(arr);
console.log("--------------------------------------------");
let result = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 7 === 0) {
        console.log(`There is element, aliquot of 7 - ${arr[i]}, on ${i + 1} position`);
        result = 1;
        break;
    }
}
if (result === 0) {
    console.log("There are no elements - aliquot of 7");
}
function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                let tmpValue = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmpValue;
            }

        }

    }
}

let sortedArr = arr;
sortArray(sortedArr)

showArray(sortedArr);
console.log("--------------------------------------------");
for (let i = 0; i < arr.length; i++) {
    if (i >= arr.length / 2) {
        arr[i] = 0;
    }
}

showArray(arr);
console.log("--------------------------------------------");
let splisedArr = arr;
splisedArr.splice(0, 3);
showArray(splisedArr);
console.log("--------------------------------------------");
for (num of arr) {
    let exit = 0;
    for (num2 of arr) {
        if (num === num2) {
            console.log("Duplicate elements are found");
            console.log("--------------------------------------------");
            exit = 1;
            break;
        }

    }
    if (exit === 1) {
        break;
    }
}
let slicedArray = arr.slice(1, -1);
showArray(slicedArray);
console.log("--------------------------------------------");
let counter = 0;
for (num of arr) {
    if (num % 2 === 0 && num !== 0) {
        counter++;
    }
}
console.log(`There are ${counter} of pair numbers`)

