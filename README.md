let phrases = ["fox in a box", "dog at the park", "cat has a hat"];
let curPhrase;
let guess;
let wrongGuesses;
let timer = 0;
let timerStart = 0;
let seconds;
```
function setup () {
	// Make the drawing canvase as big as the window
	createCanvas(windowWidth, windowHeight);
	 timerStart = int(millis()/1000);

	// Set the RGB background colour
	background(250,250,250);

	
	
	
	// Set the frame rate
	frameRate(1);
	
	// initiate game
	selectRandomPhrase();
}
```

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
```
function selectRandomPhrase() {
	let index = Math.floor(random(0, phrases.length));
	print("index is ", index);
	curPhrase = phrases[index];
	guess = [];
	wrongGuesses = [];
	for(let i = 0; i < curPhrase.length; i++) {
		guess.push(curPhrase[i] == " " ? " " : "_"); 
		print(i, guess[i]);
	}
}
```
```
function draw() {
	clear();
	textSize(50);
	text(guess, 50, 400);

	textSize (20)
	text(wrongGuesses, 100, 30);
		fill(255, 0, 0)
	
	textSize(50);
	text(guess, 750, 400);
	
	square(900,50, 300);

	line(85, 10000000, 670, 2);
	
	loadImage('images.jpeg', img => {
    image(img, 150, 50, 300, 300);
  });
 
	
	textSize(20);
  timer = int(millis()/ 1000 - timerStart);     // counts up from the start time (0)
	
	fill(24);
  fill(0);
  text ("Timer: " + timer, 630, 40);			// display timer
	
	
	
}
```

```
function keyPressed() {
	// print("key pressed is", key);
  if (key >= 'a' && key <= 'z') { 
		print("You guessed", key);
		
		// Find all instances of key in curPhrase
		let result = [];
		for(var i=0; i < curPhrase.length; i++) {
    	if (curPhrase[i] === key) {
				result.push(i);
				guess[i] = key;
			}
		}
		
		
// Check results for matches
		if (result.length > 0) {
			// we found a match
			print("Found matches at indices", result);
		}
		else if (wrongGuesses.includes(key)) {
			print("you already guessed that");
		}
		else {
		wrongGuesses.push(key);
				print("NO MATCH!");
	```			```
  }
}
}
function mouseClicked() {
  timerStart = millis() / 1000; // restarts timer by setting start time to the current time
}
```
