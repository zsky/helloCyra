import  Cyra  from 'cyra';

export default Cyra.definePage({

    id: 'p2',

    defineActions: () => {
        let pageId = this.id;
        this.gotTo1 = Cyra.defineAction('gotTo1', pageId, 'p1');
    },

    initialize: (next) => {
        this.log('initialize');
        next('pass on');
    },
    willAppear: (next) => {
        this.log('willAppear');
        next();
    },
    didAppear: (next) => {
        this.log('didAppear');
        next();
    },

    willDisappear: (next) => {
        this.log('willDisappear');
        next();
    }

});

