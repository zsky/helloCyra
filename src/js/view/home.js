import  Cyra  from 'cyra';

import '../../style/home.less';
import tpl from '../../tpl/home';

import debuger from 'debug';

const debug = debuger('hello:home');


function ajaxData (cb) {
    let mockData = { name: '抽奖'};
    setTimeout(() => {
        cb(mockData);
    }, 500)
}

export default Cyra.definePage({

    id: 'home',
    // 定义跳转动作
    defineActions: function () {
        debug('defineActions');
        let pageId = this.id;
        this.gotoResult = Cyra.defineAction('gotoResult', pageId, 'result');
    },
    // 执行跳转动作前（performAction)会执行
    prepareForAction: function (action, destinationPagePerform) {
        debug('prepareForAction');
        destinationPagePerform('setPrice', 5600);
    },

    initialize: function (next) {
        debug('initialize');
        ajaxData((data) => {
            next(data);
        })
    },
    willAppear: function (next, data) {
        debug('willAppear');
        this.container.innerHTML = tpl(data);

        let btn = document.querySelector('.btn');

        btn.addEventListener("click", () => {
            this.performAction(this.gotoResult, {gift: 'iphone'});
        });
        next();
    },
    didAppear: function (next) {
        debug('didAppear');
        next();
    },

    willDisappear: function (next) {
        debug('willDisappear');
        next();
    }

});

