let validator = require('./validator');


const arr = ['a', 'bgh', 'wrq', 'wzx', 'wae', 10, 'fawrg', 'ADGG', 'FWca', 'IF'];

try {
    for (let i=0, j=1; i <= 9; i++, j++) {
        if(validator('mac', arr[i]) == true) {
            console.log(`${j}. PASS ${arr[i]}`);
        }else {
            console.log(`${j}. FAIL ${arr[i]}`);
        }
    }
} catch (error) {
    console.log(error);
}