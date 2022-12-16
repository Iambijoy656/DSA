// linear Big O - O(n)

// function log(n) {
//     let count = 0
//     for (let i = 0; i < n; i++) {
//         count++
//         console.log(i);

//     }
//     console.log(count)
// }
// log(12)




// 3^2 =9
// 4^2 =16
// Big(O) = O(n^2) / quadratic

// function log(n) {
//     let count = 0
//     for (let i = 0; i < n; i++) {

//         for (let j = 0; j < n; j++) {
//             console.log(i, j);
//             count++
//         }
//         console.log(i);

//     }
//     console.log(count)
// }
// log(3)



// O(n)+O(n) =O(2n) = O(n)
// function log(n) {
//     let count = 0;
//     for (var i = 0; i < n; i++) {
//         count++
//         console.log(i)
//     }
//     for (var i = 0; i < n; i++) {
//         count++
//         console.log(i)
//     }
//     console.log(count);

// }
// log(20)




// O(n*n*n) = O(n^3)
// function log(n) {
//     let count = 0
//     for (let i = 0; i < n; i++) {

//         for (let j = 0; j < n; j++) {
//             console.log(j);

//             for (let k = 0; k < n; k++) {
//                 console.log(i, j, k);

//             }
//             console.log(i);

//         }

//     }
// }
// log(3)








// O(n*^n + n) = O(n^2)
// function log(n) {
//     let count = 0
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             console.log(i, j);

//         }

//     }

//     for (let k = 0; k < n; k++) {
//         console.log(k);

//     }
// }
// log(2)




// Big(O) = O(1) /Constant
function addItems(n) {
    console.log(n + n + n)
}
addItems(20)