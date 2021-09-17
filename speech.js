
let mic = document.getElementById("mic");
mic.addEventListener("click", ()=>{
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
//window is global object in browser
//inside window it has speechRecognition property i.e. should enable to browser detect

//create new speech instance
let recognition = new SpeechRecognition();

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

//call dom event for listening voice

recognition.addEventListener("result", e => {
  let transcript = e.results[0][0].transcript;
  p.innerHTML = transcript;
  // p.style.background = transcript;

  if(e.results[0].isFinal){
    p = document.createElement("p");
    words.appendChild(p);
  }
    
});

//continous listen voice 
// recognition.addEventListener("end", recognition.start);

//enabling mic or giving permission of mic
recognition.start();
});

