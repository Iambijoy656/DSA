const obj = {
    name: 'samim',
    age: 30,

}

console.log("name" in obj)

// for in loop 

for (let key in obj) {
    console.log(obj[key]);
}


const randomArr = [1, 24, 8, { name: 'Bijoy' }]

const extractedObj = randomArr[randomArr.length - 1];
console.log(extractedObj)


// nested loop

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
        console.log(i, j)
    }
    console.log(i);
}
// 9 times