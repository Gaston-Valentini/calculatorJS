let operation = document.querySelector(".calculatorScreenOperation")
let result = document.querySelector(".calculatorScreenResult")
let power = document.querySelector(".power")
let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator")

let onOff = false

power.addEventListener('click', () => {
    if (!onOff) {
        onOff = true
        operation.innerHTML = 0
    } else {
        if (operation.innerHTML == 0) {
            onOff = false
            operation.innerHTML = ""
        } else {
            operation.innerHTML = 0
        }
    }
})

numbers.forEach(number => {number.addEventListener("click", () => {
    if (onOff) {
        if (operation.innerHTML == 0) {
            operation.innerHTML = ""
            operation.innerHTML += number.innerHTML
        } else {
            operation.innerHTML += number.innerHTML
        }
    }
})})

operators.forEach(operator => {operator.addEventListener("click", () => {
    if (onOff) {
        
        if (!isNaN(operation.innerHTML[operation.innerHTML.length - 1])) {
            operation.innerHTML += operator.innerHTML
        }
        
    }
})})