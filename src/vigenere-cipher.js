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
    this.direct = direct; // default value is direct encryption
  }

  isUpperCase(letter) {
    var l = letter.charCodeAt(0);
    if (l > 64 && l < 91) {
      return true;
    } else {
      return false;
    }
  }
  isLowerCase(letter) {
    let l = letter.charCodeAt(0);
    if (l > 96 && l < 123) {
      return true;
    } else {
      return false;
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let encrypted = '';
    for (var i = 0, j = 0; i < message.length; i++, j++) {
      let currentLetter = message[i];
      const A = 65;
      const a = 97;
      if (this.isUpperCase(currentLetter)) {
        // message letter code
        let mCode = currentLetter.charCodeAt(0) - A;

        // key letter code
        let kCode = key[j % key.length].toUpperCase().charCodeAt() - A;

        // encode = (text letter number + key letter number) mod 26
        let letter = (mCode + kCode) % 26;

        // convert into alphabets(ASCII)
        letter += 'A'.charCodeAt(0);

        encrypted += String.fromCharCode(letter);
      } else if (this.isLowerCase(currentLetter)) {
        let mCode = currentLetter.charCodeAt() - 97;
        let kCode = key[j % key.length].toLowerCase().charCodeAt() - 97;

        let letter = (mCode + kCode) % 26;
        letter += 'a'.charCodeAt(0);

        encrypted += String.fromCharCode(letter);
      } else {
        encrypted += currentLetter;
        j--;
      }
    }

    if (this.direct === true) {
      return encrypted.toUpperCase();
    } else { // reversed
      return encrypted.toUpperCase().split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let decrypted = '';
    for (var i = 0, j = 0; i < encryptedMessage.length; i++, j++) {
      let currentLetter = encryptedMessage[i];
      const A = 65;
      const a = 97;
      if (this.isUpperCase(currentLetter)) {
        let Pi = currentLetter.charCodeAt(0) - A;
        let Ki = key[j % key.length].toUpperCase().charCodeAt() - A;

         // decode = (encoded letter number - key letter number) mod 26
        let letter = (Pi - Ki + 26) % 26;
        letter += 'A'.charCodeAt(0);

        decrypted += String.fromCharCode(letter);
      } else if (this.isLowerCase(currentLetter)) {
        let Pi = currentLetter.charCodeAt() - 97;
        let Ki = key[j % key.length].toLowerCase().charCodeAt() - 97;

        let letter = (Pi - Ki + 26) % 26;
        letter += 'a'.charCodeAt(0);

        decrypted += String.fromCharCode(letter);
      } else {
        decrypted += currentLetter;
        j--;
      }
    }

    if (this.direct === true) {
      return decrypted;
    } else { // reversed
      return decrypted.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
