const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  _processMessage(message, key, encrypt = true) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (/[A-Z]/.test(char)) {
        const messageCharCode = char.charCodeAt(0) - 65;
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0) - 65;

        let processedCharCode;
        if (encrypt) {
          processedCharCode = (messageCharCode + keyCharCode) % 26;
        } else {
          processedCharCode = (messageCharCode - keyCharCode + 26) % 26;
        }

        result += String.fromCharCode(processedCharCode + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this._processMessage(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this._processMessage(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
