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

Sequencer.generator(CMinorScale, f).synth('SynthFM',{a:rand(0,0.2),d:0,r:rand(0,2)}).start(ac,round(rand(60,140)));
