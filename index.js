class Person {
    leg = 2;
    heart = 'testing';
    constructor(name, isAlive) {
        this.name = name;
        this.isAlive = isAlive;
    }

    testObj = {
        me: 'Melody',
        isAlive: ' is dead',
        canBreathe() {
            console.log('1: ', this.me, this.isAlive)
        }
    }

    canBreathe = () => {
        console.log('2: ', this.name, this.isAlive)
    };
}

const peter =  new Person('Peter', 'is alive');

peter.canBreathe();
peter.testObj.canBreathe();


const obj = {
    length: 20,
    height: 35
}

if('breadth' in obj === false) {
    obj.breath = 22
}

console.log(obj.breath)