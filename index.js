/*
1 meter = 3.280839895 feet
1 liter = 0.264172052 gallon
1 kilogram = 2.204622621 pound
*/

let num = null

const inputFl = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("lenght-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

let lenghtObject = {
    from: "meter",
    to: "feet",
    ratio: 3.280839895
}

let volumeObject = {
    from: "liters",
    to: "gallon",
    ratio: 0.264172052
}

let massObject = {
    from: "kilogram",
    to: "pounds",
    ratio: 2.204622621
}

function convertValue(arg) {
    let baseString = ` ${num} ${arg.from} = ${(num * arg.ratio).toFixed(3)} ${arg.to} | ${num} ${arg.to} = ${(num / arg.ratio).toFixed(3)} ${arg.from} `
    return baseString
}

convertBtn.addEventListener("click", function() {
    num = inputFl.value
    if (isNaN(num)) {
        alert("Please enter a valid number")
    } else {
        let length = convertValue(lenghtObject)
        let volume = convertValue(volumeObject)
        let mass = convertValue(massObject)
        lengthEl.innerHTML = length
        volumeEl.innerHTML = volume
        massEl.innerHTML = mass
    }
})