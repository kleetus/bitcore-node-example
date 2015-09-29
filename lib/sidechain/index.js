var util = require('util');
var Service = require('../../node_modules/bitcore-node/lib/service');


function SideChain(options) {

}

SideChain.dependencies = ['bitcoind'];
util.inherits(SideChain, Service);

SideChain.prototype.start = function(callback) {
  callback();
}


SideChain.prototype.stop = function(callback) {
  callback();
}

module.exports = SideChain;

