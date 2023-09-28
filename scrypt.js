let operation = document.querySelector(".calculatorScreenOperation")
let result = document.querySelector(".calculatorScreenResult")

let power = document.querySelector(".power")
let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operator")
let dot = document.querySelector(".dot")
let remove = document.querySelector(".remove")
let equal = document.querySelector(".equal")

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
            result.innerHTML = ""
        }
    }
})

numbers.forEach(number => {number.addEventListener("click", (e) => {
    if (onOff) {
        if (result.innerHTML.length !== 0) {
            operation.innerHTML = e.target.innerHTML
            result.innerHTML = ""
        } else {
            if (operation.innerHTML === "0") {
                operation.innerHTML = ""
                operation.innerHTML += number.innerHTML
            } else {
                operation.innerHTML += number.innerHTML
            }
        }
    }
})})

operators.forEach(operator => {operator.addEventListener("click", () => {
    if (onOff) {
        if (result.innerHTML.length !== 0) {
            operation.innerHTML = result.innerHTML + operator.innerHTML
            result.innerHTML = ""
        } else {
            if (!isNaN(operation.innerHTML[operation.innerHTML.length - 1])) {
                operation.innerHTML += operator.innerHTML
            }
        }
    }
})})

dot.addEventListener("click", (e) => {
    if (onOff) {
        if (result.innerHTML.length !== 0) {
            if (!result.innerHTML.includes(".")) {
                operation.innerHTML = result.innerHTML + e.target.innerHTML
                result.innerHTML = ""
            }
        } else {
            let actualOperation = operation.innerHTML.split(/[+\-*/]/)
            let containDot = (actualOperation[actualOperation.length - 1].includes("."))
            if ((!isNaN(operation.innerHTML[operation.innerHTML.length - 1])) && (!containDot)) {
                operation.innerHTML += e.target.innerHTML
            }
        }
    }
})

remove.addEventListener("click", () => {
    if (result.innerHTML.length !== 0) {
        operation.innerHTML = 0
        result.innerHTML = ""
    } else {
        if (operation.innerHTML.length == 1) {
            operation.innerHTML = 0
        } else {
            operation.innerHTML = operation.innerHTML.slice(0, -1)
        }
    }
})

equal.addEventListener("click", () => {
    let operated = eval(operation.innerHTML)
    let factor = Math.pow(10, 7)
    result.innerHTML = Math.round(operated * factor) / factor
})
