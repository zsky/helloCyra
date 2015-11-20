import  Cyra  from 'cyra';

import debuger from 'debug';

const debug = debuger('hello:result');

function setPrice (price) {
    debug('setPrice', price);
    this.data.price = price;
}

export default Cyra.definePage({

    id: 'result',

    initialize: function (next) {
        debug('initialize');
        next();
    },
    willAppear: function (next) {
        debug('willAppear');
        this.container.innerHTML = this.transferData.gift + ':' + this.data.price;
        next();
    },
    didAppear: function (next) {
        debug('didAppear');
        next();
    },

    willDisappear: function (next) {
        debug('willDisappear');
        next();
    },

    setPrice: function (price) {
        debug('setPrice');
        this.data.price = price;
    },

    methods: { setPrice }

});


