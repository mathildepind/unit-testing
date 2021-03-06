const functions = require('../src/index.js');

test('Addition', function(){
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toBe(expected);
});


test('longestString',function(){
  const result = functions.longestString(['a', 'bb', 'ccc', 'dddd', 'eeeee']);
  const expected = 'eeeee';
  expect(result).toBe(expected);
})

test("l337", function(){
  const result1 = functions.l337("izeasgt");
  const expected1 = "1234567";
  const result2 = functions.l337("lybqo");
  const expected2 = "17890";
  expect(result1).toBe(expected1);
  expect(result2).toBe(expected2);
})

test('uniqueStrings', function(){
  const result1 = functions.uniqueStrings(['a', 'bb', 'ccc', 'dddd', 'eeeee']);
  const expected = ['a', 'bb', 'ccc', 'dddd', 'eeeee'];
  const result2 = functions.uniqueStrings(['a', 'bb', 'ccc', 'dddd', 'eeeee', 'ccc']);
  expect(result1).toEqual(expected);
  expect(result2).toEqual(expected);
})

test("developer", function(){
  var expected = {name: "Bob", languages: ["Java", "HTML"],};
  var result = new functions.Developer("Bob", ["Java", "HTML"]);
  expect(result).toEqual(expected);

})

test("learnLanguage", function(){
  var expected = {name: "Bob", languages: ["Java", "HTML", "CSS"],};
  var dev = new functions.Developer("Bob", ["Java", "HTML"]);
  dev.learnLanguage("CSS");
  var result = dev;
  expect(result).toEqual(expected);
})

test("garden", function(){
  var expected = {plants: {"rose":3, "dandelion": 9, "oak": 1, "begonia": 4,},};
  var result = new functions.Garden({"rose":3, "dandelion": 9, "oak": 1, "begonia": 4,});
  expect(result).toEqual(expected);
})

test("plant", function(){
    var expected = {plants: {"rose":5, "dandelion": 9, "oak": 1, "begonia": 4, "snowdrop":19,},};
    var gardenStock = new functions.Garden({"rose":3, "dandelion": 9, "oak": 1, "begonia": 4,});
    gardenStock.plant({"snowdrop":19, "rose" : 2});
    var result = gardenStock;
    expect(result).toEqual(expected);
})

test("harvest", function(){
  var expected = {plants: {"rose":3, "dandelion": 6, "oak": 1,},};
  var gardenStock = new functions.Garden(
    {
      "rose":3,
      "dandelion": 9,
      "oak": 1,
      "begonia": 4,
    }
  );
  gardenStock.harvest({"begonia" : 4, "dandelion" : 3,});
  var result = gardenStock;
  console.log(result);
  expect(result).toEqual(expected);
})


test("stringsConcat",function(){
  var result = functions.stringsConcat(['a', 'bb', 12, 'ccc', 'dddd', [4], 'eeeee']);
  var expected = 'abbcccddddeeeee';
  expect(result).toEqual(expected);
})

test("negativeOnly", function(){
  var result = functions.negativeOnly([-2, 5, -5, 2, -8, 20, -345, -3, 3000]);
  var expected = [-2, -5, -8, -345, -3];
  expect(result).toEqual(expected);
})

test("camelise", function(){
  var result = functions.camelise('camel this string');
  var expected = 'camelThisString';
  expect(result).toEqual(expected);
})

test("merging", function(){
  var result = functions.merging([{a: 5}, {a: 3, b: 21, c:32}]);
  var expected = {a:5, b:21, c:32};
  expect(result).toEqual(expected);
})

test("possibleValues",function(){
  var result = functions.possibleValues([{a: 5}, {a: 3, b: 21, c:32}, {a: 3, c:32}]);
  var expected = {a:[5,3], b:[21], c:[32]};
  expect(result).toEqual(expected);
})

test("isPrime", function(){
  var result1 = functions.isPrime(89);
  var expected1 = true;
  var result2 = functions.isPrime(12);
  var expected2 = false;
  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
})

test("Walker", function() {
  var expected = {direction: "E", coordinates: [0,0],};
  var result = new functions.Walker("E");
  expect(result).toEqual(expected);
})

test("walk", function(){
  var expected = {direction: "S", coordinates:[0, -3], journeyHistory:[[0,0], [0,-3]],};
  var person = new functions.Walker("E");
  person.walk("S", 3);
  expect(person).toEqual(expected);
})

test("pathTaken", function(){
  var expected = [[0,0],[0,-3],[4,-3],[4,-8],[2,-8],[2,-7]];
  var person = new functions.Walker("E");
  person.walk("S", 3);
  person.walk("E", 4);
  person.walk("S", 5);
  person.walk("W", 2);
  person.walk("N", 1);
  expect(person.journeyHistory).toEqual(expected);
})
