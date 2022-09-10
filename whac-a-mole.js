

  const squares = document.querySelectorAll('.square');
const mole= document.querySelector('.mole');
const score= document.querySelector('.score');
const timeLeft= document.querySelector('#time');
const moleSmashed=document.querySelector('.moleSmashed');

let result=0;
let hitMole;
let SmashedMole;

function randomSquare(){
    
   squares.forEach(square=>{
    square.classList.remove('mole');
    square.classList.remove('moleSmashed');
  })

  let randomsquare= squares[Math.floor(Math.random()*9)];
  randomsquare.classList.add('mole');
  
  hitMole=randomsquare.innerText;
  console.log(hitMole);
  SmashedMole=randomsquare;

}



function moveMole(){
    let moveTime = null;
    moveTime=setInterval(randomSquare, 1000);
    
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
  










// const cursor=document.querySelector('.cursor')
// window.addEventListener('mousemove', e=>{
//     cursor.style.top= e.pageY +'px';
//     cursor.style.left= e.pageX +'px';

// })

