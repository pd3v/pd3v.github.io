class Synth {
  constructor(ac) {    
    this.osc = ac.createOscillator();
    this.adsrEnv = [0.01, 0, 1, 0.4];
  }
  
  get type() {
      return this.osc.type;
  }
  
  set type(type) {
    this.osc.type = type;
  }
  
  get frequency() {
      return this.osc.frequency.value;
  }
  
  set frequency(frequency) {
    this.osc.frequency.setValueAtTime(frequency, 0);
  }
  
  get adsr() {
    return this.adsrEnv;
  }
  
  set adsr(value) {
    this.adsrEnv = value;
  }
  
  set frequency(frequency) {
    this.osc.frequency.setValueAtTime(frequency, 0);
  }

  connect(destination) {
    this.osc.connect(destination);
  }
  
  start(time=0) {
    this.osc.start(time);
  }
  
  stop(time=0) {
    this.osc.stop(time);
  }
}
