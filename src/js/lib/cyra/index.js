import Route from './Route';
import Action from './Action';
import Page from './Page';

// help functions
function getHash () {
    return window.location.hash.slice(1);
}

function startRouting (ctx) {

    function routing () {
        let hash = getHash();
        console.log('hashchange', hash);
        let matchedRoute = ctx.routes.find((route) => {
            if(route.path === hash) return true;
            else return false;
        });

        let currPage = ctx.currentRoute && ctx.currentRoute.page;
        let nextPage = matchedRoute && matchedRoute.page;

        currPage && currPage.leaving();
        if(currPage && nextPage) {
            let prepareActions = currPage.prepareActions || [];
            let matchedActions = prepareActions.filter((action) => {
                return (action.pageId === nextPage.id);
            })
            nextPage.lastPage = currPage;
            nextPage.callMethods(matchedActions);
        }

        ctx.currentRoute = matchedRoute;

        let data = ctx._transferData;
        ctx._transferData = null;
        nextPage && nextPage.entering(data);

    }

    window.addEventListener('hashchange', function (e) {
        routing();
    });

    routing();
}


// methods

function defineRoute (path, page) {
    this.log('defineRoute');

    page.ctx = this.ctx;

    this.ctx.pages[page.id] = page;
    let route = new Route({ path, page });
    //page.route = route;
    this.ctx.routes.push(route);
}


function initApp (obj) {
    this.log('initApp');
    this.ctx.root = obj.root || 'body';
    this.ctx.rootElement = document.querySelector(this.ctx.root);
    this.ctx.default = obj.default;

    startRouting(this.ctx);

    if(!getHash() && this.ctx.default){
        window.location.hash = this.ctx.default;
    }

}

function getCurrPage () {
    return this.ctx.currentRoute && this.ctx.currentRoute.page;
}

function destroyPage (page) {
    page.destroy();
    delete this.ctx.pages[page.id];
    for(let i = this.routes.length - 1; i > 0; i--) {
        let route = this.routes[i];
        if(route[i].page === page) this.routes.splice(i, 1);
    }
}


const Cyra = {

    log: function(...args) {
      console.log.apply(console, ['Cyra:'].concat(args));
    },

    Route: Route,
    Action: Action,
    Page: Page,

    ctx: {  // root, rootElement, default, currentRoute
        pages: {},
        routes: [],
        actions: [],
        enterSeq: ['createElement', 'initialize', 'willAppear', 'appearing', 'didAppear'],
        leaveSeq: ['willDisappear', 'disappearing', 'xhhohmygodwolegque']
    },

    defineRoute: defineRoute,
    initApp: initApp,

    getCurrPage: getCurrPage,
    destroyPage: destroyPage

}


export default Cyra;

