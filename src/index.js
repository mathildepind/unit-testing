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


function stringsConcat(arrayOfThings){
  var outputArr = [];

  arrayOfThings.forEach(function(item){
    if (typeof item === "string"){
      outputArr.push(item);
    }
  })
  return outputArr.join("");
}

exports.stringsConcat = stringsConcat;

function negativeOnly(arrayOfNumbers){
  return arrayOfNumbers.filter(number => number < 0);
}

exports.negativeOnly = negativeOnly;

function camelise(string){
  var arrayFromStr = string.split(" ");
  for (var i = 1; i< arrayFromStr.length; i++){
    var firstCap = arrayFromStr[i].charAt(0).toUpperCase();
    arrayFromStr[i] = firstCap + arrayFromStr[i].substring(1);
  }

  return arrayFromStr.join("");

}

exports.camelise = camelise;

function merging(arrayOfObjects){
  var outputObject = {};
  for (var arrayIterator = 0; arrayIterator<arrayOfObjects.length; arrayIterator++){ // Each will be an object
    var keys = Object.keys(arrayOfObjects[arrayIterator]);
    for (var keysIterator = 0; keysIterator<keys.length; keysIterator++){
      var incomingValue = arrayOfObjects[arrayIterator][keys[keysIterator]]; // value of each matching key in an object


      if (outputObject.hasOwnProperty([keys[keysIterator]])){
        var existingValue = outputObject[keys[keysIterator]];

        if (incomingValue > existingValue){
          outputObject[keys[keysIterator]] = incomingValue;
        }
      }
      else {
        outputObject[keys[keysIterator]] = incomingValue;

      }
    }
  }
  return outputObject;
}

exports.merging = merging;

function possibleValues(arrayOfObjects){
  var outputObject = {};
  for (var arrayIterator = 0; arrayIterator<arrayOfObjects.length; arrayIterator++){ // Each will be an object
    var keys = Object.keys(arrayOfObjects[arrayIterator]);
    for (var keysIterator = 0; keysIterator<keys.length; keysIterator++){
      var incomingValue = arrayOfObjects[arrayIterator][keys[keysIterator]]; // value of each matching key in an object


      if (outputObject.hasOwnProperty([keys[keysIterator]])){
        var existingValue = outputObject[keys[keysIterator]];
        existingValue.push(incomingValue);
        var unique = new Set(existingValue);
        var uniqueArr = Array.from(unique);
        outputObject[keys[keysIterator]] = uniqueArr;
      }
      else {
        outputObject[keys[keysIterator]] = [incomingValue];

      }
    }
  }
  return outputObject;
}

exports.possibleValues = possibleValues;


function isPrime(number){
  var square = Math.floor(Math.sqrt(number));
  for (var i = 2; i<=square; i++){
    if (number%i === 0) {
      return false;
    }
  }
  return true;
}

exports.isPrime = isPrime;


function Walker(direction) {
  this.direction = direction;
  this.coordinates = [0,0];
}

exports.Walker = Walker;


Walker.prototype.walk = function(direction,numberOfSteps){
  this.journeyHistory = [];
  this.direction = direction;
  if (direction === 'S') {
    this.coordinates[1] = this.coordinates[1]-numberOfSteps;
  } else if (direction === 'N') {
    this.coordinates[1] = this.coordinates[1]+numberOfSteps;
  } else if (direction === 'E') {
    this.coordinates[0] = this.coordinates[0]+numberOfSteps;
  } else if (direction === 'W') {
    this.coordinates[0] = this.coordinates[0]-numberOfSteps;
  }
  this.journeyHistory.push(this.coordinates);
}
