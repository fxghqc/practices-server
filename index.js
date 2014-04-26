/**
 * Module dependencies.
 */

var logger = require('koa-logger');
var route = require('koa-route');
var koa = require('koa');
var app = koa();

// "database"
var posts = [];

// middleware
app.use(logger());

// route middleware
app.use(route.get('/:owner', getOwner));
app.use(route.post('/:owner', createOwner));
app.use(route.get('/:owner/:name', getStuff));
app.use(route.post('/:owner/:name', createStuff));

/**
 * Get info of owner.
 */
function *getOwner(owner) {
  owner = decodeURI(owner);
  var res = yield {hello: owner};
  this.body = res;
}

/**
 * Create a owner.
 */
function *createOwner(owner) {
  title = decodeURI(title);
  var res = yield books.find({title: title});
  this.body = res;
}


/**
 * Get info of stuff.
 */
function *getStuff(owner) {
  owner = decodeURI(owner);
  var res = yield {hello: "xxxxx"};
  this.body = res;
}

/**
 * Create a stuff.
 */
function *createStuff(owner) {
  title = decodeURI(title);
  var res = yield books.find({title: title});
  this.body = res;
}

// listen
app.listen(3000);
console.log('listening on port 3000');