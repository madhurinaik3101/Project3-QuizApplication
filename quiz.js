var YourAnswers=[];
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;
var container = document.getElementById('quizContainer');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var viewButton= document.getElementById('viewButton');
var answers = document.getElementById('answers');

function loadQuestion (questionIndex) {
	var ques = questions[questionIndex];
	document.getElementById('question').textContent = (questionIndex + 1) + '. ' + ques.question;
	opt1.textContent = ques.option1;
	opt2.textContent = ques.option2;
	opt3.textContent = ques.option3;
	opt4.textContent = ques.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	var answer = selectedOption.value;
	var optionname= selectedOption.name + answer.toString();
	var selectedOptionName='';
	if(optionname=='option1'){
		selectedOptionName= questions[currentQuestion].option1;
	}
	else if(optionname=='option2'){
		selectedOptionName= questions[currentQuestion].option2;
	}
	else if(optionname=='option3'){
		selectedOptionName= questions[currentQuestion].option3;
	}
	else if(optionname=='option4'){
		selectedOptionName= questions[currentQuestion].option4;
	}
	else{
		selectedOptionName= 'Invalid';
	}
	
	YourAnswers.push(selectedOptionName);

	if(questions[currentQuestion].answer == answer){
		score += 1;
	}

	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totalQuestions - 1){
		nextButton.textContent = 'Finish';
	}

	if(currentQuestion == totalQuestions){
		reviewAnswers();
	}

	loadQuestion(currentQuestion);
};

 loadQuestion(currentQuestion);

function displayResults(){
	container.style.display = 'none';
	answers.style.display='block';

}

function reviewAnswers(){
	container.style.display = 'none';
	document.getElementById('answers').style.display='none';
	document.getElementById('review').style.display='block';
	document.getElementById('score1').textContent= `Your Score:${score}/5`;

	
}

function displayMyAnswer1(){
	document.getElementById('your_answer1').innerHTML = YourAnswers[0];
}

function displayMyAnswer2(){
	document.getElementById('your_answer2').innerHTML = YourAnswers[1];
}

function displayMyAnswer3(){
	document.getElementById('your_answer3').innerHTML = YourAnswers[2];
}

function displayMyAnswer4(){
	document.getElementById('your_answer4').innerHTML = YourAnswers[3];
}

function displayMyAnswer5(){
	document.getElementById('your_answer5').innerHTML = YourAnswers[4];
}
