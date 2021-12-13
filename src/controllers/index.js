const ModelDb = require('../db/user')

var fn_login = async (ctx, next) => {
    const { username, password } = ctx.request.body
    let data = await ModelDb.query({username})
    ctx.body = {
        code: 0,
        data
    }
};

var fn_add = async (ctx, next) => {
    const { username, password } = ctx.request.body
    let data = await ModelDb.save({
        username,
        password
    })
    ctx.body = {
        code: 0,
        data
    }
};

module.exports = {
    'POST /login': fn_login,
    'POST /add_user': fn_add
};