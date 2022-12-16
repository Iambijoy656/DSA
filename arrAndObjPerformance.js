/**
 * Array and object(Performance) - BIG(O)
 * How to approach a problem
 */

// When to use array :

// When order is important
// When you need faster access (by index) or
// Adding or removal (at the end)

// When to use Object :

// When order is not important
// When you need faster access or removal


const arr = ['a', 'b', 'c'];
console.log(arr.length);

// access by index O(1) [time complexity]
console.log(arr[arr.length - 1])




// adding item/element at the end of the array o(1)

// arr[arr.length] = 'd';
arr.push('d')
console.log(arr);
console.log(arr[arr.length - 1])


// removing element from end of the array
arr.pop()
console.log(arr);



// at the beginning of  array adding element O(n) because every index change
arr.unshift('z')
console.log(arr);



// at the beginning of  array removing element O(n) because every index change in the array
arr.shift('z')
console.log(arr);



// finding element from an array O(n) because check every elements
for (const ele of arr) {
    if (ele === 'c') {
        console.log(true)
    } else {
        console.log(false);
    }
}

// forEach , map , filter , reduce , slice , splice are  O(n) because those check every elements