class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
        this.abc = new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 65 + i ) );
      }
      encrypt(mess, k) {
        if (!mess || !k) throw new Error();
        return this.cryptFunc('encrypt', mess, k);
      }
    
      decrypt(message, key) {
        if (!message || !key) throw new Error();
        return this.cryptFunc('decrypt', message, key);
      }
    
      getLongKey(message, key) {
        return key.length >= message.length ? key.toUpperCase().split('') : this.getLongKey(message, key + key)
      }
    
      cryptFunc(str, message, key) {
        const longKey = this.getLongKey(message, key);
        message = message.toUpperCase().split('');
        const spaces = [];
        message = message.map((el, i) => {
          if(el === ' ') {
            spaces.push(i);
            message.splice(i+1, 0);
            return null;
          }
          return el;
        }).filter(a => a);
        const currentMessage = message.reduce((acc, letter, i) => {
          if(this.abc.indexOf(letter) >= 0) {
            const mI = this.abc.indexOf(letter);
            const kI = this.abc.indexOf(longKey[i]);
            if (str === 'decrypt') {
              const common = mI - kI;
              common < 0 ? acc.push(this.abc[common+this.abc.length]) : acc.push(this.abc[common]);
            } else if (str === 'encrypt') {
              const common = mI + kI;
              common >= this.abc.length ? acc.push(this.abc[common-this.abc.length]) : acc.push(this.abc[common]);
            }
          } else acc.push(letter);
          return acc;
        }, []);
        spaces.forEach(el => {
          currentMessage.splice(el, 0, ' ');
        });
    
        return this.direct ? currentMessage.join('') : currentMessage.reverse().join('');
      }
    
}

module.exports = VigenereCipheringMachine;


 