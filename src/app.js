const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
const cors = require('koa2-cors');
// 导入controller middleware:
const controller = require('./controller');
const koaBody = require('koa-body');
const path = require("path")

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

/* app.use(koaBody({
    multipart: true, // 支持文件上传
    encoding: 'gzip',
    formidable: {
        uploadDir: path.join(__dirname, 'public/images/'), // 设置文件上传目录
        keepExtensions: true,    // 保持文件的后缀
        maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
        onFileBegin: (name, file) => { // 文件上传前的设置
            console.log(`name: ${name}`);
            console.log(file);
        },
    }
})); */
app.use(koaBody({
    multipart: true,
}));
// 使用middleware:
app.use(controller());
// add router middleware:
app.use(router.routes());


app.listen(3000);
console.log('app started at port 3000...');