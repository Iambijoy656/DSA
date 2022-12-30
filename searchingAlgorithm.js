// Searching algorithm
// index of(1,-1)
//includes(true,false)

/**
 [1,3,5,7]


 */

//time complexity Big O(n)
//space Complexity O(1)
//linear search
function searchElmIndex(arr, searchElm) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === searchElm) {

            return i;
        }
    }
    return -1;

}

console.log(searchElmIndex([1, 3, 5, 7, 9], 10))