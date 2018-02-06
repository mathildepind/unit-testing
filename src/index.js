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


function Developer(name,languages) {
  this.name = name;
  this.languages = languages;
}

exports.Developer = Developer;


Developer.prototype.learnLanguage = function (newLanguage){
  this.languages.push(newLanguage);
  var uniqueArray = uniqueStrings(this.languages);
  this.languages = uniqueArray;
}

exports.learnLanguage = Developer.learnLanguage;


function Garden(objectOfPlants) {
  this.plants = objectOfPlants;
}

exports.Garden = Garden;


Garden.prototype.plant = function (morePlantsObject){
  var keys = Object.keys(morePlantsObject);
  var values = Object.values(morePlantsObject);

  var gardenContent = this.plants;

  for (var i = 0; i< keys.length; i++){
    if (gardenContent.hasOwnProperty(keys[i])){
      gardenContent[keys[i]] += values[i];
    }
    else {
      gardenContent[keys[i]] = values[i];
    }
  }
}

exports.plant = Garden.plant;


Garden.prototype.harvest = function(harvestPlantsObject){
  var keys = Object.keys(harvestPlantsObject);
  var values = Object.values(harvestPlantsObject);

  var gardenContent = this.plants;
  for (var i = 0; i< keys.length; i++){

    if (gardenContent.hasOwnProperty(keys[i])){
      gardenContent[keys[i]] -= values[i];
    }
    else {
      gardenContent[keys[i]] = values[i];
    }

    if (gardenContent[keys[i]] === 0) {
      delete gardenContent[keys[i]];
    }
  }
}

exports.harvest = Garden.harvest;
