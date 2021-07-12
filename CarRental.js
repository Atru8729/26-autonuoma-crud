class CarRental {
    constructor(companyName) {
        this.list = [];
        this.companyName = companyName;
    }

    intro() {
        console.log(`Hi, we are ${this.companyName} and we have 0 cars available.`);
    }

    addCar(name, color, price) {
        let car = {
            name: name,
            color: color,
            price: price,
        }
        this.list.push(car);
        console.log(car);
    }

    carPark() {

    }
}

module.exports = CarRental;