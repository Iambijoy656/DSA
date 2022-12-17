// Write a program that takes as input an array of numbers of length N and a number p (positions - p is greater than 0 
//     and less than N) and a number d (direction - either 0 for left or 1 for right). The objective is to return the array 

//     shifted by p positions in d direction.
//     Example: For an input array [1, 3, 2, 7, 4, 6] with p=3 and d=0
//     the expected result would be [7, 4, 6, 1, 3, 2] with the array shifted left by 3 positions.


const array = [1, 3, 2, 7, 4, 6];
const p = 3;
let d = 1;

if (d === 0) {
    // left rotation
    function rotLeft(array, p) {
        let rotatedArray = [];
        for (var i = p; i < array.length; i++) {
            rotatedArray.push(array[i]);
            console.log(rotatedArray)
        }
        for (var i = 0; i < p; i++) {
            rotatedArray.push(array[i])
            console.log(rotatedArray)
        }
        return rotatedArray;

    }
    const output = rotLeft(array, p)
    console.log(output)



} else if (d === 1) {
    // right rotation
    function rotRight(array, p) {

        const rotationIndex = array.length - p;
        console.log(rotationIndex);

        const leftSide = array.slice(0, rotationIndex)
        console.log(leftSide)
        const rightSide = array.slice(rotationIndex, array.length);

        const rotationArray = [...rightSide, ...leftSide];
        return rotationArray;

    }
    const output = rotRight(array, p)
    console.log(output)


}



// right rotation 
