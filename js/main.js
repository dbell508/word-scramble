// GLOBAL VARIABLES
var message = document.getElementById('message');
var wordy = document.getElementById('wordy');
var results = document.getElementById('results');


var myArr = ['javascript', 'hello', 'world', 'course'];
window.onload = sWord;
var randomWord;


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

	message.innerHTML = 'See how many words you can unscramble!';
	s = s.toUpperCase();
	wordy.innerText = s;
}

// Collect Users Guess - Check to see if correct
function rGuess(){
	var guess = document.getElementById('myString').value;
	if(guess.toLowerCase() == randomWord.toLowerCase()){
		results.innerHTML = 'CORRECT!';
	} else {
		results.innerHTML = 'WRONG!';
	}
	sWord();
}

