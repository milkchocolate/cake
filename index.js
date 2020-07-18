const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.accepts('application/json');
  ctx.body = ctx.headers;
});

app.listen(8080);