const play = document.getElementById('run');
var time = document.getElementById('time');
const sound = document.getElementById('audio');
const level = document.getElementById('level');
const operators = ['+', '-', '*'];
var answer;
var n;
let badAnsw = 0;
const form = document.getElementById('form');
const banner = document.getElementById('press');
const gameOver = document.getElementById('gameOver');
const win = document.getElementById('win');
const score = document.getElementById('score');
let sec = 15;
var timer;

play.onclick = function() {runGame();}
                    
function runGame(){
    score.innerHTML = '0';
    generate(); 
    sec = 15;
    clearInterval(timer);
    timer = setInterval(startTimer, 1000);
    gameOver.style.visibility = 'hidden';
    banner.style.visibility = 'hidden'; 
    win.style.visibility = 'hidden';   
}

    //check answer
    form.addEventListener('submit', (e) => {
        e.preventDefault();
       checkAnsw();
       levelUp(); 
   }
   )



//game logic
function generate(){

    if (level.textContent === '1')
    {n = 11};
  
    if (level.textContent === '2')
        {n = 21 };
  
    if (level.textContent === '3')
        {n = 26 };
  
    if (level.textContent === '4')
        {n = 31 };
  
    if (level.textContent === '5')
        {n = 36 };

    var num1 = Math.floor(Math.random() * n);
    var operator = Math.floor(Math.random() * operators.length);
    var num2 = Math.floor(Math.random() * n);
       
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('operator').innerHTML = operators[operator];
    document.getElementById('num2').innerHTML = num2;
  
    if(operators[operator] === '+'){answer = num1 + num2}
    else if(operators[operator] === '-'){ answer = num1 - num2 }
    else { answer = num1 * num2 };


}

function checkAnsw (youransw){
   
    timer = setInterval(startTimer, 1000);
   
    let scoreINT = parseInt(score.textContent);
  
      youransw = document.getElementById('myansw');

      if (youransw.value == answer){
          scoreINT++;
          document.getElementById('score').innerHTML = scoreINT;
          youransw.value = '';
          generate();
         
          
      } else {youransw.value= '';
              sound.play();
              badAnsw++;
              }
        if (badAnsw >= 3){
            gameOver.style.visibility = 'visible';
            scoreINT = 0;
           score.innerHTML = scoreINT;
        }
    
}

function levelUp(){
    if (parseInt(score.textContent) == 10){
      level.innerHTML = '2';
    }else 
    if (parseInt(score.textContent) == 18){
        level.innerHTML = '3';
    }else 
    if (parseInt(score.textContent) == 25){
        level.innerHTML = '4';
    }else 
    if (parseInt(score.textContent) == 30){
        level.innerHTML = '5';}
        else if (parseInt(score.textContent) == 35){
            level.innerHTML = '5';
            gameWin.play();
            win.style.visibility = 'visible';
            
        }
    }

    //COUNTDOWN
   
    function startTimer(){
        time.innerHTML = sec;  
         if (sec > 0 ){
           sec--;
           time.innerHTML = sec; 
    } else if (sec == 0){ sound.play();
        gameOver.style.visibility = 'visible';
        clearInterval(timer);}      
}

form.onsubmit = function(e){
    clearInterval(timer);
    sec = 15;
    e.preventDefault();}
