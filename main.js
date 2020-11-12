var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var ten = document.getElementById('zero');

// var add = document.getElementById('add').addEventListener('click', add);
// var minus = document.getElementById('minus').addEventListener('click', minus);
// var divide = document.getElementById('divide').addEventListener('click', divide);
// var multi = document.getElementById('multi').addEventListener('click', multi);
// var equal = document.getElementById('equal').addEventListener('click', equal);
var decimal = document.getElementById('decimal');
// var modul = document.getElementById('mod').addEventListener('click', mod);
var ret = document.getElementById('back');
var res = document.getElementById('reset');
var display = document.getElementById('calc-value');

var val = '0';
var pending;
var evalNum = [];

var update = (upObj) => {
    var txtButton = upObj.target.innerText;

    if (val ===  '0') 
        val = '';

    val += txtButton;
    display.innerText = val;
}
var operation = (upObj) => {
    var check = upObj.target.innerText;

    switch(check) {
        case '+':
            pending = val;
            val = '0';
            display.innerText = val;
            evalNum.push(pending);
            evalNum.push('+');
        break;
        case '-':
            pending = val;
            val = '0';
            display.innerText = val;
            evalNum.push(pending);
            evalNum.push('-');
        break;
        case 'x':
            pending = val;
            val = '0';
            display.innerText = val;
            evalNum.push(pending);
            evalNum.push('*');
        break;
        case '/':
            pending = val;
            val = '0';
            display.innerText = val;
            evalNum.push(pending);
            evalNum.push('/');
        break;
        case '%':
            pending = val;
            val = '0';
            display.innerText = val;
            evalNum.push(pending);
            evalNum.push('%');
        break;
        case '=':
            evalNum.push(val);
            var review = eval(evalNum.join(' '));
            val = review + '';
            display.innerText = val;
            evalNum = [];
        break;
        default:
        break;
    }
}

function clear() {
    val = '0';
    pending = undefined;
    evalNum = [];
    display.innerText = val;
}
function back() {
    var lengthVal = val.length;
    val = val.slice(0, lengthVal - 1);
    if (val === '') 
        val = '0';

    display.innerText = val;
}

function decPoint() {
    if(!val.includes('.')) {
        val += '.';
    }
    display.innerText = val;
}
res.addEventListener('click', clear);
ret.addEventListener('click', back);
decimal.addEventListener('click', decPoint)

var numbers = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');
for (i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", update, false);
}

for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", operation, false);
}