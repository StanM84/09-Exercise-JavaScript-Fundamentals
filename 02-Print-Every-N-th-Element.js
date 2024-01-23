function solve(inputArray, step){
    'use strict';

    const result = [];

    for (let i = 0; i < inputArray.length; i += step) {
        result.push(inputArray[i]);
    }

    return result;
}
console.log(solve(['dsa','asd', 'test', 'tset'], 2))