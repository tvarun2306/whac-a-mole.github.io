const squares = document.querySelectorAll('.square')
const mole= document.querySelector('.mole')
const score= document.querySelector('#score')
const timeLeft= document.querySelector('#time')










let result=0;
let hitMole;

function randomSquare(){
    
   squares.forEach(square=>{
    square.classList.remove('mole');
    
  })

  let randomsquare= squares[Math.floor(Math.random()*9)];
  randomsquare.classList.add('mole');
  hitMole=randomSquare.id;
  

}




function moveMole(){
    let moveTime = null;
    moveTime=setInterval(randomSquare, 1000);
}

moveMole();

squares.forEach(square=>{
  square.addEventListener("click", () =>
  {
    // console.log(square.id);

    if(square.id==hitMole)
    {
      result++;
      
      
      console.log(score.textContent);
      hitMole=null;
    }score.textContent=result;

  })
})
  






// const cursor=document.querySelector('.cursor')
// window.addEventListener('mousemove', e=>{
//     cursor.style.top= e.pageY +'px';
//     cursor.style.left= e.pageX +'px';

// })

