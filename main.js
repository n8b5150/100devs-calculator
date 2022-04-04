//accept user inputs ( number, operator, another number)
//store inputs
//recognize inputs and perform calculations
//return result



//Optional
// accept longer arithmetic operation
// display all in put as it is being entered
// store previous total as start of next operation
// clear button should clear all entries
// prevent invalid inputs (repeated decimal points, operators, start with zero, etc)
// handle negative numbers
// scroll with indication for numbers longer than display

const keys = document.querySelector('.calculator-buttons')
    keys.addEventListener('click', event => {
        const {target} = event //get target from event object
        const {value} = target //get value from target
        if (!target.matches('button')) {
            return
        } else {
            //pass to parse method
            console.log(event)
            console.log(event.target)
            console.log(`${event.target.value}`)
        }
    })