import '../style/demo.less';

import demo from '../tpl/demo';

import '../js/general/a.js';

console.log('in demo');

document.body.innerHTML = demo('Hello World!');