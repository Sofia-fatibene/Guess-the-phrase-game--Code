	  		function preload() {
	buttonSound = loadSound("zapsplat_multimedia_beep_two_tone_basic_87433.mp3")//button noise
	winnerSound = loadSound("Winner!.mp3")//when you get a word/phrase correct
	readySound = loadSound("Naruto - The Rising Fighting Spirit (mp3cut.net).mp3")// backround music during game
	loserSound = loadSound("mixkit-retro-arcade-game-over-470.wav")//sound when you lose

}

// Create a class Button 
   class Button {
	constructor(text = "Button1") {
		this.Text = text
		this.x = 10;				this.y = 20;
		this.width = 5;		this.height = 3;
		this.R = 0;		this.G = 0;		this.B = 0;
		this.OnR = 220; this.OnG = 120;	this.OnB = 120;
		this.TextColor = 255
		this.TextSize = 2.5
		this.Border = 0.5
	}
	//Set color, Position and dimension
	SetColorOn(r, g, b) {
		this.OnR = r
		this.OnG = g
		this.OnB = b
  }
	
	SetColor(r,g,b) {
		this.R = r
		this.G = g
		this.B = b
  }
	
	SetPos(x, y){
		this.x = x
		this.y = y
	}
	
	SetDim(w, h){
		this.width = w
		this.height = h
	}
	  
	IsClicked() {
  	if (mouseIsPressed && this.mouseIsOver() ) {
   		return true;
  	} else {
    	return false;
		}
	}
	   // when the mouse is over the buttons they slittelly cange colors
	mouseIsOver()  {
 		let wx = windowWidth/100; let wy = windowHeight/100;
   	if (mouseX >= wx*this.x && mouseX <= wx*(this.x+this.width) && mouseY >= wy*this.y && mouseY <= wy*(this.y+this.height)) {
    	return true;
  	} else {
    	return false;
  	}
	}
	    // darw some text and positionating it with % so that even if you have a bigger screen it has the same proportion 
	Draw() {
		let wx = windowWidth/100; let wy = windowHeight/100;
		if(this.mouseIsOver()){
			fill(this.R+20, this.G+20, this.B+20)
		} else {
			fill(this.R, this.G, this.B)
		}
		rect(this.x*wx, this.y*wy, this.width*wx, this.height*wy)
		textSize(this.TextSize*wy); 
		fill(this.TextColor)
		text(this.Text, wx*(this.x+this.Border), wy*(this.y+this.TextSize+this.Border))
	}
	
} 

// End Class Button
// Create a game class
class Game {
	
	constructor() {
		this.screen = 0;
		this.Level = 1;
		this.phrase = null
	  this.letter = " "
		this.NumGet = 0
		this.NumErr = 0
		this.Stars = 3
		this.active = true
		
	}
	    // Draw screens 
	DrawScreen() {
			if(this.screen == 0){ // main
				this.ScreenZero();
			} else if(this.screen == 1)  {// istructions
				this.ScreenOne();				
			} else if(this.screen == 2)  {// level
				this.ScreenTwo();				
			} else if(this.screen == 3)  {// ready? go!
				this.ScreenThree();				
			} else if(this.screen == 4)  {// game
				this.ScreenFour();				
			} else if(this.screen == 5)  {// You guessed a word
				this.ScreenFive();				
			} else if(this.screen == 6)  {// You lost a star
				this.ScreenSix();				
			} else if(this.screen == 7)  {// Game Over
				this.ScreenSeven();				
			} else { // Undefined screen
				print("screen undefined");
				this.screen = 0;
			}
	}
	
