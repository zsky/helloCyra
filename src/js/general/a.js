let log = window.console.log.bind(window.console);

import './b';
log('a1'); //5
import conf from './c';
log('a2', conf);  //6. mb
conf.m = 'a';
log('a3', conf); //7. ma

export default {
    a: 1
}