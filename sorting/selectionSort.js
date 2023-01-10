
// Smallest element will move to the left(priority)


//time complexity O(n^2)
//space complexity o(1)
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j

            }
        }

        if (i !== lowest) {
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }

    console.log(arr)
}

selectionSort([3, 1, 7, 5, 10, 6])
