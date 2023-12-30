                                            // task 1
let pet1 = {
    type: "dog",
    name: "Bill",
    sound: "gav",
    say : function (message) {
        return `${this.type} ${this.name} говорит ${message ? message : this.sound}`;
    }
};

let pet2 = {
    type: "cat",
    name: "Barsik",
    sound: "Myau",
    say : function (message) {
        return `${this.type} ${this.name} говорит ${message ? message : this.sound}`;
    }
};

console.log(pet1.say());
console.log(pet1.say("gav-gav"));
console.log(pet2.say());
console.log(pet2.say("myau-myau"));
                                            // task 2 
let products = {
    potato: "овощи",
    carrot: "овощи",
    banana: "фрукты",
    orange: "фрукты",
    apple: "фрукты",
    strawberry: "ягоды",
    tomato: "овощи",
    melon: "фрукты",
    lemon: "фрукты"
}
let basket = {};

for (let key in products) {
    if (basket[products[key]]) {
        basket[products[key]]++;
    } else {
        basket[products[key]] = 1;
    }
  }
  console.log(basket);

                                            // task 3
let cars = {
    Chevrolet: {
        country: "U.S.A",
        color: "black",
        year: "2005"
    },
    GMC: {
        country: "U.S.A",
        color: "red",
        year: "2023"
    },
    Ford: {
        country: "U.S.A",
        color: "blue",
        year: "2010"
    },
    Toyota: {
        country: "Japan",
        color: "yellow",
        year: "2015"
    },
    Citroen: {
        country: "France",
        color: "green",
        year: "2017"
    },
    Mercedes: {
        country: "German",
        color: "white",
        year: "2020"
    },
    BMW: {
        country: "German",
        color: "black",
        year: "2019"
    },
    Zeekr: {
        country: "China",
        color: "orange",
        year: "2022"
    },
    Lada: {
        country: "Russia",
        color: "eggplant",
        year: "2002"
    },
    Honda: {
        country: "Japan",
        color: "brown",
        year: "2008"
    },
};

let sortCars = [];

for (let car in cars) {
    sortCars.push([car, cars[car]]);
};

sortCars.sort(function (a, b) {
    return b[1].year - a[1].year;
});

console.log("Старые машины: ");
for (let i = sortCars.length - 3; i < sortCars.length; i++) {
    console.log(sortCars[[i][0]]);
};

console.log("Новые машины: ");
for (let i = 0; i < 3; i++) {
    console.log(sortCars[[i][0]]);
};