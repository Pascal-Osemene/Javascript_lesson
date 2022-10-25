// var fruits = ['apple', 'pear', 'grape', 'pineapple'];
// console.log(fruits[1]);

// //objects
// var person = {
//     firstname: "Pascal",
//     lastname: "Osemene",
//     middlename: "Okechukwu",
//     gender: "Male",
//     age: 30,
//     feminist: false,
//     89: 'some data'
// }

// console.log(person.firstname)
// console.log(person.lastname)
// console.log(person[ 89 ])

// var fullName = person.firstname + ' ' + person.lastname;
// console.log(fullName);

// var betterFullname = `my full name is: ${person.firstname} ${person.lastname}`

// console.log('------------------')
// //Floats
// var myFloat = 10.5;

// console.log(typeof(myFloat));

// console.log('------------------')
// //For loops

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[ i ])
// }

// console.log('------------------')
// //For in loops
// for (let key in person){
//     //console.log(key);
//     console.log(person[ key ])
// }

// for (let arrKey in fruits){
//     console.log(fruits [ arrKey ] );
// }

// console.log('------------------')
// //For of loops
// for (value of fruits) {
//     console.log(value);
// }

// console.log('------------------')
// //while loops
// var i = 0;
// while(i < fruits.length){
//     console.log(fruits[ i ]);
//     i = i++;
// }
console.time('odd number calculator')
for(let i = 0; i < 1000; i++) {
    if(i % 2 == 0){
        console.log(`${ i } - even`)
    }else {
        console.log(`${ i } - odd`)
    }
}
console.timeEnd('odd number calculator');