let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["one","two","three","four"];
let h3=document.querySelector("h3");


//game start

document.addEventListener("keypress",function(){
  if(started==false){
    console.log("game started");
    started=true;
    levelUp();
}
});

//btn Flash//

function btnFlash(box){
  box.classList.add("flash");
  setTimeout(()=>{
    box.classList.remove("flash");
  },150)
}

//level Up//

function levelUp(){
  userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randCol=btns[randIdx];
    gameSeq.push(randCol);
    console.log(gameSeq);
    let randBtn=document.querySelector(`.${randCol}`);
    btnFlash(randBtn);
}


function checkAns(idx){
   if(gameSeq[idx]==userSeq[idx]){
    if(gameSeq.length==userSeq.length){
         setTimeout(levelUp,500 );
   }
  }
   else{
    h3.innerHTML=`Game over!your score is <b>${level}</b> press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(()=>{
          document.querySelector("body").style.backgroundColor="white";},1000)
    reset();
   }
}
function btnPress(){
  let btn=this;
  btnFlash(btn);
 let seq=btn.getAttribute("id");
 userSeq.push(seq);
 checkAns(userSeq.length-1);
}

let boxes=document.querySelectorAll(".box");
 for(box of boxes){
    box.addEventListener("click",btnPress);
}
function reset(){
   gameSeq=[];
 userSeq=[];
 started=false;
 level=0;
}