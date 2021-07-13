class CarRental {
    constructor(companyName) {
        this.list = [];
        this.companyName = companyName;
    }

    intro() {
        let carCount = 0;

        for (let i = 0; i < this.list.length; i++) {
            const auto = this.list[i];
            if (auto.working === true) {
                carCount++;
            }
        }
        console.log(`Hi, we are ${this.companyName} and we have ${carCount} cars available.`);
    }

    addCar(name, color, price) {
        let car = { name, color, price, working: true }
        this.list.push(car);
        console.log(car);
    }

    carPark() {
        let count = 0;

        for (let i = 0; i < this.list.length; i++) {
            const auto = this.list[i];
            if (auto.working === true) {
                count++;
                console.log(`${count}. ${auto.name} (${auto.color}) is for ${auto.price}EUR/day.`);
            }

        }
    }

    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice;

    }

    carAccident(index) {
        this.list[index].working = false;
    }

    carRepair(index) {
        this.list[index].working = true;
    }

    removeCar(index) {
        const updatedCarList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                updatedCarList.push(this.list[i]);
            }
        }
        this.list = updatedCarList;
    }

}

module.exports = CarRental;