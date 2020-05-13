const maskTypes = {
    mac: {
        pattern: /[a-f0-9]$/i,
        delimiter: ':',
        length: 15
    },
    phone: {
        pattern: /\d[\+\-\(\)]/,
        delimiter: '-',
        length: 10
    }
}


//module.exports = 
export function validator(mask, character) {
    switch (mask) {
        case 'mac':
            const regExp = new RegExp(maskTypes.mac.pattern);
            return regExp.test(character);
        default:
            return null;
    }
}