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

        if (char in hashMap) {
            // 3. check if the element exists on the object increment the existent count value
            hashMap[char] = hashMap[char] + 1
        } else {
            // 4. if not present assign the value 1
            hashMap[char] = 1
        }

    }

    console.log(hashMap);


    // 5.return
    return hashMap;





}
console.log(countCharacter('He llo'))