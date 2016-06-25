const koa = require('koa');
const route = require('koa-route');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');

const config = require('./config');
const User = require('./models/user');
const Order = require('./models/order');
const UserSchema = require('./schemas/user');

const app = koa();

// Custom request
app.use(route.get('/custom', function *() {
    yield User.findAll().then((users) => {
        if (users) {
            this.status = 200;
            this.body = users;
        } else {
            next();
        }
    });
}));

// Mount graphQL middleware
app.use(mount('/user', graphqlHTTP({
    schema: UserSchema,
    graphiql: false
})));

app.use(function *() {
    this.status = 404;
    this.body = {success: false, message: 'Page not found!', status:404};
});

app.listen(config.port);
console.log(`Start server on port ${config.port}`);