const Block = require('./block.js');

const block = new Block('7657', '123QWE123', '098POI098', '100');
console.log(block.toString());
console.log(Block.genesis().toString());

const primeiroBloco = Block.mineBlock(Block.genesis(), '$500');
console.log(primeiroBloco.toString());