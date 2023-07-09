//Imports here

let nums = "0123456789";
let alphabetLow = "abcdefghijklmnopqrstuvwxyz";
let alphabetUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specChars = "!@#$%^&*()";

// let shuffled = str.split('').sort(function(){return 0.5-Math.random()}).join('');

let createBtn = document.getElementById("createPass");
let copyBtn = document.getElementById("copyPass");

const createPass = () => {
  let passProp = {
    passLength: document.getElementById("passLength").value,
    lowCase: document.getElementById("lowCase").checked,
    upCase: document.getElementById("upCase").checked,
    number: document.getElementById("number").checked,
    specChar: document.getElementById("specChar").checked,
    numberOfUp: document.getElementById("upsNumber").value,
    numberOfNum: document.getElementById("numsNumber").value,
    numberOfSpec: document.getElementById("specsNumber").value,
  };

  document.getElementById("demo").innerHTML = JSON.stringify(passProp);
};

createBtn.addEventListener("click", createPass);
