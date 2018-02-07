class Generator {
  constructor(notesScale={'c':'60'}, genFunc) {    
    Generator.gCounter = 0;
    Generator.gScale = notesScale;
    
    Generator.gGenFunc = genFunc;
    console.log('constructor genFunc:'+Generator.gGenFunc);
  }
  
  get scale() {
    return Generator.gScale;
  }
  
  static set scale(value) {
    Generator.gScale = value;
  }
  
  static MIDINoteToFreq(midiNote) {
    return (2**((midiNote-69.0)/12))*440.0; 
  }
  
  get note() {
    return Generator.note();
  }
  
  static set note(value) {
    Generator.gGenFunc = genFunc;
    this.gNote = value;
  }
  
  static note(){
    console.log('Gen func:'+Generator.gGenFunc, Generator.gScale.c);
    function gen(x){
      return function(y){
        //console.log((Generator.gCounter % Generator.gScale.length)+'%'+y+'='+(Generator.gCounter % Generator.gScale.length)%y);
        /*if  (x % y == 0) {
          console.log('Entrou:'+(Generator.gCounter % Generator.gScale.length)+'%'+y+'='+(Generator.gCounter % Generator.gScale.length)%y+'---'+x);
          return x;
        }
        console.log((Generator.gCounter % Generator.gScale.length)+'%'+y+'='+(Generator.gCounter % Generator.gScale.length)%y);
        return 0;*/
        //console.log(x+'['+y+']');
        console.log('x['+y()+']');
        return eval('x['+y()+']');
        return 100;
      };
    }
  
    //var chosenNote = gen(Generator.gScale);
    
    //console.log(chosenNote);
    //evenNotes(3);
    
    // default algorithm to generate notes - random diatonic notes
    //let note = Generator.gScale[(Math.random()*(Generator.gScale.length-1)).toFixed(0)];
    
    //let note = Generator.gScale[evenNotes(1)];//Generator.gScale;
    
    let octave = ((Math.random()*6)+1).toFixed(0)*12; 
    
    let midiNote = parseInt(Object.values(Generator.gScale)[(Math.random()*(Object.keys(Generator.gScale).length-1)).toFixed(0)]) + octave; 
    let note = Generator.MIDINoteToFreq(midiNote); //chosenNote(Generator.gGenFunc);//Generator.gScale.filter(n => n<300);//Generator.gScale;
    
    //console.log(octave, midiNote, note);
    
    if (note == null || note <= 40) {
      console.log('silence');
      note = 0;
    }
    
    Generator.gCounter++;
    
    return note;
  }
}
