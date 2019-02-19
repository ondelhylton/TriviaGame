

//Questions Array

var allQuestions = [{   
    question: "What was the first skyscraper to use stainless steel on the outside?",
    //Could not get images to display with jQuery
    image: "https://www.kitano.com/resourcefiles/snippet-main-img/empire-state-building-in-new-york-top.jpg",
    choices: ["Empire State Building", "Woolworth Building", "Chrysler Building"],
    correctAnswer: [2]
  },

  {
    question: "Who is the architect of this train station?",
    choices: ["Santiago Calatrava", "Renzo Piano", "Frank Gehry"],
    correctAnswer: [0]
  },

  {
    question: "What museum is shown designed by Frank Llyd Wright?",
    choices: ["MoMA", "The Whitney", "The Guggenheim"],
    correctAnswer: [2]
  },

  {
    question: "What is the tallest building in New York?",
    choices: ["1 WTC", "Sears Tower", "Empire State Building"],
    correctAnswer: [0]
  },

  {
    question: "What architectural style is most of Columbia University's Morningside Heights Campus?",
    choices: ["Gothic", "Modern", "Beaux-Arts", "Art Deco"],
    correctAnswer: [2]
  },


];

//Variables
var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;




//Show Questions with numbers and Radio Buttons
function theQuiz() {
    
  $('#question').html(parseInt(currentQuestion) + 1 + ". " + allQuestions[currentQuestion].question);
  var options = allQuestions[currentQuestion].choices;

  //for loop to run through questions
  
  var form = '';
  for (var i = 0; i < options.length; i++) {
    form += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      allQuestions[currentQuestion].choices[i] + '</label></div><br/>';
  }
  $('#form').html(form);
  $("#option0").prop('checked', true);
  
};


//Check Answers
function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentQuestion].correctAnswer) {
    correctAnswers++;
  };
};






//Start Game and hide start button
$(document).ready(function() {

    $(".jumbotron").hide();
    $('#start').click(function() {
      $(".jumbotron").fadeIn();
      $(this).hide();
    });



//Run Game function
theQuiz();



//Next Button
$("#next").click(function() {
    event.preventDefault();
    checkAns();
    currentQuestion++;




//Run Game - WHen to Stop and Display Score
if (currentQuestion < allQuestions.length) {
      theQuiz();

      
      
      if (currentQuestion == allQuestions.length - 1) {
        $('#next').html("Submit");
        $('#next').click(function() {
          $(".jumbotron").hide();
          $("#result").html("You got " + correctAnswers + " out of " + currentQuestion + " questions correctly ").hide()
          $("#result").fadeIn(1500)});

    
      if (currentQuestion == allQuestions.length - 1 && correctAnswers > 2) {
          $("#win-lose").html("You Won!").hide();
          $("#win-lose").fadeIn(1500);}

      
         if (currentQuestion == allQuestions.length && correctAnswers < 3) {
          $("#win-lose").html("You Lose!").hide();
          $("#win-lose").fadeIn(1500);}

        };


    };
    
});

});

