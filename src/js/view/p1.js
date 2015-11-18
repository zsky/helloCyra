

import  Cyra  from 'cyra';
function initialize (next) {
    // define actions
    //this.gotoP2Action = Cyra.defineAction('a1', p1, p2);

    //Cyra.performAction(this.gotoP2Action)
    this.log('initialize');
    next('xhh');
}

function willAppear (next) {
    this.log('willAppear');
    //this.gotoPage('/p2', mm);
    this.log('after p2');
    let self = this;
    setTimeout(function () {
        //console.log('lo', mm);
        self.performAction('a1', {mm: 'hs&xhh'});
    }, 300);
    let a = 3;
    if(a === 1) {
        next();
    }
}

function didAppear (next) {   //
    this.log('didAppear');
    next();
}

function willDisappear (next) {
    this.log('willDisappear');
    next();
}


const p1 = new Page({
    id: 'p1',  // element id
    seq: { initialize, willAppear, didAppear, willDisappear }
});

export default p1;



Cyra.definePage({
    id: 'xx',
    initialize,
    didAppear,
    willDisappear
})







export default Cyra.createPage({

});



































