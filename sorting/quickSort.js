/**
 * // if i < p ; s++ and replace each other
     i
  p
 [5, 9 ,7, 4 ,2, 3]
  s

             i   
  p
 [5, 4 ,7, 9 ,2, 3]
        s

                     i   
  p
 [5, 4 ,7, 9 ,2, 3]
        s


              i   
  p
 [5, 4 ,2, 9 ,7, 3]
        s


                 i   
  p
 [5, 4 ,2, 9 ,7, 3]
           s


                 i   
  p
 [5, 4 ,2, 3 ,7, 9]
           s



                 i   
  p
 [3, 4 ,2, 5 ,7, 9]   // replace s & p each other
           s

 */


/**
 *
 * [5,9,7,4,2,3]
    
          5                 // pick item called pivot
[4,2,3]            [9,7]
       4                9
[2,3]               [7]   [9]

    2
[2]    [3]


 */

function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function pivot(arr, pivotIndex = 0, endIndex = arr.length - 1) {

    let swapIndex = pivotIndex
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (arr[i] < arr[pivotIndex]) {
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    }

    swap(arr, pivotIndex, swapIndex)

    return swapIndex;

}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr;


}

console.log(quickSort([5, 9, 7, 4, 2, 3]))