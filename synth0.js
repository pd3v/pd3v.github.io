class Synth {
  constructor(ac, adsr=[0.05, 0, 0.05, 0.05]) {    
    this.osc = ac.createOscillator();
    this.vector = ac.createOscillator();
    this.oscGain = ac.createGain();
    this.vectorGain = ac.createGain();
    this.mixGain = ac.createGain();
    
    this.oscGain.gain.setValueAtTime(0, 0.5); 
    this.vectorGain.gain.setValueAtTime(0, 0.5);
    this.mixGain.gain.setValueAtTime(0, 0.99)
    
    this.freq = ac.AudioParam;
    this.currentTime = ac.currentTime;
    //Synth.timer = 0;
    this.freqOffset = 3;
    this.incDec = 1;
  }
  
  get gain(){
      return this.oscGain.gain.value;
  }
  
  set gain(gain) {
      this.oscGain.gain.value = gain; 
      this.vectorGain.gain.value = gain; 
  }
  
  get frequency(){
      return this.osc.frequency.value;
  }
  
  set frequency(frequency) {
    console.log('frequency:' + frequency);
    this.osc.frequency.setValueAtTime(frequency, 0);
    this.vector.frequency.setValueAtTime(frequency, 0);
  }
  
  get detune() {
      return this.vector.frequency.value.toFixed(2);
  }
  
  set detune(frequency) {
      this.vector.frequency.setValueAtTime(0, frequency);
  }
  
  get type(){
      return this.osc.type;
  }
  
  set type(type) {
    console.log('type:' + type);
    this.osc.type = type;
    this.vector.type = type;
  }
  
  /*get timer() {
    return Synth.timer;
  }
  
  set timer(cur) {
    Synth.timer += 10;
  }*/
  
  /*get freqOffset() {
    return this.freqOffset;
  }
  
  set freqOffset(offset) {
    this.freqOffset = 3;
  }
  
  get incDec() {
    return this.incDec;
  }
  
  set incDec(value) {
    this.incDec = 1;
  }*/
  
  
  
  static detuner() {
    if (this.detune > this.freqOffset) {
      this.incDec = -1;
    } else if (this.detune < -this.freqOffset){
      this.incDec = 1;
    }
    this.detune += 1 * this.incDec;
    //synth.detune += this.detune;
    synth.detune = 0.2;
    //console.log(typeof(synth.detune), typeof(this.detune)); 
    
    if (this.detune < -3) {
      timeToRunOffset = (Math.random()*299.9+0.1).toFixed(1);
    }
    setTimeout(Synth.detuner, timeToRunOffset);
  }
  
  playNote(gain, duration){
    console.log('this.currentTime:'+this.currentTime+' and Synth.timer:'+Synth.timer);
    
    //this.start();
    
    //duration = 0.05;
    //this.oscGain.gain.setValueAtTime(0.0, this.currentTime);
    //this.vectorGain.gain.setValueAtTime(0.0, this.currentTime);
    //this.oscGain.gain.linearRampToValueAtTime(0.0, this.currentTime);
    //this.vectorGain.gain.linearRampToValueAtTime(0.0, this.currentTime);
    
    /*this.oscGain.gain.linearRampToValueAtTime(gain, Synth.timer+duration);
    this.vectorGain.gain.linearRampToValueAtTime(gain, Synth.timer+duration);
    this.oscGain.gain.linearRampToValueAtTime(0.0, Synth.timer+duration+0.05);
    this.vectorGain.gain.linearRampToValueAtTime(0.0, Synth.timer+duration+0.05);*/
    
    this.osc.start(this.currentTime);
    this.osc.start(this.currentTime);
    
    
    //Synth.timer += this.currentTime+duration+0.05;
  }
  
  sus(gain){
    //console.log('sus');
    this.oscGain.gain.setValueAtTime(gain, this.currentTime);
    this.vectorGain.gain.setValueAtTime(gain, this.currentTime)
    /*this.oscGain.gain.linearRampToValueAtTime(1, 0.05);
    this.vectorGain.gain.linearRampToValueAtTime(1, 0.05);*/
    this.oscGain.gain.linearRampToValueAtTime(0.0, this.currentTime+0.05);
    this.vectorGain.gain.linearRampToValueAtTime(0.0, this.currentTime+0.05);
    
  }
  
  start(duration=0.0) {
    console.log('start At: ' + (this.currentTime).toFixed(2));
    //this.osc.connect(this.oscGain);
    //this.vector.connect(this.vectorGain);
    this.osc.start();
    this.vector.start();
    //this.oscGain.gain.setValueAtTime(0.0, this.currentTime);
    //this.vectorGain.gain.setValueAtTime(0.0, this.currentTime);
    //this.osc.stop(this.currentTime+duration+0.05);
    //this.vector.stop(this.currentTime+duration+0.05);
    //this.osc.disconnect();
    //this.vector.disconnect();
    
    //Synth.detuner();
    
    //this.sustain();
  }
  
  connect(destination) {
    this.osc.connect(this.oscGain);
    this.vector.connect(this.vectorGain);
    this.oscGain.connect(this.mixGain);
    this.vectorGain.connect(this.mixGain);
    this.mixGain.connect(destination);
  }
  
  stop(duration=10.0) {
    console.log('stop At:' + (this.currentTime+duration+0.05).toFixed(2));
    this.osc.stop(this.currentTime+duration+0.05);
    this.vector.stop(this.currentTime+duration+0.05);
  }
}
