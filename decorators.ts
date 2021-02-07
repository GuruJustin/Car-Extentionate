abstract class Car {
    public description : string;

    public getDescription() : string {
        return this.description;
    }

    public abstract cost() : number
}


class Models extends Car{ 
    public description = "Model S"

    public cost() : number {
        return 623
    }
}

class Modelx extends Car{
    public description = "Model X"

    public cost() :number {
        return 632
    }
}


abstract class CarOptions extends Car {
    decoratedCar : Car;
    public abstract getDescription() : string
    public abstract cost() : number
}


class EnhancedAutoPilot extends CarOptions {
    decoratedCar : Car;

    constructor (car : Car) {
        super()
        this.decoratedCar = car
    }

    public getDescription() : string {
        return this.decoratedCar.getDescription() + ', Enhanced AutoPilot'
    }

    public cost() : number {
        return this.decoratedCar.cost() + 5000
    }
}


class RearFacingSeats extends CarOptions {
    decoratedCar : Car;

    constructor (car : Car) {
        super()
        this.decoratedCar = car
    }

    public getDescription() : string {
        return this.decoratedCar.getDescription() + ', Rear facing seats'
    }

    public cost() : number {
        return this.decoratedCar.cost() + 4000
    }
}


let myTesla = new Models()

myTesla = new RearFacingSeats(myTesla)
myTesla = new EnhancedAutoPilot(myTesla)

console.log(myTesla.cost())
console.log(myTesla.getDescription())