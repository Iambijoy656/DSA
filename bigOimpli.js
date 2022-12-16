
// Big o Indicate:
// How number of operation increases/relates with input
// Best case describe(omega)
// Average case (theta)
// Worse case(BIG O)








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
// function addItems(n) {
//     console.log(n + n + n)
// }
// addItems(20)






// O(41) best case
// O(n) worse case
// function logAtLeast(n) {
//     for (let i = 0; i < Math.max(5, n); i++) {
//         console.log(i)
//     }
// }

// logAtLeast(3)





// O(1) best
// O(n)
// function logAtLeast5(n) {
//     for (let i = 0; i < Math.min(5, n); i++) {
//         console.log(i)
//     }
// }

// logAtLeast5(6)




// O(m+n)
function log(a, b) {
    for (let i = 0; i < a; i++) {
        console.log(a)
    }

    for (let k = 0; k < b; k++) {
        console.log(b);

    }
}
log(2, 5)



