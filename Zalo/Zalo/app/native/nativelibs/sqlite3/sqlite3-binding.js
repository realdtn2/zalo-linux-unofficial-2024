var BINARY_PATH = `./binding/napi-v6-${process.platform}-${process.arch}/node_sqlite3.node`;
console.debug('BINARY_PATH', BINARY_PATH);
var binding = require(BINARY_PATH);
module.exports = exports = binding;
