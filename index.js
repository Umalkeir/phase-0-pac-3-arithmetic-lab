function add(){}
function subtract(){}
function multiply(){}
function divide(){}

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}

function increment(n){
    return n+1;
}
function decrement(n){
    return n-1;
}

function makeInt(n,base = 10 ){
    const number = parseInt(n, base)
    if(isNaN(number)) return NaN;
    return number 
}
function preserveDecimal(n, base = 10){
    const number = parseFloat(n, base)
    if(isNaN(number)) return NaN;
    return number
}