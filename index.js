// calculator
const displayVal = document.getElementById("displayVal")
function addToDisplay(value) {
    displayVal.value += value
}

function calculate() {
    try{
        displayVal.value = eval(displayVal.value)
    }
    catch(err){
        displayVal.value = "Error"
    }
}
function clearDisplay() {
    displayVal.value = ""
}