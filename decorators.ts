abstract class Car {
    public description : string;

    public getDescription() : string {
        return description;
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
