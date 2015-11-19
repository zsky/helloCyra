import Cyra from 'cyra';

// pages
import home from '../view/home';
import result from '../view/result';


// routes
Cyra.defineRoute('home', home);
Cyra.defineRoute('result', result);

Cyra.initApp({
    root: 'body',
    default: 'home'
});