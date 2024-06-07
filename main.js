x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
draw_apple = "";
apple = "";
to_number = "";
function preload(){
 apple = loadImage("apple.png");
}
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
to_number = Number(content);
 console.log(event); 
if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML = "Started drawing apple";
  draw_apple = "set";  
}else{document.getElementById("status").innerHTML = "The speech has not recognized a number."}
 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width,screen_height-150);
 canvas.position(0,150)
}

function draw() {
  if(draw_apple == "set")
  {
    for (let index = 1; index <= to_number; index++) {
      x = Math.floor(Math.random()* 700);
      y = Math.floor(Math.random()* 400);
      Image(apple, x , y, screen_width, screen_height)
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number+"Apples drawn";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
