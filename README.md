# Guess-the-phrase-game--Code

let phrases = ["fox in a box", "dog at the park", "cat has a hat"];
let curPhrase;
let guess;

```
function setup () {
	// Make the drawing canvase as big as the window
	createCanvas(windowWidth, windowHeight);
	
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
	
	textSize(50);
	text(guess, 750, 400);
	
	square(150,50, 300);
	square(900,50, 300);

	line(85, 10000000, 670, 2);
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
		else {
			print("NO MATCH!");
		}
  }
}`
```
