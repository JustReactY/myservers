var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.body = {
        code: 0,
        data: [1, 2, 3]
    };
};

module.exports = {
    'GET /hello/:name': fn_hello
};