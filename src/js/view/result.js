import  Cyra  from 'cyra';

import debuger from 'debug';

const debug = debuger('hello:result');


export default Cyra.definePage({

    id: 'result',

    defineActions: function () {
        debug('defineActions');
        let pageId = this.id;
        this.actionGotoHome = Cyra.defineAction(pageId, 'home');
    },

    initialize: function (next) {
        debug('initialize', this.transferData);
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

    setData: function (price, city) {
        debug('setData');
        this.data.price = price;
        this.data.city = city;
    },


});


