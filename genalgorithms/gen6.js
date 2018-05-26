const CMinorScale = {c:0, d:2, ef:3, f:5, g:7, af:8, bf:10};
const scaleLength = Object.values(CMinorScale).length;

var oc = 2;
let f = _ => {
  // oc starts with 2
  if (oc > 6) {oc = 2}
  return {
    note:countTo(scaleLength-1),
    vel:linear(100,20,round(scaleLength/3)),
    dur:8,
    oct:counter()%scaleLength == 0 ? ++oc : oc
  }
}

Sequencer.generator(CMinorScale, f).synth('SynthFM',{a:0.0,d:0,r:0.00625}).start(ac,80);
