'use strict';
const common = require('../common');
const N = 2;

function cb() {
  throw new Error();
}

for (let i = 0; i < N; ++i) {
  process.nextTick(common.mustCall(cb));
}

process.on('uncaughtException', common.mustCall(function() {}, N));

process.on('exit', function() {
  process.removeAllListeners('uncaughtException');
});
