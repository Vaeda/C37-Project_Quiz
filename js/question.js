class Question {

    constructor() {
      this.input1 = createInput("Name");
      this.input2 = createInput("Your Answer");
      this.button = createButton("Submit");
    }
    hide(){
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
    }
  
    display(){
      var title = createElement('h1')
      title.html("My Quiz Game");
      title.position(350, 0);

      var question = createElement('h2');
      question.html("Question: What is full of holes but still holds water?");
      question.position(200, 50);

      var option1 = createElement('h3');
      option1.html("1. A Bucket");
      option1.position(250, 90);
      var option2 = createElement('h3');
      option2.html("2. A Sponge");
      option2.position(250, 120);
      var option3 = createElement('h3');
      option3.html("3. A Broom");
      option3.position(250, 150);
      var option4 = createElement('h3');
      option4.html("4. A Pocket");
      option4.position(250, 180);
  
      this.input1.position(250, 320);
      this.input2.position(450, 320);
      this.button.position(400, 370);
  
        this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        title.hide();
        contestant.name = this.input1.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
  
    }
  }