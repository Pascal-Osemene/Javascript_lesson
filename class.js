class person {
    constructor(name, year_of_birth, height){
        this.name = name;
        this.year_of_birth = year_of_birth;
        this.height = height;
    }

    age(){
        let currentDate = new Date();
        return currentDate.getFullYear() - this.year_of_birth;
    }

    profile(){
        return {
            name: this.name,
            age: this.age(),
            height: this.height
        }
    }
}

var puomo = new person("Puomo", 1999, 6.8)

console.log(puomo.age())
console.log(puomo.profile())


class car{
    constructor(wheels, doors, seats){
        this.wheels = wheels;
        this.doors = doors;
        this.seats = seats
    }

    numberOfWheels() {
        return this.wheels;
    }

    numberOfDoors() {
        return this.doors
    }

    numberOfSeats () {
        return this.seats
    }

}

class Bus extends car{
    constructor () {
        super(4, 3, 18)
    }
}

var benz = new car(4, 4, 5)

console.log(benz.numberOfDoors());

var toyotaBus = new Bus();

console.log(toyotaBus.numberOfDoors());


class car1{
    constructor(name) {
        this.name = name
    }

    get carName() {
        return this.name;
    }

    set carName(newName){
        this.name = newName;
    }
}

var myCar = new car1('Ford');

console.log(myCar.carName)

myCar.carName = 'IVM';

console.log(myCar.carName)
