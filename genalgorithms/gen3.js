let bluesScale = {c:0, ds:3, f:5, fs:6, g:7, as:10};
let pattern = [3,3,3,8,8,16,16,4,8];
let scaleLength = Object.values(bluesScale).length;

var noteInc = 0;
let f = _ => {
  const d = round(rand(1,4));

  if (counter()%12 <= 6) {
    return {note:(noteInc++)%scaleLength,vel:100,dur:d,oct:3};
  } else {
    return {note:Sequencer.counter%scaleLength,vel:100, dur:d,oct:4};
  }
}

Sequencer.generator(bluesScale, f).synth('Synth').start(ac, round(rand(80, 140)));
