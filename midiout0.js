/*if (navigator.requestMIDIAccess) {
    console.log('Browser supports MIDI!');
}*/
var outputMIDI;

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);
}

function success(midi) {
  console.log('function success('+midi+')');
  //var inputs = midi.inputs.values();
  //console.log('midi.outputs:'+midi.outputs);
  /*var outputs = midi.outputs.keys();
  console.log('outputs:'+outputs);*/
  
  
  /*for (var out of midi.outputs.keys()) {
      console.log('midi.outputs.key:'+out);
  }
  
  for (var out of midi.outputs.values()) {
      console.log('midi.outputs.value:'+out);
  }*/
  
  for (var out of midi.outputs.values()) {
    /*var output = entry[1];
    console.log(entry);
    console.log( "Output port [type:'" + output.type + "'] id:'" + output.id +
      "' manufacturer:'" + output.manufacturer + "' name:'" + output.name +
      "' version:'" + output.version + "'" );
      outputMIDI = entry;*/
      
      //console.log('MIDI Outputs:'+out.name+out);
      outputMIDI = out;
      break;
  }
  console.log('outputMIDI:'+outputMIDI.name);
  sendMiddleC(outputMIDI);
  sendNote(outputMIDI);
  
  var noteOnMessage = [0x90, 60, 0x7f];    // note on, middle C, full velocity
  var noteOffMessage = [0x80, 60, 0x40];    // note on, middle C, full velocity
  
  outputMIDI.send(noteOnMessage);  //omitting the timestamp means send immediately.
  outputMIDI.send(noteOffMessage, window.performance.now() + 1000.0 ); // Inlined array creation- note off, middle C,                                                                        
}

function failure() {
  console.log('No MIDI found');
}

function onMIDIMessage (message) {
    console.log('onMIDIMessage', message.data);
}


function sendNote(note) {
  //console.log("sendNote to "+Sequencer.midiout/*outputMIDI.name*/);
  
  /*Object.keys(midiAccess).forEach(function(key){
    console.log('midiAccess['+key+']='+midiAccess[key]);
  });*/
  //var output = outputMIDI.get(portID);
  var noteOnMessage = [0x90, 60, 0x7f];    // note on, middle C, full velocity
  var noteOffMessage = [0x80, 60, 0x40];    // note on, middle C, full velocity
  
  outputMIDI.send(noteOnMessage);  //omitting the timestamp means send immediately.
  outputMIDI.send(noteOffMessage, window.performance.now() + 1000.0 ); // Inlined array creation- note off, middle C,                                                                        
  // release velocity = 64, timestamp = now + 1000ms.
}

function sendMiddleC(outputMIDI) {
  console.log("sendMiddleC to "+outputMIDI.name);
  
  /*Object.keys(midiAccess).forEach(function(key){
    console.log('midiAccess['+key+']='+midiAccess[key]);
  });*/
  //var output = outputMIDI.get(portID);
  var noteOnMessage = [0x90, 60, 0x7f];    // note on, middle C, full velocity
  var noteOffMessage = [0x80, 60, 0x40];    // note on, middle C, full velocity
  
  
  outputMIDI.send(noteOnMessage);  //omitting the timestamp means send immediately.
  outputMIDI.send(noteOffMessage, window.performance.now() + 1000.0 ); // Inlined array creation- note off, middle C,                                                                        
  // release velocity = 64, timestamp = now + 1000ms.
}
