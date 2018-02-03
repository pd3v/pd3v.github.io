

function melodyGenerator(){
  
  /*if (detune < -freqOffset) {
    timeToRunOffset = (Math.random()*299.9+0.1).toFixed(1);§
    //synth.frequency = (Math.random()*800+40).toFixed(0)
    synth.frequency = note[(Math.random()*5).toFixed(0)];
    console.log(synth.frequency);
  }*/
  counter += 1;
  if (counter >= re) {
    timeToRunOffset = (Math.random()*6).toFixed(0);
    //console.log(counter);
    re = Math.random()*4+1;
    counter = 0;
    synth.frequency = note[(Math.random()*chromScale.length).toFixed(0)]*(Math.random()*2+1).toFixed(0);
    //synth.frequency = (Math.random()*1000+40).toFixed(2);
  }
   //note[(Math.random()*note.length).toFixed(0)];
  setTimeout(melodyGenerator, beat[timeToRunOffset]*(Math.random(8)+1));
}
