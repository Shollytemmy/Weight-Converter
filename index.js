const inputElem = document.getElementById('input')

const outputElem = document.getElementById('output')
const errorElem = document.getElementById('error')


let errorTime;
let outputTime;

function updateResult(){
    if(inputElem.value <= 0 || isNaN(inputElem.value)){
        errorElem.innerText = "Please enter  a valid Number!"

        clearTimeout(errorTime)

        errorTime = setTimeout(() => {
            errorElem.innerText = ""
            inputElem.innerText = ""

        }, 2000)
    } else{
        outputElem.innerText = ( +inputElem.value / 2.2).toFixed(2)
        clearTimeout(outputTime)

        outputTime = setTimeout(() => {
            outputElem.innerText = ""
            inputElem.innerText = ""


        }, 2000)
    }
}

inputElem.addEventListener('input', updateResult)