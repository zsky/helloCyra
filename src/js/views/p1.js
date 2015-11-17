import Cyra from '../lib/cyra/index.js';

function initialize (next) {
    this.log('initialize');
    next('xhh');
}

function willAppear (next, mm) {
    this.log('willAppear');
    //this.gotoPage('/p2', mm);
    this.log('after p2');
    self = this;
    setTimeout(function () {
        console.log('lo', mm);
        self.performAction('a1', {mm: 'hs&xhh'});
    })
}

function didAppear (next) {
    this.log('didAppear');
    next();
}

function willDisappear (next) {
    this.log('willDisappear');
    next();
}


const p1 = new Cyra.Page({
    id: 'p1',  // element id
    seq: { initialize, willAppear, didAppear, willDisappear }
})

export default p1;