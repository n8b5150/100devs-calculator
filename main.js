let current, total, result, register, currentArr, registerArr

const calc = {
    current: current,
    total: total,
    result: result,
    register: register,
    currentArr: currentArr,
    registerArr: registerArr,
    display: document.getElementById('display'),
    regDisplay: document.getElementById('register-display'),
    displayResult(){
        //display
    },
    displayRegister(){
        //register-display
    },
    evalCurrent(){

    },
    evalRegister(){

    },
    clear(){

    },
    addEventList(){
        //classes: calc-button-num, calc-button-op, calc-button-eq
        let liArr = document.querySelectorAll('li')
        liArr.forEach( e => {
            if ( e.className == 'calc-button-num') {
                e.addEventListener('click',calc.num)
            } else if ( e.className == 'calc-button-zero' ){
                e.addEventListener('click',calc.zero)
            } else if ( e.className == 'calc-button-op' ){
                e.addEventListener('click',calc[e.id])
            } else if ( e.className == 'calc-button-eq' ){
                e.addEventListener('click',calc.equals)
            }
        })
    },
    //calc-button-op
    replaceOp(){
        
    },
    add(){
        display.innerText = event.target.title
    },
    subtract(){
        display.innerText = event.target.title
    },
    multiply(){
        display.innerText = event.target.title
    },
    divide(){
        display.innerText = event.target.title
    },
    //calc-button-eq
    equals(){
        display.innerText = event.target.title
    },
    //calc-button-num
    num(){
        display.innerText = event.target.title
    },
    //calc-button-zero
    zero(){
        display.innerText = event.target.title
    },


}

calc.addEventList()