var questions = [{

    question: "What was the U.S. navy's first jet that could fly faster than the speed of sound?",
    choices: [ "P-51 Mustang", "F-84F Thunderstreak", "A4-Skyhawk", "F4D-Skyray"],

correctAnswer: 3

}, { question: "what was the U.S. Navy's first jet to see commbat?",
    choices: [ "P-80-Shooting Star", "F-86-Sabre", "F-16-Falcon", "X-1"],
   
    correctAnswer: 0
   
},  { question: "what U.S. aircraft was developed before the korean war and was used to counter the Russian Mig-15?",
     choices: [ "FJ-1-Fury", "F-2H-Banshee", "F-86-Sabre", "F-104-Starfighter" ],
   
     correctAnswer: 2 

},  { question: "what U.S. aircraft had a crew of two, a top speed of mach 2.2, and was used by the Navy,Marines, and Airforce?",
     choices: ["A4-Skyhawk", "F-15-Eagle", "UH-1", "F4-Phantom"],

     correctAnswer: 3

},  { question: "What is the U.S. Navy's current main Fighter Jet?",
     choices: ["F-14-Tomcat", "F-18-Hornet", "Ah-1Z-Viper", "F4U-1d"],
     
     correctAnswer: 0 
   }];

$(document).ready(function(){



$('#start').on('click', function(){
    setupBoard()
})

function playGame(){

}
function makeRadioButtons(answerChoices, num){
    
    var choicesContainer = $('<div>');
    for(var i = 0; i < answerChoices.length; i++){
        var radioBtn = $(`<input type="radio" name="rbtnCount${num}" > ` + answerChoices[i] + '</input>');
        
        choicesContainer.append(radioBtn)
    }
  return choicesContainer 
}
function setupBoard(){
$('#start-container').remove()
var gameBoard = $('#game-container');
for(var i = 0; i < questions.length; i++){
    var currentQuestion = questions[i];
    var questionBlock = $('<div>');
    var questionStem = $('<p>');
    questionStem.text(currentQuestion.question);

    questionBlock.append(questionStem);
    var radioButtons = makeRadioButtons(currentQuestion.choices, i);
    questionBlock.append(radioButtons);
    
    
    gameBoard.append(questionBlock);
}


}

})
