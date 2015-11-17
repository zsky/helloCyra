class Action {

  log(...args) {
    console.log.apply(console, ['Action::', this.id, ':'].concat(args));
  }

  constructor(id, fromPage, toPage) {
    this.id = id;
    this.fromPage = fromPage;
    this.toPage = toPage;
    this.log('constructed');
  }

}

export default Action;
