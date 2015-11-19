import Cyra from 'cyra';

// pages
import p1 from '../view/p1';
import p2 from '../view/p2';


// routes
Cyra.defineRoute('/p1', p1);
Cyra.defineRoute('/p2', p2);

Cyra.initApp({
    root: 'body',
    default: '/p1'
});