var midi = null;  // global MIDIAccess object

function onMIDISuccess( midiAccess ) {
  console.log( "MIDI ready!" );
  midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
  listInputsAndOutputs( midiAccess );
  console.log('midi connected:' + midi);
}

function onMIDIFailure(msg) {
  console.log( "Failed to get MIDI access - " + msg );
}


function listInputsAndOutputs( midiAccess ) {
  for (var entry of midiAccess.inputs) {
    var input = entry[1];
    console.log( "Input port [type:'" + input.type + "'] id:'" + input.id +
      "' manufacturer:'" + input.manufacturer + "' name:'" + input.name +
      "' version:'" + input.version + "'" );
  }

  for (var entry of midiAccess.outputs) {
    var output = entry[1];
    console.log( "Output port [type:'" + output.type + "'] id:'" + output.id +
      "' manufacturer:'" + output.manufacturer + "' name:'" + output.name +
      "' version:'" + output.version + "'" );
  }
}

/*function sendMiddleC( midiAccess, portID ) {
  var noteOnMessage = [0x90, 60, 0x7f];    // note on, middle C, full velocity
  var output = midiAccess.outputs.get(portID);
  output.send( noteOnMessage );  //omitting the timestamp means send immediately.
  output.send( [0x80, 60, 0x40], window.performance.now() + 1000.0 ); // Inlined array creation- note off, middle C,                                                                      // release velocity = 64, timestamp = now + 1000ms.
}*/

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
//listInputsAndOutputs(navigator.requestMIDIAccess());
//console.log(navigator.requestMIDIAccess());
//sendMiddleC(midi, 3)

navigator.requestMIDIAccess()
  .then(function(access) {

     // Get lists of available MIDI controllers
     const inputs = access.inputs.values();
     const outputs = access.outputs.values();

     access.onstatechange = function(e) {

       // Print information about the (dis)connected MIDI controller
       console.log("d~glkdg~l"+e.port.name, e.port.manufacturer, e.port.state);
     };
  });
