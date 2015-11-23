import Cyra from 'cyra';

import debuger from 'debug';

const debug = debuger('hello:routes');


// base css
import '../../style/transition.less';

// pages
import home from '../view/home';
import result from '../view/result';


// routes
Cyra.defineRoute('home', home);
Cyra.defineRoute('result', result);


Cyra.initApp({
    root: 'body',
    default: 'home',
    pageTransition: {
        fromPageDisappear: function (next) {
            debug('fromPageDisappear');
            next();
        },
        toPageAppear: function (next) {
            debug('toPageAppear');
            this.container.style.display = 'block';
            this.container.className = 'fadeIn';
            next(true);
        }
    }
});
