class Route {

  log(...args) {
    console.log.apply(console, ['Route::', this.path, ':'].concat(args));
  }

  constructor(obj) {
    this.path = obj.path;
    this.page = obj.page;
    this.log('constructed');
  }

}

export default Route;
