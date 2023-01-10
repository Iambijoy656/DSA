// Sorting (Organizing Data in Order)
//ascending(smaller to larger)
//descending (larger to smaller)


// ### Primitive sort or quadratic sort
// Bubble sort
// selection sort
// insertion sort

// ### More efficient sort
// marge sort
//quick sort



/**
 [3, 1, 7, 5, 10, 6] -random
 [1, 3, 5, 6, 7, 10] - ascending
 [10, 7, 6, 5, 3, 1] - descending

 */

//Numeric Sort
function sort(arr) {
    console.log(arr.sort())
    /**
 By default, the sort() function sorts values as strings.This works well for strings ("Apple" comes before "Banana").However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".Because of this, the sort() method will produce incorrect result when sorting numbers.
     */

}
sort([3, 1, 7, 5, 10, 6])

function sortt(arr) {
    console.log(arr.sort())
    /**
 By default, the sort() function sorts values as strings.This works well for strings ("Apple" comes before "Banana").However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".Because of this, the sort() method will produce incorrect result when sorting numbers.
     */

}
sortt(["Banana", "Orange", "Apple", "Mango"])









//The Compare Function

/**
  When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.
 */

function sortArr(arr) {
    arr.sort((a, b) => {
        return a - b; //ascending
        // return b - a; //descending
    })

    console.log(arr);

}

sortArr([3, 1, 7, 5, 10, 6])


//Sort String
function sortStringg(arr) {
    arr.sort((a, b) => {
        return b.length - a.length; //ascending
        // return b - a; //descending
    })

    console.log(arr);

}

sortStringg(["Banana", "Orange", "Apple", "Mango"])




// Manually Sort
function sortString(arr) {
    arr.sort((a, b) => {
        const nameA = a.toLowerCase()
        const nameB = b.toLowerCase()
        if (nameA < nameB) {
            return 1;
        } else if (nameA > nameB) {
            return -1;
        } else {
            return 0;
        }
    })

    console.log(arr);

}

sortString(["Banana", "Orange", "Apple", "Mango"])