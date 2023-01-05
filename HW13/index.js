// Task 1

function inputString(name) {
    let answer = prompt(`Input your ${name} string`);

    while(!answer) {
        answer = prompt(`Error: reinput ${name} string`);
    }

    return answer;
}

const stringArr = [inputString('first'), inputString('second'), inputString('third')];
let resultString = [];

for(let i = 0; i < 3; ++i) {
    for(let j = 0; j < 3; ++j) {
        if(i === j) {
            continue;
        }

        for(let k = 0; k < 3; ++k) {
            if(i === k || j === k) {
                continue;
            }
            resultString.push(stringArr[i] + stringArr[j] + stringArr[k]);
        }
    }    
}

console.log(resultString);

// Task 2

function inputNumber() {
    let number = Number(prompt('Input five-digit number, if you enter a fractional number, then rounding'));

    while(isNaN(number) || (Math.abs(number) < 10000 || Math.abs(number) > 99999)) {
        number = Number(prompt('Input five-digit number, if you enter a fractional number, then rounding'));
    }

    return Math.round(number);
}

let number = inputNumber();
let resultNumber = [];

for(let i = 10000; number; i /= 10) {
    resultNumber.push(Math.trunc(number / i));
    number = Math.abs(number % i);
}

console.log(resultNumber);