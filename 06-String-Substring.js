function solve(wordToSearch, text) {
    'use strict';

    const hasWord = text.toLowerCase().split(' ').includes(wordToSearch);

    if (hasWord) {
        console.log(wordToSearch);
    } else {
        console.log(`${wordToSearch} not found!`);
    }
}
solve('python', 'JavaScript is the best programming language')