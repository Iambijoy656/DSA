

// When to use array :

// When order is important
// When you need faster access (by index) or
// Adding or removal (at the end)

// When to use Object :

// When order is not important
// When you need faster access or removal





const obj = {
    name: 'Bijoy',
    email: 'bioy@gmail.com',
    // 'lemail': 'joy@gmail.com',

}

console.log(obj.name)
console.log(obj['name'])
// console.log(obj['lemail']) // invalid key must be access by []


for (let key in obj) {
    console.log(key);
    console.log(obj[key]);
}


//========================================================//



const obj2 = {
    name: 'karim',
    email: 'karim@gmail.com'
}

// accessing element O(1)
console.log(obj2.name)

// adding element O(1)
obj2.professtion = 'programmer'
console.log(obj2);


// delete element/ removal element O(1)
delete obj2.email;
console.log(obj2)



// searching O(1)
console.log('email' in obj);




// searching O(n) cz it is loop and check every element
for (let key in obj) {
    if (obj[key] === 'Bijoy') {
        console.log('yes')
    } else {
        console.log('no')

    }

    console.log(key);
    console.log(obj[key]);
}





// When to use array :

// When order is important
// When you need faster access (by index) or
// Adding or removal (at the end)

// When to use Object :

// When order is not important
// When you need faster access or removal
