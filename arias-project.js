let today = new Date();
let currentSecond;
currentSecond1= today.getSeconds();
currentSecond2= today.getSeconds();
currentSecond3= today.getSeconds();

function startTime(){

  let today = new Date();
  setTimeout(function(){startTime()},1000);
  let seconds1= today.getSeconds();
  let seconds2= today.getSeconds();
  let seconds3= today.getSeconds();
  
  // intervals...........................................................
  
  var halt = document.getElementById("halt-seconds-intervals").value;
  halt = Number(halt);

  if (halt == ""){
    document.getElementById("intervals").innerHTML="";
  }

  //////////////////////////////////////////////////////////////
  if ((seconds1-currentSecond1)% halt == 0){
    currentSecond1 = seconds1;
    console.log(seconds1);
    console.log(currentSecond1);

    let randomNum= Math.random()*12 +1;
    randomNum = Math.floor(randomNum);

    let interval;

    switch (randomNum){
      case 1:
        interval= "Minor second";
        break;
      case 2:
        interval = "Major second"
        break;
      case 3:
        interval = "Minor third"
        break;
      case 4:
        interval = "Major third"
        break;
      case 5:
        interval = "Perfect fourth"
        break;
      case 6:
        interval = "Trirone"
        break;
      case 7:
        interval = "Minor six"
        break;
      case 8:
        interval = "perfect fifth"
        break;
      case 9:
        interval = "Major six"
        break;
      case 10:
        interval = "Minor seventh"
        break;
      case 11:
        interval = "Major seventh"
        break;
      case 12:
        interval = "Octave"
        break;

    }

    document.getElementById("intervals").innerHTML = interval;
  }

  // chords .........................................................

  var haltCH = document.getElementById("halt-seconds-chords").value;
  haltCH = Number(haltCH);

  if (haltCH == ""){
    document.getElementById("chords").innerHTML="";
  }



  if ((seconds2-currentSecond2)% haltCH == 0){
    currentSecond2 = seconds2;
    console.log(seconds2);
    console.log(currentSecond2);

    let randomNumCH= Math.random()*60 +1;
    randomNumCH = Math.floor(randomNumCH);

    let chord;

    switch (randomNumCH){
      case 1:
        chord= "A Major";
        break;
      case 2:
        chord = "Ab Major"
        break;
      case 3:
        chord = "B Major"
        break;
      case 4:
        chord = "A# Major"
        break;
      case 5:
        chord = "C Major"
        break;
      case 6:
        chord = "D Major"
        break;
      case 7:
        chord = "C# Major"
        break;
      case 8:
        chord = "E Major"
        break;
      case 9:
        chord = "D# Major"
        break;
      case 10:
        chord = "F Major"
        break;
      case 11:
        chord = "G Major"
        break;
      case 12:
        chord = "F# Major"
        break;
        case 13:
          chord= "A Minor";
          break;
        case 14:
          chord = "Ab Minor"
          break;
        case 15:
          chord = "B Minor"
          break;
        case 16:
          chord = "A# Minor"
          break;
        case 17:
          chord = "C Minor"
          break;
        case 18:
          chord = "D Minor"
          break;
        case 19:
          chord = "D# Minor"
          break;
        case 20:
          chord = "E Minor"
          break;
        case 21:
          chord = "D# Minor"
          break;
        case 22:
          chord = "F Minor"
          break;
        case 23:
          chord = "G Minor"
          break;
        case 24:
          chord = "F# Minor"
          break;
          case 25:
            chord= "A Seventh";
            break;
          case 26:
            chord = "Ab Seventh"
            break;
          case 27:
            chord = "B Seventh"
            break;
          case 28:
            chord = "A# Seventh"
            break;
          case 29:
            chord = "C Seventh"
            break;
          case 30:
            chord = "D Seventh"
            break;
          case 31:
            chord = "C# Seventh"
            break;
          case 32:
            chord = "E Seventh"
            break;
          case 33:
            chord = "D# Seventh"
            break;
          case 34:
            chord = "F Seventh"
            break;
          case 35:
            chord = "G Seventh"
            break;
          case 36:
            chord = "F# Seventh"
            break;
            case 37:
              chord= "A Augmented";
              break;
            case 38:
              chord = "Ab Augmented"
              break;
            case 39:
              chord = "B Augmented"
              break;
            case 40:
              chord = "A# Augmented"
              break;
            case 41:
              chord = "C Augmented"
              break;
            case 42:
              chord = "D Augmented"
              break;
            case 43:
              chord = "C# Augmented"
              break;
            case 44:
              chord = "E Augmented"
              break;
            case 45:
              chord = "D# Augmented"
              break;
            case 46:
              chord = "F Augmented"
              break;
            case 47:
              chord = "G Augmented"
              break;
            case 48:
              chord = "F# Augmented"
              break;
              case 49:
                chord= "A Diminished";
                break;
              case 50:
                chord = "Ab Diminished"
                break;
              case 51:
                chord = "B Diminished"
                break;
              case 52:
                chord = "A# Diminished"
                break;
              case 53:
                chord = "C Diminished"
                break;
              case 54:
                chord = "D Diminished"
                break;
              case 55:
                chord = "C# Diminished"
                break;
              case 56:
                chord = "E Diminished"
                break;
              case 57:
                chord = "D# Diminished"
                break;
              case 58:
                chord = "F Diminished"
                break;
              case 59:
                chord = "G Diminished"
                break;
              case 60:
                chord = "F# Diminished"
                break;
    }

    document.getElementById("chords").innerHTML = chord;
  }

  // scales ....................................................
  
  var haltSC = document.getElementById("halt-seconds-scales").value;
  haltSC = Number(haltSC);

  if (haltSC == ""){
    document.getElementById("scale").innerHTML="";
  }

  /////////////////////////////////////////////////////////

  if ((seconds3-currentSecond3)% haltSC == 0){
    currentSecond3 = seconds3;
    console.log(seconds3);
    console.log(currentSecond3);

    let randomNumSC= Math.random()*11 +1;
    randomNumSC = Math.floor(randomNumSC);

    let scale;

    switch (randomNumSC){
      case 1:
        scale= "Lydian mode";
        break;
      case 2:
        scale = "Phrygian mode"
        break;
      case 3:
        scale = "Ionian mode"
        break;
      case 4:
        scale = "Mixolydian mode"
        break;
      case 5:
        scale = "Dorian mode"
        break;
      case 6:
        scale = "Pentatonic scale"
        break;
      case 7:
        scale = "Chromatic scale"
        break;
      case 8:
        scale = "Harmonic Major scale"
        break;
      case 9:
        scale = "Harmonic Minor scale"
        break;
      case 10:
        scale = "Natrual Minor scale"
        break;
      case 11:
        scale = "Melodic Minor scale"
        break;
    }

    document.getElementById("scale").innerHTML = scale;
  }

}


