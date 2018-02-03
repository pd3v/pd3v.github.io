/*if (navigator.requestMIDIAccess) {
    console.log('Browser supports MIDI!');
}*/

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess()
        .then(success, failure);
}

function success(midi) {
  console.log("function success(midi)");
  //var inputs = midi.inputs.values();
  var outputs = midi.outputs.values();
  /*for (var input = inputs.next();
     input && !input.done;
     input = inputs.next()) {
    // each time there is a midi message call the onMIDIMessage function
    input.value.onmidimessage = onMIDIMessage;
  }*/
  
  /*for (var output = outputs.next(); output && !output.done; output = outputs.next()) {
    // each time there is a midi message call the onMIDIMessage function
    output.value.onmidimessage = onMIDIMessage;
  } 
  console.log('Got outputs:', outputs);*/
  var aaa = undefined;
  for (var entry of midi.outputs) {
    var output = entry[1];
    console.log( "Output port [type:'" + output.type + "'] id:'" + output.id +
      "' manufacturer:'" + output.manufacturer + "' name:'" + output.name +
      "' version:'" + output.version + "'" );
      aaa = output.id;
  }
  sendMiddleC(outputs, aaa);
}

function failure() {
  console.log('Not midi found');
}

function onMIDIMessage (message) {
    console.log('onMIDIMessage', message.data);
}


function sendMiddleC( midiAccess, portID ) {
  console.log(midiAccess, portID);
  var noteOnMessage = [0x90, 60, 0x7f];    // note on, middle C, full velocity
  var output = midiAccess.outputs.get(portID);
  output.send( noteOnMessage );  //omitting the timestamp means send immediately.
  output.send( [0x80, 60, 0x40], window.performance.now() + 1000.0 ); // Inlined array creation- note off, middle C,                                                                        
  // release velocity = 64, timestamp = now + 1000ms.
}

/*var input = midi.input.values();

for (var i = 0; i < 100; i++) {
  console.log(input[i]);
}*/
