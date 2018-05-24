/*let genAlgorithms = [];

//***** Algo #1 *****
let i = 0;

genAlgorithms[i] = _ => {
  let bluesScale = {c:0, ds:3, f:5, fs:6, g:7, as:10};
  //let pattern = [3,3,3,8,8,16,16,4,8];
  let scaleLength = Object.values(bluesScale).length;

  var ascending = true;

  // generate a Blues scale's random number of ascending or descending notes
  // with velocity changes for expressiveness
  let f = _ => {
    let scaleIndex = Sequencer.counter%scaleLength;
    if (scaleIndex*Math.random().toFixed(0) == 0) {
      ascending = !ascending;
    }

    if (ascending) {
      return {note:scaleIndex, vel:scaleIndex>=2 && scaleIndex<=4? 127: 39, oct:4};
    } else {
      return {note:scaleLength-scaleIndex-1, vel:scaleLength-scaleIndex-1>=2 && scaleLength-scaleIndex-1<=4? 15: 127, oct:5};
    }

    return {note:3,vel:120,dur:4,oct:3}

    // {
    //   note:phrasing[noteIndex], // randoms note from phrasing
    //   vel:127*(1-((noteIndex+1)/(phrasing.length))*0.5), // the smaller the phrasing higher the note's velocity
    //   dur:round((2**(phrasing.length))), // the bigger the phrasing shorter the note's duration
    //   oct:Math.trunc(scaleTo(0,5,2,5,round(phrasing.reduce((accum, value)=>{
    //     accum += value;
    //     return accum;
    //   })/phrasing.length))) // averages the phrasing content
    // }
  }

  // Sequencer.generator(bluesScale, f).synth('Synth').start(120, pattern);
}

genAlgorithms[++i] = _ => {
  const CMinorScale = {c:0, d:2, ef:3, f:5, g:7, af:8, bf:10};
  const scaleLength = Object.values(CMinorScale).length;

  // function composition is using Markov Chains
  const composition = scale => {
    let composition = [];
    let phrasings = {};

  	for (let i = 0; i < 20; i++){
      composition.push(round(rand(0,Object.keys(scale).length-1)));
  	}

    for (let j = 0; j < composition.length-1; j++) {
      if (!phrasings[composition[j]]) {
        phrasings[composition[j]]=[];
      }
      phrasings[composition[j]].push(composition[j+1]);
    }
    return {phrasings, scale};
  }

  let compositionObj;
  f = _ => {
    let phrasing;
    let note;
    let noteIndex;

    // Every 25 notes generate new phrasings
    if (counter()%25 == 0) {
        compositionObj = composition(CMinorScale);
    }

    phrasing = compositionObj.phrasings[(Object.keys(compositionObj.phrasings))[countTo(Object.keys(compositionObj.phrasings).length-1)]];
    noteIndex = round(rand(0,phrasing.length-1));
    return {
      note:phrasing[noteIndex], // randoms note from phrasing
      vel:127*(1-((noteIndex+1)/(phrasing.length))*0.5), // the smaller the phrasing higher the note's velocity
      dur:round((2**(phrasing.length))), // the bigger the phrasing shorter the note's duration
      oct:Math.trunc(scaleTo(0,5,2,5,round(phrasing.reduce((accum, value)=>{
        accum += value;
        return accum;
      })/phrasing.length))) // averages the phrasing content
    }
  }
}
*/

let bluesScale = {c:0, ds:3, f:5, fs:6, g:7, as:10};
let beat = [3,3,3,4,6,6,6,4,6,6,6];
let scaleLength = Object.values(bluesScale).length;

var ascending = true;

// generate a Blues scale's random number of ascending or descending notes
// with velocity changes for expressiveness
let f = _ => {
  if (round(rand(0, countTo(scaleLength-1))) == 0) {
    ascending = !ascending;
  }

  if (ascending) {
    return {note:countTo(scaleLength-1), vel:countTo(scaleLength-1)>=2 && countTo(scaleLength-1)<=4? 100: 39, oct:4};
  } else {
    return {note:countFrom(scaleLength-1), vel:countFrom(scaleLength-1)>=2 && countFrom(scaleLength-1)<=4? 15: 100, oct:5};
  }
}

Sequencer.generator(bluesScale, f).synth('Synth',{a:0,d:0,r:1}).start(ac,round(rand(60,120)), beat);
