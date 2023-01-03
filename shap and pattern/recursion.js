//iterative solution
// function countToZero(num) {
//     for (let i = num; i >= 0; i--) {
//         console.log(i);
//     }
// }
// countToZero(10)




//recursive solution
function countToZero(num = 10) {
    //base case 
    console.log(num);

    //must keep an eye on return
    if (num === 0) {
        return;
    }

    //argument must be changed in same case
    countToZero(num - 1)
}
countToZero(10)