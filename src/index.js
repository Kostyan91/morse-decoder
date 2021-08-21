const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.split('**********');
            
    let value = arr.map(function(decode) {
    const l = decode.length / 10;
    let decodeMessage = '';
    
    for (let i = 0; i < l; i++) {
    let value = '';
    for (let j = i * 10; j < i * 10 + 10; j += 2) {
    if (decode[j] + decode[j + 1] === '10') {
        value += '.';
    } else if (decode[j] + decode[j + 1] === '11') {
        value += '-';
    }
    }
    decodeMessage += MORSE_TABLE[value];
    value = '';
    }
    return decodeMessage;
    });
    
    let result = value.join(' ');
    return (result);
}


module.exports = {
    decode
}