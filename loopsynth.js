var counter = 0;
let waveTypes = ['sine', 'triangle', 'sawtooth', 'square'];
let chromScale = [0, 261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88, 523.25];
let beat = {32: 125, 16: 250, 8: 500, 3: 333, 4: 1000, 2: 2000, 1: 4000}
//let note;// = chromScale[(Math.random()*(chromScale.length)).toFixed(0)];

var AudioContext = window.AudioContext || window.webkitAudioContext;
var ac = new AudioContext();

function playIt(){
  let note = chromScale[(Math.random()*(chromScale.length)).toFixed(0)];
  let octave = ((Math.random()*4)+1).toFixed(0); 
  
  if (note == null || note < 40) {note = 329.63;}
  //console.log('playIt', note);
  let asynth = ac.createOscillator(); //eval('new '+Sequencer.sType);
  asynth.type = 'sawtooth';
  asynth.frequency.value = note*octave;
  //asynth.adsr = [0.0, 0.0, (beat[Sequencer.spattern[counter%Sequencer.spattern.length]]/1000)/(Sequencer.sbpm/60), 0.01];

  asynth.connect(analyser);    
  asynth.connect(ac.destination);

  asynth.start(ac.currentTime);
  asynth.stop(ac.currentTime+0.05);
  //asynth.disconnect(ac.currentTime+0.05);
  
  //asynth = null;
  setTimeout(playIt, ((ac.currentTime+0.5)/1000)+40);
}
