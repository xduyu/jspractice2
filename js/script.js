// function name1(arrFirst) {
//     for (let i = 0; i < arrFirst; i++) {
//         arrFirst[i] ** 2
//         arrThird =
//     }
// }

// const arrThird = [];
// const arrSecond = [];
// const arrFirst = [1, 2, 3, 4, 5]
// name1()

// 1

// function squareNumbers(arr) {
//     const changeArr = arr.map((el) => el ** el)
//     return changeArr
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(squareNumbers(arr))


// 2

// function five(arr) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 5 == 0) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// const arr = [1, 2, 3, 4, 5, 10, 15, 20, 25]
// console.log(five(arr))


// 2


//done

// function filter(arr) {
//     const newArr = arr.filter((el) => el % 5 == 0)
//     return newArr
// }

// const arr = [1, 2, 3, 4, 5, 10, 15, 20, 25, 500]
// console.log(filter(arr))

// 3

// function filterWord(arr) {
//     const newFilterWord = [];

//     for (let i = 0; i <= arr.length; i++) {
//         newFilterWord.push(arr[i])
//     }

//     return newFilterWord
// }

// const arr = ["asdasdas", "asd", "as", "das", "ads", "sfd", "asdffsfd"]
// console.log(filterWord(arr))

// 3 for
function newArrWord(strArr) {
    const arrChange = [];
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > 3) {
            arrChange.push(strArr[i]);
        }
    }
    return arrChange
}

let strArr = ["asdasdas", "asd", "as", "das", "ads", "sfd", "asdffsfd"];
console.log(newArrWord(strArr))


// filter

// function strFilter(arr) {
//     const changeArr = arr.filter()
// }

// 4

//done

// let arr = [35, 232];
// let sum = 0;

// for (el of arr) {
//     sum += el
// }

// console.log(sum)

// 5


//done

// function strFilter(arr) {
//     const newStr = arr.map(arr => arr.length);
//     return newStr
// }

// const arr = ['hfdghdfg', "dfghdfhdf", "dfghdfg11111111111111111"]

// console.log(strFilter(arr))


// 6

// const strArr = ["asdfasdf", "asdfasdf", "sfsadfas"]
// const changeArr = strArr.map((el) => el.toUpperCase())
// console.log(changeArr)

// 7

// function more10(arr) {
//     const more10New = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 10) {
//             more10New.push(arr[i]);
//         }
//     }
//     return more10New
// }

// const arr = [423, 312, 9];
// console.log(more10(arr))


const fibArr = [];
let a = 0;
let b = 1;
fibArr.push(a, b)

for (let i = 2; i < 10; i++) {
    let c = a + b
    fibArr.push(c)
    a = b
    b = c
}
console.log(fibArr)