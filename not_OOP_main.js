

//display - section selected to display current and total
const display = document.getElementById('display')

//current - string to store numbers and operators
let current = ''
//total - string to display result of calculation
let total = ''
let currentArr = []

//display current value
const result = (str) => {
    display.innerText = str
}


//when 'equals' is pressed, calculate 'total' and display
const equals = () => {
    currentArr = current.split(' ')
    console.table(currentArr)
    current = eval(current)
    result(current)
}


//listen for events and create 'current' string and display
//async, loop waiting for each input?
const zero = () => {
    if (current.length>=1){
        current+='0'
        result(current)
    }
}
const one = () => {
    current+='1'
    result(current)
}
const two = () => {
    current+='2'
    result(current)
}
const three = () => {
    current+='3'
    result(current)
}
const four = () => {
    current+='4'
    result(current)
}
const five = () => {
    current+='5'
    result(current)
}
const six = () => {
    current+='6'
    result(current)
}
const seven = () => {
    current+='7'
    result(current)
}
const eight = () => {
    current+='8'
    result(current)
}
const nine = () => {
    current+='9'
    result(current)
}
const divide = () => {
    if (current[current.length -1 ] == ' '){
        current = current.slice(0,current.length-3)
        current+=' / '
        result(current)
    } else {
        current+=' / '
        result(current)
    }
}
const multiply = () => {
     if (current[current.length -1 ] == ' '){
        current = current.slice(0,current.length-3)
        current+=' * '
        result(current)
    } else {
        current+=' * '
        result(current)
    }
}
const add = () => {
     if (current[current.length -1 ] == ' '){
        current = current.slice(0,current.length-3)
        current+=' + '
        result(current)
    } else {
        current+=' + '
        result(current)
    }
}
const subtract = () => {
     if (current[current.length -1 ] == ' '){
        current = current.slice(0,current.length-3)
        current+=' - '
        result(current)
    } else {
        current+=' - '
        result(current)
    }
}
const decimal = () => {
    current+='.'
    result(current)
}

//add event listeners to li elements
document.getElementById('zero').addEventListener('click',zero)
document.getElementById('one').addEventListener('click',one)
document.getElementById('two').addEventListener('click',two)
document.getElementById('three').addEventListener('click',three)
document.getElementById('four').addEventListener('click',four)
document.getElementById('five').addEventListener('click',five)
document.getElementById('six').addEventListener('click',six)
document.getElementById('seven').addEventListener('click',seven)
document.getElementById('eight').addEventListener('click',eight)
document.getElementById('nine').addEventListener('click',nine)
document.getElementById('divide').addEventListener('click',divide)
document.getElementById('multiply').addEventListener('click',multiply)
document.getElementById('add').addEventListener('click',add)
document.getElementById('subtract').addEventListener('click',subtract)
document.getElementById('equals').addEventListener('click',equals)
document.getElementById('decimal').addEventListener('click',decimal)