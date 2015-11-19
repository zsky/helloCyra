function A (next) {
    console.log('A', this);
    next();
}
function B (next) {
    console.log('B', this);
    next();
}
function C (next) {
    console.log('C', this);
    next();
}

var seq = [A, B, C];
var ctx = {
    mm: 'hs'
}

function sequence (seq, ctx) {
  console.log('sequence', seq[0]);
  var funs = seq.reverse();
  var noop = function () {};
  var start = funs.reduce(function (prev, curr) {
    return curr.bind(ctx, prev);
    //return ctx._bindFunc(curr, ctx, [prev]);
  }, noop);

  start();
  console.log('start', start);
}

sequence(seq, ctx);