
interface Subject {
    registerObserver(o : Observer)
    removeObserver(o : Observer)
    notifyObservers()
}

interface Observer { 
    update(temperature: number)
}

class WeatherStation implements Subject{
    private temperature : number
    private observers : Observer[] = []

    setTemperature(temp : number) {
        console.log('WeatherStation : new temperature measurement' + temp)
        this.temperature = temp
        this.notifyObservers()
    }

    registerObserver(o: Observer) {
        this.observers.push(o)
    }
    removeObserver(o: Observer) {
        let index = this.observers.indexOf(o)
        this.observers.splice(index, 1)
    }
    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature)
        }
    }
}


class TemperatureDisplay implements Observer{

    private subject : Subject;

    constructor(weatherStation : Subject) {
        this.subject = weatherStation
        weatherStation.registerObserver(this)
    }

    update(temperature: number) {
        console.log('Temperature display: I need to update my display')
        // Logic would go here
    } 
}

class Fan implements Observer{
    private subject : Subject;

    constructor(weatherStation : Subject) {
        this.subject = weatherStation
        weatherStation.registerObserver(this)
    }

    update(temperature: number) {
        if (temperature > 25) {
            console.log('Fan its hot here, turning myself on ... ')
            // Here some real logic
        } else {
            console.log('Fan its nice and turning on myself off ')
        }
    } 
}

let weatherStation = new WeatherStation ();

let tempDisplay = new TemperatureDisplay(weatherStation)
let fan = new Fan(weatherStation)

weatherStation.setTemperature(20)
weatherStation.setTemperature(30)
weatherStation.setTemperature(50)
