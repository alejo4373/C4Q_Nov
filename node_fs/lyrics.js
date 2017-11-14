const fs = require('fs');

let lyrics1;
let lyrics2;

fs.writeFile('lyric1.txt', `I know that we are young,
And I know that you may love me,`, 'utf8', (err) => {
    if (err) throw err;
    console.log('Wrote file lyrics1')
})

fs.writeFile('lyric2.txt', `But I just can't be with you like this anymore,
Alejandro.`, 'utf8', (err) => {
    if (err) throw err;
    console.log('Wrote file lyrics2')
})

fs.readFile('lyrics-1.txt', 'utf-8',  (err, data) => {
    if (err) throw err;
    lyrics1 = data;

    fs.readFile('lyrics-2.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        lyrics2 = data;

        fs.writeFile('lyrics-3.txt', lyrics1 + lyrics2, 'uft8', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    });

});