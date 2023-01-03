//iterative solution
// function countToZero(num) {
//     for (let i = num; i >= 0; i--) {
//         console.log(i);
//     }
// }
// countToZero(10)




//recursive solution
// function countToZero(num = 10) {
//     //base case
//     console.log(num);

//     //must keep an eye on return
//     if (num === 0) {
//         return;
//     }

//     //argument must be changed in same case
//     countToZero(num - 1)
// }
// countToZero(10)


// function sumRange(num1, num2) {

//     let total = 0
//     for (let i = num2; i >= num1; i--) {
//         console.log(i)
//         total += i

//     }
//     console.log(total);

// }

// sumRange(1, 10)


/**
 * 5 +  sumRange(4)
 * 4 +  sumRange(3)
 * 3 +  sumRange(2)
 * 2 +  sumRange(1)
 * 1 +  sumRange(0)
 *          0
 */
// time complexity O(n)
//space complexity o(n)
function sumRange(num) {
    //base case
    if (num === 0) {
        return 0;
    }
    return num + sumRange(num - 1)
}

console.log(sumRange(5));


// factorial  //!0 =1
//iterative solution

// function factorial(num) {
//     let result = 1;
//     for (var i = num; i >= 1; i--) {
//         console.log(i)
//         result *= i
//     }
//     console.log(result)

// }
// factorial(5)


//recursive solution
function factorial(num) {
    //base case
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1)
}
console.log(factorial(5));



//iterative solution
//create a range
// function createRange(num1, num2) {
//     let rangeArr = []
//     for (let i = num1; i <= num2; i++) {
//         rangeArr.push(i)
//     }
//     console.log(rangeArr);
// }

// createRange(10, 20)


//recursive solution
//impure recursive solution
// function createRange(num1, num2) {
//     let rangeArr = [];
//     function helper(helperInput, targetNum = 20) {
//         rangeArr.push(helperInput)
//         //base case
//         if (helperInput === targetNum) {
//             return
//         }
//         helper(helperInput + 1, targetNum)

//     }
//     helper(num1, num2)
//     console.log(rangeArr)
// }

// createRange(10, 20)





//Pure Recursive solution
function createRange(num1, targetNum = 20, rangeArr = []) {
    //base case
    rangeArr = rangeArr.concat(num1)
    console.log(rangeArr, num1);
    if (num1 === targetNum) {
        return rangeArr;
    }
    return createRange(num1 + 1, targetNum, rangeArr)

}

console.log(createRange(10, 20)
)
