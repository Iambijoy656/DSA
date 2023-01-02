/*
 * Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # characters. Make sure the step spaces on right hand side

Example:
steps(2)
'# '
"##"

steps(3)
'# '
"## "
"###"

steps(4)
'# '
"## "
"### "
"####"
 */


// function steps(n) {
//     //for row
//     for (let row = 0; row < n; row++) {
//         let step = ''
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 step += '#';
//             } else {
//                 step += '';
//             }
//         }
//         console.log(step)
//     }

// }
// steps(3)





// Pyramid pattern

/**
 * write a function that accepts a positive number N.
 * The function should console log a pyramid shape with N levels using the # character . make sure the pyramid has spaces on both the left and right hand side
 
----Example------
pyramid (1)
   "#"
 pyramid (2)
   " # "
   "###"

pyramid (3)
   " # "
  " ### "
  "#####"

 */


function pyramid(n) {
    let midPoint = Math.floor((2 * n - 1) / 2)
    for (let row = 0; row < n; row++) {
        let level = ''
        for (let column = 0; column < 2 * n - 1; column++) {
            // console.log(column)
            if (midPoint - row <= column && midPoint + row >= column) {
                level += "#"

            } else {
                level += " "
            }


        }
        console.log(level);

    }

}
pyramid(5)