// Searching algorithm
// index of(1,-1)
//includes(true,false)
/**
 [1,3,5,7]

 */
//time complexity Big O(n)
//space Complexity O(1)
//linear search
// function searchElmIndex(arr, searchElm) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === searchElm) {

//             return i;
//         }
//     }
//     return -1;

// }

// console.log(searchElmIndex([1, 3, 5, 7, 9], 10))


//Binary search / Divide and conquer
// array must be sorted
function searchElmIndex(arr, searchElm) {
    let low = 0;
    let hi = arr.length - 1;
    while (low <= hi) {
        let mid = Math.floor((low + hi) / 2)
        let midVal = arr[mid]
        if (midVal === searchElm) return mid;
        if (searchElm > midVal) {
            low = mid + 1
        } else {
            hi = mid - 1;
        }
    }
    return -1;

}

console.log(searchElmIndex([1, 3, 5, 7, 9, 10], 10))

/**
 * [1, 3, 5, 7, 9,10],  7     mid= 0+5/2 = 2.5=2
    l     m        h
 
   [1, 3, 5, 7, 9, 10],  7      mid =3+5/2 = 4
              l  m  h
               
   [1, 3, 5, 7, 9, 10],  7     mid = 3+3/2 = 3
              l  
              m  
              h
 */