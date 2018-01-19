var ac = new AudioContext();


for (var i=0; i<100; i++) {
    var osc = ac.createOscillator();
    osc.gain.value = 0.8; 
    osc.connect(ac.destination);
}
