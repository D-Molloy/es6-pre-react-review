// Import/Export
import helloWorld, { addTwo } from "./utils"

import axios from 'axios'


const result = addTwo(10)
console.log('result', result)
helloWorld()

const car = {
    doors: 4,
    wheels: 4,
    soundSystem: "sick"
}

const { doors, wheels, soundSystem } = car



// console.log('{door, wheels, soundSystem}', { doors:doors, wheels:wheels, soundSystem })
// destructuring


axios.get(`https://randomuser.me/api/?results=10`)
    .then(({ data: { results } }) => buildUserArray(results))
// .then(({ data: { results } }) => buildGirlArray(results))

// Ternary operator

// let age = 20
// let canDrink;
// if(age > 21){
//     canDrink = true
// } else {
//     canDrink = false
// }
// canDrink = age > 21 ? true : false
// TrueFalseStatement ? option1 : option2
function buildGirlArray(arr) {
    const girlsArray = arr.filter(({ gender }) => gender === "female")
    console.log(girlsArray)
}

function buildUserArray(arr) {
    const userArray = arr.map(({ name, email, gender }) => {
        return (`
        <div class="${gender === "male" ? "boy" : "girl"}">
        <h1>${name.first} ${name.last}</h1>
        <p>${email}</p>
        </div>
        `)
    })

    userArray.forEach(userStr => {
        const userEl = document.createElement("div")
        userEl.innerHTML = userStr
        document.body.appendChild(userEl)
    })
}
// map/filter


class Vehicle {
    constructor(doors, wheels) {
        this.doors = doors
        this.wheels = wheels
    }

    print() {
        console.log(`
            Doors:${this.doors}
            Wheels:${this.wheels}
        `)
    }
}

const boat = new Vehicle(0, false)
console.log(boat)
boat.print()