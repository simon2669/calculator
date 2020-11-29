'use strict';

const inputNumbers = document.querySelectorAll('.numInput');
const inputSign = document.querySelectorAll('.numSign');
const inputPont = document.querySelectorAll('.inputPont');
const inputDelete = document.querySelectorAll('.deleteInput');
const egyenlőség = document.querySelectorAll('.egyenlőség');
const output = document.querySelector('.calculator__output');
let megoldas;
let mJelek;
let arrOutput = [];
let műveletiJelek = [];
let számok = [];

let utolso = 0;
let voltMűveletiJel = false;

let csakSzámok = [];
let számIndex = 0;

function mindig() {
  if (csakSzámok[számIndex] == undefined) {
    csakSzámok.push('');

  }
}



(function () {
  egyenlőség.forEach((item) => item.addEventListener('click', () => {

    //console.log(műveletiJelek, csakSzámok)
    let c = csakSzámok.map((item) => parseInt(item))
    console.log(c)
    let f = műveletiJelek.forEach((itemm) => c.reduce((pre, m) => aa(pre, m, itemm)));
    console.log(f)



  }
  ))
})();

function összeadás(a, b) {
  return a + b;
}
function kivonás(a, b) {
  return a - b;
}
function szorzás(a, b) {
  return a * b;
}
function osztás(a, b) {
  return a / b;
}
function aa(a, b, jel) {
  if (jel == '+') {
    összeadás(a, b);
  }
  else if (jel == '-') {
    kivonás(a, b)
  }
  else if (jel == '*') {
    szorzás(a, b)
  }
  else if (jel == '/') {
    osztás(a, b)
  }
}
function következőMűveletiJel(x, y, jel) {
  if (jel == '+') {
    összeadás(x, y)
  }
}
(function () {
  inputNumbers.forEach((item) => item.addEventListener('click', () => {
    arrOutput.push(item.textContent)
    output.textContent = arrOutput.join('');

    mindig();

    if (!voltMűveletiJel) {
      számok.push(item.textContent);

      csakSzámok[számIndex] = csakSzámok[számIndex] + item.textContent;
      console.log(csakSzámok);
    }
    else {
      számok.push(',');
      számok.push(item.textContent);

      csakSzámok[számIndex] = csakSzámok[számIndex] + item.textContent;
      console.log(csakSzámok)
    }
    voltMűveletiJel = false;

    utolso++;
    //console.log(utolso);
  }))
})();

(function () {
  inputSign.forEach((item) => item.addEventListener('click', () => {
    arrOutput.push(item.textContent)
    output.textContent = arrOutput.join('');

    mindig();

    műveletiJelek.push(item.textContent);
    //console.log(műveletiJelek);
    utolso++;
    számIndex++;
    //console.log(utolso);
    voltMűveletiJel = true;
  }))
})();

(function () {
  inputPont.forEach((item) => item.addEventListener('click', () => {
    arrOutput.push(item.textContent)
    output.textContent = arrOutput.join('');
    mindig();
    if (!voltMűveletiJel) {
      számok.push(item.textContent);

      csakSzámok[számIndex] = csakSzámok[számIndex] + item.textContent;
      console.log(csakSzámok)
    }
    else {
      számok.push(',');
      számok.push(item.textContent);

      csakSzámok[számIndex] = csakSzámok[számIndex] + item.textContent;
      console.log(csakSzámok)
    }
    console.log(számok)
    voltMűveletiJel = false;
    utolso++;
    //console.log(utolso);
  }))
})();

(function () {
  inputDelete.forEach((item) => item.addEventListener('click', () => {
    megoldas = [];
    mJelek = [];
    arrOutput = [];
    output.textContent = arrOutput;
    műveletiJelek = [];
    számok = [];
    csakSzámok = [''];
    számIndex = 0;
    utolso = 0;
  }))
})();




