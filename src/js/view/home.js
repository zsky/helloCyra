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
        this.actionGotoResult = Cyra.defineAction(pageId, 'result');
    },
    // 执行跳转动作前（performAction)会执行
    prepareForAction: function (action, destinationPagePerform) {
        debug('prepareForAction');
        destinationPagePerform('setData', 5600, 'HK');
    },

    initialize: function (next) {
        debug('initialize', this._models.actions);
        ajaxData((data) => {
            next(data);
        })
    },
    willAppear: function (next, data) {
        debug('willAppear');
        this.container.innerHTML = tpl(data);

        let btn = document.querySelector('.btn');

        btn.addEventListener("click", () => {
            this.performAction(this.actionGotoResult, {gift: 'iphone', free: true, number: 4});
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

