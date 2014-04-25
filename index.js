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
app.use(route.post('/:owner?type=:type', createOwner));
app.use(route.get('/:owner/:name', showStuff));
app.use(route.post('/:owner/:name?type=type', addStuff));

/**
 * Show post :id.
 */
function *getOwner(owner) {
  owner = decodeURI(owner);
  var res = yield books.find({});
  this.body = res;
}

/**
 * Create a post.
 */
function *createOwner(owner) {
  title = decodeURI(title);
  var res = yield books.find({title: title});
  this.body = res;
}

// listen
app.listen(3000);
console.log('listening on port 3000');