
const calc = {
    // result(str) {
    //     display.innerText = str
    // },
    equals() {
        currentArr = current.split(' ')
        console.table(currentArr)
        current = eval(current)
        result(current)
    },
    zero() {
        if (current.length>=1){
            current+='0'
            this.result(current)
        }
    },
    one() {
        current+='1'
        result(current)
    },
    two() {
        current+='2'
        result(current)
    },
    three() {
        current+='3'
        result(current)
    },
    four() {
        current+='4'
        result(current)
    },
    five() {
        current+='5'
        result(current)
    },
    six() {
        current+='6'
        result(current)
    },
    seven() {
        current+='7'
        result(current)
    },
    eight() {
        current+='8'
        result(current)
    },
    nine() {
        current+='9'
        result(current)
    },
    divide() {
        if (current[current.length - 1 ] == ' '){
            current = current.slice(0,current.length-3)
            current+=' / '
            result(current)
        } else {
            current+=' / '
            result(current)
        }
    },
    multiply() {
         if (current[current.length - 1 ] == ' '){
            current = current.slice(0,current.length-3)
            current+=' * '
            result(current)
        } else {
            current+=' * '
            result(current)
        }
    },
    add() {
         if (current[current.length - 1 ] == ' '){
            current = current.slice(0,current.length-3)
            current+=' + '
            result(current)
        } else {
            current+=' + '
            result(current)
        }
    },
    subtract() {
         if (current[current.length - 1 ] == ' '){
            current = current.slice(0,current.length-3)
            current+=' - '
            result(current)
        } else {
            current+=' - '
            result(current)
        }
    },
    decimal() {
        current+='.'
        result(current)
    }
}


//display - section selected to display current and total
const display = document.getElementById('result')
//current - string to store numbers and operators
let current = ''
//total - string to display result of calculation
let total = ''
let currentArr = []

// //display current value
const result = (str) => {
    display.innerText = str
}

// //when 'equals' is pressed, calculate 'total' and display
// const equals = () => {
//     currentArr = current.split(' ')
//     console.table(currentArr)
//     current = eval(current)
//     result(current)
// }


// //listen for events and create 'current' string and display
// //async, loop waiting for each input?
// const zero = () => {
//     if (current.length>=1){
//         current+='0'
//         result(current)
//     }
// }
// const one = () => {
//     current+='1'
//     result(current)
// }
// const two = () => {
//     current+='2'
//     result(current)
// }
// const three = () => {
//     current+='3'
//     result(current)
// }
// const four = () => {
//     current+='4'
//     result(current)
// }
// const five = () => {
//     current+='5'
//     result(current)
// }
// const six = () => {
//     current+='6'
//     result(current)
// }
// const seven = () => {
//     current+='7'
//     result(current)
// }
// const eight = () => {
//     current+='8'
//     result(current)
// }
// const nine = () => {
//     current+='9'
//     result(current)
// }
// const divide = () => {
//     if (current[current.length - 1 ] == ' '){
//         current = current.slice(0,current.length-3)
//         current+=' / '
//         result(current)
//     } else {
//         current+=' / '
//         result(current)
//     }
// }
// const multiply = () => {
//      if (current[current.length - 1 ] == ' '){
//         current = current.slice(0,current.length-3)
//         current+=' * '
//         result(current)
//     } else {
//         current+=' * '
//         result(current)
//     }
// }
// const add = () => {
//      if (current[current.length - 1 ] == ' '){
//         current = current.slice(0,current.length-3)
//         current+=' + '
//         result(current)
//     } else {
//         current+=' + '
//         result(current)
//     }
// }
// const subtract = () => {
//      if (current[current.length - 1 ] == ' '){
//         current = current.slice(0,current.length-3)
//         current+=' - '
//         result(current)
//     } else {
//         current+=' - '
//         result(current)
//     }
// }
// const decimal = () => {
//     current+='.'
//     result(current)
// }

//add event listeners to li elements
// document.getElementById('zero').addEventListener('click',zero)
// document.getElementById('one').addEventListener('click',one)
// document.getElementById('two').addEventListener('click',two)
// document.getElementById('three').addEventListener('click',three)
// document.getElementById('four').addEventListener('click',four)
// document.getElementById('five').addEventListener('click',five)
// document.getElementById('six').addEventListener('click',six)
// document.getElementById('seven').addEventListener('click',seven)
// document.getElementById('eight').addEventListener('click',eight)
// document.getElementById('nine').addEventListener('click',nine)
// document.getElementById('divide').addEventListener('click',divide)
// document.getElementById('multiply').addEventListener('click',multiply)
// document.getElementById('add').addEventListener('click',add)
// document.getElementById('subtract').addEventListener('click',subtract)
// document.getElementById('equals').addEventListener('click',equals)
// document.getElementById('decimal').addEventListener('click',decimal)

let el = document.querySelectorAll('li')
// let buttons = {}
// el.forEach( e => buttons[e.id] = document.getElementById(e.id).title )
el.forEach( e => {
    e.addEventListener('click',calc[e.id])
    //{
        // switch defeats the purpose of automating this
        // switch (e.id){
        //     case 'zero':
        //         break
        //     case 'add':
        //         break
        //     case 'subtract':
        //         break
        //     case 'multiply':
        //         break:
        //     case 'divide':
        //         break
        //     case 'equals':
        //         break
        //     case 'decimal':
        //         break
        // }
        //this works
        //add functionality above (decimal, equals) 
        // current+=e.innerText
        // result(current)
    //})
})

// for ( key in buttons ) {
//     document.getElementById(key).addEventListener('click', one)
    
//     // () => {
//     //     // current+=document.getElementById(key).innerText
//     //     result(current)
//     // })
// }