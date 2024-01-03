import { shopForBeans, soakTheBeans, cookTheBeans } from './library.js';

// Write your code below:
async function makeBeans() {
    const type = await shopForBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans(isSoft);
    console.log(dinner);
}

makeBeans();