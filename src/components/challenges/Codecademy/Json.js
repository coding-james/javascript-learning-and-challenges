const jsonData = '{ "parent": { "name": "Sally", "age": 45, "children" : [ { "name": "Kim", "age": 3 }, { "name": "Lee", "age": 1 } ] } }';

// Access children and log to console
const jsObject = JSON.parse(jsonData);
console.log(jsObject.parent.children);

// Update parent age to 35, convert back to json and log to console.
// console.log(jsObject.parent.age);
jsObject.parent.age = 35;
// console.log(jsObject.parent.age);
const jsObjectToJson = JSON.stringify(jsObject);
console.log(jsObjectToJson);