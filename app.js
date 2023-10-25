const btnChangeColor = document.getElementById('btnChangeColor');
const numHex = document.getElementById('numHex');
const numRgb = document.getElementById('numRgb');

const bntCopied = document.querySelectorAll(".btn-copy")

const containerColor = document.querySelector('.container-color');
const msgCopied = document.querySelector('.msg-copied');

let color = generateColorHex();

function changeToNum(value){
  let val = 0
  switch(value){
    case 'A':
      val = 10;
      break;
    case 'B':
      val = 11;
      break;
    case 'C':
      val = 12;
      break;
    case 'D':
      val = 13;
      break;
    case 'E':
      val = 14;
      break;
    case 'F':
      val = 15;
      break;
    default:
      return parseInt(value);
  }
  return val;
}

function convertToRgb(valueHex){
  let colors = {
    red: 0,
    green: 0,
    blue: 0
  }
  let cont = 0;
  
  for(let c in colors){
    colors[c] = changeToNum(valueHex[cont])*16 + changeToNum(valueHex[cont+1]);
    cont+=2;
  }

  return "(" + colors.red + "," + colors.green + "," + colors.blue + ")"
}

function generateColorHex(){
  let digits = '0123456789ABCDEF';
  let hex = '';
  for(let i=0; i<6; i++){
    let numRandom = Math.floor(Math.random()*16);
    hex += digits[numRandom];
  }
  return hex;
}

function changeColor(){
  containerColor.style.backgroundColor = '#' + color;
  numHex.innerHTML = color;
  numRgb.innerHTML = convertToRgb(color);
  numHex.style.color = '#' + color;
}

// Change color
btnChangeColor.addEventListener('click', ()=>{
  color = generateColorHex();
  changeColor();
})

// Copy to clipboard
function copyToClipboard(texto) {
  navigator.clipboard.writeText(texto)
  .then(
    console.log(texto)
  )
  .catch(function(err) {
    console.error("Error: " + err);
  });
}

function messageCopied(){
  msgCopied.classList.add('show');
  setTimeout(function() {
    msgCopied.classList.remove('show');
  }, 1500);
}

bntCopied.forEach((btn) => {
  btn.addEventListener('click', (e)=>{
    copyToClipboard(btn.textContent);
    messageCopied();
  })
})

window.addEventListener('load', () =>{
  changeColor();
})