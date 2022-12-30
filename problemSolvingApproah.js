/**
    1. sum 2 numbers and return the result
    2. addition of two numbers
    3. input - 10,15 output -25
    4. input 20,30 output -50
    5. input 20.33 , 40.5345 output - 60
 */

// function sum(num1, num2) {
//     return num1 + num2;
// }
// const result = sum(10, 20)
// console.log(result);





/**
    #count the character
    input - string 'Hello' output - {h:1, e:1, l:2 , o:1}
    input - string 'greet' output - {g:1, r:1, e:2 , t:1}
 */


// TIme complexity O(n)
// space complexity O(n)
function countCharacter(str) {

    // 1. Creating an object for tracking frequency of   element.
    const hashMap = {};
    // 2.looping the input and generalize the case and idf there is any space ignore it  
    const normalizeStr = str.toLowerCase();

    for (let i = 0; i < normalizeStr.length; i++) {
        const char = normalizeStr[i];
        console.log(char)
        if (char === ' ') {
            continue;
        }

        //use  ternary
        // char in hashMap ? hashMap[char] = hashMap[char] + 1 : hashMap[char] = 1

        //use advance javaScript
        hashMap[char] = (hashMap[char] || 0) + 1;



        // if (char in hashMap) {
        //     // 3. check if the element exists on the object increment the existent count value
        //     hashMap[char] = hashMap[char] + 1
        // } else {
        //     // 4. if not present assign the value 1
        //     hashMap[char] = 1
        // }

    }
    console.log(hashMap);

    // 5.return
    return hashMap;

}
console.log(countCharacter('He llo'))






// problem:

// check the element of first array 2nd array
// if the element exists 
//return true 
// otherwise false

// input -arr1-['a', 'b', 'c'] arr2-[1, 2, 3, 'z'] Output: False
// input -arr1-['a', 'b', 'c'] arr2-[1, 2, 3, 'c'] output: true


//time complexity O(n^2) /O(n*m)
//space complexity O(1)
// function isElementsExists(arr1, arr2) {
//     let exists = false;
//     for (const elm of arr1) {
//         if (arr2.includes(elm)) {
//             exists = true;
//             break;
//         }

//     }
//     return exists;
// }


// const arr1 = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3, 'z'];

// console.log(isElementsExists(arr1, arr2))



// efficiency way or optimize way

//time complexity O(n) 
//space complexity O(n)
function isElementsExists(arr1, arr2) {
    const frequencyCounter = {}
    let exists = false;
    for (const elm of arr1) {
        frequencyCounter[elm] = true
    }
    for (let elm of arr2) {
        console.log(elm)
        console.log(elm in frequencyCounter)
        if (elm in frequencyCounter) {
            return true;
        }
    }
    return exists;



}


const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3, 'z'];

console.log(isElementsExists(arr1, arr2))
