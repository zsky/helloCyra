import  Cyra  from 'cyra';

import tpl from '../../tpl/result';

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
        let data = {
            name: this.transferData.gift,
            price: this.data.price
        };
        this.container.innerHTML = tpl(data);
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