	   // First screen, start game
	ScreenZero() {
 		let wx = windowWidth/250; let wy = windowHeight/250;
	
		fill(0)
		rect(8*wx, 10*wy,430,50)
		textSize(10*wy); 
		fill(252)
		textStyle (BOLDITALIC)
		text("Guess the phrase game", 8*wx, 19*wy)
		
		   // Set some buttons 
		let B1 = new Button("Instructions")
		B1.SetPos(10, 20)
		B1.SetDim(11,4)
		B1.Draw()
		if(B1.IsClicked()){
			this.screen = 1 // Information
	buttonSound.play();
		}
		
		let B2 = new Button("Levels")
		B2.SetPos(10, 30)
		B2.SetDim(11,4)
		B2.Draw()
		if(B2.IsClicked()){
			this.screen = 2 // Level
				buttonSound.play();
		}
	  let B3 = new Button("Start Game")
		B3.SetPos(10, 40)
		B3.SetDim(11,4)
		B3.Draw()
		if(B3.IsClicked()){
			this.screen = 3 // Game
				buttonSound.play();
		}
		
	}
	
	  //Screen one where there are instructions 
ScreenOne() {
	  background (110, 65, 65)
			function preload() {
					let img;
  img = loadImage('dog.jpg');
  image(img, 10, 10, 50, 50);
}
 		let wx = windowWidth/100; let wy = windowHeight/100;
		let line = 16
		textSize(6*wy); 
		fill(255)
		text("Instructions", 10*wx, 10*wy)
		textSize(4*wy); 
		fill(255)
		text("-To play in 1° grade mode you can click the button 'Start Game' or in the button 'Level'.", 10*wx, line*wy); line += 8;
		text("-You have 3 stars, you can loose them but not gain them.", 10*wx, line*wy); line += 8;
		text("-If you can't guess a word\phrase you can press the button 'Use Hint' and a hint will appear on the console ", 10*wx, line*wy); line += 8;
			text("to help you. ", 10.5*wx, line*wy); line += 8;
	  text("-You can use the hint button for every word\phrase but you will lose one star.", 10*wx, line*wy); line += 8;
	  text("-To start the game you can hold the Emoji button to make a emoji to have a starting clue on the word/phrase.", 10*wx, line*wy); line += 8;
	  text("-To loose a star you have to get 6 letters wrong", 10*wx, line*wy); line += 8;
		let B = new Button("Done")
		B.SetPos(30, 80)
		B.SetDim(15,5)
		B.Draw()
		if(B.IsClicked()){
			this.screen = 0
				buttonSound.play();
		}
	}
	
      // Screen Two for the levels. 
	ScreenTwo() {
		background (250, 249, 190)
 		let wx = windowWidth/100; let wy = windowHeight/100;
		textSize(4*wy); 
		fill(79, 40, 42)
		text("Levels", 5*wx, 5*wy)
		let B1 = new Button("First grade 📖")
				B1.SetPos(30, 20)
		B1.SetDim(11,4)
		B1.Draw()
		if(B1.IsClicked()){
			this.Level = 1
			this.screen = 3
				buttonSound.play();
		}
		let B2 = new Button("Regular 📚 ")
				B2.SetPos(30, 30)
		B2.SetDim(11,4)
		B2.Draw()
		if(B2.IsClicked()){
			this.Level = 2
			this.screen = 3
				buttonSound.play();
		}
		let B3 = new Button("Hard 📝 ")
				B3.SetPos(30, 40)
		B3.SetDim(11,4)
		B3.Draw()
		if(B3.IsClicked()){
			this.Level = 3
			this.screen = 3
				buttonSound.play();
		}
	}
	   
