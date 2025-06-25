// This script generates a multiplication table and random multiplication problems

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomIntArray(min, max, size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(getRandomInt(min, max));
    }
    return arr;
}
function getRandomIntArrayUnique(min, max, size) {
    const arr = [];
    while( arr.length < size ){
        let i = getRandomInt(min, max);
        while( arr.indexOf(i) !== -1 ){
            ( i >= max ) ? i = min : i++;
        }
        arr.push(i);
    }
    return arr;
}

const plantf11 = document.getElementById("plant.f1.1");
const plantf12 = document.getElementById("plant.f1.2");
const plantf13 = document.getElementById("plant.f1.3");
const MyMeter1 = document.getElementById("meter.m1");
const MyMeter2 = document.getElementById("meter.m2");
const flower2 = document.getElementById("flower2");
const aValues = getRandomIntArrayUnique(10,99,90);//[];//new Array
let cnt = 0;
let err = 0;
let sol = 0;
let pressed = false;

function gardenClick() {
    // plantf11.textContent = aValues.join(", ");
    // plantf12.textContent = aValues.join(", ");
    // plantf13.textContent = "10";
}
function checkAnswer( n, answer ) {
    let rn = n % 10;
    let ln = Math.floor(n / 10);
    let result = ln * rn;
    if( answer == result ){
        return true;
    } else {
        return false;
    }
}
function commitNumber() {
    if( !pressed ){
        return;    
    }
    let answer = sol;
    if( checkAnswer( aValues[0], answer )){
        plantf12.textContent = "Correct!";
        aValues.shift();
        cnt++;
    }else{
        plantf12.textContent = "Incorrect!";
        aValues.push( aValues.shift() );
        err++;
    }
    MyMeter1.innerHTML = cnt;
    MyMeter1.style.width = cnt + "%";
    MyMeter2.innerHTML = err;
    MyMeter2.style.width = err + "%";
    let exersice = splitNumber( aValues[0] );
    let ln = exersice[0];
    let rn = exersice[1];
    plantf11.textContent = ln + "x" + rn;
    pressed = false;
    // let n = aValues.shift();
    // let rn = n % 10;
    // let ln = Math.floor(n / 10);
    // plantf12.textContent = n + "->" + ln + "x" + rn + "=" + (ln * rn);
}
function splitNumber( n ) {
    let rn = n % 10;
    let ln = Math.floor(n / 10);
    return [ln, rn];
}
function setGuessValue(){
// var a = element.scrollTop;
// var b = element.scrollHeight - element.clientHeight;
// var c = a / b;
// This is almost right. for var b you should be subtracting window.innerHeight not element.clientHeight
    let top = flower2.scrollTop;
    let height = flower2.scrollHeight - flower2.clientHeight;
    let c = top / height;
    plantf12.textContent = Math.floor(c*100);
    sol = Math.floor(c*100);
    if( flower2.scrollTop == 0 ){
        flower2.scrollTop = 1;
    }
    // console.log(c);
    pressed = true;
}
function init(){
    let exersice = splitNumber( aValues[0] );
    let ln = exersice[0];
    let rn = exersice[1];
    plantf11.textContent = ln + "x" + rn;
    // plantf11.textContent = aValues.join(", ");
    // plantf13.textContent = "10";
}

init();

document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
    event.stopPropagation()
  }, false); 
