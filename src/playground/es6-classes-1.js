class Person {
    constructor(name = 'Nathan', age = 0){
        this.name = name
        this.age = age
    }
    getIntro(){
        return `Hi I am ${this.name}`
    }
    getGreeting(){
        return `Hi I am ${this.name} and I am ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age) // refers to parent class constructor function
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getGreeting() {
        let description = super.getGreeting()

        if(this.hasMajor()){
            description += `${description} Their major is ${this.major}`
        }
        return description
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }
    getIntro(){
        let intro = super.getIntro()
        return !!this.homeLocation ? `${intro}. I'm from ${this.homeLocation}` : intro
    }
}

// create subclass of person - Traveller extends Person
// add support for homeLocation
// override getIntro
// 1. Hi I am Name. Im visiting from homeLocation
// 2. Hi I am Name

const me = new Traveller('John', 34, 'NZ')
console.log(me.getIntro())

const notMe = new Traveller()
console.log(notMe.getIntro())