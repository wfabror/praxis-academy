const isEven = (num) => {
    return num % 2 === 0
}

const num = [1, 2, 3, 4, 5, 6];
const evenNum = num.filter(isEven);
console.log(evenNum);

const capitalizeWord = (word) => {
    return word[0].toUpperCase + word.slice(1, word.length);
}

const sentece = "You there. I am Batman";
const upperCasedSentence = sentece.split(' ').map(capitalizeWord);

console.log(upperCasedSentence);