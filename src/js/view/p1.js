import  Cyra  from 'cyra';

export default Cyra.definePage({

    id: 'p1',

    defineActions: () => {
        console.log('defineActions', this);
        this.log('defineActions', this);
        let pageId = this.id;
        this.gotTo2 = Cyra.defineAction('gotTo2', pageId, 'p2');
    },

    prepareForAction: (action, destinationPagePerform) => {
        destinationPagePerform('setList', [1, 8]);
    },

    initialize: (next) => {
        console.log('initialize', this, next);
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

