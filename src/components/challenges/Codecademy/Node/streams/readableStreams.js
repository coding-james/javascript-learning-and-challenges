import readline from 'readline';
import fs from 'fs';

const myInterface = readline.createInterface({input: fs.createReadStream("shoppingList.txt")});

const printData = (data) => {
  console.log(`Item: ${data}`);  
};

myInterface.on('line', printData);