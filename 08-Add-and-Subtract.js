function solve(num1, num2, num3) {
    'use strict';

    const sum = (first, second) => first + second;
    const substract = (first, second) => first - second;
           
    const result = substract(sum(num1, num2), num3); 

    console.log(result);
}

solve(23, 6, 10)