/*class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}*/
class Synth {
  var osc2;
  constructor(ac, osc1, osc2) {
    //var ac = new AudioContext();
    console.log(this, this.ac);
    var osc1 = ac.createOscillator();
    osc2 = ac.createOscillator();
    var osc1Gain = ac.createGain();
    var osc2Gain = ac.createGain();
    var gainMix = ac.createGain();
    var waveTypes = ['sine', 'triangle', 'sawtooth', 'square'];
    var tune = osc2.frequency.value;
    
    var waveType = waveTypes[(Math.random()*4).toFixed(0)];
    
    osc1.connect(osc1Gain);
    osc1.type = waveType;
    osc1.frequency.value = 220;

    osc2.connect(osc2Gain);
    osc2.type = waveType;
    osc2.frequency.value = 220;

    osc1Gain.gain.value = 0.5;
    osc2Gain.gain.value = 0.5;
    
  }
  
  get tune(){
      return osc2.frequency.value;
  }
  
  /*set tune(frequency) {
    this.osc2.frequency.value = frequency;
  }*/
  
  start() {
    osc1.start();
    osc2.start();
  }
  
  connect(nod) {
    this.osc1Gain.connect(nod);
    this.osc2Gain.connect(nod);
  }
}
