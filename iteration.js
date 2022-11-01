//Given a sequential array of numbers write a program to stop executing the loop when the value is equal to 5.

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[ i ] == 5) {
        break;
    }

    console.log( `the current number is: ${ numbers[ i ] }`);

}

console.log('----------------------')
var employees = [
    {
        name: "Favour",
        salary: 2000,
        active: false,
        additional_salary: function(){
            return this.salary + 250;
        }
    },
    {
        name: "Choice",
        salary: 1500,
        active: true,
        additional_salary: function(){
            return this.salary + 250;
        }
    },
    {
        name: "Rume",
        salary: 17000,
        active: true,
        additional_salary: function(){
            return this.salary + 250;
        }
    },
    {
        name: "Pascal",
        salary: 20000,
        active: true,
        additional_salary: function(){
            return this.salary + 250;
        }
    },
    {
        name: "Adesuwa",
        salary: 2000,
        active: false,
        additional_salary: function(){
            return this.salary + 250;
        }
    }
];

console.log(employees[0].additional_salary())

// for(let index = 0; index < employees.length; index++){
    
//     if(employees[ index][ 'active'] == true){
//         console.log(`We have paid the sum of ${ employees[ index ][ 'salary']} to ${ employees[ index ][ 'name']}`)
//     }
// }

for (let i = 0; i < employees.length; i++){

    let employee = employees[ i ];

    if (employee.active == false){
        continue;
    }
    console.log(`We have paid the sum of ${ employees[ index ][ 'salary']} to ${ employees[ index ][ 'name']}`)
}