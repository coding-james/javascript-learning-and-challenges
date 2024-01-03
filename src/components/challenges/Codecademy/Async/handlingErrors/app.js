import { cookBeanSouffle } from './library.js';

// Write your code below:
async function hostDinnerParty() {
    try {
        let success = await cookBeanSouffle();
        console.log(`${success} is served!`);
    } catch (error) {
        console.log(error);
        console.log("Ordering a pizza!");
    }
}

for (let index = 0; index < 5; index++) {
    console.log("\n");
    await hostDinnerParty();
}