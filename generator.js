class Generator {
  constructor(notesScale={'c':'60'}, genFunc) {    
    Generator.gCounter = 0;
    Generator.gScale = notesScale;
    Generator.gGenFunc = genFunc;
    console.log('constructor genFunc:'+Generator.gGenFunc);
    
    /*Object.assign(Array.prototype, {
      unique() {
        return this.filter((value, index, array) => {
          //return array.indexOf(value) === index;
          return array.indexO f(value) === index;
        });
      }
    });*/
    
    
    Object.assign(Array.prototype, {
      transforme(){
        console.log(f);
        //return 64;
        //return this.find(f).map(m);
      }
    });
  }

  get scale() {
    console.log('get scale()');
    return Generator.gScale;
  }
  
  static set scale(value) {
    Generator.gScale = value;
  }
  
  static MIDINoteToFreq(midiNote) {
    return (2**((midiNote-69.0)/12))*440.0; 
  }
  
  /*static transforme(f) {
    return 45;
  }*/
  
  /*static find(closure){
    console.log(Object.values(Generator.gScale).find(closure));
    return Object.values(Generator.gScale).find(closure);
  }
  
  static map(closure){
    //console.log(Object.values(Generator.gScale).find(value).map(value));
    //return Object.values(Generator.gScale).map(value);
    return Generator.find(closure);
    //Object.values(Generator.gScale).map(value);
  }*/
  
  get note() {
    return Generator.note();
  }
  
  /*static set note(value) {
    Generator.gGenFunc = genFunc;
    this.gNote = value;
  }*/
  
  static note(){
    //console.log('Gen func:'+Generator.gGenFunc, Generator.gScale.c);
    /*function gen(x){
      //return function(y){
        
        //console.log('f:'+x);
        //return x;
        //return eval('x['+y()+']');
      
        //Object.values(x)[(Math.random()*(Object.keys(x).length-1)).toFixed(0)];
        //let g = n => n>=10;
        //console.log(Object.values(Generator.gScale));
        var n = Object.values(Generator.gScale).filter(x).map(n=>parseInt(n)+48); 
        
        //var no = n[(Math.random()*(Object.keys(n).length-1)).toFixed(0)];
        n = n[0]
        console.log('n:'+n);
        return n;
      //};
    }*/
  
    //var chosenNote = gen(Generator.gScale);
    //console.log(chosenNote(function(x){return x;}));
    //evenNotes(3);
    
    // default algorithm to generate notes - random diatonic notes
    //let note = Generator.gScale[(Math.random()*(Generator.gScale.length-1)).toFixed(0)];
    
    //let note = Generator.gScale[evenNotes(1)];//Generator.gScale;
    
    let octave = ((Math.random()*6)+1).toFixed(0)*24; 
    
    //let midiNote = parseInt(Object.values(Generator.gScale)[(Math.random()*(Object.keys(Generator.gScale).length-1)).toFixed(0)]) + octave; 
    
    /*let midiNote = Object.values(Generator.gScale).filter(Generator.gGenFunc).map(n=>{
      if (Generator.gCounter%10 == 0) {
        return parseInt(n+octave);
      } else if (Generator.gCounter%4 == 0 && Generator.gCounter%6 == 0) {
        return parseInt(Math.abs(90-n-Generator.gCounter%100));
      } else {
        return n+36;
      }
    });*/
    /*let note = 0;
    if (midiNote.length > 0) {
      note = Generator.MIDINoteToFreq(midiNote[(Math.random()*(Object.keys(Generator.gScale).length-1)).toFixed(0)]);
    } else {
      note = Generator.MIDINoteToFreq(midiNote);
    }*/
    //let midiNote = Object.values(Generator.gScale).transforme(Generator.gGenFunc);
    
    let fu = Generator.gGenFunc()
    let midiNote = Object.values(Generator.gScale)[fu.note]+(parseInt(fu.octave)*12);
    let note = Generator.MIDINoteToFreq(midiNote);
    //let note = Generator.MIDINoteToFreq(midiNote[0])+octave;
    //let note = 100;
    //console.log(octave, midiNote, note);
    
    if (note == null || note <= 40) { note = 0; }
    
    Generator.gCounter++;
    
    return note;
  }
}
