import  Cyra  from 'cyra';

function setPrice (price) {
    this.data.price = price;
}

export default Cyra.definePage({

    id: 'result',

    initialize: function (next) {
        this.log('initialize');
        next();
    },
    willAppear: function (next) {
        this.log('willAppear');
        this.container.innerHTML = this.transferData.gift + ':' + this.data.price;
        next();
    },
    didAppear: function (next) {
        this.log('didAppear');
        next();
    },

    willDisappear: function (next) {
        this.log('willDisappear');
        next();
    },

    setPrice: function (price) {
        this.log('setPrice');
        this.data.price = price;
    },

    methods: { setPrice }

});


