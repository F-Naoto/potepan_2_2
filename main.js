const display = document.querySelector(".display");
const btns = document.querySelectorAll("button");
const caliculations = document.querySelectorAll("#caliculation");
const zero = document.querySelector("#zero");
const doubleZero = document.querySelector("#doubleZero");
let connectedText = "";


calDisableHandler();
zeroDisableHander();

btns.forEach(btn => {
 btn.addEventListener("click", (e) => {
   calAbleHandler();
   zeroAbleHander();
   const text = e.target.textContent;
  if(text === "="){
    connectedText = eval(connectedText);
  } else if(text === "AC"){
    connectedText = "";
    calDisableHandler();
    zeroDisableHander();
  } else {
    connectedText += text;
    // if("+-*/".indexOf(connectedText.slice(-1)))??
    if(connectedText.slice(-1) === "-" || "+" || "*" || "/"){
    calDisableHandler();
    }
  }
  display.textContent = connectedText;
    }
  );
})

function calDisableHandler(){
  caliculations.forEach(caliculation =>{
  caliculation.disabled = true;
  })
}

function calAbleHandler(){
  caliculations.forEach(caliculation =>{
  caliculation.disabled = false;
  })
}

function zeroDisableHander(){
  zero.disabled = true;
  doubleZero.disabled = true;
}
function zeroAbleHander(){
  zero.disabled = false;
  doubleZero.disabled = false;
}