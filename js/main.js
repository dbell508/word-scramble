// GLOBAL VARIABLES
var message = document.getElementById('message');
var wordy = document.getElementById('wordy');
var results = document.getElementById('results');
var scoreHolder = document.getElementById('score');
var sBtn = document.getElementById('sBtn');

var myArr = ['border', 'boxer', 'carpet', 'driver', 'elephant', 'wrench', 'sofa', 'helmet', 'treadmill', 'blanket', 'bridge', 'television', 'video','belt', 'clock'];
window.onload = sWord;
var randomWord;
var score = 0;

scoreHolder.innerHTML = score;


// Generate random word
function sWord(){
	var w = myArr[Math.floor(Math.random()*myArr.length)];
	randomWord = w;
	w = w.toLowerCase();
	var s = '';
	var wLength = w.length;

	for(var i = 0; i < wLength; i++){
		var x = Math.floor(Math.random()*w.length);
		s += w[x];
		w = w.substr(0,x) + w.substr(x+1);
	}

	message.innerHTML = 'See how many words you can unscramble!<br><br>Score:';
	s = s.toUpperCase();
	wordy.innerText = s;
}

// Collect Users Guess - Check to see if correct
function rGuess(){
	var guess = document.getElementById('myString').value;
	if(guess.toLowerCase() == randomWord.toLowerCase()){
		results.innerHTML = 'CORRECT!<br><h2>+1</h2>';
		scorePoint();
	} else {
		results.innerHTML = 'WRONG!';
	}
	sWord();
	console.log(guess);
}

function scorePoint(){
	score++;
	if(score < 10){
		score = '0'+score;
	}
	scoreHolder.innerHTML = score;
}

