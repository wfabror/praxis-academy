var _ = require('underscore');

//console.log(_);

var lyrics = [
    { line: 1, words: "I'm a lumberjack and I'm okay" },
    { line: 2, words: "I sleep all night and I work all day" },
    { line: 3, words: "He's a lumberjack and he's okay" },
    { line: 4, words: "He sleeps all night and he works all day" }
];

_.chain(lyrics)
    .map(function(line) { return line.words.split(' '); })
    .flatten()
    .reduce(function(counts, word) {
        counts[word] = (counts[word] || 0) + 1;
        return counts;
    }, {})
    .value();

//=> { lumberjack: 2, all: 4, night: 2... }

console.log(lyrics);