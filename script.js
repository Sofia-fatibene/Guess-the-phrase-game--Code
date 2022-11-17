let phrases = ('fox in a box, cat, dog')
let curPhrase;
let guess;
let wrongGuesses;
let timer = 0;
let timerStart = 0;
let seconds;
let screen = 1;
let button;


 function  drawScreen () {
	 if (screen == 1) { 
 		background (145, 177, 230);
  	textSize(50);
		button = createButton('Click to see the instructions');
		button.size(400,60)
    button.position(480, 210);
   button.mousePressed(startGame);
		
     } else if (screen == 2 ){
		background (145, 177, 230);
 		fill (252,252,252);
		rect (0,0, 700, 700);   
  	fill (0);
			 textStyle (BOLDITALIC)
  	textSize(50);
    text("Instructions",60, 80);
		fill (0);
  	textSize(40);
    text("-Guess letters from keyboard", 40, 200);
		fill (0);
  	textSize(40);
    text("-Use hints if you need it",40, 300);
		
		
			 // CREATE START BUTTON
	  button = createButton('EASY');
		button.size(400,60)
  	button.position(800, 100);
	  let col = color(96, 227, 25);
    button.style('background-color', col);
  	button.mousePressed(restartGame);
			 
			 button = createButton('MEDIUM');
		button.size(400,60)
  	button.position(800, 200);
			 let hello = color(227, 126, 25);
    button.style('background-color', hello);
			 
			 button = createButton('HARD');
		button.size(400,60)
  	button.position(800, 300);
			 let hi = color( 237, 26, 26);
    button.style('background-color', hi)
			
			 
			 
  } else if (screen == 3) {
	clear();
	textSize(50);
	text(guess, 50, 400);

  textSize (20)
	text(wrongGuesses, 100, 30);
		fill(255, 0, 0)
	
	textSize(50);
	text(guess, 750, 400);
		
		textSize(20);
  timer = int(millis()/ 1000 - timerStart);     // counts up from the start time (0)
	
	fill(24);
  fill(0);
  text ("Timer: " + timer, 630, 40);			// display timer
	
	square(900,50, 300);

	line(85, 10000000, 670, 2);
	
		loadImage('download.jpeg', img => {
    image(img, 150, 50, 300, 300);
	})
	
		} else if (screen == 5){  
    	screen = 1;
  } 
		 
}
function startGame () {

	screen = 2
	
	
}
function restartGame () {
	
	screen = 3
	
}

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
	
	selectRandomPhrase();
	let div = createDiv;{
		
	
	}
}
function mousePressed() {
  removeElements(); // this will remove the div and p, not canvas
}


String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
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
function draw() {
	drawScreen ();
	
	
	
}

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
  }
}
}
function mouseClicked() {
  timerStart = millis() / 1000; // restarts timer by setting start time to the current time
}
