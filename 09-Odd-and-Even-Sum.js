function solve(inputNum) {
    'use strict';

    let oddSum = 0;
    let evenSum = 0;

    while (inputNum > 0) {
        const currentNUm = inputNum % 10;

        if (currentNUm % 2 === 0) {
             evenSum += currentNUm;
        } else {
            oddSum += currentNUm;
        }
        inputNum = Math.floor(inputNum / 10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}

solve( 3495892137259234)