	   //Screen three, one of the ways to start the game for 1°graders if they don't go to the level setting 
	ScreenThree() {
		//background (79, 40, 42)
		 background(90, 20, 70);

  var color1 = color(255, 204, 102);
  var color2 = color(255, 0, 0);
  var color3 = color(100, 30, 230);
		
    setGradient(30, 30, 1430, 590, color1, color2, "Y");

		function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") { // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == "X") { // Left to right gradient
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y + h);
    }
  }

}
	 	let wx = windowWidth/100; let wy = windowHeight/100;
		textSize(8*wy); 
		fill(252, 250, 189)
		text("Are you ready?", 25*wx, 20*wy)
		let B = new Button("Ok, let's go!")
		B.SetPos(30, 40)
		B.SetDim(11,4)
		B.Draw()
		if(B.IsClicked()){
					readySound.loop ();
			if(this.Level == 1){
				    // Set algorithm to randomly pick a phrase 
				let num = PhrasesG1.length
				let index = int(random(num))
				this.phrase = PhrasesG1[index]
			} else if (this.Level == 2) {
				let num = PhrasesReg.length
				let index = int(random(num))
				this.phrase = PhrasesReg[index]
			} else if (this.Level == 3) {
				let num = PhrasesHard.length
				let index = int(random(num))
				this.phrase = PhrasesHard[index]
			}
			this.screen = 4
		}
		this.letter = " "
		   // Number of letters guessed 
		this.NumGet = 0
		   //Number of letters guessed wrong
		this.NumErr = 0
		this.active = true
		key=-1
	}
	
		 // Set the square to cover the word\phrase 
	Respond() {
		  if(this.phrase == null) {
				print("Phrase undefined")
				return "";
			}
		  let r = ""
		  let w = this.phrase.word
			this.NumGet = 0
		  for(let i=0; i< w.length; i++){
				let c = w[i]
				let p = this.letter.indexOf(c);
				if (p == -1) {
					r = r + "🤔"
				} else {
						r = r + c
					  this.NumGet += 1
						if(this.NumGet == w.length) {
							this.screen = 5 
							readySound.stop ()
						}
			  }
			}
			return r;
	}

	
    // Screen four is where you enter the game and set the method KeyIsPressed 
	ScreenFour() {
		background (252, 250, 189)
		
	 	let wx = windowWidth/100; let wy = windowHeight/100;
		textSize(4*wy); 
		fill(99, 51, 53)
		text("Screen 4", 5*wx, 5*wy)
		textSize(5*wy); 
		fill(99, 51, 53);
		let get = this.NumGet
		let r = ":"
		if(this.KeyIsPressed()){
    	r = this.Respond();
			if(get == this.NumGet){
				  // Set how to loose Stars or guess a word
			   this.NumErr += 1
				if(this.NumErr == 6){
				   this.Stars -= 1
					if (this.Stars == 0) {
						this.screen = 7
						return
											readySound.stop ()
					}
					this.screen = 6
					return
										readySound.stop ()
				}
			}
		} else {
    	r = this.Respond();
		}
		  // Set a text for Errors, Stars and Guesses
		fill (99, 51, 53)
		text( r , 5*wx, 15*wy);
		text( "❌ Errors = " + this.NumErr , 10*wx, 90*wy);
		text( "🌟 Stars = " + this.Stars , 10*wx, 70*wy);
		text( "❔ Guesses = " + this.letter , 35*wx, 90*wy);
		
	  let B = new Button("Quit Game") // return to levels
		B.SetPos(10, 30)
		B.SetDim(11,4)
		B.Draw()
		if(B.IsClicked()){
			this.screen = 0
			readySound.stop ()
		}
		let B1 = new Button("Use Hint")//hint on console
		B1.SetPos(10, 50)
		B1.SetDim(11,4)
		B1.Draw()
		if(B1.IsClicked()){
			print (this.phrase.hint)
				//hintSound.play();
		} 
		if (B1.IsClicked() && this.active) {
			this.Stars = this.Stars -1
			this.active = false
		} 
			let B4 = new Button("Emoji")//emoji starting hint
		B4.SetPos(10, 40)
		B4.SetDim(11,4)
		B4.Draw()
		if(B4.IsClicked()){
		textSize(20*wy); 
		fill(252, 250, 189)
		text((this.phrase.hintimg), 50*wx, 65*wy)
			//print (this.phrase.hintimg)
				//hintSound.play();
		}
		
	}
	  // Set up the method to press a key and let the program remeber the ones who you alredy guessed 
	KeyIsPressed () {
		let k = -1
  	if(key >= 'A' && key <= 'Z') {
			k = 'a' + key - 'A';
    } else if (key >= 'a' && key <= 'z') {
			k = key
		} else {
			return false;
		}
		key=-1
		if(this.letter.indexOf(k) == -1) {
			this.letter = this.letter + k
			return true
		}
		return false
	}
    // Screen Five, winning screen 
	ScreenFive() {
		winnerSound.play();
		let img
	background (0, 255, 0	)
	 	let wx = windowWidth/100; let wy = windowHeight/100;
	
		textSize(5*wy); 
		fill(255)
		text("✨    You guessed a word/phrase! Good job! ✅         💪🤓 ✨", 5*wx, 5*wy)
		let B = new Button("Play again")
				B.SetPos(30, 40)
		B.SetDim(11,4)
		B.Draw()
		if(B.IsClicked()){
			this.screen = 3
		winnerSound.stop ()
		}
	}
     // Screen six, lose a star screen 
	ScreenSix() {
			background (99, 51, 53)
	 	let wx = windowWidth/100; let wy = windowHeight/100;
		textSize(8*wy); 
		fill(255, 255, 201)
		text("You lost a star  🌠  😓", 30*wx, 15*wy)
		let B = new Button("Play again")
				B.SetPos(30, 40)
		B.SetDim(11,4)
		B.Draw()
		if(B.IsClicked()){
			this.screen = 3
								readySound.stop ()
		}
	}
     //Game Over screen (3 possibileties)
	ScreenSeven() {
		//loserSound.play ()
		background (99, 51, 53)
	 	let wx = windowWidth/100; let wy = windowHeight/100;
		textSize(8*wy); 
		fill(255, 255, 201)
		text("Game Over  🥹", 30*wx, 15*wy)
		loserSound.play ();
		let B = new Button("Go home")
				B.SetPos(30, 40)
		B.SetDim(11,4)
		B.Draw()
		if(B.IsClicked()){
			this.screen = 0
				readySound.stop ()
		}
	}

	
}

  // Set a class fo the phrases 
