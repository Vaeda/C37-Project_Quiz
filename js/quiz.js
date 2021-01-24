class Quiz{
    constructor(){}
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
          question = new Question()
          question.display();
        }
      }

      play(){
        //question.hide();
        background("lightblue");
        Contestant.getContestantInfo();
        textSize(40);
        text("Results", 350, 0);
        textSize(25);
        fill("darkblue");
        text("*NOTE: Contestants who have answered correctly are highlighted in green", 15, 250);
    
        if(allContestants !== undefined){
          var display_position = 250;
          for(var cst in allContestants){
            if (this.answer === option2)
              fill("green")
            else
              fill("red");
    
            display_position+=30;
            textSize(25);
            text(allContestants[cst].name + ": " + allContestants[cst].answer, 320,display_position)
          }
        }
      }
    }