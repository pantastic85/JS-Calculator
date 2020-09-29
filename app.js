clear();

console.log(`operator = ${operator}`);
console.log(`running = ${running}`);
console.log(`result = ${result}`);

function calculate(){
    result = result + running;
    document.getElementById("display").value = result;
    running = 0;
}

function clear(){
    operator = null;
    running = 0;
    result = 0;
    document.getElementById("display").value = result;
}

function one(){
    running = running*10 + 1;
    document.getElementById("display").value = running;
}

document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("clear").addEventListener("click", clear);

document.getElementById("one").addEventListener("click", one);