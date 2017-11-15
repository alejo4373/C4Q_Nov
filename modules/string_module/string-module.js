const firstChar = (str) => str[0];
const reverse = (str) => str.split('').reverse().join('');
const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

module.exports = {
    fistChar: firstChar,
    reverse: reverse,
    capitalize: capitalize
}
