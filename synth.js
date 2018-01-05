class Synth {
  constructor(ac) {    
    this.osc = ac.createOscillator();
    this.vector = ac.createOscillator();
    this.oscGain = ac.createGain();
    this.vectorGain = ac.createGain();
    this.mixGain = ac.createGain();
  }
  
  get frequency(){
      return this.osc.frequency.value;
  }
  
  set frequency(frequency) {
      this.osc.frequency.value = frequency; 
      this.vector.frequency.value = frequency; 
  }
  
  get detune() {
      return this.vector.frequency.value;
  }
  
  set detune(frequency) {
      this.vector.frequency.value = frequency; 
  }
  
  get type(){
      return this.osc.type;
  }
  
  set type(type) {
    this.osc.type = type;
    this.vector.type = type;
  }
  
  start() {
    this.oscGain.gain.value = 0.5; 
    this.vectorGain.gain.value = 0.5; 
    this.mixGain.gain.value = 0.99;
    this.osc.start();
    this.vector.start();
  }
  
  connect(destination) {
    this.osc.connect(this.oscGain);
    this.vector.connect(this.vectorGain);
    this.oscGain.connect(this.mixGain);
    this.vectorGain.connect(this.mixGain);
    this.mixGain.connect(destination);
  }
}
