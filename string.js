var s = "I am Pascal, who are you?";

console.log(s.length);

//string slice
console.log(s.slice(5, 11))

console.log(s.slice(-5));

//string substring
console.log(s.substring(5, 11))

console.log(s.substring(-5, 11))

//string substr

console.log(s.substr(5, 6));

//string replace: The replace() method replaces a specified value with another value in a string



s1 = s.replace('Pascal', 'Jennifer');
s2 = s1.replace(/who are you?/i, 'I\'m a web developer')

console.log(s2)

console.log(s.slice(5, 11).toUpperCase())

//split
let conv = 'Anna, Bella, Celia, Dorcas, Edwin, Felicia';
newArray = conv.split(',');
console.log(`${newArray[0]} and ${newArray[5]}`);

//number method
//array pop

let score = 100;

console.log(score.toString())

people = ['Daniel', 'Helen', 'Nathan'];
// people1 = people.pop();
// console.log(people1);

console.log(people.pop())

//Array push

let tech = ['Dan', 'Faith', 'Chika', 'Jude', 'Smart', 'Francis', 'Pat'];

tech.push('James');
console.log(tech)

//Array shift

tech.shift();
console.log(tech)


//Array unshift
tech.unshift('Dan');
console.log(tech)

//Array delete
//tech.delete[1]

// Array splice can allow you add a new item to the array and unlike push and unshift, you can the index you want to add it.
 //tech.splice(1,0, 'Jennifer')
// console.log(tech)

//sorting arrays
tech.sort();

//sorting array in numerical order

let bros = [1, 11, 2, 22, 55, 13, 60, 85, 82, 100,60];
bros.sort(
    (a,b) => a - b
    )
    console.log(bros)

//Array foreach: The foreach call back function take in 3 parameter (value, index, array). The foreach method does not return an array
    // bros.forEach(
    //     (value, index, array) => {
    //         if (value%2 == 0) return console.log(`This is ${value} and is  even`);
    //         return console.log(`This is ${value} and is odd`)
    //     }
    // )

    //Array map: This map method creates a new array. in order to use map, you must assign it to a new variable

    // let techBros = bros.map(
    //     (value, index, array) => {
    //         return console.log(`This is ${value + 5} is here`)
    //     }
    // )

    // console.log(techBros)

    //Array filter: Creates a new array with all array elements that passes a test. A good practical use of filter is in search

    const myFunction = (value, index, array) => {
        return value > 20
       let over20 = bros.filter(myFunction);
    }
    console.log(bros)

    var fruits = []


    
