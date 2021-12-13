const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
const cors = require('koa2-cors');
// 导入controller middleware:
const controller = require('./controller');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(cors({
    origin: function (ctx) {
        return '*'
       /*  if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        }
        return 'http://localhost:8080'; */
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(bodyParser());
// 使用middleware:
app.use(controller());
// add router middleware:
app.use(router.routes());


app.listen(3000);
console.log('app started at port 3000...');