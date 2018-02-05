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
