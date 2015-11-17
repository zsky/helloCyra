import Cyra from '../lib/cyra';

// pages
import p1 from '../views/p1';
import p2 from '../views/p2';


Cyra.defineRoute('/p1', p1);
Cyra.defineRoute('/p2', p2);

Cyra.initApp({
    root: 'body',
    default: '/p1'
});