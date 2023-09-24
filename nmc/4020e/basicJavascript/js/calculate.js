//Variables 
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let additionButton = document.querySelector('#addButton');
let outputField = document.querySelector('#output');
let subtrationButton = document.querySelector('#subButton');
let multiplyButton = document.querySelector('#multiButton');
let divideButton = document.querySelector('#divButton');

//Addition Function 
function add() {
    let add1 = Number(input1.value);
    let add2 = Number(input2.value);
    let sum = add1 + add2;
    outputField.value = "$" + sum;
}

//Subtration Function 
function sub() {
    let sub1 = Number(input1.value);
    let sub2 = Number(input2.value);
    let sum = sub1 - sub2;
    outputField.value = "$" + sum;
}

//Multiply Function
function multi() {
    let multi1 = Number(input1.value);
    let multi2 = Number(input2.value);
    let sum = multi1 * multi2;
    outputField.value = "$" + sum;
}

//Divide Function 
function div() {
    let div1 = Number(input1.value);
    let div2 = Number(input2.value);
    let sum = div1 / div2;
    outputField.value = "$" + sum;
}

//Addition Button 
additionButton.onclick = () => add();

//Subtraction Button
subtrationButton.onclick = () => sub();

//Multily Button
multiplyButton.onclick = () => multi();

//Divide Button
divideButton.onclick = () => div();