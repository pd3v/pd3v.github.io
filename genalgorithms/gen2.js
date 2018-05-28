let bluesScale = {c:0, ds:3, f:5, fs:6, g:7, as:10};
let beat = [3,3,3,4,6,6,6,4,6,6,6];
let scaleLength = Object.values(bluesScale).length;

var ascending = true;

// generate a Blues scale's random number of ascending or descending notes
// with velocity changes for expressiveness
let f = _ => {
    ascending = !ascending;

  if (ascending) {
    return {note:countTo(scaleLength-1), vel:countTo(scaleLength-1)>=2 && countTo(scaleLength-1)<=4? 100: 39, oct:4};
  } else {
    return {note:countFrom(scaleLength-1), vel:countFrom(scaleLength-1)>=2 && countFrom(scaleLength-1)<=4? 15: 100, oct:5};
  }
}

Sequencer.generator(bluesScale, f).synth('Synth',{a:0,d:0,r:0}).start(ac,round(rand(60,120)), beat);
