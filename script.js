$(document).ready(function(){

  $("#answer").hide();

var magic8Ball = {};

magic8Ball.listOfAnswers = ["Ask again later",
"Don’t count on it", "Totally", "Not feelin' it", "Improbable", "Yep"];


magic8Ball.giveAnswer =function(question){

	var randomNumber = Math.random();
	var randomArray = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomArray);
	var answer = this.listOfAnswers[randomIndex];

  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

	$("#answer").text( answer );
  $("#answer").fadeIn(4000);

  }

//Ask me a question button
magic8Ball.askQuestion = function (){
      $("#answer").hide();
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
      setTimeout(function() {
        prompt("What is your question?");
        $("#8ball").effect("shake");
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        magic8Ball.giveAnswer();
       }, 500);
			};
    $("#questionButton").click(magic8Ball.askQuestion);

  });
