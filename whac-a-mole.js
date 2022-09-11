

const squares = document.querySelectorAll('.square');
const mole= document.querySelector('.mole');
const score= document.querySelector('.score');
const timeLeft= document.querySelector('#time');
const moleSmashed=document.querySelector('.moleSmashed');

let result=0;
let hitMole;
let SmashedMole;
let currentTime=60;
let moveTime = null;

function randomSquare(){
    
   squares.forEach(square=>{
    square.classList.remove('mole');
    square.classList.remove('moleSmashed');
  })

  let randomsquare= squares[Math.floor(Math.random()*9)];
  randomsquare.classList.add('mole');
  
  hitMole=randomsquare.innerText;
  // console.log(hitMole);
  SmashedMole=randomsquare;

}



function moveMole(){
    
    moveTime=setInterval(randomSquare, 750);
    
}

moveMole();

squares.forEach(square=>{
  square.addEventListener("click", () =>
  {
    
    

    if(square.id===hitMole)
    {
      result++;      
      score.innerText=result;
      SmashedMole.classList.add('moleSmashed');
      hitMole=null;    
    }
  })
})

function countdown(){

  if(currentTime>0)
  {
    currentTime--;
    timeLeft.innerText=currentTime;

  }
  else{
    document.addEventListener(alert('Total Score ='+' '+score.innerText));
    clearInterval(countdown);
    clearInterval(moveTime);
    score.innerText=0;
    timeLeft=60;
  }
  
}
setInterval(countdown,1000);














