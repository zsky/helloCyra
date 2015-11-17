import Cyra from '../lib/cyra';

function initialize (next) {
    this.log('initialize');
    next('xhh');
}

function willAppear (next, mm) {
    this.log('willAppear');
    //this.gotoPage('/p2', mm);
    this.log('after p2');
    setTimeout(function () {
        console.log('love', mm);
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

function help (data) {
    console.log('say hi', data);
}


const p1 = new Cyra.Page({
    id: 'p1',  // element id
    seq: { initialize, willAppear, didAppear, willDisappear },
    methods: { help },
    prepareActions: [
        {
            pageId: 'p2',
            methodName: 'setList',
            data: [1, 2, 3]
        }

    ]
})

export default p1;