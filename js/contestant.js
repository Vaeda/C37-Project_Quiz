class Contestant {
    constructor(){
      this.index = null;
      this.answer = "2";
      this.name = null;
      //this.input1 = createInput("Name");
      //this.input2 = createInput("Your Answer");
      //this.button = createButton("Submit");
    }
    /*hide(){
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
      }*/
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
      /*display(){
        //this.input1.position(250, 320);
        //this.input2.position(450, 320);
        this.button.position(100, 100);

        this.button.mousePressed(()=>{
            //this.input1.hide();
            //this.input2.hide();
            this.button.hide();
            //title.hide();
            //contestant.name = this.input1.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
          });
      }*/
    }