// display - section selected to display current and total
const display = document.getElementById('result')

// current - string to store numbers and operators
let current = ''

// total - string to display result of calculation
let total = ''

// array to eval
let currentArr = []

// clear bit, set by 'equals', used in 'clear' function
let cBit = false

// display current value
// to do: long numbers are cut off, next operation doesn't display
const result = (str) => {
    total = str.toString()
    total.length < 16 ? display.innerText = total :
    display.innerText = total.slice(0,15)
}

//if button pressed after 'equals' is a number or decimal, clear
function clear() {
    if ( cBit == true ){
        current = ''
        result(current)
        cBit = false
    }
    return
}

//calculator object with methods
const calc = {
    // to do: couldn't get this to work
    // result(str) {
    //     display.innerText = str
    // },
    // clear() {
    //     if ( cBit == true ){
    //         current = ''
    //         result(current)
    //     }
    //     return
    // },

    //when 'equals' is pressed, calculate 'total' and display
    equals() {
        cBit = true
        currentArr = current.split(' ')
        console.table(currentArr)
        current = eval(current)
        result(current)
    },
    zero() {
        clear()
        if (current.length>=1){
            current+='0'
            result(current)
        }
    },
    one() {
        clear()
        current+='1'
        result(current)
    },
    two() {
        clear()
        current+='2'
        result(current)
    },
    three() {
        clear()
        current+='3'
        result(current)
    },
    four() {
        clear()
        current+='4'
        result(current)
    },
    five() {
        clear()
        current+='5'
        result(current)
    },
    six() {
        clear()
        current+='6'
        result(current)
    },
    seven() {
        clear()
        current+='7'
        result(current)
    },
    eight() {
        clear()
        current+='8'
        result(current)
    },
    nine() {
        clear()
        current+='9'
        result(current)
    },
    divide() {
        cBit = false
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
        cBit = false
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
        cBit = false
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
        cBit = false
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
        clear()
        current+='.'
        result(current)
    }
}

//Array of calculator button elements
let el = document.querySelectorAll('li')
//Add event listeners to each element, call calc object by element id
el.forEach( e => {
    e.addEventListener('click',calc[e.id])
})