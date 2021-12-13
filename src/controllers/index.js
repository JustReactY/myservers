var fn_index = async (ctx, next) => {
    console.log(ctx.query)
    ctx.body = {
        code: 0
    };
};

var fn_signin = async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = {
        code: 0
    }
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};