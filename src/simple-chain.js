const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 * const res = checkForThrowingErrors.call(this, [
                () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0),
                () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'),
                () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2),
                () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
            ], 'You can\'t remove incorrect link!');
  
 * chainMaker.addLink(1).addLink(2).addLink(3).finishChain() => '( 1 )~~( 2 )~~( 3 )'

  chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() => '( 2 )~~( 3 )'

  chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() => '( 2 )~~( 1 )~~( 3 )'
 */
const chainMaker = {
  chain: [],

  getLength() {
    if (this.chain) return this.chain.length;
    return 0;
  },
  addLink(value) {
    typeof value === 'undefined' ? this.chain.push(`'(  )'`) : this.chain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || typeof position !== 'number' ||  !!(position % 1)) {
      this.chain = [];
      throw new Error ('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1)
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishChain = this.chain.join(`~~`)
    this.chain = [];
    return finishChain;
  },
};

module.exports = {
  chainMaker,
};