const inp = document.getElementById("input");
const addBut= document.getElementById("add");
const subBut= document.getElementById("sub");
const mulBut= document.getElementById("mul");
const divBut= document.getElementById("div");

const res= document.getElementById("result");
const incalc= document.getElementById("inputcalc");


function output(result, text) {
    res.textContent = result;
    incalc.textContent = text;
  }


const a= 0;
let s=a
function add (){
    let b=`${s} + ${inp.value}`
    let c= s + parseint(inp.value);
    output(c,b);
}

function sub (){
    let b=`${s}-${inp.value}`
    let c= s - parseint(inp.value);
    output(c,s); 
}
function mul (){
    let b=`${s}*${inp.value}`
    let c= s * parseint(inp.value);
    output(c,b);
}
function div (){
    let b=`${s}/${inp.value}`
    let c= s / parseint(inp.value);
    output(c,b);
}
 addBut.addEventListener('click',add);
 subBut.addEventListener('click',sub);
 mulBut.addEventListener('click',mul);
 divBut.addEventListener('click',div);
