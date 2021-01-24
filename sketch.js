var gameState = 0;
var canvas;
var contestantCount;
var quiz, question, contestant;
var allContestants;
var database;
var options, option1, option2, option3, option4;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }

  
}
