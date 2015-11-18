import Cyra from 'cyra';
window.console.log('cyra', Cyra);

// pages
import p1 from '../view/p1';
import p2 from '../view/p2';


// routes
Cyra.defineRoute('/p1', p1);
Cyra.defineRoute('/p2', p2);

// actions
// this.gotoP2Action = Cyra.defineAction('a1', p1, p2);

// Cyra.performAction(this.gotoP2Action);

Cyra.defineAction('a1', p1, p2);

Cyra.initApp({
    root: 'body',
    default: '/p1'
});