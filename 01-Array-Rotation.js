function solve(inputArray, number) {
    'use strict';

    for (let i = 0; i < number; i++){
        const firstElement = inputArray.shift();
        inputArray.push(firstElement);
    }
    console.log(inputArray.join(' '));
}
solve([51, 47, 32, 61, 21], 2)