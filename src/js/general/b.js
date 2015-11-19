let log = window.console.log.bind(window.console);

import a from './a';
log('b1', a);  //1. undefined
import conf from './c';
log('b2', conf); //3. mc
conf.m = 'b';
log('b3', conf); //4. mb

export default {
    b: 1
}
