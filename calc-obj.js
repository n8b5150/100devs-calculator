// Parameters
    // Input: numbers and operators
    // Event handlers for calc buttons
    // Current value and Calculated value

// Return
    // Calculated value to 'display'
    // Current value, result of clicked calc buttons

// Example

// Pseudocode v1
    // Add event listeners to calc buttons
        // const button = document.querySelectorAll('.buttons')
        // for 

    // Get id from clicked button 
        // button[i].id

    // Concat value of button to current value
        // button[i].id.innertext

    // Equals pressed: Evaluate current value and 'display'

    // If next button is a number or 'cleared' => clear 'display', zero current and calculated value
    // If next button is operator => move current to new line, concat with operator 


// Pseudocode v2
    // Calc methods: add, sub, mult, divide, eval, display
    // Calc properties: calc button values ( 0-9 . ), 
    
    
    
    
let el = document.querySelectorAll('li')
let buttons = {}
el.forEach( e => buttons[e.id] = document.getElementById(e.id).title)

// buttons = {
//     seven: '7', 
//     eight: '8', 
//     nine: '9', 
//     divide: ' / ', 
//     four: '4',
//     add: " + ",
//     decimal: ".",
//     divide: " / ",
//     eight: "8",
//     equals: " = ",
//     five: "5",
//     four: "4",
//     multiply: " * ",
//     nine: "9",
//     one: "1",
//     seven: "7",
//     six: "6",
//     subtract: " - ",
//     three: "3",
//     two: "2",
//     zero: "0",
// }

for ( key in buttons ) {
    document.getElementById(key).addEventListener('click', () => current+=document.getElementById(key).title)
}

//document.getElementById('seven').addEventListener('click', () => current+=document.getElementById('seven').title)