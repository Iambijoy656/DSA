/**
 * Move the largest element to end
 * 
 */


function swapVal(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]]

}
//[10,1,2]
//time complexity O(n^2) best-o(n)
//space complexity O(n)
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let swap = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            console.log(array, array[j], array[j + 1]);
            if (array[j] > array[j + 1]) {

                swapVal(array, j, j + 1)
                //swap
                // let temp = array[j]
                // array[j] = array[j + 1]
                // array[j + 1] = temp
                // swap = true
            }

        }
        if (!swap) {
            break
        }

    }
    return array;

}
console.log(bubbleSort([3, 1, 7, 5, 10, 6]))