// CALCULATOR PROGRAM

const display = document.getElementById("display")
document.addEventListener("keydown", (event) => {
    if(event.key == "1") {display.value +=event.key; }
    if(event.key == "2") {display.value +=event.key; }
    if(event.key == "3") {display.value +=event.key; }
    if(event.key == "4") {display.value +=event.key; }
    if(event.key == "5") {display.value +=event.key; }
    if(event.key == "6") {display.value +=event.key; }
    if(event.key == "7") {display.value +=event.key; }
    if(event.key == "8") {display.value +=event.key; }
    if(event.key == "9") {display.value +=event.key; }
    if(event.key == "0") {display.value +=event.key; }
    if(event.key == ".") {display.value +=event.key; }
    if(event.key == "/") {display.value +=event.key; }
    if(event.key == "*") {display.value +=event.key; }
    if(event.key == "-") {display.value +=event.key; }
    if(event.key == "+") {display.value +=event.key; }
    if(event.key == "=") {
        try{
        display.value = eval(display.value)
        }
        catch(error){
            display.value= "Error";
        }
    }
    if(event.key == "Enter") {
        event.preventDefault();
        try{
        display.value = eval(display.value)
        }
        catch(error){
            display.value= "Error";
        }
    }
    if(event.key == "Backspace") {display.value = display.value.slice(0,-1) }


        
})
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(input){
    display.value= "";
    
}
function calculate(input){
    try{
    display.value = eval(display.value)
    }
    catch(error){
        display.value= "Error";
    }
}
function del(input){
    display.value = display.value.slice(0,-1)
}