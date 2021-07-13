class CarRental {
    constructor(companyName) {
        this.list = [];
        this.companyName = companyName;
        this.brokenCar = [];
    }

    intro() {
        console.log(`Hi, we are ${this.companyName} and we have 0 cars available.`);
    }

    addCar(name, color, price) {
        let car = { name, color, price, working: true }
        this.list.push(car);
        console.log(car);
    }

    intro() {
        let count = this.list.length;
        console.log(`Hi, we are ${this.companyName} and we have ${count} cars available.`);
    }

    carPark() {
        for (let i = 0; i < this.list.length; i++) {
            const object = this.list[i];
            if (object.working === true);
            console.log(`${i + 1}. ${object.name} (${object.color}) is for ${object.price}EUR/day.`);
        }
    }

    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice;
    }
}

module.exports = CarRental;