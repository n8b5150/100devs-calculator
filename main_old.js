
const calculator = {
    button: ['0','1','2','3','4','5','6','7','8','9','.','/','*','+','-','='],
    buttonId: ['zero','one','two','three','four','five','six','seven','eight','nine','decimal','divide','multiply','add','subtract','equals'],
    current: '',
    //method takes in numbers and operators, concatenating a string to be evaluated
    currentStr: function (val) {
        current+=val
    },
    //evaluate string
    evaluate: function (val) {
        return eval(val)
    },

    //displays current or evaluated value
    display: function () {
        document.getElementById('display').innerText = this.current
    },

    //method adds event listeners to each button
    smurfs: function (buttonId) {
        this.buttonId.forEach( (e,i) => {
            document.getElementById(buttonId[i]) //not sure what to do here
        })
    },

}