class Phrase {
	constructor(w, h, hintimg) {
		this.word = w
		this.hint = h
		this.hintimg = hintimg
	}

}
		
let PhrasesG1 = [new Phrase("dog", "pet", "🐕"),  new Phrase("ball", "(in all sports)", "🔴" ), new Phrase("apple", "fruit", "🍎"), new Phrase("robot", "beep-bop-boop-beep", "🤖") ];
let PhrasesReg = [new Phrase("caterpillar", "Before a ___________ turns into a butterfly", "🐛"), new Phrase("dinasour", "Animal (extinct)", "🦖"), new Phrase("acknowledge", "accept or admit the existence or truth of.", "👍😌"), new Phrase("worldcup", "world", "⚽  🌍 🇦🇷 🇪🇸 🇵🇹 🇧🇷 🇬🇭 🇨🇦 🏴󠁧󠁢󠁥󠁮󠁧󠁿")];
let PhrasesHard = [new Phrase("ice   cream   is   a   great   way   to   be   happy", "Food and happiness", "🍦 😄"), new Phrase("the   car   is   driving   on   a   street ", "Transport", "🚗 🚥"), new Phrase("who   lives   in   a   pineapple   under   the   sea", "Spongbob", "🧽🍍🌊")]



let Main = new Game();
let urls = []
var bg;


function setup() {
	createCanvas(windowWidth, windowHeight);
	bg = loadImage("/files/user344138/visual1753198/h44e7ecc0510054e2ddd4d30d031a9089/pattern-design-art-techno-wallpaper-preview.jpg");

}


function draw() {
	clear()
	background(bg);
	Main.DrawScreen()
	
}
