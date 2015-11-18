import '../style/demo.less';

import demo from '../tpl/demo';

import test from './test';
import conf from './conf';
console.log('in demo');

document.body.innerHTML = demo('Hello World!');