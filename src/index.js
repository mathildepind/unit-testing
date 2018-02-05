function add(a, b){
  return a + b;
}

exports.add = add;


function longestString(arrayOfStrings) {
  var output = "";

  arrayOfStrings.forEach(function(word){
    if (word.length > output.length){
      output = word;
    }
  }

  );

  return output;
}

exports.longestString = longestString;

function l337(string) {
  var arrayFromString = string.split('');

  for (let i=0; i<arrayFromString.length; i++){
    switch(arrayFromString[i]) {
      case `i`:
      case 'l':
        arrayFromString[i] = '1';
        break;
      case 'z':
        arrayFromString[i] = '2';
        break;
      case 'e':
        arrayFromString[i] = '3';
        break;
      case 'a':
        arrayFromString[i] = '4';
        break;
      case 's':
        arrayFromString[i] = '5';
        break;
      case 'g':
        arrayFromString[i] = '6';
        break;
      case 't':
      case 'y':
        arrayFromString[i] = '7';
        break;
      case 'b':
        arrayFromString[i] = '8';
        break;
      case 'q':
        arrayFromString[i] = '9';
        break;
      case 'o':
        arrayFromString[i] = '0';
        break;
    }
  }
  return arrayFromString.join('');
}

exports.l337 = l337;

function uniqueStrings(arrayOfStrings){
  var uniqueSet = new Set (arrayOfStrings);
  return Array.from(uniqueSet);
}

exports.uniqueStrings = uniqueStrings;
