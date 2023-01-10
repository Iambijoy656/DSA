//Builds up the sort by gradually creating a larger left half which is always sorted [3,4,5,11,2]

//time complexity o(n^2)
//space complexity o(n)
function insertionSort(arr) {
    let currentVal;
    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    console.log(arr)
    return arr;

}
console.log(insertionSort([5, 3, 18, 4, 5, 55, 11, 2]));