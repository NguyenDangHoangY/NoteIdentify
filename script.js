  const notes = [
    {"name": "C3", "pitch": 130.8},
    {"name": "D3", "pitch": 146.8},
    {"name": "E3", "pitch": 164.8},
    {"name": "F3", "pitch": 174.6},
    {"name": "G3", "pitch": 196.0},
    {"name": "A3", "pitch": 220.0},
    {"name": "B3", "pitch": 246.9},
    {"name": "C4", "pitch": 261.6},
    {"name": "D4", "pitch": 293.7},
    {"name": "E4", "pitch": 329.6},
    {"name": "F4", "pitch": 349.2},
    {"name": "G4", "pitch": 392.0},
    {"name": "A4", "pitch": 440.0},
    {"name": "B4", "pitch": 493.9},
    {"name": "C5", "pitch": 523.3},
    {"name": "D5", "pitch": 587.3},
    {"name": "E5", "pitch": 659.3},
    {"name": "F5", "pitch": 698.5},
    {"name": "G5", "pitch": 784.0},
    {"name": "A5", "pitch": 880.0},
    {"name": "B5", "pitch": 987.8}
  ]

  var noteToPitch = 1;

  var note;

  function randomNote(){
    note = notes[Math.floor(Math.random() * notes.length)];
    return note;
  }
  
  function changeNote(){
    if(noteToPitch) document.querySelector('#Note').innerHTML = randomNote().name;
    else document.querySelector('#Note').innerHTML = note.name;
  }; 
  
  const myArrow = document.querySelector('#arrow')
  myArrow.addEventListener('click', ()=>{
    myArrow.classList.toggle('active5');
    noteToPitch = !noteToPitch;
  })

  function changePitch(){
    if(noteToPitch){
      playNote(note.pitch, 'sine');
      playNote(note.pitch, 'square');
      playNote(note.pitch, 'triangle');
      playNote(note.pitch, 'sawtooth');
    }
    else{
      document.querySelector('#Note').innerHTML = "**";
      var pitch = randomNote().pitch;
      playNote(pitch, 'sine');
      playNote(pitch, 'square');
      playNote(pitch, 'triangle');
      playNote(pitch, 'sawtooth');
    }
  }
  
  var context=new AudioContext();
  var o=null;
  var g=null;
  function playNote(frequency, type) {
    o = context.createOscillator();
    g = context.createGain();
    o.type = type;
    o.connect(g);
    o.frequency.value = frequency;
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00009, context.currentTime + 1);
  }