import Cyra from '../lib/cyra';

function initialize (next) {
    this.log('initialize');
    next('xhh');
}

function willAppear (next, mm) {
    this.log('willAppear');
    setTimeout(function () {
        console.log('oh kiss', mm);
        next();
    })
}

function didAppear (next) {
    this.log('didAppear');
    if(this.lastPage) this.lastPage.callMethods([{ methodName: 'help', data: 'okk' }])
    next();
}

function willDisappear (next) {
    this.log('willDisappear');
    next();
}


// apis
function setList (list) {
    this.log('setList', list);
}


const p2 = new Cyra.Page({
    id: 'p2',
    seq: { initialize, willAppear, didAppear, willDisappear },
    methods: { setList }
})

export default p2;