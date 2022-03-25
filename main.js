//add event listeners to li elements
const zero = document.getElementById('zero').addEventListener('click',zeroIn)
const one = document.getElementById('one').addEventListener('click',)
const two = document.getElementById('two').addEventListener('click',)
const three = document.getElementById('three').addEventListener('click',)
const four = document.getElementById('four').addEventListener('click',)
const five = document.getElementById('five').addEventListener('click',)
const six = document.getElementById('six').addEventListener('click',)
const seven = document.getElementById('seven').addEventListener('click',)
const eight = document.getElementById('eight').addEventListener('click',)
const nine = document.getElementById('nine').addEventListener('click',)
const divide = document.getElementById('divide').addEventListener('click',)
const multiply = document.getElementById('multiply').addEventListener('click',)
const add = document.getElementById('add').addEventListener('click',)
const subtract = document.getElementById('subtract').addEventListener('click',)
const equals = document.getElementById('equals').addEventListener('click',)
const decimal = document.getElementById('decimal').addEventListener('click',)

//display - section selected to display current and total
const display = document.getElementById('result').innerText

//current - string to store numbers and operators
let current = ''
//total - string to display result of calculation
let total = ''

//listen for events and create 'current' string and display
//async, loop waiting for each input?
const zeroIn = () => {
    current+='0'
    result(current)
}

//display current value
const result = (num) => {
    display = num
}


//when 'equals' is pressed, calculate 'total' and display

