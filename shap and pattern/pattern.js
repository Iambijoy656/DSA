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